---
version: '1.0.0'
ratified: 2026-07-09
last_amended: 2026-07-09
proposal: true
---

# Decision Policy

## Proposed Policy

- Use existing project decision records if present; otherwise introduce ADRs only for new SDD-era decisions.
- Do not rewrite previous decisions during adoption. Document observed practice first.
- Escalate out-of-scope architectural changes to the Architect before implementation.

## Branching Evidence

Detected branching model: single `main` branch.

Commit directly to `main`. No formal review or release process today (solo project).
Introduce ADRs only for new SDD-era decisions; do not rewrite existing history.
