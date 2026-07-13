---
id: PI-1-S1-SPEC
type: specification
status: proposed-blocked
owner: principal-architect
created: 2026-07-10
updated: 2026-07-10
sprint: PI-1 Sprint 1
plan: PI-1-S1-PLAN
approval: pending-owner-level-2
---

# PI-1 Sprint 1: Operational Readiness Baseline Specification

## 1. Status and Binding Boundary

**Status: PROPOSED — BLOCKED ON LEVEL 2 OWNER APPROVAL**

This specification defines the operational-readiness baseline described by `PLAN.md`. It does not approve the pending policy bundle, activate the sprint, authorize cleanup, authorize implementation, or establish a commit. The owner's 2026-07-10 instruction authorizes completion of the planning-only Sprint Executive Manager handoff package before approval.

The permitted pre-gate package consists of the PM plan, board, onboarding, kickoff, and report template; this Architect specification; the Principal Software Developer task plan; and sprint-progress tracking. These artifacts do not authorize execution. No application code, framework code, destructive cleanup, governed amendment, worker dispatch, Git history, or runtime behavior may be changed before the start gate in section 11 passes.

## 2. Problem Statement

Brownfield SDD assets have been copied into a working Node.js application, but the repository does not yet have a clean, reproducible, internally consistent operating baseline. Current sources disagree about product identity, Git workflow, runtime support, persistence status, workflow and endpoint inventory, active agent/skill validity, and readiness blockers. Most adopted SDD assets remain untracked, temporary onboarding artifacts remain present, and copied execution guidance describes a different Python/FastAPI host. Without an approved baseline, an operator or agent could apply stale guidance, lose onboarding evidence, run an incompatible workflow, or claim readiness that has not been mechanically validated.

Sprint 1 therefore specifies governance and documentation outcomes only. Sprint 2, if separately planned and authorized, will implement and validate the mechanical readiness checks.

## 3. Context and Evidence Baseline

### 3.1 Read-only Git observation

Observed on 2026-07-10 while authoring this specification:

| Evidence | Observation |
|---|---|
| Branch | `main`, tracking `origin/main` |
| Exact HEAD | `eff0b2de590ca49c66f55c8b92fe211b9da77389` |
| HEAD subject | `PM: define inventory-business SaaS beachhead and validation gate` |
| Recent history | Ten commits inspected; SQLite landed at `8008c02`; product direction commits are `ca8adf4` and `eff0b2d` |
| Tracked changes | One: tracked root `AGENT_ONBOARDING.md` is deleted in the working tree |
| Untracked status entries | 24 top-level status entries, including `.github/`, `project.config.json`, and most `spec-driven-development/` assets |
| Temporary artifacts | `.sdd-archaeology.json`, `.sdd-proposal/`, and file `CON` are present and untracked |
| Adopted SDD tracking | The queried adopted SDD surfaces are not yet represented by an approved baseline commit |
| Work index | `spec-driven-development/exec/work-index.md` is absent |

These observations describe the authoring machine only. They are not the approved reproducible baseline required at Sprint 1 close.

### 3.2 Current application evidence

| Area | Current evidence |
|---|---|
| Runtime and server | ES-module JavaScript, Express 5, `@anthropic-ai/sdk`, dotenv; `package.json` declares Node.js `>=18` |
| Persistence | `server/db.js` uses built-in `node:sqlite` `DatabaseSync` for sessions and outbox; commit `8008c02` records the implementation |
| Front end | Plain HTML/CSS/JavaScript under `public/`; no build step |
| Workflows | Seven workflow definitions, including inventory optimization |
| Connector surface | Mock QuickBooks, PayPal, HubSpot, and Inventory/Warehouse data paths |
| HTTP inventory | Eight routes: `GET /api/health`, `GET /api/config`, `GET /api/metrics`, `GET /api/outbox`, `GET /api/inventory`, `POST /api/outbox/:id/approve`, `POST /api/chat`, and `POST /api/reset` |
| Protected safety behavior | Send/post/pay/order-like actions remain drafts in the approval outbox; approval marks state but does not authorize Sprint 1 behavior changes |
| Tests and CI | No `npm test` script and no host CI are configured |

### 3.3 SDD host-validity evidence

