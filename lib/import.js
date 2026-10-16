// 导入拆解链：面板导入 → sdk.models.utility 执行通道一提取
// → 落格校验带错重试（≤3）→ commit_extraction 同一写闸入库 → 结果回面板；失败落待办。
//
// 同流三保障：
// ① 提示词单源 = skills/structure-extraction/SKILL.md 全文 + 四件动态快照，与通道一 skill
//    同读一份（结构库无独立提示词文件，字面落点偏差归库主定夺）；
// ② 落格校验 = lib/extraction.js 同一模块，不过则带错误反馈重试；
// ③ 入库 = tools/commit-extraction.execute 直调同一写闸，零差异。
// 禁止任何无模型参与的机械拆解路径：本链每次落格都经 sampleText 模型智能提取。
import { readFileSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { validateExtraction } from "./extraction.js";
import * as commitExtraction from "../tools/commit-extraction.js";
import { ref, STRUCT_ROOT, TAG_LIB, TYPE_LIB, ANCHOR_DIR } from "./paths.js";
import { DATA_DIR } from "./config.js";

// 正式导入常数（v2 utility 用宿主级辅助模型配置，
// App 不可选模型，无 agentId 漂移问题）：
// - MAX_IMPORT_CHARS 24000：spike 只验过 7040 字输入，保守起步；
//   超限直接拒绝并提示分块或转对话，调大只改这一个常数；
// - MAX_TOKENS 8000 覆盖一篇五栏落格 JSON；截断会触发 parse 重试让模型精简输出。
export const MAX_IMPORT_CHARS = 24000;
const MIN_IMPORT_CHARS = 100;
const MAX_ATTEMPTS = 3;
const MAX_TOKENS = 8000;
const RETRY_PAUSE_MS = 1500;

const SKILL_FILE = fileURLToPath(new URL("../skills/structure-extraction/SKILL.md", import.meta.url));
// 失败存储（待办）：位置定在结构库运行数据区（STRUCT_ROOT/_导入失败.json）——文献原文
// 只出现在结构库目录内，与“拆解产物只进运行数据区”口径统一；库路径未配置或写入失败时
// 回退插件数据目录 app-data（不随包发布）。库在许可根外，读写走 ctx.resources；回退路径用裸 fs。
const LEGACY_FAIL_FILE = path.join(DATA_DIR, "import-failures.json");
const FAIL_REL = "_导入失败.json";
const failAbs = () => `${STRUCT_ROOT}/${FAIL_REL}`;
const libConfigured = () => !STRUCT_ROOT.startsWith("NOT_CONFIGURED__");
const FAIL_KEEP = 10; // 收紧：待办最多留 10 条，不无限堆积原文
const OUTPUT_KEEP = 800; // 模型原始输出只留开头供诊断，不整段存
const decoder = new TextDecoder();
const today = () => new Date().toISOString().slice(0, 10);
const errMsg = (e) => String(e?.message || e);

// 从模型已解析出的对象里取条目身份（标题/作者/年份/id）。校验失败时对象仍在，
// 用它给待办显示条目身份；全缺时返回 undefined（待办回退到 source）。
function candidateOf(d) {
  if (!d || typeof d !== "object" || Array.isArray(d)) return undefined;
  const m = d.meta || {};
  const c = { id: d.id, title: m.title, authors: m.authors, year: m.year };
  return Object.values(c).some((v) => v) ? c : undefined;
}

// ---- 失败存储（待办用）----
function parseFailures(raw) {
  try {
    const a = JSON.parse(raw);
    return Array.isArray(a) ? a : [];
  } catch {
    return [];
  }
}

// 冗余字段收紧：output 只留开头，避免整段模型原文随待办落盘。
function slimRecord(rec) {
  const out = { ...rec };
  if (typeof out.output === "string" && out.output.length > OUTPUT_KEEP) {
    out.output = `${out.output.slice(0, OUTPUT_KEEP)}\n…（已截断，原 ${out.output.length} 字）`;
  }
  return out;
}

async function loadFailures(ctx) {
  if (libConfigured()) {
    try {
      const rd = await ctx.resources.read(ref(failAbs()));
      return parseFailures(decoder.decode(rd.content ?? new Uint8Array()));
    } catch {
      // 库内尚无存储：一次性迁移旧 app-data 记录（剔冗余、收条数），迁移后删旧文件
      let legacy = null;
      try {
        legacy = readFileSync(LEGACY_FAIL_FILE, "utf8");
      } catch {
        legacy = null;
      }
      if (legacy === null) return [];
      const list = parseFailures(legacy).map(slimRecord).slice(0, FAIL_KEEP);
      await saveFailures(ctx, list);
      try {
        rmSync(LEGACY_FAIL_FILE, { force: true });
      } catch {
        /* 删除失败不致命 */
      }
      return list;
    }
  }
  try {
    return parseFailures(readFileSync(LEGACY_FAIL_FILE, "utf8"));
  } catch {
    return [];
  }
}

async function saveFailures(ctx, list) {
  const raw = JSON.stringify(list.slice(0, FAIL_KEEP), null, 2) + "\n";
  if (libConfigured()) {
    try {
      await ctx.resources.write(ref(failAbs()), raw);
      return;
    } catch {
      /* 库写失败回退 app-data，保证失败仍被记录 */
    }
  }
  try {
    mkdirSync(DATA_DIR, { recursive: true });
    writeFileSync(LEGACY_FAIL_FILE, raw, "utf-8");
  } catch {
    /* 落盘失败不致命 */
  }
}

export async function listFailures(ctx) {
  return loadFailures(ctx);
}
export async function addFailure(ctx, rec) {
  const item = slimRecord({ ts: Date.now(), attempts: 0, errors: [], ...rec });
  // 同一来源（标题 / 文件名）只保留最新一条：重试再次失败时就地刷新该条，
  // 不在待办里堆积同一篇的重复记录（旧记录的 ts 随之失效，UI 以新 ts 为键）。
  const key = item.source ? String(item.source) : "";
  const list = await loadFailures(ctx);
  const rest = key ? list.filter((x) => !(x && x.source && String(x.source) === key)) : list;
  await saveFailures(ctx, [item, ...rest]);
  return item;
}
export async function removeFailure(ctx, ts) {
  const list = await loadFailures(ctx);
  await saveFailures(ctx, list.filter((x) => String(x.ts) !== String(ts)));
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
    "【JSON 语法硬规则】对象键与值之间必须是半角冒号分隔，严禁把 key：value 连写成一个字符串、严禁用全角冒号充当分隔符；字符串值内需要引用时用中文引号「」，绝不输出未转义的半角双引号。",
    "字段与格式规范（与落格校验同一来源，即 commit_extraction 工具定义）：",
    commitExtraction.description,
    `【本次固定值】meta.extractor 必须为 "C"；meta.date 必须为 "${today()}"；id 自拟 <标题>-<作者>-<年份>（中文可直入、标题去标点、总长超 60 字截标题、年份结尾，如示例论文标题及其在示例语境下的建构-示例作者-2016）。`,
    "【原文开始】",
  ].join("\n");
  return { systemPrompt, contract };
}

