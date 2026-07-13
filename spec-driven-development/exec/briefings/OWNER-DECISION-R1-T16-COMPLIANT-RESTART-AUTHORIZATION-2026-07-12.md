---
id: PI-1-S1-R1-T16-COMPLIANT-RESTART-AUTHORIZATION-2026-07-12
type: owner-decision
date: 2026-07-12
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T16-manifest-reconciliation-compliant-restart-from-preflight
supersedes: null
---

# PI-1 Sprint 1 R1-T16 Compliant-Restart Authorization

## Decision Authority and Exact Response

On 2026-07-12, human owner Rodolfo Lerma explicitly approved the previously presented R1-T16 compliant restart with the exact response:

> Option 1

This briefing is the authoritative dated Level 2 record of that approval. It authorizes a restart of the manifest-reconciliation route from Principal Software Developer preflight under the boundaries below and the preserved requirements of `OWNER-DECISION-R1-T16-MANIFEST-RECONCILIATION-AUTHORIZATION-2026-07-12.md`.

Creating this briefing records authorization only. It does not execute the restart, perform preflight, dispatch or activate an actor, remediate the manifest, conduct a review, rerun R1-T16, create or update validation evidence, change progress or task status, begin R1-T17, or execute a Git command. The Project Executive Manager must not execute the restart.

## Accepted Documented Inspection Deviations

Before this compliant-restart approval, the following local commands were run:

- `git worktree list`
- `git log --oneline -10`

The owner accepts these as documented deviations with all of the following limits:

1. They were local, non-mutating, non-network inspection commands.
2. They did not change files, the index, objects, refs, configuration, worktrees, repository state, or external state.
3. Their acceptance does not retroactively declare the prior preflight compliant.
4. Their acceptance does not add either command to the authorized Git allowlist.
5. Their outputs do not satisfy, replace, waive, or shorten the restarted preflight, any review, the complete rerun, or final boundary verification.
6. Neither command may be reused during the restarted route.

No inference of broader inspection, Git, remediation, dispatch, progress, or task authority may be drawn from acceptance of these deviations.

## Restart Point and Ownership

The manifest-reconciliation route is authorized to restart only from the beginning of Principal Software Developer preflight. No prior preflight result may be reused or represented as compliant.

- **Sequencing, preflight, and routing owner:** Principal Software Developer.
- **Permitted correction actor:** Exactly one bounded correction actor selected and routed through the Principal Software Developer after a compliant preflight.
- **Project Executive Manager boundary:** Record this authorization only; do not execute or dispatch the restart.
- **Automatic effect:** None. This record does not dispatch, activate, roster, hire, or begin work by any Principal, worker, agent, skill, route, roster entry, or pack.

The restarted preflight must confirm the governing manifest-reconciliation authorization, exact write boundaries, required facts, protected sources, required reviewers, conditional evidence gate, local Git allowlist, all stop conditions, and the absence of any need to widen scope. A conflict, ambiguity, unavailable requirement, protected-source defect, or need for another path stops the route without mutation.

## Exclusive Local Read-Only Git Allowlist

For the restarted route, local read-only Git inspection is authorized only through these command families:

- `git status`
- `git diff`
- `git diff --cached`
- `git diff --check`
- `git show`
- `git hash-object` without `-w`, `--write`, or any other write option

This allowlist is exclusive and has all of these limits:

1. Use is local-only and solely for R1-T16 scope and boundary verification.
2. Optional index refresh is disabled.
3. A permitted command must not be run if its command form, option, configuration, alias, hook, or environment would refresh, update, lock, write, contact a remote, or otherwise mutate files, the index, objects, refs, configuration, worktrees, repository state, or external state.
4. No write option or equivalent side effect is authorized.
5. `git worktree list` and `git log --oneline -10` are explicitly prohibited from reuse.
6. Every other Git command, command family, subcommand, option, alias, hook, script, plumbing operation, porcelain operation, network operation, and remote access is prohibited.

The accepted prior deviations do not widen this allowlist.

## Preserved One-File Manifest Remediation

