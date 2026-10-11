// 开发自检：校验器与渲染器冒烟测试。改校验规则后重跑：node dev-check.mjs
import { validateExtraction, renderExtraction } from "./lib/extraction.js";
import { extractJson, isProviderRejection } from "./lib/import.js";
import { sampleFingerprint } from "./lib/model.js";
import { validateAnchor, renderAnchor, parseAnchorScore } from "./lib/anchor.js";
import { parseMapping, flattenRows, isSingleHop, renderMapping } from "./lib/mapping.js";
import { parseTagLib, patchTagLib, appendQueueRow } from "./lib/taglib.js";
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

// ---- 共用检索层（M8）----
console.log("paths exports complete:", typeof ANCHOR_DIR === "string" && typeof MODEL_DIR === "string" && MAPPING_FILE.endsWith("闭包映射表.md"));
console.log("tokenize split:", tokenize("反驳 开头、例子").length === 3 && tokenize("  ").length === 0);

const fakeLib = {
  [`${STRUCT_ROOT}/篇目/sample-2020.md`]: "# 示例论文标题\n\n| 位置 | 处置动作 |\n| ¶2 | 反驳 示例对象 |\n",
  [`${STRUCT_ROOT}/写作模型/论证型.md`]: "# 论证型\n\n规律：开头先立靶再反驳。\n",
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

console.log("done");
