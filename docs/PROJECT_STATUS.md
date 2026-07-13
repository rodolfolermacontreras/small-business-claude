# Project Status — Small-Business-Claude

Last updated: 2026-07-10

## Current Snapshot

- **Current implementation:** a working local, single-user demo with the Anthropic API and a
  plain-JavaScript UI. Local SQLite persists chat sessions and approval-outbox drafts.
- **Future target:** hosted SaaS for real small-business owners. The approved beachhead
  direction is inventory-based businesses in El Paso, Texas, and Ciudad Juarez, Mexico,
  beginning with coffee shops and flooring, wall-material, and related
  building/interior-finish wholesalers. This target is not built or committed to the backlog.
- **Immediate gate:** customer discovery must validate the beachhead problem,
  first-customer profile, shared MVP jobs, source systems, language needs, and willingness
  to pay before product backlog commitment or implementation. Discovery is incomplete.

The demo has exactly seven ready-to-run workflows and exactly four mock connector domains:
QuickBooks, PayPal, HubSpot, and inventory.

## Current API Routes

Exactly eight routes are implemented:

| Method | Route |
|--------|-------|
| GET | `/api/health` |
| GET | `/api/config` |
| GET | `/api/metrics` |
| GET | `/api/outbox` |
| GET | `/api/inventory` |
| POST | `/api/outbox/:id/approve` |
| POST | `/api/chat` |
| POST | `/api/reset` |

## Historical Completion Evidence

The following table records past completed work and commit evidence. It is historical evidence,
not current operating instructions or authorization for new work.

| # | Item | Commit |
|---|------|--------|
| 1 | Initial full-stack demo (chat, tool-use loop, outbox, 3 connectors) | `e1e72b0` |
| 2 | UI polish: dark mode, toasts, approval count badge, approve-all | `9ad0977` |
| 3 | Dark mode fix: high-contrast slate palette | `9263ff4` |
| 4 | Dashboard: KPI tiles + campaign ROI via `/api/metrics` | `e400a1b` |
| 5 | Dashboard: collapsible overview + cash-movement sparkline | `bf2e711` |
| 6 | Inventory optimizer: forecast + reorder plan (`/api/inventory`, inventory workflow, dashboard card) | `cd5bccc` |
| 7 | TASK-001: SQLite persistence for chat sessions + approval outbox (built-in `node:sqlite`, survives restart) | `8008c02` |

## Protected Product Invariants

- Anything that would send, post, pay, or place an order remains a draft in the approval
  outbox until explicit owner approval; approval currently produces no real external side
  effect.
- The connector/tool contract remains stable unless separately specified and approved.
- Financial, inventory, and optimization calculations remain deterministic server-side
  operations. The model may explain them but must not invent or replace them.
- Secrets remain only in `.env` and never enter Git, logs, evidence, or browser code.

## Git Policy and Enforcement State

`main` is protected by policy. Changes use short-lived branches and may enter `main` only by
pull request after required checks pass. Direct commits to `main` are prohibited.

Git-hosting branch protection, host tests, continuous integration, and required pull-request
checks are not configured or mechanically validated. Compliance is procedural; Sprint 2 owns
mechanical enforcement if separately authorized.

## Sprint 2 Readiness Deferrals

- Select and add an `npm test` host runner plus an automated `GET /api/health` smoke test.
- Add host CI and required pull-request checks.
- Mechanically validate the owner-approved Node.js `>=24` runtime policy and align package
  metadata. `package.json` remains `>=18`; policy is not validation evidence.
- Make state-builder and doctor behavior host-aware.
- Verify ledger and work-index behavior.
- Complete a clean-clone final-readiness rehearsal.

## Readiness Boundaries

The working local demo is not evidence of full SDD, CI, runtime, clean-clone, or automated
branch-protection readiness. Those claims remain denied until the deferred checks pass. Customer
discovery is incomplete, and hosted SaaS is neither complete nor committed for implementation.
