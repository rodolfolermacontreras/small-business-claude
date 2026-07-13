---
id: PI-1-S1-R1-T16-GUIDANCE-REMEDIATION-WAVE-AUTHORIZATION-2026-07-12
type: owner-decision
date: 2026-07-12
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T16-bounded-guidance-remediation-wave-review-and-conditional-complete-rerun
supersedes: prior-R1-T16-remediation-boundaries-in-part
---

# PI-1 Sprint 1 R1-T16 Guidance-Remediation Wave Authorization

## Decision Authority and Source

On 2026-07-12, human owner Rodolfo Lerma explicitly approved the previously presented bounded R1-T16 guidance-remediation wave with the exact response:

> Option 1

The previously presented Option 1 authorized only the bounded guidance-remediation, review, complete manifest-derived R1-T16 rerun, and conditional validation-evidence route recorded below. This briefing is the authoritative dated Level 2 disposition of that decision.

This decision supersedes prior R1-T16 remediation and aggregate-accounting boundaries only where they conflict with the exact paths, classifications, arithmetic, reviews, and route authorized here. Prior R1-T16 validation requirements, evidence discipline, secret and data protections, stop conditions, and protected-surface rules remain controlling unless this record is more restrictive.

Creating this briefing records authorization only. It does not perform remediation, dispatch an actor, conduct a review, rerun R1-T16, create validation evidence, update status, or perform a Git operation.

## Exact Remediation Write Allowlist

The remediation wave may write exactly the following paths and no others:

1. `.github/instructions/fleet-workers.instructions.md`
2. `.github/instructions/sdd-workflow.instructions.md` — canonical invariants only
3. `.github/prompts/analyze.prompt.md`
4. `.github/prompts/ask.prompt.md`
5. `.github/prompts/clarify.prompt.md`
6. `.github/prompts/constitution.prompt.md`
7. `.github/prompts/evolve.prompt.md`
8. `.github/prompts/fleet.prompt.md`
9. `.github/prompts/grill.prompt.md`
10. `.github/prompts/implement.prompt.md`
11. `.github/prompts/plan.prompt.md`
12. `.github/prompts/qa.prompt.md`
13. `.github/prompts/replan.prompt.md`
14. `.github/prompts/retro.prompt.md`
15. `.github/prompts/spec.prompt.md`
16. `.github/prompts/state.prompt.md`
17. `.github/prompts/tasks.prompt.md`
18. `.github/prompts/hire.prompt.md` — conversion to an unavailable/reference hard stop only
19. `spec-driven-development/README.md`
20. `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md` — deterministic rows and aggregate arithmetic only

No other remediation write path is authorized. In particular, this allowlist does not authorize edits to `.github/copilot-instructions.md`, agents, skills, rosters, packs, workflows, constitution files, sprint control artifacts, or any application or process-state surface.

## Required Guidance Outcomes

### Fifteen active prompts

The following 15 prompts remain active framework-process guidance and must each state all four canonical protected invariants explicitly:

- `.github/prompts/analyze.prompt.md`
- `.github/prompts/ask.prompt.md`
- `.github/prompts/clarify.prompt.md`
- `.github/prompts/constitution.prompt.md`
- `.github/prompts/evolve.prompt.md`
- `.github/prompts/fleet.prompt.md`
- `.github/prompts/grill.prompt.md`
- `.github/prompts/implement.prompt.md`
- `.github/prompts/plan.prompt.md`
- `.github/prompts/qa.prompt.md`
- `.github/prompts/replan.prompt.md`
- `.github/prompts/retro.prompt.md`
- `.github/prompts/spec.prompt.md`
- `.github/prompts/state.prompt.md`
- `.github/prompts/tasks.prompt.md`

### Two active instructions

Both active instructions must each state all four canonical protected invariants explicitly:

- `.github/instructions/fleet-workers.instructions.md`
- `.github/instructions/sdd-workflow.instructions.md`

Changes to `.github/instructions/sdd-workflow.instructions.md` are restricted to the canonical-invariant requirement. No unrelated workflow, role, lifecycle, command, authority, or execution-policy change is authorized there.

### Four canonical protected invariants

Each of the 15 active prompts and both active instructions must explicitly state all four of these invariants without weakening, inference, or substitution:

