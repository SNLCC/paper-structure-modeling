// ---- 建模链（管线第 4-5 环：聚类建模 → 生成写作模型）----
// 面板异步入口用，与导入链同构：单源 = SKILL「建模与生成」节；
// 每类型一次模型调用（素材 = 该类型全部篇目全文，超上限拒绝并指引对话）；
// 写闸 = commit_model.execute（版本自动递增、历史不覆盖）——更新即再次生成得 v(n+1)。
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { ref, STRUCT_ROOT } from "./paths.js";
import { extractJson, isProviderRejection } from "./import.js";
import { appendQueueRow } from "./taglib.js";
import * as commitModel from "../tools/commit-model.js";

const MAX_CHARS = 24000;
const MAX_TOKENS = 8000;
const MAX_ATTEMPTS = 3;
const RETRY_PAUSE_MS = 1500;
const MIN_SAMPLES = 2;
const SKILL_FILE = fileURLToPath(new URL("../skills/structure-extraction/SKILL.md", import.meta.url));
const decoder = new TextDecoder();
const today = () => new Date().toISOString().slice(0, 10);
const errMsg = (e) => String(e?.message || e);

async function readMd(ctx, abs) {
  const r = await ctx.resources.read(ref(abs));
  return decoder.decode(r.content ?? new Uint8Array());
}

// 样本指纹：篇目集 + 各篇标签集 + 归纳规则（SKILL）的稳定哈希——排序后计算，顺序无关；
// 含规则盐：提示词（建模节）演进后指纹变化，允许重新归纳生成新版本
export function sampleFingerprint(ids, tagLists, extra = "") {
  const a = ids.slice().sort().join("|");
  const b = tagLists.map((t) => t.slice().sort().join(",")).join("|");
  return createHash("sha256").update(`${a}#${b}#${extra}`).digest("hex").slice(0, 16);
}

// 读该类型最新版模型的头部（版本号 + 样本指纹，无则 null）
async function readLatestModelHead(ctx, typeName) {
  try {
    const list = await ctx.resources.list(ref(`${STRUCT_ROOT}/写作模型`));
    const re = new RegExp(`^${typeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}-写作模型-v(\\d+)\\.md$`);
    let maxV = 0;
    for (const it of list.items || []) {
      const m = re.exec(it.name);
      if (m) maxV = Math.max(maxV, Number(m[1]));
    }
    if (!maxV) return { version: 0, fingerprint: null };
    const md = await readMd(ctx, `${STRUCT_ROOT}/写作模型/${typeName}-写作模型-v${maxV}.md`);
    const fm = /^- 样本指纹：(\S+)/m.exec(md);
    return { version: maxV, fingerprint: fm ? fm[1] : null };
  } catch {
    return { version: 0, fingerprint: null };
  }
}

// 类型库表格：| 类型 | 定义 | 归并自 | 子语法 | 状态 | 出现篇数 |
function parseTypeRows(md) {
  const rows = [];
  for (const line of String(md || "").split(/\r?\n/)) {
    if (!line.startsWith("|")) continue;
    const c = line.split("|").slice(1, -1).map((s) => s.trim());
    if (c.length < 5) continue;
    if (!c[0] || c[0] === "类型" || /^-+$/.test(c[0]) || c[0].includes("暂无")) continue;
    rows.push({ type: c[0], mergedFrom: c[2] || "", status: c[4] || "" });
  }
  return rows;
}

// 闭包映射表：| 原始类型 | 当前类型 | 钉死（库主裁决） | —— 已压平为单跳
function parseMapRows(md) {
  const rows = [];
  for (const line of String(md || "").split(/\r?\n/)) {
    if (!line.startsWith("|")) continue;
    const c = line.split("|").slice(1, -1).map((s) => s.trim());
    if (c.length >= 2 && c[0] && c[0] !== "原始类型" && !/^-+$/.test(c[0])) rows.push({ from: c[0], to: c[1] });
  }
  return rows;
}

