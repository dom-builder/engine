import { kv } from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from "next";
import baseSchema from "../../../utils/base_schema.json";
import baseTheme from "../../../utils/base_theme.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const normalize = (str: string) => str.toLowerCase().replace(/\s/g, "_");

  if (req.method === "DELETE") {
    const storeNameQuery = req.query.store_name;

    if (!storeNameQuery) {
      return res.status(400).json({ error: "Store name is required" });
    }

    const key = normalize(`${storeNameQuery}-schema`);

    await kv.set(key, { schema: baseSchema, theme: baseTheme });
  }

  if (req.method === "POST") {
    const { schema, theme, store_name } = req.body;

    if (!schema || !theme) {
      return res.status(400).json({ error: "Schema is required" });
    }

    const key = normalize(`${store_name}-schema`);

    await kv.set(key, { schema, theme });

    return res.status(200).json({ schema, theme });
  }

  const storeNameQuery = req.query.store_name;

  if (!storeNameQuery) {
    return res.status(400).json({ error: "Store name is required" });
  }
  const key = normalize(`${storeNameQuery}-schema`);
  const layout = await kv.get(key);

  if (layout === null) {
    kv.set("schema", baseSchema);
    return res.status(200).json({ schema: baseSchema });
  }

  res.status(200).json(layout);
}
