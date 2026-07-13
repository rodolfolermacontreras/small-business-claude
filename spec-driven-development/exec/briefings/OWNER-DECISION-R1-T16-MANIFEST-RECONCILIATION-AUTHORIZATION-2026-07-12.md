---
id: PI-1-S1-R1-T16-MANIFEST-RECONCILIATION-AUTHORIZATION-2026-07-12
type: owner-decision
date: 2026-07-12
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T16-one-file-current-state-manifest-reconciliation-review-and-conditional-complete-rerun
supersedes: prior-R1-T16-manifest-remediation-boundaries-in-part
---

# PI-1 Sprint 1 R1-T16 Manifest-Reconciliation Authorization

## Decision Authority and Source

On 2026-07-12, human owner Rodolfo Lerma explicitly approved the previously presented one-file R1-T16 manifest reconciliation and complete validation route with the exact response:

> Option 1

The previously presented Option 1 authorized remediation only in `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`, limited to current-state agent, skill, and pack classification rows; roster-authority wording; stale agent, skill, pack, cross-reference, and completeness narratives; and consequential `.github/` aggregate arithmetic. It also authorized the ordered independent reviews, a complete manifest-derived R1-T16 rerun only after all reviews pass, conditional creation or update of `GUIDANCE-VALIDATION.md` only on complete PASS, and final Principal Software Developer boundary verification.

This briefing is the authoritative dated Level 2 disposition of that decision. It supersedes prior R1-T16 manifest-remediation and manifest-arithmetic boundaries only where they conflict with the exact one-file reconciliation boundary, required current facts, ordered reviews, conditional evidence gate, and prohibitions recorded here. All prior R1-T16 validation requirements, evidence discipline, secret and protected-data rules, access limits, stop conditions, host invariants, protected surfaces, and no-false-claim requirements remain controlling unless this record is more restrictive.

Creating this briefing records authorization only. It does not remediate the manifest, dispatch or activate an actor, perform a review, rerun R1-T16, create or update validation evidence, change project state, or perform a Git operation.

## Exact Remediation Authorization

Through the Principal Software Developer, exactly one bounded correction actor may remediate only:

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`

The remediation is limited to the smallest internally consistent changes necessary in these content regions:

1. current-state agent classification rows;
2. current-state skill classification rows;
3. current-state skill-pack classification rows;
4. roster-authority wording associated with those classifications;
5. stale agent, skill, pack, cross-reference, and completeness narratives associated with those classifications; and
6. consequential `.github/` aggregate arithmetic resulting from those authorized current-state corrections.

No other manifest row, narrative, heading, evidence claim, disposition, scope, formatting, or whitespace may change except where a minimal consequential adjustment within the six authorized content regions is required to state the exact current facts below consistently. The actor must not reinterpret policy, change lifecycle or activation state at its source, or use the manifest to create authority absent from the current rosters and governing decisions.

## Required Current Facts

The corrected manifest must state and reconcile all of the following current facts without omission, double counting, or authority inflation:

### Agents

- **14/14 agents are rostered.**
- **Six agent bodies are active.**
- Of those six active agent bodies, **three are executable task-gated generic workers**.
- Of those six active agent bodies, **three are active Principals that remain dependency-blocked and non-executable**.
- **Eight agents are reference/template agents.**
- Active status must not be presented as automatic dispatch, current execution, satisfied dependency, or executable authority where the roster or governing route does not provide it.

### Skills and Reference Documents

- **35/35 skills are rostered.**
- **Seven skill bodies are active.**
- **28 rostered `SKILL.md` bodies are inactive/reference.**
- **Two additional skill documents are reference documents outside the rostered `SKILL.md` body count.**
- The two additional reference documents must not be counted as roster asymmetries, active skills, or rostered skill bodies.

### Packs and Reconciliation

- **Five skill packs exist, with zero active packs.**
- **Zero file/roster asymmetries exist** under the governing body-to-roster comparison, with the two additional reference skill documents explicitly distinguished from rostered `SKILL.md` bodies.
- Pack presence or membership must not imply active-pack status, activation, dispatch, or executable authority.

### Consequential `.github/` Aggregate

The corrected aggregate must be:

> `.github/`: 73 paths = 1 active host guidance + 30 active framework-process guidance + 42 reference/example.

The arithmetic must reconcile exactly as `1 + 30 + 42 = 73`, preserve the total of 73, and agree with the corrected path and classification rows. No category may be used to conceal an unresolved path, mismatch, or lifecycle ambiguity.

## Exact Ownership and Actor Boundary

- **Sequencing, preflight, and routing owner:** Principal Software Developer.
- **Permitted correction actor:** Exactly one bounded correction actor selected and routed through the Principal Software Developer.
- **Immediate correction write allowlist:** Only `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`, and only the authorized content regions above.
- **Dispatch effect:** No dispatch is automatic. This record does not activate, roster, hire, or dispatch any Principal, worker, agent, skill, route, roster entry, or pack.
- **Project Executive Manager boundary:** The Project Executive Manager records this authorization only and must not perform the remediation.

The Principal Software Developer must carry the exact current facts, one-file allowlist, content-region limits, review gates, conditional evidence rule, Git-inspection boundary, and every prohibition in this record into the correction route. The actor must stop without mutation if the facts cannot be reconciled deterministically within the authorized regions, if another path must change, if source authorities conflict, or if the correction would require a policy or lifecycle decision.

## Source and Write Protections

The following are read-only reconciliation inputs and are not remediation write targets:

- `spec-driven-development/roster/agents.json`;
- `spec-driven-development/roster/skills.json`;
- `spec-driven-development/roster/skill_packs.json`;
- all agent bodies;
- all skill bodies and additional reference skill documents;
- all pack definitions;
- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/SOURCE-MATRIX.md`; and
- applicable governing owner decisions and R1-T16 validation requirements.

