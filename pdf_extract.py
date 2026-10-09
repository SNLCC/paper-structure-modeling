# pdf_extract.py — PDF 阅读顺序提取 sidecar（第 78 轮：PyMuPDF 升为默认引擎）
# 协议：stdin 收 PDF 字节 → stdout 回单行 JSON：
#   {"ok": true,  "text": "...", "pages": N}
#   {"ok": false, "error": "...", "code": "mupdf_fail" | "not_pdf"}
# 引擎：PyMuPDF 块级栏排序（spike 第 77 轮三组对照胜出：块=排版单元，
# 天然避开同行跨栏字符拼接；畸形 PDF 兜底优于 pypdfium2）。
# 坐标系：PyMuPDF 原点左上、y 向下 —— 升序即从上到下，切勿取负。
# 本脚本只做提取与排序；字节上限、无文字层阈值判定在 node 侧统一执行。
import json
import sys

# 启动自报（第 86 轮诊断）：确认 node 侧 env 注入与 user site 判定输入
try:
    import os as _os
    import site as _site
    print(
        f"BOOT py={sys.executable} PYPATH={_os.environ.get('PYTHONPATH', '<unset>')} "
        f"US={_site.getusersitepackages()} NOUSER={_os.environ.get('PYTHONNOUSERSITE', '-')}",
        file=sys.stderr,
        flush=True,
    )
except Exception:
    pass

X_GAP = 14.0  # 带内切段间隙（pt）：大于任何词距（<6pt）、小于任何栏间隙（≥10pt）


def sort_blocks(blocks, page_w):
    """块级栏排序：每块按 bbox 定栏，S 跨栏块作屏障，区间内先左后右，各按 y。"""
    mx = page_w / 2
    m = 4.0
    items = []
    for b in blocks:
        x0, y0, x1, y1 = b[0], b[1], b[2], b[3]
        text = (b[4] or "").strip()
        if not text:
            continue
        if x1 <= mx and x0 < mx - m:
            col = "L"
        elif x0 >= mx and x1 > mx + m:
            col = "R"
        else:
            col = "S"
        items.append({"yc": (y0 + y1) / 2, "text": text, "col": col})
    left = [it for it in items if it["col"] == "L"]
    right = [it for it in items if it["col"] == "R"]
    spans = [it for it in items if it["col"] == "S"]
    two_col = len(left) >= 2 and len(right) >= 2
    if not two_col:
        items.sort(key=lambda it: it["yc"])
        return [it["text"] for it in items], False, (len(left), len(right))
    out = []
    marks = sorted(spans, key=lambda it: it["yc"])
    prev = -1e9
    for sp in marks:
        lo, hi = prev, sp["yc"]
        out.extend(t["text"] for t in sorted(left, key=lambda t: t["yc"]) if lo <= t["yc"] < hi)
        out.extend(t["text"] for t in sorted(right, key=lambda t: t["yc"]) if lo <= t["yc"] < hi)
        out.append(sp["text"])
        prev = hi
    out.extend(t["text"] for t in sorted(left, key=lambda t: t["yc"]) if t["yc"] >= prev)
    out.extend(t["text"] for t in sorted(right, key=lambda t: t["yc"]) if t["yc"] >= prev)
    return out, True, (len(left), len(right))


def main():
    try:
        data = sys.stdin.buffer.read()
        if not data:
            print(json.dumps({"ok": False, "error": "empty stdin", "code": "not_pdf"}))
            return
        # 用户 site 注入（第 86 轮根因修复）：宿主子进程环境禁用 user site 自动加载，
        # 而 pymupdf 常装在用户 site；getusersitepackages() 仅查询路径不受禁用标志影响，
        # 手动注入后 import 恢复；无安装时仍走下方回退逻辑。
        try:
            import site as _site
            _us = _site.getusersitepackages()
            if _us and _us not in sys.path:
                sys.path.append(_us)
        except Exception:
            pass
        import pymupdf

        try:
            doc = pymupdf.open(stream=data, filetype="pdf")
        except Exception as e:
            print(json.dumps({"ok": False, "error": f"open failed: {e}", "code": "not_pdf"}))
            return
        try:
            pages_text = []
            for page in doc:
                w = page.rect.width
                texts, _two, _st = sort_blocks(page.get_text("blocks"), w)
                pages_text.append("\n\n".join(texts))
            text = "\n\n".join(pages_text)
            print(json.dumps({"ok": True, "text": text, "pages": len(pages_text)}))
        finally:
            doc.close()
    except Exception as e:  # 畸形 PDF 不许炸进程：回 ok:false 由 node 侧回退 unpdf
        # 自报环境（第 85 轮）：import 失败时带上解释器与 site 路径（sys 用模块级，勿在函数内重 import 造成遮蔽）
        try:
            env_hint = f" [py={sys.executable}; path={'|'.join(sys.path[:6])}]" if "pymupdf" in str(e) else ""
            # ensure_ascii=True：Windows 默认 GBK stdout 遇非 ASCII 会抛 UnicodeEncodeError
            # 反噬错误报告本身（第 88 轮 gbk/œ 事故）；JSON 转义后语义不变。
            print(json.dumps({"ok": False, "error": str(e) + env_hint, "code": "mupdf_fail"}))
        except Exception:
            print(json.dumps({"ok": False, "error": "unknown", "code": "mupdf_fail"}))


if __name__ == "__main__":
    main()
