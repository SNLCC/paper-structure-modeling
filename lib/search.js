// 共用检索层：对话内工具、UI /api/search、自动感知推送都走这一个函数，
// 消费同一份结构化存储，不各存一套。物理层做关键词命中与排序，语义精筛交给调用方模型。
import { ref, STRUCT_ROOT, META_DIR, ANCHOR_DIR, MODEL_DIR, TAG_LIB, TYPE_LIB, MAPPING_FILE } from "./paths.js";

const decoder = new TextDecoder();

const SOURCES = [
  { rel: "篇目", kind: "篇目", path: META_DIR, isDir: true },
  { rel: "写作模型", kind: "写作模型", path: MODEL_DIR, isDir: true },
  { rel: "锚点样本", kind: "锚点样本", path: ANCHOR_DIR, isDir: true },
  { rel: "标签库.md", kind: "库", path: TAG_LIB },
  { rel: "类型库.md", kind: "库", path: TYPE_LIB },
  { rel: "闭包映射表.md", kind: "库", path: MAPPING_FILE },
];

// query 拆词：空白与中文顿号/逗号分隔；每词做不区分大小写的 substring 命中。
export function tokenize(query) {
  return String(query || "")
    .split(/[\s、，,;；]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function scanText(text, tokens, maxHits) {
  const hits = [];
  let score = 0;
  const lines = String(text).split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const low = lines[i].toLowerCase();
    let lineHit = 0;
    for (const t of tokens) {
      const idx = low.indexOf(t.toLowerCase());
      if (idx >= 0) {
        lineHit++;
        score++;
        if (hits.length < maxHits) {
          const start = Math.max(0, idx - 30);
          hits.push({
            line: i + 1,
            text: lines[i].slice(start, start + 120),
            excerpt: start > 0 ? "…" : "",
          });
        }
      }
    }
    if (lineHit === 0 && hits.length >= maxHits) continue;
  }
  return { score, hits };
}

export async function searchLibrary(ctx, query, opts = {}) {
  const tokens = tokenize(query);
  if (!tokens.length) return { ok: false, message: "query 为空" };
  const limit = Number(opts.limit) || 20;
  const maxHits = Number(opts.maxHits) || 5;
  const kindFilter = opts.kind || null;

  const results = [];
  for (const src of SOURCES) {
    if (kindFilter && src.kind !== kindFilter) continue;
    let files = [];
    try {
      if (src.isDir) {
        const listing = await ctx.resources.list(ref(src.path));
        files = (listing.items || [])
          .filter((it) => !it.isDirectory && it.name.endsWith(".md") && it.name !== "_模板.md")
          .map((it) => ({ rel: `${src.rel}/${it.name}`, name: it.name }));
      } else {
        files = [{ rel: src.rel, name: src.rel }];
      }
    } catch {
      continue; // 目录不存在（如尚无模型）不视为错误
    }

    for (const f of files) {
      let content;
      try {
        const rd = await ctx.resources.read(ref(`${STRUCT_ROOT}/${f.rel}`));
        content = decoder.decode(rd.content ?? new Uint8Array());
      } catch {
        continue;
      }
      const { score, hits } = scanText(content, tokens, maxHits);
      if (!score) continue;
      const titleMatch = /^#\s+(.+)$/m.exec(content);
      results.push({
        kind: src.kind,
        path: f.rel,
        title: titleMatch ? titleMatch[1] : f.name.replace(/\.md$/, ""),
        score,
        hits,
      });
    }
  }
  results.sort((a, b) => b.score - a.score);
  return { ok: true, query, tokens, results: results.slice(0, limit) };
}
