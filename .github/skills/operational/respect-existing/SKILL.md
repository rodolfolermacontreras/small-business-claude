---
name: respect-existing
description: "Use for bounded brownfield work in Small-Business-Claude. Enforces exact allowlists, host conventions, protected invariants, and no drive-by modernization."
argument-hint: "What authorized scope and exact file allowlist must be preserved?"
license: MIT
metadata:
  author: emf-framework
  version: '1.1'
---

# Respect Existing

Small-Business-Claude is an existing working local demo. SDD wraps its code, conventions, history, and safety boundaries; it does not replace them. This body does not activate the skill or authorize a mutation by itself.

## Canonical Instruction

Modify only what the approved task requires, only within its exact file allowlist. Read the local pattern first, make the smallest conforming change, preserve unrelated behavior, and route every broader improvement to separate authorized work.

## Host Baseline

The application uses Node.js `>=24` as owner-approved policy, JavaScript ES modules, Express 5, `@anthropic-ai/sdk`, `dotenv`, built-in `node:sqlite`, and plain HTML/CSS/JavaScript under `public/`, with no build step. It has no configured host test runner, test script, linter, type checker, CI, or required automated pull-request checks. Do not introduce those mechanics, choose a test framework, or fabricate evidence that they exist or passed. Readiness mechanics and mechanical runtime validation are deferred to separately authorized Sprint 2 work.

Retained `testing-conventions`, `pytest-runner`, `fastapi-routes`, and `htmx-frontend` content is inactive/reference-only for this host. Keep it untouched unless an exact allowlist and governing decision separately authorize adaptation.

## Exact-Allowlist Protocol

1. Require a self-contained brief with acceptance criteria, an exact file allowlist, explicit exclusions, and mutation authority.
2. Treat the allowlist as the complete boundary for creating, modifying, moving, or deleting files. Read-only context does not enter the write set.
3. Inspect nearby host code or prose before editing and follow its structure, vocabulary, imports, naming, error handling, formatting, API shapes, and UI patterns.
4. Inspect repository status and the scoped diff read-only. Unexpected pre-existing work belongs to the owner; do not rewrite, restore, clean, stage, or delete it.
5. Confirm no concurrent task owns the same file. Shared-file work must be sequential.
6. Make the smallest change that satisfies the task. Do not modernize or reorganize the surrounding system.
7. Verify the final changed-path list exactly against the allowlist and report unavailable checks honestly.

## Protected Product Invariants

- Anything that would send, post, pay, or place an order remains a draft in the approval outbox until explicit owner approval. Do not bypass the gate or imply that a draft was already executed.
- Connector/tool contracts remain stable unless a separate approved task explicitly authorizes a contract change.
- Financial, inventory, and optimization calculations remain deterministic server-side operations. Do not move them into browser code or model reasoning; the model may explain results but must not invent or replace them.
- `ANTHROPIC_API_KEY` and connector secrets remain only in `.env`. Never commit, log, copy into evidence, persist elsewhere, or expose them to browser code or responses.
- Preserve the local single-user demo, mock connector behavior, no-build architecture, and unrelated public contracts.

## Preserve Local Patterns

- Keep server modules as ES modules and follow existing Express route and error patterns.
- Use the existing Anthropic agent and tool-dispatch paths instead of adding a parallel model-access layer.
- Use the existing built-in SQLite persistence pattern instead of introducing another data layer.
- Keep browser structure in `public/index.html`, presentation in `public/styles.css`, and behavior in `public/app.js`; do not introduce a component framework or build pipeline.
- Reuse existing connector, workflow, API, and outbox shapes unless the approved scope explicitly changes them.

## What Not to Do

- Do not rewrite a module because it appears messy or dated.
- Do not rename or reorganize public APIs, connectors, files, folders, tests, package files, CI, or documentation outside scope.
- Do not add a package, framework, formatter, linter, build step, test runner, or architecture pattern without required approval.
- Do not turn reference examples into active host prescriptions.
- Do not perform broad cleanup, `git clean`, destructive reset, force checkout, or broad staging.
- Do not use `git add .`, `git add -A`, or equivalent. If staging is later explicitly authorized, stage only reviewed paths from the exact allowlist.
- Do not stage, commit, push, open or modify a pull request, merge, rebase, or alter branches or checkout directories unless separately authorized.

## Verification

Use only task-authorized, host-valid evidence: scoped searches, syntax-aware editor diagnostics, final diff review, and `git diff --check -- <exact-allowed-files>`. `npm start` and `npm run dev` are application commands, not tests, and require explicit runtime authority. Absence of host tests, CI, runtime validation, or automated enforcement must be reported as unconfigured/deferred, not passed.

Before reporting done, confirm:

- all changed paths are allowlisted and all exclusions remain untouched;
- nearby host patterns were followed without unrelated reformatting or cleanup;
- outbox, connector, deterministic-calculation, secret, and brownfield invariants are intact;
- no test framework, dependency, build, CI, runtime, or Git operation was invented; and
- observed evidence is separated from approved, implemented, validated, and deferred claims.

## Escape Hatch

If safe completion requires an out-of-scope file, new dependency, schema or connector-contract change, broader architecture, test/CI selection, runtime work, or weakened invariant, stop and report **BLOCKED**. Provide the assigned task and exact allowlist, blocking file or decision, direct evidence, safety or scope impact, and smallest decision needed from the task owner or Architect. Do not make the broader change first.

## Completion Report

Return an independent PASS or BLOCKED, changed files, local patterns preserved, validation scans and diagnostics, protected-invariant findings, unavailable/deferred checks, dispatch used or not used, and explicit exclusions. Do not mutate ledger, progress, state, roster, manifest, package, test, CI, runtime, or Git state unless each operation and file is separately authorized.

No emojis in code, documentation, prompts, commits, or UI text.
