---
name: implement
description: Start implementing one authorized, bounded SDD task using host-valid verification.
argument-hint: "Which task should I implement?"
---

You are running the **Implement** command for the SDD workflow.

## Workflow Phase
- Primary phase: **Phase 8 - Implement**
- Use for a single, scoped task that is ready for execution.

## Goal
Execute one task in a disciplined worker style, following its approved evidence contract when present and preserving project conventions.

## Preconditions
Before implementation, confirm:
- There is a task ID or clearly scoped brief with acceptance criteria, constraints, and an exact file allowlist.
- The relevant spec and plan are available when required.
- Task-specific authority covers every requested write and no active work overlaps the allowed files.
- Any approved evidence contract is identified and applicable to this task.
- Tests are requested only when a host-valid runner and command are configured, or when adding test mechanics is separately authorized.

## Pre-Execution Evidence Gate
Before any implementation begins:
1. Restate the exact write boundary, blocked paths, acceptance criteria, and stop conditions.
2. Identify the approved evidence contract when one exists; do not invent a universal validation artifact or checklist.
3. Identify configured, applicable, authorized validation commands. If executable tests are required but no host-valid mechanics are configured or separately authorized, stop and escalate that dependency.
4. Do not create or switch a branch or worktree, or perform any Git mutation, without exact separate authority. Worktrees are optional.

## Required Workflow
1. Restate the task and scope.
2. Identify allowed files, blocked files, and applicable evidence-contract items.
3. When a host-valid test runner and command are configured, define expected behavior, observe a meaningful failure, implement the minimum change, and refactor with that behavior protected.
4. When no applicable tests are configured, perform authorized manual or read-only verification and label test automation unconfigured or deferred.
5. Run only configured, applicable, authorized validation commands.
6. Summarize changes, observed validation outcomes, unavailable checks, and concerns without implying Git work occurred.

## Post-Execution Evidence Gate
Implementation is complete only when the acceptance criteria have traceable evidence from checks that were configured, applicable, authorized, and actually executed. Never claim tests, lint, typecheck, build, CI, ledger, work-index, or another quality gate passed when it is missing, unavailable, unconfigured, deferred, or not run.

## Output Format
```markdown
## Task Summary
- Task ID:
- Goal:
- Files in scope:

## Evidence Contract
- Approved contract, if present:
- Evidence items owned by this task:
- Unavailable or deferred automation:

## Behavior Plan
- Expected behavior:
- Host-valid test command, if configured:
- Manual or read-only verification when no applicable tests exist:

## Verification Plan
- Targeted tests:
- Broader tests:
- Stop conditions:

## Final Handoff
- Summary:
- Files changed:
- Validation commands and observed results:
- Deferred or unavailable checks:
- Concerns:
```

## Guardrails
- Do not expand scope beyond the assigned task.
- If the task is blocked by ambiguity or missing artifacts, say so immediately.
- Do not create, modify, move, or delete files outside the exact allowlist.
- No branch, worktree, staging, commit, push, pull request, merge, rebase, or other Git mutation is authorized by this prompt.

## Host Policy and Product Invariants
- `main` is protected. Changes use authorized short-lived branches and enter `main` only through a pull request after required checks; direct commits to `main` are prohibited. Worktrees are optional and separately authorized when useful.
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
