---
id: PI-1-S1-PLAN
type: plan
status: blocked
owner: principal-product-manager
updated: 2026-07-10
---

# PI-1 Sprint 1: Readiness Baseline

## Status

**PROPOSED — BLOCKED ON OWNER APPROVAL**

This plan records a proposed sprint boundary. The owner policy bundle in the decision gate below is pending. Principal-owned `SPEC.md` and `TASKS.md` now complete the readiness package for handoff, but they do not activate the sprint or approve any policy item. No mutating task, implementation, cleanup, commit, or dispatch may start until the project Executive Manager records the owner's disposition of all five policy items and explicit Sprint 1 start authorization.

## Sprint Goal

**Sprint 1 Goal:** Establish a reproducible and internally consistent project baseline that distinguishes the current local demo from the hosted SaaS target, aligns active operating guidance to this host, and leaves an explicit entry contract for Sprint 2 readiness work.

- **Capacity:** Six committed scope outcomes, eight acceptance outcomes, and 20 conditional tasks (`R1-T01` through `R1-T20`) with per-task S/M/L effort sizing prepared by the Principal Software Developer.
- **Features:** Operational readiness baseline only.
- **Carry-over:** None; this is the first proposed sprint in PI-1.
- **Primary risk:** Applying any pending owner policy as if already approved.

## Rationale

The 2026-07-10 audit found that brownfield SDD onboarding artifacts exist but do not yet prove host readiness. The repository has a dirty Git state, conflicting product identity, conflicting Git guidance, and copied agents and skills that still reference another host stack. Combining those corrections with tests, CI, runtime validation, and state tooling would make the sprint too broad and would blur evidence.

Readiness is therefore split into two sprints:

1. **Sprint 1:** establish the authoritative baseline and operating contract.
2. **Sprint 2:** validate the host mechanically with tests, CI, runtime checks, host-aware state tooling, ledger/work-index verification, and a final clean-clone check.

This sprint does not pass the customer-discovery gate and does not authorize product implementation.

## Current Evidence Baseline

Observed on 2026-07-10 before planning:

- Branch: `main`, tracking `origin/main`.
- HEAD: `eff0b2d` (`PM: define inventory-business SaaS beachhead and validation gate`).
- Working tree: not clean. The tracked root `AGENT_ONBOARDING.md` is deleted; most SDD assets are untracked; temporary `.sdd-archaeology.json`, `.sdd-proposal/`, and `CON` are present.
- Product direction conflict: `docs/PRODUCT_ROADMAP.md` and `exec/state.md` record the hosted SaaS target and customer-discovery gate, while `.github/copilot-instructions.md` and parts of the constitution still describe the local demo as the project goal.
- Git policy conflict: current host constitution says direct commits to `main`; the pending owner policy proposes protected `main`, short-lived branches, and PR checks; copied skills also carry incompatible worktree or branch assumptions.
- Host-validity conflict: copied roster and skill guidance include Python, FastAPI, pytest, HTMX, and framework-project specialization that are not authoritative for this Node.js/Express/JavaScript host.
- Runtime decision pending: `package.json` currently declares Node.js `>=18`; owner policy proposes Node.js `>=24`.

These are findings, not completion claims.

## Committed Scope if Approved

### R1. Owner policy decision and activation boundary

Record an explicit approve, reject, or amend decision for the entire pending policy bundle. Until recorded, every other sprint outcome remains blocked from implementation.

### R2. Reproducible Git baseline

Produce an evidence-preserving baseline whose tracked/untracked state is intentional and explainable. The approved specification must cover:

- disposition of the tracked root `AGENT_ONBOARDING.md` deletion in favor of `docs/AGENT_ONBOARDING.md` only if approved;
- preservation of any needed onboarding evidence before removal of `.sdd-archaeology.json`, `.sdd-proposal/`, and `CON` only if approved;
- explicit inventory of retained SDD assets; and
- a reproducibility record tied to an exact commit and documented verification steps.

No destructive cleanup occurs before the owner gate and evidence-preservation review.

### R3. Authoritative product identity

Reconcile authoritative guidance so it consistently distinguishes:

1. **Current demo:** a single-user local application using mock connectors and local SQLite.
2. **Hosted target:** a future SaaS for real small-business owners, beginning with the approved inventory-business beachhead direction.
3. **Immediate gate:** customer discovery must validate the beachhead problem, first-customer profile, shared MVP jobs, source systems, language needs, and willingness to pay before product backlog commitment or implementation.

This outcome records direction and gates only. It must not invent customer-discovery findings or commit SaaS features.

### R4. One Git operating policy

After owner approval, align active instructions, governance, agents, and skills to one operating policy. The pending proposal is protected `main` with short-lived branches and PR checks, but it is not authoritative unless approved. Historical evidence is preserved; active guidance must not present contradictory workflows.

