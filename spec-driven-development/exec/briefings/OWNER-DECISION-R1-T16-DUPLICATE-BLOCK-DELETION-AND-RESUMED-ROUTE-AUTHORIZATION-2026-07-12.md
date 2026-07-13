---
id: PI-1-S1-R1-T16-DUPLICATE-BLOCK-DELETION-AND-RESUMED-ROUTE-AUTHORIZATION-2026-07-12
type: owner-decision
date: 2026-07-12
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T16-exact-duplicate-block-deletion-and-resumed-validation-route
supersedes: prior-R1-T16-evidence-correction-boundaries-in-part
---

# PI-1 Sprint 1 R1-T16 Duplicate-Block Deletion and Resumed-Route Authorization

## Decision Authority and Exact Response

On 2026-07-12, human owner Rodolfo Lerma explicitly approved the exact duplicate-block deletion and resumed R1-T16 route previously presented, with the exact response:

> Option 1 approved

This briefing is the authoritative dated Level 2 record of that approval. It authorizes only the exact deletion and resumed ordered route below. No further intermediate owner approval is required unless scope or safety materially changes.

A material scope or safety change includes any mismatch in the bound file hash or stable anchors, any need to alter content outside the exact deletion interval, any required write outside the exact allowlist, any inability to preserve the canonical corrected bracket or the required historical dispositions, suspected secret or protected-data exposure, any prohibited Git or network requirement, any policy or lifecycle decision, any need to weaken a governing R1-T16 check, or any inability to establish route facts without inference. Such a change stops the route as `BLOCKED` and requires new owner authority.

This record supersedes prior R1-T16 boundaries only where they conflict with this exact duplicate-block deletion or require another intermediate approval before the resumed route. All stricter non-conflicting R1-T16 safeguards, review independence, complete-rerun requirements, protected-surface rules, evidence discipline, no-false-claim rules, and stop conditions remain controlling.

Creating this briefing records authorization only. It does not perform the deletion, edit the evidence file, conduct a review, rerun R1-T16, create validation evidence, change any status, or begin R1-T17. The Project Executive Manager must not perform the deletion or execute the resumed route.

## SHA-256 and Stable-Anchor Binding

The deletion authority is bound to this exact current file state:

- Target: `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/R1-T16-FRESH-CORRECTION-EVIDENCE.md`
- Required current SHA-256: `02073a54f8993aeded0205f0002b1f42017c9bae4734b186d3c5aa67f564f5b5`
- Start anchor: the second occurrence of `# R1-T16 Fresh Correction Evidence`, currently at line 126
- End anchor: the duplicate block's final `- R1-T17: not started.`, currently at line 164
- Deletion interval: lines 126 through 164, inclusive, in the bound file state

The SHA-256 and both stable anchors are conjunctive preconditions. Before deletion, the bounded actor must verify all of them without mutation. If the SHA-256 differs, either anchor is absent or non-unique in the required position, the interval no longer identifies exactly the duplicate block, line movement creates ambiguity, or the deletion would remove or alter anything beyond that duplicate, the actor must stop without writing and report `BLOCKED`.

## Exact Authorized Deletion

Through the Principal Software Developer, exactly one bounded actor may delete only the bound duplicate interval from `R1-T16-FRESH-CORRECTION-EVIDENCE.md`:

- beginning with the second `# R1-T16 Fresh Correction Evidence` heading at line 126; and
- ending with the duplicate block's final `- R1-T17: not started.` at line 164;
- inclusive of both anchor lines and every byte between them.

No other byte, content, whitespace, line ending, encoding marker, heading, disposition, or file attribute may be intentionally changed. The actor must construct the intended postimage in memory and verify that it differs from the bound preimage only by removal of the exact interval. The actor must not normalize, reformat, rewrite, append, prepend, replace, or otherwise edit the remaining content.

The deletion must preserve:

1. the canonical corrected action bracket preceding the duplicate block;
2. exactly one unchanged original historical `Independent QA disposition` with verdict `BLOCKED`;
3. exactly one unchanged original historical `Final Principal Software Developer boundary verification` with verdict `BLOCKED`; and
4. the original historical statement that R1-T17 was not started.

The preserved historical `BLOCKED` dispositions must not be deleted, rewritten, recharacterized, superseded as facts, or represented as PASS. The deletion corrects duplication only; it does not alter the historical result.

No other edit to `R1-T16-FRESH-CORRECTION-EVIDENCE.md` is authorized. In particular, fresh review, rerun, and final-verification outcomes must not be appended to, inserted into, or otherwise recorded in that file under this authorization.

## Resumed Ordered R1-T16 Route

Only after the exact deletion is independently verified may the Principal Software Developer continue the route without further intermediate owner approval, in this order:

