/**
 * 上游 README 的行级解析器。整个同步管线的地基：
 * sync 用它生成待翻译分段，build 用它把译文拼回中文版。
 *
 * 行分类：
 *   title   —— 文件第一个 h1（# free-for.dev）
 *   toc-h   —— 「# Table of Contents」标题行
 *   toc     —— 目录区条目行（链接指向 # 锚点）
 *   heading —— 二级分类标题（## DNS 之类）
 *   entry   —— 服务条目行（行内第一个链接指向 http(s)）
 *   text    —— 其他需要翻译的行（段落、引用块、无链接的嵌套行）
 *   raw     —— 原样透传（空行、徽章图片、纯 HTML、分隔线）
 *
 * 缓存指纹（hash）只取「会被翻译的那部分文本」：
 * 条目行只对描述部分做哈希——上游改链接不改描述时不触发重翻；
 * 标题/目录行对标题文字做哈希；text 行对整行做哈希。
 */
import { createHash } from 'node:crypto';

const RE_BULLET = /^(\s*)[*-]\s+(.+)$/;
const RE_LINK = /\[([^\]]*)\]\(([^)\s]+)\)/;

export function sha(s) {
  return createHash('sha256').update(s, 'utf8').digest('hex').slice(0, 16);
}

export function parse(lines) {
  const items = [];
  let seenH1 = false;
  let inToc = false;
  let tocOrder = 0;
  let headingOrder = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/\r$/, '');
    if (!line.trim()) {
      items.push({ i, kind: 'raw' });
      continue;
    }

    if (/^#\s/.test(line)) {
      const text = line.replace(/^#\s+/, '').trim();
      if (!seenH1) {
        seenH1 = true;
        items.push({ i, kind: 'title', text, hash: sha(text) });
      } else if (/^Table of Contents$/i.test(text)) {
        inToc = true;
        items.push({ i, kind: 'toc-h', text, hash: sha(text) });
      } else {
        inToc = false;
        items.push({ i, kind: 'heading', level: 1, order: headingOrder++, text, hash: sha(text) });
      }
      continue;
    }

    if (/^##\s/.test(line)) {
      inToc = false;
      const text = line.replace(/^##\s+/, '').trim();
      items.push({ i, kind: 'heading', level: 2, order: headingOrder++, text, hash: sha(text) });
      continue;
    }

    if (/^#{3,}\s/.test(line)) {
      inToc = false;
      const text = line.replace(/^#+\s+/, '').trim();
      items.push({ i, kind: 'heading', level: 3, text, hash: sha(text) });
      continue;
    }

    const bm = line.match(RE_BULLET);
    if (bm) {
      if (inToc) {
        const lm = bm[2].match(RE_LINK);
        const text = (lm ? lm[1] : bm[2]).trim();
        items.push({ i, kind: 'toc', order: tocOrder++, indent: bm[1], text, hash: sha(text) });
        continue;
      }
      const lm = bm[2].match(RE_LINK);
      if (lm && /^https?:/i.test(lm[2])) {
        let desc = bm[2].slice(lm[0].length);
        desc = desc.replace(/^\s*[-–—:：]\s*/, '').replace(/^\s+/, '').trimEnd();
        items.push({
          i,
          kind: 'entry',
          indent: bm[1],
          name: lm[1].trim(),
          url: lm[2],
          desc,
          hash: sha(desc.trim()),
        });
      } else {
        items.push({ i, kind: 'text', indent: bm[1], text: bm[2].trim(), hash: sha(bm[2].trim()) });
      }
      continue;
    }

    // 徽章图片、纯 HTML、水平线：原样透传
    if (/^\s*\[!\[/.test(line) || /^\s*<[^>]+>\s*$/.test(line) || /^\s*---+\s*$/.test(line) || /^\s*\*\*\*+\s*$/.test(line)) {
      items.push({ i, kind: 'raw' });
      continue;
    }

    items.push({ i, kind: 'text', indent: '', text: line.trim(), hash: sha(line.trim()) });
  }
  return items;
}
