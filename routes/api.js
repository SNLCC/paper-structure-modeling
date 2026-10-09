// UI 数据 API：panel fetch 相对路径 /api/plugins/<id>/... → 本路由。
// 读写一律限定结构库根内（path 校验防越界）；写操作复用工具 execute，保证与 A/C 路径同一校验单道。
import * as commitExtraction from "../tools/commit-extraction.js";
import * as commitAnchor from "../tools/commit-anchor.js";
import * as compareAnchor from "../tools/compare-anchor-score.js";
import * as applyTagMerge from "../tools/apply-tag-merge.js";
import * as normalizeMapping from "../tools/normalize-mapping.js";
import * as suggestTagMerges from "../tools/suggest-tag-merges.js";
import * as commitModel from "../tools/commit-model.js";
import { ref, STRUCT_ROOT } from "../lib/paths.js";
import { searchLibrary } from "../lib/search.js";
import { loadConfig, validateConfig, saveConfig } from "../lib/config.js";
import { runImport, listFailures, addFailure, removeFailure, MAX_IMPORT_CHARS } from "../lib/import.js";
import { extractPdfText } from "../lib/pdf-text.js";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as zoteroSearch from "../tools/zotero-search.js";
import * as zoteroItem from "../tools/zotero-item.js";
import * as zoteroAttachmentPath from "../tools/zotero-attachment-path.js";

// 首次配置自动铺模板（第 89 轮）：读包内用 fs（安装目录对子进程只读可读），
// 写目标用 ctx.resources（库目录在许可根外，裸 fs 会被 Permission Model 拒）。
const TEMPLATE_ROOT = fileURLToPath(new URL("../library-template", import.meta.url));

