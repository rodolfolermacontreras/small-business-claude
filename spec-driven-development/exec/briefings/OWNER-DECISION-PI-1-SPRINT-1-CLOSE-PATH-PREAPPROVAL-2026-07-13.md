---
id: PI-1-S1-CLOSE-PATH-PREAPPROVAL-2026-07-13
type: owner-decision
date: 2026-07-13
authority: level-2-human-owner
owner: Rodolfo Lerma
status: approved-and-authorized
scope: PI-1-Sprint-1-R1-T16-through-R1-T20-safe-close-path
supersedes: narrower-stop-after-review-and-intermediate-owner-approval-clauses-only-where-conflicting
---

# PI-1 Sprint 1 Close-Path Preapproval

## Decision Authority and Exact Mandate

On 2026-07-13, human owner Rodolfo Lerma issued this explicit Level 2 mandate:

> you have permission to go for the recommneded options as needed to finish this Sprint work. Do not stop until it is done. The recommended option is pre approve for all sections. Get it done. And then at the end give me the full status to share with the hight principal executive manager

This briefing is the authoritative dated record of that mandate. It preapproves the recommended safe path for every remaining PI-1 Sprint 1 close-path task, `R1-T16` through `R1-T20`, without another intermediate owner approval request, subject to the dependencies, ownership, reviews, evidence gates, write boundaries, and stop conditions below.

Creating this briefing records authority only. The Project Executive Manager does not execute `R1-T16` through `R1-T20`, perform validation, write task artifacts, stage or commit files, push, open or update a pull request, run acceptance, or produce the Sprint Executive Manager report-up.

## Authoritative Starting State

Before a new clean `R1-T16` acceptance, authoritative numbered-task progress is **15/20 complete (75%)**. `R1-T16` is not accepted as complete, `R1-T17` through `R1-T20` are not complete, and prior partial, blocked, or malformed `R1-T16` attempts do not advance progress.

The remaining route is strictly sequential:

`R1-T16 PASS -> R1-T17 PASS -> R1-T18 baseline commit/PR result -> R1-T19 PASS -> R1-T20 report-up and Project Executive Manager acknowledgment`

No downstream task may begin before its stated dependency passes. Parallel execution, dependency bypass, inferred completion, and reduced validation are prohibited.

## Operative Effect and Supersession

This decision supersedes narrower prior stop-after-review, stop-after-correction, no-progress-update, no-`R1-T17`, and per-step intermediate-owner-approval clauses only where they would prevent:

1. safe remediation inside already committed Sprint 1 readiness scope;
2. required independent re-review and complete revalidation;
3. orderly continuation to the next dependency-ready task; or
4. the expressly authorized Git actions in `R1-T18`.

It does not invalidate accurate historical evidence or rewrite prior `PASS`, `FAIL`, or `BLOCKED` outcomes. Prior records remain historical evidence. This decision does not weaken any quality gate, acceptance criterion, protected invariant, evidence requirement, secret or data protection, reviewer-independence requirement, or no-false-claim rule.

Ordinary in-scope defects are not grounds for another owner ask. They must follow the bounded-correction rule below. Work stops only for an actual safety violation, actual scope expansion, unavailable mandatory review or evidence that cannot be resolved within scope, dependency failure that cannot be corrected within scope, suspected secret or protected-data exposure, or a required prohibited action.

## Common Authorization for the Remaining Route

The owning Principals and task owners are authorized to sequence and complete `R1-T16` through `R1-T20` under `SPEC.md`, `TASKS.md`, this record, and all non-conflicting governing decisions. This includes factual append-only task-route evidence and factual progress checkpoints after verified gates pass.

Mandatory ownership and review remain intact:

- Principal Product Manager owns product scope, acceptance boundaries, and `R1-T17`.
- Principal Architect owns governed technical and lifecycle review.
- Principal Software Developer owns execution sequencing, implementation-boundary verification, and `R1-T18`.
- QA owns independent validation and `R1-T19` evidence.
- Sprint Executive Manager owns `R1-T20` report-up only.
- Project Executive Manager receives the final report, records acknowledgment, and briefs the human owner.

A reviewer may not approve their own correction as the independent review. A failed review or validation must be corrected only through the bounded-correction rule and then rerun from the required review gate. Evidence must distinguish observed, approved, implemented, validated, deferred, blocked, and unavailable states.

