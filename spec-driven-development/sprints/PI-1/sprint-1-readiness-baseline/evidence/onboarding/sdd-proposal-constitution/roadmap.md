---
version: '1.0.0'
ratified: 2026-07-09
last_amended: 2026-07-09
proposal: true
---

# Roadmap

## Adoption Roadmap

- Review `.sdd-archaeology.json` and this staged proposal with the project owner.
- Run one small feature or refactor through SDD before broad rollout.
- Measure friction and capture missing skills or conventions as lesson-capture candidates.

## Current Repository Signals

- Commit count: 9
- Current branch: main
- Last commit date: 2026-07-09

## Product Roadmap

- Add SQLite persistence for sessions and the outbox (currently in-memory, reset on restart).
- Replace mock connectors with real OAuth calls (QuickBooks, PayPal, HubSpot).
- Wire real "send" logic into `POST /api/outbox/:id/approve` so approvals actually fire.
- Add a test runner and a first smoke test as the SDD pilot feature.
