/**
 * 增量翻译：读 data/segments.json，把 data/zh.json 缺的分段翻齐。
 *
 * 设计要点（沿用 prompts-chat-zh 的经验）：
 *   · 缓存以内容指纹为键——上游改一个字只重翻那一条，链接变了不触发重翻。
 *   · entry 批量走 JSON 数组返回：一条请求同时拿到「中文描述 + 大陆可用性分级」。
 *   · text/heading/toc 走「n| 译文」逐行返回，校验行数与编号，不合格整批打回单条重试。
 *   · 每 25 条落盘一次，中断了也能接着跑。
 *   · 宁可标 unknown 也不让模型在可用性上瞎猜；失败的条目不写缓存，下轮自动补。
 *
 * 用法：
 *   node scripts/translate.mjs --stats            只看缺口
 *   node scripts/translate.mjs --limit=50         只翻 50 条（先看质量）
 *   node scripts/translate.mjs --concurrency=6
 */
import './lib/env.mjs';
import { readFile, writeFile, rename } from 'node:fs/promises';
import { chat, assertKey, createLimiter, formatUsage, MODEL } from './lib/llm.mjs';

const SEGMENTS = 'data/segments.json';
const CACHE = 'data/zh.json';
const CHECKPOINT_EVERY = 25;

const ACCESS = new Set(['direct', 'partial', 'blocked', 'unknown']);

const ENTRY_SYS = `你是开发者服务清单的本地化专家。输入若干条「编号|英文描述」。对每一条产出：简体中文描述 + 该服务在中国大陆的可用性分级。

只输出一个 JSON 数组，不要任何解释或代码围栏：
[{"n":1,"zh":"……","access":"direct"},{"n":2,…}]

zh 的要求：
- 简体中文；产品名、模型名不译；DNS、SSO、CI/CD、SaaS 等术语保留英文
- 原文里的 URL 与行内链接 [文字](地址) 原样保留（链接文字可译）
- 免费额度的数字、单位、时限原样保留，语气平实像工具书

access 的要求（判断该服务在中国大陆网络环境下的可用性，综合注册与日常使用）：
- direct：网站、注册与日常使用在大陆均可直连（如 Cloudflare、DNSPod、freedns 类服务）
- partial：网站大体可访问但有实际门槛：需要国际信用卡、需要 Google/Microsoft 账号登录、控制台或文档部分资源直连不稳（AWS、Azure、GCP 基本都属此类）
- blocked：域名被屏蔽、明确封锁大陆 IP、或不挂代理基本无法使用（如 Google 自家多数产品、部分海外 AI API）
- unknown：确实不了解的小众服务才标。Google、AWS、Azure、Cloudflare、Datadog、GitHub 这类知名服务必须给出分级，不许标 unknown`;

const TEXT_SYS = `你是技术文档本地化专家。输入若干行「编号|英文」，把每行译成简体中文，按「编号|译文」逐行输出。

铁律：
1. 输出行数与输入一致，编号一一对应，绝不能合并或丢行
2. 保留 markdown 结构：行内链接 [文字](地址)、粗体、代码标记
3. URL、命令、产品名不译；DNS、CDN、SaaS 等术语保留英文
4. 分类标题要自然，如「CDN and Protection」→「CDN 与防护」
5. 只输出译文行，不要解释`;

function parseArgs(argv) {
  const out = { limit: 0, concurrency: 6, entryBatch: 8, textBatch: 10, stats: false };
  for (const a of argv) {
    const m = a.match(/^--(\w[\w-]*)(?:=(.*))?$/);
    if (!m) continue;
    const [, k, v] = m;
    if (k === 'stats') out.stats = true;
    else if (k in out) out[k] = v === undefined ? true : Number(v);
  }
  return out;
}

async function loadJson(path, fallback) {
  try {
    return JSON.parse(await readFile(path, 'utf8'));
  } catch {
    return fallback;
  }
}

/** 从模型输出里抠出 JSON 数组（容忍代码围栏和前后杂讯）。 */
function extractJson(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const body = fenced ? fenced[1] : text;
  const start = body.indexOf('[');
  const end = body.lastIndexOf(']');
  if (start === -1 || end === -1) throw new Error('输出里没有 JSON 数组');
  return JSON.parse(body.slice(start, end + 1));
}

/** 判断一段文本是否有「可翻译内容」：剥掉链接和 URL 后只剩大写缩写/符号的，模型原样通过即算合格。 */
function hasTranslatable(text) {
  const bare = text
    .replace(/\[[^\]]*\]\([^)]*\)/g, '') // 行内链接
    .replace(/https?:\/\/\S+/g, '') // 裸 URL
    .replace(/\b[\w.-]+@[\w.-]+\.\w+\b/g, ''); // 邮箱
  return /[a-z]/.test(bare) || /[\u4e00-\u9fff]/.test(bare);
}