function walkRel(dir, base = "") {
  const out = [];
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${ent.name}` : ent.name;
    if (ent.isDirectory()) out.push(...walkRel(path.join(dir, ent.name), rel));
    else out.push(rel);
  }
  return out;
}

async function initLibraryFromTemplate(ctx, target) {
  try {
    // 目标已有内容 → 保留不动（不覆盖既有库）
    try {
      const st = await ctx.resources.stat(ref(target));
      if (st && st.exists && st.isDirectory) {
        const listing = await ctx.resources.list(ref(target));
        if ((listing.items || []).length > 0) return { action: "kept", files: listing.items.length };
      }
    } catch {
      // 目录不存在：落到下方初始化
    }
    try {
      await ctx.resources.mkdir(ref(target));
    } catch {
      /* 已存在 */
    }
    const rels = walkRel(TEMPLATE_ROOT);
    const dirs = new Set(
      rels.filter((r) => r.includes("/")).map((r) => r.slice(0, r.lastIndexOf("/")))
    );
    for (const d of dirs) {
      try {
        await ctx.resources.mkdir(ref(`${target}/${d}`));
      } catch {
        /* 已存在 */
      }
    }
    for (const rel of rels) {
      const buf = readFileSync(path.join(TEMPLATE_ROOT, rel));
      await ctx.resources.write(ref(`${target}/${rel}`), buf);
    }
    return { action: "initialized", files: rels.length };
  } catch (e) {
    return { action: "failed", message: String(e?.message || e) };
  }
}

const TOOLS = {
  zotero_search: zoteroSearch,
  zotero_item: zoteroItem,
  zotero_attachment_path: zoteroAttachmentPath,
  commit_extraction: commitExtraction,
  commit_anchor: commitAnchor,
  compare_anchor_score: compareAnchor,
  apply_tag_merge: applyTagMerge,
  normalize_mapping: normalizeMapping,
  suggest_tag_merges: suggestTagMerges,
  commit_model: commitModel,
};

const decoder = new TextDecoder();
const safeResolve = (rel) => {
  const clean = String(rel || "").replace(/\\/g, "/").replace(/^\/+/, "");
  if (!clean || clean.includes("..")) return null;
  const abs = `${STRUCT_ROOT}/${clean}`;
  if (!abs.startsWith(`${STRUCT_ROOT}/`)) return null;
  return abs;
};

export function registerApiRoutes(app, ctx) {
  // 目录列表（篇目 / 锚点样本 / 写作模型）
  app.get("/api/list", async (c) => {
    const abs = safeResolve(c.req.query("dir") || "篇目");
    if (!abs) return c.json({ ok: false, message: "非法目录" }, 400);
    try {
      const res = await ctx.resources.list(ref(abs));
      return c.json({ ok: true, dir: c.req.query("dir") || "篇目", items: res.items || [] });
    } catch (e) {
      return c.json({ ok: false, message: String(e?.message || e) }, 500);
    }
  });

  // 读单文件（path 为结构库相对路径，如 篇目/sample-2020.md）
  app.get("/api/file", async (c) => {
    const abs = safeResolve(c.req.query("path"));
    if (!abs) return c.json({ ok: false, message: "非法路径" }, 400);
    try {
      const rd = await ctx.resources.read(ref(abs));
      return c.json({ ok: true, path: c.req.query("path"), content: decoder.decode(rd.content ?? new Uint8Array()) });
    } catch (e) {
      return c.json({ ok: false, message: String(e?.message || e) }, 500);
    }
  });

  // 共用检索层的 UI 入口（§5.8 通道二）：与 search_structure 工具走同一 searchLibrary，
  // 不各存一套。语义精筛仍由前端/模型做，本端点只给物理命中排序。
  app.get("/api/search", async (c) => {
    try {
      const r = await searchLibrary(ctx, c.req.query("query"), {
        kind: c.req.query("kind") || null,
        limit: c.req.query("limit") || undefined,
      });
      return c.json(r);
    } catch (e) {
      return c.json({ ok: false, message: String(e?.message || e) }, 500);
    }
  });

  // 插件配置（第八 tab）：通道三三闸参数。读宽松、写严格；结构库路径改动需重启 Hana
  // （paths.js 模块级常量，宿主 ESM 缓存）。
  app.get("/api/config", (c) => c.json({ ok: true, config: loadConfig() }));

  app.post("/api/config", async (c) => {
    let body;
    try {
      body = await c.req.json();
    } catch {
      body = {};
    }
    const v = validateConfig(body);
    if (!v.ok) return c.json({ ok: false, message: v.message }, 400);
    if (v.value.libraryPath) {
      let isDir = false;
      try {
        // 第 72 轮合规化：用户路径校验走 ResourceIO，不再裸 statSync（PLUGINS.md 资源边界）
        const st = await ctx.resources.stat(ref(v.value.libraryPath));
        isDir = !!st?.exists && !!st?.isDirectory;
      } catch {
        isDir = false;
      }
      if (!isDir) return c.json({ ok: false, message: "结构库路径不存在或不是目录" }, 400);
    }
    try {
      const saved = saveConfig(v.value);
      // 首次配置自动铺模板（第 89 轮，库主三问）：目标为空/不存在时从包内 library-template 初始化
      let libraryInit = null;
      if (v.value.libraryPath) {
        libraryInit = await initLibraryFromTemplate(ctx, v.value.libraryPath);
      }
      return c.json({ ok: true, config: saved, ...(libraryInit ? { libraryInit } : {}) });
    } catch (e) {
      return c.json({ ok: false, message: String(e?.message || e) }, 500);
    }
  });

  // 工具转发：POST /api/tool/:name  {input} → tools/<name>.execute(input, ctx)
  // 复用同一校验单道与权限语义；未知工具 404。
  app.post("/api/tool/:name", async (c) => {
    const t = TOOLS[c.req.param("name")];
    if (!t) return c.json({ ok: false, message: `未知工具：${c.req.param("name")}` }, 404);
    let input;
    try {
      input = await c.req.json();
    } catch {
      input = {};
    }
    try {
      const result = await t.execute(input, ctx);
      // 工具返回 {content:[{type,text}]}，text 是 JSON 字符串
      const text = result?.content?.find?.((x) => x.type === "text")?.text;
      return c.json(text ? JSON.parse(text) : result);
    } catch (e) {
      return c.json({ ok: false, message: String(e?.message || e) }, 500);
    }
  });

  // 导入拆解（§6.1 B档，第 68-71 轮）：面板导入 → 通道一提取 → 落格校验带错重试 →
  // commit_extraction 同一写闸入库。失败进待办（too_short/too_long 属入参问题不落待办）。
  app.post("/api/import", async (c) => {
    let body;
    try {
      body = await c.req.json();
    } catch {
      body = {};
    }
    let text = String(body.text || "");
    // PDF 源（第 74 轮）：pdfPath（Zotero 附件等用户路径，ResourceIO 合规读）或 pdfBase64（拖放/选择文件）。
    // 服务端提取为 text 后进同一条 runImport 链，同流三保障零改动。
    let pdfEngine;
    if (!text && (body.pdfPath || body.pdfBase64)) {
      try {
        let bytes;
        if (body.pdfPath) {
          const rd = await ctx.resources.read(ref(String(body.pdfPath)));
          bytes = rd.content ?? new Uint8Array();
        } else {
          bytes = Buffer.from(String(body.pdfBase64), "base64");
        }
        const ex = await extractPdfText(bytes);
        text = ex.text;
        pdfEngine = ex.engine;
      } catch (e) {
        // 提取失败是换料问题（扫描版/损坏/超限），重试同料无意义 → 不进待办（同 too_short/too_long）
        return c.json({ ok: false, stage: "pdf_extract", message: e?.message || String(e), maxImportChars: MAX_IMPORT_CHARS });
      }
    }
    const r = await runImport(ctx, { text });
    // 运行时披露（库主第 82 轮）：PDF 源把实际引擎带进响应，UI 据此显示主/回退与安装指引
    if (pdfEngine) r.pdfEngine = pdfEngine;
    if (r.ok) {
      if (body.fromTs !== undefined && body.fromTs !== null) removeFailure(body.fromTs);
      return c.json(r);
    }
    if (r.stage !== "too_short" && r.stage !== "too_long") {
      // PDF 源时待办存提取后的 text：重试原样重投模型链，不重复提取；source 记来源便于追查
      const item = addFailure({
        stage: r.stage,
        message: r.message,
        attempts: r.attempts || 0,
        errors: r.errors || [],
        text,
        source: body.pdfPath || (body.filename ? String(body.filename) : undefined),
      });
      r.failureTs = item.ts;
    }
    r.maxImportChars = MAX_IMPORT_CHARS;
    return c.json(r);
  });

  // 待办区：导入失败清单（含 text 供重试原样重投）
  app.get("/api/import/failures", (c) => c.json({ ok: true, items: listFailures() }));

  app.post("/api/import/failures/dismiss", async (c) => {
    let body;
    try {
      body = await c.req.json();
    } catch {
      body = {};
    }
    if (body.ts === undefined || body.ts === null) return c.json({ ok: false, message: "缺少 ts" }, 400);
    removeFailure(body.ts);
    return c.json({ ok: true });
  });

  // spike（开发阶段 D6，第 69 轮；v2 迁移第 76 轮改走 models.utility——v2 禁 model:sample-text）：
  // utility 动态实测。验证三件事：
  // 入口通不通、实际返回形态（含模型/用量元数据）、短样质量；hasBus/hasPluginId
  // 是诊断位。spike 结束后本端点并入正式导入端点或移除，不属首版 UI 契约。
  app.post("/api/spike/sample", async (c) => {
    let body;
    try {
      body = await c.req.json();
    } catch {
      body = {};
    }
    const text = String(body.text || "").slice(0, 8000);
    const diag = { hasBus: !!ctx.bus, hasPluginId: !!ctx.pluginId };
    if (!text) return c.json({ ok: false, message: "缺少 text", ...diag }, 400);
    const input = {
      requestId: `spike-${Date.now()}`,
      systemPrompt: String(body.systemPrompt || "你是一个只输出单个词的分类器。"),
      messages: [{ role: "user", content: text }],
      maxTokens: Number(body.maxTokens) > 0 ? Number(body.maxTokens) : 64,
    };
    const t0 = Date.now();
    try {
      const res = await ctx.models.utility(input);
      return c.json({ ok: true, ms: Date.now() - t0, ...diag, result: res });
    } catch (e) {
      return c.json({ ok: false, ms: Date.now() - t0, ...diag, message: String(e?.message || e) }, 500);
    }
  });
}

// v2 routes/ 兼容目录只认三种导出形态，具名必须叫 register（APPS.md）；
// v1 的 registerApiRoutes 名保留供阅读，别名对外。
export { registerApiRoutes as register };
