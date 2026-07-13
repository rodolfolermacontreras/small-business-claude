---
name: sdd-constitution
description: "Use when starting SDD work or evaluating architecture, scope, authority, lifecycle, Git, or quality policy for Small-Business-Claude. Enforces the host constitution without treating framework references as host implementation facts."
license: MIT
metadata:
   author: emf-framework
   version: '1.1'
---

# SDD Constitution

Loads and applies the Small-Business-Claude constitution with the active host instruction,
dated-owner-decision, task-scope, and lifecycle boundaries required for brownfield SDD.

## When to Use

Load this skill when:

- Starting any SDD workflow or reviewing an authorized task.
- Making or reviewing architecture, API-contract, data, security, or Git decisions.
- Validating specifications, plans, evidence, completion claims, or lifecycle state.
- Resolving a conflict between host guidance and copied framework material.

Do not use this skill as authority to mutate files, activate assets, dispatch workers, or
perform Git operations. Those actions require separate explicit authority.

## Authority Hierarchy

Apply sources in this order:

1. Platform and safety instructions.
2. Later dated Level 2 human-owner decisions within their explicit scope.
3. The ratified host constitution, except where a later Level 2 decision controls pending governed amendment.
4. `.github/copilot-instructions.md`, the active host instruction authority, where consistent with items 2-3.
5. Approved specifications, sprint tasks, briefings, and exact allowlists.
6. Rosters and manifests for lifecycle, compatibility, activation, and dependencies.
7. Skills, agents, archetypes, templates, examples, generated summaries, and history.

A lower source MUST NOT broaden scope, weaken an invariant, infer activation, or override a
later dated higher-authority decision. Preserve observed, approved, implemented, validated,
and deferred states as separate claims.

## Constitution Read Order

Read the current files before making a constitutional claim:

1. `spec-driven-development/constitution/mission.md`
2. `spec-driven-development/constitution/tech-stack.md`
3. `spec-driven-development/constitution/principles.md`
4. `spec-driven-development/constitution/roadmap.md`
5. `spec-driven-development/constitution/decision-policy.md`
6. `spec-driven-development/constitution/quality-policy.md`

Then cross-check applicable later dated owner decisions, the authorized task, host
instructions, and roster/manifest state. Do not mutate a constitution or authority file
unless the exact allowlist includes it.

## Host Identity and Stack Baseline

- Small-Business-Claude is a working local, single-user demo owned by Rodolfo Lerma, not a
   completed hosted SaaS product.
- The application uses Node.js `>=24` as owner-approved policy, JavaScript ES modules,
   Express 5, `@anthropic-ai/sdk`, `dotenv`, plain browser HTML/CSS/JavaScript, and built-in
   `node:sqlite` persistence.
- The demo has seven ready-to-run workflows and mock QuickBooks, PayPal, HubSpot, and
   inventory connector domains.
- Runtime compatibility is not mechanically validated; package metadata still differs.
- No host test runner, test script, linter, formatter, or CI is configured. Sprint 2 owns
   those mechanics only if separately authorized.
- Python under `spec-driven-development/cli/` is framework-process tooling. It is not the
   active host application stack and does not prove host readiness.

## Protected Host Invariants

- Send, post, pay, and order actions MUST remain drafts behind explicit owner approval in
   the outbox.
- Connector/tool contracts MUST remain stable unless separately specified and approved.
- Financial, inventory, and optimization calculations MUST remain deterministic and
   server-side; model output MAY explain but MUST NOT replace them.
- Secrets MUST remain in `.env` and MUST NOT be committed, logged, included in evidence,
   or exposed in browser output.
- Brownfield work MUST preserve existing conventions and exact task scope.
- Customer discovery MUST precede product backlog commitment or implementation for the
   future beachhead SaaS direction.

## Governing Git Policy

- `main` is the protected integration and production branch. Direct commits to `main`
   are prohibited.
- Every change must be developed on a short-lived branch scoped to authorized work.
- Changes may enter `main` only through a pull request after all required checks pass.
- The policy does not authorize staging, committing, pushing, pull-request operations,
   merging, rebasing, branch operations, or separate checkout-directory operations.
- Mechanical branch protection, host tests, CI, and required checks are deferred to
   Sprint 2. Compliance is procedural now, and an absent check is not a passing check.

## Lifecycle and Activation

Before treating an asset as active, verify its roster or manifest entry, lifecycle, host
scope, compatibility, activation state, dependencies, and gates.

- Missing lifecycle or activation metadata means **inactive by default**.
- Conflicting lifecycle, compatibility, or activation metadata means **inactive by
   default** until resolved by the designated owner or higher authority.
- File presence, body adaptation, dependency use, routing, or an active-sounding name does
   not grant activation, executability, or authority.
- Reference, example, template, framework-only, incompatible, unavailable, and pending
   assets remain non-executable unless separately authorized and activated.
- R1-T14 does not change any manifest or roster state. In particular, adapting
   `project-context` and `git-workflow` does not activate them.

## Active Guidance and Retained References

- Current host instructions, ratified constitution, applicable later dated owner
   decisions, authorized tasks, and compatible active roster entries are active guidance.
- Framework-process methods MAY remain active only within their declared process scope.
- Archetypes, templates, copied examples, historical evidence, and inactive or
   incompatible assets are reference-only unless explicitly adopted for this host.
- Reference material MAY retain non-host technology or historical terminology when it is
   visibly classified and does not prescribe host behavior. It MUST NOT be cited as host
   implementation, validation, or readiness evidence.

## Validation Process

1. Identify the proposed action, exact write set, exclusions, dependencies, and required
    owner or review gate.
2. Classify every source used as active host guidance, framework process, reference,
    historical evidence, or inactive lifecycle content.
3. Check mission, stack, principles, roadmap, decision level, quality policy, Git policy,
    lifecycle state, and protected invariants.
4. Confirm that no unavailable host control is represented as configured or passing.
5. If sources conflict, follow the authority hierarchy. If authority or lifecycle remains
    unresolved, stop and report **BLOCKED**; do not infer permission.

## Sprint 1 Boundary

Sprint 1 is limited to the authorized readiness baseline, governance alignment, body
adaptation, and evidence work. It does not authorize application/package changes, a test
framework, CI, activation, dispatch, cleanup, Git mutations, or Sprint 2 mechanics. All
completion claims MUST cite direct, scoped host evidence.

## Common Mistakes

- Treating the constitution as the only authority while ignoring a later scoped Level 2
   owner decision.
- Treating copied framework tests, examples, or generated state as host readiness proof.
- Assuming a corrected body is active without compatible activation metadata.
- Selecting a host test framework or claiming automated Git enforcement during Sprint 1.
- Weakening the approval outbox, connector contract, deterministic calculations, secrets,
   brownfield scope, or customer-discovery gate.
