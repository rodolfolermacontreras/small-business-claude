---
version: '1.0.0'
ratified: 2026-07-09
last_amended: 2026-07-09
proposal: true
---

# Tech Stack

## Detected Languages

- JavaScript (8 files)
- Runtime: Node.js >= 18, ES modules (`"type": "module"`)
- Server: Express 5; SDK: @anthropic-ai/sdk; config: dotenv
- Front end: plain HTML/CSS/JS under `public/` (no build step)
## Package and Build Inputs

- npm: package-lock.json, package.json
- Scripts: `npm start` (node server/index.js), `npm run dev` (node --watch)
## Test Frameworks

- None yet. No test runner is configured (no `test` script in package.json). Adding a test runner is the intended SDD pilot.
## CI Systems

- None. No GitHub Actions or other CI is present.
## Convention Files

- No formal linter or formatter configured. Config via `.env` / `.env.example` and `.npmrc`. Secrets (ANTHROPIC_API_KEY) live only in `.env` and are never committed.
