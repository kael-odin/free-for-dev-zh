/**
 * 拼装中文版：上游快照 + 翻译缓存 + 人工覆盖，产出三类内容：
 *   1. README.zh.md + docs/README.zh.md —— 人类阅读的完整清单
 *   2. skills/free-for-dev/ —— agent skill 的数据切片（57 分类 + INDEX + meta）
 *
 * 原则：缺译文（还没翻到 / 翻失败）的行原样透传英文，绝不丢内容；
 * 覆盖率打在日志里，缺口由下轮 translate 补。
 *
 * 目录锚点不用自动 slug（GitHub 与 docsify 的 slug 规则有差异，中文必踩坑），
 * 而是在每个二级标题前插显式 <a id="sec-N">，目录直接链 #sec-N，两端一致。
 * skill 的分类文件名用「上游英文标题」的 slug——英文标题 11 年没大变过，
 * 比翻译后的中文标题稳定得多。
 *
 * 用法：node scripts/build.mjs
 */
import './lib/env.mjs';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { parse } from './lib/parse.mjs';

const SNAPSHOT = 'upstream/README.md';
const CACHE = 'data/zh.json';
const OVERRIDES = 'data/overrides.json';
const NOTES = 'data/category-notes.json';
const OUTS = ['README.zh.md', 'docs/README.zh.md'];
const SKILL_DIR = 'skills/free-for-dev';

const TITLE = '开发者免费资源大全 · free-for.dev 中文版';
const BADGE = { direct: '✅', partial: '🟡', blocked: '🔴', unknown: '❓' };

const ACCESS_DESC = {
  direct: '大陆网络可直连访问与注册',
  partial: '可访问，但注册或关键功能有门槛（国际信用卡、Google 登录、部分资源需代理等）',
  blocked: '明确限制或封锁大陆 IP，基本离不开代理',
  unknown: '未知，待标注',
};

function headerBlock(meta) {
  return `> [!IMPORTANT]
> **署名与免责声明**：本清单翻译自 [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev)（[free-for.dev](https://free-for.dev/)）。原始清单由原作者与 1600+ 贡献者编纂维护，版权归原作者所有；原仓库未声明开源许可证，本项目仅为便于中文读者查阅的非商业翻译镜像，如版权方有异议将按要求处理。本站与所列服务无任何关联，免费档信息以各官方页面为准，随时可能变动。

**上游同步**：${meta.fetchedAt ?? '—'} · 上游版本 \`${meta.upstreamSha ?? 'unknown'}\` · 每日自动同步

**「大陆可用性」标注**由 AI 辅助生成，仅供参考，欢迎提 PR 修正（编辑 \`data/overrides.json\`）：

| 标记 | 含义 |
|---|---|
| ✅ | ${ACCESS_DESC.direct} |
| 🟡 | ${ACCESS_DESC.partial} |
| 🔴 | ${ACCESS_DESC.blocked} |
| ❓ | ${ACCESS_DESC.unknown} |
`;
}

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

async function loadJson(path, fallback) {
  try {
    return JSON.parse(await readFile(path, 'utf8'));
  } catch {
    return fallback;
  }
}

const text = await readFile(SNAPSHOT, 'utf8');
const srcLines = text.split('\n');
const items = parse(srcLines);
const { cache = {} } = await loadJson(CACHE, { cache: {} });
const overrides = await loadJson(OVERRIDES, {});
const notes = await loadJson(NOTES, {});
const meta = await loadJson('data/meta.json', {});

const h2s = items.filter((it) => it.kind === 'heading' && it.level === 2);
const out = [];
const sections = new Map(); // order -> { slug, en, zh, lines, entries }
let curSec = -1;
let entryTotal = 0;
let entryTranslated = 0;
let textMissing = 0;

// 输出统一走 emit：完整清单和分类切片共享同一份渲染结果，永不走样
const emit = (line) => {
  out.push(line);
  if (curSec >= 0) sections.get(curSec).lines.push(line);
};

