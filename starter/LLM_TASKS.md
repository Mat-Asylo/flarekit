# LLM Bootstrap Tasks

## 0. Detect stack & mode
- Read `LLM_MANIFEST.json`.
- Ask user: choose a mode: **api-only** (default) or **fullstack-vite**.

## 1. Install dependencies
- [ ] Run: `npm install`

## 2. Configure project
- [ ] Rename the worker in `wrangler.toml` to the repo/folder name.
- [ ] Ask user: Enable Neon? (y/N). If yes, run `wrangler secret put NEON_DATABASE_URL`.
- [ ] Optional future: If user requests R2/KV, add bindings to `wrangler.toml` accordingly.

## 3. Verify dev (API)
- [ ] Run: `npm run dev`
- [ ] Request: `http://localhost:8787/api/health` → expect `{ "ok": true }`

## 4. Mode-specific steps
### If mode = **api-only**
- Done after step 3.

### If mode = **fullstack-vite**
- [ ] Create sibling Vite app: `npm create vite@latest web -- --template react-ts`
- [ ] Install in `web/`: `npm install`
- [ ] Update `web/vite.config.ts` to proxy `/api` to `http://localhost:8787`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { '/api': 'http://localhost:8787' }
  }
})
```

- [ ] Run both:
  - Terminal A (root): `npm run dev` (Worker at 8787)
  - Terminal B (`web/`): `npm run dev` (Vite at 5173)
- [ ] Visit `http://localhost:5173` and test `/api/health` from the UI (optional).

## 5. Optional hardening
- [ ] Generate `README.md` summarising enabled options (Neon/R2/KV).
- [ ] Add CI (GitHub Actions) if asked.
