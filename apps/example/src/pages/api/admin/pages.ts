import type { NextApiRequest, NextApiResponse } from "next";
import baseSchema from "../../../utils/base_schema.json";
import baseTheme from "../../../utils/base_theme.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return res.status(200).json({ schema: baseSchema, theme: baseTheme });
}
