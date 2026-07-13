---
name: git-workflow
description: "Use when evaluating or performing a Git operation for Small-Business-Claude. Enforces protected main, authorized short-lived branches, pull-request entry, and lifecycle-aware procedural controls."
argument-hint: "What authorized Git operation or policy question needs review?"
license: MIT
metadata:
  author: emf-framework
  version: '1.1'
---

# Git Workflow

Defines Small-Business-Claude Git policy. This is policy guidance, not standing authority
to execute a Git action. Adapting this body does not activate the skill or alter its
manifest state.

## Governing Policy

- `main` is the protected integration and production branch. Direct commits to `main`
  are prohibited.
- Every change must be developed on a short-lived branch scoped to authorized work.
- Changes may enter `main` only through a pull request after all required checks pass.
- Staging, committing, pushing, opening a pull request, merging, rebasing, creating or
  switching a branch, or creating a separate checkout directory requires the applicable
  task and owner authority. This skill and the governing policy do not grant it.
- Git-hosting branch protection, required host checks, host tests, and CI are not yet
  configured. Their implementation and mechanical validation are deferred to Sprint 2.
  Until then, compliance is procedural; a missing check MUST NOT be reported as passing.

## Authority Check

Before any Git mutation:

1. Apply platform and safety instructions.
2. Read `.github/copilot-instructions.md`.
3. Apply later dated Level 2 owner decisions within their scope before older conflicting
   constitution text.
4. Apply the ratified constitution, authorized task/briefing, and exact file allowlist.
5. Check roster or manifest lifecycle and activation metadata for any asset used.

If lifecycle or activation metadata is missing or conflicting, the affected asset is
inactive by default. A skill body, example, file path, dependency, or role assignment
does not activate an asset. Stop when authority for the requested Git action is absent.

## Procedural Decision Flow

1. **Is the current branch `main`?** Do not mutate it. Obtain explicit authority for an
   authorized short-lived branch; this skill does not create or switch one automatically.
2. **Is the current branch an authorized short-lived branch?** Confirm that the task,
   owner decision, and allowlist cover the intended mutation.
3. **Is the action outside the allowlist or explicitly excluded?** Stop and report the
   boundary. Do not clean, stage, commit, push, merge, rebase, or alter repository state.
4. **Is work ready to enter `main`?** It may do so only through a pull request after all
   required checks pass. Until Sprint 2 defines automated host checks, report the actual
   scoped review evidence and every unavailable control without treating absence as pass.

## Branch and Checkout Guidance

- Branch names MUST be short-lived and scoped to the authorized work. No inherited branch
  naming template is mandatory unless an applicable owner-authorized task specifies one.
- A separate checkout directory is optional, not host policy. Use one only when separately
  authorized and useful for isolation.
- Cleanup is never implicit. Removing branches, checkout directories, or untracked files
  requires explicit scope and must preserve evidence.
- Never broaden a task allowlist to accommodate a Git operation.

## Verification Before Pull-Request Entry

- Use only verification required by the authorized task and currently available in the
  host.
- The host currently has no test runner, `npm test` script, linter, formatter, CI, or
  required automated pull-request checks.
- `npm start` and `npm run dev` are host scripts, but running them requires task authority
  and they are not substitutes for deferred automated checks.
- Framework utility tests under `spec-driven-development/` validate only their declared
  framework scope and MUST NOT be presented as host-application readiness evidence.
- Run `git diff --check -- <authorized paths>` when the task requires it, and inspect only
  the authorized diff. Report unavailable checks explicitly.

## Active Versus Reference Git Material

The current constitution and later dated owner decisions define active host Git policy.
Historical records, copied framework examples, archetypes, templates, and inactive skill
bodies MAY be consulted as evidence or reference only. Conflicting historical branch,
mandatory checkout-directory, direct-integration, test-command, or repository-path
examples MUST NOT be executed as active host instructions.

## Sprint 1 Boundary

Sprint 1 may adapt governance bodies and collect readiness evidence only where explicitly
authorized. It does not configure branch protection, tests, CI, or required checks. R1-T14
does not authorize any Git mutation, roster change, dispatch, application change, package
change, cleanup, or Sprint 2 work.

## Common Mistakes

- Treating policy text as permission to perform a Git action.
- Committing directly to protected `main`.
- Using a long-running or inherited framework branch convention instead of an authorized
  short-lived branch.
- Requiring a separate checkout directory when the host policy does not require one.
- Claiming missing tests, CI, protection, or pull-request checks passed.
- Cleaning repository state or deleting evidence without explicit authority.
- Assuming this adapted body is active despite an inactive or conflicting manifest.
