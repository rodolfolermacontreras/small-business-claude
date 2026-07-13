---
id: PI-1-S1-R1-T16-EVIDENCE-FILE-ONLY-CORRECTION-AND-RESUMED-ROUTE-AUTHORIZATION-2026-07-12
type: owner-decision
date: 2026-07-12
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T16-evidence-file-only-correction-and-resumed-validation-route
supersedes: prior-R1-T16-fresh-evidence-replacement-and-route-stop-boundaries-in-part
---

# PI-1 Sprint 1 R1-T16 Evidence-File-Only Correction and Resumed-Route Authorization

## Decision Authority and Exact Response

On 2026-07-12, human owner Rodolfo Lerma explicitly approved the previously presented evidence-file-only correction and resumed R1-T16 route with the exact response:

> Option 1

This briefing is the authoritative dated Level 2 record of that approval. It authorizes only the bounded correction and resumed route below. No further intermediate owner approval is required unless a material scope or safety change occurs.

A material scope or safety change includes any required write outside the exact allowlist, any need to alter a protected source or prior evidence fact beyond the correction regions authorized here, suspected secret or protected-data exposure, any network or prohibited Git requirement, any policy or lifecycle decision, any need to weaken a governing R1-T16 check, or any inability to establish the route facts without inference. Such a change stops the route as `BLOCKED` and requires new owner authority.

This record supersedes prior R1-T16 boundaries only where they prohibit replacement of the malformed or overbroad regions in the existing fresh-correction evidence file, require a new fresh-evidence path, or require another intermediate approval before the resumed route. All stricter non-conflicting R1-T16 safeguards, validation requirements, review independence, protected-surface rules, no-false-claim rules, and stop conditions remain controlling.

Creating this briefing records authorization only. It does not perform the correction, alter evidence, inspect or change the manifest, conduct a review, rerun R1-T16, create validation evidence, change status, or begin R1-T17. The Project Executive Manager must not perform the correction or execute the route.

## Exact Evidence Correction Boundary

Exactly one bounded correction actor, selected and routed by the Principal Software Developer, may replace content only within:

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/R1-T16-FRESH-CORRECTION-EVIDENCE.md`

The correction is limited to:

1. malformed or unevaluated action-bracket timestamp expressions;
2. the unevaluated manifest-path placeholder;
3. unevaluated immediate preimage and postimage SHA-256 placeholders;
4. malformed or unevaluated post-action timestamp expressions;
5. the unevaluated post-action hash placeholder; and
6. overbroad pre-action and post-action status-path details, which must be replaced with sanitized status totals and tracked/untracked counts only.

The actor may use the current independently verified values and the bounded route's contemporaneous outputs from the already completed deterministic no-op bracket. Permitted facts include:

- the verified manifest SHA-256;
- exact UTC and local timestamps associated with the completed bracket or contemporaneous verification;
- sanitized status total, tracked, and untracked counts;
- bounded actor identity and role;
- exact authorized action identity;
- the exact manifest path;
- confirmation that the intended postimage was compared bytewise with the immediate preimage;
- confirmation that the action was a deterministic no-op, the manifest was not written, and the preimage and postimage hashes were identical;
- confirmation that the resulting postimage normalized to itself without another change; and
- the contemporaneously verified existence state of `GUIDANCE-VALIDATION.md`.

Only evaluated, exact, sanitized facts supported by the already completed deterministic bracket or its contemporaneous verified outputs may be inserted. No value may be guessed, reconstructed from expectation, broadened beyond the bounded action, or represented as an immediate value when it is only a later current-state observation. Where timestamps or counts have distinct action-time and verification-time provenance, that provenance must be stated accurately.

The actor must preserve every other existing path and all unrelated content in the evidence file. The historical independent QA `BLOCKED` disposition and historical final Principal Software Developer `BLOCKED` verification must remain intact and must not be deleted, rewritten, or represented as PASS. The correction must preserve chronology and clearly distinguish the corrected action bracket from subsequent fresh reviews and rerun outcomes.

The correction must be deterministic and minimal. The actor must construct the intended corrected evidence content in memory, compare it bytewise with the immediate preimage of the evidence file, and change only the six authorized regions. If an exact fact cannot be supported, if unrelated content would change, or if another path would need modification, the actor must stop as `BLOCKED` without writing.

## Protected Manifest and Existing-Path Boundary

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md` is read-only and must not be touched, rewritten, normalized, formatted, or otherwise mutated. Its current verified hash and manifest-derived contents may be read locally only as needed for bounded verification.

