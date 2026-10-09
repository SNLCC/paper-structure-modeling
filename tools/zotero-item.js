import { zoteroFetch, unwrapItem } from "./zotero-search.js";

const tool = {
  name: "zotero_item",
  description: "Fetch one Zotero item's full metadata and its child attachments (keys + filenames). Use after zotero_search to locate an item.",
  parameters: {
    type: "object",
    properties: {
      key: { type: "string", description: "Zotero item key from zotero_search." },
    },
    required: ["key"],
  },
  sessionPermission: { readOnly: true },
  async execute(input = {}, ctx) {
    const key = String(input.key || "").trim();
    if (!key) throw new Error("zotero_item requires item key");

    const itemRes = await zoteroFetch(ctx, `/users/0/items/${encodeURIComponent(key)}`);
    const itemRaw = await itemRes.json();
    const primary = Array.isArray(itemRaw) ? itemRaw[0] : itemRaw;
    const meta = unwrapItem(primary);

    const childRes = await zoteroFetch(ctx, `/users/0/items/${encodeURIComponent(key)}/children`);
    const childRaw = await childRes.json();
    const children = (Array.isArray(childRaw) ? childRaw : []).map((c) => {
      const d = c?.data ?? {};
      return {
        key: c?.key ?? "",
        itemType: d.itemType || "",
        contentType: d.contentType || "",
        filename: d.filename || "",
        linkMode: d.linkMode || "",
      };
    });
    const attachments = children.filter((c) => c.itemType === "attachment");

    return {
      content: [{
        type: "text",
        text: JSON.stringify({ item: meta, attachments, otherChildren: children.filter((c) => c.itemType !== "attachment") }, null, 2),
      }],
    };
  },
};

export const { name, description, parameters, execute } = tool;
