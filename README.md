# Claude for Small Business (local, runnable)

A working small-business AI copilot, inspired by Anthropic's *Claude for Small Business*.
It runs on **your** computer, powered by the real Claude API, with a friendly web UI for
non-technical business owners.

> This is an independent demo app — not Anthropic's product. It shows how the same *kind*
> of agentic workflows work, using mock QuickBooks / PayPal / HubSpot data you can later
> swap for live accounts.

![screenshot](docs-placeholder)

## What it does

- **Chat** with an AI copilot that pulls **real data** via tools before answering.
- **6 ready-to-run workflows**: chase overdue invoices, plan payroll, close the month,
  business pulse, campaign planner, lead triage.
- **Human-in-the-loop**: anything that would send/post/pay is *drafted* and queued in the
  **Needs your approval** panel. Nothing goes out until you click Approve.
- **Connector layer** (QuickBooks / PayPal / HubSpot) with mock data that mirrors real API
  shapes — swap the JSON reads for live OAuth calls without changing the rest of the app.

## Quick start

```powershell
cd C:\Training\Projects\Small-Business-Claude
npm install                 # first time only
# put your key in .env  (see .env.example)
npm start
```

Then open **http://localhost:3000**.

### Configure your key

Copy `.env.example` to `.env` and set:

```
ANTHROPIC_API_KEY=sk-ant-api03-...     # your model API key
CLAUDE_MODEL=claude-haiku-4-5-20251001 # fast + cheap for testing
PORT=3000
```

> ⚠️ Never commit `.env` or share your key. If a key is ever exposed, rotate it at
> https://console.anthropic.com/settings/keys .

## How it's built

```
public/            Web UI (owner cockpit) — HTML/CSS/JS, no build step
server/
  index.js         Express server + API routes
  agent.js         Agentic loop: Claude <-> tool calls
  tools.js         Tool definitions Claude can call + dispatcher
  workflows.js     The 6 ready-to-run workflow prompts
  connectors/
    index.js       QuickBooks / PayPal / HubSpot + the approval "outbox"
  data/*.json      Mock business data (swap for real APIs)
```

**Agent flow:** UI → `/api/chat` → `runAgent()` sends the conversation to Claude with the
tool list → Claude calls tools (e.g. `qb_list_invoices`) → server runs them and feeds
results back → Claude writes the final answer and queues any drafts for approval.

## Going live with real connectors

Each connector function in `server/connectors/index.js` just returns JSON today. To use real
accounts, replace the body with an authenticated API call — the tool interface stays the same:

```js
// before (mock)
listInvoices: () => qb.invoices,

// after (real QuickBooks)
listInvoices: async () => {
  const r = await fetch(`https://quickbooks.api.intuit.com/v3/company/${realmId}/query?query=SELECT * FROM Invoice`,
    { headers: { Authorization: `Bearer ${accessToken}` } });
  return (await r.json()).QueryResponse.Invoice;
},
```

Same pattern for PayPal, HubSpot, Google Workspace, Docusign, etc. Add real "send" logic
inside the approve route (`POST /api/outbox/:id/approve`) so approval actually fires the email/payment.

## API reference

| Method | Route | Purpose |
|--------|-------|---------|
| GET  | `/api/health` | Key + model status |
| GET  | `/api/config` | Workflows + connector status |
| POST | `/api/chat` | Run a message or `{ workflowId }` |
| GET  | `/api/outbox` | List pending/approved drafts |
| POST | `/api/outbox/:id/approve` | Approve a draft |
| POST | `/api/reset` | Clear a chat session |

## Notes

- Sessions and the outbox are in-memory (reset on restart). Add SQLite for persistence.
- Model is configurable via `CLAUDE_MODEL`; use a bigger model (e.g. Sonnet) for tougher reasoning.
