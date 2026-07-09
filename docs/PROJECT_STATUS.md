# Project Status — Claude for Small Business

**Maintained by the PM agent. Update after every task.**
Last updated: 2026-07-09

---

## Snapshot
- **Phase:** feature build on a working local demo.
- **Branch:** `main` (in sync with `origin/main`).
- **Latest commit:** `cd5bccc` — inventory optimizer (forecast + reorder plan).
- **Model:** `claude-haiku-4-5-20251001`.
- **Runtime:** Node.js ES modules, Express, no build step. `npm start` -> http://localhost:3000.

---

## Done (verified end-to-end)
| # | Item | Commit |
|---|------|--------|
| 1 | Initial full-stack demo (chat, tool-use loop, outbox, 3 connectors) | `e1e72b0` |
| 2 | UI polish: dark mode, toasts, approval count badge, approve-all | `9ad0977` |
| 3 | Dark mode fix: high-contrast slate palette | `9263ff4` |
| 4 | Dashboard: KPI tiles + campaign ROI via `/api/metrics` | `e400a1b` |
| 5 | Dashboard: collapsible overview + cash-movement sparkline | `bf2e711` |
| 6 | Inventory optimizer: forecast + reorder plan (`/api/inventory`, 📦 workflow, dashboard card) | `cd5bccc` |

**Current capability:** 4 connectors · 15 tools · 7 workflows · dashboard · inventory optimizer.

---

## In flight
_(none — no active task briefs)_

| Task | Worker session | Files in scope | Status |
|------|----------------|----------------|--------|
| — | — | — | — |

---

## Blocked
_(none)_

---

## Backlog (not started — need a task brief before pickup)
| Priority | Item | Notes |
|----------|------|-------|
| — | SQLite persistence for chats + outbox | Survive restarts; keep interface stable |
| — | Wire one REAL connector | e.g. live email send on approval |
| — | Better forecast models | Holt-Winters/trend behind same `inv_optimize` interface |
| — | More workflows | tax-season organizer, contract reviewer, margin analyzer |
| — | Streaming / SSE chat | progressive responses in the UI |

---

## Decisions & constraints (project memory)
- **Human-in-the-loop:** anything that sends/posts/pays must go through a `draft_*`/`create_report`
  tool into the outbox. The agent never claims it actually sent something.
- **Numbers are server-side:** all math (metrics, forecasts, reorder) is computed in Node;
  the LLM only explains. Never let the model compute figures.
- **Connector interface stability:** going live = swap a mock function body for a real API call
  without changing the tool interface.
- **No build step**, dependency-light, must "just run".
- **Secrets:** `.env` holds the API key, git-ignored. Never commit or print it.
- **npm quirk:** local `.npmrc` -> npmjs.org (global feed is a private MS feed that 401s).

---

## How to add a task
1. PM copies `docs/tasks/TASK_BRIEF_TEMPLATE.md` to `docs/tasks/TASK-###-<slug>.md`.
2. Fill goal, scope, out-of-scope, acceptance checks, verification steps.
3. Human opens a new worker session and pastes the worker kick-off prompt from `docs/KICK_OFF.md` §5.
4. On completion, PM moves the row to **Done** and bumps "Last updated".