## Bounded In-Scope Defect-Correction Rule

Recommended bounded defect corrections discovered during `R1-T16` through `R1-T20` are preapproved without another owner request only when all conditions below are satisfied:

1. The defect is inside already committed PI-1 Sprint 1 readiness scope and is necessary to satisfy an existing requirement or acceptance criterion.
2. The owning Principal records a dated assessment identifying the defect, exact affected path or evidence region, smallest safe correction, unchanged scope, and applicable protected surfaces.
3. The correction is limited to approved Sprint 1 process, governance, evidence, or report assets; it does not touch a prohibited surface listed in this record.
4. An independent reviewer verifies the correction, preservation of unrelated content, and absence of widened authority or unsupported claims.
5. All affected mandatory reviews and validations are rerun; no prior PASS is reused where the correction could affect it.
6. The route evidence is append-only except where the owning Principal's assessment identifies an exact malformed in-scope region whose bounded correction is necessary to restore factual integrity; historical dispositions must remain preserved and understandable.

If any condition cannot be met, the route stops as `BLOCKED`. This preapproval does not permit an actor to convert a policy choice, product decision, new feature, Sprint 2 implementation, or prohibited-surface change into a “defect correction.”

## R1-T16: One Clean Local-Only Complete Rerun

After Principal Software Developer preflight confirms current scope, dependencies, evidence paths, required reviewers, and a stable local baseline, the route is authorized to perform exactly one new clean complete `R1-T16` validation cycle.

Required boundaries:

1. The validation and its mandatory reviews are local-only. No network access, remote lookup, cloud service, remote repository operation, browser service, or external data source may be used.
2. The clean validation rerun itself must not use delegated agents or subagents. It must be performed directly against the local repository by the authorized QA route so its evidence is continuous and attributable. Existing local files may be read only as permitted by `R1-T16`.
3. The active-source list must be regenerated from the current manifests. Prior partial scan lists, prior PASS subsets, and changed-file-only results may not substitute for the complete rerun.
4. The rerun must cover every applicable identity, implementation-fact, Git-policy, host-guidance, lifecycle, roster and pack integrity, protected invariant, protected change, evidence, access, and stop-condition check required by `TASKS.md` and non-conflicting governing `R1-T16` records.
5. All route facts, owning-Principal assessments, corrections, reviews, rerun results, and final verification must be appended as dated entries to the existing `R1-T16` route-evidence record. Historical outcomes must not be overwritten or reinterpreted.
6. `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` may be created only after the complete clean rerun passes every governing requirement. On `FAIL`, `BLOCKED`, ambiguity, missing evidence, incomplete coverage, or scope deviation, it must not be created or represented as passed.
7. Principal Software Developer performs final verification of the complete scope, append-only evidence chain, reviews, local-only/no-delegation compliance, conditional validation-file gate, protected surfaces, and absence of prohibited operations.
8. `R1-T16` advances progress to 16/20 and unlocks `R1-T17` only after complete PASS, conditional evidence creation, and final Principal Software Developer verification.

In-scope defects found before complete acceptance may use the bounded-correction rule and restart the affected review/validation gates. The “one clean rerun” means one final uninterrupted acceptance rerun after corrections are complete; failed diagnostic or review cycles do not authorize a reduced final rerun.

## R1-T17: Bounded Sprint 2 Contract

