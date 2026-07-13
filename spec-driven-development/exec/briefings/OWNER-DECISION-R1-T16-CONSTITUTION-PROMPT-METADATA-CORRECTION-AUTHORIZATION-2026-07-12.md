---
id: PI-1-S1-R1-T16-CONSTITUTION-PROMPT-METADATA-CORRECTION-AUTHORIZATION-2026-07-12
type: owner-decision
date: 2026-07-12
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T16-exact-constitution-prompt-metadata-guidance-correction-review-and-conditional-complete-rerun
supersedes: prior-R1-T16-remediation-boundaries-in-part
---

# PI-1 Sprint 1 R1-T16 Constitution-Prompt Metadata-Correction Authorization

## Decision Authority and Source

On 2026-07-12, human owner Rodolfo Lerma explicitly approved the previously presented narrow R1-T16 constitution-prompt metadata correction with the exact response:

> Option 1, get it done

The previously presented Option 1 authorized exactly one remediation content change in `.github/prompts/constitution.prompt.md`, the required independent and domain reviews, the complete manifest-derived R1-T16 rerun only after all applicable reviews pass, conditional creation of `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` only on a complete rerun PASS, and final Principal Software Developer boundary verification.

This briefing is the authoritative dated Level 2 disposition of that decision. It supersedes earlier R1-T16 remediation boundaries only where they conflict with the exact single-file, single-content-change boundary and ordered route recorded here. All prior R1-T16 validation requirements, evidence discipline, secret and protected-data rules, access limits, stop conditions, host invariants, protected surfaces, and no-false-claim requirements remain controlling unless this record is more restrictive.

Creating this briefing records authorization only. It does not apply the correction, dispatch an actor, perform a review, rerun R1-T16, create validation evidence, change status, or perform a Git operation.

## Exact Remediation Authorization

The Principal Software Developer may route exactly one bounded correction actor to make exactly one remediation content change in:

`.github/prompts/constitution.prompt.md`

The sole authorized content change is to replace the rigid five-field, fixed-lines, and no-additional-frontmatter-fields rule in the `## Frontmatter Rules` guidance with host-valid guidance that requires all of the following:

1. Preserve every existing ratified constitution metadata field and its value unless that specific field is explicitly required and authorized to change by the amendment.
2. Preserve `amendment_authority`, `amendment_record`, and `proposal` wherever present, together with any other existing unrelated metadata.
3. Update only metadata fields explicitly required by the amendment workflow and explicitly authorized for that amendment, including the selected semantic-version change and amendment date where applicable.
4. Do not delete, reorder for normalization, rename, reformat, synthesize, or otherwise normalize unrelated metadata.
5. Do not force ratified host constitution files into a five-field or fixed-line frontmatter shape.
6. Stop without mutation and return for clarification when the target constitution file, the applicable amendment authority, or the permitted metadata change is absent, conflicting, or ambiguous.

The correction must be the smallest replacement of the conflicting frontmatter guidance necessary to establish these rules. It must not alter prompt frontmatter, headings, section order, examples outside the conflicting rule, output structure, escalation rules, project rules, protected invariants, or unrelated wording.

## Requirements That Must Remain Unchanged

The correction must preserve without weakening, removal, reinterpretation, or substitution every existing requirement in `.github/prompts/constitution.prompt.md` concerning:

- Small-Business-Claude host identity and host-specific operation;
- the authority hierarchy in which dated Level 2 owner decisions outrank conflicting constitution text;
- explicit amendment authority for the specific constitution change;
- read-only analysis and draft-only behavior when mutation authority is absent;
- semantic-version classification and required version/date handling for authorized amendments;
- the complete propagation scan across the governed skill, prompt, and template surfaces;
- evidence-based alignment verdicts and the Sync Impact Report;
- all four explicit protected product invariants;
- preservation of amendment metadata when mutation is not explicitly authorized;
- no automatic downstream mutation;
- no claimed mechanics, validation, alignment, or success without evidence; and
- no-op-without-authority behavior: discussion, drafting, prompt invocation, or general instruction alone must not authorize governance mutation.