1. **Independent QA:** Perform a fresh read-only review of the SHA-bound deletion. Verify the preimage hash, stable anchors, exact inclusive deletion, byte preservation outside the interval, preservation of the canonical corrected bracket, preservation of exactly one unchanged original historical independent-QA `BLOCKED` disposition and one unchanged original historical final-PSD `BLOCKED` disposition, and absence of any unauthorized operation or mutation. QA may not remediate a defect.
2. **Fresh Principal Architect review:** Only after independent QA passes, perform a new read-only governed-surface review. Prior Architect reviews do not satisfy this gate. Verify lifecycle and activation interpretation, roster authority, active-versus-executable distinctions, dependency-blocked Principal treatment, reference/template treatment, pack inactivity, completeness logic, cross-reference consistency, aggregate classification, and absence of widened authority.
3. **Principal Product Manager disposition or review:** Record a fresh dated `NOT-AFFECTED` disposition only when evidence establishes that product authority, customer-discovery gates, prioritization, backlog commitment, acceptance criteria, product scope, and user value are unaffected. If any PM domain is or may be affected, perform a read-only PM review. Ambiguity stops the route.
4. **Principal Software Developer domain review:** Perform a fresh read-only domain review distinct from final boundary verification. Verify executable clarity, task-gated worker and blocked-Principal treatment, bounded-actor instructions, source authority, stop behavior, validation sequencing, evidence sufficiency, and absence of widened implementation or dispatch authority.
5. **Complete manifest-derived R1-T16 rerun:** Only after every applicable review passes, QA must rerun R1-T16 in full from the current manifest-derived scope. The rerun must retain every applicable identity, implementation-fact, Git-policy, host-guidance, lifecycle, roster and pack integrity, protected-invariant, protected-change, evidence, access, and stop-condition check required by all governing R1-T16 authorizations. A duplicate-only, changed-row-only, evidence-only, manifest-only, audit-only, arithmetic-only, mismatch-only, delta-only, or otherwise reduced rerun is prohibited.
6. **Conditional validation evidence:** Only on complete PASS may the route create `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md`. If that path already exists, or if the rerun is FAIL, `BLOCKED`, ambiguous, incomplete, unsupported, or out of scope, it must remain untouched. Updating, replacing, or supplementing an existing `GUIDANCE-VALIDATION.md` is not authorized.
7. **Final Principal Software Developer verification:** Verify the exact deletion boundary, preservation requirements, all fresh review outcomes, complete manifest-derived rerun, conditional validation-file gate, exact write boundary, unchanged other existing paths, zero prohibited operations or mutations, no progress or task-state change, and no R1-T17 activity before issuing one final factual report.

Fresh reviews and validation are read-only except for the conditional creation of `GUIDANCE-VALIDATION.md` after complete PASS. Their outcomes may be reported to the owner but may not be persisted by editing an existing repository path under this authorization. Any failure, ambiguity, missing evidence, unavailable required reviewer, scope deviation, or inability to verify a condition stops the route as `BLOCKED`. Reviewers and validators may not make opportunistic corrections.

## Exact Write Allowlist

Creation of this owner-decision briefing is the separately requested authority record and is not part of the later route write set.

The later route write allowlist is exactly:

1. `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/R1-T16-FRESH-CORRECTION-EVIDENCE.md` — deletion only of the SHA-bound, anchor-bound lines 126 through 164 inclusive; and
2. `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` — creation only, and only after a complete manifest-derived R1-T16 PASS when the path does not already exist.

No other repository or external write is authorized. No other edit to the correction-evidence file or any other existing path is authorized.

## Authorized Minimal Local Operations

The bounded actor and required reviewers may use only the minimum local operations necessary for this exact route:

- read the bound correction target, current manifest, and governing R1-T16 inputs without changing them;
- compute local read-only SHA-256 values;
- locate and compare the exact stable anchors and deletion interval in memory;
- construct and compare the intended deletion postimage in memory;
- inspect sanitized local status and exact-path differences without persisting unrelated paths or content;
- delete only the authorized duplicate interval after all preconditions pass;
- perform the required read-only reviews and complete rerun; and
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
- any edit to `R1-T16-FRESH-CORRECTION-EVIDENCE.md` beyond the exact bound duplicate deletion;
- creation, alteration, deletion, replacement, truncation, rename, movement, restoration, normalization, reclassification, formatting, or whitespace-only change to any other existing path;
- application or host-source changes under `server/`, `public/`, or any other application surface;
- package, dependency, lockfile, package metadata, package script, test, test runner, test configuration, test evidence, test status, continuous-integration, workflow, required-check, branch-protection, enforcement, runtime, Node.js compatibility, or environment access or mutation;
- Sprint 2 artifact, scope, execution, implementation, validation, readiness claim, or mutation;
- generated state, executive state, dashboard state, state-builder output, ledger, fleet ledger, work index, board, report-up, milestone, dispatch status, sprint progress, task status, task completion, lifecycle status, or other progress mutation;
- roster, pack, agent body, skill body, reference skill document, prompt, instruction, constitution, source matrix, manifest, prior briefing, prior evidence outside the exact deletion, or history mutation;
- database, connector data, business data, secret, credential, token, key, environment value, or personal-data access, reproduction, disclosure, or persistence;
- product implementation, customer-discovery execution or conclusion, backlog commitment, external issue mirroring, production action, or external integration; and
- authority inferred beyond this exact R1-T16 duplicate-block deletion and resumed route.

R1-T17 must not be started, dispatched, prepared, implemented, reviewed, validated, marked in progress, marked complete, or otherwise mutated or implied to have begun. No R1-T17 artifact, evidence, status, or execution action is authorized.

## Final Report Requirement

The Principal Software Developer must provide one final factual route report stating:

- `PASS` or `BLOCKED`;
- the bound preimage SHA-256;
- whether exactly the second-heading-through-final-R1-T17 duplicate interval was deleted;
- whether the canonical corrected bracket and exactly one unchanged original historical independent-QA `BLOCKED` and final-PSD `BLOCKED` disposition were preserved;
- whether independent QA passed the deletion;
- whether the fresh Architect review, PM `NOT-AFFECTED` disposition or review, and PSD domain review passed;
- whether the complete manifest-derived R1-T16 rerun passed;
- whether `GUIDANCE-VALIDATION.md` was conditionally created or left untouched;
- whether final PSD verification passed;
- confirmation that no other edit to the correction-evidence file or any other existing path occurred;
- confirmation that prohibited Git, network, progress, task-status, application, package, test, CI, runtime, Sprint 2, state, ledger, work-index, and board mutations did not occur; and
- confirmation that R1-T17 did not start.

This is an authorization and routing record only. The Project Executive Manager has not performed the deletion, executed the resumed route, changed progress or task status, or started R1-T17.