### R5. Host-valid active agents, skills, and roster

Define which agents and skills are active for Small-Business-Claude and make their active guidance match the host's actual stack and operating policy. Copied Python, FastAPI, pytest, HTMX, framework-only, stale worktree, and incompatible Git assumptions must not remain active host guidance. Any retained but inactive asset must be clearly classified so it cannot be mistaken for authoritative host practice.

This outcome does not add application dependencies, change application code, or broadly redesign the fleet.

### R6. Sprint 2 readiness exit contract

Publish a bounded handoff that states exactly what Sprint 2 may begin, what evidence Sprint 1 supplies, and what remains unverified. The contract must reserve Sprint 2 for:

- `npm test` and an automated `GET /api/health` smoke test;
- host CI;
- supported Node runtime validation;
- state-builder and doctor host-awareness;
- ledger and work-index verification; and
- clean-clone final readiness verification.

The contract must not claim any of these checks are implemented or passing in Sprint 1.

## Non-Goals

The following are explicitly outside Sprint 1:

- application product features or broad application refactors;
- authentication, tenancy, live connectors, billing, cloud deployment, or other SaaS foundation work;
- customer-discovery execution or conclusions;
- test runner, smoke test, CI, lint, typecheck, or other quality-tool implementation;
- state-builder or doctor implementation;
- ledger or work-index final verification;
- Node runtime compatibility implementation or a clean-clone final readiness claim;
- changing the global product backlog;
- silently amending constitution files;
- committing, pushing, or dispatching before the owner start gate.

Any proposed addition goes to the project Executive Manager and Product Manager. It does not enter this sprint unless the owner approves a scope change.

## Deliverables

| ID | Deliverable | Accountable role | Required evidence |
|----|-------------|------------------|-------------------|
| D1 | Recorded owner decision on the policy bundle and sprint start | Project Executive Manager | Dated decision record with approve/reject/amend result |
| D2 | Reproducible Git baseline record | Principal Software Developer | Exact commit reference, before/after status evidence, retained-asset inventory, cleanup evidence if approved, and reproduction steps |
| D3 | Reconciled current-demo / hosted-target / discovery-gate identity | Principal Product Manager for requirements; Principal Architect for governed surfaces | Cross-source consistency review and absence of unqualified product-direction conflicts in active authoritative guidance |
| D4 | Single active Git policy | Principal Architect | Approved policy statement plus consistency scan across active instructions, agents, skills, and governance |
| D5 | Host-valid active agent/skill/roster set | Principal Architect for validity; Principal Software Developer for execution | Inventory with active/inactive disposition and mismatch scan showing no incompatible guidance in active host assets |
| D6 | Sprint 2 readiness exit contract | Principal Product Manager | Bounded entry criteria, evidence handoff, deferred checks, and explicit no-readiness-claim statement |
| D7 | Sprint-close report-up | Sprint Executive Manager | Completed `REPORT_UP_TEMPLATE.md` content handed to the project Executive Manager |

The Architect owns the completed `SPEC.md` with requirements `RB-001` through `RB-025`; the Principal Software Developer owns the completed `TASKS.md` with tasks `R1-T01` through `R1-T20`. Their presence completes the package for handoff but does not authorize execution.

## Acceptance Outcomes

These planning IDs are stable sprint outcomes. The Architect-authored `SPEC.md` traces them to exact acceptance criteria without weakening them.

| ID | Acceptance outcome |
|----|--------------------|
| AO-01 | Owner approval is recorded before any implementation, cleanup, commit, or dispatch, and the record states the disposition of every policy-bundle item. |
| AO-02 | A fresh operator can identify an exact approved baseline commit, reproduce the intended repository state from documented steps, and account for every onboarding or temporary artifact without relying on the planner's machine. |
| AO-03 | Active authoritative sources consistently state the current local demo, the hosted SaaS target, and the customer-discovery gate as distinct facts; none claims that SaaS implementation or customer validation is complete. |
| AO-04 | Active guidance exposes one owner-approved Git workflow with no contradictory direct-main, branch, PR, or worktree instructions presented as simultaneously authoritative. |
| AO-05 | Every active agent, skill, and roster entry is either valid for the Node.js/Express/JavaScript/Anthropic/SQLite host or explicitly inactive; active guidance does not prescribe Python/FastAPI/pytest/HTMX or framework-repository practices as host requirements. |
| AO-06 | The Sprint 2 contract names its allowed work, prerequisites, required evidence, deferred risks, and final readiness checks, while explicitly stating that Sprint 1 did not implement or validate Sprint 2 mechanics. |
| AO-07 | Scope review confirms no application code, product feature, global backlog item, customer-discovery conclusion, test/CI implementation, state-tool implementation, or broad refactor entered Sprint 1. |
| AO-08 | The Sprint Executive Manager reports committed versus done, evidence for every acceptance outcome, decisions with authority, risks, blockers, lessons, and a recommendation to the project Executive Manager using the required template. |

