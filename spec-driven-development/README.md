# Small-Business-Claude Spec-Driven Development Host

Small-Business-Claude is a working local, single-user Node.js/Express/plain-JavaScript demo. It uses the Anthropic API, built-in SQLite persistence, seven ready-to-run workflows, eight API routes, mock QuickBooks, PayPal, HubSpot, and inventory connector domains, and an approval outbox for owner-controlled actions.

The future direction is a hosted SaaS product for small-business owners, but that product is not built. Customer discovery remains incomplete. Before backlog commitment or product implementation, validate the beachhead problem, first-customer profile, shared MVP jobs, source systems, language needs, and willingness to pay.

This directory contains the host's adopted Spec-Driven Development process and governance assets. References copied with the framework are not executable merely because they exist.

---

## Host Application

- Runtime policy: Node.js `>=24`. This is policy only, not a completed compatibility claim.
- Server: Express 5 with the existing Anthropic agent path.
- Browser: plain HTML, CSS, and JavaScript with no build step.
- Persistence: built-in `node:sqlite` for chat sessions and approval-outbox drafts.
- Workflows: seven ready-to-run workflow prompts.
- Routes: `GET /api/health`, `GET /api/config`, `POST /api/chat`, `GET /api/metrics`, `GET /api/outbox`, `GET /api/inventory`, `POST /api/outbox/:id/approve`, and `POST /api/reset`.
- Connector domains: mock QuickBooks, PayPal, HubSpot, and inventory.

## Protected Product Invariants

Send, post, pay, and order actions remain drafts in the approval outbox until explicit owner approval.

Connector implementations must not silently change the connector/tool contract.

Financial, inventory, and optimization calculations remain deterministic server-side operations; the model may explain results but must not invent or replace calculations.

Secrets remain in `.env` only and must never enter Git, logs, evidence, or browser output.

---

## SDD Lifecycle

The intended lifecycle is:

`IDEA -> BACKLOG -> CLARIFY -> SPEC -> PLAN -> TASKS -> IMPLEMENT -> REVIEW -> DONE`

The framework wraps the brownfield host; it does not replace current host instructions, dated owner decisions, or the ratified constitution. Gates and mechanics are usable only when they are configured, applicable, authorized, and actually available.

---

## Active Prompt Guidance

Exactly 15 prompts are active framework-process guidance:

1. `analyze`
2. `ask`
3. `clarify`
4. `constitution`
5. `evolve`
6. `fleet`
7. `grill`
8. `implement`
9. `plan`
10. `qa`
11. `replan`
12. `retro`
13. `spec`
14. `state`
15. `tasks`

The `hire`, `triage`, and `taskstoissues` prompts are unavailable `reference/example` hard stops. They do not authorize hiring, prioritization, backlog commitment, external issue mirroring, activation, dispatch, or mutation.

---

## Active Instructions

Two path-scoped instructions are active framework-process guidance:

1. `.github/instructions/fleet-workers.instructions.md`
2. `.github/instructions/sdd-workflow.instructions.md`

---

## Authority and Git

- `main` is protected, and direct commits to `main` are forbidden.
- Authorized changes use short-lived branches and enter `main` through a pull request after required checks pass.
- A worktree is optional and requires separate authorization; it is not a default prerequisite.
- Policy does not prove automated branch protection or required-check enforcement and does not authorize branch creation, switching, staging, committing, pushing, rebasing, merging, or pull-request creation.

---

## Current Validation Limits

The host application has no configured test runner, test script, CI, or automated branch-protection enforcement. Required checks are policy expectations, not currently verified automation. Runtime compatibility validation, package metadata alignment, ledger/work-index verification, host-aware state/doctor mechanics, and clean-clone rehearsal are deferred or unconfigured as applicable.

Only checks that are configured, applicable, authorized, and actually run may be reported as results. An unavailable mechanic never receives a `PASS` result. Framework dispatch, ledger, work-index, and state-builder references do not prove those mechanics are implemented or ready for this host.

Generated executive state is advisory unless its source commit and freshness are verified. State output does not authorize mutation.

---

## Directory Guide

| Path | Purpose |
|---|---|
| `constitution/` | Ratified host process policy, subordinate to later dated Level 2 owner decisions where they conflict |
| `backlog/` | Idea and backlog records, subject to the incomplete discovery gate |
| `specs/` | Clarification, specification, planning, task, and review artifacts |
| `sprints/` | Sprint planning and evidence packages |
| `exec/` | Owner decisions, briefings, progress evidence, and advisory generated state |
| `templates/` | Reference templates selected only by an active authorized process |
| `docs/` | Framework reference and historical material unless separately promoted |
| `cli/`, `ledger/`, `roster/`, `fleet/` | Adopted framework surfaces whose presence does not establish host-valid execution readiness |

---

## Discovery Gate

The approved beachhead direction is inventory-based businesses in El Paso, Texas, and Ciudad Juarez, Mexico, beginning with coffee shops and flooring, wall-material, and related building/interior-finish wholesalers. This is a direction to validate, not a committed product scope. Discovery must establish the problem, customer, shared jobs, systems, language requirements, and willingness to pay before downstream product commitment.
