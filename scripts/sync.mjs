/**
 * 拉取上游 README 快照并解析成分段清单。
 *
 * 为什么不走 git merge：我们从不修改上游文件，快照整体替换即可，
 * 仓库里所有自有文件与上游零交集，天然零冲突。
 *
 * 抓取顺序：raw.githubusercontent → jsdelivr 镜像 → gh api（认证接口兜底）。
 * 内容校验通过后才落盘，坏响应不会污染快照。
 *
 * 用法：node scripts/sync.mjs
 */
import './lib/env.mjs';
import { readFile, writeFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createHash } from 'node:crypto';
import { parse, sha } from './lib/parse.mjs';

const execFileP = promisify(execFile);
const SNAPSHOT = 'upstream/README.md';
const SEGMENTS = 'data/segments.json';
const META = 'data/meta.json';
const UPSTREAM_REPO = 'ripienaar/free-for-dev';

const SOURCES = [
  { name: 'raw.githubusercontent', url: `https://raw.githubusercontent.com/${UPSTREAM_REPO}/master/README.md` },
  { name: 'jsdelivr', url: `https://cdn.jsdelivr.net/gh/${UPSTREAM_REPO}@master/README.md` },
];

function looksValid(text) {
  return text.startsWith('# free-for.dev') && text.length > 100_000;
}

async function ghApi(args) {
  const { stdout } = await execFileP('gh', ['api', ...args], { timeout: 60_000, maxBuffer: 64 * 1024 * 1024 });
  return stdout;
}

async function fetchUpstream() {
  for (const s of SOURCES) {
    try {
      const res = await fetch(s.url, { redirect: 'follow', signal: AbortSignal.timeout(60_000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      if (!looksValid(text)) throw new Error(`内容校验失败（${text.length} bytes）`);
      console.log(`[sync] 来源 ${s.name}，${text.length} bytes`);
      return text;
    } catch (e) {
      console.warn(`[sync] ${s.name} 失败：${String(e.message).slice(0, 120)}`);
    }
  }
  // 最后兜底：gh api 拉取 base64 内容
  const b64 = await ghApi(['repos', UPSTREAM_REPO, 'contents', 'README.md', '--jq', '.content']);
  const text = Buffer.from(b64.replace(/\s/g, ''), 'base64').toString('utf8');
  if (!looksValid(text)) throw new Error('gh api 内容校验失败');
  console.log(`[sync] 来源 gh api，${text.length} bytes`);
  return text;
}

async function upstreamSha() {
  try {
    return (await ghApi(['repos', `${UPSTREAM_REPO}/commits/master`, '--jq', '.sha'])).trim().slice(0, 12);
  } catch {
    return null;
  }
}

const text = await fetchUpstream();
const old = await readFile(SNAPSHOT, 'utf8').catch(() => null);
const changed = old !== text;

const lines = text.split('\n');
const items = parse(lines);
const stats = {};
for (const it of items) stats[it.kind] = (stats[it.kind] ?? 0) + 1;

if (changed || !old) {
  await writeFile(SNAPSHOT, text, 'utf8');
  console.log(`[sync] 快照已更新（${lines.length} 行）`);
} else {
  console.log('[sync] 上游无变化');
}

await writeFile(
  SEGMENTS,
  JSON.stringify({ generatedAt: new Date().toISOString(), fileSha: sha(text), lines: lines.length, items }, null, 1),
);

const prevMeta = JSON.parse(await readFile(META, 'utf8').catch(() => '{}'));
await writeFile(META, JSON.stringify({ ...prevMeta, fetchedAt: new Date().toISOString(), upstreamSha: await upstreamSha() }, null, 2));

console.log(`[sync] 分段统计：${JSON.stringify(stats)}`);
if ((stats.entry ?? 0) < 1000) {
  console.error('[sync] 条目数异常偏少，解析器或上游结构可能变了');
  process.exit(1);
}
