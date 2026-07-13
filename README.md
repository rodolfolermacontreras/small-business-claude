# Claude for Small Business

A working local, single-user small-business AI copilot demo, inspired by Anthropic's
*Claude for Small Business*. It runs on the owner's computer, uses the Anthropic API, and
provides a plain-JavaScript web UI for non-technical business owners.

> This is an independent demo app — not Anthropic's product. It shows how the same *kind*
> of agentic workflows work with mock QuickBooks, PayPal, HubSpot, and inventory data.

## Product direction and gate

- **Current implementation**: local, single-user demo with seven workflows, eight API
  routes, four mock connector domains, and local SQLite persistence for sessions and the
  approval outbox.
- **Future target**: hosted SaaS for real small-business owners. The approved beachhead
  direction is inventory-based businesses in El Paso, Texas, and Ciudad Juarez, Mexico,
  beginning with coffee shops and flooring, wall-material, and related
  building/interior-finish wholesalers.
- **Immediate gate**: customer discovery must validate the beachhead problem,
  first-customer profile, shared MVP jobs, source systems, language needs, and willingness
  to pay before backlog commitment or product implementation. Discovery is not complete,
  and the hosted SaaS is not yet built or committed.

![screenshot](docs-placeholder)

## What it does

- **Chat** with an AI copilot that pulls mock business data through server tools before
  answering.
- **7 ready-to-run workflows**: chase overdue invoices, plan payroll, close the month,
  business pulse, campaign planner, lead triage, and inventory optimization/reordering.
- **Human-in-the-loop**: anything that would send, post, pay, or place an order is
  *drafted* and queued in the **Needs your approval** panel. Nothing is approved
  automatically, and the current demo does not execute external side effects.
- **Connector layer** for QuickBooks, PayPal, HubSpot, and inventory, with mock data shaped
  to support later live integrations while preserving the connector/tool contract.
- **Deterministic server calculations** for dashboard metrics and inventory optimization;
  the model explains outputs but does not replace the calculation logic.
- **Local SQLite persistence** for chat sessions and approval-outbox drafts across restarts.

## Quick start

Node.js >= 24 is the approved runtime policy. Mechanical compatibility validation and
alignment of package metadata are deferred to Sprint 2; this statement does not claim that
validation has occurred.

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

> Never commit `.env` or share your key. Secrets must not be logged or exposed to the
> browser. If a key is ever exposed, rotate it at
> https://console.anthropic.com/settings/keys .

## How it's built

The demo runs on Node.js with Express 5 and ES modules, uses the Anthropic SDK, and serves
plain HTML, CSS, and JavaScript without a build step.

```
public/            Web UI (owner cockpit) — HTML/CSS/JS, no build step
server/
  index.js         Express server + API routes
  agent.js         Agentic loop: Claude <-> tool calls
  tools.js         Tool definitions Claude can call + dispatcher
  workflows.js     The 7 ready-to-run workflow prompts
  db.js            Local SQLite sessions + approval outbox
  connectors/
    index.js       QuickBooks / PayPal / HubSpot / inventory connector contract
  data/*.json      Mock business data for the four connector domains
```

**Agent flow:** UI → `/api/chat` → `runAgent()` sends the conversation to Claude with the
tool list → Claude calls tools (e.g. `qb_list_invoices`) → server runs them and feeds
results back → Claude writes the final answer and queues any drafts for approval.

## Going live with real connectors

Connector reads return local mock data today. A future live integration must preserve the
existing connector/tool contract unless a separately approved specification changes it.
For example, a mock read could later use an authenticated provider API:

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

The approval boundary is invariant: send, post, payment, and purchase-order effects must
remain behind explicit owner approval. Live side effects and additional connector domains
require separately approved product and technical scope.

## API reference

| Method | Route | Purpose |
|--------|-------|---------|
| GET  | `/api/health` | Key + model status |
| GET  | `/api/config` | Workflows + connector status |
| GET  | `/api/metrics` | Deterministic dashboard business metrics |
| GET  | `/api/inventory` | Deterministic inventory forecast + reorder plan |
| POST | `/api/chat` | Run a message or `{ workflowId }` |
| GET  | `/api/outbox` | List pending/approved drafts |
| POST | `/api/outbox/:id/approve` | Approve a draft |
| POST | `/api/reset` | Clear a chat session |

## Notes

- Sessions and approval-outbox items persist locally in SQLite across restarts.
- Model is configurable via `CLAUDE_MODEL`; use a bigger model (e.g. Sonnet) for tougher reasoning.