## Dependencies and Gates

| Dependency | Owner | State | Effect |
|------------|-------|-------|--------|
| Owner policy bundle decision | Human owner through project Executive Manager | **PENDING / BLOCKING** | No sprint implementation may start |
| `SPEC.md` | Principal Architect | Complete for handoff; `RB-001` through `RB-025`; approval pending | No technical or governance execution before the owner gate |
| `TASKS.md` | Principal Software Developer | Complete conditional plan for handoff; `R1-T01` through `R1-T20` | No mutating task or worker dispatch before the owner gate |
| Current dirty Git evidence preserved | Principal Software Developer | Observed, not resolved | Cleanup cannot precede evidence capture and approved disposition |
| Constitution amendment governance | Principal Architect + human owner where required | Pending policy decision | No constitution edit may be treated as routine or pre-approved |

## Owner Decision Gate

The following is one pending policy bundle. Nothing in this plan records approval:

1. Protect `main`; use short-lived branches and PR checks.
2. Set the supported runtime policy to Node.js `>=24`.
3. Amend authoritative instructions and constitution through governance to distinguish the current local demo, hosted SaaS target, and customer-discovery gate.
4. Delete stale root `AGENT_ONBOARDING.md` in favor of `docs/AGENT_ONBOARDING.md`.
5. Remove `.sdd-archaeology.json`, `.sdd-proposal/`, and `CON` after preserving needed evidence.

**Start condition:** The project Executive Manager must record the owner's approve, reject, or amend decision for each item and explicitly authorize Sprint 1 to proceed. If the owner amends or rejects any item, the Product Manager, Architect, and Principal Software Developer must re-baseline the affected planning, specification, and task artifacts before execution.

## Sequencing

1. **Package preparation — complete:** Architect-authored `SPEC.md` traces `RB-001` through `RB-025`; Principal-Software-Developer-authored `TASKS.md` defines `R1-T01` through `R1-T20`, file ownership, verification, and execution guards.
2. **Decision:** project Executive Manager obtains and records the owner disposition of all five policy items plus explicit Sprint 1 start authorization.
3. **Re-baseline if needed:** if the owner amends or rejects any item, the Product Manager, Architect, and Principal Software Developer update and re-review affected artifacts before execution.
4. **Execute baseline work:** only after the complete owner gate passes, the Principal Software Developer routes approved tasks; the Sprint Executive Manager coordinates and reports but does not implement.
5. **Verify:** owning Principals provide evidence; Product Manager verifies acceptance outcomes; failures return to the owning Principal.
6. **Close and report up:** Sprint Executive Manager completes the report structure and hands it to the project Executive Manager.

Default execution is sequential because Git baseline, authoritative guidance, governance, and active fleet assets can overlap. The completed `TASKS.md` identifies the conditional parallel-safe groups and non-overlapping file ownership; none may execute before the owner gate passes.

## Close Criteria

Sprint 1 may close only when all conditions are true:

- [ ] Owner decision and sprint-start authorization are dated and recorded.
- [ ] `SPEC.md` and `TASKS.md` exist, are owned by the correct Principals, and preserve this sprint boundary.
- [ ] AO-01 through AO-08 are each marked PASS with direct evidence; PARTIAL or FAIL does not close the sprint.
- [ ] The approved Git baseline is reproducible from an exact commit and documented steps.
- [ ] Active authoritative product identity and Git policy are internally consistent.
- [ ] Active agent, skill, and roster guidance is host-valid or explicitly inactive.
- [ ] The Sprint 2 readiness exit contract is complete and makes no premature readiness claim.
- [ ] No non-goal entered the sprint.
- [ ] Blockers and unresolved risks are explicitly carried; none is silently treated as complete.
- [ ] The Sprint Executive Manager has reported up to the project Executive Manager using `REPORT_UP_TEMPLATE.md`.

## Report-Up Expectations

The Sprint Executive Manager must use `REPORT_UP_TEMPLATE.md` exactly. Evidence must distinguish:

- observed baseline versus changed state;
- approved decisions versus recommendations;
- committed outcomes versus completed outcomes;
- Sprint 1 checks versus deferred Sprint 2 checks; and
- local evidence versus evidence tied to an exact Git commit.

The report must not declare the project fully SDD-ready. It may recommend Sprint 2 only if every Sprint 1 close criterion passes and the owner/project Executive Manager authorizes the next planning step.
