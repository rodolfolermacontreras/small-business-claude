---
name: fleet
description: Generate safe fleet dispatch packets for parallel implementation work.
argument-hint: "What implementation work should I dispatch to the fleet?"
---

You are running the **Fleet** command for the SDD workflow.

## Workflow Phase
- Primary phase: **Phase 8 - Implement**
- Use only after tasks are already defined and parallel safety has been checked.

## Goal
Prepare dispatch packets for multiple workers so separately confirmed actors can later dispatch authorized parallel work without file conflicts or ambiguity. Packet preparation is not automatic dispatch.

## Preconditions
Only proceed if:
- Tasks already exist.
- Candidate tasks are marked `[P]`.
- Each task has task-specific authority, an exact write set, explicit blocked paths, and stop conditions.
- Exact write sets are non-overlapping and shared-file conflicts were checked.
- Each task has verification criteria limited to configured, applicable, authorized commands.
- Each worker can be given full context without telling them to "go read the plan."
- The actors who would perform the work and dispatch have been separately confirmed.

## How to Work
1. Review the task list and identify safe parallel batches.
2. Confirm each task has distinct file boundaries.
3. Choose the best worker type for each packet.
4. Include full context: task goal, linked spec/plan/task IDs, files in scope, blocked files, test expectations, and stop conditions.
5. Emit one dispatch packet per worker.
6. Stop with a sequential recommendation when files are shared, authority is unclear, or write boundaries overlap.

## Output Format
```markdown
# Fleet Dispatch Packet
- Batch:
- Reason this batch is safe:

## Worker 1
- Worker type:
- Separately confirmed actor:
- Task ID:
- Task-specific authority:
- Goal:
- Context:
- Exact write set:
- Blocked files:
- Verification:
- Stop conditions:
- Output required:

## Worker 2
...

## Integration Notes
- Advisory integration sequence:
- Shared validation after batch:
- Escalation triggers:
```

## Safety Rules
- Never batch tasks that obviously share the same core file.
- If conflict risk or authority is unclear, recommend sequential dispatch and stop.
- Include explicit blocked files when a worker must stay out of sensitive areas.
- Validation may include only configured, applicable, authorized commands that are actually executed. Missing tests, lint, typecheck, build, CI, ledger, or work-index mechanics are unavailable, unconfigured, or deferred, never PASS.
- Do not create worktrees or branches, mutate ledger or status artifacts, dispatch workers, or perform Git operations. Worktrees are optional and require separate authorization when useful.
- Preparing this prompt or a packet does not authorize any Git operation.

## Host Policy and Product Invariants
- `main` is protected. Changes use authorized short-lived branches and enter `main` only through a pull request after required checks; direct commits to `main` are prohibited. This prompt does not authorize branch creation, commits, pushes, pull requests, merges, rebases, or any other Git operation.
- Node.js `>=24` is owner policy, but compatibility validation and package metadata alignment are deferred to separately authorized Sprint 2 work; do not claim compatibility or readiness.
- Send, post, pay, and order actions remain drafts in the approval outbox until explicit owner approval.
- Connector implementations must not silently change the connector/tool contract.
- Financial, inventory, and optimization calculations remain deterministic server-side operations; the model may explain results but must not invent or replace calculations.
- Secrets remain in `.env` only and must never enter Git, logs, evidence, or browser output.

## Completion Condition
End with either:
- `Fleet recommendation: packets ready for separately authorized dispatch`
- or `Fleet recommendation: do not parallelize`


## Project Rules
- Read `.github/copilot-instructions.md` first when project context is needed.
- Respect the SDD lifecycle and do not skip gates without saying why.
- No emojis.
- Prefer concise, traceable output over generic brainstorming.
- Surface blockers, assumptions, and escalation triggers explicitly.
