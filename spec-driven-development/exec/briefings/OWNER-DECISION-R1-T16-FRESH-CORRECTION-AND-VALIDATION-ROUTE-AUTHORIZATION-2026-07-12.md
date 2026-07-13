---
id: PI-1-S1-R1-T16-FRESH-CORRECTION-AND-VALIDATION-ROUTE-AUTHORIZATION-2026-07-12
type: owner-decision
date: 2026-07-12
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T16-single-consolidated-fresh-correction-audit-review-complete-rerun-and-final-report
supersedes: prior-R1-T16-route-boundaries-in-part
---

# PI-1 Sprint 1 R1-T16 Fresh-Correction and Validation-Route Authorization

## Decision Authority and Exact Response

On 2026-07-12, human owner Rodolfo Lerma explicitly approved the previously presented single consolidated R1-T16 fresh-correction and validation route with the exact response:

> Option 1 autorhized

This briefing is the authoritative dated Level 2 record of that approval. It authorizes one uninterrupted local-only route under the exact boundaries below. No further intermediate owner approval is required unless a material scope or safety issue occurs.

A material scope or safety issue means a required write outside the allowlist, a required policy or lifecycle decision, a protected-source defect or conflict, suspected secret or protected-data exposure, a non-local or network requirement, a prohibited Git or repository-state operation, inability to preserve required facts or the aggregate, evidence insufficiency that cannot be resolved within the authorized fresh cycle, or any need to weaken a governing R1-T16 validation or safety requirement. An ordinary review or validation failure that can only be reported does not authorize correction; it ends the route as `BLOCKED` and is included in the final report without an intermediate approval request.

This record supersedes prior R1-T16 route boundaries only where they conflict with this consolidated fresh-correction route, its immediate audit-evidence authority, its uninterrupted sequencing, or its exact write boundaries. All stricter governing R1-T16 host invariants, protected surfaces, secret and protected-data rules, no-false-claim requirements, validation requirements, and stop conditions remain controlling.

Creating this briefing records authorization only. It does not execute the route, calculate a hash, inspect or change the manifest, create correction evidence, dispatch an actor, perform a review, rerun R1-T16, create or update validation evidence, change status, or begin R1-T17. The Project Executive Manager must not execute the route.

## Uninterrupted Authorized Route

The Principal Software Developer owns sequencing and may carry this route from preflight through one final report without returning for intermediate owner approval, subject to the material scope and safety stop above:

1. local-only, idempotent rewrite or normalization of only the already-approved current-state regions in `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`;
2. immediate sanitized audit capture in exactly one new file, `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/R1-T16-FRESH-CORRECTION-EVIDENCE.md`;
3. independent QA, fresh Principal Architect review, Principal Product Manager `NOT-AFFECTED` disposition or review, and Principal Software Developer domain review;
4. a complete manifest-derived R1-T16 rerun under every governing requirement;
5. creation or update of `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` only on complete PASS;
6. final Principal Software Developer boundary verification; and
7. one final factual report to the owner.

No step authorizes opportunistic remediation by a reviewer or validator. A concern outside the exact correction boundary stops the route rather than widening it.

## Exact Manifest Correction Boundary

Exactly one bounded correction actor, selected and routed through the Principal Software Developer, may perform a local-only idempotent rewrite or normalization in:

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`

The actor may alter only the already-approved current-state regions:

1. current-state agent classification rows;
2. current-state skill classification rows;
3. current-state skill-pack classification rows;
4. roster-authority wording associated with those classifications;
5. stale agent, skill, pack, cross-reference, and completeness narratives associated with those classifications; and
6. consequential `.github/` aggregate arithmetic resulting from those current-state corrections.

The operation must be deterministic and idempotent. The actor must first construct the intended content in memory and compare it bytewise with the immediate preimage. If the file already contains the exact intended current-state content, the actor must make no manifest write and record a deterministic no-op. If it differs only within the authorized regions, the actor may write the intended content while preserving every byte outside those regions. Re-running the same normalization against its own postimage must produce a no-op.

The actor must stop before mutation if the target cannot be normalized deterministically, an unauthorized region would change, a protected source conflicts, another path is required, or a policy, lifecycle, activation, product, or implementation decision is needed.

## Required Manifest Facts and Aggregate

The correction or deterministic no-op must preserve and reconcile these facts:

### Agents

- 14/14 agents are rostered.
- Six agent bodies are active.
- Three of the six active agent bodies are executable task-gated generic workers.
- Three of the six active agent bodies are active Principals that remain dependency-blocked and non-executable.
- Eight agents are reference/template agents.
- Active status does not imply automatic dispatch, current execution, satisfied dependencies, or executable authority.

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

### Required Aggregate

The `.github/` aggregate must remain exactly:

> `.github/`: 73 paths = 1 active host guidance + 30 active framework-process guidance + 42 reference/example.

The arithmetic must remain exactly `1 + 30 + 42 = 73`. The total of 73 and every manifest-derived category must agree with the corrected path and classification rows; no category may conceal an unresolved path, mismatch, or lifecycle ambiguity.

## Mandatory Fresh-Correction Evidence

The route must create exactly one new immediate audit file:

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/R1-T16-FRESH-CORRECTION-EVIDENCE.md`

