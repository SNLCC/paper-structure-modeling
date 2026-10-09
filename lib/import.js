// 导入拆解链（§6.1 B档，库主第 68-71 轮；v2 App 迁移第 76 轮）：面板导入 → sdk.models.utility 执行通道一提取
// → 落格校验带错重试（≤3）→ commit_extraction 同一写闸入库 → 结果回面板；失败落待办。
//
// 同流三保障（库主原话，§6.1）：
// ① 提示词单源 = skills/structure-extraction/SKILL.md 全文 + 四件动态快照，与通道一 skill
//    同读一份（结构库无独立提示词文件，字面落点偏差已在设计文档 §6.1 第 71 轮记录归库主定夺）；
// ② 落格校验 = lib/extraction.js 同一模块，不过则带错误反馈重试；
// ③ 入库 = tools/commit-extraction.execute 直调同一写闸，零差异。
// 禁止任何无模型参与的机械拆解路径：本链每次落格都经 sampleText 模型智能提取。
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { validateExtraction } from "./extraction.js";
import * as commitExtraction from "../tools/commit-extraction.js";
import { ref, STRUCT_ROOT, TAG_LIB, TYPE_LIB, ANCHOR_DIR } from "./paths.js";
import { DATA_DIR } from "./config.js";

// 正式导入常数（第 71 轮；v2 迁移第 76 轮删 AGENT_ID——v2 utility 用宿主级辅助模型配置，
// App 不可选模型，v1 靠 agentId 防漂移的问题被架构消掉）：
// - MAX_IMPORT_CHARS 24000：spike 只验过 7040 字输入，保守起步；
//   超限直接拒绝并提示分块或转对话（§6.1 验收路径），调大只改这一个常数；
// - MAX_TOKENS 8000 覆盖一篇五栏落格 JSON；截断会触发 parse 重试让模型精简输出。
export const MAX_IMPORT_CHARS = 24000;
const MIN_IMPORT_CHARS = 100;
const MAX_ATTEMPTS = 3;
const MAX_TOKENS = 8000;

const SKILL_FILE = fileURLToPath(new URL("../skills/structure-extraction/SKILL.md", import.meta.url));
const FAIL_FILE = path.join(DATA_DIR, "import-failures.json");
const FAIL_KEEP = 20;
const decoder = new TextDecoder();
const today = () => new Date().toISOString().slice(0, 10);
const errMsg = (e) => String(e?.message || e);

// ---- 失败存储（待办用；plugin-data 目录，与 config.json 同机制）----
function loadFailures() {
  try {
    const a = JSON.parse(readFileSync(FAIL_FILE, "utf8"));
    return Array.isArray(a) ? a : [];
  } catch {
    return [];
  }
}
function saveFailures(list) {
  mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(FAIL_FILE, JSON.stringify(list.slice(0, FAIL_KEEP), null, 2) + "\n", "utf-8");
}
export function listFailures() {
  return loadFailures();
}
export function addFailure(rec) {
  const item = { ts: Date.now(), attempts: 0, errors: [], ...rec };
  saveFailures([item, ...loadFailures()]);
  return item;
}
export function removeFailure(ts) {
  saveFailures(loadFailures().filter((x) => String(x.ts) !== String(ts)));
}

// ---- 提示词组装（单源：SKILL.md 全文 + 四件动态快照，两路径同读）----
async function readSnapshot(ctx, abs) {
  const rd = await ctx.resources.read(ref(abs));
  return decoder.decode(rd.content ?? new Uint8Array());
}

export async function buildPrompts(ctx) {
  const skill = readFileSync(SKILL_FILE, "utf8");
  const [typeLib, tagLib, guide, dims] = await Promise.all([
    readSnapshot(ctx, TYPE_LIB),
    readSnapshot(ctx, TAG_LIB),
    readSnapshot(ctx, `${STRUCT_ROOT}/评分指引.md`),
    readSnapshot(ctx, `${STRUCT_ROOT}/维度清单.md`),
  ]);
  let anchors = [];
  try {
    const l = await ctx.resources.list(ref(ANCHOR_DIR));
    anchors = (l.items || []).map((it) => it.name).filter((n) => n.endsWith(".md"));
  } catch {
    // 锚点清单缺失不致命：模型侧 anchorStatus 置无参照即可
  }
  const systemPrompt = [
    skill,
    "---\n# 结构库动态快照（执行时读取，与通道一同源；只读参考，禁止写回）",
    `## 类型库\n${typeLib}`,
    `## 标签库\n${tagLib}`,
    `## 评分指引\n${guide}`,
    `## 维度清单\n${dims}`,
    `## 锚点样本清单\n${anchors.length ? anchors.map((n) => `- ${n.replace(/\.md$/, "")}`).join("\n") : "（暂无）"}`,
  ].join("\n\n");
  // 字段规范直接嵌 commit_extraction 工具描述：提示层与校验层同一来源，零双写。
  const contract = [
    "【输出契约】只输出一个 JSON 对象，不要代码围栏、不要任何解释文字。",
    "字段与格式规范（与落格校验同一来源，即 commit_extraction 工具定义）：",
    commitExtraction.description,
    `【本次固定值】meta.extractor 必须为 "C"；meta.date 必须为 "${today()}"；id 自拟 <作者slug>-<年份>（全小写连字符）。`,
    "【原文开始】",
  ].join("\n");
  return { systemPrompt, contract };
}

