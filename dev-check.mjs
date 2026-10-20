// 开发自检：校验器与渲染器冒烟测试。改校验规则后重跑：node dev-check.mjs
import { validateExtraction, renderExtraction } from "./lib/extraction.js";
import { extractJson, isProviderRejection } from "./lib/import.js";
import { sampleFingerprint, extractSkillSection, retagModelHead, resolveTypeTarget } from "./lib/model.js";
import { validateAnchor, renderAnchor, parseAnchorScore } from "./lib/anchor.js";
import { parseMapping, flattenRows, isSingleHop, renderMapping } from "./lib/mapping.js";
import { parseTagLib, patchTagLib, appendQueueRow, setQueueDecision, appendTagRow } from "./lib/taglib.js";
import { parseTypeCandidate, upsertTypeRow, patchTypeRowStatus, patchDeclaringStatus } from "./lib/typelib.js";
import { tokenize, searchLibrary } from "./lib/search.js";
import { STRUCT_ROOT, ANCHOR_DIR, MODEL_DIR, MAPPING_FILE } from "./lib/paths.js";
import pushFactory, { matchMarker, extractRecentText, buildMessage, resolveSessionName } from "./extensions/push.js";
import { parseConfig, validateConfig } from "./lib/config.js";

const good = {
  id: "sample-2020",
  meta: {
    title: "示例论文标题", authors: "示例作者", year: "2020", venue: "—", discipline: "社会学",
    boundary: { result: "single" },
    extractor: "A", date: "2026-09-28",
    tags: [{ name: "示例标签", action: "以示例方式对照分析" }],
    toVerify: [], anchorStatus: { has: false }, lowDecomposability: false,
  },
  understanding: "全文以示例方式组织论证……",
  slots: [{ location: "§2 ¶3", action: "对照", object: "示例对象", evidence: "……此处为示例引文……", purpose: "建立示例分界" }],
  emergent: { coreThesis: "示例核心论题：两种取向不可通约" },
  scores: [
    { level: "article", target: "", score: 9, rationale: "整体论证结构清晰" },
    { level: "fragment", target: "§2 ¶3", score: 8, rationale: "对照设置准确" },
  ],
  appreciation: { gems: [{ location: "§4", note: "转折处理干净" }], patterns: [], weaknesses: [] },
  newTypeProposal: null,
};

const v1 = validateExtraction(good);
console.log("case1 valid:", v1.ok, v1.ok ? "" : JSON.stringify(v1.errors));

const bad = JSON.parse(JSON.stringify(good));
bad.id = "Sample2020";
bad.meta.extractor = "X";
bad.slots[0].location = "第二节";
bad.slots[0].evidence = "短";
delete bad.emergent.coreThesis;
const v2 = validateExtraction(bad);
console.log("case2 invalid:", !v2.ok, "| errors:", v2.errors.length, "|", v2.errors.map((e) => e.field).join(", "));

const low = JSON.parse(JSON.stringify(good));
low.meta.lowDecomposability = true;
low.understanding = "";
low.slots = [];
low.scores = [];
const v3 = validateExtraction(low);
console.log("case3 low-decomp exempt:", v3.ok, v3.errors.map((e) => e.field).join(", "));

const md = renderExtraction(good);
const _plBad = JSON.parse(JSON.stringify(good));
_plBad.paragraphLogic = [{ location: '', logic: '', quote: '短' }];
const _v4 = validateExtraction(_plBad);
console.log("paragraphLogic invalid caught:", !_v4.ok && _v4.errors.some((e) => e.field.startsWith("paragraphLogic")));
const _plOk = JSON.parse(JSON.stringify(good));
_plOk.paragraphLogic = [{ location: '¶3', logic: '设问句间推进', quote: '此处引文八个字以上' }];
console.log("paragraphLogic valid ok:", validateExtraction(_plOk).ok);
console.log("paragraphLogic optional absent ok:", v1.ok);
console.log("model fingerprint scope-sensitive:", sampleFingerprint(["a.md"], [["x"]], "v1") !== sampleFingerprint(["a.md"], [["x"]], "v2"));
const _sk = "# 框架\n\n## 拆解流程（无关）\n改这里不应变指纹\n\n## 建模与生成（管线）\n建模规则 A\n\n## 其他节\n无关 B\n";
console.log("skill section extract:", extractSkillSection(_sk, "建模与生成").includes("建模规则 A") && !extractSkillSection(_sk, "建模与生成").includes("无关 B"));
console.log("render header:", md.startsWith("# 示例论文标题"));
console.log("render slot row:", md.includes("| §2 ¶3 | 对照 |"));
console.log("render anchor note:", md.includes("无锚点参照"));

