// PDF → 文本（PyMuPDF sidecar 主引擎，unpdf 为回退）。
// 链路边界：提取为文本后进既有 runImport 文本链，同流三保障零改动。
// 主引擎：spawn `python pdf_extract.py`（stdin 字节 → JSON，块级栏排序；
//         块=排版单元避开同行跨栏拼接、畸形 PDF 兜底更强）。
// 回退：sidecar 不可用或失败（无 Python / 无 pymupdf / 超时 / 畸形）→ unpdf 原逻辑。
// 判定层（50MB 上限、无文字层阈值）在此统一执行，两引擎共享；判定不通过即拒收，
// 不因换引擎而松（提取失败是换料问题，由 routes 侧分型并记入待办留痕）。
// 运行依赖：app/process.spawn 能力词（manifest）+ 目标机器 Python 与 pip install pymupdf。
// Python 路径可用环境变量 PSM_PYTHON 覆盖（默认 PATH 上的 `python`）。
import { spawn } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { extractText, getDocumentProxy, getResolvedPDFJS } from "unpdf";

const MIN_CHARS = 200; // 低于此判无文字层（扫描版），两引擎共享
export const MAX_PDF_BYTES = 50 * 1024 * 1024;
const SIDECAR = fileURLToPath(new URL("../pdf_extract.py", import.meta.url));
const PYTHON = process.env.PSM_PYTHON || "python";
const SIDECAR_TIMEOUT_MS = 30000;

// sidecar 环境根因：宿主子进程禁用 user site 自动加载，而 pymupdf 常装在用户
// site（Windows: %APPDATA%\Python\PythonX*\site-packages）。此处扫描并注入 PYTHONPATH
// （环境变量路径不受 user site 禁用影响），与 pdf_extract.py 内的 site 注入互为双保险。
function sidecarEnv() {
  const env = { ...process.env };
  try {
    // 宿主 Permission Model 禁止本进程读许可根外的 AppData
    // （readdir/stat 被拒并被 existsSync 静默成 false），故不碰文件系统，
    // 直接生成候选 site 路径注入 PYTHONPATH——不存在的条目由 python 自行忽略。
    if (process.platform === "win32") {
      env.PYTHONUTF8 = "1"; // 根治子进程 GBK stdout 遇非 ASCII 的 UnicodeEncodeError
      const base = path.join(homedir(), "AppData", "Roaming", "Python");
      const sites = [];
      for (let v = 38; v <= 316; v++) sites.push(path.join(base, `Python${v}`, "site-packages"));
      const joined = sites.join(path.delimiter);
      env.PYTHONPATH = env.PYTHONPATH ? `${env.PYTHONPATH}${path.delimiter}${joined}` : joined;
    }
  } catch {
    // homedir 不可用：留给 pdf_extract.py 内的 site 注入兑底
  }
  return env;
}

