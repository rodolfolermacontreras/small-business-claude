---
version: '1.0.0'
ratified: 2026-07-09
last_amended: 2026-07-09
proposal: true
---

# Principles

Framework Articles I-X are inherited from SDD. The host-specific articles below are proposed from observed repository evidence.

- H1: Brownfield changes must preserve existing conventions unless an approved spec explicitly changes them.
- H2: Worker agents must use the respect-existing skill before modifying host code.
- H3: Secrets (ANTHROPIC_API_KEY and any connector keys) live only in `.env` and are never committed.
- H4: Single `main` branch. Commits go directly to `main` (solo project, no PR flow yet).
- H5: Any action that sends, posts, or pays stays behind the outbox approval gate; nothing goes out without explicit owner approval.
## Human Review Required

Host articles H1-H5 confirmed against current practice. Revisit H4 if a branch/PR workflow is introduced.