// ---- 模型输出 → JSON（去围栏 + 首{末}截取，容忍前后杂字；截断输出自愈）----
// provider 单响应上限会把输出砍在结构中间：扫括号栈与字符串状态，
// 砍掉未闭合字符串与悬空尾部，按栈补全闭合后再交同一道落格校验（修不了返回 null）。
function repairTruncatedJson(s) {
  const scan = (src) => {
    let inStr = false, esc = false, strStart = -1;
    const stack = [];
    for (let i = 0; i < src.length; i++) {
      const c = src[i];
      if (inStr) {
        if (esc) { esc = false; continue; }
        if (c === "\\") { esc = true; continue; }
        if (c === '"') inStr = false;
        continue;
      }
      if (c === '"') { inStr = true; strStart = i; continue; }
      if (c === "{" || c === "[") stack.push(c);
      else if (c === "}" || c === "]") stack.pop();
    }
    return { inStr, strStart, stack };
  };
  const { inStr, strStart, stack } = scan(s);
  if (!inStr && stack.length === 0) return null; // 结构本就闭合，失败不属截断，不自愈
  let out = inStr ? s.slice(0, Math.max(strStart, 0)) : s;
  out = out.replace(/\s+$/, "").replace(/,+$/, "");
  if (/:\s*$/.test(out)) out += " null";
  const { stack: stack2 } = scan(out);
  let fixed = out;
  for (let i = stack2.length - 1; i >= 0; i--) fixed += stack2[i] === "{" ? "}" : "]";
  try {
    JSON.parse(fixed);
    return fixed;
  } catch {
    return null;
  }
}

