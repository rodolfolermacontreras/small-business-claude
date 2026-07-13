---
id: PI-1-S1-R1-T16-PROMPT-REMEDIATION-AUTHORIZATION-2026-07-10
type: owner-decision
date: 2026-07-10
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T16-bounded-prompt-remediation-and-rerun
supersedes: PI-1-S1-R1-T16-GUIDANCE-VALIDATION-AUTHORIZATION-2026-07-10-in-part
---

# PI-1 Sprint 1 R1-T16 Prompt-Remediation Authorization

## Decision Authority and Source

On 2026-07-10, human owner Rodolfo Lerma answered the pending PI-1 Sprint 1 prompt-remediation request:

> Option 1

The immediately preceding request defined Option 1 as authorizing bounded remediation before rerunning R1-T16: adapt `.github/prompts/clarify.prompt.md`, `.github/prompts/qa.prompt.md`, and `.github/prompts/retro.prompt.md`; make `.github/prompts/triage.prompt.md` and `.github/prompts/taskstoissues.prompt.md` mechanically safe through hard-stop or inactive-reference behavior; update only path-specific prompt dispositions in `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`; independently review; then rerun full R1-T16 and create only `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` if it passes. This record is the authoritative dated Level 2 disposition of that decision.

This decision supersedes `PI-1-S1-R1-T16-GUIDANCE-VALIDATION-AUTHORIZATION-2026-07-10` only to the extent that the earlier record prohibited the exact bounded prompt and path-specific manifest remediation authorized here. The earlier record's original validation requirements, evidence and access rules, protected surfaces, stop conditions, and exclusions remain controlling for the full R1-T16 rerun unless this record states a narrower boundary.

## Ownership and Dispatch Boundary

- **Prompt-disposition and required-host-behavior owner:** Principal Architect.
- **Sequencing and dispatch owner:** Principal Software Developer.
- **Permitted remediation implementer:** At most one task-specific executable `developer-general`, only if dispatched by the Principal Software Developer.
- **Permitted independent QA and full-rerun implementer:** At most one task-specific executable `qa-engineer-general`, only if dispatched by the Principal Software Developer.
- **Required governed-surface reviewer:** Principal Architect, read-only after remediation.
- **Dispatch status:** No dispatch is automatic. This record does not activate or dispatch any Principal, worker, agent, skill, route, or pack and does not mutate the fleet ledger.

The Principal Architect determines the path-specific dispositions and required host-valid behavior within the exact outcomes below. The Principal Software Developer owns sequencing, bounded dispatch, and scope verification but may not widen the write set or validation requirements.

## Authorized Remediation Outcomes

### Active adapted prompts

1. **Clarify remains active.** Adapt `.github/prompts/clarify.prompt.md` so it no longer mandates unvalidated command-line, ledger, work-index, log, or other state mutation. Required host-valid behavior must use manual or read-only steps, or explicitly conditional framework-tool behavior that reports the tool or mechanic as unavailable or deferred when it is not validated for this host.
2. **QA remains active.** Adapt `.github/prompts/qa.prompt.md` so it no longer mandates ledger mutation or claims that doctor checks pass. Unavailable or Sprint 2-deferred mechanics must be reported honestly and must not be represented as executed, passing, or host-valid.
3. **Retro remains active.** Adapt `.github/prompts/retro.prompt.md` so universal ledger and doctor prerequisites are removed. Unavailable or Sprint 2-deferred mechanics must be reported honestly and must not block truthful manual or read-only retrospective handling solely because those mechanics are absent.

### Unavailable hard-stop prompts

4. **Triage is unavailable and must hard-stop.** Adapt `.github/prompts/triage.prompt.md` to cite the incomplete customer-discovery gate. It must perform no triage, prioritization, backlog mutation, commitment, or downstream activation until separately authorized after the gate is satisfied.
5. **Tasks-to-Issues is inactive/reference and must hard-stop.** Adapt `.github/prompts/taskstoissues.prompt.md` to remove duplicated malformed prompt content and identify the workflow as inactive/reference. It must not execute external issue mirroring, reference command-line tooling, or pytest close-out until separately authorized and mechanically validated for this host.

No prompt may imply that an unavailable tool, ledger operation, doctor check, test command, external integration, discovery gate, or Sprint 2 mechanic has run or passed.

## Manifest Disposition Boundary

Only path-specific prompt dispositions in `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md` may be updated. The prompt-glob classification must become deterministic and must account for:

- the three active-adapted prompts: `clarify.prompt.md`, `qa.prompt.md`, and `retro.prompt.md`;
- the two unavailable hard-stop prompts: `triage.prompt.md` and `taskstoissues.prompt.md`; and
- every remaining prompt as unchanged from its pre-remediation disposition after validation.

The manifest update must not alter any non-prompt disposition, glob, category, roster, pack, lifecycle body, authority statement, inventory count, or unrelated text. A missing, conflicting, ambiguous, or non-deterministic path classification is a stop condition and cannot be resolved by presuming an asset inactive.

## Review and Full-Rerun Requirements

After remediation, both reviews are mandatory:

1. **Independent QA review:** The single permitted `qa-engineer-general`, if dispatched, independently verifies the exact five prompt outcomes, malformed-content removal, deterministic path-specific manifest dispositions, unchanged remaining prompts, write-boundary compliance, and absence of prohibited mutations.
2. **Principal Architect read-only review:** The Principal Architect verifies the prompt dispositions, required host-valid behavior, customer-discovery hard stop, inactive/reference treatment, and consistency with governing identity, Git, quality, and host-safety rules. The Architect makes no corrective mutation during this review.

Any review concern stops the route and returns it through the Principal Software Developer. Review does not authorize opportunistic correction, a second remediation dispatch, or a weakened validation standard.