const md3 = renderExtraction(low);
console.log("low render placeholder:", md3.includes("低可拆解度，留空"));

// ---- 锚点（M5）----
const anchor = {
  id: "sample-2020", title: "示例论文标题", authors: "示例作者", year: "2020",
  textType: "论证型（示例）", score: 9,
  rationale: "对照结构清楚，结尾收束有力，但第二节引证略薄",
  date: "2026-09-28", recordedBy: "库主",
};
const a1 = validateAnchor(anchor);
console.log("anchor valid:", a1.ok, a1.ok ? "" : JSON.stringify(a1.errors));
const aBad = { ...anchor, score: 12, rationale: "好", date: "2026/09/28" };
const a2 = validateAnchor(aBad);
console.log("anchor invalid:", !a2.ok, "|", a2.errors.map((e) => e.field).join(", "));
const aMd = renderAnchor(anchor);
console.log("anchor render+parse roundtrip:", parseAnchorScore(aMd) === 9);
console.log("anchor parse missing:", parseAnchorScore("no score line") === null);
console.log("anchor parse legacy format:", parseAnchorScore("- 库主打的篇级总分：7\n") === 7);

// ---- 闭包归一（M6）----
const chain = flattenRows([
  { from: "a", to: "b", pinned: "" },
  { from: "b", to: "c", pinned: "" },
]);
console.log("flatten chain a→b→c:", chain.find((r) => r.from === "a").to === "c" && isSingleHop(chain));
const cyc = flattenRows([
  { from: "x", to: "y", pinned: "" },
  { from: "y", to: "x", pinned: "" },
]);
console.log("flatten cycle terminates:", cyc.every((r) => ["x", "y"].includes(r.to)));
const mapMd = renderMapping({
  rows: [{ from: "驳论型结构", to: "反驳型论证", pinned: "库主 2026-09-28" }],
  queue: [],
  log: [{ round: "第1轮", date: "2026-09-28", action: "驳论型结构 → 反驳型论证", basis: "库主裁决" }],
});
const back = parseMapping(mapMd);
console.log("mapping render+parse roundtrip:", back.rows.length === 1 && back.rows[0].to === "反驳型论证" && back.log.length === 1);

