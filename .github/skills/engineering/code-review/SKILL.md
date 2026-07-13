---
name: code-review
description: "Use for ordered Small-Business-Claude review: Stage 1 verifies spec compliance, then Stage 2 evaluates code quality only after Stage 1 passes."
argument-hint: "Which authorized task, exact allowlist, and scoped diff should I review?"
license: MIT
metadata:
  author: emf-framework
  version: '1.1'
---

# Code Review

Evidence-based, two-stage review for bounded Small-Business-Claude changes. Stage 1 spec-compliance review always precedes Stage 2 code-quality review. This body does not authorize mutation, activation, Git operations, or merging.

## Required Inputs

Require the approved task or specification, acceptance criteria, exact file allowlist, exclusions, scoped implementation diff, applicable owner decisions and constitution requirements, and all claimed validation evidence. Default to read-only review. Missing or conflicting authority, scope, lifecycle state, or evidence produces **BLOCKED**, not an inferred pass.

## Host Review Baseline

The host uses Node.js ES modules, Express 5, `@anthropic-ai/sdk`, `dotenv`, built-in `node:sqlite`, and plain browser HTML/CSS/JavaScript, with no build step. No host test runner, test script, linter, type checker, CI, or required automated pull-request check is configured. Test tooling, the first automated health smoke test, CI, and mechanical runtime validation are deferred to separately authorized Sprint 2 work.

Do not select tooling or report tests, CI, runtime compatibility, or pull-request checks as passing without direct later authorized host evidence. `npm start` and `npm run dev` are application commands, not tests. Retained `testing-conventions`, `pytest-runner`, `fastapi-routes`, and `htmx-frontend` guidance is inactive/reference-only and is not a host review standard.

## Pre-Review Scope Check

1. Compare changed paths with the exact allowlist. Any path outside it is a Stage 1 scope failure; do not repair it opportunistically.
2. Confirm all explicit exclusions remain untouched, including protected application, package, test, CI, runtime, roster, ledger, state, progress, and Git-operation surfaces.
3. Distinguish pre-existing owner work from the scoped change.
4. Use only read-only inspection and authorized diagnostics. Do not clean, stage, commit, push, open or modify a pull request, merge, rebase, or alter branches or checkout directories.

## Stage 1: Spec-Compliance Review

Review only whether the implementation matches the authorized task.

Check that every required adaptation and acceptance criterion has direct evidence; no excluded or unrequested feature, file, cleanup, tool, or Git operation was added; implementation and claims match owner decisions, exact scope, and deferred boundaries; and no unavailable check is represented as configured or passing.

Classify findings:

- **MISSING** - required work or evidence is absent.
- **EXTRA** - unrequested work, scope, tooling, or mutation was added.
- **WRONG** - behavior, wording, evidence, order, or scope contradicts authority.

Required output:

```text
SPEC COMPLIANCE REVIEW
Task: <task>
Allowlist: <exact paths>

Status: COMPLIANT | NOT COMPLIANT | BLOCKED

Issues found:
- MISSING: <finding and evidence>
- EXTRA: <finding and evidence>
- WRONG: <finding and evidence>

Verdict: PASS - proceed to Stage 2 | FAIL - return for correction | BLOCKED
```

If Stage 1 is not **COMPLIANT**, stop. After correction, repeat Stage 1. Never begin Stage 2 before Stage 1 passes.

## Stage 2: Code-Quality Review

Begin only after recording Stage 1 **COMPLIANT**. Review quality, correctness, maintainability, and host conventions without reopening product scope.

Check, as applicable:

- explicit error and failure handling with no hidden failures;
- null, empty, boundary, malformed-input, and concurrency behavior;
- consistency with nearby ES-module, Express, built-in SQLite, Anthropic tool-path, and plain-browser patterns;
- safe browser rendering and server-only handling of secrets and internal data;
- clear naming without unnecessary duplication or over-engineering;
- no unused imports, variables, commented-out blocks, magic values, or unrelated formatting;
- proportionate, honestly labeled validation; and
- no unapproved dependency, framework, build step, test tooling, or architecture pattern.

### Mandatory Safety Checks

- Send, post, pay, and order actions remain drafts behind explicit owner approval in the outbox.
- Connector/tool contracts remain stable unless separately specified and approved.
- Financial, inventory, and optimization calculations remain deterministic server-side operations and are not replaced by model-generated calculations.
- Secrets remain only in `.env` and do not enter code, logs, evidence, persistence, browser output, or Git changes.
- Brownfield conventions and behavior outside the task remain unchanged.

Classify findings:

- **CRITICAL** - must fix before approval: security, correctness, data loss, secret exposure, approval-gate bypass, or protected-invariant regression.
- **IMPORTANT** - should fix before approval: maintainability, performance, inadequate failure handling, or material validation weakness.
- **SUGGESTION** - optional improvement that must not expand the task.

Required output:

```text
CODE QUALITY REVIEW
Task: <task>
Stage 1: COMPLIANT

Strengths:
- <directly observed strength>

Critical issues:
- <finding, location, impact, remediation>

Important issues:
- <finding, location, impact, remediation>

Suggestions:
- <optional finding>

Unavailable or deferred checks:
- <host tests, CI, runtime, or other unavailable control>

Verdict: APPROVED | CHANGES REQUIRED | BLOCKED
```

After Stage 2 corrections, re-review each correction and verify the fix did not alter spec scope. If it did, return to Stage 1.

## Validation Evidence

Inspect only the exact scoped diff; run scoped searches for required and prohibited active guidance; check syntax-aware diagnostics for allowed files; run `git diff --check -- <exact-allowed-files>`; and map each acceptance criterion and invariant to an observed result. Runtime validation requires explicit task authority and is manual evidence, not an automated test. Missing tests, CI, runtime, or enforcement are deferred or BLOCKED when required, never passed.

## Git and Merge Boundary

`main` is protected; changes may enter it only from an authorized short-lived branch by pull request after required checks pass. Review approval is not authority to stage, commit, push, open or modify a pull request, merge, rebase, or alter branches or checkout directories. Never use broad staging. If staging is later authorized, only reviewed allowlisted paths may be staged.

## Common Mistakes

- Performing Stage 2 before Stage 1 passes.
- Combining stages so review order cannot be proven.
- Accepting a diff outside the exact allowlist.
- Applying inactive Python/FastAPI/pytest conventions to the Node.js host.
- Calling application startup a test or claiming absent automation passed.
- Treating review approval as Git or merge authority.
- Weakening protected invariants to simplify implementation.

No emojis in code, documentation, prompts, commits, or UI text.
