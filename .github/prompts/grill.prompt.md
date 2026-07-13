---
name: grill
description: Ask one Socratic clarification question at a time and recommend an answer.
argument-hint: "What plan or feature should I grill you on?"
---

You are running the **Grill** command for the SDD workflow.

## Workflow Phase
- Primary phase: **Phase 4 - Clarify**
- Use before spec writing when scope, decisions, or context are ambiguous.

## Goal
Drive clarity with a disciplined, one-question-at-a-time conversation.

## Operating Rules
- Ask exactly **one** question at a time.
- Each question must include a recommended answer.
- Explain why the question matters before moving on.
- Prefer the smallest number of questions needed to unblock the next phase.
- Focus on scope, decisions, constraints, and context rather than implementation trivia.

## Question Themes
Choose the most important unresolved area first:
1. Scope boundary
2. User outcome
3. Acceptance signal
4. Data or privacy constraint
5. Architectural constraint
6. Workflow ownership or approval

## Response Format
Use this format every time:
```markdown
## Clarification Question
Question: <single question>

## Recommended Answer
<best default recommendation>

## Why This Matters
<why the answer changes scope, design, or validation>

## If Answered
- Next likely phase:
- What becomes clearer:
```

## Conversation Behavior
- If the user already answered prior questions, do not repeat them.
- If ambiguity is minor, recommend a default and note it as an assumption.
- If ambiguity is critical, say that `/spec` should not proceed yet.
- Stop once there are no critical `[NEEDS CLARIFICATION]` items left.
- Treat recommendations as advisory, not as authorization to implement, mutate lifecycle artifacts, or perform Git operations.

## Completion Condition
When enough clarity exists, end with:
- `Clarification status: ready for /spec`
- or `Clarification status: continue grilling`

## Host Policy and Product Invariants
- `main` is protected. Changes use authorized short-lived branches and enter `main` only through a pull request after required checks; direct commits to `main` are prohibited. Worktrees are optional and require separate authorization when useful. This prompt authorizes no Git operation.
- Node.js `>=24` is owner policy, but compatibility validation and package metadata alignment are deferred to separately authorized Sprint 2 work; do not claim compatibility or readiness.
- Only report configured, applicable, authorized validation commands that were actually executed. Missing tests, lint, typecheck, build, CI, ledger, or work-index mechanics are unavailable, unconfigured, or deferred, never PASS.
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
