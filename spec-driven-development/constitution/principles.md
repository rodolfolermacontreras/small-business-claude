---
version: '2.0.0'
ratified: 2026-07-09
last_amended: 2026-07-10
amendment_authority: 'Rodolfo Lerma (Level 2 human owner)'
amendment_record: 'PI-1-S1-R1-T08-GIT-QUALITY-GOVERNANCE-AUTHORIZATION-2026-07-10'
proposal: false
---

# Principles

Framework Articles I-X are inherited from SDD. The host-specific articles below are
ratified host policy.

- H1: Brownfield changes must preserve existing conventions unless an approved spec explicitly changes them.
- H2: Worker agents must use the respect-existing skill before modifying host code.
- H3: Secrets (ANTHROPIC_API_KEY and any connector keys) live only in `.env` and are never committed.
- H4: `main` is protected. Changes must use short-lived branches and enter `main` only
	through pull requests whose required checks pass. Direct commits to `main` are not
	permitted.
- H5: Any action that sends, posts, or pays stays behind the outbox approval gate; nothing goes out without explicit owner approval.
- H6: Financial, inventory, and optimization calculations remain deterministic
	server-side operations. The model may explain results but must not invent or replace
	calculations.
- H7: Readiness and completion claims must cite direct host evidence. Copied framework
	tests, examples, or generated status do not prove host readiness.

## Current Enforcement State

H4 is governing policy now. Git-hosting branch protection, pull-request checks, host
tests, and continuous integration are not configured by this amendment; their
implementation and mechanical validation are deferred to a separately authorized Sprint
2. Until enforcement exists, every operator and agent must follow H4 procedurally and
must not represent the policy as an automated control.

## Amendment Note

Version 2.0.0 replaces the former direct-to-`main` principle and adds explicit
deterministic-evidence safeguards under the owner-authorized R1-T08 amendment. Brownfield,
secret-handling, and approval-outbox safeguards remain in force.