1. Send, post, pay, and order actions remain drafts in the approval outbox until explicit owner approval.
2. Connector implementations must not silently change the connector/tool contract.
3. Financial, inventory, and optimization calculations remain deterministic server-side operations; the model may explain results but must not invent or replace calculations.
4. Secrets remain in `.env` only and must never enter Git, logs, evidence, or browser output.

A cross-reference, implicit statement, partial subset, or generalized safety phrase is insufficient. Missing or weakened explicit invariant text in any one of the 17 active guidance files is a stop condition.

### Hire disposition

`.github/prompts/hire.prompt.md` must be converted to unavailable/reference hard-stop guidance. It must not hire, activate, roster, dispatch, mutate the ledger or work index, change lifecycle status, or imply that unavailable host mechanics have run or passed. It remains reference/example until separately authorized and mechanically validated.

### Process README

`spec-driven-development/README.md` may be changed only to reconcile navigation and execution guidance with the active 15-prompt set, the unavailable/reference `hire` hard stop, the two active instructions, the current customer-discovery and Sprint boundaries, and the four canonical protected invariants. It must not claim that deferred mechanics, tests, continuous integration, branch protection, ledger/work-index behavior, generated state, or host readiness have been implemented or validated.

## Manifest Classification and Arithmetic

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md` may change only where necessary to make deterministic path rows and aggregate arithmetic agree with this authorization. The required post-remediation `.github/` aggregate is exactly:

> 1 active host + 17 active framework-process + 55 reference/example = 73

The 17 active framework-process paths are the 15 active prompts and two active instructions named above. `.github/prompts/hire.prompt.md` must be classified as reference/example. The aggregate total must remain 73.

Manifest edits must not alter unrelated rows, non-`.github/` accounting, provenance beyond what this reclassification requires, authority order, host identity, roster or pack conclusions, sprint history, protected-data rules, or disposition of any unnamed path. A missing path, duplicate classification, overlapping row, arithmetic mismatch, total other than 73, or non-deterministic category is a stop condition.

## Mandatory Reviews and Validation Gates

All of the following are required; none may be waived, combined into self-review, inferred from a prior pass, or represented as complete without dated path-based evidence:

1. **Independent QA:** Independently verify the exact write boundary, all 15 active prompts, both active instructions, all four explicit invariants in each active file, the `hire` unavailable/reference hard stop, README consistency, deterministic manifest rows, the exact `1 + 17 + 55 = 73` arithmetic, and zero prohibited mutations.
2. **Fresh Principal Architect review:** After remediation, conduct a new read-only Architect review of all allowlisted outcomes. Prior Architect passes are not sufficient. The review must cover canonical invariant fidelity, active/reference classifications, lifecycle and authority consistency, host-valid guidance, and absence of widened policy.
3. **Principal Product Manager domain review:** Review customer-discovery, product-gate, prioritization, backlog-commitment, acceptance, scope, and user-value guidance within the allowlisted surfaces. The PM review is read-only and may not correct files.
4. **Principal Software Developer domain review:** Review implementation, dispatch, worker, validation, host-mechanics, evidence, and execution-boundary guidance within the allowlisted surfaces. This domain review is read-only and is distinct from final boundary verification.
5. **Complete manifest-derived R1-T16 rerun:** Only after all four reviews pass, rerun R1-T16 in full from the current manifest-derived scan list. The rerun must not be reduced to the changed files, invariant search, prompt set, arithmetic, or a delta-only review. It must retain every applicable identity, implementation-fact, Git-policy, host-guidance, lifecycle, roster/pack-integrity, protected-invariant, protected-change, evidence, access, and stop-condition check from the governing R1-T16 authorizations.
6. **Final Principal Software Developer boundary verification:** After the complete rerun, verify the exact remediation write set, conditional evidence gate, all required review records, manifest arithmetic, no prohibited mutation or operation, and no unauthorized state transition. A completion or PASS report requires this final verification.

Any unavailable reviewer, review concern, missing evidence, ambiguity, scope deviation, invariant mismatch, classification mismatch, arithmetic mismatch, protected change, or rerun failure stops the route. Reviewers and validators may not perform opportunistic correction under this authorization.

## Conditional GUIDANCE-VALIDATION.md Gate

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` is not part of the remediation write allowlist. It is the sole conditional validation-evidence output and may be created only if:

