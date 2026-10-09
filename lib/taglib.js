// 标签库行级修补：解析两张表（标签表 + 共现复核队列），只改指定单元格，其余原样保留。
// 纯函数（md in → md out），可被 dev-check 直接测。

const cellsOf = (line) => line.split("|").slice(1, -1).map((s) => s.trim());
const isSep = (line) => /^\|\s*-+/.test(line);

export function parseTagLib(md) {
  const lines = String(md || "").split(/\r?\n/);
  let section = "tags";
  const tags = [];
  const queue = [];
  for (const line of lines) {
    if (line.startsWith("## ")) {
      section = line.includes("复核队列") ? "queue" : "other";
      continue;
    }
    if (!line.startsWith("|") || isSep(line)) continue;
    const c = cellsOf(line);
    if (section === "tags") {
      if (!c[0] || c[0] === "标签" || c[0] === "（暂无）") continue;
      tags.push({ tag: c[0], first: c[1] || "", action: c[2] || "", status: c[3] || "", note: c[4] || "" });
    } else if (section === "queue") {
      if (!c[0] || c[0] === "疑似对") continue;
      queue.push({ pair: c[0], evidence: c[1] || "", date: c[2] || "", decision: c[3] || "" });
    }
  }
  return { tags, queue };
}

// 向复核队列表尾追加一行（道 2 产出）。
export function appendQueueRow(md, row) {
  const lines = String(md || "").split(/\r?\n/);
  let inQueue = false;
  let lastDataRow = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("## ")) { inQueue = line.includes("复核队列"); continue; }
    if (inQueue && line.startsWith("|") && !/^\|\s*-+/.test(line)) {
      const c = line.split("|").slice(1, -1).map((s) => s.trim());
      if (c[0] && c[0] !== "疑似对") lastDataRow = i;
    }
  }
  const newLine = `| ${row.pair} | ${row.evidence} | ${row.date} |  |`;
  if (lastDataRow >= 0) lines.splice(lastDataRow + 1, 0, newLine);
  else {
    // 队列为空（只有表头与分隔线）：找分隔线后插入
    let inQ = false; let sepIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("## ")) { inQ = lines[i].includes("复核队列"); continue; }
      if (inQ && /^\|\s*-+/.test(lines[i])) { sepIdx = i; break; }
    }
    if (sepIdx < 0) return { md, appended: false };
    lines.splice(sepIdx + 1, 0, newLine);
  }
  return { md: lines.join("\n"), appended: true };
}

// patch: { status: Map<tag, 新状态>, decision: Map<pairKey, 裁决文本> }
// 只改命中行的目标列；未命中不报错（调用方决定是否校验命中数）。
// 返回 { md, changed: {status: [tag...], decision: [pair...]} }
export function patchTagLib(md, patch) {
  const lines = String(md || "").split(/\r?\n/);
  let section = "tags";
  const changedStatus = [];
  const changedDecision = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      section = line.includes("复核队列") ? "queue" : "other";
      continue;
    }
    if (!line.startsWith("|") || isSep(line)) continue;
    const c = cellsOf(line);
    if (section === "tags" && patch.status && c[0] && patch.status.has(c[0]) && c[0] !== "标签") {
      const next = patch.status.get(c[0]);
      if (c[3] !== next) {
        c[3] = next;
        lines[i] = `| ${c.join(" | ")} |`;
        changedStatus.push(c[0]);
      }
    } else if (section === "queue" && patch.decision && c[0] && patch.decision.has(c[0]) && c[0] !== "疑似对") {
      const next = patch.decision.get(c[0]);
      if (c[3] !== next) {
        c[3] = next;
        lines[i] = `| ${c.join(" | ")} |`;
        changedDecision.push(c[0]);
      }
    }
  }
  return { md: lines.join("\n"), changed: { status: changedStatus, decision: changedDecision } };
}
