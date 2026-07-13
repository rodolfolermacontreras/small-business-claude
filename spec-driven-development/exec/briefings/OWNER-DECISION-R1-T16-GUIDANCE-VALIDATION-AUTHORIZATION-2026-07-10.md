---
id: PI-1-S1-R1-T16-GUIDANCE-VALIDATION-AUTHORIZATION-2026-07-10
type: owner-decision
date: 2026-07-10
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T16-bounded-guidance-validation
supersedes: null
---

# PI-1 Sprint 1 R1-T16 Guidance-Validation Authorization

## Decision Authority and Source

On 2026-07-10, human owner Rodolfo Lerma answered the pending PI-1 Sprint 1 R1-T16 decision request:

> ok continue, option 1 is good

The immediately preceding request defined Option 1 as authorization for R1-T16 through one task-specific executable `qa-engineer-general` dispatch by the Principal Software Developer, read-only Principal Architect governed-surface review, and creation of only `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` on branch `sprint/pi-1-s1-readiness-baseline`. This record is the authoritative dated Level 2 disposition of that decision.

## Authorization Boundary

The owner authorizes R1-T16 on branch `sprint/pi-1-s1-readiness-baseline`, subject to all task dependencies, branch and snapshot stability, stop conditions, protected surfaces, and exclusions in this record.

- **Validation owner:** QA Engineer.
- **Sequencing and dispatch owner:** Principal Software Developer.
- **Permitted implementer:** One task-specific executable `qa-engineer-general`, only if dispatched by the Principal Software Developer.
- **Governed-surface reviewer:** Principal Architect, read-only.
- **Only authorized mutation:** creation of `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md`.

The Principal Architect review is advisory review of governed surfaces only. It does not activate, dispatch, or imply executable activation of the Principal Architect or any other Principal, agent, worker, skill, roster entry, or pack.

This decision record authorizes the route but does not execute R1-T16, dispatch a worker, begin a review, or create the validation evidence.

## Required Validation Scope

The R1-T16 scan list must be derived from the current manifests rather than inferred from file presence. The evidence must identify the manifest inputs used and distinguish:

- active-source failures;
- active-source passes;
- inactive or reference-only matches that are mechanically excluded from active execution; and
- unresolved classifications, which are blocking rather than presumed inactive.

The validation must cover, with dated PASS or FAIL findings and path evidence:

1. **Three identity layers:** current local single-user demo, future hosted-SaaS direction, and incomplete customer-discovery gate, without false completion or commitment claims.
2. **Current implementation facts:** built-in SQLite persistence, seven ready-to-run workflows, and eight current API routes.
3. **Governing Git policy:** protected `main`, short-lived branch and pull-request entry after required checks, no direct commits to `main`, and honest status that required host checks and automated branch protection are deferred to Sprint 2.
4. **Host-invalid guidance:** active-source scan for incompatible stack, path, runtime, branch, worktree, test-framework, model-provider, or copied-project assumptions, including the terms and variants required by R1-T16.
5. **Roster and pack integrity:** valid manifests, lifecycle and activation metadata, referential integrity, pack membership, active-source selection, and an explanation for every file-count mismatch.
6. **Four protected application invariants:**
   - send, post, pay, and order actions remain drafts in the approval outbox until explicit owner approval;
   - connector implementations do not silently change the connector/tool contract;
   - financial, inventory, and optimization calculations remain deterministic server-side operations; and
   - secrets remain in `.env` only and are never committed, logged, included in evidence, or exposed to the browser.
7. **Protected-change check:** zero changes to protected application, package, test, continuous-integration, runtime, or Sprint 2 surfaces.

The validation evidence must report scan scope, active mismatches by category, inactive/reference-only matches, invariant coverage, path-specific PASS/FAIL evidence, protected-change results, and a final PASS or BLOCKED verdict. Any unresolved active mismatch blocks R1-T17.

## Evidence and Access Rules

Read-only access is permitted only to the current manifests and applicable constitution, instruction, documentation, agent, skill, pack, sprint-task, source, and Git-status context needed to perform R1-T16. Read-only access does not add those sources to the write set.

R1-T16 must not access secrets, secret values, databases, business data, connector data, or other protected data. Evidence must remain non-secret and path-based. A suspected secret stops the task without opening, copying, preserving, or reporting the suspected value.