Only after `R1-T16` passes, the Principal Product Manager is authorized to create:

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/SPRINT-2-CONTRACT.md`

The contract must satisfy `TASKS.md`, including all eight `RB-020` work areas; prerequisites; allowed surfaces; direct-evidence requirements; residual risks; stop conditions; exclusions; and explicit statements that Sprint 1 does not prove test, continuous-integration, runtime, clean-clone, full-SDD, customer-validation, or SaaS readiness.

The Principal Architect must review technical, lifecycle, policy, and deferral accuracy. The Principal Software Developer must review executable clarity, sequencing, evidence feasibility, and the boundary between a readiness contract and Sprint 2 implementation. Product Manager acceptance follows both reviews. Corrections remain subject to the bounded-correction rule. `R1-T17` advances progress to 17/20 only on all required PASS dispositions.

No Sprint 2 implementation, package or runtime change, framework selection, workflow creation, state-tool change, ledger/work-index mechanic, clean-clone execution, or readiness claim is authorized.

## R1-T18: Exact Allowlist, Baseline Commit, Push, and Pull Request

Only after `R1-T17` passes, the Principal Software Developer is authorized to execute the following Git route on the current authorized Sprint branch:

1. Generate the exact staging allowlist from completed Sprint 1 assets, governing decisions, task evidence, retained/removed dispositions in the current asset manifest, and required close-path artifacts through `R1-T17`.
2. Record or retain enough evidence to reproduce the allowlist and identify every excluded dirty path.
3. Stage only individually named approved Sprint 1 paths with explicit pathspecs. Repository-wide, directory-wide, wildcard, implicit, or broad staging is prohibited.
4. Review the complete cached name-status, statistics, and content diff. Verify no secrets, protected data, runtime data, unrelated work, or protected application/package/runtime surface is staged.
5. Confirm the cached diff matches the exact allowlist and that every deletion is an approved Sprint 1 disposition with preserved evidence.
6. Create exactly one Sprint 1 readiness-baseline commit on the current branch. Capture the start SHA, resulting end SHA, branch, commit subject, staged-path list, excluded-path list, and verification results.
7. If repository credentials and network access are available, push that current branch without force and open or update a pull request targeting `main`. Capture the upstream, pull-request reference, and available check state factually.
8. If credentials or network are unavailable, preserve the successful local commit and record push/pull-request state as `BLOCKED` or `UNAVAILABLE`; do not fabricate remote state, change credentials, or widen access.
9. Do not merge. A merge requires a separate existing explicit mandate that clearly requires merge; this record does not provide one. Absence of such a mandate means the pull request remains unmerged.

This is the owner authorization required by `R1-T18` for the exact staging, one commit, non-force push, and pull-request open/update route. No further intermediate owner approval is required if all boundaries pass.

The staging allowlist must exclude all unrelated `Small-business-ideas/` paths and all application, package, runtime, test, continuous-integration, connector, schema, data, secret, and generated-runtime paths. In particular, do not stage `server/`, `public/`, `package.json`, lockfiles, `.npmrc`, `.env`, `.env.*`, `*.db`, logs, caches, runtime data, application data, connector data, tests, workflows, state tools, ledger/work-index mechanics, global backlog changes, or any unrelated dirty path.

Force push, history rewrite, amend, rebase, reset, cherry-pick, destructive cleanup, broad restore, stash-based cleanup, branch deletion, tag creation, merge, or deletion of unpreserved evidence is prohibited.

`R1-T18` advances progress to 18/20 only when the exact local baseline commit exists and its evidence passes Principal Software Developer verification. Remote push or pull-request unavailability must be reported accurately and carried into acceptance; it may not be represented as completed.

## R1-T19: Full Final Acceptance

Only after `R1-T18` produces the exact baseline end SHA, QA and the Principal Software Developer are authorized to create:

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ACCEPTANCE.md`

Acceptance must run in full against the recorded Sprint 1 start SHA and exact baseline end SHA. It must execute every step and evidence check in `TASKS.md`, classify every changed path, explain remaining working-tree entries, verify the active-guidance and protected-behavior boundaries, confirm required assets, verify prohibited files are absent from the commit, and mark `AC-001` through `AC-014` with direct evidence.

The Product Manager must verify the acceptance boundary and product/non-product claims. Any non-PASS criterion blocks close. `PARTIAL`, `UNKNOWN`, unavailable evidence, or an unsupported inference is not closeable. A correctable in-scope defect returns through the bounded-correction rule, requires a reviewed correction and new baseline commit or pull-request update as applicable, and then requires full acceptance to run again against the controlling start/end SHAs.

`ACCEPTANCE.md` must explicitly state which tests, continuous-integration checks, runtime checks, clean-clone rehearsal, generated-state tools, ledger/work-index verification, customer validation, and SaaS validation were not performed as Sprint 1 proof. `R1-T19` advances progress to 19/20 only when all criteria pass and Principal Software Developer final scope verification passes.

## R1-T20: Dated Report-Up and Acknowledgment