This authorization does not permit any roster, pack, body, source-matrix, or authority-source correction. Any defect found in a protected source stops the route and must be reported without remediation under this authorization.

## Mandatory Independent Reviews and Ordered Gates

All review authority is read-only and independent of the correction actor's self-review. Reviewers may not correct a defect. Any FAIL, BLOCKED result, unavailable reviewer, missing evidence, ambiguity, conflict, scope deviation, or unverified condition stops the route without opportunistic mutation.

1. **Independent QA:** After remediation, verify the exact one-file boundary; every authorized changed region; all required current facts and counts; `1 + 30 + 42 = 73`; row-to-narrative and row-to-aggregate consistency; roster, body, reference-document, and pack reconciliation; zero file/roster asymmetries; preservation of all unrelated manifest content; and zero prohibited mutations or operations.
2. **Fresh Principal Architect review:** Only after independent QA passes, perform a new read-only governed-surface review. Prior Architect reviews do not satisfy this gate. Verify lifecycle and activation interpretation, roster authority, the distinction between active and executable, dependency-blocked Principal treatment, reference/template treatment, pack inactivity, completeness logic, cross-reference consistency, aggregate classification, and absence of widened authority.
3. **Principal Product Manager disposition or review:** Record a dated, evidence-based `NOT-AFFECTED` disposition if product authority, customer-discovery gates, prioritization, backlog commitment, acceptance criteria, product scope, and user value are not affected. If any PM domain is or may be affected, perform a read-only PM review instead. Ambiguity requires review and may not be resolved through a `NOT-AFFECTED` disposition.
4. **Principal Software Developer domain review:** After the preceding applicable reviews pass, perform a read-only review distinct from final boundary verification. Verify executable clarity, task-gated worker treatment, blocked-Principal treatment, bounded-actor instructions, source authority, stop behavior, validation sequencing, evidence rules, and absence of widened implementation or dispatch authority.
5. **Complete manifest-derived R1-T16 rerun:** Only after independent QA, fresh Architect review, PM `NOT-AFFECTED` disposition or review, and PSD domain review all pass may QA rerun R1-T16 in full from the corrected current manifest-derived scan list. The rerun must retain every applicable identity, implementation-fact, Git-policy, host-guidance, lifecycle, roster/pack-integrity, protected-invariant, protected-change, evidence, access, and stop-condition check required by the governing R1-T16 authorizations. A changed-row-only, manifest-only, roster-only, arithmetic-only, mismatch-only, or delta-only rerun is prohibited.
6. **Conditional validation evidence:** `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` may be created or updated only on a complete R1-T16 rerun PASS and subject to final PSD boundary verification. On FAIL, BLOCKED, missing evidence, ambiguity, incomplete validation, or scope deviation, it must not be created, changed, replaced, or supplemented.
7. **Final Principal Software Developer boundary verification:** Verify the exact remediation boundary, all required dated review evidence, the complete-rerun result, the conditional validation-evidence gate, the permitted read-only Git boundary, zero prohibited mutations or operations, and no unauthorized state transition before accepting or reporting PASS or BLOCKED.

## Bounded Read-Only Git Inspection Authority

Local read-only Git inspection is permitted only as already narrowly authorized for R1-T16 scope verification. It remains limited to these command families:

- `git status`;
- `git diff`;
- `git diff --cached`;
- `git diff --check`;
- `git show`; and
- `git hash-object` without `-w`, `--write`, or any other write option.

This authority is local-only, optional-index-refresh-disabled, and solely for scope and boundary verification. A command must not be run if it would refresh, update, lock, write, contact a remote, or otherwise mutate files, the index, objects, refs, configuration, worktrees, repository state, or external state. No other Git command, command family, option, alias, hook, script, network operation, or remote access is authorized.