No corrective edits are authorized. A failed check must be recorded as FAIL or BLOCKED and returned to the owning task; the scan must not be weakened and an asset must not be reclassified solely to hide a defect.

## Stop Conditions

Stop R1-T16 and return through the Principal Software Developer if any of the following occurs:

- a dependency regression;
- a branch or validation-snapshot change;
- an ambiguous, missing, conflicting, or non-deterministic manifest classification;
- an active identity, implementation-fact, Git-policy, host-guidance, lifecycle, or invariant mismatch;
- failed roster or skill-pack integrity;
- a weakened or missing protected application invariant;
- any protected application, package, test, continuous-integration, runtime, Sprint 2, or other out-of-scope change;
- a suspected secret or need to access protected data;
- unavailable Principal Architect read-only governed-surface review; or
- any need for correction, cleanup, reclassification, expanded access, or mutation outside the sole evidence file.

A stop does not authorize remediation within R1-T16. Correction requires return to the owning task and any separately applicable authorization.

## Explicit Exclusions

This decision does **not** authorize:

- execution of R1-T16 by the Project Executive Manager;
- execution of R1-T16 through this decision record;
- automatic dispatch of any worker, agent, skill, Principal, or route;
- more than one task-specific executable `qa-engineer-general` dispatch;
- executable activation of the Principal Architect or any implication that read-only review is an executable Principal dispatch;
- mutation of any artifact except creation of the one exact `GUIDANCE-VALIDATION.md` evidence file;
- mutation of the fleet ledger, work index, executive state, sprint progress, board, task status, generated state, or other progress artifact;
- edits to rosters, agent bodies, skill bodies, manifests, skill packs, constitution, instructions, documentation, sprint tasks, or source files;
- corrective edits, cleanup, deletion, restoration, renaming, or reclassification;
- staging any file;
- creating a commit;
- pushing any branch or commit;
- opening or modifying a pull request;
- merging or rebasing;
- creating, deleting, switching, or otherwise modifying branches or worktrees;
- application, package, dependency, test, continuous-integration, runtime-validation, or Sprint 2 work;
- secret, database, business-data, connector-data, or protected-data access; or
- any authority inferred beyond the exact bounded validation route recorded here.

Existing Sprint 1 dependencies, owner boundaries, evidence discipline, current-branch requirement, protected surfaces, and review requirements remain in force. This authorization is not evidence that R1-T16 has started, passed, failed, or completed.

## Required Ordered Route

1. **Principal Software Developer — preflight and sequencing:** Confirm branch `sprint/pi-1-s1-readiness-baseline`, a stable validation snapshot, satisfied R1-T16 dependencies, the manifest-derived scan basis, the sole-file write boundary, and absence of protected changes or stop conditions. Do not mutate ledger, progress, state, manifests, packs, rosters, or task status.
2. **Principal Software Developer — bounded dispatch:** At discretion, issue exactly one task-specific executable `qa-engineer-general` dispatch carrying this authorization, the R1-T16 task requirements, the exact write allowlist, evidence rules, exclusions, and stop conditions. Dispatch is not automatic.
3. **QA Engineer — read-only validation and sole evidence creation:** Derive the active-source list from current manifests; perform the required identity, implementation-fact, Git-policy, host-invalid-term, roster/pack-integrity, invariant, and protected-change checks; distinguish active failures from inactive/reference matches; and create only `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` with dated path evidence and a PASS or BLOCKED verdict. Make no corrective edits.
4. **Principal Architect — read-only governed-surface review:** Review the manifest-derived governed surfaces, lifecycle and pack interpretation, Git-policy consistency, identity layers, and protected invariants without mutation. Unavailability or a material concern stops the route. This review does not imply executable Principal activation.
5. **Principal Software Developer — scope and stop-condition verification:** Verify the sole-file mutation boundary, zero protected application/package/test/continuous-integration/runtime/Sprint 2 changes, no excluded Git or state operations, and satisfaction of every required review and stop condition before accepting the evidence result. A PASS may be reported only from recorded evidence; any other outcome is BLOCKED and returns to the owning task without correction under R1-T16.

This is an authorization and routing record only. R1-T16 is not executed, no worker is dispatched, no Architect review is initiated, and no validation evidence is created by this record.
