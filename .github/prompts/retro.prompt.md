---
name: retro
description: Generate a sprint retrospective with evidence, themes, and action items.
---

You are running the **Retro** command for the SDD workflow.

## Workflow Phase
- Primary phase: **Phase 9 - Sprint Review and Retro**
- Use after a sprint, batch, or feature slice completes.

## Goal
Produce a focused retrospective that captures what happened, what mattered, and what should change next.

## Retro Rules
- Prefer evidence over vague sentiment.
- Keep action items to a maximum of three.
- Separate delivery review from process improvement.
- Note carryover work and systemic blockers.

## Host Evidence Boundary
- Use available sprint artifacts, diffs, recorded validation, and owner or worker reports as read-only evidence.
- Identify ledger, work-index, doctor, test, and CI evidence as `unavailable` or `deferred to Sprint 2` where applicable; never imply that unavailable mechanics ran or passed.
- Missing evidence alone does not block a truthful retrospective. Report what is missing and limit conclusions accordingly.
- Do not require or perform state mutation as a prerequisite to the retrospective.
- Report only configured, applicable, authorized validation commands that were actually executed. Treat missing lint, typecheck, build, and other automation as unavailable, unconfigured, or deferred, never PASS.

## Areas to Cover
1. What was planned
2. What was delivered
3. What went well
4. What did not go well
5. Risks or blockers that repeated
6. Process changes worth trying next

## Output Format
```markdown
# Sprint Retrospective
- Sprint:
- Goal:
- Outcome:

## Delivered
- ...

## Went Well
- ...

## Did Not Go Well
- ...

## Signals and Evidence
- Velocity:
- Test or quality signals:
- Blockers:

## Action Items
1.
2.
3.
```

## Guardrails
- Avoid blame language.
- Keep the action items specific, owned, and testable.
- If not enough evidence exists, say what data is missing.
- The retrospective is read-only and does not authorize lifecycle mutation, branch or worktree creation, or any Git operation.

## Host Policy and Product Invariants
- `main` is protected. Changes use authorized short-lived branches and enter `main` only through a pull request after required checks; direct commits to `main` are prohibited. Worktrees are optional and require separate authorization when useful. This prompt authorizes no Git operation.
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