No other existing repository path may be created, changed, replaced, truncated, deleted, renamed, moved, restored, normalized, or supplemented. The sole existing-file exception is the exact bounded correction and subsequent dated route dispositions in `R1-T16-FRESH-CORRECTION-EVIDENCE.md` authorized by this record.

## Required Correction Review

After the evidence-only correction, independent QA must perform a fresh read-only review before any later route gate. QA must verify:

- every replaced value is evaluated, exact, sanitized, and traceable to the completed no-op bracket or its contemporaneous outputs;
- action-time facts are not confused with later verification-time observations;
- actor and action identity are exact;
- the manifest path and SHA-256 values are exact;
- the preimage and postimage hashes are identical and the record accurately confirms no manifest write;
- timestamp fields are valid and their provenance is accurate;
- status evidence contains totals and tracked/untracked counts only, with no unrelated paths or content;
- the `GUIDANCE-VALIDATION.md` existence state is accurately recorded;
- historical `BLOCKED` dispositions remain preserved;
- no unauthorized evidence content or path was changed; and
- `ASSET-MANIFEST.md` and every other existing path remained unchanged.

QA may not remediate a defect. Any failure, ambiguity, unsupported fact, scope deviation, or inability to verify the exact correction stops the route as `BLOCKED`.

## Resumed Ordered R1-T16 Route

Only after the fresh independent QA review passes, the Principal Software Developer may continue the route without further intermediate owner approval in this exact order:

1. **Fresh Principal Architect review:** Perform a new read-only governed-surface review. Prior Architect reviews do not satisfy this gate. Verify lifecycle and activation interpretation, roster authority, active-versus-executable distinctions, dependency-blocked Principal treatment, reference/template treatment, pack inactivity, completeness logic, cross-reference consistency, aggregate classification, and absence of widened authority.
2. **Principal Product Manager disposition or review:** Record a fresh dated `NOT-AFFECTED` disposition only when evidence establishes that product authority, customer-discovery gates, prioritization, backlog commitment, acceptance criteria, product scope, and user value are unaffected. If any PM domain is or may be affected, perform a read-only PM review. Ambiguity stops the route.
3. **Principal Software Developer domain review:** Perform a fresh read-only domain review distinct from final boundary verification. Verify executable clarity, task-gated worker and blocked-Principal treatment, bounded-actor instructions, source authority, stop behavior, validation sequencing, evidence sufficiency, and absence of widened implementation or dispatch authority.
4. **Complete manifest-derived R1-T16 rerun:** Only after every applicable review passes, QA must rerun R1-T16 in full from the current manifest-derived scope. The rerun must retain every applicable identity, implementation-fact, Git-policy, host-guidance, lifecycle, roster and pack integrity, protected-invariant, protected-change, evidence, access, and stop-condition check required by all governing R1-T16 authorizations. A changed-row-only, evidence-only, manifest-only, audit-only, arithmetic-only, mismatch-only, delta-only, or otherwise reduced rerun is prohibited.
5. **Conditional validation evidence:** Only on complete PASS, and only if the path does not already exist, the route may create `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md`. If it exists, or if the rerun is FAIL, `BLOCKED`, ambiguous, incomplete, unsupported, or out of scope, it must remain untouched. Updating or replacing an existing `GUIDANCE-VALIDATION.md` is not authorized.
6. **Final Principal Software Developer verification:** Verify the corrected evidence regions, fresh dated reviews, complete manifest-derived rerun, conditional validation-file gate, exact write boundary, unchanged manifest, unchanged other existing paths, zero prohibited operations or mutations, no progress or task-state change, and no R1-T17 activity before issuing the final factual report.

Fresh dated correction, review, rerun, and final-verification dispositions may be appended to or recorded within `R1-T16-FRESH-CORRECTION-EVIDENCE.md`; they must not overwrite or reinterpret the preserved historical `BLOCKED` dispositions. Reviewers and validators may not make opportunistic corrections. Any failure or ambiguity stops the route as `BLOCKED`.

## Exact Write Allowlist

Creation of this owner-decision briefing is the separately requested authorization record and is not part of the resumed route write set.

The resumed route write allowlist is exactly:

1. `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/R1-T16-FRESH-CORRECTION-EVIDENCE.md` — replacement only in the six authorized malformed, unevaluated, or overbroad correction regions, followed by fresh dated correction, review, rerun, and final-verification dispositions that preserve historical outcomes; and
2. `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` — creation only if the complete manifest-derived R1-T16 rerun passes every governing requirement and the path does not already exist.

