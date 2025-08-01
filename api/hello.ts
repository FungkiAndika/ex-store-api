import type { VercelRequest, VercelResponse } from "@vercel/node"
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}
