// 落格校验单道：A/C 两路径共用。
// 规则来源：结构库 README 五条不变量 + 篇目/_模板.md 字段。
// 校验只在写入前执行；渲染格式对照 _模板.md。

// id 格式（第 97 轮已确认）：<标题>-<作者>-<年份>，中文直入；旧式 <slug>-<年份> 是其子集，存量兼容。
const ID_RE = /^[a-z0-9\u4e00-\u9fff]+(?:-[a-z0-9\u4e00-\u9fff]+)*-\d{4}$/;
// 位置格式（第 97 轮修正）：多级编号，段间可用空格分隔，段首 § 或 ¶ 均可（支持 §2 ¶3 混合）；
// 尾锚防页码/文字混入。与 commit-extraction 的 LOCATION_RULE 同源。
const LOC_RE = /^(?:[§¶][\d]+(?:\.[\d]+)*(?:\s*[§¶][\d]+(?:\.[\d]+)*)*)$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const BOUNDARY_RESULTS = ["single", "collection", "volume_chapter"];
const BOUNDARY_LABEL = { single: "单篇（不切）", collection: "合集（已切分）", volume_chapter: "著作取材：卷/章" };
const EXTRACTOR_LABEL = { A: "助手（A 路径）", C: "插件 session（C 路径）" };

// ---- 第 130 轮：形状安全渲染 + 双重转义归一 ----
// 背景（两处活缺陷，非存量问题）：
// ① 渲染层对涌现字段 skeleton / openingClosing 与 meta.toVerify 仍用 String(v)，
//    对象数组被压成 [object Object]（第 129 轮只修了 sectionFunctions/paragraphFunctions）；
// ② 字段值被 JSON 二次转义时，换行以字面 "\n"（反斜杠+n）整段落库
//    （实例：顾红亮-2015、郑宏宇-2017 理解段）。
// 原则：校验层与渲染层同一来源（同源），对象数组一律逐项展开，禁止字符串化。

// 字面转义符归一：\n \t 还原为真实控制符。中文人文文本极少需要保留字面反斜杠。
const LITERAL_ESC = /\\([nt])/g;
const unescapeLiteral = (s) => (typeof s === "string" ? s.replace(LITERAL_ESC, (_, c) => (c === "n" ? "\n" : "\t")) : s);

// 任意值转可读文本：对象展开为「键：值」，数组以「；」连接，禁 [object Object]。
export const flatVal = (v) => {
  if (v === null || v === undefined) return "";
  if (Array.isArray(v)) return v.map(flatVal).filter(Boolean).join("；");
  if (typeof v === "object") {
    return Object.entries(v)
      .map(([k, vv]) => { const t = flatVal(vv); return t ? `${k}：${t}` : ""; })
      .filter(Boolean)
      .join("；");
  }
  return String(v).trim();
};

// 挂位置数组的渲染：location 前缀，其余键值以「｜」连接，项间以「；」连接。
// 对字符串数组、对象数组、标量都成立。
const renderLocated = (v) => {
  if (!Array.isArray(v)) return flatVal(v);
  return v
    .map((x) => {
      if (x && typeof x === "object") {
        const loc = String(x.location ?? "").trim();
        const rest = Object.entries(x)
          .filter(([k]) => k !== "location")
          .map(([, vv]) => flatVal(vv))
          .filter(Boolean);
        return `${loc}${rest.length ? ` ${rest.join("｜")}` : ""}`;
      }
      return flatVal(x);
    })
    .filter(Boolean)
    .join("；");
};