Only after `R1-T19` passes, the Sprint Executive Manager is task-scoped authorized to create:

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/REPORT-UP-2026-07-13.md`

This task-scoped authority permits the Sprint Executive Manager to perform only the `R1-T20` coordination and report-up duty defined in `TASKS.md`; it does not create broader automatic execution, product, technical, Git, Sprint 2, or owner-communication authority.

The report must preserve every required template section, replace every placeholder or state a factual not-applicable reason, map `R1-R8` and `AO-01-AO-08` to direct evidence, distinguish completed Sprint 1 work from deferred Sprint 2 mechanics, state commit/push/pull-request/check facts accurately, carry unresolved risks, and make no unsupported readiness, customer-validation, or SaaS-completion claim.

The Sprint Executive Manager is authorized to append one dated factual final sprint-progress checkpoint reflecting verified results and to route the completed report to the Project Executive Manager. The Project Executive Manager must review the report for factual consistency, record acknowledgment or a specific correction request, and provide the human owner with the final executive status. A correction request must use a dated report revision and may not alter underlying evidence to obtain a preferred result.

`R1-T20` and Sprint 1 advance to 20/20 only after the report is complete, routed, and acknowledged by the Project Executive Manager. This does not authorize Sprint 2 to start, a pull-request merge, or a full-readiness claim.

## Explicit Prohibitions Across R1-T16 Through R1-T20

This decision does not authorize:

- product features or application behavior changes;
- customer-discovery findings, conclusions, validation claims, prioritization, or backlog commitment;
- Sprint 2 implementation or mechanics;
- secrets, credentials, protected customer/business data, connector data, or runtime-data access beyond safe existence/path checks required by the approved scans;
- changes to application, package, lockfile, connector, schema, data, test, continuous-integration, workflow, runtime, state-tool, ledger, work-index, or generated-state surfaces;
- unrelated `Small-business-ideas/` or other unrelated paths;
- force push, history rewrite, commit amendment, rebase, reset, destructive cleanup, unpreserved deletion, or merge;
- weakening, skipping, narrowing, self-approving, or fabricating a review, validation, acceptance criterion, direct-evidence requirement, or stop condition;
- representing policy as mechanical enforcement, copied framework checks as host proof, unavailable remote state as complete, or deferred work as implemented;
- direct owner communication by the Sprint Executive Manager; or
- execution of `R1-T16` through `R1-T20` by the Project Executive Manager.

The host invariants remain non-negotiable: send, post, pay, and order actions stay behind explicit approval; connector/tool contracts do not silently change; financial, inventory, and optimization calculations remain deterministic server-side operations; and secrets remain in `.env` only and never enter Git, logs, evidence, or browser output.

## Actual Stop Conditions

The route must stop and report `BLOCKED` if any of the following occurs:

1. a required action would cross a prohibited surface or expand beyond committed Sprint 1 readiness scope;
2. a suspected secret, credential, protected-data, or runtime-data exposure is found;
3. a mandatory independent reviewer is unavailable or cannot verify the evidence;
4. a required dependency, acceptance criterion, or evidence fact cannot be satisfied through the bounded-correction rule;
5. a policy, product, architecture, lifecycle, or scope decision not already governed by this record is required;
6. a Git action would require force, history rewrite, destructive cleanup, merge without separate explicit authority, or staging an unrelated path;
7. the current branch, start SHA, end SHA, allowlist, cached diff, or evidence chain cannot be established reliably;
8. completing the work would require Sprint 2 implementation, application/package/test/continuous-integration/runtime changes, customer-discovery conclusions, or access to prohibited data; or
9. any actor would need to weaken a quality, review, evidence, or safety gate to continue.

Ordinary review findings, formatting defects, factual inconsistencies, or other bounded defects wholly inside approved Sprint 1 readiness assets do not trigger another owner decision when the bounded-correction rule can resolve them safely.

## Required Final Report to the Owner

After Project Executive Manager acknowledgment, the final owner briefing must report at least:

- final task progress and whether Sprint 1 reached 20/20;
- `R1-T16` clean-rerun and final-verification result;
- `R1-T17` contract path and review results;
- exact baseline start/end SHAs, commit, branch, staged and excluded path summary;
- push, pull-request, and check state, including any unavailable remote operation;
- `R1-T19` acceptance result and any carried risks;
- `R1-T20` report path and Project Executive Manager acknowledgment;
- all deferred Sprint 2 work and all claims explicitly not made; and
- any actual blocker or residual owner decision.

This record authorizes the owning team to finish the safe in-scope Sprint 1 close path without intermediate owner approval. It does not execute any remaining task.