- Fourteen agent files are present under `.github/agents/`, while `spec-driven-development/roster/agents.json` lists twelve entries. The Sprint Executive Manager and worker template are not rostered.
- Thirty-five skill files are present under `.github/skills/`; `spec-driven-development/roster/skills.json` lists thirty-four entries. `pre-work-check` exists but is not registered and depends on an absent work index.
- Existing `frontend`, `backend`, `full-stack`, and `review` packs activate Python/FastAPI/pytest/HTMX guidance. Only the planning pack is broadly stack-neutral, and even stack-neutral assets can contain non-normative copied examples.
- Active-looking agent files prescribe Python 3.12, `.venv`, FastAPI, Pydantic, SQLModel, Day-to-Day `agent/` paths, pytest fixtures, `master`/`integration-improvements`, or mandatory worktrees. Those prescriptions are not valid application guidance for this host.
- Some copied assets are explicitly examples or framework-maintenance capabilities; others lack lifecycle metadata, so presence or roster membership cannot safely imply host activation.

### 3.4 Audit finding baseline

The authoritative 2026-07-10 project-EM handoff identifies the following unresolved findings:

- dirty and non-reproducible Git baseline;
- unresolved root onboarding-file deletion;
- temporary onboarding artifacts still present;
- framework identity retained in `spec-driven-development/CONTEXT.md`;
- copied agent, skill, roster, Git, and worktree assumptions that do not match the host;
- no approved single Git policy;
- no `npm test`, automated health smoke test, or host CI;
- no confirmed supported Node minimum;
- state-builder/doctor assumptions not host-aware;
- ledger/work-index readiness not verified; and
- stale documentation despite implemented SQLite persistence, seven workflows, and eight current endpoints.

`exec/state.md` says blockers are `_None_`; this is stale and MUST NOT override the audit handoff or live repository evidence.

## 4. Authoritative-Source Hierarchy

Until governed reconciliation is complete, the following precedence applies to this sprint:

1. **Dated Level 2 owner decisions recorded through the project Executive Manager.**
2. **Live implementation and Git evidence** for statements about what exists now: tracked repository files, exact commits, `package.json`, `server/`, and `public/`.
3. **Current product-direction records:** `docs/PRODUCT_ROADMAP.md` and the dated product-direction section of `spec-driven-development/exec/state.md`.
4. **The project-EM audit handoff** at `spec-driven-development/exec/briefings/PROJECT-EM-HANDOFF-2026-07-10.md` for unresolved onboarding findings.
5. **Ratified host constitution and `.github/copilot-instructions.md`**, except where a higher source proves them stale or where an owner-approved amendment is pending.
6. **Approved Sprint 1 artifacts:** `PLAN.md`, this `SPEC.md`, future `TASKS.md`, `BOARD.md`, and the report-up artifact. Scope is governed by `PLAN.md`; this specification may clarify but MUST NOT broaden it.
7. **Host-classified active agents, skills, and roster manifests** after their Sprint 1 reconciliation.
8. **Copied framework, archetype, historical, example, reference, proposal, and archival assets.** These may provide evidence but MUST NOT prescribe host execution unless explicitly activated.
9. **Generated state and dashboards.** They are advisory unless their freshness, host awareness, and source commit are verified.

Equal-authority conflicts MUST block the affected work and be escalated. Lower-authority prose MUST NOT override live implementation facts. Live implementation evidence establishes current state, not desired policy.

## 5. Three-Layer Product Identity

All active authoritative guidance produced by this sprint MUST preserve these distinct layers:

### 5.1 Current implementation

A working, single-user local demo using Node.js, Express, plain browser JavaScript, the Anthropic SDK, mock business connectors, local SQLite persistence, seven workflows, eight API routes, and a human approval outbox.

### 5.2 Hosted SaaS target

A future hosted SaaS for real small-business owners. The initial direction is inventory-based businesses in El Paso, Texas, and Ciudad Juárez, Mexico, beginning with coffee shops and flooring, wall-material, and related building/interior-finish wholesalers. This is a target, not an implemented state or committed feature set.

### 5.3 Immediate customer-discovery gate

Before product backlog commitment or implementation, customer discovery must validate the beachhead problem, first-customer profile, shared MVP jobs, source systems, language needs, and willingness to pay. Sprint 1 records this gate but does not execute discovery, score evidence, select connectors, or claim validation.

## 6. Goals

This specification preserves the six committed outcomes in `PLAN.md`:

1. Define and enforce the Level 2 owner decision and sprint activation boundary.
2. Establish the contract for an evidence-preserving, reproducible Git baseline.
3. Reconcile active authoritative product identity using the three-layer model.
4. Reconcile active Git guidance to one owner-approved policy.
5. Establish a host-valid active agent, skill, and roster set while preserving copied reference evidence safely.
6. Publish a bounded Sprint 2 exit contract without implementing or validating Sprint 2 mechanics.

## 7. Non-Goals

Sprint 1 MUST NOT include:

