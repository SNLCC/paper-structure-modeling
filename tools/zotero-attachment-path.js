import { ref } from "../lib/paths.js";
import { zoteroFetch } from "./zotero-search.js";

const tool = {
  name: "zotero_attachment_path",
  description: "Resolve a Zotero attachment item to its absolute local file path (PDF etc.) and check that the file exists. Use the returned path with document-reading tools.",
  parameters: {
    type: "object",
    properties: {
      attachmentKey: { type: "string", description: "Attachment item key from zotero_item (the child attachment, not the parent item)." },
    },
    required: ["attachmentKey"],
  },
  sessionPermission: { readOnly: true },
  async execute(input = {}, ctx) {
    const key = String(input.attachmentKey || "").trim();
    if (!key) throw new Error("zotero_attachment_path requires attachmentKey");

    const res = await zoteroFetch(ctx, `/users/0/items/${encodeURIComponent(key)}/file/view/url`);
    const rawText = (await res.text()).trim();
    let filePath = rawText;
    if (filePath.startsWith("file://")) {
      try {
        filePath = decodeURIComponent(new URL(filePath).pathname).replace(/^\/([A-Za-z]:)/, "$1");
      } catch {
        /* keep raw */
      }
    }
    let exists = false;
    if (filePath) {
      try {
        // 合规化：附件存在性走 ResourceIO stat（无裸 fs）；stat 无 size 字段，随 size 输出一并移除
        const st = await ctx.resources.stat(ref(filePath));
        exists = !!st?.exists && !st?.isDirectory;
      } catch {
        exists = false;
      }
    }
    return {
      content: [{ type: "text", text: JSON.stringify({ attachmentKey: key, path: filePath, exists }, null, 2) }],
    };
  },
};

export const { name, description, parameters, execute } = tool;