// 双重转义归一：把字段值里的字面 \n \t 还原为真实换行/制表。
// 只处理自由文本与涌现字段，不动 id / 位置 / 引文以外的标识字段。
export function normalizeExtraction(d) {
  if (!d || typeof d !== "object") return d;
  const dec = (v) => unescapeLiteral(v);
  const decObj = (o) => {
    const out = {};
    for (const [k, vv] of Object.entries(o)) out[k] = typeof vv === "string" ? dec(vv) : Array.isArray(vv) ? vv.map((x) => (typeof x === "string" ? dec(x) : x && typeof x === "object" ? decObj(x) : x)) : vv;
    return out;
  };
  const decArr = (a) => a.map((x) => (typeof x === "string" ? dec(x) : x && typeof x === "object" ? decObj(x) : x));

  if (typeof d.understanding === "string") d.understanding = dec(d.understanding);
  if (d.emergent && typeof d.emergent === "object") {
    for (const [k, v] of Object.entries(d.emergent)) {
      if (typeof v === "string") d.emergent[k] = dec(v);
      else if (Array.isArray(v)) d.emergent[k] = decArr(v);
    }
  }
  if (Array.isArray(d.slots)) {
    // 第 134 轮：引文（slots[].evidence）一律不参与双重转义归一。
    // 依据：结构库第一不变量「判断必须附原文引文——可追溯总则」，校验层口径亦写明
    // 「须为原文引文原样摘录」。引文若含字面 \n \t（代码、路径、LaTeX 片段常见），
    // 解码会把引文改写成与原文不逐字相符的形态，破坏可追溯性。
    // 其余字段（location/action/object/purpose）为拆解者自撰，归一无害。
    d.slots = d.slots.map((s) => {
      if (!s || typeof s !== "object") return typeof s === "string" ? dec(s) : s;
      const out = { ...s };
      for (const k of ["location", "action", "object", "purpose"]) {
        if (typeof out[k] === "string") out[k] = dec(out[k]);
      }
      return out; // evidence 原样保留
    });
  }
  if (Array.isArray(d.scores)) d.scores = decArr(d.scores);
  if (d.appreciation && typeof d.appreciation === "object") {
    for (const k of ["gems", "patterns", "weaknesses"]) {
      if (Array.isArray(d.appreciation[k])) d.appreciation[k] = decArr(d.appreciation[k]);
    }
  }
  if (Array.isArray(d.paragraphLogic)) d.paragraphLogic = decArr(d.paragraphLogic);
  if (d.newTypeProposal && typeof d.newTypeProposal === "object") d.newTypeProposal = decObj(d.newTypeProposal);
  if (d.meta && typeof d.meta === "object") {
    if (Array.isArray(d.meta.toVerify)) d.meta.toVerify = decArr(d.meta.toVerify);
    for (const k of ["venue", "discipline"]) if (typeof d.meta[k] === "string") d.meta[k] = dec(d.meta[k]);
  }
  return d;
}