// 篇目落格行：- 标签：a、b、c
function parseEntryTags(md) {
  const m = /^- 标签：(.*)$/m.exec(String(md || ""));
  if (!m) return [];
  const s = m[1].trim();
  if (!s || s === "（无）") return [];
  return s.split("、").map((x) => x.trim()).filter(Boolean);
}

// 建模输出规则（contract 引用；同时作为样本指纹的规则盐——改规则即允许重新生成新版本）
const MODEL_RULES = [
  "【content 必备分节——逐节回应，不得省略】：① 谋篇结构（这类文献如何起承转合组织全篇，据 skeleton 字段跨篇归纳）；② 开头与结尾策略（据 openingClosing）；③ 论证推进与密度（据 paragraphFunctions/densityDistribution 的跨篇共性）；④ 核心战术规律（类型定义维度：征引/反驳/界定手法等，这是模型核心层，每条挂出处）；⑤ 高低分差异。某分节跨篇无共性时，在该节首行写“跨篇无共性，不归纳”，不得整节缺失、不得为凑篇幅稀释核心。",
  "【内容纪律】骨架出处用人话格式：《题名》（作者，年份）· 位置（例：《示例论文标题》（示例作者，2020）· §1.1），出处信息取自各篇首行与元信息节，不要拿文件 id 当出处显示（可在括号内附注 id 如 （sample-2020） 备查）；每条附原文引文 + 评分；低分样本不整篇混入正向模型；禁填空模板。",
  "【JSON 硬规则】半角冒号分隔，字符串内不出现未转义半角引号（引用用中文引号）。",
].join("\n");