- application features, bug fixes, application refactors, or framework-code changes;
- authentication, tenancy, live connectors, billing, cloud deployment, or other SaaS implementation;
- customer interviews, discovery conclusions, RICE scoring, connector selection, pricing, or backlog commitment;
- test-runner selection or installation, `npm test`, smoke-test implementation, CI implementation, linting, type checking, or build tooling;
- Node compatibility work or a claim that any minimum version has passed validation;
- state-builder, doctor, ledger, work-index, or clean-clone implementation or final verification;
- API contract, database schema, connector interface, approval behavior, or customer-facing UI changes;
- new dependencies;
- global backlog edits;
- silent constitution amendments;
- `TASKS.md` creation by the Architect;
- commit, push, merge, cleanup, deletion, or worker dispatch before the owner gate; or
- changes to the separate Evolving Multi-Agent Framework repository.

## 8. Requirements

### 8.1 Governance and activation

**RB-001 — Planning-only pre-gate allowance.** Before a dated Level 2 decision, the repository MAY receive the complete Sprint Executive Manager handoff package explicitly requested by the owner: PM plan, board, onboarding, kickoff, and report template; this Principal-Architect-owned `SPEC.md`; the Principal Software Developer-owned `TASKS.md`; and sprint-progress tracking. These artifacts MUST remain planning-only and MUST NOT authorize or begin execution. All implementation, destructive cleanup, governed amendments, worker dispatch, commit, push, merge, and other repository mutation MUST remain blocked pending both the complete dated Level 2 decision in RB-002 and explicit Sprint 1 start authorization.

**RB-002 — Complete Level 2 decision record.** The project Executive Manager MUST record a dated approve, reject, or amend disposition for each of the following five items and MUST record whether Sprint 1 is authorized to start:

1. Git policy;
2. Node runtime contract;
3. governed three-layer product identity reconciliation;
4. root `AGENT_ONBOARDING.md` disposition; and
5. `.sdd-archaeology.json`, `.sdd-proposal/`, and `CON` disposition after evidence preservation.

A partial, ambiguous, inferred, or undated record MUST NOT satisfy this requirement.

**RB-003 — Amendment re-baseline.** If the owner rejects or amends any policy-bundle item, the Product Manager MUST reconcile the affected `PLAN.md`, `BOARD.md`, and acceptance boundary before `TASKS.md` or execution. The Architect MUST re-review this specification if the approved choice changes any requirement or acceptance criterion.

### 8.2 Reproducible Git baseline and artifact disposition

**RB-004 — Evidence-preserving baseline record.** After approval, Sprint 1 MUST produce a baseline record containing the starting exact SHA, approved ending exact SHA, branch, remote relationship, before/after porcelain status, retained-asset manifest, removed-asset manifest, decision references, and clone-independent reproduction steps. A clean working tree alone MUST NOT be accepted as reproducibility evidence.

**RB-005 — Root onboarding-file disposition.** The tracked deletion of root `AGENT_ONBOARDING.md` MUST remain unresolved until the owner records a disposition. The recommended disposition is to preserve relevant historical evidence and approve deletion of the stale root copy in favor of a reconciled `docs/AGENT_ONBOARDING.md`. If rejected or amended, the baseline manifest MUST identify which onboarding file is authoritative and prevent two active conflicting copies.

**RB-006 — Temporary onboarding-artifact disposition.** `.sdd-archaeology.json`, `.sdd-proposal/`, and the reserved Windows filename `CON` MUST be inventoried before any removal. The approved baseline MUST either:

- preserve required evidence in a normal, tracked, documented location and remove the originals; or
- retain an original with an explicit purpose, lifecycle, and authority classification.

The recommended disposition is removal after evidence preservation. Destructive cleanup MUST stop if evidence provenance or file accessibility cannot be demonstrated.

**RB-007 — `project.config.json` disposition.** `project.config.json` MUST be included in the adopted baseline as the host identity record, provided its owner, team, and repository URL are verified and it contains no secret. Its authority and relationship to higher-level owner decisions MUST be documented.

**RB-008 — Adopted SDD asset manifest.** The approved baseline MUST account for every retained `.github/` and `spec-driven-development/` adoption surface by path or deterministic category. Each retained asset MUST be classified as active host guidance, active framework-process guidance, proposed, reference/example, archival/historical, generated, or runtime data. Untracked presence MUST NOT count as adoption.

### 8.3 Product identity and stale documentation

**RB-009 — Three-layer identity reconciliation.** Active authoritative guidance MUST state the current implementation, hosted SaaS target, and immediate customer-discovery gate as separate facts. It MUST NOT describe the local demo as the long-term product goal, describe the SaaS target as built or committed, or describe customer validation as complete.

