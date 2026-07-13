---
version: '1.1.0'
ratified: 2026-07-09
last_amended: 2026-07-10
amendment_authority: 'Rodolfo Lerma (Level 2 human owner)'
amendment_record: 'PI-1-S1-R1-T08-GIT-QUALITY-GOVERNANCE-AUTHORIZATION-2026-07-10'
proposal: false
---

# Quality Policy

## Existing Quality Signals

### Test Frameworks

- None for the host application. No host test runner or `npm test` script is configured.
### CI Systems

- None for the host application. No host continuous-integration workflow, required
	pull-request check, or automated branch-protection enforcement is configured.
### Convention Files

- No linter or formatter configured.

Copied SDD framework tests validate framework utilities only within their stated scope.
They do not test the Node.js/Express host application and must not be cited as evidence of
host test readiness, CI readiness, runtime compatibility, or overall host readiness.

## Brownfield Quality Rule

All SDD work must preserve the existing quality baseline. Workers may add focused tests for their scope, but they must not reorganize unrelated tests, linting, or formatting.

The approval outbox must continue to gate send, post, pay, and order actions. Secrets must
remain in `.env` and must never enter logs, evidence, browser output, or Git. Connector/tool
contracts must remain stable unless separately specified and approved. Financial,
inventory, and optimization results must remain deterministic server-side calculations;
model explanations must not replace calculations.

## Pull-Request Quality Policy

Changes must use short-lived branches and enter protected `main` only through pull
requests after all required checks pass. The required host checks must be defined and
implemented in a separately authorized Sprint 2. This amendment documents policy only;
it does not create tests, CI, checks, workflows, or Git-hosting protection.

Until automated checks exist, review evidence must be deterministic, scoped to the
authorized files, reproducible from documented commands, and explicit about anything not
validated. Absence of a configured check is a deferred control, never a passing result.

## Verification Commands

- Run: `npm start` (node server/index.js); dev: `npm run dev` (--watch).
- Test / lint / typecheck / build: none configured yet.
- Baseline to preserve: the app boots and serves http://localhost:3000, and `GET /api/health` returns key + model status.

These are documented manual observations, not an automated host quality gate. Sprint 2,
if separately authorized, owns test-runner selection, an automated health smoke test,
host CI, required pull-request checks, and mechanical validation of the supported Node.js
runtime policy.

## Amendment Note

Version 1.1.0 adds the owner-approved Git quality policy and explicit evidence boundaries
without claiming enforcement exists. Brownfield and product-safety safeguards remain in
force.