// ---- 标签库修补（M6）----
const tagMd = [
  "# 标签库", "", "| 标签 | 首次出现篇目 | 指向的处置动作 | 状态 | 备注 |",
  "|---|---|---|---|---|",
  "| 驳论型结构 | sample-2020 | 反驳 | active | |",
  "", "## 复核队列（共现提示）", "",
  "| 疑似对 | 证据 | 提示日期 | 裁决 |", "|---|---|---|---|",
  "| 驳论型结构 vs 反驳型论证 | 同指反驳 | 2026-09-28 |  |",
  "",
].join("\n");
const p = patchTagLib(tagMd, {
  status: new Map([["驳论型结构", "并入→反驳型论证"]]),
  decision: new Map([["驳论型结构 vs 反驳型论证", "并入（2026-09-28）"]]),
});
console.log("taglib patch hit:", p.changed.status.length === 1 && p.changed.decision.length === 1);
console.log("taglib patch applied:", p.md.includes("| 驳论型结构 | sample-2020 | 反驳 | 并入→反驳型论证 |"));
const miss = patchTagLib(tagMd, { status: new Map([["不存在的标签", "x"]]), decision: new Map() });
console.log("taglib patch miss:", miss.changed.status.length === 0 && miss.md === tagMd);
console.log("taglib parse:", parseTagLib(tagMd).tags.length === 1 && parseTagLib(tagMd).queue.length === 1);
const aq = appendQueueRow(tagMd, { pair: "A vs B", evidence: "共现 3 篇", date: "2026-09-28" });
console.log("queue append to existing row:", aq.appended && aq.md.includes("| A vs B | 共现 3 篇 | 2026-09-28 |  |") && parseTagLib(aq.md).queue.length === 2);
const emptyQueueMd = "# t\n\n## 复核队列（共现提示）\n\n| 疑似对 | 证据 | 提示日期 | 裁决 |\n|---|---|---|---|\n";
const aq2 = appendQueueRow(emptyQueueMd, { pair: "C vs D", evidence: "同指反驳", date: "2026-09-28" });
console.log("queue append to empty:", aq2.appended && parseTagLib(aq2.md).queue.length === 1);
// ---- 判定独立（§5.9 设计 C 终态，第 101 轮）----
const di1 = setQueueDecision(tagMd, "驳论型结构 vs 反驳型论证", "判定独立（2026-10-13）：两者分属不同层面");
console.log("independent set:", di1.ok && di1.md.includes("判定独立（2026-10-13）：两者分属不同层面"));
const di2 = setQueueDecision(di1.md, "驳论型结构 vs 反驳型论证", "再次裁决");
console.log("independent guard already-decided:", !di2.ok && di2.md === di1.md);
const di3 = setQueueDecision(tagMd, "不存在的对", "判定独立（2026-10-13）");
console.log("independent guard not-found:", !di3.ok && di3.md === tagMd);
console.log("independent leaves tags untouched:", parseTagLib(di1.md).tags[0].status === "active" && parseTagLib(di1.md).tags.length === 1);
// ---- 类型裁决（§5.9 设计 D，第 103 轮）----
const candMd = "# x\n\n### 2.5 新类型宣告（若有）\n\n- 候选名 / 定义：示例立破型——以示例方式立论的整篇模式\n- 与既有类型库的关系：新类型\n- 依据（本篇何处、引文）：§1\n- 状态：候选（待库主裁决，模型不拍板）\n";
const cand = parseTypeCandidate(candMd);
console.log("type candidate parse:", !!cand && cand.name === "示例立破型" && cand.definition.startsWith("以示例方式") && cand.status.includes("候选"));
const typeLibMd = "# 类型库\n\n| 类型 | 定义 | 归并自 | 子语法 | 状态 | 出现篇数 |\n|---|---|---|---|---|---|\n| （暂无） |  |  |  |  |  |\n";
const up1 = upsertTypeRow(typeLibMd, { type: "示例立破型", definition: "以示例方式立论", mergedFrom: "示例立破型", status: "在用", count: 1 });
console.log("type row replace placeholder:", up1.action === "replaced-placeholder" && up1.md.includes("| 示例立破型 |"));
const up2 = upsertTypeRow(up1.md, { type: "第二型", definition: "d", mergedFrom: "第二型", status: "在用", count: 2 });
console.log("type row insert:", up2.action === "inserted" && up2.md.indexOf("第二型") > up2.md.indexOf("示例立破型"));
const ps1 = patchDeclaringStatus(candMd, "示例立破型", "新立为类型库「示例立破型」（库主 2026-10-13）");
console.log("declaring stamp:", ps1.changed && ps1.md.includes("新立为类型库") && !ps1.md.includes("候选（待库主裁决"));
console.log("declaring stamp idempotent:", !patchDeclaringStatus(ps1.md, "示例立破型", "新立为类型库「示例立破型」（库主 2026-10-13）").changed);
console.log("declaring re-stamp allowed (第116轮改判):", patchDeclaringStatus(ps1.md, "示例立破型", "并入「X」（库主 2026-10-13）").changed);
const ts1 = patchTypeRowStatus(up1.md, "示例立破型", "并入→X");
console.log("type status patch:", ts1.changed && ts1.md.includes("| 并入→X | 1 |"));
// ---- 标签表补行（第 111 轮，缺行自愈）----
const arr1 = appendTagRow(tagMd, "| 幽灵标签 | sample-2020 | （待补） | active |  |");
console.log("tag row append:", arr1.appended && parseTagLib(arr1.md).tags.length === 2 && arr1.md.indexOf("幽灵标签") < arr1.md.indexOf("复核队列"));
console.log("tag row append keeps queue intact:", parseTagLib(arr1.md).queue.length === parseTagLib(tagMd).queue.length);

// ---- 共用检索层（M8）----
console.log("paths exports complete:", typeof ANCHOR_DIR === "string" && typeof MODEL_DIR === "string" && MAPPING_FILE.endsWith("闭包映射表.md"));
console.log("tokenize split:", tokenize("反驳 开头、例子").length === 3 && tokenize("  ").length === 0);

