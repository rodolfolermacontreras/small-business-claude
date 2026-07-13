---
version: '2.0.0'
ratified: 2026-07-09
last_amended: 2026-07-10
amendment_authority: 'Rodolfo Lerma (Level 2 human owner)'
amendment_record: 'PI-1-S1-R1-T07-CONSTITUTION-AMENDMENT-AUTHORIZATION-2026-07-10'
proposal: false
---

# Tech Stack

## Runtime Policy and Validation Status

- Node.js `>=24` is the owner-approved runtime policy as of 2026-07-10.
- Mechanical minimum-version compatibility validation is deferred to Sprint 2 and has not
  occurred. This policy statement is not evidence of compatibility or readiness.
- `package.json` still declares Node.js `>=18`. Its metadata is intentionally unchanged by
  this amendment; any alignment depends on separately authorized Sprint 2 validation.

## Current Application Stack

- Language: JavaScript with ES modules (`"type": "module"`)
- Server: Express 5; SDK: @anthropic-ai/sdk; config: dotenv
- Front end: plain HTML/CSS/JS under `public/` (no build step)
- Persistence: local SQLite via built-in `node:sqlite` for chat sessions and the approval
  outbox
- Connectors: mock QuickBooks, PayPal, HubSpot, and inventory domains

## Package and Build Inputs

- npm: package-lock.json, package.json
- Scripts: `npm start` (node server/index.js), `npm run dev` (node --watch)

## Test Frameworks

- None yet. No test runner or `test` script is configured. Test-runner selection and the
  first automated health smoke test are deferred Sprint 2 readiness mechanics.

## CI Systems

- None. No host CI is present; adding it is deferred to Sprint 2.

## Convention Files

- No formal linter or formatter configured. Config via `.env` / `.env.example` and `.npmrc`. Secrets (ANTHROPIC_API_KEY) live only in `.env` and are never committed.
