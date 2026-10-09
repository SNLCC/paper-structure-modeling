
import fs from "node:fs";
import path from "node:path";
import { createMediaDetails, defineTool } from "@hana/plugin-runtime";

const tool = defineTool({
  name: "create_note",
  description: "Create a markdown note and return it as SessionFile media.",
  parameters: {
    type: "object",
    properties: {
      title: { type: "string" },
      body: { type: "string" }
    }
  },
  sessionPermission: {
    kind: "plugin_output",
    describeSideEffect: () => ({
      kind: "session_file_output",
      summary: "Create a markdown file in plugin data and register it as SessionFile media.",
      ruleId: "paper-structure-modeling-plugin-output",
    }),
  },
  async execute(input = {}, toolCtx) {
    const sessionRef = toolCtx.sessionRef || (toolCtx.sessionId
      ? { sessionId: toolCtx.sessionId, sessionPath: toolCtx.sessionPath || null }
      : null);
    if (!sessionRef?.sessionId) {
      throw new Error("paper-structure-modeling_create_note requires sessionId");
    }
    if (!toolCtx.stageFile) {
      throw new Error("paper-structure-modeling_create_note requires stageFile");
    }

    const title = typeof input.title === "string" && input.title.trim()
      ? input.title.trim()
      : "论文结构建模 Note";
    const body = typeof input.body === "string" ? input.body : "Generated from a Hana plugin.";
    const safeName = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "note";
    const outputDir = path.join(toolCtx.dataDir, "notes");
    const filePath = path.join(outputDir, `${safeName}.md`);

    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(filePath, `# ${title}\n\n${body}\n`, "utf-8");

    const staged = toolCtx.stageFile({
      sessionId: sessionRef.sessionId,
      sessionRef,
      filePath,
      label: `${safeName}.md`,
    });

    return {
      content: [{ type: "text", text: `Created ${safeName}.md` }],
      details: createMediaDetails([staged]),
    };
  },
});

export const { name, description, parameters, execute } = tool;
