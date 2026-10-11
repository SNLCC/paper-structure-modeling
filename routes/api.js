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
import { runModelGeneration, runMergeProposal } from "../lib/model.js";
import { extractPdfText } from "../lib/pdf-text.js";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as zoteroSearch from "../tools/zotero-search.js";
import * as zoteroItem from "../tools/zotero-item.js";
import * as zoteroAttachmentPath from "../tools/zotero-attachment-path.js";

// 首次配置自动铺模板：读包内用 fs（安装目录对子进程只读可读），
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

  // 共用检索层的 UI 入口：与 search_structure 工具走同一 searchLibrary，
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
        // 合规化：用户路径校验走 ResourceIO，不再裸 statSync（PLUGINS.md 资源边界）
        const st = await ctx.resources.stat(ref(v.value.libraryPath));
        isDir = !!st?.exists && !!st?.isDirectory;
      } catch {
        isDir = false;
      }
      if (!isDir) return c.json({ ok: false, message: "结构库路径不存在或不是目录" }, 400);
    }
    try {
      const saved = saveConfig(v.value);
      // 首次配置自动铺模板：目标为空/不存在时从包内 library-template 初始化
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

  // 单篇执行（单篇端点与批量队列共用同一条链）：可选 PDF 提取 → runImport → 失败存储
  async function runOneImport(body, fromTs, shouldAbort) {
    let text = String(body.text || "");
    let pdfEngine;
    if (!text && (body.pdfPath || body.pdfBase64)) {
      try {
        const bytes = body.pdfPath
          ? ((await ctx.resources.read(ref(String(body.pdfPath)))).content ?? new Uint8Array())
          : Buffer.from(String(body.pdfBase64), "base64");
        const ex = await extractPdfText(bytes);
        text = ex.text;
        pdfEngine = ex.engine;
      } catch (e) {
        // 提取失败属换料问题（扫描版/损坏/超限），不进待办（同 too_short/too_long）
        return { ok: false, stage: "pdf_extract", message: e?.message || String(e), attempts: 0 };
      }
    }
    let r;
    try {
      r = await runImport(ctx, { text, shouldAbort });
    } catch (e) {
      r = { ok: false, stage: "model", message: `模型调用失败：${e?.message || e}`, attempts: 0 };
    }
    if (pdfEngine) r.pdfEngine = pdfEngine;
    if (r.ok && fromTs != null) removeFailure(fromTs);
    if (!r.ok && !["too_short", "too_long", "input", "pdf_extract", "cancelled"].includes(r.stage)) {
      // 存提取后的 text：重试原样重投模型链，不重复提取；source 记来源便于追查
      const item = addFailure({
        stage: r.stage,
        message: r.message,
        attempts: r.attempts || 0,
        errors: r.errors || [],
        output: r.output || undefined,
        text,
        source: body.filename || body.pdfPath,
      });
      r.failureTs = item.ts;
    }
    r.maxImportChars = MAX_IMPORT_CHARS;
    return r;
  }

  // 导入拆解（异步单任务）：宿主普通 RPC 30 秒硬超时，分钟级模型链只能后台跑；
  // POST 立即返回 started，面板轮询 /api/import/status 取最终结果。
  // 失败进待办（too_short/too_long/input/pdf_extract/cancelled 属入参、换料或主动停止，不落待办）。
  let importJob = { running: false, startedAt: 0, finishedAt: 0, lastResult: null };

  app.post("/api/import", async (c) => {
    let body;
    try {
      body = await c.req.json();
    } catch {
      body = {};
    }
    const text = String(body.text || "");
    const pdfPath = body.pdfPath ? String(body.pdfPath) : undefined;
    const pdfBase64 = body.pdfBase64 ? String(body.pdfBase64) : undefined;
    const fromTs = body.fromTs !== undefined && body.fromTs !== null ? body.fromTs : null;
    if (!text && !pdfPath && !pdfBase64) {
      return c.json({ ok: false, stage: "input", message: "请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件" });
    }
    if (importJob.running) {
      return c.json({ ok: false, stage: "busy", message: "已有拆解任务进行中，完成后会自动提示，请稍候" });
    }
    if (queueRunning()) {
      return c.json({ ok: false, stage: "busy", message: "批量导入队列正在运行，等它完成或先停止队列" });
    }
    const startedAt = Date.now();
    importJob = { running: true, startedAt, finishedAt: 0, lastResult: null };
    void (async () => {
      const r = await runOneImport(body, fromTs, null);
      importJob = { running: false, startedAt, finishedAt: Date.now(), lastResult: r };
    })();
    return c.json({
      ok: true,
      started: true,
      message: "拆解已开始（约 1-3 分钟，可离开本页），完成后本页自动显示结果",
    });
  });

  // 后台任务状态（面板轮询收尾结果）
  app.get("/api/import/status", (c) => c.json({ ok: true, ...importJob }));

  // ---- 批量导入队列（M1）：有限并发、单项启停、原子停止零残留 ----
  // 停止语义：链只在终态原子写库，pending 停止=直接移出；running 停止=下一次调用前中止、
  // 已飞调用返回后丢弃结果——中途停止不产生任何落盘中间物，Zotero 与本地原文始终不被触碰。
  const MAX_QUEUE_CONCURRENT = 1; // 有限并行：默认串行（token 与进度可控），上限可调到 2
  const importQueue = { items: [], nextKey: 1, paused: false, pumping: false };
  const queueRunning = () => importQueue.items.some((i) => i.status === "running" || i.status === "stopping");
  function queueSnapshot() {
    const c = { pending: 0, running: 0, stopping: 0, done: 0, failed: 0, cancelled: 0 };
    for (const i of importQueue.items) if (c[i.status] !== undefined) c[i.status]++;
    return { ...c, total: importQueue.items.length, paused: importQueue.paused };
  }
  async function queuePump() {
    if (importQueue.pumping || importQueue.paused) return;
    importQueue.pumping = true;
    try {
      while (true) {
        if (importQueue.paused) break;
        if (importJob.running || modelJob.running) break; // 与其他模型任务互斥
        if (queueRunning() && importQueue.items.filter((i) => i.status === "running").length >= MAX_QUEUE_CONCURRENT) break;
        const next = importQueue.items
          .filter((i) => i.status === "pending")
          .sort((a, b) => a.order - b.order)[0];
        if (!next) break;
        next.status = "running";
        void (async () => {
          try {
            const stopReq = () => next.status === "stopping";
            const r = await runOneImport({ text: next.text, pdfPath: next.pdfPath, pdfBase64: next.pdfBase64, filename: next.label }, null, stopReq);
            if (r.stage === "cancelled" || next.status === "stopping") {
              next.status = "cancelled";
              next.message = "已停止（未写库，无残留）";
            } else if (r.ok) {
              next.status = "done";
              next.file = r.file;
              next.attempts = r.attempts;
            } else {
              next.status = "failed";
              next.message = r.message;
              next.attempts = r.attempts;
              next.failureTs = r.failureTs;
            }
          } catch (e) {
            next.status = "failed";
            next.message = String(e?.message || e);
          } finally {
            void queuePump();
          }
        })();
      }
    } finally {
      importQueue.pumping = false;
    }
  }

  // 批量入队（Zotero 分类批量 / 多选逐篇均走此口）
  app.post("/api/import/enqueue", async (c) => {
    let body;
    try { body = await c.req.json(); } catch { body = {}; }
    const list = Array.isArray(body.items) ? body.items : [];
    if (!list.length) return c.json({ ok: false, message: "items 为空" }, 400);
    const added = [];
    for (const it of list) {
      const text = it.text ? String(it.text) : "";
      const pdfPath = it.pdfPath ? String(it.pdfPath) : undefined;
      const pdfBase64 = it.pdfBase64 ? String(it.pdfBase64) : undefined;
      if (!text && !pdfPath && !pdfBase64) continue;
      const key = importQueue.nextKey++;
      importQueue.items.push({
        key,
        order: importQueue.items.length + 1,
        label: String(it.label || `条目 ${key}`),
        text, pdfPath, pdfBase64,
        source: it.source,
        status: "pending",
        attempts: 0,
        message: "",
        file: "",
      });
      added.push(key);
    }
    if (!added.length) return c.json({ ok: false, message: "无可入队内容" }, 400);
    void queuePump();
    return c.json({ ok: true, queued: added.length, snapshot: queueSnapshot() });
  });

  // 队列状态（面板轮询；附带驱动 pump，兼作恢复驱动）
  app.get("/api/import/queue", (c) => {
    void queuePump();
    return c.json({
      ok: true,
      ...queueSnapshot(),
      items: importQueue.items.map(({ text, pdfPath, pdfBase64, ...rest }) => rest),
    });
  });

  // 队列动作：cancel / start / remove / pause / resume / clear-done
  app.post("/api/import/queue-action", async (c) => {
    let body;
    try { body = await c.req.json(); } catch { body = {}; }
    const action = String(body.action || "");
    const it = importQueue.items.find((i) => i.key === Number(body.key));
    const ok = (extra = {}) => c.json({ ok: true, snapshot: queueSnapshot(), ...extra });
    if (action === "pause") { importQueue.paused = true; return ok(); }
    if (action === "resume") { importQueue.paused = false; void queuePump(); return ok(); }
    if (action === "clear-done") {
      importQueue.items = importQueue.items.filter((i) => i.status !== "done" && i.status !== "cancelled");
      return ok();
    }
    if (!it) return c.json({ ok: false, message: `队列中无 key=${body.key} 的条目` }, 404);
    if (action === "cancel") {
      if (it.status === "pending") { it.status = "cancelled"; it.message = "已停止（未开始，零成本）"; return ok(); }
      if (it.status === "running") { it.status = "stopping"; it.message = "停止中（等当前调用返回后丢弃）…"; return ok(); }
      return c.json({ ok: false, message: `状态 ${it.status} 不可停止` });
    }
    if (action === "start") {
      if (it.status === "cancelled" || it.status === "failed") {
        it.status = "pending"; it.message = ""; it.file = "";
        void queuePump();
        return ok();
      }
      return c.json({ ok: false, message: `状态 ${it.status} 不可开始` });
    }
    if (action === "remove") {
      if (it.status === "running" || it.status === "stopping") return c.json({ ok: false, message: "运行中请先停止" });
      importQueue.items = importQueue.items.filter((i) => i.key !== it.key);
      return ok();
    }
    return c.json({ ok: false, message: `未知动作：${action}` }, 400);
  });

  // 建模链（异步单任务，同导入模式）：每类型一次模型调用，写闸 commit_model（版本递增）
  // kind 区分 generate/propose，面板轮询各认各的 lastResult
  let modelJob = { running: false, kind: null, startedAt: 0, finishedAt: 0, lastResult: null };
  app.post("/api/model/generate", async (c) => {
    if (modelJob.running || queueRunning()) {
      return c.json({ ok: false, stage: "busy", message: "模型任务进行中（含批量队列），完成后会自动提示，请稍候" });
    }
    const startedAt = Date.now();
    modelJob = { running: true, kind: "generate", startedAt, finishedAt: 0, lastResult: null };
    void (async () => {
      let r;
      try {
        r = await runModelGeneration(ctx);
      } catch (e) {
        r = { ok: false, stage: "model", message: `建模链异常：${e?.message || e}` };
      }
      modelJob = { running: false, kind: "generate", startedAt, finishedAt: Date.now(), lastResult: r };
    })();
    return c.json({ ok: true, started: true, message: "建模已开始（每个类型一次模型调用，可离开本页）" });
  });

  // 语义提议（异步，与生成共用单任务闸）：模型找相似标签对入队，裁决仍在队列页
  app.post("/api/model/propose-merges", async (c) => {
    if (modelJob.running || queueRunning()) {
      return c.json({ ok: false, stage: "busy", message: "模型任务进行中（含批量队列），完成后会自动提示，请稍候" });
    }
    const startedAt = Date.now();
    modelJob = { running: true, kind: "propose", startedAt, finishedAt: 0, lastResult: null };
    void (async () => {
      let r;
      try {
        r = await runMergeProposal(ctx);
      } catch (e) {
        r = { ok: false, stage: "model", message: `提议链异常：${e?.message || e}` };
      }
      modelJob = { running: false, kind: "propose", startedAt, finishedAt: Date.now(), lastResult: r };
    })();
    return c.json({ ok: true, started: true, message: "模型提议中（读标签库语义找对子，约半分钟）" });
  });
  app.get("/api/model/status", (c) => c.json({ ok: true, ...modelJob }));

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

  // ---- Zotero 分类与条目列表（M2）：浏览取数，供批量入队 ----
  app.get("/api/zotero/collections", async (c) => {
    try {
      const res = await zoteroSearch.zoteroFetch(ctx, "/users/0/collections?limit=100&sort=title");
      const raw = await res.json();
      const nodes = (Array.isArray(raw) ? raw : []).map((x) => ({
        key: x.key || x.data?.key || "",
        name: x.data?.name || x.key || "",
        parent: typeof x.data?.parentCollection === "string" ? x.data.parentCollection : null,
      })).filter((n) => n.key);
      const byKey = new Map(nodes.map((n) => [n.key, { ...n, children: [] }]));
      const roots = [];
      for (const n of byKey.values()) {
        if (n.parent && byKey.has(n.parent)) byKey.get(n.parent).children.push(n);
        else roots.push(n);
      }
      return c.json({ ok: true, collections: roots, total: nodes.length });
    } catch (e) {
      return c.json({ ok: false, message: e?.message || String(e) });
    }
  });

  app.get("/api/zotero/collection-items", async (c) => {
    const key = c.req.query("key");
    const start = Math.max(Number(c.req.query("start")) || 0, 0);
    const limit = Math.min(Math.max(Number(c.req.query("limit")) || 100, 1), 100);
    if (!key) return c.json({ ok: false, message: "缺 key" }, 400);
    try {
      const res = await zoteroSearch.zoteroFetch(
        ctx,
        `/users/0/collections/${encodeURIComponent(key)}/items?limit=${limit}&start=${start}&sort=-dateAdded`,
      );
      const raw = await res.json();
      const total = Number(res.headers.get("Total-Results") || 0);
      const items = (Array.isArray(raw) ? raw : [])
        .map((x) => zoteroSearch.unwrapItem(x))
        .filter((it) => it.itemType && it.itemType !== "annotation" && it.itemType !== "note")
        .map((it) => ({ key: it.key, title: it.title || "（无题名）", authors: it.creators, year: (it.date || "").slice(0, 4), itemType: it.itemType }));
      return c.json({ ok: true, items, total, start, limit, returned: items.length });
    } catch (e) {
      return c.json({ ok: false, message: e?.message || String(e) });
    }
  });

  // spike（v2 走 models.utility，v2 禁 model:sample-text）：
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
