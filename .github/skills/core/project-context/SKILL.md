---
name: project-context
description: "Use when starting host work, interpreting project terminology, or checking whether guidance applies to Small-Business-Claude. Separates active host facts from framework references and lifecycle-gated assets."
license: MIT
metadata:
   author: emf-framework
   version: '1.1'
---

# Project Context

Provides the current Small-Business-Claude identity, architecture, authority boundaries,
and vocabulary rules. This body is host-adapted guidance, but body adaptation alone does
not activate this skill or change any roster entry.

## Host Identity and Product State

- **Host:** Small-Business-Claude, owned by Rodolfo Lerma.
- **Current implementation:** a working local, single-user demo on the owner's machine.
- **Future direction:** hosted SaaS for inventory-based small businesses in El Paso,
   Texas, and Ciudad Juarez, Mexico, beginning with coffee shops and building/interior-
   finish wholesalers.
- **Immediate gate:** customer discovery must validate the beachhead problem, customer
   profile, shared MVP jobs, source systems, language needs, and willingness to pay before
   product backlog commitment or implementation. The future direction is not implemented.

## Active Host Stack

- Node.js `>=24` is owner-approved policy; mechanical compatibility validation and
   package-metadata alignment are deferred to Sprint 2.
- JavaScript ES modules with no build step.
- Express 5 server, `@anthropic-ai/sdk`, and `dotenv` configuration.
- Plain HTML, CSS, and JavaScript under `public/`.
- Built-in `node:sqlite` persistence for chat sessions and the approval outbox.
- Mock QuickBooks, PayPal, HubSpot, and inventory connector domains.
- No host test runner, test script, linter, formatter, or CI is configured. Framework-
   process tooling under `spec-driven-development/` is not host-application validation.

## Protected Application Invariants

- Send, post, pay, and order actions MUST remain drafts in the approval outbox until the
   owner explicitly approves them.
- Connector implementations MAY change only when the connector/tool contract remains
   stable, unless a separate approved specification changes that contract.
- Financial, inventory, and optimization calculations MUST remain deterministic
   server-side operations. The model MAY explain results but MUST NOT invent or replace
   calculations.
- `ANTHROPIC_API_KEY` and connector secrets MUST remain in `.env`; they MUST NOT be
   committed, logged, placed in evidence, or exposed to the browser.
- Brownfield work MUST preserve existing conventions and exact authorized scope.

## Authority Hierarchy

Apply authority in this order:

1. Platform and safety instructions.
2. `.github/copilot-instructions.md`, the active host instruction authority.
3. Later dated Level 2 human-owner decisions within their explicit scope.
4. The ratified host constitution, except where a later Level 2 decision controls pending
    governed amendment.
5. Authorized sprint specifications, task allowlists, and briefings.
6. Rosters and manifests for lifecycle, compatibility, and activation state.
7. Skill, agent, archetype, template, example, and historical text.

Lower authority MUST NOT broaden a write set, activate an asset, override a later dated
decision, or turn reference material into host policy.

## Governing Git Policy

- `main` is the protected integration and production branch. Direct commits to `main`
   are prohibited.
- Every change must be developed on a short-lived branch scoped to authorized work.
- Changes may enter `main` only through a pull request after all required checks pass.
- Git actions still require explicit task and owner authority. The policy does not itself
   authorize staging, committing, pushing, opening or merging a pull request, rebasing,
   branch operations, or separate checkout-directory operations.
- Branch protection, host checks, and CI are not yet mechanically configured; those
   controls are deferred to Sprint 2. Until then, compliance is procedural and absence of
   a configured check is not a passing result.

## Lifecycle and Activation Rule

Before using any agent, skill, pack, or template as active guidance, read its applicable
roster or manifest entry. It is usable only when lifecycle, host scope, compatibility,
activation state, dependencies, and required gates all affirm host use.

- Missing lifecycle or activation metadata means **inactive by default**.
- Conflicting metadata means **inactive by default** until the higher-authority source or
   designated owner resolves the conflict.
- File presence, a host-adapted body, an active-sounding description, dependency use, or
   owner routing does not imply activation or executability.
- Reference, example, template, framework-only, incompatible, unavailable, or pending-
   adaptation assets remain non-executable unless separately activated under authority.
- R1-T14 changes only this skill body. It MUST NOT change roster state or imply that
   `project-context` or `git-workflow` is active.

## Active Guidance Versus Reference Material

- Host instructions, current constitution, dated owner decisions, authorized task scope,
   and compatible active roster entries are active guidance.
- `spec-driven-development/archetypes/`, templates, examples, historical records, and
   incompatible or inactive skill bodies are reference material only unless adopted by an
   authorized host decision.
- Python files under `spec-driven-development/cli/` are framework-process utilities, not
   the host application stack and not evidence that the Node.js application is tested.
- Historical terminology MAY be retained as evidence when visibly labeled historical or
   reference-only; it MUST NOT be copied into active host prescriptions.

## Context Process

1. Read `.github/copilot-instructions.md`, the constitution, applicable later dated owner
    decisions, authorized task, and relevant roster entries.
2. Read `spec-driven-development/CONTEXT.md` for shared vocabulary, but verify every
    operational statement against the authority hierarchy.
3. Classify each source statement as active host guidance, framework process, reference
    example, historical evidence, or inactive lifecycle content.
4. When a term is missing or ambiguous, report the gap. Update no vocabulary or policy
    file without an explicit allowlist that includes it.
5. Preserve observed, approved, implemented, validated, and deferred states as distinct.

## Sprint 1 Boundary

Sprint 1 is readiness-baseline and host-adaptation work only. It does not authorize
application, package, test, CI, activation, dispatch, cleanup, or Sprint 2 work. Report
unavailable host mechanics honestly and cite direct host evidence for completion claims.

## Common Mistakes

- Treating copied framework or archetype content as active host policy.
- Treating body adaptation or file presence as roster activation.
- Using framework-process Python as evidence of the host stack or host test readiness.
- Claiming the future SaaS direction or customer discovery is complete.
- Weakening the outbox, connector, deterministic-calculation, or secret boundary.
- Performing Git actions because the Git policy describes them without task authority.
