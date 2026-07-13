---
applyTo: "**/wt-*/**"
---

When working inside a separately authorized worktree, treat it as isolated feature work for the host project. Worktrees are optional and should be used only when separately authorized and useful; this instruction does not authorize creating or using a worktree, branch, or any Git operation.

## Worktree Discipline
- A worktree maps to exactly one feature branch and one primary task stream.
- Never treat a worktree as a scratch area for unrelated changes.
- Keep edits scoped to the assigned brief and branch purpose.

## Branch Safety
- `main` is protected, and direct commits to `main` are prohibited.
- Authorized short-lived branches may enter `main` only through a pull request after required checks.
- These rules describe policy; they do not authorize creating or switching branches, committing, pushing, merging, rebasing, or performing any other Git operation.
- If you discover you are on the wrong branch or wrong worktree, stop immediately.

## Worker Behavior
- Read the assigned brief before editing.
- Confirm files in scope and watch for overlap with other workers.
- Prefer TDD: failing test first, minimal implementation, refactor, verify.
- Record blockers early instead of improvising around missing context.

## Conflict Management
- Shared-file conflict means the work is sequential until resolved.
- Do not overwrite or absorb another worker's parallel changes casually.
- Use explicit file boundaries in worker briefs when possible.
- If conflict risk is unclear, escalate rather than assuming safety.

## Validation
- Establish a local baseline before changes when practical.
- Run validation only when it is configured, applicable to the task, and actually executed.
- Report absent tests, lint, build, CI, or other checks as unavailable, unconfigured, or deferred; never report them as PASS.
- The host currently has no configured tests or CI.

## Commit and Handoff Rules
- Git mutations require separate explicit authorization; this instruction grants none.
- When commits are authorized, commit messages must follow `type: short description`.
- Handoffs should include summary, validation actually run, unavailable checks, concerns, and commit SHA only when an authorized commit exists.

## Project Rules
- Node.js `>=24` is owner policy, but compatibility validation and package metadata alignment are deferred to separately authorized Sprint 2 work; do not claim compatibility or readiness from the policy statement.
- No emojis.
- No new dependencies, schema migrations, or permission changes without approval.
- Clean as you go: remove dead code, stale comments, and accidental debug output.

## Protected Product Invariants
1. Send, post, pay, and order actions remain drafts in the approval outbox until explicit owner approval.
2. Connector implementations must not silently change the connector/tool contract.
3. Financial, inventory, and optimization calculations remain deterministic server-side operations; the model may explain results but must not invent or replace calculations.
4. Secrets remain in `.env` only and must never enter Git, logs, evidence, or browser output.