If that path already exists before the fresh cycle, the route must stop as `BLOCKED`; replacement, truncation, deletion, or reuse is not authorized.

The file must be created immediately as part of the same bounded correction action and must contain only sanitized, non-secret, path-bounded evidence:

- UTC and local timestamps bracketing the action;
- bounded actor identity and role;
- the exact authorized action identity;
- the manifest path;
- the immediate preimage SHA-256 calculated before any manifest mutation;
- the immediate postimage SHA-256 calculated after the write or confirmed no-op;
- exact patch hunks limited to the authorized regions, or an explicit deterministic no-op confirmation;
- confirmation that the in-memory intended postimage was compared with the immediate preimage;
- confirmation that the resulting postimage normalizes to itself without another change;
- sanitized pre-action and post-action status sufficient to bracket the action without persisting unrelated file names, content, secrets, business data, connector data, or personal data;
- confirmation that only the manifest and this fresh evidence path were written during the correction action, or a `BLOCKED` result if that cannot be established;
- the required facts and `1 + 30 + 42 = 73` reconciliation result; and
- dated, sanitized outcomes from each subsequent required review, the complete rerun, and final boundary verification.

Exact patch hunks must not include unrelated context beyond what is necessary to identify the authorized changed regions. A no-op record must state that the preimage and postimage hashes are identical and that no manifest write occurred. Evidence must never contain secret values, environment values, connector or business data, broad terminal history, unrelated status paths, unrelated diffs, or raw logs.

## Authorized Minimal Local Operations

The bounded actor and required reviewers may use only the minimum local operations needed to complete this route:

- read the manifest and protected governing inputs without changing them;
- obtain UTC and local timestamps;
- calculate SHA-256 for the manifest before and after the action using local read-only hashing;
- construct normalized manifest content in memory;
- compare preimage, intended postimage, and resulting postimage in memory, including bytewise comparison;
- derive exact authorized-region patch hunks in memory;
- capture sanitized bracketing status through the preserved local read-only Git status and diff authority;
- write the manifest only when the deterministic comparison requires an authorized-region change;
- create and append only the new fresh-correction evidence path for this route's sanitized audit, review, rerun, and final-verification outcomes; and
- conditionally create or update `GUIDANCE-VALIDATION.md` only after a complete R1-T16 PASS and subject to final boundary verification.

Permitted local read-only Git command families remain exclusively:

- `git status`;
- `git diff`;
- `git diff --cached`;
- `git diff --check`;
- `git show`; and
- `git hash-object` without `-w`, `--write`, or an equivalent write option.

Local non-Git hashing, timestamp, file-read, in-memory comparison, and exact-path file-write operations are authorized only for the purposes and paths above. No temporary file, cache, transcript, export, clipboard artifact, broad log, or additional evidence file may be created. A permitted command or operation must not be used if its concrete form, alias, hook, configuration, or environment would refresh an index, write an object, alter repository state, contact a remote, expose protected content, or mutate an unauthorized path.

During the correction action, the only route writes are the manifest and the new fresh-correction evidence file. The conditional `GUIDANCE-VALIDATION.md` write is a later gate and is not authorized until the complete rerun passes.

## Required Independent Reviews and Validation

All reviews are independent of the correction actor's self-review and are read-only except for adding their sanitized dated disposition to the fresh-correction evidence file. Reviewers may not correct a defect.

1. **Independent QA:** Verify the immediate preimage and postimage hashes, exact patch hunks or deterministic no-op, idempotence, bracketing status, actor/action identity, timestamps, exact path boundary, every required fact and count, `1 + 30 + 42 = 73`, row-to-narrative and row-to-aggregate consistency, preservation of unrelated manifest content, and absence of prohibited operations or mutations.
2. **Fresh Principal Architect review:** Only after QA passes, perform a new governed-surface review. Prior Architect reviews do not satisfy this gate. Verify lifecycle and activation interpretation, roster authority, active-versus-executable distinctions, dependency-blocked Principal treatment, reference/template treatment, pack inactivity, completeness logic, cross-reference consistency, aggregate classification, and absence of widened authority.
3. **Principal Product Manager disposition or review:** Record a dated `NOT-AFFECTED` disposition only when evidence establishes that product authority, customer-discovery gates, prioritization, backlog commitment, acceptance criteria, product scope, and user value are unaffected. If any PM domain is or may be affected, perform a read-only PM review. Ambiguity stops the route.
4. **Principal Software Developer domain review:** Verify executable clarity, task-gated worker and blocked-Principal treatment, bounded-actor instructions, source authority, stop behavior, validation sequencing, audit sufficiency, evidence rules, and absence of widened implementation or dispatch authority.
5. **Complete manifest-derived R1-T16 rerun:** Only after every applicable review passes, QA must rerun R1-T16 in full from the current manifest-derived scope. The rerun must retain every applicable identity, implementation-fact, Git-policy, host-guidance, lifecycle, roster/pack-integrity, protected-invariant, protected-change, evidence, access, and stop-condition check required by all governing R1-T16 authorizations. A changed-row-only, manifest-only, audit-only, arithmetic-only, mismatch-only, delta-only, or otherwise reduced rerun is prohibited.
6. **Conditional validation evidence:** `GUIDANCE-VALIDATION.md` may be created or updated only when the complete rerun passes every governing requirement. On FAIL, `BLOCKED`, ambiguity, missing evidence, incomplete validation, or scope deviation, it must remain unchanged.
7. **Final Principal Software Developer boundary verification:** Verify the fresh-cycle hashes and evidence, exact correction or no-op boundary, all dated review outcomes, complete-rerun scope and result, conditional validation-evidence gate, zero prohibited operations or mutations, no unauthorized state transition, and no R1-T17 activity before accepting and issuing one final report.

