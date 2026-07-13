---
version: '1.1.0'
ratified: 2026-07-09
last_amended: 2026-07-10
amendment_authority: 'Rodolfo Lerma (Level 2 human owner)'
amendment_record: 'PI-1-S1-R1-T07-CONSTITUTION-AMENDMENT-AUTHORIZATION-2026-07-10'
proposal: false
---

# Roadmap

## Adoption Roadmap

- Run one small feature or refactor through SDD before broad rollout.
- Measure friction and capture missing skills or conventions as lesson-capture candidates.

## Current Product Baseline

- The working local, single-user demo has seven ready-to-run workflows.
- Local SQLite persistence for chat sessions and the approval outbox is implemented; it is
  current baseline functionality, not future roadmap work.
- QuickBooks, PayPal, HubSpot, and inventory remain mock connector domains.
- The approval-outbox, stable connector/tool contract, deterministic server-side
  calculations, and `.env`-only secret handling remain product invariants.

## Product Direction and Gate

- The future target is hosted SaaS for real small-business owners, beginning with the
  approved inventory-business beachhead direction in El Paso, Texas, and Ciudad Juarez,
  Mexico.
- Customer discovery must validate the beachhead problem, first-customer profile, shared
  MVP jobs, source systems, language needs, and willingness to pay before product backlog
  commitment or implementation.
- The target is not built, the discovery gate has not passed, and this roadmap does not
  commit authentication, tenancy, live connectors, billing, cloud, or other product
  features.

## Deferred Sprint 2 Readiness Mechanics

Sprint 2, if separately authorized, owns mechanical readiness work: selecting and adding a
test runner and first automated health smoke test, adding host CI, mechanically validating
the Node.js `>=24` policy and aligning package metadata if validation supports it, making
state-builder/doctor behavior host-aware, verifying ledger/work-index behavior, and running
a clean-clone rehearsal. None of these mechanics is implemented or validated by this
roadmap amendment.