1. remediation stays within the exact 20-path allowlist;
2. independent QA passes;
3. the fresh Principal Architect review passes;
4. the Principal Product Manager domain review passes;
5. the Principal Software Developer domain review passes;
6. the complete manifest-derived R1-T16 rerun passes every governing requirement; and
7. the Principal Software Developer confirms the final boundary verification.

If any prerequisite is FAIL, BLOCKED, unavailable, ambiguous, or unverified, `GUIDANCE-VALIDATION.md` must not be created, modified, replaced, or supplemented. The failure or block must return through the Principal Software Developer without corrective mutation under the rerun.

## Explicit Prohibitions

This authorization explicitly prohibits:

- any application change under `server/`, `public/`, or another host-source surface;
- any package, dependency, lockfile, package-metadata, or package-script change;
- any test, test-runner, test-configuration, test-evidence, or test-status change;
- any continuous-integration, workflow, branch-protection, check, or enforcement change;
- any runtime, Node.js compatibility, environment, database, connector-data, business-data, or secret change or access;
- any Sprint 2 artifact, scope, implementation, validation, or readiness claim;
- any fleet-ledger or other ledger mutation;
- any work-index mutation;
- any generated-state, executive-state, dashboard-state, or state-builder output mutation;
- any sprint-progress, board, report-up, task-status, task-completion, milestone, dispatch-status, or other progress mutation;
- any product implementation, customer-discovery execution or conclusion, backlog commitment, external issue mirroring, or production action;
- any activation, hiring, rostering, dispatch, or lifecycle-status mutation performed merely by this briefing;
- any file creation, edit, deletion, restoration, move, rename, cleanup, reclassification, or formatting change outside the exact remediation allowlist and conditional evidence gate;
- staging any file;
- creating or amending a commit;
- pushing or fetching for mutation;
- opening, modifying, approving, or merging a pull request;
- merging, rebasing, cherry-picking, reverting, resetting, or tagging;
- creating, deleting, switching, or otherwise modifying a branch or worktree; and
- any authority inferred beyond the exact guidance-remediation wave, mandatory reviews, complete rerun, conditional evidence gate, and final boundary verification recorded here.

No application, package, test, continuous-integration, runtime, Sprint 2, ledger, work-index, generated-state, progress, or task-status change is authorized. All Git operations are prohibited.

## Required Ordered Route

1. **Principal Software Developer — preflight and sequencing:** Confirm the exact authorization, stable read-only baseline, 20-path remediation allowlist, conditional evidence path, required actors and reviewers, governing R1-T16 requirements, and absence of stop conditions. Preflight must not mutate state, status, ledger, work index, or Git.
2. **Principal Architect — bounded guidance direction:** Provide canonical-invariant and host-validity direction within this authorization. This is direction only, not remediation or executable dispatch by this record.
3. **Principal Software Developer — bounded remediation route:** At discretion and under separate task-specific dispatch control, route the exact allowlist and prohibitions to a bounded implementer. No dispatch is automatic, and dispatch must not mutate prohibited surfaces.
4. **Bounded implementer — remediation only:** Modify only the exact 20 allowlisted paths and only for the outcomes authorized here. Do not create `GUIDANCE-VALIDATION.md`, perform review, alter status, or perform Git operations.
5. **Independent QA — mandatory review:** Perform the independent QA scope above. Stop without correction on any concern.
6. **Principal Architect — fresh read-only review:** Perform the mandatory new governed-surface review. A prior PASS does not satisfy this gate.
7. **Principal Product Manager — read-only domain review:** Perform the mandatory product-domain review. Stop without correction on any concern.
8. **Principal Software Developer — read-only domain review:** Perform the mandatory engineering-domain review. Stop without correction on any concern.
9. **QA Engineer — complete R1-T16 rerun:** Only after all reviews pass, execute the complete manifest-derived rerun under all governing requirements. Create `GUIDANCE-VALIDATION.md` only on a complete PASS and only subject to final Principal Software Developer boundary verification; otherwise create no validation file.
10. **Principal Software Developer — final boundary verification and report:** Verify all boundaries, reviews, rerun evidence, arithmetic, exclusions, and zero prohibited operations before accepting or reporting the outcome. Do not mutate ledger, work index, generated state, progress, task status, or Git.

This is an authorization and routing record only. No remediation has been performed by the Project Executive Manager.