const fakeLib = {
  [`${STRUCT_ROOT}/篇目/sample-2020.md`]: "# 示例论文标题\n\n| 位置 | 处置动作 |\n| ¶2 | 反驳 示例对象 |\n",
  [`${STRUCT_ROOT}/写作模型/论证型.md`]: "# 论证型\n\n- 关联标签：镜像结构\n\n规律：开头先立靶再反驳。\n",
  [`${STRUCT_ROOT}/标签库.md`]: "# 标签库\n\n| 标签 | 首次出现篇目 |\n|---|---|\n| 反驳型结构 | sample-2020 |\n",
};
const mockCtx = {
  resources: {
    async list(r) {
      if (r.path === `${STRUCT_ROOT}/篇目`) return { items: [{ name: "sample-2020.md", isDirectory: false }, { name: "_模板.md", isDirectory: false }] };
      if (r.path === `${STRUCT_ROOT}/写作模型`) return { items: [{ name: "论证型.md", isDirectory: false }] };
      if (r.path === `${STRUCT_ROOT}/锚点样本`) return { items: [{ name: "anchor-001.md", isDirectory: false }] };
      throw new Error(`no dir: ${r.path}`);
    },
    async read(r) {
      if (fakeLib[r.path]) return { content: new TextEncoder().encode(fakeLib[r.path]) };
      throw new Error(`404: ${r.path}`);
    },
  },
};
const s1 = await searchLibrary(mockCtx, "反驳");
console.log("search hit 篇目+模型+标签库:", s1.ok && ["篇目", "写作模型", "库"].every((k) => s1.results.some((x) => x.kind === k)));
console.log("search rank & hits:", s1.results[0].score >= s1.results[s1.results.length - 1].score && s1.results[0].hits.length >= 1 && typeof s1.results[0].hits[0].line === "number");
const s2 = await searchLibrary(mockCtx, "反驳", { kind: "写作模型" });
console.log("search kind filter:", s2.ok && s2.results.length === 1 && s2.results[0].kind === "写作模型");
const s3 = await searchLibrary(mockCtx, "不存在词xyzq");
console.log("search no-hit:", s3.ok && s3.results.length === 0);
const s4 = await searchLibrary(mockCtx, "  ");
console.log("search empty query rejected:", s4.ok === false);
const s5 = await searchLibrary(mockCtx, "镜像");
console.log("search head-bridge tag hit (body has no such word):", s5.ok && s5.results.some((x) => x.kind === "写作模型" && x.score >= 3 && x.hits.some((h) => h.text.includes("关联标签"))));
// ---- 通道三三闸纯逻辑 ----
console.log("push factory fn:", typeof pushFactory === "function");
console.log("g1 empty markers silent:", matchMarker([], "写作") === null);
console.log("g1 no name silent:", matchMarker(["写作"], undefined) === null);
console.log("g1 miss:", matchMarker(["写作"], "日常闲聊") === null);
console.log("g1 hit + case:", matchMarker(["构成性"], "道德构成性小论文") === "构成性" && matchMarker(["paper"], "Paper Draft") === "paper");
console.log("extract user/assistant:", extractRecentText([{ role: "user", content: "任务" }, { role: "assistant", content: "正文" }]).assistant === "正文");
console.log("extract blocks + null-safe:", extractRecentText([{ role: "user", content: [{ type: "text", text: "甲" }] }, { role: "assistant", content: [{ type: "text", text: "乙" }] }]).assistant === "乙" && extractRecentText(undefined).user === "");
const cfgParsed = parseConfig('{"markers":["构成性 ",1,""],"maxPerRun":9,"libraryPath":"X"}');
console.log("config normalize:", cfgParsed.markers.length === 1 && cfgParsed.markers[0] === "构成性" && cfgParsed.maxPerRun === 2 && cfgParsed.libraryPath === "X");
console.log("config validate:", validateConfig({ maxPerRun: 3 }).ok === false && validateConfig({ markers: ["ok"] }).ok === true && validateConfig("x").ok === false);
const pushMsg = buildMessage([{ kind: "写作模型", title: "论证型", path: "写作模型/论证型.md", score: 5, hits: [{ line: 2, text: "开头先立靶", excerpt: "" }] }], ["反驳"], "小论文");
console.log("push message contract:", pushMsg.includes("自动感知注入") && pushMsg.includes("写作模型/论证型.md") && pushMsg.includes("L2:") && pushMsg.includes("不相关请直接忽略"));
// ---- 会话名三源取值链 ----
const fakeRead1 = (f) =>
  f.endsWith(".files.json") ? { sessionId: "sess_x" } : f.endsWith("session-titles.json") ? { sess_x: "论文结构提取会话" } : null;
