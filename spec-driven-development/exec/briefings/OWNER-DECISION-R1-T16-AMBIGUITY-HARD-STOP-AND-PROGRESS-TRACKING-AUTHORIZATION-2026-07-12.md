---
id: PI-1-S1-R1-T16-AMBIGUITY-HARD-STOP-AND-PROGRESS-TRACKING-AUTHORIZATION-2026-07-12
type: owner-decision
date: 2026-07-12
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T16-exact-ambiguity-hard-stop-correction-review-conditional-rerun-and-one-final-progress-checkpoint
supersedes: prior-R1-T16-remediation-boundaries-in-part
---

# PI-1 Sprint 1 R1-T16 Ambiguity Hard-Stop and Progress-Tracking Authorization

## Decision Authority and Source

On 2026-07-12, human owner Rodolfo Lerma gave the exact response:

> Option 1 and week tracking the overall progress

In context, this explicitly approves Option 1 and requests continued tracking of overall progress. This briefing is the authoritative dated Level 2 record of that approval and request.

This decision supersedes prior R1-T16 remediation boundaries only where they conflict with the exact single-occurrence replacement, bounded inspection authority, ordered review route, conditional evidence gate, and final progress-checkpoint authority recorded here. All prior R1-T16 validation requirements, evidence discipline, protected invariants, secret and data protections, access limits, stop conditions, and no-false-claim requirements remain controlling unless this record is more restrictive.

Creating this briefing records authorization only. It does not perform the correction, append the progress checkpoint, dispatch an actor, conduct a review, rerun R1-T16, create validation evidence, change task status, or execute a Git command.

## Exact Authorized Correction

Through the Principal Software Developer, exactly one bounded actor may replace exactly one occurrence in `.github/prompts/constitution.prompt.md` of:

> If ambiguous, choose the closest matching constitution file, state the assumption, and continue.

with exactly:

> If the target constitution file, applicable amendment authority, or permitted metadata change is absent, conflicting, or ambiguous, stop without mutation and request clarification; do not select a target by assumption.

The actor must make no other content or whitespace change. If the old text is absent, differs in any way, occurs more than once, or cannot be replaced without another change, the actor must stop without mutation and return the mismatch through the Principal Software Developer.

## Exact Actor and Routing Boundary

- **Sequencing, preflight, and routing owner:** Principal Software Developer.
- **Permitted correction actor:** Exactly one bounded actor routed through the Principal Software Developer.
- **Correction write allowlist:** Only the exact single-occurrence replacement in `.github/prompts/constitution.prompt.md` stated above.
- **Dispatch effect:** This record does not itself dispatch, activate, roster, or hire any actor.
- **Correction prohibition:** The Project Executive Manager must not perform the correction.

No second correction actor, opportunistic fixer, reviewer mutation, or widened remediation route is authorized.

## Bounded Read-Only Git Inspection Authority

Local read-only Git inspection is authorized solely as needed to verify the R1-T16 scope and boundaries. It is limited to these command families:

- `git status`
- `git diff`
- `git diff --cached`
- `git diff --check`
- `git show`
- `git hash-object` without `-w`, `--write`, or any other write option

This authority has all of these limits:

1. Local inspection only; no network access or remote operation.
2. Read-only use solely for R1-T16 scope verification.
3. Optional index refresh is disabled. Commands and options that refresh, update, lock, or otherwise write the index are prohibited.
4. No write option, side effect, mutation, cleanup, restoration, checkout, or state transition is permitted.
5. If a permitted command cannot be run without mutation or an optional refresh, it must not be run.

No other Git command or Git operation is authorized.

## Mandatory Independent Reviews and Ordered Gates

Every review is independent of the correction actor's self-review. Review authority is read-only and does not permit correction. Any FAIL, BLOCKED result, unavailable reviewer, missing evidence, ambiguity, conflict, scope deviation, or unverified condition stops the route without opportunistic mutation.

