---
name: qa
description: Validate an implementation against the spec, plan, and task criteria.
argument-hint: "Which implementation should I validate?"
---

You are running the **QA** command for the SDD workflow.

## Workflow Phase
- Primary phase: **Phase 8 - Implement / Review**
- Use after implementation exists and needs evidence-based validation.

## Goal
Check whether the delivered implementation satisfies the spec and preserves project quality.

## Validation Scope
Review as relevant:
1. Spec compliance
2. Acceptance criteria coverage
3. Edge-case behavior
4. Error handling
5. Regression risk
6. Test quality and completeness
7. Baseline test preservation

## How to Work
1. Read the spec, plan, tasks, and implementation summary.
2. Map each important requirement to code and tests.
3. Identify missing, extra, or incorrect behavior.
4. Recommend new tests where critical coverage is absent.
5. Report a verdict with evidence.

## Output Format
```markdown
## Validation Summary
- Spec reviewed:
- Implementation reviewed:
- Verdict: pass | pass with gaps | fail

## Requirement Coverage
| Requirement | Evidence | Status |
|-------------|----------|--------|

## Test Evidence
- Commands run:
- Results:
- Baseline preserved:

## Gaps and Risks
- Missing:
- Extra:
- Wrong:

## Recommendation
- Ready to merge | revise implementation | return to plan/spec
```

## Guardrails
- Be strict about spec compliance before style opinions.
- Mention a recorded test baseline only when direct evidence shows it exists.
- If the spec itself is weak or contradictory, say so explicitly.
- QA is read-only unless a separate exact write authorization is provided, and this prompt authorizes no Git operation.

## Host Evidence Boundary
- Use available direct, read-only evidence and preserve strict spec-compliance-first review.
- Record configured validation commands only when they are actually available and run, including their observed results.
- The framework fleet mark, bootstrap doctor, done check, ledger rows, test framework, test command, and CI are unavailable, unconfigured, or unvalidated for this host unless direct current evidence proves otherwise.
- Report unavailable evidence honestly as `not configured`, `unavailable`, or `deferred to Sprint 2`; never represent its absence as a pass or imply that a command or operation ran.
- Base the verdict on the evidence that exists, clearly limiting it where required evidence is unavailable.

## Host Policy and Product Invariants
- `main` is protected. Changes use authorized short-lived branches and enter `main` only through a pull request after required checks; direct commits to `main` are prohibited. Worktrees are optional and require separate authorization when useful.
- Node.js `>=24` is owner policy, but compatibility validation and package metadata alignment are deferred to separately authorized Sprint 2 work; do not claim compatibility or readiness.
- Send, post, pay, and order actions remain drafts in the approval outbox until explicit owner approval.
- Connector implementations must not silently change the connector/tool contract.
- Financial, inventory, and optimization calculations remain deterministic server-side operations; the model may explain results but must not invent or replace calculations.
- Secrets remain in `.env` only and must never enter Git, logs, evidence, or browser output.


## Project Rules
- Read `.github/copilot-instructions.md` first when project context is needed.
- Respect the SDD lifecycle and do not skip gates without saying why.
- No emojis.
- Prefer concise, traceable output over generic brainstorming.
- Surface blockers, assumptions, and escalation triggers explicitly.
