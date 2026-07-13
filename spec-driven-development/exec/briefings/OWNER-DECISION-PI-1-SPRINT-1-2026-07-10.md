---
id: PI-1-S1-OWNER-DECISION-2026-07-10
type: owner-decision
date: 2026-07-10
authority: level-2-human-owner
owner: Rodolfo Lerma
status: approved-and-authorized
supersedes: null
---

# PI-1 Sprint 1 Owner Decision

## Decision Authority and Source

On 2026-07-10, human owner Rodolfo Lerma responded to the PI-1 Sprint 1 owner gate:

> Go for the recommended option.

The immediately preceding decision request defined the recommended option as approval of all five policy items and explicit authorization for PI-1 Sprint 1 to start. This record is the authoritative dated Level 2 disposition of that owner decision.

## Policy Dispositions

| Item | Disposition | Approved policy |
|---|---|---|
| 1 | **APPROVED** | Protected `main` with short-lived branches and PR checks. |
| 2 | **APPROVED** | Node.js `>=24` policy, with mechanical validation deferred to Sprint 2. |
| 3 | **APPROVED** | Governed distinction among the current local demo, the hosted SaaS target, and the customer-discovery gate. |
| 4 | **APPROVED** | Delete the stale root `AGENT_ONBOARDING.md` in favor of `docs/AGENT_ONBOARDING.md`, while preserving evidence. |
| 5 | **APPROVED** | Remove `.sdd-archaeology.json`, `.sdd-proposal/`, and `CON` after preserving needed evidence. |

## Sprint Authorization

**PI-1 Sprint 1 Readiness Baseline is explicitly AUTHORIZED TO START**, subject to the existing `SPEC.md`, `TASKS.md`, non-goals, governance, evidence-preservation, and per-action Git authorization constraints.

This authorization satisfies the Level 2 owner-decision portion of the Sprint 1 start gate. It does not waive any remaining Principal-owned readiness, coordination, sequencing, verification, or evidence requirements in the approved sprint package.

## Explicit Exclusions

This decision does **not** authorize:

- Sprint 2;
- application or product work;
- broad cleanup beyond the specifically approved, evidence-preserving dispositions above;
- a commit, push, or merge;
- staging any files;
- bypassing Principal ownership, review, or governance;
- worker dispatch by the project Executive Manager; or
- any action outside the existing Sprint 1 specification, task plan, non-goals, protected surfaces, and per-action Git authorization constraints.

Any commit, push, merge, or other separately governed Git action requires its own applicable authorization. Any proposed expansion or change to Sprint 1 scope must return through the governing Principal and owner gates.

## Required Routing

The next routing is to the **Principal Software Developer** to verify the remaining Sprint 1 start conditions, assume ownership of execution sequencing, and coordinate the authorized Sprint 1 work within `SPEC.md` and `TASKS.md`. The Principal Software Developer must not infer authorization for staging, committing, pushing, merging, Sprint 2, application/product work, broad cleanup, or bypassing other Principal ownership from this record.
