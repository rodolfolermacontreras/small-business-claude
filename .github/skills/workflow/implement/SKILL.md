---
name: implement
description: "Use when executing an authorized Small-Business-Claude task with an exact allowlist, evidence requirements, and explicit stop conditions."
argument-hint: "Which authorized task and exact file allowlist should I implement?"
license: MIT
metadata:
  author: emf-framework
  version: '1.1'
---

# Implement

Bounded implementation workflow for Small-Business-Claude. Body adaptation does not activate this skill, dispatch a worker, or authorize a mutation.

## Required Host Context

The host is a working local, single-user demo using Node.js `>=24` as owner-approved policy, JavaScript ES modules, Express 5, `@anthropic-ai/sdk`, `dotenv`, built-in `node:sqlite`, and plain HTML/CSS/JavaScript under `public/`, with no build step. Mechanical runtime validation and package-metadata alignment are deferred to separately authorized Sprint 2 work.

No host test runner, test script, linter, type checker, CI, or required automated pull-request check is configured. `npm start` and `npm run dev` are application commands, not tests. Do not select a test framework or fabricate test, red/green, CI, runtime, or readiness evidence. Retained `testing-conventions`, `pytest-runner`, `fastapi-routes`, and `htmx-frontend` material is inactive/reference-only for this host.

## Authority and Exact-Scope Preflight

1. Require an approved task or dated owner decision with a self-contained objective, acceptance criteria, exact file allowlist, exclusions, gates, and mutation authority.
2. Read active host instructions, applicable later dated owner decisions, the ratified constitution, the task, and relevant lifecycle manifests. Missing or conflicting lifecycle state is inactive by default.
3. Confirm the current branch is exactly the branch required by the task. Do not alter branches or separate checkout directories without explicit authority.
4. Inspect `git status --short --branch` and the scoped diff read-only. Unexpected pre-existing changes are owner work; do not restore, rewrite, clean, stage, or delete them.
5. Treat the allowlist as the complete boundary for creation, modification, movement, and deletion. Stop if a required change is outside it or another task owns the same file.

## Bounded Implementation

1. Read nearby host code or guidance and follow existing naming, layout, imports, error handling, API shapes, and formatting.
2. Define expected behavior or acceptance evidence before implementation.
3. When separately approved host test mechanics exist and the task authorizes tests, use test-first discipline. Until then, state that automated tests are unconfigured/deferred; do not substitute a framework or claim TDD evidence.
4. Make the smallest change that meets the acceptance criteria. Do not modernize, reorganize, rename, clean, or reformat unrelated material.
5. Use only task-authorized validation. Runtime checks require explicit authority and are manual observations, not automated tests.
6. Inspect the final scoped diff and verify every changed path against the exact allowlist.

## Protected Product Invariants

- Send, post, pay, and order actions remain drafts in the approval outbox until explicit owner approval.
- Connector/tool contracts remain stable unless separately specified and approved.
- Financial, inventory, and optimization calculations remain deterministic server-side operations; model output may explain but must not invent or replace them.
- `ANTHROPIC_API_KEY` and connector secrets remain only in `.env`; never place them in code, logs, evidence, persistence, browser output, or Git changes.
- Preserve the brownfield local demo, mock connector behavior, and unrelated public contracts.

## Self-Review and Evidence

- Map every acceptance criterion to direct, scoped evidence.
- Confirm every changed path is allowlisted and all exclusions remain untouched.
- Check that no unrelated cleanup, reformatting, dependency, framework, build, test, CI, runtime, or Git operation was introduced.
- Verify the outbox, connector, deterministic-calculation, secret, and brownfield invariants.
- Check available syntax-aware diagnostics for relevant new errors.
- Run `git diff --check -- <exact-allowed-files>`.
- Report unavailable host tests, CI, runtime validation, and Sprint 2 mechanics as deferred, never passed.
- Submit first to Stage 1 spec-compliance review. Stage 2 code-quality review may begin only after Stage 1 passes.

## Git Safety

`main` is protected. Authorized work uses a short-lived branch and may enter `main` only through a pull request after required checks pass. Policy is not authority to mutate Git.

- Do not stage, commit, push, open or modify a pull request, merge, rebase, or alter branches or checkout directories without explicit task and owner authority.
- Never use `git add .`, `git add -A`, or equivalent broad staging. If staging is separately authorized, stage only reviewed exact-allowlist paths and inspect the staged diff.
- Never use broad cleanup, `git clean`, destructive reset, force checkout, or force push.
- A missing automated check is a deferred control, not a passing result.

## Stop Conditions

Stop and report **BLOCKED** if authority, lifecycle, wording, scope, acceptance, or evidence is ambiguous; a required file is outside the allowlist; concurrent ownership overlaps; an unapproved dependency, schema, connector-contract, architecture, test/CI, runtime, or Sprint 2 change is required; or a protected invariant could be weakened. State the blocker, evidence, impact, and smallest owner or Architect decision needed. Do not make the broader change first.

## Completion Report

Return an independent PASS or BLOCKED, all changed files, adaptations made, exact validation scans and diagnostics, protected-invariant findings, unavailable/deferred checks, dispatch used or not used, and explicit exclusions. Do not mutate task, ledger, progress, state, roster, manifest, package, test, CI, runtime, or Git state unless each operation and path is separately authorized.

## Common Mistakes

- Treating an adapted body, task description, or Git policy as standing mutation authority.
- Using inactive Python/FastAPI/pytest examples as host instructions.
- Inventing automated test evidence because host tests are unconfigured.
- Running application commands and calling them tests.
- Performing drive-by refactors, cleanup, broad staging, or unapproved Git operations.
- Starting code-quality review before spec-compliance review passes.

No emojis in code, documentation, prompts, commits, or UI text.