// 属性名后缺 ':' 的定点手术（观测形态：模型把 key：value 写成单字符串，全角冒号丢了分隔）。
// 位置从 parse 错误消息提取，修完必须能完整 parse 才返回，否则不动刀。
function repairMissingColon(s, parseMessage) {
  const m = /position (\d+)/.exec(String(parseMessage || ""));
  if (!m) return null;
  const pos = Number(m[1]);
  for (const p of [pos, pos - 1, pos + 1]) {
    if (!(p >= 2 && p <= s.length)) continue;
    let end = -1;
    if (s[p - 1] === '"') end = p - 1;
    else if (s[p] === '"') end = p;
    if (end < 1) continue;
    let start = -1;
    for (let i = end - 1; i > 0; i--) {
      if (s[i] === '"' && s[i - 1] !== "\\") { start = i; break; }
    }
    if (start < 0) continue;
    const raw = s.slice(start + 1, end);
    const ci = raw.indexOf("：");
    if (ci < 0) continue;
    const fixed = s.slice(0, start) + JSON.stringify(raw.slice(0, ci)) + ":" + JSON.stringify(raw.slice(ci + 1)) + s.slice(end + 1);
    try {
      JSON.parse(fixed);
      return fixed;
    } catch { /* 位置假设不成立，试下一个 */ }
  }
  return null;
}

// 上游内容风控拒答的识别（只读判断，不做任何规避处理）
export function isProviderRejection(text) {
  return /request was rejected|high risk/i.test(String(text || ""));
}

export function extractJson(raw) {
  let s = String(raw || "").trim();
  s = s.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  const a = s.indexOf("{");
  if (a < 0) throw new Error("模型输出中没有 JSON（可能是拒答、解释文字或空回复）——属模型输出问题，非数据问题；重试通常有效");
  const body = s.slice(a);
  // ① 首个字符串感知的平衡闭合点截取：容忍 JSON 尾部的复读/解释等垃圾（即使垃圾里带括号），
  //    原先的 lastIndexOf('}') 会把两段连同垃圾整个包进来（Unexpected non-whitespace after JSON）。
  const end = firstBalancedEnd(body);
  const primary = end >= 0 ? body.slice(0, end + 1) : body;
  try {
    return unwrapExtraction(JSON.parse(primary));
  } catch (e) {
    // ② 两级自愈：截断用 body 全量；中途损坏（如属性名后缺 ':'）按 parse 错误位置定点手术。
    const repaired = repairTruncatedJson(body) ?? repairMissingColon(primary, e?.message);
    if (repaired === null) {
      throw new Error(`JSON 结构损坏且自动修复失败（已尝试补全截断、修复冒号、截取尾部垃圾）——属模型输出质量问题，重试通常有效。原始错误：${e?.message || e}`);
    }
    return unwrapExtraction(JSON.parse(repaired));
  }
}

// 字符串感知地找第一个栈空位置（第一个完整 JSON 值的结束点）；找不到返回 -1
function firstBalancedEnd(s) {
  let inStr = false, esc = false, depth = 0, firstOpen = -1;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') { inStr = true; continue; }
    if (c === "{" || c === "[") { if (firstOpen < 0) firstOpen = i; depth++; continue; }
    if (c === "}" || c === "]") {
      depth--;
      if (firstOpen >= 0 && depth === 0) return i;
    }
  }
  return -1;
}