Only after both reviews pass may the single permitted `qa-engineer-general` perform the full manifest-derived R1-T16 rerun under every original requirement in `PI-1-S1-R1-T16-GUIDANCE-VALIDATION-AUTHORIZATION-2026-07-10`. The rerun must derive its scan list from the current manifests, distinguish active failures from inactive/reference matches, validate all original identity, implementation-fact, Git-policy, host-guidance, roster/pack-integrity, protected-invariant, and protected-change requirements, and stop on any original or new stop condition.

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` is the sole authorized rerun evidence mutation and may be created only when the full rerun passes. A failed or blocked rerun must be reported without creating that file and without weakening, replacing, or supplementing the evidence requirement.

## Exact Write Allowlist

The bounded route may modify only:

- `.github/prompts/clarify.prompt.md`;
- `.github/prompts/qa.prompt.md`;
- `.github/prompts/retro.prompt.md`;
- `.github/prompts/triage.prompt.md`;
- `.github/prompts/taskstoissues.prompt.md`;
- path-specific prompt-disposition entries only in `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`; and
- only after both reviews and a passing full rerun, creation of `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md`.

This decision record is the only mutation made by the Project Executive Manager. It authorizes the later bounded route but does not perform any allowlisted remediation or validation mutation.

## Explicit Exclusions

This decision does **not** authorize:

- execution of remediation, review, or R1-T16 by the Project Executive Manager or through this decision record;
- automatic activation or dispatch of any Principal, worker, agent, skill, route, roster entry, or pack;
- more than one executable `developer-general` remediation dispatch or more than one executable `qa-engineer-general` independent-review and full-rerun dispatch;
- any fleet-ledger, work-index, executive-state, sprint-progress, board, task-status, generated-state, or other status mutation;
- edits to any prompt other than the five exact prompt paths in the write allowlist;
- edits to any manifest content other than path-specific dispositions for those prompts and unchanged-disposition accounting for the remaining prompts;
- edits to roster, skill-pack, agent-body, skill-body, constitution, instruction, documentation, sprint-plan, sprint-task, sprint-specification, source, application, package, dependency, lockfile, test, continuous-integration, runtime, or Sprint 2 surfaces;
- product scope expansion, product-feature work, customer-discovery execution, discovery conclusions, backlog commitment, or external issue mirroring;
- execution of reference command-line tooling, pytest close-out, doctor mechanics, ledger mechanics, or other unavailable or deferred mechanics;
- cleanup, deletion, restoration, move, rename, or reclassification outside the exact malformed duplicate-content removal and path-specific dispositions authorized above;
- staging any file, creating a commit, pushing, opening or modifying a pull request, merging, rebasing, or creating, deleting, switching, or otherwise modifying a branch or worktree;
- access to secrets, secret values, databases, business data, connector data, or protected data; or
- authority inferred beyond the exact bounded remediation, review, and rerun route recorded here.

The host safety invariants remain non-negotiable: send, post, pay, and order actions remain drafts until explicit owner approval; connector implementations do not silently change the connector/tool contract; financial, inventory, and optimization calculations remain deterministic server-side operations; and secrets remain in `.env` only and never enter Git, logs, evidence, or browser output.

## Required Ordered Route

1. **Principal Software Developer — preflight and sequencing:** Confirm the authorized branch and stable snapshot, satisfied dependencies, exact write allowlist, original R1-T16 requirements, absence of protected changes, and absence of stop conditions. Do not mutate the ledger, work index, state, progress, task status, or any non-allowlisted surface.
2. **Principal Architect — disposition instruction:** Provide the Principal Software Developer with the exact path-specific dispositions and required host-valid behavior for the three active-adapted prompts and two unavailable hard-stop prompts, consistent with this record. This is governed direction, not executable dispatch or file mutation.
3. **Principal Software Developer — bounded remediation dispatch:** At discretion, dispatch at most one task-specific executable `developer-general` carrying the five exact prompt outcomes, manifest boundary, write allowlist, exclusions, and stop conditions. Dispatch is not automatic and must not mutate the ledger.
4. **Developer General — bounded remediation:** Modify only the five exact prompt files and path-specific prompt dispositions in `ASSET-MANIFEST.md`. Preserve every unchanged prompt and all non-prompt manifest content. Perform no validation-evidence creation, external action, Git operation, cleanup, or out-of-scope correction.
5. **QA Engineer — independent review:** If separately dispatched by the Principal Software Developer, the one permitted executable `qa-engineer-general` independently verifies all five required outcomes, deterministic manifest classification, unchanged remaining prompts, exact-scope compliance, and zero prohibited mutations. Any defect or ambiguity stops the route without correction.
6. **Principal Architect — read-only governed review:** Review the remediated prompts and path-specific manifest dispositions for required host-valid behavior and governance consistency. Make no mutation. Any material concern or unavailable review stops the route.
7. **QA Engineer — full R1-T16 rerun:** Using the same single permitted `qa-engineer-general` dispatch, rerun the complete manifest-derived R1-T16 under the original validation requirements. Create only `evidence/GUIDANCE-VALIDATION.md`, and only if the full rerun passes. On FAIL or BLOCKED, create no rerun evidence file and return the result through the Principal Software Developer.
8. **Principal Software Developer — final scope verification and report:** Verify that only the allowlisted remediation paths changed, `GUIDANCE-VALIDATION.md` exists only following a recorded PASS, all reviews completed, no excluded operation occurred, and no protected surface changed. Report the result without mutating ledger, work index, state, progress, or task status and without starting R1-T17.

This is an authorization and routing record only. No remediation is executed, no worker is dispatched, no review is initiated, no R1-T16 rerun occurs, and no validation evidence is created by this record.