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

export function validateExtraction(d) {
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

const escCell = (v) => String(v ?? "").replace(/\\/g, "\\\\").replace(/\|/g, "\\|").replace(/\r?\n/g, "<br>");
const oneLine = (v) => String(v ?? "").replace(/\r?\n/g, " ").trim();

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
  const m = d.meta;
  const L = [];
  L.push(`# ${m.title}（${m.authors}, ${m.year}）`, "");
  L.push("## 0. 元信息【固定字段】", "");
  L.push(`- 出处：${m.authors} / ${m.year} / ${m.venue || "—"} / ${m.discipline || "—"}`);
  const b = m.boundary || {};
  L.push(`- 篇级边界判定：☑ 标题页 ☑ 署名 ☑ 目录与出版信息；判定结果：${BOUNDARY_LABEL[b.result] || b.result}${b.cut ? `（切点：${b.cut}）` : ""}`);
  L.push(`- 拆解日期：${m.date} / 拆解者：${EXTRACTOR_LABEL[m.extractor] || m.extractor}${m.taskId ? ` / 任务 id：${m.taskId}` : ""}`);
  const tags = (m.tags || []).map((t) => t.name).join("、") || "（无）";
  L.push(`- 标签：${tags}`);
  L.push(`- 待核标记：${(m.toVerify || []).length ? m.toVerify.join("；") : "（无）"}`);
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
  const LOCATED_FIELDS = new Set(["sectionFunctions", "paragraphFunctions"]);
  EMERGENT_FIELDS.forEach(([k, label]) => {
    if (LOCATED_FIELDS.has(k)) {
      // 第 128 轮：对象数组逐项挂位置渲染（其余键值用「｜」拼接），修 [object Object]；字符串值原样兼容
      const arr = d.emergent?.[k];
      const text = Array.isArray(arr)
        ? arr.map((x) => {
            const loc = String(x?.location ?? "").trim();
            const rest = Object.entries(x || {})
              .filter(([key, vv]) => key !== "location" && String(vv ?? "").trim())
              .map(([, vv]) => String(vv).trim());
            return `${loc}${rest.length ? ` ${rest.join("｜")}` : ""}`;
          }).join("；")
        : String(arr ?? "").trim();
      L.push(`- ${label}：${text || "（未登记）"}`);
      return;
    }
    const v = String(d.emergent?.[k] ?? "").trim();
    L.push(`- ${label}：${v || "（未登记）"}`);
  });
  const stList = Array.isArray(d.emergent?.sectionTitles) ? d.emergent.sectionTitles : [];
  L.push(`- 章节标题（表层结构）：${stList.length ? stList.map((x) => `${x.location} ${x.title}`).join("；") : "（未登记）"}`);
  const plOut = Array.isArray(d.paragraphLogic) ? d.paragraphLogic : [];
  if (plOut.length) {
    L.push("", "段内逻辑（关键段展开）：");
    for (const x of plOut) L.push(`  - ${x.location}：${x.logic}${x.quote ? `｜引文：${x.quote}` : ""}`);
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
  L.push(`- 亮点技法（挂位置）：${gems.length ? gems.map((g) => `[${g.location}] ${g.note}`).join("；") : "（无）"}`);
  const patterns = d.appreciation?.patterns || [];
  L.push(`- 可复用模式：${patterns.length ? patterns.join("；") : "（无）"}`);
  const weak = d.appreciation?.weaknesses || [];
  L.push(`- 勉强之处 / 处理失败处（挂位置）：${weak.length ? weak.map((g) => `[${g.location}] ${g.note}`).join("；") : "（无）"}`);
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