async function translateEntryBatch(batch, limiter) {
  const numbered = batch.map((it, idx) => `${idx + 1}| ${it.desc}`).join('\n');
  const raw = await chat(
    [
      { role: 'system', content: ENTRY_SYS },
      { role: 'user', content: numbered },
    ],
    // 推理模型的思考会吃掉大量输出预算：批次给足 token，超时放宽到 5 分钟
    { maxTokens: 24_000, timeoutMs: 300_000 },
  );
  const arr = extractJson(raw);
  const byN = new Map();
  for (const r of arr) {
    if (r && Number.isInteger(r.n)) byN.set(r.n, r);
  }
  const results = batch.map((it, idx) => {
    const r = byN.get(idx + 1);
    const zh = typeof r?.zh === 'string' ? r.zh.trim() : '';
    const access = ACCESS.has(r?.access) ? r.access : 'unknown';
    if (!zh || (zh === it.desc && hasTranslatable(it.desc))) throw new Error(`第 ${idx + 1} 条译文缺失或未翻译`);
    return { hash: it.hash, rec: { kind: 'entry', zh, access } };
  });
  return results;
}

async function translateTextBatch(batch, limiter) {
  const numbered = batch.map((it, idx) => `${idx + 1}| ${it.text}`).join('\n');
  const raw = await chat(
    [
      { role: 'system', content: TEXT_SYS },
      { role: 'user', content: numbered },
    ],
    { maxTokens: 16_000, timeoutMs: 300_000 },
  );
  const out = new Map();
  for (const line of raw.split('\n')) {
    const m = line.match(/^\s*(\d+)\s*\|\s?(.*)$/);
    if (m) out.set(Number(m[1]), m[2].trim());
  }
  return batch.map((it, idx) => {
    const zh = out.get(idx + 1);
    if (!zh || (zh === it.text && hasTranslatable(it.text))) throw new Error(`第 ${idx + 1} 行译文缺失或未翻译`);
    return { hash: it.hash, rec: { kind: it.kind, zh, access: null } };
  });
}

const args = parseArgs(process.argv.slice(2));
assertKey();

const seg = await loadJson(SEGMENTS, null);
if (!seg) {
  console.error('缺少 data/segments.json，先跑 node scripts/sync.mjs');
  process.exit(1);
}
const store = await loadJson(CACHE, { version: 1, cache: {} });
const cache = store.cache;

const pending = seg.items.filter(
  (it) =>
    it.hash &&
    !cache[it.hash] &&
    (it.kind === 'text' || it.kind === 'toc' || it.kind === 'heading' || (it.kind === 'entry' && it.desc)),
);

const pendingEntries = pending.filter((p) => p.kind === 'entry');
const pendingTexts = pending.filter((p) => p.kind !== 'entry');

if (args.stats) {
  console.log(`[stats] 缓存 ${Object.keys(cache).length} 条；待翻：entry ${pendingEntries.length}，text/toc/heading ${pendingTexts.length}`);
  process.exit(0);
}

const todo = [...pendingEntries, ...pendingTexts];
console.log(`[translate] 模型 ${MODEL}；待翻 ${todo.length} 条（entry ${pendingEntries.length}，其他 ${pendingTexts.length}）`);
if (!todo.length) process.exit(0);

const limited = args.limit > 0 ? todo.slice(0, args.limit) : todo;
const limiter = createLimiter(args.concurrency);
let done = 0;
let failed = 0;
let sinceCheckpoint = 0;

async function save() {
  const tmp = `${CACHE}.tmp`;
  await writeFile(tmp, JSON.stringify(store, null, 1));
  await rename(tmp, CACHE);
}

async function one(it) {
  const isEntry = it.kind === 'entry';
  try {
    const results = isEntry
      ? await translateEntryBatch([it], limiter)
      : await translateTextBatch([it], limiter);
    for (const r of results) cache[r.hash] = r.rec;
    done += 1;
  } catch (e) {
    failed += 1;
    process.stderr.write(`  ! ${isEntry ? it.name : it.text.slice(0, 40)} — ${String(e.message).slice(0, 100)}\n`);
  }
  sinceCheckpoint += 1;
  if (sinceCheckpoint >= CHECKPOINT_EVERY) {
    sinceCheckpoint = 0;
    await save();
  }
}

// 分批跑：entry 与 text 各自成批；批内校验失败自动降级为单条
async function runBatches(items, size, fn) {
  const groups = [];
  let cur = [];
  let curChars = 0;
  for (const it of items) {
    const len = (it.desc ?? it.text ?? '').length;
    if (cur.length && (cur.length >= size || curChars + len > 4000)) {
      groups.push(cur);
      cur = [];
      curChars = 0;
    }
    cur.push(it);
    curChars += len;
  }
  if (cur.length) groups.push(cur);

  await Promise.all(
    groups.map((g) =>
      limiter(async () => {
        try {
          const results = await fn(g);
          for (const r of results) cache[r.hash] = r.rec;
          done += g.length;
          console.log(`[progress] +${g.length}（累计 ${done}/${limited.length}，失败 ${failed}）`);
        } catch {
          // 整批不合格 → 降级单条重试
          for (const it of g) await one(it);
        }
        sinceCheckpoint += g.length;
        if (sinceCheckpoint >= CHECKPOINT_EVERY) {
          sinceCheckpoint = 0;
          await save();
        }
      }),
    ),
  );
}

await runBatches(pendingEntries.filter((p) => limited.includes(p)), args.entryBatch, translateEntryBatch);
await runBatches(pendingTexts.filter((p) => limited.includes(p)), args.textBatch, translateTextBatch);
await save();

const covered = Object.keys(cache).length;
console.log(`[translate] 完成 ${done}，失败 ${failed}，缓存总量 ${covered}`);
console.log(formatUsage());
process.exit(failed && done === 0 ? 1 : 0);