const n1 = resolveSessionName({ piName: " 写作会话 ", sessionFile: "C:\\a\\b.jsonl", readJson: fakeRead1 });
const n2 = resolveSessionName({ piName: undefined, sessionFile: "C:\\a\\b.jsonl", readJson: fakeRead1 });
const n3 = resolveSessionName({
  piName: "",
  sessionFile: "C:\\a\\b.jsonl",
  readJson: (f) =>
    f.endsWith("usage-ledger.json")
      ? { entries: [{ attribution: { sessionId: "sess_y", sessionPath: "C:\\A\\B.JSONL" } }] }
      : f.endsWith("session-titles.json")
        ? { sess_y: "台账标题" }
        : null,
});
const n4 = resolveSessionName({ piName: undefined, sessionFile: "C:\\a\\b.jsonl", readJson: () => { throw new Error("boom"); } });
const n5 = resolveSessionName({ piName: undefined, sessionFile: undefined, readJson: fakeRead1 });
console.log("name chain pi source:", n1.name === "写作会话" && n1.src === "pi");
console.log("name chain files_json source:", n2.name === "论文结构提取会话" && n2.src === "files_json");
console.log("name chain ledger source + path case-insensitive:", n3.name === "台账标题" && n3.src === "ledger");
console.log("name chain read-fail degrades silent:", n4.name === null && n4.src === "none");
console.log("name chain no sessionFile silent:", n5.name === null && n5.src === "none");
// ---- 截断自愈（provider 单响应上限砍断输出的回归保护）----
const _full = JSON.stringify({ extraction: { id: "x-2026", scores: [1, 2] }, newTypeProposal: null });
console.log("json repair missing outer brace:", extractJson(_full.slice(0, _full.length - 1)).newTypeProposal === null);
console.log("json repair cut mid-string:", extractJson('{"a":"一段被截断的中').a === null);
console.log("json valid untouched:", extractJson(_full).extraction.id === "x-2026");
console.log("json repair missing colon:", extractJson('{"a：b","c":1}').a === "b");
console.log("model fingerprint order-insensitive:", sampleFingerprint(["b.md", "a.md"], [["y", "x"], ["q"]]) === sampleFingerprint(["a.md", "b.md"], [["x", "y"], ["q"]]));
console.log("model fingerprint content-sensitive:", sampleFingerprint(["a.md"], [["x"]]) !== sampleFingerprint(["a.md"], [["y"]]));
console.log("json trailing junk ignored:", extractJson('{"a":1}\n后面还有复读 } 和残渣').a === 1);
console.log("json unwrap extraction wrapper:", extractJson('{"extraction":{"id":"x-2020","meta":{"t":1}}}').id === "x-2020");
console.log("provider rejection detected:", isProviderRejection("The request was rejected because it was considered high risk") && !isProviderRejection('{"a":1}'));