**RB-010 — Host context reconciliation.** `spec-driven-development/CONTEXT.md` MUST cease presenting the Evolving Multi-Agent Framework as this project's identity. Any framework vocabulary retained in that file MUST be subordinate to Small-Business-Claude host identity and MUST be labeled as process vocabulary rather than product architecture.

**RB-011 — Current implementation facts.** Active operational documentation MUST be reconciled to the verified implementation baseline:

- SQLite persistence for sessions and the approval outbox is implemented;
- the application has seven workflows, not six;
- the route inventory contains the eight routes listed in section 3.2; and
- current local-demo facts are distinct from future hosted-SaaS direction.

Historical task briefs and immutable evidence MAY retain time-accurate pre-implementation statements if clearly historical. Active onboarding, README, status, roadmap, instructions, and governed host guidance MUST NOT present stale facts as current.

**RB-012 — PM artifact inconsistency record.** Sprint 1 MUST explicitly reconcile these planning inconsistencies rather than silently choosing one version:

- `PLAN.md` and `BOARD.md` say no specification may start before owner approval, while the owner directly requested this specification before approving the policy bundle;
- `exec/state.md` says no blockers and no active sprint, while audit and sprint artifacts show a proposed blocked sprint;
- `PLAN.md` uses D1-D7 and AO-01-AO-08, while `BOARD.md` uses R1-R8;
- kickoff/onboarding expect a Sprint Executive Manager that is not rostered and references a nonexistent `exec/sprint-progress.md` contract;
- `pre-work-check` requires an absent `exec/work-index.md`; and
- roster statuses conflict with some agent files' draft or framework-only identity.

The narrow resolution for the first inconsistency is RB-001: completing the planning-only Sprint Executive Manager handoff package, including `SPEC.md` and the Principal Software Developer-owned `TASKS.md`, is allowed; activation and execution remain blocked. Other inconsistencies MUST be resolved within approved Sprint 1 documentation/metadata scope or carried explicitly into the Sprint 2 contract when mechanical tooling is required.

### 8.4 Git policy and runtime contract

**RB-013 — Single Git policy reconciliation.** Active host instructions, constitution/governance, agents, skills, onboarding, and execution guidance MUST expose one owner-approved Git policy. Until the owner decides, the selected policy is **PENDING**. The Architect recommends protected `main`, short-lived branches, and required PR checks. Direct-to-`main`, `master`/`integration-improvements`, and mandatory-worktree instructions MUST NOT coexist as active host policy after reconciliation. Historical/reference examples MAY remain only when visibly inactive.

**RB-014 — Node runtime contract.** The supported Node runtime contract is **PENDING OWNER APPROVAL**. The Architect recommends Node.js `>=24` because current persistence uses `node:sqlite` and the observed workstation uses Node.js `v24.13.1`. Sprint 1 MUST document the approved contract consistently but MUST NOT change `package.json`, install a runtime, implement tests, or claim compatibility. Mechanical minimum-version validation and any resulting implementation change belong to Sprint 2.

### 8.5 Active agents, skills, roster, and packs

**RB-015 — Default-safe activation model.** An agent, skill, or skill pack MUST be executable host guidance only when an authoritative manifest explicitly classifies it as active for `small-business-claude`. Missing, conflicting, or unverifiable lifecycle metadata MUST default to reference/inactive, not active. Classification MUST preserve provenance and MUST NOT delete copied evidence merely to hide a mismatch.

**RB-016 — Host-valid active guidance.** Every asset classified as active for host application execution MUST be valid for Node.js, Express, ES-module JavaScript, the Anthropic SDK and tool-use loop, built-in `node:sqlite`, plain browser HTML/CSS/JavaScript, current connector boundaries, and the approval-outbox invariant. Active guidance MUST NOT prescribe Python application runtime, FastAPI, Pydantic, SQLModel, SQLAlchemy, pytest, HTMX, Jinja2, `agent/` module paths, GitHub Models, or Day-to-Day-specific fixtures and files as host requirements.

**RB-017 — Safe reference and framework scope.** Copied assets that remain useful only as examples, historical records, archetype references, SDD CLI maintenance guidance, framework-host integration capabilities, or conditional future roles MUST be marked reference, archival, or framework-scope. They MUST NOT appear in host execution packs or automatic host activation lists. Framework CLI use of Python MUST be distinguished from the Node application runtime and MUST NOT redefine the host stack.

