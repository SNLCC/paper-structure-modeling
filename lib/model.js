// ---- 建模链（管线第 4-5 环：聚类建模 → 生成写作模型）----
// 面板异步入口用，与导入链同构：单源 = SKILL「建模与生成」节；
// 每类型一次模型调用（素材 = 该类型全部篇目全文，超上限拒绝并指引对话）；
// 写闸 = commit_model.execute（版本自动递增、历史不覆盖）——更新即再次生成得 v(n+1)。
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { ref, STRUCT_ROOT } from "./paths.js";
import { DATA_DIR } from "./config.js";
import { extractJson, isProviderRejection } from "./import.js";
import { appendQueueRow, parseTagLib } from "./taglib.js";
import { parseTypeCandidate } from "./typelib.js";
import * as commitModel from "../tools/commit-model.js";

// 建模素材（同类样本拼接）上限：与导入上限同量级，按请求体积与耗时设，不是模型上下文边界；
// 超出则跳过该类型并提示改在对话里沉淀。
const MAX_CHARS = 60000;
const MAX_TOKENS = 8000;
const MAX_ATTEMPTS = 3;
const RETRY_PAUSE_MS = 1500;
const MIN_SAMPLES = 2;
const SKILL_FILE = fileURLToPath(new URL("../skills/structure-extraction/SKILL.md", import.meta.url));
const decoder = new TextDecoder();
const today = () => new Date().toISOString().slice(0, 10);
const errMsg = (e) => String(e?.message || e);
const SEM_FP_FILE = path.join(DATA_DIR, "semantic-scan-fp.txt");

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

