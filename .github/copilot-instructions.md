# Copilot Instructions -- Small-Business-Claude

Read this file first on every session start. This is active host context, subordinate to
dated Level 2 owner decisions and the ratified constitution. This repository uses the
Spec-Driven Development (SDD) multi-agent framework; the framework's process assets live
under `.github/` (agents, skills, prompts) and `spec-driven-development/` (constitution,
backlog, specs, ledger).

---

## Project Identity

- **Name**: Small-Business-Claude
- **Owner**: Rodolfo Lerma (see `project.config.json`)
- **Current implementation**: A working local, single-user demo that runs on the owner's
  machine. It uses the Anthropic API, a plain-JavaScript web UI, seven ready-to-run
  workflows, local SQLite persistence for chat sessions and the approval outbox, and mock
  QuickBooks, PayPal, HubSpot, and inventory connector domains.
- **Future target**: A hosted SaaS product for real small-business owners. The approved
  beachhead direction is inventory-based businesses in El Paso, Texas, and Ciudad Juarez,
  Mexico, beginning with coffee shops and flooring, wall-material, and related
  building/interior-finish wholesalers. This is a direction to validate, not a claim that
  the SaaS product has been built or committed to the backlog.
- **Immediate gate**: Conduct customer discovery before backlog commitment or product
  implementation. Validate the beachhead problem, first-customer profile, shared MVP jobs,
  source systems, language needs, and willingness to pay. Discovery is not complete.
- **Status**: Working demo. Adopting SDD (brownfield) as of 2026-07-09. Product discovery
  and the first SDD pilot are pending.

---

## Tech Stack

- **Runtime policy**: Node.js >= 24 is owner-approved policy. Mechanical compatibility
  validation and alignment of package metadata are deferred to Sprint 2; do not claim
  validation from this policy statement. The current package metadata remains unchanged.
- **Modules/build**: ES modules (`"type": "module"`). No build step.
- **Server**: Express 5 (`server/index.js`), agentic loop in `server/agent.js`, tools in
  `server/tools.js`, workflows in `server/workflows.js`, connectors in
  `server/connectors/`.
- **AI**: `@anthropic-ai/sdk`; model set via `CLAUDE_MODEL`. Config via `dotenv`.
- **Front end**: plain HTML/CSS/JS under `public/` (owner cockpit).
- **Persistence**: local SQLite via `node:sqlite` for chat sessions and approval-outbox
  drafts.
- **Scripts**: `npm start` (node server/index.js), `npm run dev` (node --watch).
- **Tests / CI / lint**: none yet. Adding a test runner + first smoke test is the
  intended first SDD pilot.

The ratified `spec-driven-development/constitution/tech-stack.md` remains governing
process policy, but its stale detected-runtime facts are pending the separately governed
R1-T07 amendment. Until then, the dated 2026-07-10 owner decision controls the Node.js
`>=24` policy; neither source is evidence of completed mechanical validation.

---

## Repository Structure (app)

```
public/            Web UI (owner cockpit) -- HTML/CSS/JS, no build step
server/
  index.js         Express server + API routes
  agent.js         Agentic loop: Claude <-> tool calls
  tools.js         Tool definitions + dispatcher
  workflows.js     The 7 ready-to-run workflow prompts
  db.js            Local SQLite sessions + approval outbox
  connectors/
    index.js       QuickBooks / PayPal / HubSpot / inventory connector contract
  data/*.json      Mock business data for the four connector domains
```

Key API routes: `GET /api/health`, `GET /api/config`, `POST /api/chat`,
`GET /api/metrics`, `GET /api/outbox`, `GET /api/inventory`,
`POST /api/outbox/:id/approve`, `POST /api/reset`.

Current product invariants:

- Anything that would send, post, pay, or place an order remains a draft in the approval
  outbox until the owner explicitly approves it.
- Connector implementations may change later, but the connector/tool contract must remain
  stable unless separately specified and approved.
- Financial, inventory, and optimization calculations remain deterministic server-side
  operations; the model may explain results but must not invent or replace calculations.
- API and connector secrets remain in `.env` only and must never be committed, logged, or
  exposed to the browser.

---

## How this project is run (SDD)

One human owner orchestrates a fleet of AI agents through a structured lifecycle:

```
IDEA -> BACKLOG -> CLARIFY -> SPEC -> PLAN -> TASKS -> IMPLEMENT -> REVIEW -> DONE
```

- **Executive Manager** (single human entry point) -- routing, status, escalation.
- **Product Manager / Architect / Software Developer** -- backlog, specs, dispatch.
- **Workers** -- generic Developers / QA / UX, dispatched per task.

The ratified rules live in `spec-driven-development/constitution/` (mission, principles,
tech-stack, roadmap, decision-policy, quality-policy), subordinate to later dated Level 2
owner decisions where they conflict pending a governed amendment. Host-specific principles
H1-H5 include: preserve existing conventions (brownfield), keep secrets in `.env` only,
and keep any send/pay/post action behind the outbox approval gate.

---

## Conventions

- **No emojis** in code, docs, or commits.
- **Dates**: always `YYYY-MM-DD`.
- **Secrets**: `ANTHROPIC_API_KEY` and connector keys live only in `.env`, never committed.
- **Branching**: follow the currently authorized sprint Git policy; do not infer permission
  to commit directly to `main` from stale documentation.
- **Brownfield discipline**: workers mimic existing patterns; do not rewrite code outside
  the explicit task scope. If a pattern blocks the task, route to the Architect.

---

## Session Start

1. Read this file.
2. Read `spec-driven-development/exec/state.md` (executive state).
3. Read `spec-driven-development/constitution/` (mission, principles, roadmap).
4. Run `git log --oneline -10` for recent work.
5. Capture new ideas in `spec-driven-development/backlog/IDEAS.md`; triage to `BACKLOG.md`.