**RB-018 — Inventory and pack consistency.** The reconciled manifests MUST account for the observed file/roster count mismatches, the unregistered `pre-work-check`, the unrostered Sprint Executive Manager, the worker template, and all current skill packs. An active pack MUST contain only active compatible skills. Existing Python/FastAPI/pytest/HTMX packs MUST be inactive or replaced by host-valid pack definitions before host dispatch. Creating application code or choosing a JavaScript test framework is outside Sprint 1.

**RB-019 — Protected host behavior in guidance.** Every active execution asset that can affect application work MUST preserve these invariants:

- no send, post, pay, or order action bypasses the approval outbox;
- connectors retain their current contract unless separately specified and approved;
- business calculations remain deterministic and server-side rather than fabricated by the model;
- secrets remain in environment configuration and are never printed or committed; and
- Sprint 1 changes no customer-facing behavior, API response contract, database schema, connector behavior, or approval behavior.

### 8.6 Sprint 2 exit contract

**RB-020 — Sprint 2 bounded entry contract.** Sprint 1 MUST publish a handoff that reserves the following work for a separately approved Sprint 2:

1. define and implement `npm test` without assuming a framework before approval;
2. implement an automated `GET /api/health` smoke test;
3. implement host CI and required checks;
4. validate the approved Node runtime contract on the supported runtime matrix;
5. make state-builder and doctor outputs host-aware so copied framework tests do not define application readiness;
6. verify ledger initialization, host use, and work-index generation/freshness;
7. perform a clean-clone rehearsal from the approved baseline; and
8. publish the final host-readiness result with direct evidence.

The contract MUST state prerequisites, allowed surfaces, expected evidence, residual risks, stop conditions, and explicit exclusions. It MUST NOT claim any listed mechanism exists or passes at Sprint 1 close.

**RB-021 — No premature readiness claim.** Sprint 1 MAY claim only that its governance/documentation baseline acceptance criteria passed. It MUST NOT claim that the application is test-ready, CI-ready, runtime-compatible, clean-clone reproducible, fully SDD-ready, customer-validated, or SaaS-ready.

## 9. Non-Functional Requirements

**RB-022 — Security and privacy.** Baseline evidence MUST exclude `.env`, API keys, connector secrets, business records from local databases, and other sensitive values. Evidence commands MUST record structure and status without printing secrets.

**RB-023 — Traceability.** Every Sprint 1 change after approval MUST trace to at least one RB requirement, one acceptance criterion, one board outcome, and one evidence entry. Historical/reference classification MUST retain provenance.

**RB-024 — Determinism and portability.** Baseline reproduction instructions MUST work from a fresh clone on Windows without depending on the original absolute workspace path, ignored local databases, or uncommitted files. Final clean-clone execution remains deferred to Sprint 2; Sprint 1 specifies the procedure and records its deferral.

**RB-025 — Observability of uncertainty.** Pending, unverified, rejected, amended, deferred, and not-applicable states MUST be explicit. Generated state MUST identify source commit and freshness before it can be used as close evidence.

## 10. Protected Surfaces and Allowed Change Classes

### 10.1 Never changed in Sprint 1

- `server/` and `public/`;
- application database schema or local data;
- application route behavior or response shapes;
- connector and tool contracts;
- outbox drafting or approval semantics;
- `package.json`, lockfile, `.npmrc`, and dependencies;
- `.env` or credentials;
- host test/CI implementation;
- state-builder, doctor, ledger, and work-index code;
- global backlog; and
- the separate framework repository.

### 10.2 Governed documentation/metadata changes after approval only

Subject to `TASKS.md` and exact file ownership, Sprint 1 may reconcile:

- host instructions and active operational documentation;
- host constitution only through its amendment procedure and the recorded owner decision;
- `spec-driven-development/CONTEXT.md`;
- active/reference metadata for agents, skills, roster, and skill packs;
- onboarding evidence and approved artifact cleanup;
- Git baseline records and Sprint 2 exit-contract documentation; and
- sprint evidence/report artifacts.

## 11. Level 2 Owner Gate and Allowed Work

### 11.1 Before approval

Allowed:

- read-only evidence collection that does not expose secrets;
- creation and review of the complete planning-only Sprint Executive Manager handoff package under the owner's explicit instruction: PM plan, board, onboarding, kickoff, and report template; Architect `SPEC.md`; Principal Software Developer `TASKS.md`; and sprint-progress tracking;
- concise escalation of the pending decision through the project Executive Manager.

Not allowed:

- treating recommendations as decisions;
- using a planning artifact to authorize or begin execution;
- modifying files outside the permitted planning-only handoff package;
- deleting or moving onboarding artifacts;
- amending constitution or instructions;
- staging, committing, pushing, merging, changing branch policy, or dispatching;
- changing `package.json` or runtime behavior; or
- beginning Sprint 2 work.