// 模型文件头部改标签（随归并改名 / 并入家族）：H1、类型、版本同步；from 存在时补记原名。
// 纯函数（md in → md out），可被 dev-check 直接测。
export function retagModelHead(md, { to, from, version }) {
  let t = String(md || "");
  t = t.replace(/^#\s+.*写作模型\s+v\d+\s*$/m, `# ${to} 写作模型 v${version}`);
  t = t.replace(/^- 类型：.*$/m, `- 类型：${to}`);
  t = t.replace(/^- 版本：v\d+\s*$/m, `- 版本：v${version}`);
  if (from && !/^- 原名：/m.test(t)) t = t.replace(/(^- 版本：v\d+)$/m, `$1\n- 原名：${from}`);
  return t;
}

// 篇目落格行：- 标签：a、b、c
function parseEntryTags(md) {
  const m = /^- 标签：(.*)$/m.exec(String(md || ""));
  if (!m) return [];
  const s = m[1].trim();
  if (!s || s === "（无）") return [];
  return s.split("、").map((x) => x.trim()).filter(Boolean);
}

// 提取 SKILL 指定节（作指纹盐用：只有建模相关规则变化才触发重新生成，
// 拆解/取用等无关改动不污染指纹）；节标题找不到时回退整份 SKILL（保守）。
export function extractSkillSection(skill, title) {
  const re = new RegExp(`^## ${title}[^\\n]*\\n[\\s\\S]*?(?=^## |$)`, "m");
  const m = re.exec(String(skill || ""));
  return m ? m[0] : String(skill || "");
}

// 建模输出规则（contract 引用；同时作为样本指纹的规则盐——改规则即允许重新生成新版本）
const MODEL_RULES = [
  "【头部结构】模型文件头部由系统写入：类型、版本、样本量、样本清单、关联标签、生成日期、置信度依据、高低分组口径、样本指纹（供机读与检索桥，正文无需重复）。",
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
    // 已并入的类型不是当前类型：其样本已经随目标类型计入（labelSet 含映射表 from 列），
    // 再单独建模只会造出与目标同名的重复家族，让「随归并改名」永远撞车。
    const absorbed = /并入\s*→\s*(.+)$/.exec(tr.status || "");
    if (absorbed) {
      results.push({ type: tr.type, status: tr.status, skipped: `已并入「${absorbed[1].trim()}」，不单独建模（样本随目标类型计入）` });
      continue;
    }
    const labelSet = new Set([
      tr.type,
      ...tr.mergedFrom.split(/[、,，]/).map((s) => s.trim()).filter(Boolean),
      ...mapRows.filter((r) => r.to === tr.type).map((r) => r.from),
    ]);
    const samples = entries.filter((e) =>
      parseEntryTags(e.text).some((t) => labelSet.has(t)) || parseTypeCandidate(e.text)?.name === tr.type
    ); // 第 121 轮：宣告即样本——篇目 2.5 宣告了某类型即为该类型样本（比 tag 推断更硬），修「新建类型样本 0 篇」
    if (samples.length < MIN_SAMPLES) {
      results.push({ type: tr.type, status: tr.status, skipped: `样本 ${samples.length} 篇（<${MIN_SAMPLES} 不生成）` });
      continue;
    }
    // 无变化检测：样本与标签集指纹与该类型最新版一致 → 跳过，不消耗版本号
    const fp = sampleFingerprint(
      samples.map((s) => s.name),
      samples.map((s) => parseEntryTags(s.text)),
      `${MODEL_RULES}\n${extractSkillSection(skill, "建模与生成")}`,
    );
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
        const c = await commitModel.execute(
          { ...d, typeName: tr.type, fingerprint: fp, date: today(), sampleIds: samples.map((s) => s.name), tags: [...labelSet].join("、") },
          ctx,
        );
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

  // 第 112 轮：语义查重指纹（无变化检测，沿用建模链模式）——标签集与上次成功查重一致则跳过，
  // 避免一键查重的习惯性点击白烧模型调用；仅在扫描完成后更新指纹（失败早退路径不写）。
  const semFp = createHash("sha256").update(parseTagLib(tagMd).tags.map((t) => t.tag).sort().join("|")).digest("hex").slice(0, 16);
  let lastSemFp = "";
  try { lastSemFp = readFileSync(SEM_FP_FILE, "utf8").trim(); } catch { /* 首次无指纹 */ }
  if (lastSemFp === semFp) {
    return { ok: true, stage: "skipped", queued: [], message: "标签集与上次语义查重一致（无新标签），已跳过语义部分；有新标签入库后再点即可重跑", ...base() };
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
  const dropped = [];
  // 第 111 轮：提议标签必须在标签库中——防模型笔误/幻觉生成幽灵对（如「既定定义梳理归纳」）
  const validTags = new Set(parseTagLib(tagMd).tags.map((t) => t.tag));
  for (const p of proposals) {
    const a = String(p?.a || "").trim();
    const b = String(p?.b || "").trim();
    if (!a || !b || a === b) continue;
    if (!validTags.has(a) || !validTags.has(b)) { dropped.push(`${a} vs ${b}`); continue; }
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
  // 第 112 轮：扫描完成（无论新对多少）才更新指纹——模型/json 失败等早退路径不写，
  // 否则一次失败会把「没跑过」记成「跑过」。
  try { mkdirSync(DATA_DIR, { recursive: true }); writeFileSync(SEM_FP_FILE, semFp, "utf8"); } catch { /* 指纹写失败不阻断主流程 */ }
  return {
    ok: queued.length > 0,
    stage: queued.length ? "queued" : "empty",
    proposed: proposals.map((p) => ({ a: p?.a, b: p?.b, reason: p?.reason })),
    queued,
    dropped: dropped.length ? dropped : undefined,
    message: queued.length
      ? (dropped.length ? `已入队 ${queued.length} 对；丢弃 ${dropped.length} 对无效提议（标签不在标签库）` : undefined)
      : (dropped.length
        ? `${dropped.length} 对提议的标签不在标签库（笔误或幻觉），已全部丢弃；可改用共现查重`
        : "模型未找到新的疑似对（已在队列中的对不重复提议，或确实无相近标签）"),
    ...base(),
  };
}

// ---- 类型并入推荐（§5.9 D 补强，第 114 轮）：模型读候选定义与类型库定义，逐候选建议——
// 并入某既有类型 / 建议新立 / 建议驳回 + 一句话依据；零写库，只提议不裁决（红线 6）。
export async function runTypeTargets(ctx, input) {
  const t0 = Date.now();
  const base = () => ({ ms: Date.now() - t0 });
  const candidates = (Array.isArray(input?.candidates) ? input.candidates : [])
    .map((c) => ({ name: String(c?.name || "").trim(), definition: String(c?.definition || "").trim() }))
    .filter((c) => c.name);
  const types = (Array.isArray(input?.types) ? input.types : [])
    .map((t) => ({ type: String(t?.type || "").trim(), definition: String(t?.definition || "").trim() }))
    .filter((t) => t.type);
  if (!candidates.length) return { ok: false, stage: "input", message: "无待裁候选", ...base() };
  if (!types.length) return { ok: false, stage: "input", message: "类型库为空——先新立至少一个类型，再用推荐", ...base() };

  const contract = [
    "【类型并入推荐任务】下面是待裁的类型候选与类型库中已有的类型。对每个候选判断：",
    "它是否与某个既有类型实质同类（同一类整篇写作模式，仅措辞不同或粒度差一档）？",
    "输出三种建议之一：并入某个既有类型（给出该类型名）/ 建议新立（无实质同类）/ 建议驳回（无独立价值，仅表述差异）。",
    "只提议，不裁决：是否并入与最终处置由库主在面板上定（红线）。",
    "【输出】只输出一个 JSON 对象：{\"suggestions\":[{\"name\":\"<候选名>\",\"target\":\"<既有类型名|新立|驳回>\",\"reason\":\"<一句话依据>\"}]}——每个候选恰好一条，name 逐字一致。",
    "【JSON 硬规则】半角冒号分隔，字符串内不出现未转义半角引号（引用用中文引号）。",
    `【候选（${candidates.length} 个）】`,
    candidates.map((c) => `${c.name} —— ${c.definition || "（定义待补）"}`).join("\n"),
    `【类型库既有类型（${types.length} 个）】`,
    types.map((t) => `${t.type} —— ${t.definition || ""}`).join("\n"),
  ].join("\n\n");

  let out = "";
  try {
    const res = await ctx.models.utility({
      requestId: `typetargets-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      systemPrompt: readFileSync(SKILL_FILE, "utf8"),
      messages: [{ role: "user", content: contract }],
      maxTokens: MAX_TOKENS,
    });
    out = String(res?.text ?? "");
  } catch (e) {
    return { ok: false, stage: "model", message: `模型调用失败：${errMsg(e)}`, ...base() };
  }
  if (!out.trim()) return { ok: false, stage: "model", message: "模型返回空文本", ...base() };
  if (isProviderRejection(out)) {
    return { ok: false, stage: "provider_rejected", message: "模型提供方风控拒答（上游判定高风险内容）——非插件问题；插件不做任何规避，已停止" };
  }
  let d;
  try {
    d = extractJson(out);
  } catch (e) {
    return { ok: false, stage: "json", message: `JSON 解析失败：${errMsg(e)}`, ...base() };
  }

  const candNames = new Set(candidates.map((c) => c.name));
  const typeNames = new Set(types.map((t) => t.type));
  const suggestions = [];
  for (const s of Array.isArray(d.suggestions) ? d.suggestions : []) {
    const name = String(s?.name || "").trim();
    if (!candNames.has(name)) continue;
    const target = String(s?.target || "").trim();
    if (target !== "新立" && target !== "驳回" && !typeNames.has(target)) continue; // 目标不在库 = 无效建议，丢弃
    suggestions.push({ name, target, reason: String(s?.reason || "").trim() });
  }
  if (!suggestions.length) return { ok: false, stage: "output", message: "模型未返回有效建议（校验后为空）", ...base() };
  const missing = candidates.length - suggestions.length;
  return { ok: true, suggestions, message: missing > 0 ? `已给出 ${suggestions.length} 条建议；${missing} 个候选未返回（可重试）` : undefined, ...base() };
}

// ---- 标签战术模型（§5.10，第 123 轮）：样本 = 携带该标签的篇目；只归纳「这一招怎么使」，不写整篇编排 ----
const TACTIC_RULES = [
  "【头部结构】同写作模型（系统写入：类型=战术-<标签>、版本、样本量、样本清单、关联标签、生成日期、置信度依据、高低分口径、样本指纹）。",
  "【content 必备分节——逐节回应，不得省略】：① 这个战术是什么（定义 + 适用时机）；② 用法谱系（每个实例怎么用：手法说明 + 挂出处《题名》（作者，年份）·位置 + 原文引文 + 篇级评分）；③ 变体与失效边界（何时不该用、用砸的表现；低分样本可择优吸收片段，须注明出自篇级低分样本）；④ 与相邻标签的分界（仅写已判定独立的近邻标签；无则写「无判定独立的近邻标签」）。跨篇无共性的分节如实写「跨篇无共性，不归纳」。",
  "【内容纪律】只归纳单个战术的用法，禁止写整篇编排/谋篇次序（编排归类型模型）；禁填空模板；出处用人话格式《题名》（作者，年份）·位置，每条附原文引文 + 评分；低分样本不整篇混入正向模型；字符串内不出现未转义半角引号（引用用中文引号）。",
].join("\n");

export async function runTacticModel(ctx, input) {
  const t0 = Date.now();
  const base = () => ({ ms: Date.now() - t0 });
  const label = String(input?.label || "").trim();
  if (!label) return { ok: false, stage: "input", message: "label 必填（要沉淀的战术标签）", ...base() };

  const samples = await scanCarriers(ctx, label);
  if (samples.length < MIN_SAMPLES) {
    return { ok: false, stage: "samples", message: `标签「${label}」仅 ${samples.length} 篇携带（<${MIN_SAMPLES} 不生成）`, ...base() };
  }
  return { ...(await tacticGenerate(ctx, label, samples)), ...base() };
}

// 单标签核心（runTacticModel 与批量链共用，第 124 轮抽取）：指纹 → 素材上限 → 模型 → 写闸
async function tacticGenerate(ctx, label, samples) {
  const baseName = `战术-${label}`;
  const fp = sampleFingerprint(samples.map((s) => s.id), samples.map((s) => parseEntryTags(s.text)), `tactic:${label}\n${TACTIC_RULES}`);
  const latest = await readLatestModelHead(ctx, baseName);
  if (latest.fingerprint && latest.fingerprint === fp) {
    return { ok: false, stage: "unchanged", version: latest.version, message: `样本未变，v${latest.version} 仍有效` };
  }
  const corpus = samples.map((s) => `### 篇目：${s.id}\n${s.text}`).join("\n\n");
  if (corpus.length > MAX_CHARS) {
    return { ok: false, stage: "size", message: `素材 ${corpus.length} 字超 ${MAX_CHARS} 上限` };
  }

  const contract = [
    `【战术建模任务】为标签「${label}」归纳一份战术模型，只输出 JSON 由系统提交写入（本通道不直接调工具）。`,
    `【输出】只输出一个 JSON 对象：{\"typeName\":\"${label}\",\"content\":\"<模型 markdown 正文>\",\"sampleSize\":${samples.length},\"confidenceBasis\":\"<样本量/频率稳定性/锚点覆盖度三依据，无锚点写冷启动低置信>\",\"scoreGrouping\":\"<高低分组口径>\"}`,
    TACTIC_RULES,
    `【携带该标签的篇目（${samples.length} 篇）】`,
    corpus,
    "【原文结束】",
  ].join("\n\n");

  let out = "";
  try {
    const res = await ctx.models.utility({
      requestId: `tactic-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      systemPrompt: readFileSync(SKILL_FILE, "utf8"),
      messages: [{ role: "user", content: contract }],
      maxTokens: MAX_TOKENS,
    });
    out = String(res?.text ?? "");
  } catch (e) {
    return { ok: false, stage: "model", message: `模型调用失败：${errMsg(e)}` };
  }
  if (!out.trim()) return { ok: false, stage: "model", message: "模型返回空文本" };
  if (isProviderRejection(out)) {
    return { ok: false, stage: "provider_rejected", message: "模型提供方风控拒答（上游判定高风险内容）——非插件问题；插件不做任何规避，已停止" };
  }
  let d;
  try {
    d = extractJson(out);
  } catch (e) {
    return { ok: false, stage: "json", message: `JSON 解析失败：${errMsg(e)}` };
  }
  const c = await commitModel.execute(
    { ...d, kind: "tactic", typeName: label, fingerprint: fp, date: today(), sampleIds: samples.map((s) => s.id), tags: label },
    ctx,
  );
  const cr = JSON.parse(c?.content?.find((x) => x.type === "text")?.text || "{}");
  if (!cr.ok) {
    return { ok: false, stage: "commit", message: `提交校验未过：${(cr.errors || []).map((x) => (typeof x === "string" ? x : x.message || JSON.stringify(x))).join("；") || cr.message || "未知"}` };
  }
  return { ok: true, file: cr.file, version: cr.version, previous: cr.previous, samples: samples.length };
}

// 一遍扫描：某标签的携带篇目（供单标签与批量共用，第 124 轮抽取）
async function scanCarriers(ctx, label) {
  const out = [];
  const listing = await ctx.resources.list(ref(`${STRUCT_ROOT}/篇目`));
  for (const it of listing.items || []) {
    if (it.isDirectory || !it.name.endsWith(".md") || it.name.startsWith("_")) continue;
    const text = await readMd(ctx, `${STRUCT_ROOT}/篇目/${it.name}`);
    if (!label) continue;
    if (parseEntryTags(text).includes(label)) out.push({ id: it.name.replace(/\.md$/, ""), text });
  }
  return out;
}

// ---- 战术模型批量链（§5.10 修订，第 124 轮）：面板一键，双闸约束（≥2 门槛 + 指纹跳过未变）；
// 只为标签库已注册且携带篇目 ≥2 的标签建模；未达门槛的不逐条报（聚合计数）。----
export async function runTacticBatch(ctx, onProgress) {
  const t0 = Date.now();
  const base = () => ({ ms: Date.now() - t0 });
  let tagMd;
  try {
    tagMd = await readMd(ctx, `${STRUCT_ROOT}/标签库.md`);
  } catch (e) {
    return { ok: false, stage: "snapshot", message: `标签库读取失败：${errMsg(e)}`, ...base() };
  }
  const tagNames = parseTagLib(tagMd).tags.map((t) => t.tag);
  const carriers = new Map();
  try {
    const listing = await ctx.resources.list(ref(`${STRUCT_ROOT}/篇目`));
    for (const it of listing.items || []) {
      if (it.isDirectory || !it.name.endsWith(".md") || it.name.startsWith("_")) continue;
      const text = await readMd(ctx, `${STRUCT_ROOT}/篇目/${it.name}`);
      const id = it.name.replace(/\.md$/, "");
      for (const tg of parseEntryTags(text)) {
        if (!carriers.has(tg)) carriers.set(tg, []);
        carriers.get(tg).push({ id, text });
      }
    }
  } catch (e) {
    return { ok: false, stage: "snapshot", message: `篇目扫描失败：${errMsg(e)}`, ...base() };
  }

  const eligible = tagNames.filter((tg) => (carriers.get(tg) || []).length >= MIN_SAMPLES);
  const belowThreshold = tagNames.length - eligible.length;
  // 第 125 轮：3 路并发砍墙钟时间 + 进度回调（库主反馈「怎么这么久」——24 个标签串行十几个分钟且零反馈）
  const results = new Array(eligible.length);
  let done = 0;
  let next = 0;
  const WORKERS = Math.min(3, eligible.length);
  const report = (current) => {
    try { if (onProgress) onProgress({ done, total: eligible.length, current: current || "" }); } catch { /* 进度回失败不阻断建模 */ }
  };
  report("");
  async function worker() {
    for (;;) {
      const i = next++;
      if (i >= eligible.length) return;
      const tg = eligible[i];
      let r;
      try {
        r = await tacticGenerate(ctx, tg, carriers.get(tg));
      } catch (e) {
        r = { ok: false, stage: "crash", message: errMsg(e) };
      }
      results[i] = { label: tg, ...r };
      done++;
      report(tg);
    }
  }
  await Promise.all(Array.from({ length: WORKERS }, () => worker()));
  const list = results.filter(Boolean);
  const anyCommitted = list.some((r) => r.ok);
  return { ok: anyCommitted, stage: anyCommitted ? "committed" : "all_skipped", results: list, belowThreshold, ...base() };
}

// ---- 簇内子族提案（§5.9 设计 B，第 102 轮）：模型对一个相关组的标签提议分族，
// 只返回分组、零写库——分区是否成立由库主在面板上确认/修改/推翻（红线 6）。）
export async function runPartitionProposal(ctx, input) {
  const labels = (Array.isArray(input?.labels) ? input.labels : []).map((s) => String(s).trim()).filter(Boolean);
  const pairs = Array.isArray(input?.pairs) ? input.pairs : [];
  if (labels.length < 2) return { ok: false, stage: "input", message: "标签不足 2 个，无需分族" };

  const contract = [
    "【分族提议任务】下面是标签裁决队列里的一个相关组（这些标签因两两共现被连在一起）。把它们按语义分成若干族：",
    "指向同一类论证动作的归同族；指向不同动作的分属不同族。族内语义相近、族间可区分；孤立无同类的标签单独成族。",
    "只提议，不裁决：分族是否成立由库主在面板上确认、修改或推翻。",
    "【输出】只输出一个 JSON 对象：{\"groups\":[[\"标签A\",\"标签B\"],[\"标签C\"]]}——每个输入标签恰好出现一次，不增不减，标签名逐字一致。",
    "【JSON 硬规则】半角冒号分隔，字符串内不出现未转义半角引号（引用用中文引号）。",
    `【标签（${labels.length} 个）】${labels.join("、")}`,
    "【两两共现证据】",
    pairs.map((p) => `${p.pair} — ${p.evidence || ""}`).join("\n") || "（无）",
  ].join("\n\n");

  let out = "";
  try {
    const res = await ctx.models.utility({
      requestId: `partition-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      systemPrompt: readFileSync(SKILL_FILE, "utf8"),
      messages: [{ role: "user", content: contract }],
      maxTokens: MAX_TOKENS,
    });
    out = String(res?.text ?? "");
  } catch (e) {
    return { ok: false, stage: "model", message: `模型调用失败：${errMsg(e)}` };
  }
  if (!out.trim()) return { ok: false, stage: "model", message: "模型返回空文本" };
  if (isProviderRejection(out)) {
    return { ok: false, stage: "provider_rejected", message: "模型提供方风控拒答（上游判定高风险内容）——非插件问题；插件不做任何规避，已停止" };
  }
  let d;
  try {
    d = extractJson(out);
  } catch (e) {
    return { ok: false, stage: "json", message: `JSON 解析失败：${errMsg(e)}` };
  }

  const raw = Array.isArray(d.groups) ? d.groups : [];
  const seen = new Set();
  const groups = [];
  for (const g of raw) {
    if (!Array.isArray(g)) continue;
    const clean = [];
    for (const s of g) {
      const t = String(s).trim();
      if (labels.includes(t) && !seen.has(t)) { seen.add(t); clean.push(t); }
    }
    if (clean.length) groups.push(clean);
  }
  const missing = labels.filter((l) => !seen.has(l));
  for (const l of missing) groups.push([l]); // 模型漏掉的标签单独成族兜底，不静默丢
  if (!groups.length) return { ok: false, stage: "output", message: "模型未返回有效分族" };
  return {
    ok: true,
    groups,
    labels,
    message: missing.length ? `模型漏了 ${missing.length} 个标签，已单独成族，请核` : undefined,
  };
}
