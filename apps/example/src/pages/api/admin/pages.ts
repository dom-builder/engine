import { kv } from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from "next";
import baseSchema from "../../../utils/base_schema.json";
import baseTheme from "../../../utils/base_theme.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "DELETE") {
    await kv.set("schema", { schema: baseSchema, theme: baseTheme });
  }

  if (req.method === "POST") {
    const { schema, theme } = req.body;

    if (!schema || !theme) {
      return res.status(400).json({ error: "Schema is required" });
    }

    await kv.set("schema", { schema, theme });

    return res.status(200).json({ schema, theme });
  }

  const layout = await kv.get("schema");

  if (layout === null) {
    kv.set("schema", baseSchema);
    return res.status(200).json({ schema: baseSchema });
  }

  res.status(200).json(layout);
}