The restarted route preserves the exact remediation authorization in `OWNER-DECISION-R1-T16-MANIFEST-RECONCILIATION-AUTHORIZATION-2026-07-12.md`.

Exactly one bounded correction actor may remediate only:

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`

The smallest internally consistent changes are permitted only in these six content regions:

1. current-state agent classification rows;
2. current-state skill classification rows;
3. current-state skill-pack classification rows;
4. roster-authority wording associated with those classifications;
5. stale agent, skill, pack, cross-reference, and completeness narratives associated with those classifications; and
6. consequential `.github/` aggregate arithmetic resulting from those authorized current-state corrections.

No other manifest row, narrative, heading, evidence claim, disposition, scope, formatting, or whitespace may change except a minimal consequential adjustment within those six regions required to state the authorized facts consistently. No other immediate remediation file is authorized.

The following remain protected read-only reconciliation inputs and are not remediation targets: the agent, skill, and skill-pack rosters; all agent bodies; all skill bodies and additional reference skill documents; all pack definitions; `SOURCE-MATRIX.md`; and applicable owner decisions and R1-T16 validation requirements. A defect in a protected source stops the route without remediation.

## Preserved Required Facts and Arithmetic

The corrected manifest must state and reconcile every required current fact without omission, double counting, lifecycle inflation, or authority inflation:

### Agents

- 14/14 agents are rostered.
- Six agent bodies are active.
- Three of the six active agent bodies are executable task-gated generic workers.
- Three of the six active agent bodies are active Principals that remain dependency-blocked and non-executable.
- Eight agents are reference/template agents.
- Active status does not imply automatic dispatch, current execution, satisfied dependency, or executable authority.

### Skills and Reference Documents

- 35/35 skills are rostered.
- Seven skill bodies are active.
- 28 rostered `SKILL.md` bodies are inactive/reference.
- Two additional skill documents are reference documents outside the rostered `SKILL.md` body count.
- Those two documents are not roster asymmetries, active skills, or rostered skill bodies.

### Packs and Reconciliation

- Five skill packs exist, with zero active packs.
- Zero file/roster asymmetries exist under the governing body-to-roster comparison, with the two additional reference skill documents distinguished from rostered `SKILL.md` bodies.
- Pack presence or membership does not imply active-pack status, activation, dispatch, or executable authority.

### Consequential `.github/` Aggregate

The aggregate must be exactly:

> `.github/`: 73 paths = 1 active host guidance + 30 active framework-process guidance + 42 reference/example.

The arithmetic must reconcile exactly as `1 + 30 + 42 = 73`, preserve the total of 73, and agree with corrected path and classification rows. No category may conceal an unresolved path, mismatch, or lifecycle ambiguity.

## Preserved Ordered Reviews and Complete Rerun

All reviews remain independent and read-only. Reviewers may not remediate defects. Any FAIL, BLOCKED result, unavailable reviewer, missing evidence, ambiguity, conflict, scope deviation, or unverified condition stops the route without opportunistic mutation.

After the compliant preflight and exact bounded remediation, the route must proceed in this order:

1. **Independent QA review:** Verify the exact one-file boundary, all authorized changed regions, every required fact and count, `1 + 30 + 42 = 73`, row-to-narrative and row-to-aggregate consistency, roster/body/reference-document/pack reconciliation, zero file/roster asymmetries, preservation of unrelated manifest content, and zero prohibited mutations or operations.
2. **Fresh Principal Architect review:** Only after QA passes, perform a new governed-surface review. Prior Architect reviews do not satisfy this gate. Verify lifecycle and activation interpretation, roster authority, active-versus-executable distinctions, dependency-blocked Principal treatment, reference/template treatment, pack inactivity, completeness logic, cross-reference consistency, aggregate classification, and absence of widened authority.
3. **Principal Product Manager disposition or review:** Record a dated, evidence-based `NOT-AFFECTED` disposition only if product authority, customer-discovery gates, prioritization, backlog commitment, acceptance criteria, product scope, and user value are not affected. If any PM domain is or may be affected, perform a read-only PM review. Ambiguity requires review.
4. **Principal Software Developer domain review:** After the preceding applicable reviews pass, perform a read-only domain review distinct from final boundary verification. Verify executable clarity, task-gated worker and blocked-Principal treatment, bounded-actor instructions, source authority, stop behavior, validation sequencing, evidence rules, and absence of widened implementation or dispatch authority.
5. **Complete manifest-derived R1-T16 rerun:** Only after every applicable review passes may QA rerun R1-T16 in full from the corrected current manifest-derived scan list. The rerun must retain every applicable identity, implementation-fact, Git-policy, host-guidance, lifecycle, roster/pack-integrity, protected-invariant, protected-change, evidence, access, and stop-condition check required by the governing R1-T16 authorizations. A changed-row-only, manifest-only, roster-only, arithmetic-only, mismatch-only, delta-only, or otherwise reduced rerun is prohibited.
6. **Conditional validation evidence:** `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` may be created or updated only on a complete R1-T16 rerun PASS and subject to final Principal Software Developer boundary verification. On FAIL, BLOCKED, missing evidence, ambiguity, incomplete validation, or scope deviation, it must not be created, changed, replaced, or supplemented.
7. **Final Principal Software Developer boundary verification:** Verify the exact remediation boundary, all required dated review evidence, complete-rerun result, conditional validation-evidence gate, exclusive local Git allowlist, accepted-deviation treatment, zero prohibited mutations or operations, and no unauthorized state transition before accepting or reporting PASS or BLOCKED.

## Progress, Task-Status, and R1-T17 Prohibitions

This restart does not exercise, renew, preserve for execution, or extend any prior progress-checkpoint authority. During and after this restarted route under this authorization:

- no sprint-progress, overall-progress, weekly-progress, board, report-up, milestone, dispatch-status, task-status, task-completion, lifecycle, generated-state, executive-state, dashboard-state, ledger, or work-index change is authorized;
- no completion count or task state may be changed;
- no prior progress or task-status entry may be deleted, replaced, supplemented, normalized, or reinterpreted;
- R1-T17 must not be started, dispatched, implemented, reviewed, validated, marked in progress, or marked complete; and
- no R1-T17 artifact, evidence, state, status, or execution mutation is authorized.

A successful R1-T16 result may be reported factually without mutating any progress or task-status surface. Any progress change or any R1-T17 activity requires separate authority.

## Other Explicit Prohibitions

Except for the exact one-file manifest remediation and the strictly conditional `GUIDANCE-VALIDATION.md` write, every other file, content, state, status, lifecycle, repository, Git, network, and external mutation is prohibited. All explicit prohibitions, protected surfaces, host invariants, evidence requirements, secret and protected-data rules, access limits, stop conditions, and no-false-claim requirements in `OWNER-DECISION-R1-T16-MANIFEST-RECONCILIATION-AUTHORIZATION-2026-07-12.md` remain controlling.

This includes no staging, committing, amending, pushing, pulling, fetching, branch or worktree operation, pull-request operation, merge, rebase, cherry-pick, revert, reset, tag, stash, patch application, switch, checkout, restore, clean, index refresh, index update, object write, remote access, network operation, cleanup, opportunistic correction, or authority inference beyond this record.

## Required Restart Route

1. Principal Software Developer restarts from a new non-mutating preflight under this record.
2. After preflight passes, the Principal Software Developer routes exactly one bounded correction actor.
3. The actor performs only the preserved one-file manifest reconciliation and stops on any ambiguity, conflict, protected-source defect, or need to widen scope.
4. Independent QA performs the preserved read-only review.
5. A fresh Principal Architect performs the preserved read-only review.
6. The Principal Product Manager records the preserved evidence-based disposition or performs the required read-only review.
7. The Principal Software Developer performs the preserved read-only domain review.
8. Only after all applicable reviews pass, QA performs the complete manifest-derived R1-T16 rerun.
9. `GUIDANCE-VALIDATION.md` is created or updated only on complete PASS and subject to final boundary verification; otherwise it remains unchanged.
10. The Principal Software Developer performs final boundary verification and reports PASS or BLOCKED without changing progress, task status, or R1-T17 state.

This is an authorization and routing record only. The compliant restart has not been executed by the Project Executive Manager.