### 11.2 After approval

Work may start only when all of the following are true:

1. a dated Level 2 record disposes all five bundle items and explicitly authorizes Sprint 1;
2. amended owner choices, if any, are reconciled into `PLAN.md`, `BOARD.md`, and this specification;
3. the Product Manager accepts the preserved scope and acceptance boundary;
4. the Principal Software Developer creates `TASKS.md` with non-overlapping ownership and evidence steps; and
5. the Sprint Executive Manager activation/roster inconsistency is resolved or coordination is explicitly assigned through another approved route.

After those conditions, only the documentation, governance, metadata, evidence-preservation, and approved cleanup work in section 10.2 is allowed. No application or Sprint 2 implementation becomes allowed.

## 12. Acceptance Criteria

| ID | Testable assertion | Requirements | Plan outcome | Board outcome |
|---|---|---|---|---|
| AC-001 | A dated owner record contains approve/reject/amend for all five bundle items and explicit Sprint 1 start authorization; Git evidence proves no mutation outside the permitted planning-only handoff package preceded it. | RB-001-RB-003 | AO-01 | R1 |
| AC-002 | A baseline record identifies exact start/end SHAs, branch, before/after status, retained and removed assets, decision references, and clone-independent reproduction steps. | RB-004, RB-022, RB-024 | AO-02 | R2 |
| AC-003 | Root onboarding, `.sdd-archaeology.json`, `.sdd-proposal/`, `CON`, `project.config.json`, `.github/`, and adopted `spec-driven-development/` assets each have an approved, evidence-backed disposition. | RB-005-RB-008 | AO-02 | R2 |
| AC-004 | A consistency scan of active authoritative sources finds no unqualified conflict among current local implementation, hosted SaaS target, and customer-discovery gate, and no claim that SaaS or discovery is complete. | RB-009, RB-010, RB-012 | AO-03 | R3 |
| AC-005 | Active operational documentation states SQLite persistence is implemented, lists seven workflows, lists all eight current routes, and distinguishes current implementation from target direction. | RB-011 | AO-03 | R3 |
| AC-006 | A governed source matrix records each PM/sprint inconsistency in RB-012 with a resolution, owner, or explicit Sprint 2 carry; none is silently ignored. | RB-012, RB-025 | AO-03, AO-06 | R3, R6 |
| AC-007 | One dated owner-approved Git policy is stated consistently across all active sources; a contradiction scan finds no active direct-main, `master`/integration, PR, branch, or worktree conflict. | RB-013 | AO-04 | R4 |
| AC-008 | The runtime contract is explicitly owner-approved or amended and consistently documented; repository diff evidence confirms Sprint 1 did not change runtime/application/test implementation or claim compatibility. | RB-014, RB-021 | AO-06, AO-07 | R6, R7 |
| AC-009 | Every agent, skill, roster entry, and skill-pack member has a deterministic lifecycle/scope disposition, and file/manifest count mismatches are accounted for. | RB-015, RB-017, RB-018, RB-023 | AO-05 | R5 |
| AC-010 | A mismatch scan finds no active host execution guidance prescribing the incompatible stacks and paths enumerated in RB-016; copied examples remain accessible only as inactive/reference/framework-scope evidence. | RB-016-RB-018 | AO-05 | R5 |
| AC-011 | Active execution guidance explicitly preserves approval, connector, deterministic-calculation, and secret-handling invariants; diff review confirms no protected application behavior or schema changed. | RB-019, RB-022 | AO-05, AO-07 | R5, R7 |
| AC-012 | The Sprint 2 handoff names all eight deferred work areas in RB-020, with prerequisites, evidence, risks, stop conditions, exclusions, and an explicit statement that Sprint 1 did not implement or validate them. | RB-020, RB-021, RB-024 | AO-06 | R6 |
| AC-013 | Scope diff classification reports zero changes to application code, framework code, package/runtime files, tests, CI, state tools, ledger/work-index mechanics, global backlog, API contracts, DB schema, connectors, or approval behavior. | RB-021 and section 10 | AO-07 | R7 |
| AC-014 | The completed report-up maps AO-01 through AO-08 to direct evidence, records all unresolved gates and risks, and makes no full-readiness claim. | RB-021, RB-023, RB-025 | AO-08 | R8 |

All acceptance criteria MUST be `PASS` to close. `PARTIAL`, `UNKNOWN`, `DEFERRED` on a Sprint 1 criterion, or missing evidence means the sprint remains open or blocked.

## 13. Verification and Evidence Contract

