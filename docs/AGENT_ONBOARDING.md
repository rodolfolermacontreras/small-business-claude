# Agent Onboarding — Small-Business-Claude

Use this concise technical baseline before executing an approved task brief.

## Product Layers

1. **Current implementation:** a working local, single-user demo on the owner's machine. It
   uses the Anthropic API, a plain-JavaScript browser UI, and local SQLite persistence for
   chat sessions and approval-outbox drafts.
2. **Future target:** a hosted SaaS product for real small-business owners. The approved
   beachhead direction is inventory-based businesses in El Paso, Texas, and Ciudad Juarez,
   Mexico, beginning with coffee shops and flooring, wall-material, and related
   building/interior-finish wholesalers. This target is not built or committed to the backlog.
3. **Immediate gate:** customer discovery must validate the beachhead problem,
   first-customer profile, shared MVP jobs, source systems, language needs, and willingness
   to pay before product backlog commitment or implementation. Discovery is incomplete.

Do not claim customer validation or SaaS completion.

## Current Technical Baseline

- ES modules, Express 5, `@anthropic-ai/sdk`, `dotenv`, built-in `node:sqlite`, and plain
  HTML/CSS/JavaScript; no build step.
- Exactly seven ready-to-run workflows.
- Exactly four mock connector domains: QuickBooks, PayPal, HubSpot, and inventory.
- Exactly eight API routes:
  - `GET /api/health`
  - `GET /api/config`
  - `GET /api/metrics`
  - `GET /api/outbox`
  - `GET /api/inventory`
  - `POST /api/outbox/:id/approve`
  - `POST /api/chat`
  - `POST /api/reset`

## File Map

- `server/index.js`: Express server and API routes.
- `server/agent.js`: Anthropic agent loop.
- `server/tools.js`: tool definitions and dispatcher.
- `server/workflows.js`: seven ready-to-run workflow prompts.
- `server/db.js`: local SQLite sessions and approval-outbox drafts.
- `server/optimizer.js`: deterministic inventory calculations.
- `server/connectors/index.js`: connector contract and mock implementations.
- `server/data/*.json`: mock data for the four connector domains.
- `public/index.html`, `public/styles.css`, `public/app.js`: no-build browser UI.

## Protected Product Invariants

- Anything that would send, post, pay, or place an order remains a draft in the approval
  outbox until explicit owner approval; approval has no real external side effect today.
- The connector/tool contract remains stable unless a separately approved task changes it.
- Financial, inventory, and optimization calculations remain deterministic server-side
  operations. The model may explain results but must not invent or replace calculations.
- Secrets remain only in `.env` and never enter Git, logs, evidence, or browser code.

## Git and Work Rules

`main` is protected by policy. Use short-lived branches; changes may enter `main` only by a
pull request after required checks pass. Direct commits to `main` are prohibited. Git-hosting
branch protection, host tests, continuous integration, and required pull-request checks are
not configured or mechanically validated. Compliance is procedural until Sprint 2 implements
and validates enforcement. A task brief must explicitly authorize any Git mutation.

Make only the changes allowed by the assigned brief. Preserve brownfield conventions and the
invariants above. Never infer permission to stage, commit, push, merge, rebase, or alter a
branch.

## Sprint 2 Readiness Deferrals

The following work is deferred and requires separate authorization:

- select and add an `npm test` host runner plus an automated `GET /api/health` smoke test;
- add host CI and required pull-request checks;
- mechanically validate the owner-approved Node.js `>=24` runtime policy and align package
  metadata; `package.json` still declares `>=18`, and policy is not validation evidence;
- make state-builder and doctor behavior host-aware;
- verify ledger and work-index behavior;
- complete a clean-clone final-readiness rehearsal.

Until those checks pass, do not claim full SDD, CI, runtime, clean-clone, or automated
branch-protection readiness.
