// 闭包归一映射表（§4.2，库主第 36-37 轮定案）：解析 → 压平 → 渲染。
// 不变量：表内永远单跳（右值不得是左列键）；只改写右值，不追加行；行数 = 出现过的原始类型数。
// 纯函数，可被 dev-check 直接测。

const HEADER =
`# 闭包归一映射表

> 机制（§4.2，库主第 37 轮定案）：
> 1. 记录存**原始类型**，打上即定、永不改——本表左列即全库原始类型全集。
> 2. 右列为**当前类型**，表内永远单跳：查询原始类型 →（一跳）→ 当前类型。
> 3. 每轮演化后**压平闭包**：只改写已有行的右值，不追加行。行数 = 出现过的原始类型数，与演化轮次无关。
> 4. 压平后仍为多对多的，唯一归属进复核队列由库主裁决钉死；钉死值跟随其类型后续走映射，仍为单跳。
> 5. 三版被否留档：追加式 / 双字段批处理 / 标签分组视图（理由见设计文档 §4.2）。

## 映射（原始 → 当前，单跳）

| 原始类型 | 当前类型 | 钉死（库主裁决） |
|---|---|---|
`;

const QUEUE_HEADER = `
## 唯一归属复核队列（仅拆分类演化时出现）

| 原始类型 | 候选归属 | 进队轮次 | 库主裁决 |
|---|---|---|---|
`;

const LOG_HEADER = `
## 演化日志（每轮 diff，可回放）

| 轮次 | 日期 | 动作（谁并谁 / 谁拆成谁） | 依据与提案人 |
|---|---|---|---|
`;

const cellsOf = (line) => line.split("|").slice(1, -1).map((s) => s.trim());
const isSep = (line) => /^\|\s*-+/.test(line);
const isData = (line) => line.startsWith("|") && !isSep(line);
const cell = (v) => String(v ?? "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();

export function parseMapping(md) {
  const lines = String(md || "").split(/\r?\n/);
  let section = null;
  const rows = [], queue = [], log = [];
  for (const line of lines) {
    if (line.startsWith("## ")) {
      section = line.includes("唯一归属") ? "queue" : line.includes("演化日志") ? "log" : line.includes("映射") ? "map" : "other";
      continue;
    }
    if (!isData(line)) continue;
    const c = cellsOf(line);
    if (section === "map") {
      if (!c[0] || c[0] === "原始类型" || c[0] === "（暂无）") continue;
      rows.push({ from: c[0], to: c[1] || "", pinned: c[2] || "" });
    } else if (section === "queue") {
      if (!c[0] || c[0] === "原始类型") continue;
      queue.push({ from: c[0], candidates: c[1] || "", round: c[2] || "", decision: c[3] || "" });
    } else if (section === "log") {
      if (!c[0] || c[0] === "轮次") continue;
      log.push({ round: c[0], date: c[1] || "", action: c[2] || "", basis: c[3] || "" });
    }
  }
  return { rows, queue, log };
}

// 闭包压平：把每行右值解析到终点，保证单跳。防环：已访问即停（环进人工复核）。
export function flattenRows(rows) {
  const out = rows.map((r) => ({ ...r }));
  let changed = true;
  while (changed) {
    changed = false;
    const map = new Map(out.map((r) => [r.from, r.to]));
    for (const r of out) {
      const seen = new Set([r.from]);
      let to = r.to;
      while (map.has(to) && !seen.has(to)) {
        seen.add(to);
        to = map.get(to);
      }
      if (to !== r.to) { r.to = to; changed = true; }
    }
  }
  return out;
}

export function isSingleHop(rows) {
  const keys = new Set(rows.map((r) => r.from));
  return rows.every((r) => !keys.has(r.to));
}

export function renderMapping(state) {
  const { rows, queue, log } = state;
  const L = [HEADER];
  if (rows.length) rows.forEach((r) => L.push(`| ${cell(r.from)} | ${cell(r.to)} | ${cell(r.pinned)} |`));
  else L.push("| （暂无） |  |  |");
  L.push(QUEUE_HEADER);
  if (queue.length) queue.forEach((q) => L.push(`| ${cell(q.from)} | ${cell(q.candidates)} | ${cell(q.round)} | ${cell(q.decision)} |`));
  else L.push("|  |  |  |  |");
  L.push(LOG_HEADER);
  if (log.length) log.forEach((g) => L.push(`| ${cell(g.round)} | ${cell(g.date)} | ${cell(g.action)} | ${cell(g.basis)} |`));
  else L.push("|  |  |  |  |");
  return L.join("\n") + "\n";
}
