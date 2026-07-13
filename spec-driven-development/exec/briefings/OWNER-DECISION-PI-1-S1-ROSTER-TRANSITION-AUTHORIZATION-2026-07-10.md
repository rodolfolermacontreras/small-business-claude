---
id: PI-1-S1-ROSTER-TRANSITION-AUTHORIZATION-2026-07-10
type: owner-decision
date: 2026-07-10
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized-not-executed
scope: exact-roster-only-agent-executable-transition
supersedes: null
---

# PI-1 Sprint 1 Exact Roster-Only Transition Authorization

## Decision Authority and Source

On 2026-07-10, human owner Rodolfo Lerma answered the pending PI-1 Sprint 1 roster-transition request:

> lets go, option 1

The immediately preceding request defined Option 1 as authorization for an exact roster-only transition in `spec-driven-development/roster/agents.json` on branch `sprint/pi-1-s1-readiness-baseline`. This record is the authoritative dated Level 2 disposition of that decision.

This decision authorizes routing of the bounded transition. It does not execute the transition and is not evidence that any roster field has changed.

## Ownership and Review

- **Transition owner:** Principal Software Developer.
- **Required lifecycle-integrity reviewer:** Principal Architect.
- **Authorized write target:** `spec-driven-development/roster/agents.json` only.
- **Authorized entry set:** `principal-executive-manager`, `principal-product-manager`, `principal-architect`, `developer-general`, `qa-engineer-general`, and `ux-designer-general` only.
- **Unchanged entry set:** all eight other roster entries must remain byte-for-byte unchanged.

## Preconditions

The Principal Software Developer may perform the transition only after confirming:

1. R1-T13 has a PASS result for the three implementation and review worker bodies.
2. Principal Software Developer executable-set validation has passed for the exact worker set.
3. The current branch is `sprint/pi-1-s1-readiness-baseline`.
4. The write boundary remains limited to the one authorized roster file and six authorized entries.

Failure of any precondition stops the transition and returns it through the owner gate. No broader or partial transition is authorized.

## Exact Worker Transition

Apply the following fields only to `developer-general`, `qa-engineer-general`, and `ux-designer-general`:

- `activation.state`: `active`
- `activation.executable`: `true`
- `activation.automatic`: `false`
- `activation.gate`: `R1-T13 PASS plus PSD validation and separately task-authorized execution`
- `compatibility.state`: `compatible`
- `compatibility.blockers`: `[]`
- `disposition`: `Bounded executable host worker with no automatic dispatch or Git authority.`

All other fields in these three worker entries remain unchanged.

Executable status means only that a worker may execute a separately authorized task within that task's exact scope. It grants no automatic dispatch, standing work authority, or Git authority.

## Exact Principal Transition

Apply the following fields only to `principal-executive-manager`, `principal-product-manager`, and `principal-architect`:

- `activation.state`: `active-pending-dependency-validation`
- `activation.executable`: `false`
- `activation.automatic`: `false`
- `activation.gate`: `Inactive handoff and skill dependency reconciliation plus PSD revalidation`
- `compatibility.state`: `host-adapted-dependencies-blocked`
- `compatibility.blockers`:
  - `Inactive principal-software-developer handoff`
  - `Inactive or unavailable skill dependencies`
  - `PSD revalidation`
- `disposition`: `Adapted and reviewed active principal, but non-executable pending dependency reconciliation and PSD revalidation.`

All other fields in these three principal entries remain unchanged. Their active lifecycle and status do not make them executable and do not permit inference of missing handoff or skill availability.

## Integrity Requirements

The transition must preserve:

- `activation.automatic: false` for all six authorized entries;
- no executable activation for any principal;
- executable activation only for the three named generic workers;
- dependency-blocked metadata for the three named principals;
- all fields of the eight excluded roster entries without change;
- the existing host safety invariants, authority boundaries, and task-specific allowlist requirements; and
- honest separation between roster executability and separately authorized task execution.

The Principal Architect must review the resulting roster diff for lifecycle integrity, exact-entry confinement, principal dependency blocking, worker-only executability, preservation of `activation.automatic: false`, and absence of changes to the eight excluded entries. A failed review returns the transition to the Principal Software Developer for correction within the same boundary; it grants no broader authority.

## Explicit Exclusions

This decision does **not** authorize:

- execution of the roster transition by the Project Executive Manager or by this record;
- worker or principal dispatch;
- automatic dispatch or automatic activation;
- activation or mutation of any skill or skill pack;
- mutation of any agent or skill body;
- mutation of any roster file other than `spec-driven-development/roster/agents.json`;
- mutation of any roster entry other than the six explicitly named entries;
- cleanup, deletion, or unrelated working-tree mutation;
- staging any file;
- creating a commit;
- pushing any branch or commit;
- merging or rebasing;
- creating, deleting, switching, or otherwise modifying branches or worktrees;
- application, package, test, or continuous-integration work;
- Sprint 2 work; or
- any mutation outside the exact roster-only boundary stated in this record.

This authorization does not expand R1-T13, create a new task, authorize partial execution, or establish Git authority. Existing evidence-preservation, review, branch, protected-surface, and owner-gate requirements remain in force.

## Ordered Routing

1. **Principal Software Developer — precondition and boundary validation.** Confirm R1-T13 PASS, PSD executable-set validation, the required current branch, the one-file write boundary, the six-entry allowlist, and preservation of the eight excluded entries.
2. **Principal Software Developer — bounded transition owner.** Only after all preconditions pass, apply the exact worker and principal fields in this record to `spec-driven-development/roster/agents.json`; perform no dispatch and no other mutation.
3. **Principal Architect — lifecycle-integrity review.** Review the resulting diff for exact conformity, worker-only executability, principal dependency blocking, unchanged automatic-activation flags, and unchanged excluded entries.
4. **Principal Software Developer — final validation and report-up.** Revalidate the exact executable set and report the transition and Architect verdict without staging, committing, pushing, merging, rebasing, dispatching, or changing any other artifact.

No step in this routing is performed by creation of this decision record. Execution remains pending the routed Principal Software Developer action and required Principal Architect review.