function cleanText(t) {
  return String(t || "")
    .replace(/\u0000/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function runSidecar(bytes) {
  return new Promise((resolve, reject) => {
    let child;
    try {
      child = spawn(PYTHON, ["-B", SIDECAR], { stdio: ["pipe", "pipe", "pipe"], env: sidecarEnv() });
    } catch (e) {
      reject(e);
      return;
    }
    const timer = setTimeout(() => {
      try {
        child.kill();
      } catch {
        /* 已退出 */
      }
      reject(new Error("sidecar timeout"));
    }, SIDECAR_TIMEOUT_MS);
    let out = "";
    let err = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (err += d));
    child.on("error", (e) => {
      clearTimeout(timer);
      reject(e);
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (err.trim()) {
        // stderr 透传：sidecar 的 BOOT/env 自报走这里进宿主日志
        console.error(`[pdf-sidecar stderr] ${err.trim().slice(0, 600)}`);
      }
      if (!out.trim()) {
        reject(new Error((err || "").trim() || `sidecar exit ${code}`));
        return;
      }
      try {
        resolve(JSON.parse(out.trim().split("\n").pop()));
      } catch {
        reject(new Error(`sidecar bad json: ${out.slice(0, 200)}`));
      }
    });
    child.stdin.on("error", () => {
      /* EPIPE 由 close/error 主线处理 */
    });
    child.stdin.end(Buffer.from(bytes));
  });
}

async function extractViaUnpdf(uint8) {
  let pdf;
  try {
    pdf = await getDocumentProxy(uint8);
  } catch (e) {
    const err = new Error(`PDF 解析失败（文件损坏或非 PDF）：${e?.message || e}`);
    err.code = "parse_fail";
    throw err;
  }
  const { totalPages, text } = await extractText(pdf, { mergePages: true });
  const clean = cleanText(text);
  // 提取为空时再探测“是否含文字绘制算符”：区分“真扫描件”与“有文字层但字体映射缺失”。
  // 仅看前几页，成本可控；探测失败返回 null（走保守文案）。
  const textOps = clean.length < MIN_CHARS ? await detectTextOps(pdf) : null;
  try {
    pdf.destroy?.();
  } catch {
    /* 已销毁 */
  }
  return { clean, pages: totalPages, textOps };
}

// 扫前几页算符表，找文字绘制算符（showText 系列）。
async function detectTextOps(pdf) {
  try {
    const PDFJS = await getResolvedPDFJS();
    const OPS = PDFJS?.OPS || {};
    const showOps = new Set(
      [OPS.showText, OPS.showSpacedText, OPS.nextLineShowText, OPS.nextLineSetSpacingShowText].filter(
        (n) => typeof n === "number"
      )
    );
    if (!showOps.size) return null;
    const max = Math.min(pdf.numPages || 1, 5);
    for (let i = 1; i <= max; i++) {
      const page = await pdf.getPage(i);
      const ops = await page.getOperatorList();
      if ((ops.fnArray || []).some((fn) => showOps.has(fn))) return true;
      try {
        page.cleanup?.();
      } catch {
        /* 忽略 */
      }
    }
    return false;
  } catch {
    return null;
  }
}

function assertUsable(clean, pages, engine, textOps, primaryRan) {
  if (clean.length < MIN_CHARS) {
    const engineName = engine === "pymupdf" ? "PyMuPDF" : "unpdf（回退引擎）";
    // 主引擎已跑过（不管产没产出）就不再建议装它：装了也一样解不出
    const suggest = primaryRan ? "" : "建议安装 PyMuPDF 主引擎（python -m pip install pymupdf）后重试，";
    let message;
    if (textOps === true) {
      // 有文字绘制算符却提取为空：文字层存在，只是当前引擎无法解码其字体（常见于缺 ToUnicode 映射的 CID 字体）
      message = `本 PDF 含文字层，但当前引擎（${engineName}）无法解码其字体映射，仅提取到 ${clean.length} 字符（共 ${pages} 页）——这不是扫描件。${suggest}或转到对话侧处理。`;
    } else if (textOps === false) {
      message = `本 PDF 可提取文字仅 ${clean.length} 字符（共 ${pages} 页），未发现文字绘制内容，疑似无文字层的扫描版，暂不支持 OCR。请换带文字层的版本，或转到对话侧处理。`;
    } else {
      message = `本 PDF 可提取文字仅 ${clean.length} 字符（共 ${pages} 页），当前引擎（${engineName}）未能提取到文字。可能是扫描版（无文字层）或字体映射缺失；${suggest}或转到对话侧处理。`;
    }
    const err = new Error(message);
    err.code = "no_text_layer";
    err.textLayerPresent = textOps === true;
    err.engine = engine;
    throw err;
  }
  return { text: clean, pages, chars: clean.length, engine };
}

export async function extractPdfText(bytes) {
  // Buffer 也是 Uint8Array 子类，但 pdfjs 按构造器严格拒绝 Buffer；
  // ctx.resources.read 返回的正是 Buffer，统一规范化为裸 Uint8Array。
  const uint8 = bytes && bytes.constructor === Uint8Array ? bytes : new Uint8Array(bytes ?? []);
  if (uint8.byteLength > MAX_PDF_BYTES) {
    const err = new Error(`PDF 文件过大（${Math.round(uint8.byteLength / 1048576)} MB > 50 MB 上限）`);
    err.code = "file_too_big";
    throw err;
  }

  // 主引擎：PyMuPDF sidecar
  let primaryRan = false; // 主引擎是否实际跑通（低于阈值也算跑通；用于避免再建议装主引擎）
  try {
    const j = await runSidecar(uint8);
    if (j && j.ok) {
      primaryRan = true;
      return assertUsable(cleanText(j.text), j.pages, "pymupdf", undefined, primaryRan);
    }
    console.error(`[pdf-sidecar] failed, fallback to unpdf: ${JSON.stringify(j)}`);
    // sidecar 明确失败（not_pdf / mupdf_fail）→ 交给 unpdf 复核，其判定作为最终结论
  } catch (e) {
    if (e?.code === "no_text_layer") {
      // 主引擎跑通、只是低于阈值：留回退引擎复核，日志不说“不可用”
      primaryRan = true;
      console.error(`[pdf-sidecar] below threshold, unpdf takes a second look: ${e?.message || e}`);
    } else {
      // sidecar 不可用（无 Python、无 pymupdf、超时、spawn 被拒）→ 回退
      console.error(`[pdf-sidecar] unavailable, fallback to unpdf: ${e?.message || e}`);
    }
  }

  // 回退：unpdf（包 try 兜底，异常必须转结构化错误，防穿透成裸 500）
  try {
    const r = await extractViaUnpdf(uint8);
    return assertUsable(r.clean, r.pages, "unpdf", r.textOps, primaryRan);
  } catch (e) {
    console.error(`[pdf-unpdf] extraction failed: ${e?.message || e}`);
    throw e;
  }
}