No other repository or external write is authorized. In particular, `ASSET-MANIFEST.md` is not in the write allowlist.

## Authorized Minimal Local Operations

The bounded actor and required reviewers may use only the minimum local operations necessary for this exact route:

- read the correction target, current manifest, and governing R1-T16 inputs without changing them;
- obtain local and UTC timestamps;
- compute local read-only SHA-256 values;
- compare content and hashes in memory;
- inspect sanitized status totals and tracked/untracked counts without persisting path lists;
- replace only the authorized evidence regions;
- append fresh dated route dispositions only to the same evidence file; and
- conditionally create `GUIDANCE-VALIDATION.md` only under the complete-PASS and nonexistence gate.

Permitted local read-only Git command families remain exclusively:

- `git status`;
- `git diff`;
- `git diff --cached`;
- `git diff --check`;
- `git show`; and
- `git hash-object` without `-w`, `--write`, or an equivalent write option.

A permitted command or operation must not be used if its concrete form, option, alias, hook, configuration, or environment could refresh an index, write an object, alter repository state, contact a remote, expose protected content, or mutate an unauthorized path. No temporary file, cache, transcript, export, clipboard artifact, screenshot, broad log, or additional evidence file is authorized.

## Preserved Explicit Prohibitions

This authorization preserves all prohibitions on:

- staging, committing, amending, pushing, pulling, fetching, remote access, network access, pull-request activity, merging, rebasing, cherry-picking, reverting, resetting, tagging, stashing, patch application, switching, checkout, restoring, cleaning, or any index, object, ref, configuration, branch, or worktree mutation;
- branch or worktree creation, deletion, movement, repair, lock, unlock, prune, or other mutation;
- mutation of `ASSET-MANIFEST.md` or any existing path other than the exact evidence-file exception above;
- application or host-source changes under `server/`, `public/`, or any other application surface;
- package, dependency, lockfile, package metadata, package script, test, test runner, test configuration, test evidence, test status, continuous-integration, workflow, required-check, branch-protection, enforcement, runtime, Node.js compatibility, or environment access or mutation;
- Sprint 2 artifact, scope, execution, implementation, validation, readiness claim, or mutation;
- generated state, executive state, dashboard state, state-builder output, ledger, fleet ledger, work index, board, report-up, milestone, dispatch status, sprint progress, task status, task completion, lifecycle status, or other progress mutation;
- roster, pack, agent body, skill body, reference skill document, prompt, instruction, constitution, source matrix, prior briefing, prior evidence outside the exact correction target, or history mutation;
- database, connector data, business data, secret, credential, token, key, environment value, or personal-data access, reproduction, disclosure, or persistence;
- cleanup, deletion, restoration, movement, rename, normalization, reclassification, formatting, or whitespace-only changes outside the exact allowlist;
- any product implementation, customer-discovery execution or conclusion, backlog commitment, external issue mirroring, production action, or external integration; and
- any authority inferred beyond this exact R1-T16 evidence-file-only correction and resumed route.

R1-T17 must not be started, dispatched, prepared, implemented, reviewed, validated, marked in progress, marked complete, or otherwise mutated or implied to have begun. No R1-T17 artifact, evidence, status, or execution action is authorized.

## Final Report Requirement

The Principal Software Developer must provide one final factual route report stating:

- `PASS` or `BLOCKED`;
- whether the six authorized evidence regions were corrected with evaluated sanitized facts;
- whether historical `BLOCKED` dispositions were preserved;
- whether independent QA passed the correction;
- whether the fresh Architect review, PM `NOT-AFFECTED` disposition or review, and PSD domain review passed;
- whether the complete manifest-derived R1-T16 rerun passed;
- whether `GUIDANCE-VALIDATION.md` was conditionally created or left untouched;
- whether final PSD verification passed;
- the verified manifest SHA-256 and confirmation that `ASSET-MANIFEST.md` remained unchanged;
- confirmation that no other existing path was touched;
- confirmation that prohibited Git, network, progress, task-status, application, package, test, CI, runtime, Sprint 2, state, ledger, work-index, and board mutations did not occur; and
- confirmation that R1-T17 did not start.

This is an authorization and routing record only. The evidence correction and resumed R1-T16 route have not been executed by the Project Executive Manager.
