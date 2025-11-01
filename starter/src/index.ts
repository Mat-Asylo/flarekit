import { Hono } from 'hono'

const app = new Hono()

app.get('/api/health', (c) => c.json({ ok: true }))

app.get('/api/db-check', async (c) => {
  // Example: read a secret set via `wrangler secret put NEON_DATABASE_URL`
  const url = c.env?.NEON_DATABASE_URL
  return c.json({ hasDbUrl: Boolean(url) })
})

export default app