// ---- 模型输出 → JSON（去围栏 + 首{末}截取，容忍前后杂字）----
function extractJson(raw) {
  let s = String(raw || "").trim();
  s = s.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  const a = s.indexOf("{");
  const b = s.lastIndexOf("}");
  if (a < 0 || b <= a) throw new Error("输出中找不到 JSON 对象");
  return JSON.parse(s.slice(a, b + 1));
}

function feedback(errors) {
  const lines = (errors || []).slice(0, 20).map((e) => `- ${e.field}：${e.message}`);
  return [
    "上一次输出未通过落格校验，问题如下：",
    ...lines,
    "请修正以上全部问题后重新输出完整 JSON 对象（仍然只输出 JSON，无围栏无解释）。",
  ].join("\n");
}

// ---- 主链：提取 → 校验重试 → 同一写闸入库。永不抛错，失败以结构化结果返回。----
export async function runImport(ctx, { text }) {
  const t0 = Date.now();
  const raw = String(text || "").trim();
  const base = () => ({ attempts: 0, ms: Date.now() - t0 });
  if (raw.length < MIN_IMPORT_CHARS) {
    return { ok: false, stage: "too_short", message: `文本过短（<${MIN_IMPORT_CHARS} 字），请粘贴完整文献或导入 md / txt 文件`, ...base() };
  }
  if (raw.length > MAX_IMPORT_CHARS) {
    return {
      ok: false,
      stage: "too_long",
      message: `超过 ${MAX_IMPORT_CHARS} 字上限（当前 ${raw.length} 字）。请分块导入，或在对话里让我拆解。`,
      ...base(),
    };
  }

  let prompts;
  try {
    prompts = await buildPrompts(ctx);
  } catch (e) {
    return { ok: false, stage: "snapshot", message: `结构库快照读取失败：${errMsg(e)}`, ...base() };
  }

  const messages = [{ role: "user", content: `${prompts.contract}\n${raw}\n【原文结束】` }];
  let errors = [];

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    let out;
    try {
      const res = await ctx.models.utility({
        requestId: `import-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        systemPrompt: prompts.systemPrompt,
        messages,
        maxTokens: MAX_TOKENS,
      });
      out = String(res?.text ?? "");
    } catch (e) {
      return { ok: false, stage: "model", message: `模型调用失败：${errMsg(e)}`, attempts: attempt, ms: Date.now() - t0 };
    }
    if (!out.trim()) {
      return { ok: false, stage: "model", message: "模型返回空文本", attempts: attempt, ms: Date.now() - t0 };
    }

    let d;
    try {
      d = extractJson(out);
    } catch (e) {
      errors = [{ field: "json", message: `无法解析为 JSON：${errMsg(e)}` }];
      messages.push({ role: "assistant", content: out.slice(0, 4000) }, { role: "user", content: feedback(errors) });
      continue;
    }

    // 管道事实覆写：extractor/date 由管道定，不交给模型即兴。
    d.meta = { ...(d.meta || {}), extractor: "C", date: today() };
    const v = validateExtraction(d);
    if (v.ok) {
      try {
        const c = await commitExtraction.execute({ extraction: d }, ctx);
        const cr = JSON.parse(c?.content?.find((x) => x.type === "text")?.text || "{}");
        if (cr.ok) {
          return {
            ok: true,
            stage: "committed",
            file: cr.file,
            id: d.id,
            attempts: attempt,
            tagsAdded: cr.tagsAdded || [],
            lowDecomposability: cr.lowDecomposability || undefined,
            ms: Date.now() - t0,
          };
        }
        return {
          ok: false,
          stage: cr.stage === "conflict" ? "conflict" : "commit",
          message: cr.message || (cr.errors ? cr.errors.map((x) => `${x.field}：${x.message}`).join("；") : "入库失败"),
          attempts: attempt,
          errors: cr.errors || [],
          ms: Date.now() - t0,
        };
      } catch (e) {
        return { ok: false, stage: "commit", message: `入库异常：${errMsg(e)}`, attempts: attempt, ms: Date.now() - t0 };
      }
    }

    errors = v.errors;
    messages.push({ role: "assistant", content: out.slice(0, 4000) }, { role: "user", content: feedback(errors) });
  }

  return {
    ok: false,
    stage: "validate",
    message: `落格校验 ${MAX_ATTEMPTS} 次未通过，已停止`,
    attempts: MAX_ATTEMPTS,
    errors,
    ms: Date.now() - t0,
  };
}
