# 对照 spike：PyMuPDF 版阅读顺序提取，与 pypdfium2 版同题同算法比对。
# 关键差异（两引擎最易错点）：PyMuPDF 坐标原点在左上、y 向下 —— 升序即从上到下，不取负。
# 块级抽象（get_text("blocks") 返回排版块）vs pypdfium2 的字符级：
# 块自带段落边界，预期避开「同行连续跨栏字符被拼进一行」的混合问题。
# 用法：python pdf_extract_mupdf.py <file.pdf> [--raw]
#   --raw   = page.get_text() 内容流序（对照组）
#   默认    = 块级栏排序（与 pdf_extract_spike.py 同款屏障逻辑）
import sys

import pymupdf

X_GAP = 14.0  # 带内切段间隙（pt），与字符版一致


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
        items.append({"y0": y0, "yc": (y0 + y1) / 2, "x0": x0, "x1": x1, "text": text, "col": col})
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


def extract(path, raw=False):
    doc = pymupdf.open(path)
    pages = []
    stats = []
    try:
        for pno, page in enumerate(doc):
            w = page.rect.width
            if raw:
                pages.append(page.get_text("text", sort=False))
                stats.append((pno + 1, "raw", 0, 0))
                continue
            blocks = page.get_text("blocks")
            texts, was_two, (nl, nr) = sort_blocks(blocks, w)
            pages.append("\n\n".join(texts))
            stats.append((pno + 1, "two-col" if was_two else "single", nl, nr))
    finally:
        doc.close()
    return "\n\n".join(pages), stats


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    raw = "--raw" in sys.argv
    if not args:
        print("usage: python pdf_extract_mupdf.py <file.pdf> [--raw]", file=sys.stderr)
        sys.exit(2)
    text, stats = extract(args[0], raw=raw)
    print(f"### stats {'RAW' if raw else 'BLOCKS'}: " + "; ".join(f"p{p}:{k} L{nl}/R{nr}" for p, k, nl, nr in stats), file=sys.stderr)
    print(text)


if __name__ == "__main__":
    main()
