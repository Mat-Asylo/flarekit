# ⚡️ Flarekit

Universal Cloudflare + Hono + TypeScript starter kit for Codespaces, Biome, and AI-assisted app creation.

## ✨ Overview

Flarekit is a lightweight foundation for any project built on your preferred stack:

**Cloudflare Workers · Hono · TypeScript · Vite · Biome · Codespaces**

It's designed to work seamlessly with AI coding agents such as OpenAI Codex or Copilot Chat—so new projects can be scaffolded, configured, and deployed in minutes.

## 🚀 Features

- 🔹 Minimal Hono API ready to deploy on Cloudflare Workers
- 🔹 Biome for formatting + linting (no Prettier / ESLint conflicts)
- 🔹 Wrangler scripts for local dev & deploy
- 🔹 Strict TypeScript setup for Workers + Vite projects
- 🔹 Optional Vite + React front-end (auto-proxied to the Worker)
- 🔹 Codespaces-ready (Node LTS + Wrangler + psql)
- 🔹 LLM-friendly: includes a manifest + tasks file for automated setup

## 🧩 Folder Structure

```
starter/
├─ src/
│  └─ index.ts            → minimal Hono app with /api/health
├─ package.json           → dev, deploy, check, format scripts
├─ tsconfig.json          → strict TS config
├─ wrangler.toml          → Cloudflare Worker config
├─ biome.json             → formatter + linter
├─ .env.example           → Neon DB connection example
├─ .gitignore
├─ LLM_MANIFEST.json      → metadata for AI assistants
├─ LLM_TASKS.md           → setup checklist
└─ README_STARTER.md      → detailed human + LLM guide
```

## 🧠 How It Works

1. Copy the `starter/` folder into a new repo.
2. Open it in Codespaces or locally with your codeflare VS Code profile.
3. Ask your LLM to read `LLM_MANIFEST.json` and follow `LLM_TASKS.md`.
4. Run `npm install` → `npm run dev`.
5. Visit `http://localhost:8787/api/health`.

## ⚙️ Two Modes

| Mode | Description |
|------|-------------|
| **api-only** | Cloudflare Worker + Hono (default) |
| **fullstack-vite** | Adds a `web/` React + Vite front-end and proxies `/api` to the Worker |

## 🧱 Extend with Recipes

Optionally add snippets in `recipes/` for things like:

- Neon client helper
- R2 / KV bindings
- `devcontainer.json` with preinstalled extensions

## 📜 License

MIT © 2025 Mat-Asylo
