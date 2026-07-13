---
id: PI-1-S1-R1-T16-MANIFEST-ARITHMETIC-CORRECTION-AUTHORIZATION-2026-07-12
type: owner-decision
date: 2026-07-12
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T16-exact-one-line-manifest-arithmetic-correction-and-conditional-rerun
supersedes: null
---

# PI-1 Sprint 1 R1-T16 Manifest Arithmetic-Correction Authorization

## Decision Authority and Source

On 2026-07-12, human owner Rodolfo Lerma explicitly approved the previously presented Option 1 with the exact words:

> option 1 lets go

The previously presented Option 1 authorized one narrowly bounded correction to the aggregate `.github/` accounting line in `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`, independent QA re-review, and the complete R1-T16 rerun only after that re-review passes. This record is the authoritative dated Level 2 disposition of that decision.

Creation of this owner-decision briefing records the authorization only. It does not apply the correction, dispatch an actor, perform QA, rerun R1-T16, create validation evidence, or mutate project state.

## Exact Correction Authorization

The owner authorizes one bounded correction actor, routed only by the Principal Software Developer, to change exactly one aggregate line in:

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`

Replace exactly:

> - `.github/`: 73 paths = 1 active host guidance + 20 active framework-process guidance + 52 reference/example.

With exactly:

> - `.github/`: 73 paths = 1 active host guidance + 18 active framework-process guidance + 54 reference/example.

The correction must preserve the aggregate total of **73** paths. No other character, line, row, classification, count, disposition, heading, whitespace, or content in `ASSET-MANIFEST.md` may change during the correction action.

## Ownership and Actor Boundary

- **Sequencing and routing owner:** Principal Software Developer.
- **Permitted correction actor:** Exactly one bounded, task-specific executable correction actor selected and routed by the Principal Software Developer.
- **Dispatch status:** No dispatch is automatic. This record does not activate or dispatch any Principal, worker, agent, skill, route, roster entry, or pack.
- **Correction write allowlist:** The one exact aggregate-line replacement stated above and nothing else.

The Principal Software Developer must carry the exact old line, exact replacement line, total-73 preservation rule, mutation prohibitions, QA gate, and stop conditions into the bounded correction route. The actor must stop without mutation if the old line is absent, differs in any way, appears more than once, or cannot be replaced without changing any other content.

## Mandatory Independent QA Re-review

After the bounded correction and before any R1-T16 rerun, independent QA must re-review and record all three of the following:

1. **Arithmetic:** `1 + 18 + 54 = 73`, with the aggregate total preserved at 73.
2. **Path-row consistency:** The corrected aggregate split agrees with the existing deterministic path-specific rows in `ASSET-MANIFEST.md`, including the prompt classifications already reviewed under R1-T16 remediation.
3. **Exactly-one-line scope:** The correction action changed exactly the authorized aggregate line and made zero other file, content, state, or Git mutations.

Any QA failure, ambiguity, mismatch, unavailable evidence, or scope deviation stops the route. QA may not correct the defect, widen the scope, reclassify an asset, edit another line, or infer a pass.

## Conditional Complete R1-T16 Rerun

The complete manifest-derived R1-T16 rerun is authorized **only if independent QA passes all three required re-review checks**. If QA passes, the rerun remains governed by every applicable requirement, evidence rule, protected surface, stop condition, and exclusion in:

- `PI-1-S1-R1-T16-GUIDANCE-VALIDATION-AUTHORIZATION-2026-07-10`; and
- `PI-1-S1-R1-T16-PROMPT-REMEDIATION-AUTHORIZATION-2026-07-10`.

The rerun must be complete; this authorization does not permit a reduced, arithmetic-only, prompt-only, or otherwise weakened R1-T16 validation.

## Preserved Architect PASS

The existing read-only Principal Architect PASS for prompt behavior and path-specific governance remains valid and is preserved. No new Architect review is required solely because of this correction: the authorized change affects aggregate arithmetic only and does not alter prompt bodies, path-specific dispositions, governance behavior, lifecycle interpretation, authority, or protected invariants.

This preservation does not waive any other Architect requirement or stop condition that applies to the complete R1-T16 rerun under the existing authorizations.

## GUIDANCE-VALIDATION.md Gate

Creation of `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` remains prohibited until:

1. the exact one-line correction is completed within scope;
2. independent QA passes arithmetic, path-row consistency, and exactly-one-line scope; and
3. the complete R1-T16 rerun passes every governing requirement.

If the correction, QA re-review, or complete rerun fails or is blocked, `GUIDANCE-VALIDATION.md` must not be created.

## Explicit Mutation Prohibitions

During the correction action, this decision prohibits every mutation except the one exact aggregate-line replacement. In particular, it does **not** authorize:

- any other change to `ASSET-MANIFEST.md`, including path-specific rows, prompt dispositions, classifications, counts, headings, formatting, or whitespace;
- creation, modification, deletion, restoration, movement, or renaming of any other file or directory;
- mutation of `GUIDANCE-VALIDATION.md` before the complete rerun passes;
- mutation of the fleet ledger, work index, executive state, sprint progress, board, task status, generated state, roster, skill pack, agent body, skill body, prompt, constitution, instruction, documentation, sprint artifact, source, application, package, dependency, lockfile, test, continuous-integration, runtime, database, business data, connector data, secret, or Sprint 2 surface;
- staging any file;
- creating a commit;
- pushing any branch or commit;
- opening or modifying a pull request;
- merging or rebasing;
- creating, deleting, switching, or otherwise modifying a branch or worktree;
- cleanup, opportunistic correction, reconciliation, reclassification, or scope expansion; or
- authority inferred beyond the exact correction, mandatory independent QA re-review, conditional complete R1-T16 rerun, preserved Architect PASS, and validation-evidence gate recorded here.

The correction action must leave every file/content/state/Git surface unchanged except for the one exact authorized line. This owner-decision briefing is the separately requested authority record and is not part of the later correction actor's write set.

## Required Ordered Route

1. **Principal Software Developer — preflight and route:** Confirm the exact old line exists once, the total-73 rule, the one-line write allowlist, independent QA availability, existing R1-T16 authorities, and absence of stop conditions. Route one bounded correction actor; do not widen scope or mutate state.
2. **Bounded correction actor — exact replacement only:** Replace the exact old aggregate line with the exact authorized line. Make no other file, content, state, or Git mutation. Stop without mutation on any mismatch or ambiguity.
3. **Independent QA — mandatory re-review:** Verify arithmetic, path-row consistency, and exactly-one-line scope. Record PASS only when all three checks pass; otherwise stop the route without correction.
4. **QA Engineer — conditional complete R1-T16 rerun:** Only after the independent QA PASS, perform the complete manifest-derived R1-T16 rerun under the existing authorizations. Do not reduce or weaken the validation scope.
5. **Validation-evidence gate:** Create `evidence/GUIDANCE-VALIDATION.md` only if the complete R1-T16 rerun passes. On FAIL or BLOCKED, create no validation file.
6. **Principal Software Developer — final boundary verification and report:** Verify the exact one-line correction, QA PASS, preserved Architect PASS basis, complete-rerun result, validation-file gate, and zero prohibited mutations before reporting the outcome. No status, ledger, progress, task, state, or Git mutation is authorized by this step.

This is an authorization and routing record only. The manifest correction has not been applied by the Project Executive Manager.