---
version: '2.0.0'
ratified: 2026-07-09
last_amended: 2026-07-10
amendment_authority: 'Rodolfo Lerma (Level 2 human owner)'
amendment_record: 'PI-1-S1-R1-T08-GIT-QUALITY-GOVERNANCE-AUTHORIZATION-2026-07-10'
proposal: false
---

# Decision Policy

## Decision Policy

- Use existing project decision records if present; otherwise introduce ADRs only for new SDD-era decisions.
- Do not rewrite previous decisions during adoption. Document observed practice first.
- Escalate out-of-scope architectural changes to the Architect before implementation.
- Preserve direct evidence and distinguish observed, approved, implemented, validated,
	and deferred states. Copied framework evidence must not be used to assert host
	readiness.

## Git Operating Policy

- `main` is the protected integration and production branch. Direct commits to `main`
	are prohibited.
- Every change must be developed on a short-lived branch scoped to authorized work.
- Changes may enter `main` only through a pull request after all required checks pass.
- Staging, committing, pushing, opening a pull request, merging, rebasing, creating a
	branch, or creating a worktree still requires the applicable task and owner authority;
	this policy does not itself authorize those actions.
- Historical or reference-only Git examples may remain when visibly inactive, but
	`master`, `integration/improvements`, direct-to-`main`, and mandatory-worktree language
	must not be treated as active host policy.

## Policy Versus Enforcement

This document establishes the governing policy. Git-hosting branch protection,
pull-request checks, host tests, and continuous integration are not currently configured.
Implementing and mechanically validating those controls is deferred to a separately
authorized Sprint 2. Until then, compliance is procedural and must not be described as
automated enforcement or proof of readiness.

## Amendment Note

Version 2.0.0 replaces the former direct-to-`main` decision policy under the
owner-authorized R1-T08 amendment. Existing decision history remains evidence and is not
rewritten by this policy change.