## Conditional `GUIDANCE-VALIDATION.md` Gate

The only possible write outside the manifest remediation is:

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md`

Creation or update is permitted only if all independent and domain reviews pass, the complete manifest-derived R1-T16 rerun passes every governing requirement, and final Principal Software Developer boundary verification confirms the route remained within scope. On any other outcome, the file must not be created, changed, replaced, or supplemented.

## Explicit Prohibitions

Except for the exact one-file manifest remediation and the strictly conditional validation evidence above, every other file, content, state, status, lifecycle, and Git mutation is prohibited. This includes, without limitation:

- any roster, pack, agent-body, skill-body, reference-skill-document, or `SOURCE-MATRIX.md` change;
- any deletion, restoration, movement, rename, cleanup, normalization, opportunistic correction, reclassification outside the authorized manifest regions, or history rewrite;
- any change to prior owner-decision briefings, validation history, sprint history, or completed evidence;
- any application or host-source change under `server/`, `public/`, or another source surface;
- any package, dependency, lockfile, package metadata, package-script, test, test runner, test configuration, test evidence, test status, continuous-integration, workflow, branch-protection, required-check, enforcement, runtime, Node.js compatibility, environment, database, connector-data, business-data, or secret change or access;
- any Sprint 2 artifact, scope, implementation, validation, execution, readiness claim, or mutation;
- any fleet-ledger or other ledger mutation;
- any work-index mutation;
- any generated-state, executive-state, dashboard-state, state-builder output, or other state mutation;
- any sprint-progress, board, report-up, milestone, dispatch-status, task-status, task-completion, lifecycle, or other progress mutation;
- any product implementation, customer-discovery execution or conclusion, backlog commitment, external issue mirroring, production action, or external integration;
- staging, committing, amending, pushing, pulling, fetching, opening or modifying a pull request, merging, rebasing, cherry-picking, reverting, resetting, tagging, stashing, applying a Git patch, switching or checking out, restoring, cleaning, or creating, deleting, moving, repairing, locking, unlocking, or pruning a branch or worktree;
- any Git network operation or remote access; and
- authority inferred beyond the exact boundaries and ordered route recorded here.

No application, package, test, continuous-integration, runtime, Sprint 2, ledger, work-index, generated-state, board, task-status, progress, or history mutation is authorized. The earlier one-final-progress-checkpoint authority is not exercised, renewed, extended, or included in this route.

## Required Ordered Route

1. **Principal Software Developer — preflight:** Confirm this record, the one-file remediation allowlist, the six authorized content regions, required current facts, protected read-only sources, stable inspection baseline, required reviewers, conditional evidence path, existing R1-T16 authorities, and absence of stop conditions. Preflight must not mutate any file, state, status, ledger, work index, progress surface, or Git surface.
2. **Principal Software Developer — route one bounded actor:** Route exactly one correction actor with this record's complete boundaries, facts, stop conditions, and prohibitions. No other actor is authorized to remediate the manifest.
3. **Bounded correction actor — manifest reconciliation only:** Make only the smallest changes in `ASSET-MANIFEST.md` needed to reconcile the authorized current-state rows, authority wording, stale narratives, cross-references, completeness statements, and consequential aggregate arithmetic. Stop without mutation on any conflict, ambiguity, protected-source defect, need for another path, or need to widen scope.
4. **Independent QA — read-only review:** Perform the mandatory independent QA review and stop without correction on any concern.
5. **Principal Architect — fresh read-only review:** Perform the mandatory new governed-surface review; prior reviews are insufficient.
6. **Principal Product Manager — read-only disposition:** Record an evidence-based `NOT-AFFECTED` disposition or perform the required PM-domain review.
7. **Principal Software Developer — read-only domain review:** Perform the mandatory PSD domain review, distinct from final verification.
8. **QA Engineer — complete R1-T16 rerun:** Only after every applicable review passes, execute the complete manifest-derived rerun. Do not reduce or weaken its scope.
9. **Conditional validation evidence:** Create or update `GUIDANCE-VALIDATION.md` only on complete PASS and subject to final PSD verification; otherwise make no validation-evidence mutation.
10. **Principal Software Developer — final boundary verification:** Verify every boundary, review, rerun result, conditional evidence action, permitted inspection, prohibition, and state exclusion before reporting PASS or BLOCKED. Do not mutate status, ledger, work index, generated state, board, task status, progress, history, or Git.

This is an authorization and routing record only. The Project Executive Manager has not performed the remediation, dispatched an actor, conducted a review, rerun R1-T16, created or updated validation evidence, changed status, or executed a Git command.