export function validateExtraction(d) {
  normalizeExtraction(d); // 先归一双重转义，校验层与渲染层看到同一份数据
  const errors = [];
  const err = (field, message) => errors.push({ field, message });
  if (!d || typeof d !== "object") {
    return { ok: false, errors: [{ field: "extraction", message: "必须为对象" }] };
  }

  if (!ID_RE.test(String(d.id || "").trim())) {
    err("id", "格式应为 <标题>-<作者>-<年份>（中文可直入、标点清洗），如示例论文标题-示例作者-2016；旧式 <slug>-<年份> 仍接受");
  }

  const meta = d.meta || {};
  for (const f of ["title", "authors", "year"]) {
    if (!String(meta[f] ?? "").trim()) err(`meta.${f}`, "必填");
  }
  if (!BOUNDARY_RESULTS.includes(meta.boundary?.result)) {
    err("meta.boundary.result", `必为 ${BOUNDARY_RESULTS.join(" / ")} 之一`);
  }
  if (!["A", "C"].includes(meta.extractor)) err("meta.extractor", "须为 A 或 C");
  if (!DATE_RE.test(String(meta.date || ""))) err("meta.date", "格式 YYYY-MM-DD");
  if (!Array.isArray(meta.tags)) err("meta.tags", "须为数组（元素 {name, action}，可空）");
  else {
    meta.tags.forEach((t, i) => {
      if (!t || !String(t.name || "").trim()) err(`meta.tags[${i}].name`, "必填");
    });
  }
  // 第 130 轮：toVerify 形状锁定（渲染层逐项展开的同源前提；对象数组曾被压成 [object Object]）
  if (meta.toVerify !== undefined && meta.toVerify !== null) {
    if (!Array.isArray(meta.toVerify)) {
      err("meta.toVerify", "须为数组（元素为字符串，或 {field,note} 之类对象）");
    } else {
      meta.toVerify.forEach((t, i) => {
        if (typeof t === "string") {
          if (!t.trim()) err(`meta.toVerify[${i}]`, "元素不得为空");
          return;
        }
        if (!t || typeof t !== "object") { err(`meta.toVerify[${i}]`, "元素须为字符串或对象"); return; }
        const vals = Object.values(t).map((x) => String(x ?? "").trim()).filter(Boolean);
        if (!vals.length) err(`meta.toVerify[${i}]`, "对象元素至少一个非空字段");
      });
    }
  }
  if (!meta.anchorStatus || typeof meta.anchorStatus.has !== "boolean") {
    err("meta.anchorStatus", "必填：{has: boolean, entry?: string}");
  }
  if (typeof meta.lowDecomposability !== "boolean") {
    err("meta.lowDecomposability", "必填布尔（低可拆解度出口）");
  }

  if (meta.lowDecomposability === true) {
    // 只存元信息：理解段与落格段豁免（硬拆会产出垃圾，进标签库污染聚类）
    return { ok: errors.length === 0, errors, lowDecomposability: true };
  }

  if (!String(d.understanding || "").trim()) {
    err("understanding", "非低可拆解度文本必须填理解段（自由文本，可丰富）");
  }

  const slots = Array.isArray(d.slots) ? d.slots : [];
  if (slots.length === 0) err("slots", "通用薄层至少一条登记");
  slots.forEach((s, i) => {
    const loc = String(s?.location ?? "").trim();
    if (!LOC_RE.test(loc)) err(`slots[${i}].location`, "须为 §x.y 或 ¶n 多级编号（挂位置总则）");
    for (const f of ["action", "object", "purpose"]) {
      if (!String(s?.[f] ?? "").trim()) err(`slots[${i}].${f}`, "五栏必填项");
    }
    const ev = String(s?.evidence ?? "").trim();
    if (ev.length < 8) err(`slots[${i}].evidence`, "须为原文引文原样摘录（至少 8 字），转述不计");
    else if (ev.length > 200) err(`slots[${i}].evidence`, "引文超过 200 字上限：只摘与判断直接相关的片段（适当引用），整段照抄不计");
  });

  if (!String(d.emergent?.coreThesis ?? "").trim()) err("emergent.coreThesis", "核心论题必填");

  // 章节/段落功能标注（第 128 轮）：形状锁定为对象数组——此前无校验，模型输出的对象数组被渲染层
  // 字符串化成 [object Object]（32 篇存量受损）。校验与渲染同源：location 挂位、每项至少一个非空功能字段。
  for (const [kField, labelField] of [["sectionFunctions", "emergent.sectionFunctions"], ["paragraphFunctions", "emergent.paragraphFunctions"]]) {
    const v = d.emergent?.[kField];
    if (v === undefined || v === null) continue;
    if (!Array.isArray(v)) { err(labelField, "须为数组 [{location, …}]（字符串化会损坏落盘）"); continue; }
    v.forEach((x, i) => {
      if (!x || typeof x !== "object") { err(`${labelField}[${i}]`, "每项须为对象"); return; }
      if (!LOC_RE.test(String(x?.location ?? "").trim())) err(`${labelField}[${i}].location`, "须为 §x.y 或 ¶n 多级编号");
      const others = Object.entries(x).filter(([key, vv]) => key !== "location" && String(vv ?? "").trim());
      if (!others.length) err(`${labelField}[${i}]`, "除 location 外至少一个非空字段（功能/标题等）");
    });
  }

  // 第 130 轮：skeleton / openingClosing 形状锁定（这两个老字段从未获得第 129 轮的形状校验，
  // 其对象数组在渲染层被 String(v) 压成 [object Object]）
  for (const [k, label] of [["skeleton", "emergent.skeleton"], ["openingClosing", "emergent.openingClosing"]]) {
    const v = d.emergent?.[k];
    if (v === undefined || v === null) continue;
    if (Array.isArray(v)) {
      v.forEach((x, i) => {
        if (typeof x === "string") { if (!x.trim()) err(`${label}[${i}]`, "元素不得为空"); return; }
        if (!x || typeof x !== "object") { err(`${label}[${i}]`, "元素须为对象或字符串"); return; }
        const others = Object.entries(x).filter(([key, vv]) => key !== "location" && String(vv ?? "").trim());
        if (!others.length) err(`${label}[${i}]`, "对象元素除 location 外至少一个非空字段");
      });
    } else if (typeof v !== "string") {
      err(label, "须为字符串或对象数组（对象数组按项渲染，禁止字符串化）");
    }
  }

  // 段内逻辑（可选，关键段展开）：只对开篇/转折/收束等段落深描述，不设条数硬上限
  if (d.paragraphLogic !== undefined && d.paragraphLogic !== null) {
    if (!Array.isArray(d.paragraphLogic)) {
      err("paragraphLogic", "须为数组（可选字段）");
    } else {
      d.paragraphLogic.forEach((x, i) => {
        if (!String(x?.location ?? "").trim()) err(`paragraphLogic[${i}].location`, "须挂位置（§x 或 ¶n）");
        if (!String(x?.logic ?? "").trim()) err(`paragraphLogic[${i}].logic`, "段内逻辑描述必填（句间如何推进）");
        const q = String(x?.quote ?? "").trim();
        if (q && q.length < 8) err(`paragraphLogic[${i}].quote`, "引文至少 8 字，或留空");
        else if (q.length > 200) err(`paragraphLogic[${i}].quote`, "引文超过 200 字上限，或留空");
      });
    }
  }

  // 章节标题（表层结构）：可选涌现字段，第 97 轮方案 A（已确认）
  if (d.emergent?.sectionTitles !== undefined && d.emergent?.sectionTitles !== null) {
    if (!Array.isArray(d.emergent.sectionTitles)) {
      err("emergent.sectionTitles", "须为数组 [{location,title}]（可选字段）");
    } else {
      d.emergent.sectionTitles.forEach((x, i) => {
        if (!LOC_RE.test(String(x?.location ?? "").trim())) err(`emergent.sectionTitles[${i}].location`, "须为 §x.y 或 ¶n 多级编号");
        if (!String(x?.title ?? "").trim()) err(`emergent.sectionTitles[${i}].title`, "章节标题原文必填");
      });
    }
  }

  const scores = Array.isArray(d.scores) ? d.scores : [];
  if (!scores.some((s) => s?.level === "article")) {
    err("scores", "至少含一条篇级（article）评分");
  }
  scores.forEach((s, i) => {
    if (!["article", "node", "fragment"].includes(s?.level)) {
      err(`scores[${i}].level`, "须为 article / node / fragment（三层独立，不派生）");
    }
    if (!(typeof s?.score === "number" && s.score >= 1 && s.score <= 10)) {
      err(`scores[${i}].score`, "1-10 数值");
    }
    if (!String(s?.rationale ?? "").trim()) err(`scores[${i}].rationale`, "打分依据必填");
    if (s?.level === "node" || s?.level === "fragment") {
      if (!LOC_RE.test(String(s?.target ?? "").trim())) {
        err(`scores[${i}].target`, "节点/片段级必须挂位置（§x 或 ¶n）");
      }
    }
  });

  return { ok: errors.length === 0, errors, lowDecomposability: false };
}

