# Agent Onboarding — Claude for Small Business

You are joining an in-progress project. Read this fully before doing anything.

## PROJECT
"Claude for Small Business" — a local, runnable full-stack web app that gives small-business
owners an AI copilot powered by the real Anthropic Claude API. It is inspired by Anthropic's
product of the same name (connectors + ready-to-run agentic workflows), but it is an
INDEPENDENT demo app, not Anthropic's actual product. It runs entirely on the user's Windows
machine.

## LOCATION & ENVIRONMENT
- Repo root: `C:\Training\Projects\Small-Business-Claude`
- Git: initialized, branch `main`, remote `origin` ->
  `https://github.com/rodolfolermacontreras/small-business-claude.git`. Commit + push after each
  verified change.
- OS: Windows. Use PowerShell and Windows-style backslash paths.
- Runtime: Node.js v24 (ES modules, `"type":"module"`), no build step.
- **IMPORTANT npm quirk:** the user's global npm registry is a Microsoft private feed that
  requires auth and fails with E401. This project has a local `.npmrc` pointing at
  `https://registry.npmjs.org/` so `npm install` works. Keep that `.npmrc`; if installs fail,
  add `--registry=https://registry.npmjs.org/`.

## HOW TO RUN
```powershell
cd C:\Training\Projects\Small-Business-Claude
npm install        # first time only
npm start          # starts server on http://localhost:3000
```
Health check: `GET http://localhost:3000/api/health` -> `{"ok":true,...}`

The user's Claude API key is already in `.env` (`ANTHROPIC_API_KEY`). `CLAUDE_MODEL` is currently
`claude-haiku-4-5-20251001` (fast/cheap for testing; swap to a Sonnet model for harder reasoning).
**NEVER print, commit, or share the key.** `.env` is git-ignored.

## FILE MAP — read these in this order to get oriented
1. `README.md` — full overview, run steps, go-live guide, API reference
2. `server/index.js` — Express server + all API routes (chat, outbox, config, health, reset)
3. `server/agent.js` — the agentic loop: sends convo to Claude, executes tool calls, feeds
   results back, loops until final answer. System prompt lives here.
4. `server/tools.js` — 15 tool definitions (Anthropic tool-use schema) + dispatcher mapping
   tool name -> connector/action function
5. `server/connectors/index.js` — mock QuickBooks/PayPal/HubSpot/Inventory read functions + the
   human-in-the-loop "outbox" (draft actions that need owner approval before they'd send)
6. `server/optimizer.js` — dependency-free demand forecast + reorder math (seasonal index +
   moving average). All inventory numbers are computed here, server-side.
7. `server/workflows.js` — the 7 ready-to-run workflow prompts (id, title, icon, category, prompt)
8. `server/data/*.json` — mock business data (`quickbooks.json`, `paypal.json`, `hubspot.json`,
   `inventory.json`) for a fictional coffee roaster "Riverside Roasters". These mimic real API shapes.
9. `public/index.html` — owner-facing UI (dashboard + 3 panes: connectors+workflows sidebar, chat, approvals)
10. `public/app.js` — frontend logic (calls the API, renders dashboard, chat markdown, workflow cards, outbox)
11. `public/styles.css` — styling (warm palette, high-contrast slate dark mode)

## ARCHITECTURE / DATA FLOW
```
UI (public/app.js) -> POST /api/chat {message | workflowId}
  -> server/index.js getSession() -> runAgent() in agent.js
  -> Claude decides to call tools (e.g. qb_list_invoices) -> tools.js runTool() -> connectors/index.js
  -> results fed back to Claude -> Claude writes final answer + may call draft_* / create_report,
     which QUEUE items into the in-memory `outbox` (nothing is actually sent/paid)
  -> UI shows the reply, the tool steps, and pending drafts in "Needs your approval"
  -> POST /api/outbox/:id/approve marks a draft approved (this is where real send/pay logic would go)
```

## KEY DESIGN PRINCIPLES (preserve these)
- **Human-in-the-loop:** anything that would send/post/pay MUST go through a `draft_*`/`create_report`
  tool and land in the outbox. The agent must never claim it actually sent something.
- **Connector interface stability:** to go live, replace a mock function body in
  `connectors/index.js` with a real authenticated API call WITHOUT changing the tool interface.
  See README "Going live".
- **No build step**, dependency-light, must "just run" with `npm start`.

## CURRENT STATE (verified working end-to-end)
- Health, `/api/config`, `/api/chat` (tool-use), `/api/outbox`, approve, `/api/reset`,
  `/api/metrics`, `/api/inventory` all work.
- 4 connectors (QuickBooks, PayPal, HubSpot, Inventory/Warehouse), 15 tools, 7 workflows.
- Dashboard: KPI tiles + campaign ROI + cash sparkline + inventory outlook card (collapsible).
- Inventory optimizer: 24 months of mock sales history -> seasonal forecast + reorder plan;
  BAG-12 flags `reorder_now`; POs draft into the approval outbox via the 📦 workflow.
- State is IN-MEMORY only (sessions + outbox reset on server restart). No DB yet.

## ROADMAP / BACKLOG (see docs/PROJECT_STATUS.md for the live version)
- SQLite persistence for chats + outbox (survive restarts).
- Wire a REAL connector (e.g. live email send on approval, real PayPal/QuickBooks/Google Workspace).
- Better forecast models (Holt-Winters / trend) behind the same `inv_optimize` tool interface.
- More workflows: tax-season organizer, contract reviewer, margin analyzer.
- Add streaming responses / SSE to the chat UI.
> Do NOT start a backlog item without a task brief from the PM. See docs/KICK_OFF.md.

## GROUND RULES
- Windows/PowerShell, backslash paths. Keep the local `.npmrc`.
- Make surgical changes; verify by restarting `npm start` and hitting the endpoints / opening
  http://localhost:3000 before claiming done.
- Do not expose or commit the API key.

Start by reading `README.md`, `server/index.js`, `server/agent.js`, and `server/tools.js`, then
tell me what you understand and what you'd change for the task given next.
