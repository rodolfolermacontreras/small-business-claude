# TASK-001: SQLite persistence for chat sessions + approval outbox

> One brief = one worker. Execute this without reading any other task brief.

- **ID:** TASK-001
- **Created:** 2026-07-09
- **Author (PM):** Rodolfo
- **Status:** Ready
- **Estimated size:** M

---

## 1. Goal (one sentence)
Make chat history and the approval outbox survive a server restart by persisting them to a local
SQLite database, without changing any API response shapes or the UI.

## 2. Context / why
Today, `sessions` (chat history) live in an in-memory `Map` in `server/index.js` and the `outbox`
lives as an in-memory array in `server/connectors/index.js`. Everything resets on `npm start`.
Persisting both to SQLite lets an owner close the app and come back to their drafts and conversation.
This is the first backlog item and the first parallel-worker task, so keep it tightly scoped.

## 3. In scope (files/areas you may change)
- `server/db.js` — **new** file: opens/creates the SQLite database and exposes small helper
  functions (init schema, load/save session messages, insert/list/update outbox items).
- `server/index.js` — replace the in-memory `sessions` Map with DB-backed load/save; make
  `/api/chat`, `/api/reset`, `/api/outbox`, `/api/outbox/:id/approve` read/write through the DB.
- `server/connectors/index.js` — persist outbox writes (the `outbox` array and the `draft_*` /
  report actions that push into it) through the DB helper. Keep the exported interface the same.
- `.gitignore` — add the database file (e.g. `*.db`, `data.db`, `server/*.db`) so it is never committed.
- `package.json` — **only if** you add a dependency (see §5 — prefer the built-in, so ideally no change).

## 4. Out of scope (do NOT touch)
- `public/**` (no UI changes — the frontend must keep working unchanged).
- `server/agent.js`, `server/tools.js`, `server/workflows.js`, `server/optimizer.js`.
- `server/data/*.json` (mock business data stays as flat files).
- Any change to API **response shapes** or endpoint paths.
- `.env` — never stage or print it.

## 5. Approach / notes
- **Preferred: zero new dependencies.** Node.js v24 includes a built-in SQLite module
  (`import { DatabaseSync } from "node:sqlite"`). Use it if it works in this environment
  (it may print an experimental-feature warning and/or need the `--experimental-sqlite` flag —
  if a flag is required, wire it into the `start`/`dev` scripts in `package.json` rather than
  adding a native dependency). This keeps the "no build step / just runs" principle intact.
- Only if `node:sqlite` is genuinely unusable here, fall back to `better-sqlite3` — but note it
  compiles native bindings on Windows, so treat that as a last resort and flag it to the PM.
- Suggested schema (adapt as needed, keep it minimal):
  - `sessions(session_id TEXT, seq INTEGER, role TEXT, content TEXT)` — full message log per session,
    OR a single row per session storing the JSON messages array. Either is fine; pick the simpler one.
  - `outbox(id TEXT PRIMARY KEY, kind TEXT, status TEXT, payload TEXT, created_at TEXT, approved_at TEXT)`
    — store the draft's fields (JSON in `payload` is acceptable) so `/api/outbox` returns the same
    objects it does today.
- Keep the in-memory `outbox` array behavior working for the current request cycle if that's
  simplest — but the source of truth on read (`GET /api/outbox`) and on restart must be the DB.
- `/api/reset` must delete that session's rows from the DB (matching today's behavior of clearing
  the session).
- Preserve core principles: human-in-the-loop outbox unchanged; server-side math unchanged;
  connector interface stable; must still `npm start` with no build step.

## 6. Acceptance checks (must all pass)
- [ ] Start server, run the 📦 inventory workflow (or invoice-chaser) so drafts land in the outbox;
      **restart** the server; `GET /api/outbox` still returns those drafts.
- [ ] Approve a draft (`POST /api/outbox/:id/approve`), restart, and it is still `approved`
      with its `approved_at` timestamp.
- [ ] Send a chat message, restart, send another with the **same** `sessionId`; the agent has the
      prior turns (history persisted). 
- [ ] `POST /api/reset` for a session removes its history from the DB (a subsequent chat starts fresh).
- [ ] `/api/config`, `/api/metrics`, `/api/inventory`, `/api/health` response shapes unchanged; UI at
      http://localhost:3000 still loads and works.
- [ ] The `.db` file is git-ignored and NOT committed. No API key printed or committed.
- [ ] No out-of-scope files changed.

## 7. Verification steps
```powershell
cd C:\Training\Projects\Small-Business-Claude
npm start
# In another terminal:
# 1) create a draft via the UI (run the 📦 workflow) or:
#    Invoke-RestMethod http://localhost:3000/api/outbox
# 2) stop the server (Ctrl+C), start again: npm start
# 3) Invoke-RestMethod http://localhost:3000/api/outbox   # drafts should still be there
# 4) approve one, restart, confirm status stays "approved"
# Confirm git status shows no .db file staged:
git status --porcelain
```

## 8. Done means
- All acceptance checks pass; server starts clean; UI verified at http://localhost:3000.
- Committed + pushed to `main`, message e.g.: `Add SQLite persistence for chat sessions + outbox`.
- Report back to PM: summary, files changed (confirm none out of scope), verification output,
  commit SHA, and whether `node:sqlite` worked (or why a fallback was needed) + any follow-ups.
