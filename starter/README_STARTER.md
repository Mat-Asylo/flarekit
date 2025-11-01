# 📁 `starter/` — Universal Cloudflare + Hono + Vite + Codespaces Starter

This folder is a reusable scaffold for new projects using your stack:

**Stack:** Cloudflare Workers · Hono · TypeScript · Biome · (optional) Vite · Codespaces · OpenAI Codex / Copilot Chat

Copy this folder into a fresh repo, then let your LLM run the tasks in **LLM_TASKS.md**.

## Contents
- `src/index.ts` — Minimal Hono API (`/api/health`)
- `package.json` — `dev`, `deploy`, `check`, `format` scripts
- `tsconfig.json` — strict TS with WebWorker libs
- `wrangler.toml` — Cloudflare config
- `biome.json` — formatter + linter
- `.env.example` — example env (e.g., Neon)
- `.gitignore` — ignores `node_modules`, `.env`, `dist`
- `LLM_MANIFEST.json` — tiny machine-readable metadata
- `LLM_TASKS.md` — step-by-step checklist for the LLM

## Modes
- **api-only** — Worker + Hono only (default)
- **fullstack-vite** — Adds Vite React app (`web/`) and proxies `/api` to the Worker dev server

See **LLM_TASKS.md** for exact steps.
