import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import { hana } from '@hana/app-sdk/ui';
import {
  Button,
  CardShell,
  EmptyState,
  HanaThemeProvider,
  TextInput,
} from '@hana/plugin-components';
import '@hana/plugin-components/styles.css';
import './panel.css';

// v2：路由基准由 hana.api.fetch 自定（/api/apps/<id>/routes/），
// 凭证经 appSurfaceSession 自动携带（v1 的 token query 机制退役）。
const route = (p: string) => p.replace(/^\/+/, '');

// 非 JSON 响应（如宿主 500 纯文本）不再让 .json() 当场炸：解析失败按 HTTP 错误结构化返回。
async function parseAny(r: any): Promise<any> {
  const t = await r.text();
  try {
    return JSON.parse(t);
  } catch {
    return { ok: false, stage: 'http', message: `HTTP ${r.status}：${(t || '无响应体').slice(0, 200)}` };
  }
}
async function apiGet(path: string): Promise<any> {
  const r = await hana.api.fetch(route(path));
  return parseAny(r);
}
async function apiPost(path: string, body: unknown): Promise<any> {
  const r = await hana.api.fetch(route(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return parseAny(r);
}
// 第 110 轮：提交链专用——带超时，桥接/网络挂起不再把按钮永久卡死
async function apiPostT(path: string, body: unknown, ms = 30000): Promise<any> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      apiPost(path, body),
      new Promise<never>((_, rej) => { timer = setTimeout(() => rej(new Error(`请求超时（${ms / 1000}s）`)), ms); }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

// 后台任务轮询（导入/建模共用；切页后由挂载恢复接管，各认各的 kind）
async function pollJob(statusPath: string, opts: { kind?: string; timeoutMs?: number } = {}): Promise<any> {
  const timeoutMs = opts.timeoutMs ?? 8 * 60 * 1000;
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    await new Promise((r) => setTimeout(r, 5000));
    const s = await apiGet(statusPath).catch(() => null);
    if (s && s.running === false && (!opts.kind || s.kind === opts.kind) && s.lastResult) return s.lastResult;
  }
  return { ok: false, stage: 'timeout', message: `等待超时（${Math.round(timeoutMs / 60000)} 分钟），任务可能仍在运行；稍后刷新查看结果。` };
}
async function pollImport(timeoutMs = 8 * 60 * 1000): Promise<any> {
  return pollJob('/api/import/status', { timeoutMs });
}

// 篇目首行落格格式：# 题目（作者, 年份）——列表与下拉统一显示人话（不露文件 id）
function parseEntryHead(firstLine: string, fallbackId: string) {
  const m = /^#\s+(.+?)（([^（）]+),\s*(\d{4}[^)）]*)）$/.exec(String(firstLine || '').trim());
  return { title: m ? m[1] : fallbackId, meta: m ? `${m[2].trim()} · ${m[3]}` : '' };
}

// 第 127 轮（下拉裁切修复）：原生 select / datalist 的弹层在宿主 iframe 里会被视口边界裁掉，
// 列表长了不能滚动（Chromium iframe 已知行为），矮屏看不全。改为自绘弹层 + portal 挂到 body：
// 不进任何容器的裁剪面，按输入框位置算可用高度（下方不够就上翻），超出时弹层内部滚动。
// 保留第 114 轮的教训：弹层不与容器 overflow 共面，关闭后不残留、不压住内容。
function ComboSelect({ id, value, onChange, options, placeholder, allowCustom = false }: {
  id: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[];
  placeholder?: string; allowCustom?: boolean;
}) {
  const [text, setText] = useState(value);
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const [rect, setRect] = useState<{ left: number; width: number; top: number; maxH: number } | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const popRef = useRef<HTMLDivElement | null>(null);

  // 外部改值（如「采纳建议」填入目标）时同步回输入框
  useEffect(() => { setText(value); }, [value]);

  const q = String(text || '').trim().toLowerCase();
  const list = useMemo(() => {
    if (!q) return options;
    const hit = options.filter((o) => o.value.toLowerCase().includes(q) || o.label.toLowerCase().includes(q));
    return hit.length ? hit : options;
  }, [options, q]);

  // 弹层定位：视口内可用高度（下方不够就上翻），高度封顶后内部滚动
  const place = useCallback(() => {
    const el = inputRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight || 720;
    const below = vh - r.bottom - 8;
    const above = r.top - 8;
    const up = below < 160 && above > below;
    const maxH = Math.max(120, Math.min(340, Math.floor(up ? above : below)));
    const top = up ? Math.max(4, r.top - maxH - 2) : Math.max(4, Math.min(r.bottom + 2, vh - maxH - 4));
    setRect({ left: r.left, width: Math.max(r.width, 180), top, maxH });
  }, []);

  const openList = useCallback(() => { place(); setOpen(true); setHi(0); }, [place]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (inputRef.current?.contains(t) || popRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onMove = () => place();
    document.addEventListener('pointerdown', onDown, true);
    window.addEventListener('scroll', onMove, true);
    window.addEventListener('resize', onMove);
    return () => {
      document.removeEventListener('pointerdown', onDown, true);
      window.removeEventListener('scroll', onMove, true);
      window.removeEventListener('resize', onMove);
    };
  }, [open, place]);

  const pick = (v: string) => { setText(v); onChange(v); setOpen(false); };

  return (
    <>
      <input
        ref={inputRef}
        id={id}
        className="native-sel"
        value={text}
        placeholder={placeholder}
        onFocus={openList}
        onClick={openList}
        onChange={(e) => {
          const v = e.currentTarget.value;
          setText(v);
          // 非自由场景只在精确匹配时才落值（防非法值入库）；自由场景直接落值
          if (allowCustom || options.some((o) => o.value === v)) onChange(v);
          place(); setOpen(true); setHi(0);
        }}
        onBlur={() => {
          window.setTimeout(() => {
            if (popRef.current?.contains(document.activeElement)) return;
            setOpen(false);
            if (!allowCustom) setText(value); // 非自由：失焦未选中则回滚到已提交值
          }, 120);
        }}
        onKeyDown={(e) => {
          e.stopPropagation();
          if (e.key === 'ArrowDown') { e.preventDefault(); if (!open) openList(); else setHi((i) => Math.min(i + 1, list.length - 1)); }
          else if (e.key === 'ArrowUp') { e.preventDefault(); setHi((i) => Math.max(i - 1, 0)); }
          else if (e.key === 'Enter') { if (open && list[hi]) { e.preventDefault(); pick(list[hi].value); } }
          else if (e.key === 'Escape') setOpen(false);
        }}
      />
      {open && rect && createPortal(
        <div
          ref={popRef}
          className="combo-pop"
          style={{ left: rect.left, top: rect.top, width: rect.width, maxHeight: rect.maxH }}
        >
          {list.length === 0 && <div className="combo-opt muted">（无匹配）</div>}
          {list.map((o, i) => (
            <div
              key={o.value}
              className={i === hi ? 'combo-opt on' : 'combo-opt'}
              onMouseEnter={() => setHi(i)}
              onMouseDown={(e) => { e.preventDefault(); pick(o.value); }}
            >
              {o.label}
            </div>
          ))}
        </div>,
        document.body
      )}
    </>
  );
}
async function readEntryHead(file: string): Promise<string> {
  const r = await apiGet(fileApi(`篇目/${file}`)).catch(() => null);
  return r && r.ok ? String(r.content || '').split(/\r?\n/, 1)[0] : '';
}
const fileApi = (rel: string) => `/api/file?path=${encodeURIComponent(rel)}`;

// ---- 方案三信息架构：5 区导航 + 区内子页，首页为默认落点 ----
type Zone = 'home' | 'use' | 'library' | 'todo' | 'settings';
const NAV: { id: Zone; label: string }[] = [
  { id: 'home', label: '首页' },
  { id: 'use', label: '取用' },
  { id: 'library', label: '结构库' },
  { id: 'todo', label: '待办' },
  { id: 'settings', label: '设置' },
];
const SUBS: Record<'use' | 'library' | 'todo', { id: string; label: string }[]> = {
  use: [
    { id: 'search', label: '检索' },
    { id: 'models', label: '写作模型' },
  ],
  library: [
    { id: 'browse', label: '篇目' },
    { id: 'compare', label: '对比' },
    { id: 'board', label: '看板' },
  ],
  todo: [
    { id: 'score', label: '录评分' },
    { id: 'queue', label: '标签裁决' },
    { id: 'types', label: '类型裁决' },
    { id: 'import-fail', label: '导入失败' },
  ],
};
type ZoneEx = 'use' | 'library' | 'todo';
type Stats = { papers: number; models: number; queuePending: number; failures: number };

// ---- 轻量 Markdown 渲染（标题/表格/列表/引用/行内样式）----
function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function inline(s: string): string {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}
function mdToHtml(md: string): string {
  const lines = String(md || '').split(/\r?\n/);
  const out: string[] = [];
  let i = 0;
  let inList = false;
  const closeList = () => { if (inList) { out.push('</ul>'); inList = false; } };
  while (i < lines.length) {
    const line = lines[i];
    if (/^\|.*\|/.test(line) && i + 1 < lines.length && /^\|\s*-+/.test(lines[i + 1])) {
      closeList();
      const head = line.split('|').slice(1, -1).map((c) => c.trim());
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && /^\|/.test(lines[i])) {
        rows.push(lines[i].split('|').slice(1, -1).map((c) => c.trim()));
        i++;
      }
      out.push('<table><thead><tr>' + head.map((h) => `<th>${inline(h)}</th>`).join('') + '</tr></thead><tbody>');
      for (const r of rows) out.push('<tr>' + r.map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>');
      out.push('</tbody></table>');
      continue;
    }
    if (/^###\s/.test(line)) { closeList(); out.push(`<h3>${inline(line.slice(4))}</h3>`); }
    else if (/^##\s/.test(line)) { closeList(); out.push(`<h2>${inline(line.slice(3))}</h2>`); }
    else if (/^#\s/.test(line)) { closeList(); out.push(`<h1>${inline(line.slice(2))}</h1>`); }
    else if (/^>\s?/.test(line)) { closeList(); out.push(`<blockquote>${inline(line.replace(/^>\s?/, ''))}</blockquote>`); }
    else if (/^-\s/.test(line) || /^\*\s/.test(line)) {
      if (!inList) { out.push('<ul>'); inList = true; }
      out.push(`<li>${inline(line.slice(2))}</li>`);
    }
    else if (/^---+\s*$/.test(line)) { closeList(); out.push('<hr>'); }
    else if (line.trim() === '') { closeList(); }
    else { closeList(); out.push(`<p>${inline(line)}</p>`); }
    i++;
  }
  closeList();
  return out.join('\n');
}

function Doc({ md }: { md: string }) {
  return <div className="doc" dangerouslySetInnerHTML={{ __html: mdToHtml(md) }} />;
}

async function listDir(dir: string): Promise<string[]> {
  const r = await apiGet(`/api/list?dir=${encodeURIComponent(dir)}`);
  if (!r.ok) return [];
  return (r.items || [])
    .filter((it: any) => !it.isDirectory && it.name.endsWith('.md') && it.name !== '_模板.md')
    .map((it: any) => it.name as string);
}

type QueueRow = { pair: string; evidence: string; date: string; decision: string };
function parseQueue(md: string): QueueRow[] {
  const lines = String(md || '').split(/\r?\n/);
  const rows: QueueRow[] = [];
  let inQ = false;
  for (const line of lines) {
    if (line.startsWith('## ')) { inQ = line.includes('复核队列'); continue; }
    if (inQ && line.startsWith('|') && !/^\|\s*-+/.test(line)) {
      const c = line.split('|').slice(1, -1).map((s) => s.trim());
      if (c[0] && c[0] !== '疑似对') rows.push({ pair: c[0], evidence: c[1] || '', date: c[2] || '', decision: c[3] || '' });
    }
  }
  return rows;
}

// 首页状态条 + 待办徽标共用一份统计（不各拉一套）
async function loadStats(): Promise<Stats> {
  const [papers, models, tagLib, fails] = await Promise.all([
    listDir('篇目'),
    listDir('写作模型'),
    apiGet(fileApi('标签库.md')),
    apiGet('/api/import/failures').catch(() => ({ ok: false, items: [] })),
  ]);
  const queue = tagLib.ok ? parseQueue(tagLib.content) : [];
  return {
    papers: papers.length,
    models: models.length,
    queuePending: queue.filter((r) => !r.decision).length,
    failures: (fails.items || []).length,
  };
}

// ---- 1 录评分 ----
// 第 113 轮：库主问「必须录还是主动录」——答：主动（锚点=库主自己的总分，评分链起点；
// 不录不报错，只是模型分数永无锚点参照、置信度停在冷启动）。录入体验补强：
// 已导入篇目下拉直选并预填（id/标题/作者/年份），手输保留——锚点也可为未拆解的文献。
function ScoreTab() {
  const today = new Date().toISOString().slice(0, 10);
  const [f, setF] = useState({ id: '', title: '', authors: '', year: '', venue: '', textType: '', score: '9', rationale: '', date: today, recordedBy: '' });
  const [result, setResult] = useState<any>(null);
  const [entries, setEntries] = useState<{ id: string; title: string; label: string; authors: string; year: string }[]>([]);
  const set = (k: string, v: string) => setF((p) => ({ ...p, [k]: v }));

  useEffect(() => {
    let alive = true;
    void (async () => {
      const r = await apiGet('/api/list?dir=篇目').catch(() => null);
      if (!r?.ok) return;
      const names: string[] = (r.items || []).map((x: any) => x.name).filter((n: string) => n.endsWith('.md') && !n.startsWith('_'));
      const parsed = await Promise.all(names.map(async (n) => {
        const h = await apiGet(fileApi(`篇目/${n}`)).catch(() => null);
        const first = h?.ok ? String(h.content || '').split(/\r?\n/, 1)[0] : '';
        const m = /^#\s+(.+?)（([^（）]+),\s*(\d{4})[^)）]*）$/.exec(String(first || '').trim());
        const id = n.replace(/\.md$/, '');
        return { id, title: m ? m[1] : id, label: m ? `${m[1]}（${m[2].trim()} · ${m[3]}）` : id, authors: m ? m[2].trim() : '', year: m ? m[3] : '' };
      }));
      if (alive) setEntries(parsed);
    })();
    return () => { alive = false; };
  }, []);

  async function submit() {
    const anchor = {
      id: f.id.trim(), title: f.title.trim(), authors: f.authors.trim(), year: f.year.trim(),
      venue: f.venue.trim() || undefined, textType: f.textType.trim(),
      score: Number(f.score), rationale: f.rationale.trim(), date: f.date, recordedBy: f.recordedBy.trim(),
    };
    const r = await apiPost('/api/tool/commit_anchor', { anchor });
    setResult(r);
    if (r.ok) hana.toast.show({ message: '评分已落盘', type: 'success' });
  }

  return (
    <div className="form">
      <p className="hint">你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。不录也不阻断——只是模型分数永远无锚点参照。</p>
      <div className="import-row">
        <ComboSelect
          id="cb-score-entry"
          value=""
          placeholder={entries.length ? `输入过滤或选择篇目（${entries.length} 篇，选中即预填）` : '读取篇目中…'}
          onChange={(v) => {
            const e = entries.find((x) => x.id === v);
            if (!e) return;
            setF((p) => ({ ...p, id: e.id, title: e.title, authors: e.authors, year: e.year }));
          }}
          options={entries.map((e) => ({ value: e.id, label: e.label }))}
        />
        <span className="hint">也可不选直接手填（锚点可以是尚未拆解的文献）。</span>
      </div>
      <div className="grid2">
        <TextInput label="篇目 id（slug-年）" value={f.id} onChange={(e) => set('id', e.currentTarget.value)} placeholder="sample-2020" />
        <TextInput label="文本类型（你判）" value={f.textType} onChange={(e) => set('textType', e.currentTarget.value)} placeholder="论证型 / 阐释型…" />
        <TextInput label="标题" value={f.title} onChange={(e) => set('title', e.currentTarget.value)} />
        <TextInput label="作者" value={f.authors} onChange={(e) => set('authors', e.currentTarget.value)} />
        <TextInput label="年份" value={f.year} onChange={(e) => set('year', e.currentTarget.value)} />
        <TextInput label="出处（可空）" value={f.venue} onChange={(e) => set('venue', e.currentTarget.value)} />
        <TextInput label="总分 1-10" value={f.score} onChange={(e) => set('score', e.currentTarget.value)} />
        <TextInput label="日期" value={f.date} onChange={(e) => set('date', e.currentTarget.value)} />
      </div>
      <TextInput label="理由（≥10 字）" value={f.rationale} onChange={(e) => set('rationale', e.currentTarget.value)} />
      <TextInput label="录入者" value={f.recordedBy} onChange={(e) => set('recordedBy', e.currentTarget.value)} />
      <Button variant="primary" onClick={submit}>提交评分</Button>
      {result && (
        <pre className={result.ok ? 'ok' : 'err'}>
          {result.ok ? `已写入：${result.file || '(dry run)'}` : JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

// ---- 2 标签裁决 ----
// 第 104 轮（§5.9 修订·丙）：边加权分簇——语义相近提议边 3、共现≥3 边 2、其余 1；
// 只按权 ≥2 连通，权 1 的弱桥不再把语义族焊成大簇；弱桥对单列，逐对裁决。
const edgeWeight = (r: QueueRow): number => {
  if (r.evidence.startsWith('语义相近')) return 3;
  const m = /共现\s*(\d+)\s*篇/.exec(r.evidence);
  return m && Number(m[1]) >= 3 ? 2 : 1;
};
type Cluster = { rows: QueueRow[]; labels: string[] };
function clusterQueue(rowsIn: QueueRow[]): { clusters: Cluster[]; weak: QueueRow[] } {
  const parent = new Map<string, string>();
  const find = (x: string): string => {
    let r = x;
    while ((parent.get(r) || r) !== r) r = parent.get(r) || r;
    return r;
  };
  const labelsOf = (pair: string) => pair.split(' vs ').filter(Boolean);
  for (const r of rowsIn) for (const l of labelsOf(r.pair)) if (!parent.has(l)) parent.set(l, l);
  for (const r of rowsIn) {
    if (edgeWeight(r) < 2) continue;
    const [a, b] = labelsOf(r.pair);
    if (a && b) {
      const ra = find(a);
      const rb = find(b);
      if (ra !== rb) parent.set(ra, rb);
    }
  }
  const byRoot = new Map<string, Cluster>();
  const weak: QueueRow[] = [];
  for (const r of rowsIn) {
    const [a, b] = labelsOf(r.pair);
    if (a && b && find(a) === find(b)) {
      const root = find(a);
      let c = byRoot.get(root);
      if (!c) { c = { rows: [], labels: [] }; byRoot.set(root, c); }
      c.rows.push(r);
    } else {
      weak.push(r);
    }
  }
  for (const c of byRoot.values()) {
    const ls = new Set<string>();
    for (const r of c.rows) for (const l of labelsOf(r.pair)) ls.add(l);
    c.labels = [...ls];
  }
  // 簇序：最早进队的簇在前，同日按簇内对数多的在前
  const clusters = [...byRoot.values()].sort((x, y) => {
    const dx = x.rows.map((r) => r.date).sort()[0] || '';
    const dy = y.rows.map((r) => r.date).sort()[0] || '';
    if (dx !== dy) return dx < dy ? -1 : 1;
    return y.rows.length - x.rows.length;
  });
  return { clusters, weak };
}

// 第 104 轮（§5.9 修订·甲）：组卡状态——每簇一份；键 = 簇标签集排序串（提交后簇变化不串组）
type GState = { groups: { target: string; members: string[] }[]; pool: string[]; sel: string[] };
const clusterKey = (cl: Cluster) => cl.labels.slice().sort().join('|');

function QueueTab({ tick, onChanged }: { tick: number; onChanged?: () => void }) {
  const [rows, setRows] = useState<QueueRow[]>([]);
  const [note, setNote] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState('');
  const [proposing, setProposing] = useState(false);
  const [scanStage, setScanStage] = useState<'' | 'co' | 'semantic'>(''); // 一键查重阶段（第 112 轮）
  const [showDecided, setShowDecided] = useState(false); // §5.9 设计 A：已裁决默认折叠
  const [gState, setGState] = useState<Record<string, GState>>({}); // 第 104 轮 甲：各簇组卡 + 池
  const [partBusy, setPartBusy] = useState<number | null>(null); // 分族提议进行中的簇
  const [submitting, setSubmitting] = useState(false); // 分区提交进行中
  const [prog, setProg] = useState(''); // 提交链实时进度（第 110 轮）

  // 挂载恢复：提议中切页回来，接管轮询到收尾
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const s = await apiGet('/api/model/status').catch(() => null);
      if (cancelled || !s || !s.running || s.kind !== 'propose') return;
      setProposing(true);
      setMsg('AI 语义查重进行中（接管切页前的任务）…');
      const fin = await pollJob('/api/model/status', { kind: 'propose', timeoutMs: 3 * 60 * 1000 });
      if (cancelled) return;
      setMsg(fin.ok ? `已入队 ${fin.queued?.length || 0} 对` : (fin.message || '未产出建议'));
      if (fin.ok) await load();
      setProposing(false);
    })();
    return () => { cancelled = true; };
  }, []);
  const load = useCallback(async () => {
    const r = await apiGet(fileApi('标签库.md'));
    setRows(r.ok ? parseQueue(r.content) : []);
  }, []);
  useEffect(() => { void load(); }, [load, tick]);

  async function decide(pair: string, merged: string, target: string) {
    const date = new Date().toISOString().slice(0, 10);
    const evidence = note[pair] || `裁决执行：${pair}`;
    const r = await apiPost('/api/tool/apply_tag_merge', { mergedLabel: merged, target, date, evidence });
    setMsg(r.ok ? `已执行：${merged} → ${r.now}` : (r.message || JSON.stringify(r)));
    if (r.ok) { await load(); onChanged?.(); }
  }

  async function decideIndependent(pair: string) {
    const date = new Date().toISOString().slice(0, 10);
    const reason = note[pair] || '';
    const r = await apiPost('/api/tool/apply_pair_independent', { pair, date, reason });
    setMsg(r.ok ? `已判定独立，两标签都保留：${pair}` : (r.message || JSON.stringify(r)));
    if (r.ok) { await load(); onChanged?.(); }
  }

  const setGs = (key: string, labels: string[], fn: (s: GState) => GState) =>
    setGState((p) => ({ ...p, [key]: fn(p[key] || { groups: [], pool: labels.slice(), sel: [] }) }));

  async function proposePartition(ci: number, cl: Cluster) {
    const key = clusterKey(cl);
    setPartBusy(ci);
    setMsg('');
    try {
      const start = await apiPost('/api/model/propose-partition', {
        labels: cl.labels,
        pairs: cl.rows.map((r) => ({ pair: r.pair, evidence: r.evidence })),
      });
      if (!start.started) { setMsg(start.message || '发起失败'); setPartBusy(null); return; }
      const fin = await pollJob('/api/model/status', { kind: 'partition', timeoutMs: 3 * 60 * 1000 });
      if (fin.stage === 'timeout') { setMsg(fin.message); setPartBusy(null); return; }
      if (fin.ok && Array.isArray(fin.groups)) {
        const groups = (fin.groups as string[][])
          .filter((arr) => Array.isArray(arr) && arr.length > 0)
          .map((arr) => ({ target: arr[0], members: arr.slice() }));
        setGs(key, cl.labels, (s) => ({ ...s, groups, pool: [], sel: [] }));
        setMsg(fin.message ? `分族提案已给出（${fin.message}）——点选标签可调整分组` : '分族提案已给出，核对后提交');
      } else {
        setMsg(fin.message || '未产出分族提案');
      }
    } catch (e: any) {
      setMsg(`请求失败：${String(e?.message || e)}`);
    }
    setPartBusy(null);
  }

  async function submitPartition(ci: number, cl: Cluster) {
    const key = clusterKey(cl);
    const gs = gState[key] || { groups: [], pool: cl.labels.slice(), sel: [] };
    if (gs.pool.length > 0) { setMsg(`还有 ${gs.pool.length} 个标签未分组（可「全部各自成组」）`); return; }
    if (!gs.groups.length) { setMsg('先分组再提交'); return; }
    const flat = gs.groups.flatMap((gr) => gr.members);
    const missing = cl.labels.filter((l) => !flat.includes(l));
    const dup = flat.filter((l, i) => flat.indexOf(l) !== i);
    if (missing.length || dup.length) { setMsg(`分组与标签清单不符 — 缺：${missing.join('、') || '无'}；重复：${dup.join('、') || '无'}`); return; }
    for (const gr of gs.groups) {
      const t = String(gr.target ?? '');
      if (gr.members.length > 0 && !t.trim()) { setMsg('有组的存活名为空——补填，或把该组成员移回池'); return; }
      if (t.includes(' vs ')) { setMsg('存活名不能包含「 vs 」（会破坏对的解析）'); return; }
    }
    setSubmitting(true);
    setMsg('');
    const date = new Date().toISOString().slice(0, 10);
    const groupOf = new Map<string, number>();
    gs.groups.forEach((gr, gi) => gr.members.forEach((l) => groupOf.set(l, gi)));
    let merged = 0; let independent = 0; let skipped = 0; let failed = '';
    try {
      // ① 组内合并（非存活名 → 存活名）：合并回填会顺带关闭含被并标签的跨组对（对随标签消失而失效，记「并入」即正确）
      for (const gr of gs.groups) {
        if (gr.members.length < 2) continue;
        const t = String(gr.target);
        for (const m of gr.members) {
          if (m === t) continue;
          setProg(`正在合并：「${m}」→「${t}」…`);
          const r = await apiPostT('/api/tool/apply_tag_merge', {
            mergedLabel: m, target: t, date,
            evidence: `相关组分区提交：组内「${m}」并入「${t}」`,
          });
          if (!r.ok) { failed = `合并「${m}→${t}」失败：${r.message || JSON.stringify(r)}`; break; }
          merged++;
        }
        if (failed) break;
      }
      // ② 跨组且仍待裁的对 → 判定独立（已被①带过的跳过，不算失败）
      if (!failed) {
        for (const row of cl.rows) {
          const [a, b] = row.pair.split(' vs ');
          if (groupOf.get(a) === groupOf.get(b)) continue;
          setProg(`正在判定独立：${row.pair}…`);
          const r = await apiPostT('/api/tool/apply_pair_independent', {
            pair: row.pair, date, reason: '相关组分区提交：分属不同组',
          });
          if (r.ok) { independent++; continue; }
          const m = String(r.message || '');
          if (m.includes('已有裁决') || m.includes('无此对')) { skipped++; continue; }
          failed = `判定独立「${row.pair}」失败：${m || JSON.stringify(r)}`;
          break;
        }
      }
    } catch (e: any) {
      failed = `提交中断（网络/桥接异常）：${String(e?.message || e)}`;
    }
    setMsg(failed
      ? `${failed}（此前已完成：${merged} 合并、${independent} 独立；直接再点提交即可续跑——已并入的标签重试幂等，不会重复执行）`
      : `已提交本组裁决：${merged} 合并、${independent} 独立${skipped ? `、${skipped} 对已随合并关闭` : ''}`);
    try { await load(); } catch { /* 刷新失败不卡提交态 */ }
    onChanged?.(); // 任何写入（含部分成功）都要刷新导航角标（第 113 轮）
    if (!failed) setGState((p) => ({ ...p, [key]: { groups: [], pool: cl.labels.slice(), sel: [] } }));
    setProg('');
    setSubmitting(false);
  }

  async function oneClickScan() {
    setProposing(true);
    setMsg('');
    setScanStage('co');
    let coMsg = '';
    try {
      // 阶段一：共现查重（同步，秒出，免费）
      const r = await apiPost('/api/tool/suggest_tag_merges', {});
      coMsg = r.ok
        ? (r.written ? `共现入队 ${r.written} 对` : '共现无新候选')
        : `共现扫描失败：${r.message || JSON.stringify(r)}`;
      if (r.ok) { try { await load(); } catch { /* 忽略刷新失败 */ } }
      // 阶段二：AI 语义查重（异步任务，约半分钟；标签集未变时服务端指纹自动跳过）
      setScanStage('semantic');
      const start = await apiPost('/api/model/propose-merges', {});
      if (!start.started) {
        setMsg(`${coMsg}；语义查重未启动：${start.message || '发起失败'}`);
      } else {
        const fin = await pollJob('/api/model/status', { kind: 'propose', timeoutMs: 3 * 60 * 1000 });
        if (fin.stage === 'timeout') {
          setMsg(`${coMsg}；语义查重${fin.message || '等待超时'}`);
        } else {
          const semMsg = fin.ok
            ? (fin.message || (fin.queued?.length ? `语义入队 ${fin.queued.length} 对：${fin.queued.join('；')}` : '语义未找到新对'))
            : (fin.message || '语义查重未产出建议');
          setMsg(`${coMsg}；${semMsg}`);
          if (fin.ok && fin.queued?.length) { try { await load(); } catch { /* 忽略刷新失败 */ } }
        }
      }
    } catch (e: any) {
      setMsg(`${coMsg ? `${coMsg}；` : ''}查重中断：${String(e?.message || e)}`);
    }
    setScanStage('');
    setProposing(false);
    onChanged?.(); // 查重可能入队新对，刷新导航角标（第 113 轮）
  }

  const pending = rows.filter((r) => !r.decision);
  const decided = rows.filter((r) => !!r.decision);
  const { clusters, weak } = useMemo(() => clusterQueue(pending), [rows]);
  const rowCard = (r: QueueRow) => (
    <CardShell key={r.pair} title={r.pair} description={`${r.date} 进队 · ${r.evidence}`}>
      {r.decision ? (
        <p className="decided">已裁决：{r.decision}</p>
      ) : (
        <div className="queue-actions">
          {[r.pair.split(' vs ')[0], r.pair.split(' vs ')[1]].filter(Boolean).map((merged, idx, arr) => (
            <div key={merged} className="queue-op">
              <Button onClick={() => decide(r.pair, merged, arr[1 - idx])}>
                「{merged}」并入「{arr[1 - idx]}」
              </Button>
            </div>
          ))}
          <div className="queue-op">
            <Button onClick={() => decideIndependent(r.pair)}>判定独立（都保留）</Button>
          </div>
          <TextInput label="依据（可空，判定独立时建议填）" value={note[r.pair] || ''} onChange={(e) => { const v = e.currentTarget.value; setNote((p) => ({ ...p, [r.pair]: v })); }} />
        </div>
      )}
    </CardShell>
  );
  return (
    <div>
      <p className="hint">
        {pending.length > 0 && <b>{pending.length} 对待裁决　</b>}
        疑似重复（或高度共现）的标签对会进到这里。两种处理：合并（留一个名字，另一个成为它的别名）或判定独立（两个都留）；互相牵连的对归在同一组里批量处理。所有操作只新增记录，不改动原始拆解。
        本页管标签层（同一个论证动作的多个名字）；把标签家族立成类型在下一页——两页可并行，不必等这页清空。
      </p>
      {msg && <p className={msg.startsWith('已') ? 'ok' : 'err'}>{msg}</p>}
      <div className="import-row">
        <Button variant="primary" disabled={proposing} onClick={() => void oneClickScan()}>
          {scanStage === 'co' ? '共现扫描中…' : scanStage === 'semantic' ? '语义查重中…' : '一键查重'}
        </Button>
        <span className="hint">一键查重：先扫共现（秒出），再跑 AI 语义（约半分钟，标签集未变自动跳过）；结果都进下方待裁决，每对来源写在证据里。</span>
      </div>
      {rows.length === 0 && <EmptyState title="暂无待裁决标签" description="篇目积累出相近标签后，候选会自动出现在这里。" />}
      {clusters.map((cl, ci) => {
        const key = clusterKey(cl);
        const gs = gState[key] || { groups: [], pool: cl.labels.slice(), sel: [] };
        const groupOf = new Map<string, number>();
        gs.groups.forEach((gr, gi) => gr.members.forEach((l) => groupOf.set(l, gi)));
        const mergeCount = gs.groups.reduce((n, gr) => n + (gr.members.includes(gr.target) ? Math.max(0, gr.members.length - 1) : gr.members.length), 0);
        const indepCount = cl.rows.filter((r) => {
          const [a, b] = r.pair.split(' vs ');
          return groupOf.get(a) !== groupOf.get(b);
        }).length;
        return (
          <div key={key} className="cluster">
            <p className="hint queue-group">
              <b>相关组 {ci + 1}</b> · {cl.rows.length} 对 · {cl.labels.length} 个标签
            </p>
            <div className="import-row">
              <Button disabled={partBusy !== null || proposing} onClick={() => void proposePartition(ci, cl)}>
                {partBusy === ci ? '分组中…' : '智能分组'}
              </Button>
              <Button disabled={submitting} onClick={() => setGs(key, cl.labels, (s) => ({ ...s, groups: cl.labels.map((l) => ({ target: l, members: [l] })), pool: [], sel: [] }))}>全部各自成组</Button>
              <Button disabled={submitting} onClick={() => setGs(key, cl.labels, (s) => ({ ...s, groups: [{ target: cl.labels[0], members: cl.labels.slice() }], pool: [], sel: [] }))}>全部并入一组</Button>
            </div>
            {gs.groups.map((gr, gi) => (
              <div key={`g${gi}`} className="group-card">
                <div className="hint group-head">
                  组 {gi + 1} · 存活名：
                  <input
                    className="target-input"
                    value={gr.target}
                    onChange={(e) => { const v = e.currentTarget.value; setGs(key, cl.labels, (s) => ({ ...s, groups: s.groups.map((x, i2) => (i2 === gi ? { ...x, target: v } : x)) })); }}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="点 ★ 快选，或直接输入新名"
                  />
                  <span className="hint">（{gr.members.length} 个标签；成员 chip 的 ★ 一键设为存活名，输入框可自定义新名）</span>
                </div>
                <p className="cluster-tags">
                  {gr.members.map((l) => (
                    <span
                      key={l}
                      className={gs.sel.includes(l) ? 'tag-chip sel' : 'tag-chip'}
                      onClick={() => setGs(key, cl.labels, (s) => ({ ...s, sel: s.sel.includes(l) ? s.sel.filter((x) => x !== l) : [...s.sel, l] }))}
                    >
                      {l}
                      <button
                        className="chip-star"
                        title="设为本组存活名"
                        onClick={(e) => { e.stopPropagation(); setGs(key, cl.labels, (s) => ({ ...s, groups: s.groups.map((x, i2) => (i2 === gi ? { ...x, target: l } : x)) })); }}
                      >{gr.target === l ? '★' : '☆'}</button>
                      <button
                        className="chip-x"
                        onClick={(e) => { e.stopPropagation(); setGs(key, cl.labels, (s) => ({
                          ...s,
                          groups: s.groups.map((x, i2) => {
                            if (i2 !== gi) return x;
                            const rest = x.members.filter((m) => m !== l);
                            return { ...x, members: rest, target: x.target === l ? (rest[0] || '') : x.target };
                          }).filter((x) => x.members.length > 0),
                          pool: [...s.pool, l],
                        })); }}
                      >×</button>
                    </span>
                  ))}
                </p>
                {gs.sel.length > 0 && (
                  <Button onClick={() => setGs(key, cl.labels, (s) => {
                    const mv = s.sel.filter((l) => cl.labels.includes(l));
                    if (!mv.length) return s;
                    const groups = s.groups
                      .map((x, i) => {
                        const rest = x.members.filter((m) => !mv.includes(m));
                        if (i === gi) return { ...x, members: [...rest, ...mv.filter((m) => !rest.includes(m))], target: x.target || (rest[0] ?? mv[0]) };
                        const target = x.target && mv.includes(x.target) ? (rest[0] || '') : x.target;
                        return { ...x, members: rest, target };
                      })
                      .filter((x) => x.members.length > 0);
                    return { ...s, groups, pool: s.pool.filter((l) => !mv.includes(l)), sel: [] };
                  })}>把选中的 {gs.sel.length} 个放进本组</Button>
                )}
              </div>
            ))}
            {gs.pool.length > 0 && (
              <div className="pool-box">
                <p className="hint">
                  未分组（{gs.pool.length}）：标签点选后用下方行动按钮分组；组间提交即判定独立。
                </p>
                <p className="cluster-tags">
                  {gs.pool.map((l) => (
                    <span
                      key={l}
                      className={gs.sel.includes(l) ? 'tag-chip sel' : 'tag-chip'}
                      onClick={() => setGs(key, cl.labels, (s) => ({ ...s, sel: s.sel.includes(l) ? s.sel.filter((x) => x !== l) : [...s.sel, l] }))}
                    >{l}</span>
                  ))}
                </p>
              </div>
            )}
            {gs.sel.length > 0 && (
              <div className="import-row sel-actions">
                <Button onClick={() => setGs(key, cl.labels, (s) => {
                  const mv = s.sel.filter((l) => cl.labels.includes(l));
                  if (!mv.length) return s;
                  const cleaned = s.groups
                    .map((x) => {
                      const rest = x.members.filter((m) => !mv.includes(m));
                      const target = x.target && mv.includes(x.target) ? (rest[0] || '') : x.target;
                      return { ...x, members: rest, target };
                    })
                    .filter((x) => x.members.length > 0);
                  return { ...s, groups: [...cleaned, { target: mv[0], members: mv }], pool: s.pool.filter((l) => !mv.includes(l)), sel: [] };
                })}>成新组（{gs.sel.length}）</Button>
                <span className="hint">已选中 {gs.sel.length} 个标签：「成新组」拆出去（选 1 个即单独成组），或点目标组卡上的「放进本组」并入该组；再点标签取消选中。</span>
              </div>
            )}
            <div className="import-row">
              <Button variant="primary" disabled={submitting || gs.pool.length > 0 || gs.groups.length === 0} onClick={() => void submitPartition(ci, cl)}>
                {submitting ? '提交中…' : `提交本组裁决（${mergeCount} 合并 + ${indepCount} 独立）`}
              </Button>
              <span className="hint">
                {submitting && prog ? prog : (gs.pool.length > 0 ? '先把未分组标签分完（可「全部各自成组」）' : '先组内合并，再把跨组待裁对记为独立；存活名保留。')}
              </span>
            </div>
            <details className="cluster-evidence">
              <summary>共现证据（{cl.rows.length} 对）</summary>
              {cl.rows.map((r) => (<p key={r.pair} className="hint">{r.pair} — {r.evidence}</p>))}
            </details>
            {cl.rows.map(rowCard)}
          </div>
        );
      })}
      {weak.length > 0 && (
        <div className="cluster weak-zone">
          <p className="hint queue-group"><b>弱关联对</b> · {weak.length} 对 · 单独裁决（合并或判定独立，不参与分组提交）</p>
          {weak.map(rowCard)}
        </div>
      )}
      {decided.length > 0 && (
        <div className="queue-decided-zone">
          <div className="import-row">
            <Button onClick={() => setShowDecided((v) => !v)}>
              {showDecided ? '收起' : '展开'}已裁决（{decided.length} 条）
            </Button>
            <span className="hint">裁决过的对折叠在此，可回看记录。</span>
          </div>
          {showDecided && decided.map(rowCard)}
        </div>
      )}
    </div>
  );
}

// ---- 类型裁决页（§5.9 设计 D，第 103 轮）：候选类型批量四选项（新立/并入既有/改名/驳回），
// 裁决即写闸（apply_type_ruling）：入类型库/记映射/驳回留痕，并同步盖章宣告篇目 2.5 状态行 ----
function TypesTab({ tick, onChanged }: { tick: number; onChanged?: () => void }) {
  type Cand = { name: string; definition: string; ruledStatus: string; papers: string[] };
  type Data = { pending: Cand[]; ruled: Cand[]; types: { type: string; definition: string }[] };
  const [data, setData] = useState<Data | null>(null);
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState<string | null>(null);
  const [targets, setTargets] = useState<Record<string, string>>({});
  const [renames, setRenames] = useState<Record<string, string>>({});
  const [showRuled, setShowRuled] = useState(false);
  const [suggest, setSuggest] = useState<Record<string, { target: string; reason: string }>>({}); // AI 并入建议（第 114/115 轮）
  const [hinting, setHinting] = useState<string | null>(null); // 正在推荐的候选名（逐卡，第 115 轮）
  const [reopened, setReopened] = useState<Record<string, boolean>>({}); // 已裁决重开（第 116 轮）
  const [reclass, setReclass] = useState<{ from: string; to: string }>({ from: '', to: '' }); // 已登记类型再归类（第 116 轮）

  const load = useCallback(async () => {
    const r = await apiGet('/api/types/candidates');
    setData(r.ok ? r : null);
  }, []);
  useEffect(() => { void load(); }, [load, tick]);

  async function rule(name: string, action: 'create' | 'merge' | 'reject', extra: Record<string, unknown> = {}) {
    const date = new Date().toISOString().slice(0, 10);
    setBusy(name);
    setMsg('');
    const r = await apiPost('/api/tool/apply_type_ruling', { action, name, date, ...extra });
    setMsg(r.ok
      ? `已${action === 'create' ? '新立进类型库' : action === 'merge' ? `并入「${r.now}」` : '驳回'}：${name}`
      : (r.message || JSON.stringify(r)));
    if (r.ok) { await load(); onChanged?.(); setSuggest({}); setReopened((ro) => { const c = { ...ro }; delete c[name]; return c; }); setReclass({ from: '', to: '' }); } // 裁决改变类型库，旧建议作废（第 115 轮）
    setBusy(null);
  }

  async function typeTargets(name: string, definition: string) {
    setHinting(name);
    setMsg('');
    try {
      const start = await apiPost('/api/model/type-targets', {
        candidates: [{ name, definition }],
        types: (data?.types || []).map((t) => ({ type: t.type, definition: t.definition })),
      });
      if (!start.started) { setMsg(start.message || '发起失败'); setHinting(null); return; }
      const fin = await pollJob('/api/model/status', { kind: 'typehint', timeoutMs: 3 * 60 * 1000 });
      if (fin.stage === 'timeout') { setMsg(fin.message); setHinting(null); return; }
      if (fin.ok && Array.isArray(fin.suggestions) && fin.suggestions.length) {
        const s = fin.suggestions[0];
        setSuggest((prev) => ({ ...prev, [name]: { target: String(s.target), reason: String(s.reason || '') } }));
        setMsg(`「${name}」的建议已给出，见该候选卡`);
      } else {
        setMsg(fin.message || '未产出建议');
      }
    } catch (e: any) {
      setMsg(`请求失败：${String(e?.message || e)}`);
    }
    setHinting(null);
  }

  async function rename(name: string) {
    const to = (renames[name] || '').trim();
    if (!to) { setMsg('改名：先在框里填新名称'); return; }
    const def = data?.pending.find((p) => p.name === name)?.definition || '';
    const date = new Date().toISOString().slice(0, 10);
    setBusy(name);
    setMsg('');
    const c = await apiPost('/api/tool/apply_type_ruling', { action: 'create', name: to, date, definition: def });
    if (!c.ok) { setMsg(`改名中断（新立「${to}」未过）：${c.message || JSON.stringify(c)}`); setBusy(null); return; }
    const m = await apiPost('/api/tool/apply_type_ruling', { action: 'merge', name, target: to, date });
    setMsg(m.ok ? `已改名：${name} → ${to}` : (m.message || JSON.stringify(m)));
    if (m.ok) { await load(); onChanged?.(); setSuggest({}); setReopened((ro) => { const c = { ...ro }; delete c[name]; return c; }); }
    setBusy(null);
  }

  if (!data) return <EmptyState title="读取候选中…" description="正在扫描篇目的新类型宣告。" />;
  const active = [...data.pending, ...data.ruled.filter((p) => reopened[p.name])];
  // 第 120 轮：目标名是否为「库外新名」——是则 merge 时带 targetFresh，工具自动登记为定义待补的新类型
  const isFreshTarget = (v: string) => !!v && !(data.types || []).some((t) => t.type === v) && !(data.pending || []).some((q) => q.name === v);
  return (
    <div>
      <p className="hint">
        {active.length > 0 && <b>{active.length} 个候选待裁　</b>}
        每个候选来自拆解时的「新类型宣告」。四选一：新立（进类型库）、并入（记闭包映射）、改名（先立新名再并入）、驳回（留痕不入表）。裁决即生效，宣告篇目同步盖章。
        并入看箭头：「A → B」= A 并入 B、B 存活；候选名表述更佳时选反方向箭头即可。已裁决的可「重新裁决」，已登记类型用下方再归类工具——一切归类都可再次归类。
        与上页的关系：标签裁决查的是重名标签，本页立的是写作模型的类型；标签层没清完也能裁——类型库「归并自」容纳多个共存标签。
        建议逐个取：点候选卡上的「AI 推荐」，按此刻的类型库实时算；裁决一张卡后全部建议清空，下一张再点。
      </p>
      {msg && <p className={msg.startsWith('已') ? 'ok' : 'err'}>{msg}</p>}
      <div className="import-row reclass-box">
        <ComboSelect
          id="cb-reclass-from"
          value={reclass.from}
          placeholder="已登记类型再归类：选源…"
          onChange={(v) => setReclass((s) => ({ ...s, from: v }))}
          options={(data.types || []).map((t) => ({ value: t.type, label: t.type }))}
        />
        <ComboSelect
          id="cb-reclass-to"
          value={reclass.to}
          placeholder="输入过滤，或直接输入新名…"
          allowCustom
          onChange={(v) => setReclass((s) => ({ ...s, to: v }))}
          options={[
            ...(data.types || []).map((t) => ({ value: t.type, label: t.type })),
            ...(data.pending || []).map((p) => ({ value: p.name, label: `${p.name}（候选）` })),
          ]}
        />
        <Button disabled={busy !== null || !reclass.from || !reclass.to} onClick={() => void rule(reclass.from, 'merge', { target: reclass.to, targetFresh: isFreshTarget(reclass.to) })}>执行归类</Button>
      </div>
      {active.length === 0 && <EmptyState title="暂无待裁候选" description="拆解宣告新类型后，候选会自动出现在这里。" />}
      {active.map((p) => (
        <CardShell key={p.name} title={p.name} description={`宣告于：${p.papers.join('、')}`}>
          <p>{p.definition || '（定义待补）'}</p>
          {suggest[p.name] && (
            <div className="hint suggest-line">
              AI 建议：{suggest[p.name].target === '新立' ? '新立（未匹配到既有类型）' : suggest[p.name].target === '驳回' ? '驳回（无独立价值）' : `并入「${suggest[p.name].target}」`}——{suggest[p.name].reason}
              {(data.types || []).some((t) => t.type === suggest[p.name].target) && (
                <Button onClick={() => setTargets((tg) => ({ ...tg, [p.name]: suggest[p.name].target }))}>采纳（填入目标）</Button>
              )}
            </div>
          )}
          <div className="import-row">
            <Button disabled={hinting !== null || busy !== null} onClick={() => void typeTargets(p.name, p.definition)}>
              {hinting === p.name ? '推荐中…' : 'AI 推荐'}
            </Button>
          </div>
          <div className="import-row">
            <Button variant="primary" disabled={busy !== null} onClick={() => void rule(p.name, 'create')}>
              {busy === p.name ? '执行中…' : '新立进类型库'}
            </Button>
            <ComboSelect
              id={`cb-merge-${p.name}`}
              value={targets[p.name] || ''}
              placeholder="输入过滤，或输入新名…"
              allowCustom
              onChange={(v) => setTargets((t) => ({ ...t, [p.name]: v }))}
              options={[
                ...(data.types || []).map((t2) => ({ value: t2.type, label: t2.type })),
                ...(data.pending || []).filter((q) => q.name !== p.name).map((q) => ({ value: q.name, label: `${q.name}（候选）` })),
              ]}
            />
            <Button disabled={busy !== null || !targets[p.name]} title="箭头左侧消失成为别名，右侧名字存活" onClick={() => void rule(p.name, 'merge', { target: targets[p.name], targetFresh: isFreshTarget(targets[p.name]) })}>{p.name} → {targets[p.name] || '…'}</Button>
            <Button disabled={busy !== null || !targets[p.name]} title="反方向：右侧候选名存活，左侧所选类型归入它名下" onClick={() => void rule(targets[p.name], 'merge', { target: p.name })}>{targets[p.name] || '…'} → {p.name}</Button>
            <Button disabled={busy !== null} onClick={() => void rule(p.name, 'reject')}>驳回</Button>
          </div>
          <div className="import-row">
            <TextInput label="改名为" value={renames[p.name] || ''} onChange={(e) => { const v = e.currentTarget.value; setRenames((t) => ({ ...t, [p.name]: v })); }} placeholder="新类型名" />
            <Button disabled={busy !== null || !(renames[p.name] || '').trim()} onClick={() => void rename(p.name)}>改名</Button>
          </div>
        </CardShell>
      ))}
      {data.ruled.length > 0 && (
        <div className="queue-decided-zone">
          <div className="import-row">
            <Button onClick={() => setShowRuled((v) => !v)}>{showRuled ? '收起' : '展开'}已裁决（{data.ruled.length}）</Button>
            <span className="hint">裁决过的候选折叠在此；明细查类型库与闭包映射表。</span>
          </div>
          {showRuled && data.ruled.map((p) => (
            <CardShell key={p.name} title={p.name} description={`已裁决：${p.ruledStatus || ''}`}>
              <p className="hint">{p.definition || ''}</p>
              <Button disabled={busy !== null} onClick={() => setReopened((ro) => ({ ...ro, [p.name]: true }))}>重新裁决</Button>
            </CardShell>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- 通用 md 编辑器（篇目 / 写作模型手动修订；轻校验 + 尾部修订留痕，库主可自行删除留痕）----
function EditMd({ initial, savePath, onSaved }: { initial: string; savePath: string; onSaved: (newText: string) => void }) {
  const [text, setText] = useState(initial);
  const [err, setErr] = useState('');
  const [saving, setSaving] = useState(false);

  async function save() {
    if (!text.startsWith('#')) { setErr('首行须为 # 标题（防存入半截文件）'); return; }
    let out = text;
    if (out !== initial) {
      const stamp = new Date().toISOString().slice(0, 10);
      const line = /^> 人工修订：(.+)$/m;
      out = line.test(out) ? out.replace(line, `> 人工修订：${stamp}`) : out.trimEnd() + `\n\n> 人工修订：${stamp}\n`;
    }
    setSaving(true);
    setErr('');
    try {
      const r = await apiPost('/api/library/write-file', { path: savePath, content: out });
      if (r && r.ok) { hana.toast.show({ message: '已保存', type: 'success' }); onSaved(out); }
      else setErr(r?.message || '保存失败');
    } catch (e: any) {
      setErr(String(e?.message || e));
    }
    setSaving(false);
  }

  return (
    <div className="editor">
      {err && <p className="err">{err}</p>}
      <textarea className="editbox" value={text} onChange={(e) => setText(e.currentTarget.value)} rows={22} spellCheck={false} />
      <div className="import-row">
        <Button variant="primary" disabled={saving} onClick={() => void save()}>保存</Button>
        <span className="hint">首行须为 # 标题；改动会在尾部留一行修订日期（可自行删除）。改标签：编辑「- 标签：」行。</span>
      </div>
    </div>
  );
}

// ---- 3 篇目（一套导航：条目即按钮，显示题目 / 作者 · 年份）----
function BrowseTab({ tick }: { tick: number }) {
  const [items, setItems] = useState<{ id: string; title: string; meta: string }[]>([]);
  const [sel, setSel] = useState('');
  const [md, setMd] = useState('');
  const [editing, setEditing] = useState(false);
  const loadItems = useCallback(async () => {
    const fs = await listDir('篇目');
    const list = await Promise.all(
      fs.map(async (f) => {
        const { title, meta } = parseEntryHead(await readEntryHead(f), f.replace(/\.md$/, ''));
        return { id: f, title, meta: meta || f.replace(/\.md$/, '') };
      }),
    );
    setItems(list);
  }, []);
  useEffect(() => { void loadItems(); }, [loadItems, tick]);
  useEffect(() => {
    if (!sel) { setMd(''); return; }
    void apiGet(fileApi(`篇目/${sel}`)).then((r) => setMd(r.ok ? r.content : r.message || '读取失败'));
  }, [sel]);

  if (!items.length) return <EmptyState title="还没有篇目" description="导入文献或在对话里拆解后，篇目会出现在这里。" />;
  return (
    <div className="split">
      <div className="side">
        <div className="entrylist">
          {items.map((it) => (
            <button
              key={it.id}
              className={sel === it.id ? 'entryitem on' : 'entryitem'}
              onClick={() => setSel(it.id)}
            >
              <span className="entrytitle">{it.title}</span>
              <span className="entrymeta">{it.meta}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="main">
        {sel && (
          <div className="import-row">
            <Button onClick={() => setEditing((v) => !v)}>{editing ? '返回预览' : '编辑本篇'}</Button>
          </div>
        )}
        {sel ? (
          editing ? (
            <EditMd
              initial={md}
              savePath={`篇目/${sel}`}
              onSaved={(t) => { setMd(t); setEditing(false); void loadItems(); }}
            />
          ) : (
            <Doc md={md} />
          )
        ) : (
          <p className="hint">左侧选篇查看（每条登记都带位置与原文引文）。</p>
        )}
      </div>
    </div>
  );
}

// ---- 4 对比 ----
function CompareTab({ tick }: { tick: number }) {
  const [files, setFiles] = useState<string[]>([]);
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [mdA, setMdA] = useState('');
  const [mdB, setMdB] = useState('');
  const [labels, setLabels] = useState<Record<string, string>>({});
  useEffect(() => {
    void listDir('篇目').then(async (fs) => {
      setFiles(fs);
      if (fs[0]) setA(fs[0]);
      if (fs[1]) setB(fs[1]);
      const pairs = await Promise.all(fs.map(async (f) => {
        const { title, meta } = parseEntryHead(await readEntryHead(f), f.replace(/\.md$/, ''));
        return [f, meta ? `${title} · ${meta}` : title] as const;
      }));
      setLabels(Object.fromEntries(pairs));
    });
  }, [tick]);
  useEffect(() => {
    if (a) void apiGet(fileApi(`篇目/${a}`)).then((r) => setMdA(r.ok ? r.content : ''));
  }, [a]);
  useEffect(() => {
    if (b) void apiGet(fileApi(`篇目/${b}`)).then((r) => setMdB(r.ok ? r.content : ''));
  }, [b]);

  if (files.length < 2) return <EmptyState title="至少两篇可对比" description="先积累两篇以上篇目。" />;
  const opts = files.map((f) => ({ value: f, label: labels[f] || f.replace(/\.md$/, '') }));
  return (
    <div>
      <div className="grid2">
        <ComboSelect id="cb-cmp-a" value={a} onChange={setA} options={opts} placeholder="输入过滤篇目…" />
        <ComboSelect id="cb-cmp-b" value={b} onChange={setB} options={opts} placeholder="输入过滤篇目…" />
      </div>
      <div className="compare">
        <div className="col"><Doc md={mdA} /></div>
        <div className="col"><Doc md={mdB} /></div>
      </div>
    </div>
  );
}

// ---- 5 看板 ----
function BoardTab({ tick }: { tick: number }) {
  const [stats, setStats] = useState<any>(null);
  useEffect(() => {
    void (async () => {
      const [papers, anchors, models, tagLib, mapping, typeLib] = await Promise.all([
        listDir('篇目'), listDir('锚点样本'), listDir('写作模型'),
        apiGet(fileApi('标签库.md')), apiGet(fileApi('闭包映射表.md')), apiGet(fileApi('类型库.md')),
      ]);
      const tags = tagLib.ok ? countTable(tagLib.content, '标签') : [];
      const queue = tagLib.ok ? parseQueue(tagLib.content) : [];
      const mapRows = mapping.ok ? countTable(mapping.content, 'from') : [];
      const types = typeLib.ok ? countTable(typeLib.content, '类型') : [];
      setStats({
        papers: papers.length, anchors: anchors.length, models: models.length,
        tags, queuePending: queue.filter((q: any) => !q.decision).length,
        mapRows, types,
      });
    })();
  }, [tick]);
  if (!stats) return <p className="hint">统计中…</p>;
  const coverage = stats.papers ? Math.round((stats.anchors / stats.papers) * 100) : 0;
  return (
    <div className="cards">
      <CardShell title={`篇目 ${stats.papers}`} description="已完成的篇目" />
      <CardShell title={`锚点 ${stats.anchors}`} description={`锚点覆盖度 ${coverage}%（置信度依据之一）`} />
      <CardShell title={`标签 ${stats.tags.length}`} description={`待裁决 ${stats.queuePending}`} />
      <CardShell title={`类型 ${stats.types.length}`} description={`映射表 ${stats.mapRows.length} 行`} />
      <CardShell title={`写作模型 ${stats.models}`} description="版本化产物" />
      <CardShell title="描述性 / 规范性频率" description="描述与规范分开统计；篇目与锚点积累后按类型分组计算。" />
    </div>
  );
}

function countTable(md: string, headerFirst: string): string[] {
  const lines = String(md || '').split(/\r?\n/);
  const out: string[] = [];
  let inTable = false;
  for (const line of lines) {
    if (line.startsWith('|') && !/^\|\s*-+/.test(line)) {
      const c = line.split('|').slice(1, -1).map((s) => s.trim());
      if (c[0] === headerFirst) { inTable = true; continue; }
      if (inTable && c[0] && c[0] !== '（暂无）') out.push(c[0]);
    } else if (inTable && !line.startsWith('|')) inTable = false;
  }
  return out;
}

// ---- 6 写作模型（浏览 + 生成/更新入口：管线第 4-5 环，版本递增历史不覆盖）----
// 第 124 轮：建模结果汇总——只详列成功与失败，跳过归计数（类型/标签越来越多，逐条刷屏是噪声）
function fmtTypeResults(list: any[]): string {
  const wins = list.filter((x) => x.ok);
  const skips = list.filter((x) => !x.ok && x.skipped);
  const fails = list.filter((x) => !x.ok && !x.skipped);
  const parts: string[] = [];
  if (wins.length) parts.push(`✓ 生成 ${wins.length} 个类型：${wins.map((x) => `${x.type} v${x.version}`).join('、')}`);
  if (skips.length) parts.push(`跳过 ${skips.length} 个（样本不足或未变）`);
  if (fails.length) parts.push(`✗ 失败：${fails.map((x) => `${x.type}：${x.error || '未知'}`).join('；')}`);
  return parts.join('；') || '没有可处理的类型';
}
function fmtTacticResults(fin: any): string {
  const list = fin.results || [];
  const wins = list.filter((x: any) => x.ok);
  const skips = list.filter((x: any) => !x.ok && (x.stage === 'unchanged' || x.stage === 'size'));
  const fails = list.filter((x: any) => !x.ok && x.stage !== 'unchanged' && x.stage !== 'size');
  const parts: string[] = [];
  if (wins.length) parts.push(`✓ 生成 ${wins.length} 个战术：${wins.map((x: any) => `战术-${x.label} v${x.version}`).join('、')}`);
  if (skips.length) parts.push(`跳过 ${skips.length} 个（未变或超素材上限）`);
  if (fails.length) parts.push(`✗ 失败：${fails.map((x: any) => `${x.label}：${x.message || x.stage}`).join('；')}`);
  const head = parts.join('；') || '无产出';
  const below = Number(fin.belowThreshold || 0);
  return below ? `${head}（另有 ${below} 个标签携带篇目 <2，未达门槛）` : head;
}
// 第 126 轮：闭包映射表 → from→to 平表（仅 3 列的映射行，排除 4 列的复核队列与日志行）
function parseMappingSimple(md: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const line of String(md || '').split(/\r?\n/)) {
    if (!line.startsWith('|') || /^\|\s*-+/.test(line)) continue;
    const c = line.split('|').slice(1, -1).map((s) => s.trim());
    if (c.length === 3 && c[0] && c[0] !== '原始类型' && c[1] && c[0] !== c[1]) out[c[0]] = c[1];
  }
  return out;
}

function ModelsTab({ tick }: { tick: number }) {
  const [files, setFiles] = useState<string[]>([]);
  const [sel, setSel] = useState('');
  const [md, setMd] = useState('');
  const [busy, setBusy] = useState(false);
  const [tacticBusy, setTacticBusy] = useState(false);
  const [mapping, setMapping] = useState<Record<string, string>>({}); // 第 126 轮：归并映射（识别已并入的原名）
  const [migFrom, setMigFrom] = useState(''); // 随归并改名的两段确认
  const [secOpen, setSecOpen] = useState<Record<string, boolean>>({}); // 第 127 轮：两区可折叠
  const [viewMode, setViewMode] = useState<'list' | 'preview'>('list'); // 第 128 轮：列表屏 ↔ 预览屏，一次只显示一件事
  const [msg, setMsg] = useState('');
  const [histOpen, setHistOpen] = useState<Record<string, boolean>>({});
  const [editingModel, setEditingModel] = useState(false);

  // 第 132 轮：类型建模的实时进度轮询（与战术链同款）——按类型推进，附带已用时长跳动，
  // 让“还在跑”看得见；后台任务不因等待超时而中断。
  async function watchGenerate(alive: () => boolean = () => true): Promise<any | null> {
    const t0 = Date.now();
    const elapsed = () => {
      const s = Math.max(0, Math.round((Date.now() - t0) / 1000));
      return `${Math.floor(s / 60)}分${String(s % 60).padStart(2, '0')}秒`;
    };
    while (Date.now() - t0 < 40 * 60 * 1000) {
      await new Promise((r) => setTimeout(r, 4000));
      if (!alive()) return null;
      const s = await apiGet('/api/model/status').catch(() => null);
      if (!s || s.kind !== 'generate') continue;
      if (s.running) {
        const p = s.progress || {};
        setMsg(p.total
          ? `建模中：${p.done ?? 0}/${p.total}　当前：${p.current || '…'}　已用 ${elapsed()}`
          : `建模中：准备中…　已用 ${elapsed()}`);
      } else if (s.lastResult) {
        return s.lastResult;
      }
    }
    return { ok: false, stage: 'timeout', message: `等待超过 40 分钟（已用 ${elapsed()}），任务可能仍在运行；本页离开再回来仍可查看，后台任务不会因等待超时而中断。` };
  }

  // 挂载恢复：建模中切页回来，接管轮询到收尾；切页期间已跑完的，把结果补出来。
  // 旧版的守卫只认 running，跑完就 return，回来一片空白——这是切页丢提示的直接原因。
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const s = await apiGet('/api/model/status').catch(() => null);
      if (cancelled || !s || s.kind !== 'generate') return;
      if (s.running) {
        setBusy(true);
        setMsg('建模进行中（接管切页前的任务）…');
        const fin = await watchGenerate(() => !cancelled);
        if (cancelled || !fin) return;
        setMsg(fin.stage === 'timeout' ? fin.message : (fmtTypeResults(fin.results || []) || fin.message || ''));
        if ((fin.results || []).some((x: any) => x.ok)) { hana.toast.show({ message: '写作模型已生成/更新', type: 'success' }); load(); }
        setBusy(false);
        return;
      }
      // 已跑完（切页期间结束）：半小时内的结果补一句，避免回来一片空白
      if (s.lastResult && s.finishedAt && Date.now() - s.finishedAt < 30 * 60 * 1000) {
        setMsg(`上次建模：${fmtTypeResults(s.lastResult.results || []) || s.lastResult.message || '已完成'}`);
        load();
      }
    })();
    return () => { cancelled = true; };
  }, []);
  // 按类型分组：默认最新在头，历史折叠（顺带避开 v10 字典序排在 v2 前的坑）
  const groups = useMemo(() => {
    const map = new Map<string, { file: string; v: number }[]>();
    for (const f of files) {
      const m = /^(.+)-写作模型-v(\d+)\.md$/.exec(f);
      if (!m) continue;
      if (!map.has(m[1])) map.set(m[1], []);
      map.get(m[1])!.push({ file: f, v: Number(m[2]) });
    }
    return [...map.entries()].map(([type, list]) => {
      list.sort((a, b) => a.v - b.v);
      return { type, latest: list[list.length - 1], history: list.slice(0, -1).reverse() };
    });
  }, [files]);
  const load = useCallback(() => {
    void listDir('写作模型').then(setFiles);
    void apiGet(fileApi('闭包映射表.md')).then((r) => setMapping(r.ok ? parseMappingSimple(r.content) : {}));
  }, []);
  useEffect(() => { void load(); }, [load, tick]);
  useEffect(() => {
    if (!sel) { setMd(''); return; }
    void apiGet(fileApi(`写作模型/${sel}`)).then((r) => setMd(r.ok ? r.content : ''));
  }, [sel]);

  async function generate() {
    setBusy(true);
    setMsg('');
    try {
      const start = await apiPost('/api/model/generate', {});
      if (!start.started) { setMsg(start.message || '发起失败'); setBusy(false); return; }
      setMsg('建模中：正在读取结构库…');
      const fin = await watchGenerate();
      if (!fin) { setBusy(false); return; }
      if (fin.stage === 'timeout') { setMsg(fin.message); setBusy(false); return; }
      setMsg(fmtTypeResults(fin.results || []) || fin.message || '');
      if ((fin.results || []).some((x: any) => x.ok)) {
        hana.toast.show({ message: '写作模型已生成/更新', type: 'success' });
        load();
      }
    } catch (e: any) {
      setMsg(`请求失败：${String(e?.message || e)}`);
    }
    setBusy(false);
  }

  async function generateTactic() {
    setTacticBusy(true);
    setMsg('');
    try {
      const start = await apiPost('/api/model/generate-tactic', {});
      if (!start.started) { setMsg(start.message || '发起失败'); setTacticBusy(false); return; }
      // 第 125 轮：实时进度轮询（3 路并发，完成一个跳一个）
      const t0 = Date.now();
      while (Date.now() - t0 < 20 * 60 * 1000) {
        await new Promise((r) => setTimeout(r, 4000));
        const s = await apiGet('/api/model/status').catch(() => null);
        if (!s || s.kind !== 'tactic') continue;
        if (s.running) {
          const p = s.progress || {};
          setMsg(`战术建模中：${p.done ?? 0}/${p.total ?? '?'}　当前：${p.current || '…'}`);
        } else if (s.lastResult) {
          const fin = s.lastResult;
          setMsg(fmtTacticResults(fin) || fin.message || '');
          if ((fin.results || []).some((x: any) => x.ok)) {
            hana.toast.show({ message: '战术模型已生成/更新', type: 'success' });
            load();
          }
          setTacticBusy(false);
          return;
        }
      }
      setMsg('等待超时（20 分钟），任务可能仍在运行；稍后刷新查看结果。');
    } catch (e: any) {
      setMsg(`请求失败：${String(e?.message || e)}`);
    }
    setTacticBusy(false);
  }

  // 第 125 轮：建模产物删除（两段确认；库主权利，版本规则约束生成不约束删除）
  const [delGroup, setDelGroup] = useState('');
  const [delFile, setDelFile] = useState('');
  async function deleteModels(files: string[]) {
    const out: string[] = [];
    for (const f of files) {
      const r = await apiPost('/api/library/delete-file', { path: `写作模型/${f}` });
      out.push(r.ok ? `✓ ${f}` : `✗ ${f}：${r.message || '失败'}`);
    }
    setMsg(`删除结果：${out.join('；')}`);
    setSel('');
    load();
  }

  // 第 126 轮：映射链解析（A→B→C 取终点）与随归并改名
  const resolveTo = (name: string) => {
    let cur = name;
    const seen = new Set<string>();
    while (mapping[cur] && mapping[cur] !== cur && !seen.has(cur)) { seen.add(cur); cur = mapping[cur]; }
    return cur;
  };
  async function migrateModels(fromBase: string, toBase: string) {
    const r = await apiPost('/api/library/rename-models', { from: fromBase, to: toBase });
    if (!r.ok) { setMsg(r.message || JSON.stringify(r)); return; }
    const vs = ((r.moved || []) as string[]).map((f) => (/-v(\d+)\.md$/.exec(f) || [])[1]).filter(Boolean);
    setMsg(r.merged
      ? `已并入「${toBase}」家族：${fromBase} → ${toBase}（${(r.moved || []).length} 个文件，接续为 ${vs.map((v) => `v${v}`).join('、')}；目标原有版本未动）`
      : `已随归并改名：${fromBase} → ${toBase}（${(r.moved || []).length} 个文件，版本保留）`);
    setSel(''); load();
  }

  return (
    <div>
      <div className="import-row">
        <Button variant="primary" disabled={busy || tacticBusy} onClick={() => void generate()}>
          {busy ? '建模中…' : '生成 / 更新写作模型'}
        </Button>
        <Button disabled={busy || tacticBusy} onClick={() => void generateTactic()}>
          {tacticBusy ? '战术建模中…' : '生成 / 更新战术模型'}
        </Button>
        <span className="hint">两个按钮同理：样本 ≥2 才生成，再点得新版本（v+1，历史保留）。类型模型的样本看归并自与宣告篇，战术模型的样本看携带该标签的篇目。</span>
        <span className="hint">建模按类型或标签调用模型，样本多、篇幅长时 token 消耗较大。</span>
      </div>
      {msg && <pre className="hint">{msg}</pre>}
      {viewMode === 'preview' && sel ? (
        <div className="model-preview">
          <div className="import-row">
            <Button onClick={() => setViewMode('list')}>← 返回列表</Button>
            <span className="hint">正在查看：{sel}</span>
          </div>
          {editingModel ? (
            <EditMd initial={md} savePath={`写作模型/${sel}`} onSaved={(t) => { setMd(t); setEditingModel(false); load(); }} />
          ) : (
            <>
              <div className="import-row">
                <Button onClick={() => setEditingModel(true)}>编辑本模型</Button>
                <Button disabled={busy || tacticBusy} onClick={() => { if (delFile !== sel) { setDelFile(sel); return; } setDelFile(''); void deleteModels([sel]); }}>
                  {delFile === sel ? '再点一次确认删除' : '删除本版本'}
                </Button>
              </div>
              <Doc md={md} />
            </>
          )}
        </div>
      ) : !groups.length ? (
        <EmptyState title="暂无写作模型" description="点上方按钮归纳生成；样本不足或样本未变的类型会跳过并说明。" />
      ) : (
        <>
          {(['类型', '战术'] as const).map((kind) => {
            const list = groups.filter((g) => (kind === '战术') === g.type.startsWith('战术-'));
            if (!list.length) return null;
            const open = !secOpen[kind];
            return (
              <div key={kind} className="model-section">
                <div className="import-row section-toggle">
                  <Button onClick={() => setSecOpen((p) => ({ ...p, [kind]: !p[kind] }))}>
                    {open ? '收起' : '展开'} {kind}模型（{list.length} 组）
                  </Button>
                </div>
                {open && list.map((g) => {
                  const bare = g.type.startsWith('战术-') ? g.type.slice(2) : g.type;
                  const cur = resolveTo(bare);
                  const absorbed = cur !== bare;
                  const newBase = g.type.startsWith('战术-') ? `战术-${cur}` : cur;
                  return (
                    <div key={g.type} className="model-group">
                      <div className="model-group-head">
                        {absorbed && <span className="badge">已并入</span>}
                        <span className="model-grouptitle">{absorbed ? `${g.type} → ${cur}` : g.type}</span>
                        <button
                          className={sel === g.latest.file ? 'filebtn on' : 'filebtn'}
                          onClick={() => { setSel(g.latest.file); setViewMode('preview'); }}
                        >
                          v{g.latest.v}（最新）
                        </button>
                        {g.history.length > 0 && (
                          <button className="linkbtn" onClick={() => setHistOpen((p) => ({ ...p, [g.type]: !p[g.type] }))}>
                            {histOpen[g.type] ? '收起历史' : `历史 ${g.history.length} 版`}
                          </button>
                        )}
                        {absorbed && (
                          <button className="linkbtn" onClick={() => { if (migFrom !== g.type) { setMigFrom(g.type); return; } setMigFrom(''); void migrateModels(g.type, newBase); }}>
                            {migFrom === g.type ? `再点一次确认改名为 ${newBase}` : '随归并改名'}
                          </button>
                        )}
                        <button className="linkbtn" onClick={() => { if (delGroup !== g.type) { setDelGroup(g.type); return; } setDelGroup(''); void deleteModels([g.latest.file, ...g.history.map((h) => h.file)]); }}>
                          {delGroup === g.type ? '再点一次确认删除整组' : '删除'}
                        </button>
                      </div>
                      {histOpen[g.type] && (
                        <div className="filebtns">
                          {g.history.map((h) => (
                            <button key={h.file} className={sel === h.file ? 'filebtn on' : 'filebtn'} onClick={() => { setSel(h.file); setViewMode('preview'); }}>
                              v{h.v}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

// ---- 7 检索（取用）：与 search_structure 工具共用同一 searchLibrary ----
function SearchTab() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [sel, setSel] = useState<{ path: string; title: string } | null>(null);
  const [md, setMd] = useState('');

  async function go() {
    if (!q.trim()) return;
    const r = await apiGet(`/api/search?query=${encodeURIComponent(q.trim())}`);
    setResults(r.ok ? r.results : []);
    setSel(null);
  }
  useEffect(() => {
    if (!sel) { setMd(''); return; }
    void apiGet(fileApi(sel.path)).then((r) => setMd(r.ok ? r.content : '读取失败'));
  }, [sel]);

  return (
    <div>
      <p className="hint">按关键词物理命中排序帮你收窄候选，取舍仍由你判断；引用时带篇目位置与原文引文。</p>
      <div className="searchbar">
        <TextInput label="关键词（空格 / 、 分隔）" value={q} onChange={(e) => setQ(e.currentTarget.value)}
          placeholder="例：反驳 开头" onKeyDown={(e) => { if (e.key === 'Enter') void go(); }} />
        <Button variant="primary" onClick={() => void go()}>搜索</Button>
      </div>
      <div className="searchresults">
        {results.map((r) => (
          <div key={r.path} className={sel?.path === r.path ? 'searchhit on' : 'searchhit'}>
            <div className="searchhit-head" onClick={() => setSel(r)}>
              <span className="badge">{r.kind}</span>
              <b>{r.title}</b>
              <span className="hint">命中 {r.score} · {r.path}</span>
            </div>
            {sel?.path !== r.path && r.hits?.slice(0, 2).map((h: any, i: number) => (
              <div key={i} className="hitline">L{h.line}: {h.excerpt}{h.text}</div>
            ))}
          </div>
        ))}
        {!results.length && <p className="hint">输入关键词后搜索；结果按命中度排序，点击标题展开全文。</p>}
      </div>
      {sel && <div className="searchpreview"><h4>{sel.title}</h4><Doc md={md} /></div>}
    </div>
  );
}

function SettingsTab() {
  const [markers, setMarkers] = useState('');
  const [libPath, setLibPath] = useState('');
  const [maxN, setMaxN] = useState('2');
  const [note, setNote] = useState('');

  useEffect(() => {
    void apiGet('/api/config').then((r) => {
      if (r.ok && r.config) {
        setMarkers((r.config.markers || []).join('、'));
        setLibPath(r.config.libraryPath || '');
        setMaxN(String(r.config.maxPerRun ?? 2));
      } else {
        setNote(r.message || '配置读取失败');
      }
    });
  }, []);

  async function save() {
    setNote('保存中…');
    const r = await apiPost('/api/config', {
      markers: markers.split(/[\s、，,;；]+/).map((s) => s.trim()).filter(Boolean),
      libraryPath: libPath.trim(),
      maxPerRun: Number(maxN) || 2,
    });
    setNote(r.ok ? '已保存' : `保存失败：${r.message || '未知错误'}`);
  }

  return (
    <div className="settings">
      <p className="hint">会话名命中标定词才会收到结构推荐；标定词留空 = 全静默，不向任何会话推送。</p>
      <TextInput label="会话标定词（、或逗号分隔，含任一即放行）" value={markers}
        onChange={(e) => setMarkers(e.currentTarget.value)} placeholder="例：构成性、论文、写作" />
      <TextInput label="结构库路径（留空用默认；改后重启 Hana 生效）" value={libPath}
        onChange={(e) => setLibPath(e.currentTarget.value)} placeholder="默认：workspace 写作模型插件/结构库" />
      <TextInput label="单次推荐上限（1-2，设计上限 2）" value={maxN}
        onChange={(e) => setMaxN(e.currentTarget.value)} />
      <div className="saverow">
        <Button variant="primary" onClick={() => void save()}>保存</Button>
        {note && <span className="savehint">{note}</span>}
      </div>
      <p className="hint">命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。</p>
    </div>
  );
}

// ---- 导入区（首页内）：拖放 md/txt + 文件选择 + 粘贴 → POST /api/import ----
function ImportZone({ onDone }: { onDone: () => void }) {
  const [paste, setPaste] = useState('');
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [dragOver, setDragOver] = useState(false);
  const [showZotero, setShowZotero] = useState(false);

  // 挂载恢复：拆解中切页回来，接管轮询到收尾（不丢“拆解中”状态）
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const s = await apiGet('/api/import/status').catch(() => null);
      if (cancelled || !s || !s.running) return;
      setBusy(true);
      setResult({ ok: true, stage: 'running', message: '拆解进行中（接管切页前的任务）…' });
      const fin = await pollImport();
      if (cancelled) return;
      setResult(fin);
      if (fin.ok) { hana.toast.show({ message: '拆解完成，已入库', type: 'success' }); onDone(); }
      else if (fin.alreadyExists) { hana.toast.show({ message: '篇目已在库中，未重复导入', type: 'success' }); onDone(); }
      else if (fin.failureTs) { hana.toast.show({ message: '拆解失败，已记入待办', type: 'error' }); onDone(); }
      setBusy(false);
    })();
    return () => { cancelled = true; };
  }, []);

  async function submit(body: Record<string, unknown>, fromTs?: number) {
    setBusy(true);
    setResult(null);
    try {
      const start = await apiPost('/api/import', fromTs !== undefined ? { ...body, fromTs } : body);
      if (!start.started) {
        // 快速失败（入参/忙闸/网络错误）直接呈现
        setResult(start);
        setBusy(false);
        return;
      }
      setResult({ ok: true, stage: 'running', message: start.message || '拆解进行中' });
      const r = await pollImport();
      setResult(r);
      if (r.ok) {
        hana.toast.show({ message: '拆解完成，已入库', type: 'success' });
        onDone();
      } else if (r.alreadyExists) {
        hana.toast.show({ message: '篇目已在库中，未重复导入', type: 'success' });
        onDone();
      } else if (r.failureTs) {
        hana.toast.show({ message: '拆解失败，已记入待办', type: 'error' });
        onDone();
      }
    } catch (e: any) {
      setResult({ ok: false, stage: 'network', message: String(e?.message || e) });
    }
    setBusy(false);
  }

  // 第 97 轮：三种导入源统一入队（粘贴/拖拽/文件 → enqueue，入队即 pump 自动开跑）
  async function enqueueOne(item: Record<string, unknown>, labelText: string) {
    setBusy(true);
    setResult(null);
    try {
      const r = await apiPost('/api/import/enqueue', { items: [item] });
      if (r && r.ok) {
        setResult({ ok: true, stage: 'queued', message: `已入队：${labelText}（队列串行执行，进度看下方「导入队列」）` });
        hana.toast.show({ message: `已入队 ${r.queued} 篇，队列开始执行`, type: 'success' });
        onDone();
      } else {
        setResult({ ok: false, stage: 'input', message: r?.message || '入队失败' });
      }
    } catch (e: any) {
      setResult({ ok: false, stage: 'network', message: String(e?.message || e) });
    }
    setBusy(false);
  }

  async function run(text: string) {
    const t = String(text || '').trim();
    if (!t) {
      setResult({ ok: false, stage: 'input', message: '请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件' });
      return;
    }
    const head = (t.split('\n')[0] || '').replace(/^#+\s*/, '').trim().slice(0, 30);
    const labelText = head || '粘贴文献';
    await enqueueOne({ label: labelText, text: t, source: 'paste' }, labelText);
  }

  async function readFile(f: File) {
    if (/\.pdf$/i.test(f.name)) {
      if (f.size > 50 * 1024 * 1024) {
        setResult({ ok: false, stage: 'input', message: 'PDF 超过 50 MB 上限' });
        return;
      }
      try {
        const b64 = await new Promise<string>((res, rej) => {
          const rd = new FileReader();
          rd.onload = () => res(String(rd.result).split(',')[1] || '');
          rd.onerror = () => rej(new Error('文件读取失败'));
          rd.readAsDataURL(f);
        });
        await enqueueOne({ label: f.name, pdfBase64: b64, source: 'file' }, f.name);
      } catch (e: any) {
        setResult({ ok: false, stage: 'input', message: String(e?.message || e) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(f.name)) {
      setResult({ ok: false, stage: 'input', message: '支持 md / txt / pdf 文件' });
      return;
    }
    await enqueueOne({ label: f.name, text: await f.text(), source: 'file' }, f.name);
  }

  return (
    <div className="import-zone">
      <h4 className="import-title">导入文献</h4>
      <div
        className={dragOver ? 'drop on' : 'drop'}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          const f = e.dataTransfer.files?.[0];
          if (f) void readFile(f);
        }}
      >
        <p>把 .md / .txt / .pdf 文献拖到这里</p>
        <label className="filepick">
          或选择文件
          <input
            type="file"
            accept=".md,.txt,.pdf,text/plain,text/markdown,application/pdf"
            style={{ display: 'none' }}
            onChange={(e) => {
              const f = e.target.files?.[0];
              e.target.value = '';
              if (f) void readFile(f);
            }}
          />
        </label>
        <p className="hint zotero-toggle">
          或
          <button className="linkbtn" onClick={() => setShowZotero((v) => !v)}>
            {showZotero ? '收起 Zotero' : '从 Zotero 取'}
          </button>
        </p>
      </div>
      {showZotero && <ZoteroBox />}
      <textarea
        className="pastebox"
        value={paste}
        onChange={(e) => setPaste(e.target.value)}
        placeholder="也可以直接粘贴文献全文…"
        rows={4}
        disabled={busy}
      />
      <div className="import-row">
        <Button variant="primary" disabled={busy || !paste.trim()} onClick={() => void run(paste)}>
          加入队列并开始
        </Button>
        {busy && <span className="hint">正在入队…</span>}
      </div>
      {result && (
        <pre className={result.ok || result.alreadyExists ? 'ok' : 'err'}>
          {result.alreadyExists
            ? `${result.message || '篇目已在库中（id 三要素相同视为同一篇），未重复导入。'}`
            : result.ok
            ? result.stage === 'running'
              ? `${result.message || '拆解进行中…'}`
              : result.stage === 'queued'
              ? result.message
              : `已入库：${result.file}（第 ${result.attempts} 次通过${result.tagsAdded?.length ? `，新增标签 ${result.tagsAdded.join('、')}` : ''}）` +
              (result.pdfEngine
                ? `\nPDF 引擎：${
                    result.pdfEngine === 'pymupdf'
                      ? 'PyMuPDF'
                      : 'unpdf（回退）—— 安装 PyMuPDF 可启用更稳的主引擎：python -m pip install pymupdf'
                  }`
                : '')
            : `${result.message || '拆解失败'}${
                result.errors?.length
                  ? '\n' + result.errors.slice(0, 6).map((x: any) => `· ${x.field}：${x.message}`).join('\n')
                  : ''
              }${result.failureTs ? '\n（已记入待办，可到「待办 · 导入失败」重试）' : ''}`}
        </pre>
      )}
      <QueueBox />
    </div>
  );
}

// ---- Zotero 取件面板（M3 批量队列）：分类树/搜索双模式多选 → 队列串行拆解 ----
// 附件解析在入队时完成（fail fast）；队列由后端有限并发执行，3 秒轮询；原生拖拽排序。
type ZItem = { key: string; title: string; authors: string; year: string; itemType: string };
type CollNode = { key: string; name: string; children: CollNode[] };
type QItem = { key: number; label: string; status: string; attempts: number; message: string; file: string };

const QSTATUS: Record<string, string> = {
  pending: '排队', running: '运行中', stopping: '停止中', done: '✓ 完成', failed: '✗ 失败', cancelled: '■ 已停止',
};

function CollTree({ nodes, active, onPick, depth = 0 }: { nodes: CollNode[]; active: string | null; onPick: (k: string, n: string) => void; depth?: number }) {
  return (
    <>
      {nodes.map((n) => (
        <div key={n.key}>
          <button
            className={active === n.key ? 'collbtn on' : 'collbtn'}
            style={{ paddingLeft: 8 + depth * 14 }}
            onClick={() => onPick(n.key, n.name)}
          >
            {n.name}
          </button>
          {n.children.length > 0 && <CollTree nodes={n.children} active={active} onPick={onPick} depth={depth + 1} />}
        </div>
      ))}
    </>
  );
}

// ---- 导入队列（第 97 轮抽离：脱离 ZoteroBox 条件挂载，首页常驻）----
function QueueBox() {
  const [queue, setQueue] = useState<QItem[]>([]);
  const [snap, setSnap] = useState<any>(null);
  const [qmsg, setQmsg] = useState('');
  const [dragKey, setDragKey] = useState<number | null>(null);

  // 队列轮询（3 秒；卸载停；挂载即拉，切页回来即恢复）
  useEffect(() => {
    let alive = true;
    const tickQ = () =>
      void apiGet('/api/import/queue').then((s) => {
        if (alive && s && s.ok) { setQueue(s.items || []); setSnap(s); }
      }).catch(() => {});
    tickQ();
    const t = setInterval(tickQ, 3000);
    return () => { alive = false; clearInterval(t); };
  }, []);

  async function refreshQ() {
    const s = await apiGet('/api/import/queue').catch(() => null);
    if (s && s.ok) { setQueue(s.items || []); setSnap(s); }
  }

  async function qa(action: string, key?: number, extra: Record<string, unknown> = {}) {
    const r = await apiPost('/api/import/queue-action', key !== undefined ? { action, key, ...extra } : { action });
    if (r && r.ok) { setSnap(r.snapshot); void refreshQ(); return true; }
    setQmsg(r?.message || '操作失败');
    return false;
  }

  // 拖拽排序（原生 HTML5）：拖到目标项之前
  function onDrop(targetKey: number) {
    const from = dragKey;
    setDragKey(null);
    if (from === null || from === targetKey) return;
    void qa('reorder', from, { before: targetKey });
  }

  const total = snap?.total ?? queue.length;
  const finished = (snap?.done ?? 0) + (snap?.failed ?? 0) + (snap?.cancelled ?? 0);

  return (
    <div className="queuebox">
      <div className="qhead">
        <b>导入队列</b>
        <span className="hint">
          {total ? `${finished}/${total} 完成 · 运行 ${(snap?.running ?? 0) + (snap?.stopping ?? 0)} · 排队 ${snap?.pending ?? 0}${snap?.paused ? ' · 已暂停' : ''}` : '队列为空'}
        </span>
        <span className="qhead-actions">
          <Button disabled={!snap || total === 0} onClick={() => void qa(snap?.paused ? 'resume' : 'pause')}>
            {snap?.paused ? '继续' : '暂停'}
          </Button>
          <Button disabled={!snap || ((snap?.done ?? 0) + (snap?.cancelled ?? 0)) === 0} onClick={() => void qa('clear-done')}>
            清理已完成
          </Button>
        </span>
      </div>
      {qmsg && <p className="hint">{qmsg}</p>}
      {queue.length === 0 ? (
        <p className="hint">拖入文件、粘贴全文或从 Zotero 加入后，条目在这里串行拆解；支持单篇停止/开始与拖拽排序。</p>
      ) : (
        <div className="qlist">
          {queue.map((it) => (
            <div
              key={it.key}
              className={dragKey === it.key ? 'qrow dragging' : 'qrow'}
              draggable={it.status === 'pending'}
              onDragStart={() => setDragKey(it.key)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(it.key)}
              onDragEnd={() => setDragKey(null)}
            >
              <span className="qhandle" title="拖拽排序（仅排队中）">☰</span>
              <span className="qstatus">{QSTATUS[it.status] || it.status}</span>
              <span className="qlabel" title={it.message || it.file || ''}>{it.label}</span>
              {(it.status === 'pending' || it.status === 'running') && (
                <Button onClick={() => void qa('cancel', it.key)}>停止</Button>
              )}
              {it.status === 'stopping' && <span className="hint">停止中…</span>}
              {(it.status === 'cancelled' || it.status === 'failed') && (
                <Button onClick={() => void qa('start', it.key)}>开始</Button>
              )}
              {it.status !== 'running' && it.status !== 'stopping' && (
                <Button onClick={() => void qa('remove', it.key)}>移除</Button>
              )}
              {it.status === 'failed' && it.message && <span className="qerr">{it.message}</span>}
              {it.status === 'done' && <span className="qok">已入库</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ZoteroBox() {
  const [colls, setColls] = useState<CollNode[]>([]);
  const [collKey, setCollKey] = useState<string | null>(null);
  const [cItems, setCItems] = useState<ZItem[]>([]);
  const [q, setQ] = useState('');
  const [mode, setMode] = useState<'collection' | 'search'>('collection');
  const [sItems, setSItems] = useState<ZItem[] | null>(null);
  const [sel, setSel] = useState<Set<string>>(new Set());
  const [msg, setMsg] = useState('');
  const [busy2, setBusy2] = useState(false);

  // 分类树（挂载一次）
  useEffect(() => {
    void apiGet('/api/zotero/collections').then((r) => {
      if (r && r.ok) setColls(r.collections || []);
      else setMsg(r?.message || '分类读取失败（Zotero 桌面端在运行吗？）');
    }).catch(() => setMsg('分类读取失败'));
  }, []);

  async function openColl(key: string, name: string) {
    setMode('collection'); setCollKey(key); setSel(new Set());
    setBusy2(true); setMsg(`加载「${name}」…`);
    try {
      const r = await apiGet(`/api/zotero/collection-items?key=${encodeURIComponent(key)}`);
      if (r && r.ok) {
        setCItems(r.items || []);
        if (r.truncated) setMsg(`该分类较大，列表显示前 ${r.items.length} 条文献；更多可用搜索收窄`);
        else if (!(r.items || []).length) setMsg('该分类没有可导入的文献条目');
        else setMsg('');
      } else setMsg(r?.message || '条目读取失败');
    } catch (e: any) { setMsg(String(e?.message || e)); }
    setBusy2(false);
  }

  async function goSearch() {
    setMode('search'); setCollKey(null); setSel(new Set());
    setBusy2(true); setMsg('');
    try {
      const r = await apiPost('/api/tool/zotero_search', { query: q, limit: 50 });
      if (r && Array.isArray(r.items)) {
        setSItems(r.items.map((it: any) => ({
          key: it.key, title: it.title, authors: it.creators,
          year: String(it.date || '').slice(0, 4), itemType: it.itemType,
        })));
        if (!r.items.length) setMsg('没有命中条目');
      } else setMsg(r?.message || 'Zotero 查询失败');
    } catch (e: any) { setMsg(String(e?.message || e)); }
    setBusy2(false);
  }

  const list: ZItem[] = mode === 'collection' ? cItems : (sItems || []);

  function toggle(k: string) {
    setSel((p) => { const n = new Set(p); if (n.has(k)) n.delete(k); else n.add(k); return n; });
  }
  function toggleAll() {
    setSel((p) => (p.size >= list.length && list.length > 0 ? new Set() : new Set(list.map((i) => i.key))));
  }

  // 加入队列：逐条解析附件（fail fast，缺附件当场报告不入队）
  async function enqueueSelected() {
    const chosen = list.filter((i) => sel.has(i.key));
    if (!chosen.length) { setMsg('先勾选条目'); return; }
    setBusy2(true);
    const items: any[] = [];
    const missing: string[] = [];
    for (let i = 0; i < chosen.length; i++) {
      const it = chosen[i];
      setMsg(`解析附件 ${i + 1}/${chosen.length}…`);
      try {
        const r = await apiPost('/api/tool/zotero_item', { key: it.key });
        const att = r && Array.isArray(r.attachments) && r.attachments[0] ? r.attachments[0] : null;
        if (!att) { missing.push(it.title || it.key); continue; }
        const p = await apiPost('/api/tool/zotero_attachment_path', { attachmentKey: att.key || att });
        if (p && p.path) items.push({ label: it.title || it.key, pdfPath: String(p.path), source: `zotero:${it.key}` });
        else missing.push(it.title || it.key);
      } catch { missing.push(it.title || it.key); }
    }
    if (items.length) {
      const r = await apiPost('/api/import/enqueue', { items });
      if (r && r.ok) {
        setMsg(`已入队 ${r.queued} 篇${missing.length ? `；${missing.length} 篇缺附件未入队：${missing.slice(0, 2).join('、')}${missing.length > 2 ? '…' : ''}` : ''}`);
        setSel(new Set());
        hana.toast.show({ message: `已入队 ${r.queued} 篇，队列开始执行`, type: 'success' });
      } else setMsg(r?.message || '入队失败');
    } else {
      setMsg(`没有可入队条目${missing.length ? `（${missing.length} 篇缺附件）` : ''}`);
    }
    setBusy2(false);
  }

  async function copyPathFor(itemKey: string) {
    setBusy2(true);
    try {
      const r = await apiPost('/api/tool/zotero_item', { key: itemKey });
      const att = r && Array.isArray(r.attachments) && r.attachments[0] ? r.attachments[0] : null;
      if (!att) { setMsg('该条目无附件'); setBusy2(false); return; }
      const p = await apiPost('/api/tool/zotero_attachment_path', { attachmentKey: att.key || att });
      if (p && p.path) {
        await hana.clipboard.writeText(String(p.path));
        hana.toast.show({ message: '路径已复制', type: 'success' });
      } else setMsg(p?.message || '附件路径解析失败');
    } catch (e: any) { setMsg(String(e?.message || e)); }
    setBusy2(false);
  }

  return (
    <div className="zbox">
      <p className="hint">需 Zotero 桌面端运行，且设置 → 高级 → 勾选「Allow other applications on this computer to communicate with Zotero」。勾选后加入队列，串行拆解（并发 1，随时可停）。</p>
      <div className="import-row">
        <TextInput
          label="搜索（标题 / 作者 / 年份）"
          value={q}
          onChange={(e) => setQ(e.currentTarget.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') void goSearch(); }}
        />
        <Button disabled={busy2} onClick={() => void goSearch()}>搜索</Button>
        <Button variant="primary" disabled={busy2 || sel.size === 0} onClick={() => void enqueueSelected()}>
          加入队列（{sel.size}）
        </Button>
        <Button disabled={busy2 || list.length === 0} onClick={toggleAll}>
          {sel.size >= list.length && list.length > 0 ? '取消全选' : '全选本页'}
        </Button>
      </div>
      {msg && <p className="hint">{msg}</p>}
      <div className="zgrid">
        <div className="ztree">
          <div
            className={mode === 'collection' && !collKey ? 'collbtn on' : 'collbtn'}
            onClick={() => { setMode('collection'); setSel(new Set()); }}
          >
            按分类浏览
          </div>
          <CollTree nodes={colls} active={collKey} onPick={(k, n) => void openColl(k, n)} />
        </div>
        <div className="zlist zlistpick">
          {list.length === 0 && (
            <p className="hint">{mode === 'collection' ? '选择左侧分类加载条目，或用搜索。' : '搜索无结果。'}</p>
          )}
          {list.map((it) => (
            <label key={it.key} className="zrow">
              <input type="checkbox" checked={sel.has(it.key)} onChange={() => toggle(it.key)} />
              <span className="zrow-main">
                <b>{it.title || '（无题名）'}</b>
                <span className="hint">{[it.authors, it.year].filter(Boolean).join(' · ')}</span>
              </span>
              <button
                className="linkbtn"
                onClick={(e) => { e.preventDefault(); void copyPathFor(it.key); }}
              >
                路径
              </button>
            </label>
          ))}
        </div>
      </div>

    </div>
  );
}

// ---- 首页（方案三四要素 + 导入入口）----
// 首次使用告知（一次）：只说事实，不作免责声明；localStorage 不可用时退化为每次显示。
const NOTICE_KEY = 'psm_use_notice_v1';

function HomeTab({ stats, go, onDone }: { stats: Stats | null; go: (z: Zone) => void; onDone: () => void }) {
  const todo = stats ? stats.queuePending + stats.failures : 0;
  const [noticeOpen, setNoticeOpen] = useState(false);
  useEffect(() => {
    try { setNoticeOpen(!window.localStorage.getItem(NOTICE_KEY)); } catch { setNoticeOpen(true); }
  }, []);
  // 未配置引导：库路径为空或占位串时，在首页给出一步到位的指引
  const [libState, setLibState] = useState<'loading' | 'unconfigured' | 'ok'>('loading');
  useEffect(() => {
    apiGet('/api/config')
      .then((r) => {
        const p = r?.config?.libraryPath ?? '';
        setLibState(p && !String(p).startsWith('NOT_CONFIGURED') ? 'ok' : 'unconfigured');
      })
      .catch(() => setLibState('loading'));
  }, []);
  return (
    <div className="home">
      <p className="tagline">把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。</p>
      {libState === 'unconfigured' && (
        <div className="home-banner">
          尚未配置结构库。到「设置」填写 libraryPath 并保存，模板会自动铺到该目录，无需手动拷贝。
          <Button onClick={() => go('settings')}>前往设置</Button>
        </div>
      )}
      {noticeOpen && (
        <div className="home-banner">
          仅处理你有权使用的文本；结构库保存在本机，不随插件分发。引用与对外使用请自行核对授权，适当引用需指明作者与作品名。
          <Button onClick={() => { setNoticeOpen(false); try { window.localStorage.setItem(NOTICE_KEY, '1'); } catch { /* 存不了就下次再提示 */ } }}>我知道了</Button>
        </div>
      )}
      <ol className="steps">
        <li>把文献拖进面板一键拆解，或在对话里让我拆</li>
        <li>库里提出的疑问到「待办」处理，保证每条引文可回溯</li>
        <li>写论文时到「取用」检索同类模型，按出处引用</li>
      </ol>
      <div className="home-actions">
        <Button variant="primary" onClick={() => go('use')}>去取用</Button>
        <Button onClick={() => go('library')}>看结构库</Button>
        <Button disabled={!stats || todo === 0} onClick={() => go('todo')}>
          {todo > 0 ? `处理待办（${todo}）` : '暂无待办'}
        </Button>
      </div>
      <div className="statusbar">
        {stats ? `库内 ${stats.papers} 篇目 · ${stats.models} 模型 · 待办 ${todo} 条` : '统计中…'}
      </div>
      <ImportZone onDone={onDone} />
    </div>
  );
}

// ---- 待办 · 导入失败（失败进待办，可原样重试）----
function ImportFailTab({ tick, bump }: { tick: number; bump: () => void }) {
  const [items, setItems] = useState<any[]>([]);
  const [busyTs, setBusyTs] = useState<number | null>(null);
  const [msg, setMsg] = useState('');
  const load = useCallback(async () => {
    const r = await apiGet('/api/import/failures').catch(() => ({ items: [] }));
    setItems(r.items || []);
  }, []);
  useEffect(() => { void load(); }, [load, tick]);

  // 挂载恢复：重试中切页回来，接管轮询到收尾
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const s = await apiGet('/api/import/status').catch(() => null);
      if (cancelled || !s || !s.running) return;
      setMsg('有导入任务进行中，等待结果…');
      const fin = await pollImport();
      if (cancelled) return;
      setMsg(fin.ok ? `完成：${fin.file}` : `仍失败：${fin.message || '未知错误'}${fin.failureTs ? '（已刷新记录）' : ''}`);
      if (fin.ok || fin.failureTs) { await load(); bump(); }
    })();
    return () => { cancelled = true; };
  }, []);

  async function retry(item: any) {
    const hasText = !!(item.text && String(item.text).trim());
    if (!hasText && !item.pdfPath) {
      setMsg(item.needsFile ? '该条目是文件拖入的 PDF，原文件未随记录保留，请把 PDF 重新拖入导入区' : '该条目无可重试内容（原文未保留），请重新提供文件');
      return;
    }
    setBusyTs(item.ts);
    setMsg('');
    try {
      const body: Record<string, unknown> = { text: item.text, fromTs: item.ts, filename: item.source };
      if (item.pdfPath) body.pdfPath = item.pdfPath;
      const start = await apiPost('/api/import', body);
      if (start.alreadyExists) {
        setMsg(`已在库中，未重复导入${start.id ? `：${start.id}` : ''}；待办记录已清除`);
        hana.toast.show({ message: '篇目已在库中，未重复导入', type: 'success' });
      } else if (start.started) {
        setMsg('重试中（约 1-3 分钟，可离开本页）…');
        const r = await pollImport();
        if (r.ok) {
          setMsg(`重试成功：${r.file}`);
          hana.toast.show({ message: '重试成功，已入库', type: 'success' });
        } else if (r.alreadyExists) {
          setMsg(`已在库中，未重复导入${r.id ? `：${r.id}` : ''}；待办记录已清除`);
          hana.toast.show({ message: '篇目已在库中，未重复导入', type: 'success' });
        } else {
          setMsg(`仍失败：${r.message || '未知错误'}${r.failureTs ? '（已刷新记录）' : ''}`);
        }
      } else if (start.ok) {
        setMsg(`重试成功：${start.file}`);
        hana.toast.show({ message: '重试成功，已入库', type: 'success' });
      } else {
        setMsg(`仍失败：${start.message || '未知错误'}`);
      }
    } catch (e: any) {
      setMsg(`请求失败：${String(e?.message || e)}`);
    }
    setBusyTs(null);
    await load();
    bump();
  }

  async function dismiss(item: any) {
    await apiPost('/api/import/failures/dismiss', { ts: item.ts }).catch(() => null);
    await load();
    bump();
  }

  if (!items.length) return <EmptyState title="暂无导入失败" description="导入拆解失败的文献会落在这里，可原样重试。" />;
  return (
    <div>
      <p className="hint">
        {items.length > 0 && <b>共 {items.length} 条待处理　</b>}
        拆解失败的导入（多为校验未过或模型异常）连原文一起存在这里，重试走同一条链路。
      </p>
      {items.map((it) => (
        <div key={it.ts} className="fail-item">
          <div className="fail-head">
            <b>{it.title || it.source || '（未识别条目）'}</b>
            {(it.authors || it.year) && (
              <span className="hint">{[it.authors, it.year].filter(Boolean).join(' · ')}</span>
            )}
            <span className="badge">{it.stage}</span>
            <span className="hint">{new Date(it.ts).toLocaleString()} · 尝试 {it.attempts} 次 · {(it.text || '').length} 字</span>
          </div>
          {it.id && <div className="hint">id：{it.id}</div>}
          {it.stage === 'pdf_extract' && (
            <div className="hint">{it.needsFile ? 'PDF 提取失败；原文件未随记录保留，重试需把文件重新拖入' : 'PDF 提取失败；可重试或换带文字层的版本'}</div>
          )}
          <div className="fail-msg">{it.message}</div>
          {(it.errors || []).slice(0, 4).map((e: any, i: number) => (
            <div key={i} className="hint">· {e.field}：{e.message}</div>
          ))}
          <div className="fail-actions">
            <Button variant="primary" disabled={busyTs === it.ts} onClick={() => void retry(it)}>
              {busyTs === it.ts ? '重试中…' : '重试'}
            </Button>
            <Button disabled={busyTs === it.ts} onClick={() => void dismiss(it)}>移除</Button>
          </div>
        </div>
      ))}
      {msg && <p className={msg.startsWith('重试成功') || msg.startsWith('已在库中') ? 'ok' : 'err'}>{msg}</p>}
    </div>
  );
}

function Panel() {
  const surface = document.getElementById('root')?.dataset.surface || 'page';
  // 默认落点 = 首页，每次打开回到首页（方案三）
  const [zone, setZone] = useState<Zone>('home');
  const [subMap, setSubMap] = useState<Record<Zone, string>>({
    home: '', use: 'search', library: 'browse', todo: 'score', settings: '',
  });
  const [tick, setTick] = useState(0);
  const [stats, setStats] = useState<Stats | null>(null);

  const bump = useCallback(() => setTick((t) => t + 1), []);
  const go = useCallback((z: Zone) => setZone(z), []);

  useEffect(() => {
    hana.ready();
    hana.ui.resize({ height: surface === 'widget' ? 420 : 760 });
  }, [surface]);

  useEffect(() => {
    let alive = true;
    void loadStats().then((s) => { if (alive) setStats(s); }).catch(() => { if (alive) setStats(null); });
    return () => { alive = false; };
  }, [tick, zone]);

  const sub = subMap[zone];
  const content = useMemo(() => {
    switch (zone) {
      case 'home': return <HomeTab stats={stats} go={go} onDone={bump} />;
      case 'use': return sub === 'models' ? <ModelsTab tick={tick} /> : <SearchTab />;
      case 'library':
        if (sub === 'compare') return <CompareTab tick={tick} />;
        if (sub === 'board') return <BoardTab tick={tick} />;
        return <BrowseTab tick={tick} />;
      case 'todo':
        if (sub === 'queue') return <QueueTab tick={tick} onChanged={bump} />;
        if (sub === 'types') return <TypesTab tick={tick} onChanged={bump} />;
        if (sub === 'import-fail') return <ImportFailTab tick={tick} bump={bump} />;
        return <ScoreTab />;
      case 'settings': return <SettingsTab />;
    }
  }, [zone, sub, tick, stats, go, bump]);

  const todoCount = stats ? stats.queuePending + stats.failures : 0;

  return (
    <HanaThemeProvider mode="inherit" className="plugin-panel">
      <CardShell
        title="论文结构建模"
        description="把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。"
        actions={<Button variant="ghost" onClick={bump}>刷新</Button>}
      >
        <nav className="tabs zones">
          {NAV.map((t) => (
            <button key={t.id} className={zone === t.id ? 'tab on' : 'tab'} onClick={() => setZone(t.id)}>
              {t.label}
              {t.id === 'todo' && todoCount > 0 && <span className="nav-badge">{todoCount}</span>}
            </button>
          ))}
        </nav>
        {zone !== 'home' && zone !== 'settings' && (
          <nav className="tabs sub">
            {SUBS[zone as ZoneEx].map((s) => (
              <button
                key={s.id}
                className={sub === s.id ? 'tab on' : 'tab'}
                onClick={() => setSubMap((p) => ({ ...p, [zone]: s.id }))}
              >
                {s.label}
                {zone === 'todo' && s.id === 'import-fail' && (stats?.failures ?? 0) > 0 && (
                  <span className="nav-badge">{stats?.failures ?? 0}</span>
                )}
                {zone === 'todo' && s.id === 'queue' && (stats?.queuePending ?? 0) > 0 && (
                  <span className="nav-badge">{stats?.queuePending ?? 0}</span>
                )}
              </button>
            ))}
          </nav>
        )}
        <div className="tab-body">{content}</div>
      </CardShell>
    </HanaThemeProvider>
  );
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<Panel />);
