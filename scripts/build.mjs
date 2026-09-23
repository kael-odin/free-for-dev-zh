/**
 * 拼装中文版：上游快照 + 翻译缓存 + 人工覆盖 → README.zh.md + docs/README.zh.md。
 *
 * 原则：缺译文（还没翻到 / 翻失败）的行原样透传英文，绝不丢内容；
 * 覆盖率打在日志里，缺口由下轮 translate 补。
 *
 * 目录锚点不用自动 slug（GitHub 与 docsify 的 slug 规则有差异，中文必踩坑），
 * 而是在每个二级标题前插显式 <a id="sec-N">，目录直接链 #sec-N，两端一致。
 *
 * 用法：node scripts/build.mjs
 */
import './lib/env.mjs';
import { readFile, writeFile } from 'node:fs/promises';
import { parse } from './lib/parse.mjs';

const SNAPSHOT = 'upstream/README.md';
const CACHE = 'data/zh.json';
const OVERRIDES = 'data/overrides.json';
const OUTS = ['README.zh.md', 'docs/README.zh.md'];

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
const meta = await loadJson('data/meta.json', {});

const h2s = items.filter((it) => it.kind === 'heading' && it.level === 2);
const out = [];
let entryTotal = 0;
let entryTranslated = 0;
let textMissing = 0;

for (const it of items) {
  const line = srcLines[it.i] ?? '';
  switch (it.kind) {
    case 'title': {
      out.push(`# ${TITLE}`, '');
      out.push(headerBlock(meta));
      continue;
    }
    case 'toc-h': {
      out.push('# 目录');
      continue;
    }
    case 'toc': {
      const target = h2s[it.order];
      const zh = cache[it.hash]?.zh ?? it.text;
      out.push(`${it.indent ?? '  '}* [${zh}](#sec-${target?.order ?? it.order})`);
      continue;
    }
    case 'heading': {
      const zh = cache[it.hash]?.zh ?? it.text;
      if (it.level === 2) out.push(`<a id="sec-${it.order}"></a>`);
      out.push(`${'#'.repeat(it.level)} ${zh}`);
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
      out.push(`${it.indent}* [${it.name}](${it.url})${body ? ` - ${body}` : ''} ${badge}`);
      continue;
    }
    case 'text': {
      const zh = cache[it.hash]?.zh;
      if (zh === undefined) textMissing += 1;
      out.push(`${it.indent ?? ''}${it.indent ? '- ' : ''}${zh ?? it.text}`);
      continue;
    }
    default:
      out.push(line);
  }
}

const md = out.join('\n');
for (const p of OUTS) {
  await writeFile(p, md, 'utf8');
}

const pct = entryTotal ? ((entryTranslated / entryTotal) * 100).toFixed(1) : '0';
console.log(`[build] 条目 ${entryTotal} 条，译文覆盖 ${entryTranslated}（${pct}%）；未翻译普通文本行 ${textMissing}`);
if (pct < 50) {
  console.warn('[build] 覆盖率过低，先跑 translate 再来');
}