1. **Independent QA:** After the correction, verify the exact one-file, one-occurrence, exact-text replacement; ambiguity hard-stop behavior; preservation of all unrelated prompt content and whitespace; and zero prohibited file, state, status, or Git mutation.
2. **Fresh Principal Architect review:** Only after independent QA passes, perform a new read-only governed-surface review. Prior Architect reviews do not satisfy this gate. Verify the target-file, amendment-authority, and permitted-metadata hard stops; authority hierarchy; no selection by assumption; no widened amendment or mutation authority; and preservation of the prompt's governed behavior and protected invariants.
3. **Principal Product Manager disposition:** Record a dated, evidence-based `NOT-AFFECTED` disposition if product authority, customer-discovery gates, prioritization, backlog commitment, acceptance criteria, scope, and user value are not affected. If any PM domain is or may be affected, perform a read-only PM review instead. Ambiguity requires review, not a `NOT-AFFECTED` disposition.
4. **Principal Software Developer domain review:** After the preceding applicable reviews pass, perform a read-only review distinct from final boundary verification. Verify executable clarity, bounded-actor instructions, stop behavior, validation sequencing, evidence rules, and absence of widened implementation or dispatch authority.
5. **Complete manifest-derived R1-T16 rerun:** Only after independent QA, fresh Architect review, PM `NOT-AFFECTED` disposition or review, and PSD domain review all pass may QA rerun R1-T16 in full from the current manifest-derived scan list. The rerun must include every applicable identity, implementation-fact, Git-policy, host-guidance, lifecycle, roster/pack-integrity, protected-invariant, protected-change, evidence, access, and stop-condition check required by the governing R1-T16 authorizations. A changed-file-only, prompt-only, invariant-only, metadata-only, arithmetic-only, or delta-only rerun is prohibited.
6. **Conditional validation evidence:** `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` may be created or updated only on a complete R1-T16 rerun PASS and subject to final PSD boundary verification. On FAIL, BLOCKED, missing evidence, ambiguity, or incomplete validation, it must not be created, changed, replaced, or supplemented.
7. **Final Principal Software Developer boundary verification:** Verify the exact correction, all required dated review evidence, the complete-rerun result, the conditional validation-evidence gate, the permitted read-only Git boundary, zero prohibited mutations or operations, and no unauthorized state transition before accepting or reporting PASS or BLOCKED.

## One Authorized Final Overall-Progress Checkpoint

Only after the full route above finishes and final Principal Software Developer boundary verification is complete, the Sprint Executive Manager is authorized to append exactly one factual dated overall-progress checkpoint to `spec-driven-development/exec/sprint-progress.md`.

The checkpoint must:

1. be appended without deleting, replacing, rewriting, reordering, or otherwise altering prior history;
2. state the route result accurately as `PASS` or `BLOCKED`;
3. state the accurate overall completed-task count and total task count supported by the completed route evidence;
4. distinguish a completed R1-T16 PASS from a blocked route and make no unsupported completion claim;
5. identify the governing decision record and material review/rerun outcome in concise factual language; and
6. contain no unrelated status, planning, scope, schedule, ownership, or historical change.

This is the sole authorized progress/state/status mutation. It may be performed only by the Sprint Executive Manager after the route finishes. The Project Executive Manager must not perform the append. No recurring, weekly, periodic, second, or subsequent append is authorized by the owner's wording; continued tracking here is implemented as this one bounded post-route checkpoint only.

## Exact Write Boundaries

### Immediate correction write allowlist

- `.github/prompts/constitution.prompt.md` — only the exact single-occurrence replacement stated in this record.

### Sole conditional validation-evidence path

- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` — creation or update only after a complete manifest-derived R1-T16 PASS and subject to final PSD boundary verification.

### Sole post-route progress path

- `spec-driven-development/exec/sprint-progress.md` — exactly one factual dated append by the Sprint Executive Manager only after the route finishes and final PSD boundary verification completes.

### Separately requested authority record

- `spec-driven-development/exec/briefings/OWNER-DECISION-R1-T16-AMBIGUITY-HARD-STOP-AND-PROGRESS-TRACKING-AUTHORIZATION-2026-07-12.md` — this briefing records authority and is not part of the later actor, reviewer, rerun, evidence, or progress write sets.

No other file, content, state, status, or Git mutation is authorized.

## Explicit Prohibitions

Except for the exact correction, conditional validation evidence, and one final progress append expressly authorized above, every other file, content, state, status, lifecycle, and Git mutation is prohibited. This includes, without limitation:

- any other edit, deletion, restoration, creation, move, rename, cleanup, formatting, normalization, reclassification, or whitespace-only change;
- any other change in `.github/prompts/constitution.prompt.md`;
- any constitution amendment or constitution metadata mutation;
- any change to another prompt, instruction, agent, skill, pack, roster, template, manifest, documentation file, sprint artifact, evidence file, briefing, report, board, task record, generated output, or process artifact;
- any application or host-source change under `server/`, `public/`, or another source surface;
- any package, dependency, lockfile, package metadata, or package-script change;
- any test, test runner, test configuration, test evidence, or test-status change;
- any continuous-integration, workflow, branch-protection, check, or enforcement change;
- any runtime, Node.js compatibility, environment, database, connector-data, business-data, or secret change or access;
- any Sprint 2 artifact, scope, implementation, validation, execution, or readiness claim;
- any fleet-ledger or other ledger mutation;
- any work-index mutation;
- any generated-state, executive-state, dashboard-state, state-builder output, or other state mutation;
- any sprint-progress, board, report-up, milestone, dispatch-status, task-status, task-completion, lifecycle, or other progress mutation except the one authorized final append;
- any product implementation, customer-discovery execution or conclusion, backlog commitment, external issue mirroring, or production action;
- any network Git operation or remote access; and
- authority inferred beyond the exact boundaries and ordered route in this record.

All Git mutation commands and write options are explicitly prohibited, including:

- `git add` or any staging operation;
- `git commit` or `git commit --amend`;
- `git push`, `git pull`, or `git fetch`;
- `git switch` or `git checkout`;
- `git restore`, `git reset`, or `git clean`;
- `git branch` or `git worktree` when used to create, delete, move, repair, lock, unlock, prune, switch, or otherwise mutate;
- `git merge`, `git rebase`, `git cherry-pick`, or `git revert`;
- `git tag` or `git stash`;
- `git apply` or any patch-application command;
- index-refresh, index-update, index-locking, write-tree, update-index, hash-object write, or equivalent write options; and
- any command, option, alias, script, hook, plumbing command, or porcelain command that mutates files, the index, refs, objects, configuration, worktrees, remotes, repository state, or external state.

## Required Ordered Route

1. **Principal Software Developer — preflight:** Confirm this record, the exact old and new text, one-occurrence requirement, stable read-only baseline, bounded Git-inspection list, required reviewers, conditional evidence path, final progress path, and absence of stop conditions. Preflight must not mutate files, state, status, ledger, work index, progress, or Git.
2. **Principal Software Developer — route one actor:** Route exactly one bounded correction actor with this record's complete boundaries and prohibitions. No other actor is authorized to correct the prompt.
3. **Bounded actor — correction only:** Perform only the exact single-occurrence replacement. Stop without mutation on any mismatch, duplicate, ambiguity, conflict, or need for another change.
4. **Independent QA — read-only review:** Perform the mandatory independent QA review and stop without correction on any concern.
5. **Principal Architect — fresh read-only review:** Perform the mandatory new governed-surface review; prior reviews are insufficient.
6. **Principal Product Manager — read-only disposition:** Record an evidence-based `NOT-AFFECTED` disposition or perform the required domain review.
7. **Principal Software Developer — read-only domain review:** Perform the mandatory PSD domain review, distinct from final verification.
8. **QA Engineer — complete R1-T16 rerun:** Only after every applicable review passes, execute the complete manifest-derived rerun. Do not reduce the scope.
9. **Conditional validation evidence:** Create or update `GUIDANCE-VALIDATION.md` only on complete PASS and subject to final PSD verification; otherwise make no validation-evidence mutation.
10. **Principal Software Developer — final boundary verification:** Verify every boundary, review, rerun result, conditional evidence action, permitted inspection, prohibition, and state exclusion. Report `PASS` or `BLOCKED` with the accurate task count.
11. **Sprint Executive Manager — one progress append:** Only after step 10, append one factual dated overall-progress checkpoint to `spec-driven-development/exec/sprint-progress.md`, preserving all prior history and accurately reflecting `PASS` or `BLOCKED` and the supported task count.

This is an authorization and routing record only. The Project Executive Manager has not performed the correction, appended progress, dispatched an actor, conducted a review, rerun R1-T16, created validation evidence, changed task status, or executed a Git command.
