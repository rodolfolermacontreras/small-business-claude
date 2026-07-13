---
version: '1.0.0'
ratified: 2026-07-09
last_amended: 2026-07-09
proposal: true
---

# Quality Policy

## Existing Quality Signals

### Test Frameworks

- None yet. No test runner is configured. Establishing one is the intended SDD pilot.
### CI Systems

- None. No CI quality gates today.
### Convention Files

- No linter or formatter configured.
## Proposed Brownfield Quality Rule

All SDD work must preserve the existing quality baseline. Workers may add focused tests for their scope, but they must not reorganize unrelated tests, linting, or formatting.

## Verification Commands

- Run: `npm start` (node server/index.js); dev: `npm run dev` (--watch).
- Test / lint / typecheck / build: none configured yet.
- Baseline to preserve: the app boots and serves http://localhost:3000, and `GET /api/health` returns key + model status.