// ---- 渲染（对照 篇目/_模板.md） ----

// 第 130 轮：escCell 走 flatVal，对象值不再被压成 [object Object]
const escCell = (v) => flatVal(v).replace(/\\/g, "\\\\").replace(/\|/g, "\\|").replace(/\r?\n/g, "<br>");
const oneLine = (v) => flatVal(v).replace(/\r?\n/g, " ").trim();

const EMERGENT_FIELDS = [
  ["coreThesis", "核心论题"],
  ["skeleton", "论证骨架（前提 → 中间结论 → 结论的组织方式）"],
  ["objectionHandling", "反对意见的处理方式"],
  ["theoryUse", "理论资源的用法（支撑 / 对照 / 靶子）"],
  ["hiddenPremises", "隐含前提"],
  ["sectionFunctions", "章节功能标注（节点级，挂位置）"],
  ["paragraphFunctions", "段落功能标注（片段级，挂位置；混合段各功能分别登记）"],
  ["openingClosing", "开头与结尾策略"],
  ["densityDistribution", "论证密度分布"],
];

const LEVEL_LABEL = { article: "篇级", node: "节点级", fragment: "片段级" };

export function renderExtraction(d) {
  normalizeExtraction(d); // 幂等：直接调用渲染器时也归一双重转义
  const m = d.meta;
  const L = [];
  L.push(`# ${m.title}（${m.authors}, ${m.year}）`, "");
  L.push("## 0. 元信息【固定字段】", "");
  L.push(`- 出处：${m.authors} / ${m.year} / ${m.venue || "—"} / ${m.discipline || "—"}`);
  const b = m.boundary || {};
  L.push(`- 篇级边界判定：☑ 标题页 ☑ 署名 ☑ 目录与出版信息；判定结果：${BOUNDARY_LABEL[b.result] || b.result}${b.cut ? `（切点：${b.cut}）` : ""}`);
  L.push(`- 拆解日期：${m.date} / 拆解者：${EXTRACTOR_LABEL[m.extractor] || m.extractor}${m.taskId ? ` / 任务 id：${m.taskId}` : ""}`);
  const tags = (m.tags || []).map((t) => (typeof t === "string" ? t : t?.name)).filter(Boolean).join("、") || "（无）";
  L.push(`- 标签：${tags}`);
  const toVerifyText = renderLocated(m.toVerify || []);
  L.push(`- 待核标记：${toVerifyText || "（无）"}`);
  L.push(`- 锚点参照状态：${m.anchorStatus?.has ? `有（指引条目：${m.anchorStatus.entry || "—"}）` : "无（无锚点参照，分数置信度低，待库主补打锚点）"}`);
  L.push(`- 低可拆解度：${m.lowDecomposability ? "是（只存本节元信息）" : "否"}`);
  L.push("");

  L.push("## 1. 理解段【自由】", "");
  L.push(m.lowDecomposability ? "（低可拆解度，留空）" : String(d.understanding || "").trim(), "");

  L.push("## 2. 落格段【受约束：固定要素登记 + 挂位置 + 附原文引文】", "");
  L.push("### 2.1 通用薄层（栏目固定，内容全涌现）", "");
  if (m.lowDecomposability) {
    L.push("（低可拆解度，留空）", "");
  } else {
    L.push("| 位置 | 处置动作 | 对象 | 依据（原文引文） | 目的 |");
    L.push("|---|---|---|---|---|");
    (d.slots || []).forEach((s) => {
      L.push(`| ${escCell(s.location)} | ${escCell(s.action)} | ${escCell(s.object)} | ${escCell(s.evidence)} | ${escCell(s.purpose)} |`);
    });
    L.push("");
  }

  L.push("### 2.2 涌现字段（内容全涌现）", "");
  // 第 130 轮：全部涌现字段走 renderLocated（对象数组逐项展开，禁 String(v) 字符串化）；
  // 第 128 轮的 sectionFunctions/paragraphFunctions 逐项挂位置渲染已并入同一函数。
  EMERGENT_FIELDS.forEach(([k, label]) => {
    const text = renderLocated(d.emergent?.[k]);
    L.push(`- ${label}：${text || "（未登记）"}`);
  });
  const stList = Array.isArray(d.emergent?.sectionTitles) ? d.emergent.sectionTitles : [];
  L.push(`- 章节标题（表层结构）：${renderLocated(stList) || "（未登记）"}`);
  const plOut = Array.isArray(d.paragraphLogic) ? d.paragraphLogic : [];
  if (plOut.length) {
    L.push("", "段内逻辑（关键段展开）：");
    for (const x of plOut) L.push(`  - ${x.location}：${flatVal(x.logic)}${x.quote ? `｜引文：${flatVal(x.quote)}` : ""}`);
  }
  L.push("");

  L.push("### 2.3 三层评分（三层独立，不派生、不强制一致）", "");
  L.push("| 层 | 对象 | 分数 | 打分依据 | 锚点参照 |");
  L.push("|---|---|---|---|---|");
  if (m.lowDecomposability) {
    L.push("| — | （低可拆解度，未打分） | — | — | — |");
  } else {
    (d.scores || []).forEach((s) => {
      L.push(`| ${LEVEL_LABEL[s.level] || s.level} | ${escCell(s.target || (s.level === "article" ? m.title : "—"))} | ${s.score} | ${escCell(s.rationale)} | ${escCell(s.anchorRef || (m.anchorStatus?.has ? "有" : "无锚点参照"))} |`);
    });
  }
  L.push("");

  L.push("### 2.4 鉴赏字段", "");
  const gems = d.appreciation?.gems || [];
  L.push(`- 亮点技法（挂位置）：${gems.length ? gems.map((g) => `[${g.location ?? "—"}] ${flatVal(g.note)}`).join("；") : "（无）"}`);
  const patterns = d.appreciation?.patterns || [];
  L.push(`- 可复用模式：${renderLocated(patterns) || "（无）"}`);
  const weak = d.appreciation?.weaknesses || [];
  L.push(`- 勉强之处 / 处理失败处（挂位置）：${weak.length ? weak.map((g) => `[${g.location ?? "—"}] ${flatVal(g.note)}`).join("；") : "（无）"}`);
  L.push("");

  L.push("### 2.5 新类型宣告（若有）", "");
  const p = d.newTypeProposal;
  if (p && String(p.name || "").trim()) {
    L.push(`- 候选名 / 定义：${p.name}——${p.definition || "（定义待补）"}`);
    L.push(`- 与既有类型库的关系：${p.relation || "（待比对）"}`);
    L.push(`- 依据（本篇何处、引文）：${oneLine(p.basis) || "（待补）"}`);
    L.push("- 状态：候选（待库主裁决，模型不拍板）");
  } else {
    L.push("（无）");
  }
  L.push("");
  L.push("---");
  L.push(`> 落格校验单道：通过；渲染契约 = 结构库/篇目/_模板.md。`);
  return L.join("\n");
}