Any failure or ambiguity stops the route as `BLOCKED`. No intermediate owner approval is required merely to record the stop and provide the final factual report. Any material scope or safety issue must be escalated and no further route action may occur without new owner authority.

## Exact Write Allowlist

Creation of this owner-decision briefing is the separately requested authorization record and is not part of the later route write set.

The later route write allowlist is exactly:

1. `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md` — only the authorized current-state regions, and only if the deterministic normalization is not a no-op;
2. `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/R1-T16-FRESH-CORRECTION-EVIDENCE.md` — exactly one new sanitized route-evidence file; and
3. `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` — only conditionally after complete PASS and subject to final Principal Software Developer boundary verification.

No other repository or external write is authorized. The final report is a human-facing factual report and does not authorize a repository file, state, status, task, board, ledger, or progress mutation.

## Explicit Prohibitions

This authorization preserves the prohibition on:

- staging, committing, amending, pushing, pulling, fetching, remote access, network access, opening or changing a pull request, merging, rebasing, cherry-picking, reverting, resetting, tagging, stashing, applying a Git patch, switching, checking out, restoring, cleaning, or any index, object, ref, configuration, branch, or worktree write or change;
- branch or worktree creation, deletion, movement, repair, lock, unlock, prune, or other mutation;
- any application or host-source mutation under `server/`, `public/`, or another application surface;
- any package, dependency, lockfile, package metadata, package script, test, test runner, test configuration, test evidence, test status, continuous-integration, workflow, required-check, branch-protection, enforcement, runtime, Node.js compatibility, environment, database, connector-data, business-data, or secret access or mutation;
- any Sprint 2 artifact, scope, implementation, validation, execution, readiness claim, or mutation;
- any fleet ledger or other ledger mutation;
- any work-index mutation;
- any generated state, executive state, dashboard state, state-builder output, or other state mutation;
- any sprint-progress, board, report-up file, milestone, dispatch status, task status, task completion, lifecycle, or other progress mutation;
- any roster, pack, agent-body, skill-body, reference-skill-document, prompt, instruction, constitution, source-matrix, prior evidence, prior briefing, or history mutation;
- any cleanup, deletion, restoration, movement, rename, normalization, reclassification, formatting, or whitespace-only change outside the authorized manifest regions;
- any temporary, cache, audit-source, log, transcript, debug, history, screenshot, export, hash, comparison, or evidence artifact outside the one new fresh-correction evidence file;
- inspection, reproduction, or persistence of secrets, credentials, tokens, environment values, connector data, business data, personal data, or unrelated content;
- any product implementation, customer-discovery execution or conclusion, backlog commitment, external issue mirroring, production action, or external integration; and
- authority inferred beyond this exact consolidated R1-T16 route.

R1-T17 must not be started, dispatched, prepared, implemented, reviewed, validated, marked in progress, marked complete, or otherwise mutated or implied to have begun. No R1-T17 artifact, evidence, status, or execution action is authorized.

## Final Report Requirement

The Principal Software Developer must provide exactly one final route report stating:

- `PASS` or `BLOCKED`;
- whether the manifest action was a write or deterministic no-op;
- the fresh evidence path;
- whether every required review passed;
- whether the complete manifest-derived rerun passed;
- whether `GUIDANCE-VALIDATION.md` was conditionally written or left unchanged;
- whether final boundary verification passed;
- confirmation that `1 + 30 + 42 = 73` was preserved;
- confirmation that prohibited Git, network, branch/worktree, application, package, test, CI, runtime, Sprint 2, ledger, work-index, generated-state, board, task-status, and progress mutations did not occur; and
- confirmation that R1-T17 did not start.

This is an authorization and routing record only. The fresh-correction and validation route has not been executed by the Project Executive Manager.
