# Kick-Off — Claude for Small Business (Multi-Agent Operating Model)

This is the **entry point** for every session working on this project. Read it first.
It defines *who does what*, the *current status*, and *how work is handed off* between the
high-level PM agent and the worker agents.

---

## 0. TL;DR

- **PM agent** (the orchestrator session): owns the big picture. Writes task briefs, tracks
  status, reviews results. **Does NOT write feature code.**
- **Worker agents** (other VS Code sessions): each picks up **one task brief** from
  `docs/tasks/`, implements it, verifies, commits, and reports back.
- Everything is coordinated through **documents in `docs/`** — not shared memory. This keeps
  each agent's context clean and prevents "context poisoning."

---

## 1. Roles

### 1.1 PM / Orchestrator agent (this role)
- Maintains the big-picture view of the project and roadmap.
- Turns a discussed idea into a **task brief** (`docs/tasks/TASK-###-<slug>.md`) that a worker
  can execute standalone.
- Keeps `docs/PROJECT_STATUS.md` current (what's done, in-flight, blocked, next).
- Reviews worker output (reads diffs / summaries), updates status, decides what's next.
- **Guardrail:** does not implement sprints or features. No deep-diving into feature code.
  This avoids polluting the PM context with implementation detail. If the PM must inspect code,
  it reads, it does not edit.

### 1.2 Worker agent
- Reads `docs/AGENT_ONBOARDING.md` (technical onboarding) + the **one** assigned task brief.
- Implements only what's in the brief. Asks the PM (via the human) before expanding scope.
- Verifies end-to-end (restart server, hit endpoints / open the UI) before claiming done.
- Commits + pushes with a clear message, then reports: what changed, files touched, verification
  output, commit SHA, and any follow-ups.

---

## 2. The handoff protocol

```
Idea (PM + human discuss)
      |
      v
PM writes docs/tasks/TASK-###-<slug>.md   (from TASK_BRIEF_TEMPLATE.md)
      |
      v
Human opens a NEW VS Code session (worker) and pastes the worker kick-off prompt (§5)
      |
      v
Worker implements -> verifies -> commits/pushes -> reports summary
      |
      v
PM reads the summary/diff, updates docs/PROJECT_STATUS.md, marks task Done
```

**Rules that keep this clean:**
- **One task = one worker session.** Don't give a worker two briefs at once.
- **One area per active worker.** If two briefs touch the same files (e.g. both edit
  `server/index.js`), run them sequentially, not in parallel — merge conflicts otherwise.
- Every brief is **self-contained**: it states the goal, the files in scope, the files
  out of scope, the acceptance checks, and the verification steps. A worker should never need
  to read other task briefs.
- Workers **pull latest `main`** before starting and **push** when done.

---

## 3. Current status (snapshot — live version in docs/PROJECT_STATUS.md)

**Product:** local full-stack demo — small-business AI copilot on the real Claude API.
Node.js (ES modules, no build step), Express, vanilla frontend. Model
`claude-haiku-4-5-20251001`.

**Built & verified:**
- Chat with tool-use agentic loop; human-in-the-loop approval outbox.
- 4 connectors: QuickBooks, PayPal, HubSpot, Inventory/Warehouse (mock JSON, real API shapes).
- 15 tools, 7 ready-to-run workflows.
- Dashboard: KPI tiles, campaign ROI, cash-movement sparkline, collapsible inventory outlook card.
- Inventory optimizer: 24-mo mock history -> seasonal forecast + reorder plan + draft POs.
- Endpoints: `/api/health`, `/api/config`, `/api/chat`, `/api/outbox`, `/api/outbox/:id/approve`,
  `/api/reset`, `/api/metrics`, `/api/inventory`.

**Not yet built (backlog):** SQLite persistence, a real live connector, better forecast models,
more workflows, streaming/SSE chat.

**Known constraints:** state is in-memory (resets on restart); private npm feed quirk (local
`.npmrc` points at npmjs.org); `.env` holds the API key and is git-ignored — never commit it.

---

## 4. Where things live

| Doc | Purpose | Owner |
|-----|---------|-------|
| `docs/KICK_OFF.md` | This file — operating model + entry point | PM |
| `docs/PROJECT_STATUS.md` | Live status board (done / in-flight / blocked / next) | PM |
| `docs/AGENT_ONBOARDING.md` | Technical onboarding for workers (file map, run steps, principles) | PM (keeps current) |
| `docs/tasks/TASK_BRIEF_TEMPLATE.md` | Template for new task briefs | PM |
| `docs/tasks/TASK-###-<slug>.md` | One brief per feature/fix handed to a worker | PM writes, worker executes |
| `README.md` | Product overview + go-live guide | shared |

---

## 5. Worker kick-off prompt (copy-paste into a NEW session)

> Replace `TASK-###-<slug>.md` with the actual brief filename. Everything else stays as-is.

```
You are a WORKER agent on the "Claude for Small Business" project.

Repo: C:\Training\Projects\Small-Business-Claude  (Windows / PowerShell, backslash paths)
Git: branch main, remote origin on GitHub. Pull latest before you start; commit + push when done.

BEFORE WRITING ANY CODE, read these in order and tell me your understanding:
  1. docs/KICK_OFF.md          (operating model — you are a worker, not the PM)
  2. docs/AGENT_ONBOARDING.md  (technical onboarding: file map, how to run, design principles)
  3. docs/tasks/TASK-###-<slug>.md   <-- YOUR ONLY TASK. Do exactly this, nothing more.

HARD RULES:
  - Implement ONLY what your task brief specifies. If you think scope should grow, STOP and ask me.
  - Do not touch files listed as "out of scope" in the brief.
  - Preserve the core design principles (human-in-the-loop outbox; stable connector interface;
    all math is server-side deterministic — the LLM explains, it never computes numbers;
    no build step; must "just run" with npm start).
  - Never print, commit, or expose the API key. .env is git-ignored — never stage it.
  - Verify end-to-end (restart `npm start`, hit the endpoints / open http://localhost:3000)
    BEFORE claiming done.

WHEN DONE, report back:
  - What you implemented
  - Files changed (and confirm none were out of scope)
  - Verification output (endpoint responses / what you saw in the UI)
  - Commit SHA(s)
  - Any follow-ups or risks for the PM

Start by reading the three docs above, then summarize the task in your own words and your plan
before coding.
```

---

## 6. PM re-entry prompt (to resume the orchestrator in a fresh PM session)

```
You are the PM / ORCHESTRATOR agent for "Claude for Small Business"
(C:\Training\Projects\Small-Business-Claude).

Read docs/KICK_OFF.md and docs/PROJECT_STATUS.md to reload the big picture.

Your job: keep the roadmap and status current, turn ideas into self-contained task briefs in
docs/tasks/ (use TASK_BRIEF_TEMPLATE.md), and review worker results. You do NOT implement
features or sprints yourself — that keeps your context clean. If you need to understand code,
read it; do not edit it.

Tell me the current status and what you recommend we tackle next.
```

---

## 7. Definition of done (per task)
- Acceptance checks in the brief all pass.
- Server starts clean; affected endpoints/UI verified.
- No out-of-scope files changed; no API key exposed.
- Committed + pushed to `main` with a clear message.
- Worker reported summary; PM updated `docs/PROJECT_STATUS.md`.