// 模型偶尔输出 {"extraction":{...}} 包装层：仅当顶层没有任何提取特征字段时才剥，
// 避免误伤 {extraction, newTypeProposal} 这类带顶层字段的正常结构。
const EX_TOP_KEYS = ["meta", "id", "scores", "understanding", "appreciation", "newTypeProposal", "emergent", "slots"];
function unwrapExtraction(d) {
  if (!d || typeof d !== "object" || Array.isArray(d)) return d;
  if (!d.extraction || typeof d.extraction !== "object" || Array.isArray(d.extraction)) return d;
  if (EX_TOP_KEYS.some((k) => d[k] !== undefined)) return d;
  return d.extraction;
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
export async function runImport(ctx, { text, shouldAbort }) {
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
  let out = null;
  let lastModelError = null;
  let gotOutput = false;
  let lastCandidate; // 最近一次成功解析出的条目身份（供失败结果带回待办）

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    // 停止检查点 1：发起新调用前（已停止则不再发请求）
    if (shouldAbort && shouldAbort()) {
      return { ok: false, stage: "cancelled", message: "已停止（未写库，无残留）", attempts: attempt, ms: Date.now() - t0 };
    }
    try {
      const res = await ctx.models.utility({
        requestId: `import-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        systemPrompt: prompts.systemPrompt,
        messages,
        maxTokens: MAX_TOKENS,
      });
      out = String(res?.text ?? "");
    } catch (e) {
      // 调用层瞬时故障（provider 抖动、宿主更新窗口）计入同一重试预算，不再一击即弃
      lastModelError = `模型调用失败：${errMsg(e)}`;
      await new Promise((r) => setTimeout(r, RETRY_PAUSE_MS));
      continue;
    }
    if (!out.trim()) {
      lastModelError = "模型返回空文本";
      await new Promise((r) => setTimeout(r, RETRY_PAUSE_MS));
      continue;
    }
    // 停止检查点 2：已飞调用返回后、解析前（丢弃结果，不继续链路）
    if (shouldAbort && shouldAbort()) {
      return { ok: false, stage: "cancelled", message: "已停止（已丢弃本次调用结果，未写库）", attempts: attempt, ms: Date.now() - t0 };
    }
    // 上游内容风控拒答：立即停止，不消耗重试预算反复撞击（对风控不做任何规避），归因交回用户决定
    if (isProviderRejection(out)) {
      return {
        ok: false,
        stage: "provider_rejected",
        message: "模型提供方风控拒答（上游判定高风险内容）——非插件问题、非提示词问题；插件不做任何规避处理，是否稍后重试、换料或调整辅助模型配置由你决定",
        attempts: attempt,
        ms: Date.now() - t0,
      };
    }
    gotOutput = true;

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
    lastCandidate = candidateOf(d);
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
          candidate: candidateOf(d),
          ms: Date.now() - t0,
        };
      } catch (e) {
        return { ok: false, stage: "commit", message: `入库异常：${errMsg(e)}`, attempts: attempt, ms: Date.now() - t0 };
      }
    }

    errors = v.errors;
    messages.push({ role: "assistant", content: out.slice(0, 4000) }, { role: "user", content: feedback(errors) });
  }

  if (!gotOutput && lastModelError) {
    return {
      ok: false,
      stage: "model",
      message: `${lastModelError}（重试 ${MAX_ATTEMPTS} 次均失败）`,
      attempts: MAX_ATTEMPTS,
      ms: Date.now() - t0,
    };
  }
  return {
    ok: false,
    stage: "validate",
    message: `落格校验 ${MAX_ATTEMPTS} 次未通过，已停止`,
    attempts: MAX_ATTEMPTS,
    errors,
    output: out || undefined,
    candidate: lastCandidate,
    ms: Date.now() - t0,
  };
}
