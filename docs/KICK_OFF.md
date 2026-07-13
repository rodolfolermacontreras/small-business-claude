# Kick-Off — Small-Business-Claude Operating Model

This is the concise entry point for assigning and executing bounded work.

## Product Context

Keep three layers distinct:

1. **Current implementation:** a working local, single-user demo with the Anthropic API, a
   plain-JavaScript UI, and local SQLite persistence for chat sessions and approval-outbox
   drafts. It has exactly seven ready-to-run workflows and exactly four mock domains:
   QuickBooks, PayPal, HubSpot, and inventory.
2. **Future target:** hosted SaaS for real small-business owners, with an approved beachhead
   direction of inventory-based businesses in El Paso, Texas, and Ciudad Juarez, Mexico,
   beginning with coffee shops and flooring, wall-material, and related
   building/interior-finish wholesalers. The target is not built or committed to the backlog.
3. **Immediate gate:** customer discovery must validate the beachhead problem,
   first-customer profile, shared MVP jobs, source systems, language needs, and willingness
   to pay before product backlog commitment or implementation. Discovery is incomplete.

No role may claim customer validation or SaaS completion.

## Roles and Handoff

- **Executive Manager:** human-facing routing, status, and escalation.
- **Product Manager:** backlog, priorities, acceptance criteria, and self-contained briefs.
- **Architect:** approved technical decisions, specifications, and pattern governance.
- **Software Developer:** translates approved specifications into bounded tasks, dispatches
  workers, and integrates reviewed work.
- **Worker:** executes one assigned brief within its exact allowlist and reports evidence.

The lifecycle is:

`IDEA -> BACKLOG -> CLARIFY -> SPEC -> PLAN -> TASKS -> IMPLEMENT -> REVIEW -> DONE`

One worker receives one self-contained task. The brief must provide the task, acceptance
criteria, constraints, exact file allowlist, and authorized validation. Overlapping file scopes
run sequentially. Workers stop rather than broaden scope when a blocker requires another file,
dependency, schema, contract, permission, or architecture decision.

## Current API Contract

The demo exposes exactly eight routes:

- `GET /api/health`
- `GET /api/config`
- `GET /api/metrics`
- `GET /api/outbox`
- `GET /api/inventory`
- `POST /api/outbox/:id/approve`
- `POST /api/chat`
- `POST /api/reset`

## Protected Product Invariants

- Anything that would send, post, pay, or place an order stays as a draft in the approval
  outbox pending explicit owner approval; approval currently has no real external side effect.
- The connector/tool contract stays stable unless separately specified and approved.
- Financial, inventory, and optimization calculations stay deterministic and server-side;
  the model may explain them but cannot invent or replace them.
- Secrets stay only in `.env` and never enter Git, logs, evidence, or the browser.

## Git Policy

`main` is protected by policy. Authorized changes use short-lived branches and may enter
`main` only through a pull request after required checks pass. Direct commits to `main` are
prohibited. This policy does not itself authorize branch changes, staging, commits, pushes,
pull requests, merges, or rebases.

Git-hosting branch protection, host tests, continuous integration, and required pull-request
checks are not configured or mechanically validated. Compliance is procedural. Sprint 2 owns
enforcement work if separately authorized.

## Sprint 2 Readiness Deferrals

- Select and add an `npm test` host runner and an automated `GET /api/health` smoke test.
- Add host CI and required pull-request checks.
- Mechanically validate the owner-approved Node.js `>=24` policy and align package metadata;
  `package.json` remains `>=18`, and the policy statement is not validation evidence.
- Make state-builder and doctor host-aware.
- Verify ledger and work-index behavior.
- Run a clean-clone final-readiness rehearsal.

Until these checks pass, the repository is not fully ready for SDD execution, CI, validated
runtime alignment, clean-clone use, or automated branch-protection enforcement.

## Worker Handoff

Before editing, the worker reads this file, `docs/AGENT_ONBOARDING.md`, and the assigned brief.
The worker then:

1. confirms the exact allowlist and checks for overlap;
2. makes the smallest authorized change while preserving current contracts;
3. performs only the validation authorized by the brief;
4. reports summary, every changed file, observed validation, unavailable checks, and concerns.

No readiness, test, CI, customer-discovery, or SaaS-completion claim may exceed direct evidence.