for (const it of items) {
  const line = srcLines[it.i] ?? '';
  switch (it.kind) {
    case 'title': {
      emit(`# ${TITLE}`);
      emit('');
      emit(headerBlock(meta));
      continue;
    }
    case 'toc-h': {
      emit('# 目录');
      continue;
    }
    case 'toc': {
      const target = h2s[it.order];
      const zh = cache[it.hash]?.zh ?? it.text;
      emit(`${it.indent ?? '  '}* [${zh}](#sec-${target?.order ?? it.order})`);
      continue;
    }
    case 'heading': {
      const zh = cache[it.hash]?.zh ?? it.text;
      if (it.level === 2) {
        curSec = it.order;
        sections.set(curSec, { slug: slugify(it.text), en: it.text, zh, lines: [], entries: 0 });
        // 锚点与标题行只进完整清单；切片文件有自己的 h1，不重复
        out.push(`<a id="sec-${it.order}"></a>`);
        out.push(`## ${zh}`);
        continue;
      }
      emit(`${'#'.repeat(it.level)} ${zh}`);
      continue;
    }
    case 'entry': {
      entryTotal += 1;
      const rec = cache[it.hash];
      const ov = overrides[it.name];
      const zhDesc = ov?.desc ?? rec?.zh ?? (it.desc ? null : '');
      if (zhDesc) entryTranslated += 1;
      const access = ov?.access ?? rec?.access ?? 'unknown';
      const badge = BADGE[access] ?? BADGE.unknown;
      const body = zhDesc ?? it.desc;
      emit(`${it.indent}* [${it.name}](${it.url})${body ? ` - ${body}` : ''} ${badge}`);
      if (curSec >= 0) sections.get(curSec).entries += 1;
      continue;
    }
    case 'text': {
      const zh = cache[it.hash]?.zh;
      if (zh === undefined) textMissing += 1;
      emit(`${it.indent ?? ''}${it.indent ? '- ' : ''}${zh ?? it.text}`);
      continue;
    }
    default:
      emit(line);
  }
}

const md = out.join('\n');
for (const p of OUTS) {
  await writeFile(p, md, 'utf8');
}

// ---- skill 数据切片 ----
await rm(`${SKILL_DIR}/data/by-category`, { recursive: true, force: true });
await mkdir(`${SKILL_DIR}/data/by-category`, { recursive: true });

const rows = [];
for (const [, sec] of sections) {
  const file = `${sec.slug}.md`;
  const body = `# ${sec.zh}（${sec.entries} 条服务）\n\n${sec.lines.join('\n')}\n`;
  await writeFile(`${SKILL_DIR}/data/by-category/${file}`, body, 'utf8');
  rows.push(`| [${file}](${file.replace('.md', '')}) | ${sec.zh} | ${sec.entries} | ${notes[sec.slug] ?? ''} |`);
}

const indexMd = `# free-for.dev 分类索引

> 数据日期：${(meta.fetchedAt ?? '').slice(0, 10) || '—'} · 共 ${entryTotal} 条服务、${sections.size} 个分类
> 在线版：https://kael-odin.github.io/free-for-dev-zh/

按用户需求定位分类，再读 \`data/by-category/<文件>\`（每个文件含该分类全部条目）。
需求跨类时（如「能部署 + 有数据库」）可同时读多个分类文件。

| 文件 | 分类 | 条目 | 选用说明 |
|---|---|---|---|
${rows.join('\n')}

可用性标记：✅ 直连可用 · 🟡 有门槛 · 🔴 封锁大陆 IP · ❓ 未知（含义详见 SKILL.md）
`;
await writeFile(`${SKILL_DIR}/INDEX.md`, indexMd, 'utf8');

await writeFile(
  `${SKILL_DIR}/data/meta.json`,
  JSON.stringify(
    {
      dataDate: (meta.fetchedAt ?? '').slice(0, 10) || null,
      upstreamSha: meta.upstreamSha ?? null,
      entries: entryTotal,
      categories: sections.size,
      site: 'https://kael-odin.github.io/free-for-dev-zh/',
      repo: 'https://github.com/kael-odin/free-for-dev-zh',
    },
    null,
    2,
  ),
);

const pct = entryTotal ? ((entryTranslated / entryTotal) * 100).toFixed(1) : '0';
console.log(
  `[build] 条目 ${entryTotal} 条，译文覆盖 ${entryTranslated}（${pct}%）；未翻译普通文本行 ${textMissing}；skill 切片 ${sections.size} 类`,
);
if (pct < 50) {
  console.warn('[build] 覆盖率过低，先跑 translate 再来');
}