export async function runModelGeneration(ctx) {
  const t0 = Date.now();
  const base = () => ({ ms: Date.now() - t0 });

  let skill, typeMd, mapMd, entryNames;
  try {
    skill = readFileSync(SKILL_FILE, "utf8");
    typeMd = await readMd(ctx, `${STRUCT_ROOT}/类型库.md`);
    mapMd = await readMd(ctx, `${STRUCT_ROOT}/闭包映射表.md`);
    const list = await ctx.resources.list(ref(`${STRUCT_ROOT}/篇目`));
    entryNames = (list.items || [])
      .map((x) => x.name)
      .filter((n) => n.endsWith(".md") && !n.startsWith("_"));
  } catch (e) {
    return { ok: false, stage: "snapshot", message: `结构库快照读取失败：${errMsg(e)}`, ...base() };
  }

  const typeRows0 = parseTypeRows(typeMd);
  const mapRows = parseMapRows(mapMd);
  // 类型源并集：类型库条目 ∪ 闭包映射表右列——归并（apply_tag_merge）只写映射表，
  // 类型库可能尚未登记，此时以映射表的当前类型为源，否则归并完仍报无类型。
  const typeRows = typeRows0.length
    ? typeRows0
    : [...new Set(mapRows.map((r) => r.to))].map((t) => ({ type: t, mergedFrom: "", status: "归并" }));
  if (!typeRows.length) return { ok: false, stage: "types", message: "类型库与闭包映射表均为空，先在对话里跑标签归并再建模", ...base() };
  if (!entryNames.length) return { ok: false, stage: "entries", message: "篇目为空，先导入拆解文献", ...base() };

  const entries = [];
  for (const name of entryNames) {
    try {
      entries.push({ name, text: await readMd(ctx, `${STRUCT_ROOT}/篇目/${name}`) });
    } catch {
      // 单篇读失败跳过，不让整链倒
    }
  }

  const results = [];
  let anyCommitted = false;

  for (const tr of typeRows) {
    const labelSet = new Set([
      tr.type,
      ...tr.mergedFrom.split(/[、,，]/).map((s) => s.trim()).filter(Boolean),
      ...mapRows.filter((r) => r.to === tr.type).map((r) => r.from),
    ]);
    const samples = entries.filter((e) => parseEntryTags(e.text).some((t) => labelSet.has(t)));
    if (samples.length < MIN_SAMPLES) {
      results.push({ type: tr.type, status: tr.status, skipped: `样本 ${samples.length} 篇（<${MIN_SAMPLES} 不生成）` });
      continue;
    }
    // 无变化检测：样本与标签集指纹与该类型最新版一致 → 跳过，不消耗版本号
    const fp = sampleFingerprint(samples.map((s) => s.name), samples.map((s) => parseEntryTags(s.text)), `${skill}\n${MODEL_RULES}`);
    const latest = await readLatestModelHead(ctx, tr.type);
    if (latest.fingerprint && latest.fingerprint === fp) {
      results.push({ type: tr.type, status: tr.status, skipped: `样本未变（指纹一致），v${latest.version} 仍有效` });
      continue;
    }
    const corpus = samples.map((e) => `### 篇目：${e.name}\n${e.text}`).join("\n\n");
    if (corpus.length > MAX_CHARS) {
      results.push({ type: tr.type, status: tr.status, skipped: `素材 ${corpus.length} 字超 ${MAX_CHARS} 上限，改在对话里沉淀` });
      continue;
    }

    const contract = [
      `【建模任务】按 SKILL「建模与生成」一节，为类型「${tr.type}」归纳一份写作模型，只输出 JSON 由系统提交写入（本通道不直接调工具）。`,
      `【输出】只输出一个 JSON 对象：{"typeName":"${tr.type}","content":"<模型 markdown 正文>","sampleSize":${samples.length},"confidenceBasis":"<样本量/频率稳定性/锚点覆盖度三依据，无锚点写冷启动低置信>","scoreGrouping":"<高低分组口径>"}`,
      MODEL_RULES,
      `【类型标签集】${[...labelSet].join("、")}`,
      `【篇目素材（${samples.length} 篇）】`,
      corpus,
      "【原文结束】",
    ].join("\n\n");

    let lastErr = null;
    let done = false;
    for (let attempt = 1; attempt <= MAX_ATTEMPTS && !done; attempt++) {
      let out = "";
      try {
        const res = await ctx.models.utility({
          requestId: `model-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          systemPrompt: skill,
          messages: [{ role: "user", content: contract }],
          maxTokens: MAX_TOKENS,
        });
        out = String(res?.text ?? "");
      } catch (e) {
        lastErr = `模型调用失败：${errMsg(e)}`;
        await new Promise((r) => setTimeout(r, RETRY_PAUSE_MS));
        continue;
      }
      if (!out.trim()) {
        lastErr = "模型返回空文本";
        await new Promise((r) => setTimeout(r, RETRY_PAUSE_MS));
        continue;
      }
      // 风控拒答：立即停止，不反复撞击（不破甲红线）
      if (isProviderRejection(out)) {
        lastErr = "模型提供方风控拒答（上游判定高风险内容）——非插件问题；插件不做任何规避，已停止";
        break;
      }
      let d;
      try {
        d = extractJson(out);
      } catch (e) {
        lastErr = `JSON 解析失败：${errMsg(e)}`;
        continue;
      }
      try {
        const c = await commitModel.execute({ ...d, typeName: tr.type, fingerprint: fp, date: today() }, ctx);
        const cr = JSON.parse(c?.content?.find((x) => x.type === "text")?.text || "{}");
        if (cr.ok) {
          results.push({ type: tr.type, status: tr.status, ok: true, file: cr.file, version: cr.version, previous: cr.previous, samples: samples.length });
          anyCommitted = true;
          done = true;
        } else {
          lastErr = `提交校验未过：${(cr.errors || []).map((x) => (typeof x === "string" ? x : x.message || JSON.stringify(x))).join("；") || cr.message || "未知"}`;
        }
      } catch (e) {
        lastErr = `提交异常：${errMsg(e)}`;
      }
    }
    if (!done) results.push({ type: tr.type, status: tr.status, ok: false, error: lastErr || "重试耗尽" });
  }

  return {
    ok: anyCommitted,
    stage: anyCommitted ? "committed" : "failed",
    results,
    ...base(),
  };
}

// ---- 语义提议（道 2.5）：模型读标签库语义找相似对，按道 2 格式入队；只提议不裁决 ----
export async function runMergeProposal(ctx) {
  const t0 = Date.now();
  const base = () => ({ ms: Date.now() - t0 });
  let skill, tagMd, mapMd;
  try {
    skill = readFileSync(SKILL_FILE, "utf8");
    tagMd = await readMd(ctx, `${STRUCT_ROOT}/标签库.md`);
    mapMd = await readMd(ctx, `${STRUCT_ROOT}/闭包映射表.md`);
  } catch (e) {
    return { ok: false, stage: "snapshot", message: `标签库读取失败：${errMsg(e)}`, ...base() };
  }

  const contract = [
    "【提议任务】通读标签库（标签 + 指向的处置动作），找出语义相近、疑似同义的标签对——不同措辞若指向同一类论证动作即为候选。",
    "只提议，不裁决：是否合并与合并方向由库主在队列页决定。",
    `【排除】闭包映射表已有的归并不再提议。当前映射：\n${mapMd}`,
    `【输出】只输出一个 JSON 对象：{"proposals":[{"a":"<标签原名>","b":"<标签原名>","reason":"<语义相近的依据，一句话>"}]}，没有合适对则输出 {"proposals":[]}。`,
    "【JSON 硬规则】半角冒号分隔，字符串内不出现未转义半角引号（引用用中文引号）。",
    "【标签库】",
    tagMd,
  ].join("\n\n");

  let out = "";
  try {
    const res = await ctx.models.utility({
      requestId: `propose-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      systemPrompt: skill,
      messages: [{ role: "user", content: contract }],
      maxTokens: MAX_TOKENS,
    });
    out = String(res?.text ?? "");
  } catch (e) {
    return { ok: false, stage: "model", message: `模型调用失败：${errMsg(e)}`, ...base() };
  }
  if (!out.trim()) return { ok: false, stage: "model", message: "模型返回空文本", ...base() };
  if (isProviderRejection(out)) {
    return { ok: false, stage: "provider_rejected", message: "模型提供方风控拒答（上游判定高风险内容）——非插件问题；插件不做任何规避，已停止", ...base() };
  }
  let d;
  try {
    d = extractJson(out);
  } catch (e) {
    return { ok: false, stage: "json", message: `JSON 解析失败：${errMsg(e)}`, ...base() };
  }

  const proposals = Array.isArray(d.proposals) ? d.proposals : [];
  const todayStr = new Date().toISOString().slice(0, 10);
  let cur = tagMd;
  const queued = [];
  for (const p of proposals) {
    const a = String(p?.a || "").trim();
    const b = String(p?.b || "").trim();
    if (!a || !b || a === b) continue;
    const r = appendQueueRow(cur, {
      pair: `${a} vs ${b}`,
      evidence: `语义相近：${String(p?.reason || "").trim() || "模型提议"}`,
      date: todayStr,
    });
    if (r.appended) { cur = r.md; queued.push(`${a} vs ${b}`); }
  }
  if (queued.length) {
    try {
      await ctx.resources.write(ref(`${STRUCT_ROOT}/标签库.md`), cur);
    } catch (e) {
      return { ok: false, stage: "write", message: `队列写入失败：${errMsg(e)}`, ...base() };
    }
  }
  return {
    ok: queued.length > 0,
    stage: queued.length ? "queued" : "empty",
    proposed: proposals.map((p) => ({ a: p?.a, b: p?.b, reason: p?.reason })),
    queued,
    message: queued.length ? undefined : "模型未找到新的疑似对（已在队列中的对不重复提议，或确实无相近标签）",
    ...base(),
  };
}
