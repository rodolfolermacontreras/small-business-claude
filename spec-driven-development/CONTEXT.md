# CONTEXT -- Shared Language for Small-Business-Claude

This file captures the shared vocabulary, assumptions, and conventions that all agents
must understand before working on Small-Business-Claude. It is the host project's active
living glossary, subordinate to dated Level 2 owner decisions and the ratified
constitution. SDD terms below describe the adopted development process; they do not
redefine the product.

Updated by `grill-with-docs` sessions and ADRs. Acts as a living glossary.

---

## Project Identity

- **Host project**: Small-Business-Claude, owned by Rodolfo Lerma.
- **Current implementation**: A local, single-user demonstration for one owner. It is a
  Node.js/Express application using ES modules, plain browser JavaScript, the Anthropic
  API, and local SQLite persistence for chat sessions and the approval outbox. It exposes
  seven ready-to-run workflows and four mock connector domains: QuickBooks, PayPal,
  HubSpot, and inventory.
- **Future product target**: A hosted SaaS product for real small-business owners. The
  approved beachhead direction is inventory-based businesses in El Paso, Texas, and
  Ciudad Juarez, Mexico, beginning with coffee shops and flooring, wall-material, and
  related building/interior-finish wholesalers. The target and beachhead are product
  direction, not evidence of implemented SaaS capabilities or committed feature scope.
- **Immediate product gate**: Customer discovery must validate the beachhead problem,
  first-customer profile, shared MVP jobs, source systems, language needs, and willingness
  to pay before product backlog commitment or implementation. Discovery has not passed.
- **Adopted process**: Spec-Driven Development (SDD) supplies governance, roles, lifecycle,
  and process assets under `.github/` and `spec-driven-development/`. It is not the product
  delivered to small-business customers.

### Current implementation inventory

- Seven workflows: invoice chasing, payroll planning, month close, business pulse,
  campaign planning, lead triage, and inventory optimization/reordering.
- Eight API routes: `GET /api/health`, `GET /api/config`, `GET /api/metrics`,
  `GET /api/outbox`, `GET /api/inventory`, `POST /api/outbox/:id/approve`,
  `POST /api/chat`, and `POST /api/reset`.
- Local SQLite stores chat sessions and approval-outbox items across restarts.
- Mock data covers QuickBooks, PayPal, HubSpot, and inventory connector domains.
- Node.js >= 24 is owner-approved runtime policy. Mechanical compatibility validation and
  package-metadata alignment are deferred to Sprint 2; no validation is claimed now.

### Product invariants

- Actions that would send, post, pay, or place an order remain drafts in the approval
  outbox until explicit owner approval.
- Live integrations may replace mocks later without silently changing the connector/tool
  contract.
- Financial, inventory, and optimization calculations remain deterministic server-side
  operations; model-generated prose does not replace calculated results.
- Secrets remain in `.env` only and are never committed, logged, or exposed client-side.

---

## SDD Framework Terms

| Term | Definition |
|------|------------|
| **SDD Framework** | The adopted agent definitions, skills, prompts, templates, constitution, and process documentation used to govern work on the host project |
| **Host Project** | Small-Business-Claude: the application and repository to which SDD has been adopted |
| **Current Demo** | The implemented local, single-user application; it is not the final hosted product |
| **Hosted SaaS Target** | The future multi-customer product direction; it is not a statement of current capability or backlog commitment |
| **Customer-Discovery Gate** | The evidence gate that must pass before product backlog commitment or implementation begins |
| **Orchestrator / Entry Point** | The Principal Executive Manager in its expanded role: the single human-facing entry point that captures kickoffs, routes ad-hoc questions, synthesizes answers, surfaces escalations, and holds the big picture on the human's behalf. See ADR-0004. |
| **Routing Memo** | The internal handoff format the Executive Manager uses to dispatch a question to the right Principal: original question, relevant state.md context, urgency, and the explicit ask "answer at engineering depth; I will translate to executive register." |
| **Executive Register** | The communication style the Executive Manager uses when speaking to the human: TL;DR + detail in plain language + implication for timeline/scope/risk + recommended next action. No jargon. |
| **PI** | Program Increment -- a planning horizon containing 5 sprints (symbolic; AI fleet compresses wall-clock time) |
| **Sprint** | A development cycle within a PI (symbolic cadence -- not a fixed calendar duration) |
| **Spec** | A formal feature specification document in `specs/YYYY-MM-DD-feature-name/spec.md` |
| **Feature Directory** | A per-feature directory under `specs/YYYY-MM-DD-feature-name/` that co-locates `spec.md`, `plan.md`, `tasks.md`, `validation.md`, `clarification-log.md`, and optional `research.md`. |
| **Plan** | Implementation plan co-authored by Architect and SW Dev, lives next to the spec |
| **Task** | An atomic unit of work (1-3 files max) derived from a plan, tagged with [P]/[S]/[AFK]/[HITL] |
| **Gate** | A formal checkpoint between lifecycle phases requiring approval before proceeding |
| **AFK** | Away From Keyboard -- a task safe for fully autonomous agent execution |
| **HITL** | Human In The Loop -- a task that requires a human decision before completion |
| **[P]** | Parallelizable task tag -- safe for fleet dispatch alongside other [P] tasks |
| **[S]** | Sequential task tag -- must be executed alone or in order |
| **Fleet** | The pool of generic worker agents available for parallel dispatch |
| **Dispatch** | A single assignment of one task to one worker agent, recorded in the ledger |
| **Worker** | A generic agent (Developer, UX Designer, Data Scientist, QA Engineer) |
| **Principal** | A senior agent role with decision authority (Executive Manager, Product Manager, Architect, Software Developer). A fifth role -- the Sprint Executive Manager, a sprint-scoped delegate of the Executive Manager (ADR-020, two-tier EM) -- coordinates a single sprint. |
| **Skill** | A composable, single-purpose `SKILL.md` file under `.github/skills/` that an agent loads on demand |
| **Skill Pack** | A bundle of skills granted to a worker that earns specialization in a domain |
| **Specialization** | The mechanic by which a generic worker earns a permanent identity through demonstrated competence |
| **Two-Stage Review** | The mandatory review order: spec compliance FIRST, code quality SECOND, by different reviewers |
| **Two-Folder Split** | The architectural rule that `.github/` holds Copilot-native files (agents, skills, prompts, instructions) and `spec-driven-development/` holds everything else |
| **Constitution** | The six ratified governance files in `spec-driven-development/constitution/` that define mission, principles, tech stack, roadmap, decision policy, and quality policy; later dated Level 2 owner decisions control conflicts pending governed amendment |
| **Ledger** | `spec-driven-development/ledger/fleet.db` -- the SQLite source of truth for all fleet dispatches, agent records, decisions, and skill assignments |
| **Worktree** | A git worktree at `../wt-{shortname}` providing parallel branch isolation for fleet workers |
| **Curated Briefing** | The < 2KB executive summary in `exec/state.md` -- the only artifact the Executive Manager reads |
| **RICE** | Reach, Impact, Confidence, Effort -- the scoring rubric used in `/triage` and the backlog |