| Evidence ID | Verification | Method | Expected evidence | Acceptance criteria |
|---|---|---|---|---|
| EV-001 | Owner gate chronology | Compare dated decision record, Git history, file timestamps only as secondary evidence, and first post-gate execution or other mutation | Decision and explicit start authorization precede all mutations outside the permitted planning-only handoff package | AC-001 |
| EV-002 | Git baseline snapshot | Read-only Git branch, exact SHA, remote, porcelain status, tracked/untracked manifest | Machine-readable before/after snapshots | AC-002, AC-003 |
| EV-003 | Artifact provenance review | Inspect tracked history and approved preservation record for root onboarding and temporary artifacts | No evidence loss; each disposition cites authority | AC-003 |
| EV-004 | Product identity scan | Search active authoritative sources for local/demo, hosted/SaaS, discovery/validation, and completion language | Three layers distinct; no false completion | AC-004 |
| EV-005 | Implementation/documentation inventory | Compare active docs with `server/db.js`, `server/workflows.js`, `server/index.js`, and commit `8008c02` | SQLite, seven workflows, eight routes match | AC-005 |
| EV-006 | PM artifact reconciliation matrix | Review `PLAN.md`, `BOARD.md`, `ONBOARDING.md`, `KICKOFF_PROMPT.md`, state, roster, and this spec | Every RB-012 inconsistency resolved or carried | AC-006 |
| EV-007 | Git-policy contradiction scan | Search active sources for `main`, `master`, `integration/improvements`, PR, branch, worktree, commit/push rules | One approved active policy | AC-007 |
| EV-008 | Runtime boundary review | Compare approved decision, active docs, `package.json`, diff, and Sprint 2 contract | Contract documented; no implementation/validation claim | AC-008 |
| EV-009 | Agent/skill/roster manifest reconciliation | Enumerate files and manifests; validate lifecycle, scope, host, provenance, and pack membership | Complete deterministic disposition | AC-009 |
| EV-010 | Host-invalid guidance scan | Search active assets for Python/FastAPI/pytest/HTMX/Day-to-Day paths and incompatible Git/LLM rules | Zero unresolved active mismatches | AC-010 |
| EV-011 | Protected-behavior diff review | Classify every changed path and inspect governed guidance | No protected code or behavior changes | AC-011, AC-013 |
| EV-012 | Sprint 2 contract review | Checklist against RB-020 and RB-021 | Complete bounded handoff; no premature claim | AC-012 |
| EV-013 | Sprint report review | Complete `REPORT_UP_TEMPLATE.md` and evidence links | AO-01-AO-08 all evidenced | AC-014 |

Sprint 1 verification is documentation, metadata, source-consistency, provenance, and Git-evidence verification. Copied Python framework test results MUST NOT be used as evidence that the Node application is ready.

## 14. Traceability to Audit Findings

| Audit finding | Requirements | Acceptance evidence |
|---|---|---|
| Dirty/uncommitted baseline | RB-004, RB-008, RB-024 | AC-002, AC-003; EV-002 |
| Root onboarding deletion unresolved | RB-005 | AC-003; EV-003 |
| Temporary `.sdd` artifacts and `CON` | RB-006 | AC-003; EV-003 |
| `project.config.json` and adopted SDD assets unbaselined | RB-007, RB-008 | AC-003; EV-002, EV-003 |
| Product identity conflict | RB-009, RB-010 | AC-004; EV-004 |
| Git workflow conflict | RB-013 | AC-007; EV-007 |
| Runtime minimum unvalidated | RB-014, RB-020, RB-021 | AC-008, AC-012; EV-008, EV-012 |
| Copied agents/skills/roster invalid for host | RB-015-RB-018 | AC-009, AC-010; EV-009, EV-010 |
| SQLite and documentation conflict | RB-011 | AC-005; EV-005 |
| Six-versus-seven workflow conflict | RB-011 | AC-005; EV-005 |
| Endpoint inventory stale/incomplete | RB-011 | AC-005; EV-005 |
| No `npm test`, smoke test, or CI | RB-020, RB-021 | AC-012; EV-012 |
| State-builder/doctor not host-aware | RB-020 | AC-012; EV-012 |
| Ledger/work-index not verified | RB-012, RB-020 | AC-006, AC-012; EV-006, EV-012 |
| Clean-clone readiness unverified | RB-020, RB-024 | AC-012; EV-012 |
| `exec/state.md` incorrectly says no blockers | RB-012, RB-025 | AC-006, AC-014; EV-006, EV-013 |

## 15. Deliverable and Outcome Traceability