// ---- 第 97 轮：id 三要素（标题-作者-年份，中文直入）+ sectionTitles（方案 A）----
const zh97 = JSON.parse(JSON.stringify(good));
zh97.id = "示例论文标题-示例作者-2020";
zh97.emergent.sectionTitles = [{ location: "§1", title: "第一章 示例节" }];
const zh97v = validateExtraction(zh97);
console.log("97 zh id + sectionTitles valid:", zh97v.ok, zh97v.ok ? "" : JSON.stringify(zh97v.errors));
const zh97bad = JSON.parse(JSON.stringify(zh97));
zh97bad.id = "示例-2020-16";
zh97bad.emergent.sectionTitles = [{ location: "第1章", title: "" }];
const zh97badv = validateExtraction(zh97bad);
console.log("97 bad id / bad sectionTitles rejected:", !zh97badv.ok && zh97badv.errors.some((e) => e.field === "id") && zh97badv.errors.some((e) => e.field.startsWith("emergent.sectionTitles")));
console.log("97 render sectionTitles:", renderExtraction(zh97).includes("章节标题（表层结构）：§1 第一章 示例节"));
console.log("97 legacy id still valid:", validateExtraction(good).ok);
// ---- 章节/段落功能标注渲染与校验（第 128 轮修 [object Object]）----
const sfGood = { ...good, emergent: { ...good.emergent, sectionFunctions: [{ location: "§1", title: "立问题", function: "点明问题域" }, { location: "§2", title: "批判", function: "分层击破" }], paragraphFunctions: [{ location: "¶3", action: "设反驳槽位" }] } };
const sfMd = renderExtraction(sfGood);
console.log("located render no object-object:", !sfMd.includes("[object Object]") && sfMd.includes("§1 立问题｜点明问题域；§2 批判｜分层击破") && sfMd.includes("¶3 设反驳槽位"));
console.log("located validate ok:", validateExtraction(sfGood).ok);
console.log("located validate rejects string:", !validateExtraction({ ...good, emergent: { ...good.emergent, sectionFunctions: "§1 立问题" } }).ok);
console.log("located validate rejects bad location:", !validateExtraction({ ...good, emergent: { ...good.emergent, sectionFunctions: [{ location: "一、", title: "x" }] } }).ok);
console.log("located validate rejects empty item:", !validateExtraction({ ...good, emergent: { ...good.emergent, paragraphFunctions: [{ location: "§1" }] } }).ok);

// ---- 第 129 轮：类型库写序——targetFresh 登记新行后，状态补丁必须基于写完的文本，
// 否则会用写前快照把刚登记的行覆盖掉（工具层改名路径的 bug）
{
  const t0 = [
    "| 类型 | 定义 | 归并自 | 子语法 | 状态 | 出现篇数 |",
    "|---|---|---|---|---|---|",
    "| 旧类型 | d | 旧类型 |  | 在用 | 1 |",
    "",
  ].join("\n");
  const t1 = upsertTypeRow(t0, { type: "新名字", definition: "（定义待补）", mergedFrom: "新名字", status: "在用", count: 0 }).md;
  const t2 = patchTypeRowStatus(t1, "旧类型", "并入→新名字").md;
  const stale = patchTypeRowStatus(t0, "旧类型", "并入→新名字").md;
  console.log("type-lib write order keeps fresh row:", /^\|\s*新名字\s*\|/m.test(t2) && !/^\|\s*新名字\s*\|/m.test(stale));
}

// ---- 第 130 轮：随归并改名 / 并入家族——头部改标签、版本接续、补记原名，指纹行不动 ----
{
  const src = ["# 甲 写作模型 v1", "", "- 类型：甲", "- 版本：v1", "- 样本指纹：abc", ""].join("\n");
  const out = retagModelHead(src, { to: "乙", from: "甲", version: 4 });
  console.log("retag model head:", out.includes("# 乙 写作模型 v4") && out.includes("- 类型：乙") && out.includes("- 版本：v4") && out.includes("- 原名：甲") && out.includes("- 样本指纹：abc"));
}

// ---- 第 131 轮：类型并入建议的目标解析——容错但不出已知集 ----
{
  const known = ["甲型论证", "乙型综述", "待裁候选丙"];
  console.log("resolve type target:",
    resolveTypeTarget("甲型论证", known) === "甲型论证"
    && resolveTypeTarget("并入「乙型综述」", known) === "乙型综述"
    && resolveTypeTarget("「待裁候选丙」", known) === "待裁候选丙"
    && resolveTypeTarget("甲型论证（既有类型）", known) === "甲型论证"
    && resolveTypeTarget("新立", known) === "新立"
    && resolveTypeTarget("驳回", known) === "驳回"
    && resolveTypeTarget("不存在的类型", known) === null);
}

// ---- 第 133 轮：引文上限 200 字（适当引用的实质要件：只摘说明问题所需的片段）----
{
  const over = JSON.parse(JSON.stringify(good));
  over.slots[0].evidence = "字".repeat(201);
  const edge = JSON.parse(JSON.stringify(good));
  edge.slots[0].evidence = "字".repeat(200);
  console.log("quote cap 200:", !validateExtraction(over).ok && validateExtraction(edge).ok);
}

console.log("done");
