---
id: PI-1-S1-BOARD
type: sprint
status: blocked
owner: principal-product-manager
updated: 2026-07-10
---

# PI-1 Sprint 1 Readiness Baseline Board

**Sprint status: PROPOSED — BLOCKED ON OWNER APPROVAL**

No work may move to In Progress until the owner explicitly disposes all five policy items and the project Executive Manager records explicit Sprint 1 start authorization. The Principal Architect's `SPEC.md` (`RB-001` through `RB-025`) and the Principal Software Developer's `TASKS.md` (`R1-T01` through `R1-T20`, with per-task S/M/L effort sizing) exist and complete the package for handoff; they do not authorize execution. No mutating task may start before approval.

## State Legend

- **Blocked/Pending:** waiting for a required decision.
- **Not Started:** in proposed scope, with no execution begun.
- **In Progress:** allowed only after the complete owner gate passes and the existing specification and 20-task decomposition are confirmed aligned with the recorded decision.
- **Acceptance Review:** implementation evidence is ready for Product Manager verification.
- **Done:** all linked acceptance evidence passed; completion date must be retained.

## Board

| ID | Outcome | Owner role | State | Dependency | Evidence required |
|----|---------|------------|-------|------------|-------------------|
| R1 | Record disposition of every owner policy-bundle item and explicit Sprint 1 start authorization | Project Executive Manager / Human owner | **Blocked/Pending** | None | Dated approve/reject/amend record for all five items; explicit start authorization |
| R2 | Establish a reproducible, evidence-preserving Git baseline | Principal Software Developer | Not Started | R1; approved `SPEC.md`; `TASKS.md` | Exact baseline commit; before/after Git status; retained-asset inventory; approved cleanup disposition; reproduction steps |
| R3 | Reconcile authoritative current-demo, hosted-target, and customer-discovery-gate identity | Principal Product Manager + Principal Architect | Not Started | R1; approved `SPEC.md` | Source matrix; governed change record; consistency scan; explicit statement that discovery and SaaS implementation are not complete |
| R4 | Establish one consistent active Git operating policy | Principal Architect | Not Started | R1; R3 where authoritative instructions overlap | Owner-approved policy; active-source inventory; contradiction scan across instructions, constitution, agents, and skills |
| R5 | Establish a host-valid active agents, skills, and roster set | Principal Architect + Principal Software Developer | Not Started | R1; R4; approved `TASKS.md` | Active/inactive disposition inventory; path-level evidence; mismatch scan showing no incompatible stack or Git rules in active guidance |
| R6 | Publish the bounded Sprint 2 readiness exit contract | Principal Product Manager | Not Started | R2-R5 evidence | Entry criteria; allowed Sprint 2 scope; required inputs; deferred risks; explicit no-Sprint-2-readiness claim |
| R7 | Verify Sprint 1 acceptance outcomes AO-01 through AO-08 | Principal Product Manager | Not Started | R1-R6 complete | PASS/FAIL/PARTIAL matrix with direct evidence; all PASS required to close |
| R8 | Produce and hand up the sprint-close or blocked escalation report | Sprint Executive Manager | Not Started | R7 for close, or any stop condition for escalation | Completed `REPORT_UP_TEMPLATE.md` structure; handoff date and project Executive Manager acknowledgment |

## Owner Policy Bundle Pending at R1

1. Protected `main` with short-lived branches and PR checks.
2. Node.js `>=24` runtime policy.
3. Governed authoritative distinction between current local demo, hosted SaaS target, and customer-discovery gate.
4. Delete stale root `AGENT_ONBOARDING.md` in favor of `docs/AGENT_ONBOARDING.md`.
5. Remove `.sdd-archaeology.json`, `.sdd-proposal/`, and `CON` after preserving needed evidence.

None is approved by this board.

## Scope Guard

If a proposed action touches application product features, application code, SaaS foundation, customer-discovery conclusions, tests/CI implementation, state-builder/doctor implementation, global backlog content, or broad refactoring, stop and route it to the project Executive Manager and Product Manager. It is not a Sprint 1 board item.