Any inability to preserve these requirements exactly in substance is a stop condition and requires clarification before mutation.

## Exact Write Boundary

### Remediation write allowlist

- `.github/prompts/constitution.prompt.md` — only the single frontmatter-guidance correction defined above.

### Sole conditional evidence path

- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` — creation or update is permitted only after every applicable review passes, the complete manifest-derived R1-T16 rerun passes every governing requirement, and final Principal Software Developer boundary verification confirms compliance.

No other remediation, evidence, file, content, state, or status mutation is authorized. This owner-decision briefing is the separately requested authority record and is not part of the later correction actor's write set.

## Mandatory Reviews and Gates

All required reviews are independent of the bounded correction actor's self-review. Reviewers must stop without opportunistic correction on any concern.

1. **Independent QA re-review:** After the correction, independently verify the exact single-file and single-content-change boundary; preservation of all existing prompt requirements named in this record; host-valid preservation of all ratified constitution metadata, including `amendment_authority`, `amendment_record`, and `proposal` where present; ambiguity hard-stop behavior; and zero prohibited mutations or operations.
2. **Fresh Principal Architect review:** After independent QA passes, perform a new read-only review of the corrected prompt. Prior Architect passes do not satisfy this gate. The review must verify authority hierarchy, amendment-authority boundaries, semantic-version behavior, metadata preservation, propagation-scan requirements, explicit invariants, ambiguity handling, and no-op-without-authority behavior.
3. **Principal Product Manager domain review if affected:** A read-only PM review is mandatory if the corrected wording touches or could affect product authority, customer-discovery gates, prioritization, backlog commitment, acceptance criteria, scope, or user value. If the PM domain is not affected, that determination must be explicit and evidence-based before proceeding; ambiguity requires the PM review.
4. **Principal Software Developer domain review:** Perform a read-only review distinct from final boundary verification. Verify executable clarity, bounded-actor instructions, stop behavior, validation sequencing, evidence rules, host-mechanics claims, and absence of widened implementation or dispatch authority.
5. **Complete manifest-derived R1-T16 rerun:** Only after independent QA, fresh Architect review, the applicable PM disposition, and PSD domain review all pass may QA rerun R1-T16 in full from the current manifest-derived scan list. The rerun must not be reduced to the changed prompt, frontmatter metadata, invariant search, or a delta-only review. It must retain every applicable identity, implementation-fact, Git-policy, host-guidance, lifecycle, roster/pack-integrity, protected-invariant, protected-change, evidence, access, and stop-condition check from all governing R1-T16 authorizations.
6. **Final Principal Software Developer boundary verification:** After the complete rerun, verify the exact correction boundary, all required dated review evidence, the conditional evidence gate, zero prohibited mutations and operations, and no unauthorized state transition before accepting or reporting the result.

Any failed, blocked, unavailable, ambiguous, conflicting, or unverified review or gate stops the route. No reviewer, validator, or Principal may correct the prompt under review authority.

## Conditional GUIDANCE-VALIDATION.md Gate

`spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md` may be created or updated only if:

1. the bounded correction changes only the authorized frontmatter-guidance content in `.github/prompts/constitution.prompt.md`;
2. independent QA passes;
3. the fresh Principal Architect review passes;
4. the Principal Product Manager review passes when affected, or a clear evidence-based NOT-AFFECTED determination is recorded;
5. the Principal Software Developer domain review passes;
6. the complete manifest-derived R1-T16 rerun passes every governing requirement; and
7. final Principal Software Developer boundary verification passes.

On any FAIL, BLOCKED, ambiguity, unavailable review, missing evidence, or scope deviation, `GUIDANCE-VALIDATION.md` must not be created, changed, replaced, or supplemented under this authorization.

## Explicit Prohibitions

This authorization prohibits every mutation except the one exact remediation content change and the conditional validation evidence described above. It specifically prohibits:

- any other edit, deletion, restoration, creation, move, rename, cleanup, formatting, whitespace-only change, normalization, or reclassification in `.github/prompts/constitution.prompt.md`;
- any constitution-file amendment or metadata mutation;
- any change to another prompt, instruction, agent, skill, pack, roster, template, documentation file, manifest, sprint artifact, evidence file, or process artifact;
- any application or host-source change under `server/`, `public/`, or another source surface;
- any package, dependency, lockfile, package metadata, or package-script change;
- any test, test runner, test configuration, test evidence, or test-status change;
- any continuous-integration, workflow, branch-protection, check, or enforcement change;
- any runtime, Node.js compatibility, environment, database, connector-data, business-data, or secret change or access;
- any Sprint 2 artifact, scope, implementation, validation, execution, or readiness claim;
- any fleet-ledger or other ledger mutation;
- any work-index mutation;
- any generated-state, executive-state, dashboard-state, state-builder output, or other state mutation;
- any sprint-progress, board, report-up, milestone, dispatch-status, task-status, task-completion, or other progress mutation;
- any product implementation, customer-discovery execution or conclusion, backlog commitment, external issue mirroring, or production action;
- any status or lifecycle mutation;
- staging any file;
- creating or amending a commit;
- pushing, pulling, or fetching for mutation;
- opening, modifying, approving, or merging a pull request;
- merging, rebasing, cherry-picking, reverting, resetting, or tagging;
- creating, deleting, switching, or otherwise modifying a branch or worktree; and
- authority inferred beyond this exact correction, required reviews, complete rerun, conditional evidence gate, and final boundary verification.

All Git operations are prohibited. No application, package, test, continuous-integration, runtime, Sprint 2, ledger, work-index, generated-state, progress, task-status, or other status mutation is authorized.

## Required Ordered Route

1. **Principal Software Developer — preflight and sequencing:** Confirm this exact authorization, a stable read-only baseline, the sole remediation path, the exact content boundary, the conditional evidence path, applicable prior R1-T16 requirements, required reviewers, and absence of stop conditions. Preflight must not mutate files, state, status, ledger, work index, or Git.
2. **Principal Software Developer — bounded correction route:** At discretion, route exactly one task-specific bounded correction actor carrying this record's complete boundary and prohibitions. No dispatch is automatic, and dispatch itself must not mutate a prohibited surface.
3. **Bounded correction actor — correction only:** Make only the authorized frontmatter-guidance replacement in `.github/prompts/constitution.prompt.md`. Stop without mutation on any ambiguity, mismatch, inability to preserve existing requirements, or need to touch another content region or path.
4. **Independent QA — mandatory re-review:** Perform the independent review above and stop without correction on any concern.
5. **Principal Architect — fresh read-only review:** Perform the mandatory new governed-surface review; prior passes are insufficient.
6. **Principal Product Manager — conditional read-only domain review:** Review if the PM domain is affected or ambiguity exists; otherwise record a clear evidence-based NOT-AFFECTED disposition.
7. **Principal Software Developer — read-only domain review:** Perform the mandatory engineering-domain review, distinct from final verification.
8. **QA Engineer — complete R1-T16 rerun:** Only after all applicable reviews pass, execute the complete manifest-derived rerun under every governing requirement. Do not reduce or weaken the validation scope.
9. **Conditional validation evidence:** Create or update `GUIDANCE-VALIDATION.md` only on a complete rerun PASS and subject to final PSD verification. On any other result, make no validation-evidence mutation.
10. **Principal Software Developer — final boundary verification and report:** Verify all boundaries, reviews, rerun evidence, exclusions, and zero prohibited operations before accepting or reporting the outcome. Do not mutate status, ledger, work index, generated state, progress, task status, or Git.

This is an authorization and routing record only. The Project Executive Manager has not applied the correction, dispatched an actor, conducted a review, rerun R1-T16, created validation evidence, or performed any prohibited operation.