| Plan deliverable | Board outcome | Acceptance criteria |
|---|---|---|
| D1 — Owner decision | R1 | AC-001 |
| D2 — Reproducible Git baseline | R2 | AC-002, AC-003 |
| D3 — Product identity | R3 | AC-004-AC-006 |
| D4 — Git policy | R4 | AC-007 |
| D5 — Host-valid agents/skills/roster | R5 | AC-009-AC-011 |
| D6 — Sprint 2 exit contract | R6 | AC-008, AC-012 |
| D7 — Report-up | R8 | AC-014 |
| Acceptance verification | R7 | AC-001-AC-014 |

This table resolves the differing D, AO, and R identifier systems without renaming the PM-owned artifacts.

## 16. Failure Handling and Rollback

1. **Before mutation:** capture exact Git and artifact evidence. If capture is incomplete, stop; do not clean.
2. **Owner decision missing or changed:** leave status blocked. If a decision changes after tasks begin, stop all work and re-baseline before resuming.
3. **Evidence-preservation failure:** restore the affected artifact from the captured source or Git history where available. Do not continue until provenance is verified.
4. **Contradictory active guidance:** classify the affected asset inactive/reference temporarily and escalate; do not guess which rule applies.
5. **Protected-surface change detected:** stop, revert only the unauthorized Sprint 1 change without rewriting shared history, preserve the diff as incident evidence, and re-run scope verification.
6. **Baseline cannot be reproduced:** Sprint 1 MUST remain open. Do not weaken AC-002 or defer it as a pass.
7. **Constitution amendment rejected or incomplete:** retain the ratified constitution, record the unresolved conflict, and block any dependent activation.
8. **Agent/skill classification incomplete:** default unresolved assets to inactive/reference and prohibit dispatch through them.
9. **Rollback target:** the last exact approved baseline commit, not an uncommitted working tree. Rollback MUST NOT use force-push, destructive reset, or deletion of unpreserved evidence without separate owner approval.
10. **Sprint 2 mechanic attempted early:** stop and remove only the unauthorized change through normal reversible Git operations; do not claim its partial result as evidence.

## 17. Stop Conditions

Stop immediately and report through the project Executive Manager when:

- any Level 2 bundle item is pending, partial, ambiguous, or undated at attempted activation;
- the owner rejects or amends an item without PM re-baselining;
- work would broaden beyond the goals and non-goals in `PLAN.md`;
- a change touches a protected surface in section 10.1;
- a cleanup would precede evidence preservation;
- a secret or local business record could enter evidence or Git;
- the ending baseline cannot be tied to an exact commit;
- active guidance remains contradictory or host-invalid;
- a new dependency, breaking schema change, external integration, production policy, or M365 permission is proposed;
- a constitution change lacks its required governance and approval;
- an acceptance criterion is `FAIL`, `PARTIAL`, `UNKNOWN`, or unsupported;
- anyone attempts to use copied framework tests as host readiness proof;
- Sprint 1 is described as customer validation, SaaS completion, or full SDD readiness; or
- commit, push, merge, cleanup, or dispatch is requested before its approved authority exists.

## 18. Open Owner Gates

| Gate | Current state | Architect recommendation | Effect while pending |
|---|---|---|---|
| Git operating policy | Pending Level 2 | Protected `main`, short-lived branches, required PR checks | No Git-policy reconciliation, commit, or dispatch |
| Node runtime contract | Pending Level 2 | Node.js `>=24`; validate mechanically in Sprint 2 | No package/runtime change or compatibility claim |
| Three-layer identity governance | Pending Level 2 | Approve governed reconciliation | No authoritative instruction/constitution reconciliation |
| Root onboarding file | Pending Level 2 | Preserve history; delete stale root copy; reconcile `docs/AGENT_ONBOARDING.md` | No deletion or authority claim |
| Temporary artifacts and `CON` | Pending Level 2 | Preserve needed evidence, then remove originals | No cleanup |
| Sprint 1 start | Pending Level 2 | Authorize only after all five dispositions are recorded | Planning-only handoff package permitted; all execution and other mutation blocked |

## 19. Specification Review Verdict

The specification is self-contained and technically feasible as a governance/documentation sprint. Complexity is **M** because many authoritative and activation surfaces are affected; operational risk is **High** if copied guidance is activated prematurely and **Low-to-Medium** if the gate and inactive-by-default model are enforced. The work is reversible before commit and remains documentation/metadata-only, except approved artifact cleanup, which requires evidence preservation.

This specification is ready for Product Manager scope/acceptance review, Principal Software Developer task planning, completion of the Sprint Executive Manager handoff package, and owner gate disposition. It is not approved for implementation, cleanup, governed amendment, worker dispatch, commit, push, merge, or other execution while the Level 2 gate remains pending and Sprint 1 start authorization has not been recorded.