---

## Lifecycle Shorthand

```
IDEA -> BACKLOG -> CLARIFY -> SPEC -> PLAN -> TASKS -> IMPLEMENT -> REVIEW -> DONE
```

- `/triage` -- groom an idea, RICE score, assign priority
- `/clarify` -- structured clarification session (one question at a time, with recommendation)
- `/spec` -- generate a feature spec from clarified requirements
- `/plan` -- generate an implementation plan from an approved spec
- `/tasks` -- decompose a plan into tagged, batched tasks
- `/analyze` -- cross-artifact consistency check (spec vs plan vs tasks)
- `/fleet` -- parallel dispatch of [P][AFK] tasks to workers
- `/implement` -- execute a single task (TDD: test first, then implement)
- `/qa` -- validate implementation against spec
- `/retro` -- sprint retrospective
- `/state` -- refresh and present `exec/state.md`

Spec sizing rule (prevents ceremony bloat):

| Change Size | Process |
|-------------|---------|
| Bug fix, < 3 files | No spec. Task + test + review. |
| Feature, < 5 files | Lightweight spec: user story + requirements + success criteria only |
| Feature, >= 5 files | Full spec with all sections |
| Cross-cutting or schema change | Full spec + ADR + human approval |

---

## Agent Roles at a Glance

| Role | Type | Responsibility |
|------|------|----------------|
| **Principal Executive Manager** | Principal | **Single human-facing entry point.** Owns kickoff, ad-hoc Q&A routing with answer synthesis, status, escalation, big-picture awareness. Reads `exec/state.md` by default; may read raw artifacts to answer routed questions; never modifies any artifact except (optionally) `state.md`. Output to the human is always at executive register. |
| Principal Product Manager | Principal | Backlog ownership, RICE scoring, acceptance criteria, sprint and PI planning |
| Principal Architect | Principal | Specs, plans, ADRs, architectural quality, pattern enforcement |
| Principal Software Developer | Principal | Task decomposition, fleet dispatch, code review, integration |
| Sprint Executive Manager | Principal (sprint-scoped) | Delegated entry point for ONE sprint (ADR-020, two-tier EM). Routes the sprint's feature work across the Principals, synthesizes answers, surfaces escalations, and reports up to the project Executive Manager at sprint close. Makes no product, technical, or implementation decisions itself. |
| Developer (generic) | Worker | Implements tasks; specializes on demand via skill packs |
| UX Designer (generic) | Worker | Designs flows, wireframes, accessibility checks |
| QA Engineer (generic) | Worker | Writes and reviews tests, runs validation against specs |
| Data Scientist (generic) | Worker | Analysis, metrics, evaluation tasks |

New worker roles are created when first needed (not anticipated up front).

---

## Architecture Decisions

Populated by `grill-with-docs` sessions and ADRs in `spec-driven-development/docs/ADR/`.

Three ADRs exist at framework v0.1:
- ADR-0001 -- Two-folder split (`.github/` vs `spec-driven-development/`)
- ADR-0002 -- Two-stage review order (spec compliance before code quality)
- ADR-0003 -- Symbolic cadence (PI/Sprint as ceremony rhythm, not wall-clock duration)

---

## Assumptions

Populated during clarification phases. Each assumption is recorded with its source
(human answer, deferred, or unresolved) in `clarification-log.md` per feature.

Current host/process assumptions:

- The host project uses VS Code with the GitHub Copilot extension
- The host project uses git for version control
- The human developer holds final approval authority on all Level 1 and Level 2 decisions
- AI agents have access to a sufficiently capable LLM (frontier-class or comparable)
- The host context is read by agents via session-start instructions (`copilot-instructions.md`)
- Hosted SaaS scope remains uncommitted until the customer-discovery gate is satisfied

---

## Conventions Reference

- Architectural articles: `spec-driven-development/constitution/principles.md`
- Coding and session conventions: `.github/copilot-instructions.md`
- Decision authority: `spec-driven-development/constitution/decision-policy.md`
- Quality standards: `spec-driven-development/constitution/quality-policy.md`
- Portability and bootstrap: `spec-driven-development/GENERALIZATION_SDD.md`
- Definitive plan: `spec-driven-development/docs/FINAL_MERGED_PLAN.md`
