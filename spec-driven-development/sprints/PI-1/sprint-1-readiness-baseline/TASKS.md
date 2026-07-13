---
id: PI-1-S1-TASKS
type: tasks
status: conditional-blocked
owner: principal-software-developer
created: 2026-07-10
updated: 2026-07-10
sprint: PI-1 Sprint 1
spec: PI-1-S1-SPEC
plan: PI-1-S1-PLAN
approval: pending-owner-level-2
execution: prohibited-until-r1-t01-passes
---

# PI-1 Sprint 1: Conditional Operational Readiness Tasks

## 1. Execution Status and Authority

**CONDITIONAL PLAN ONLY — EXECUTION BLOCKED ON R1-T01**

This file translates the proposed Sprint 1 specification into an execution plan. Its creation follows the owner's direct 2026-07-10 instruction to the Principal Software Developer to author a conditional task plan. It does not activate the sprint, approve the policy bundle, authorize cleanup, dispatch a worker, stage a file, create a commit, or change any application behavior.

No mutating task after R1-T01 may begin until a dated Level 2 owner decision disposes all five policy-bundle items, explicitly authorizes Sprint 1, and is recorded by the project Executive Manager. Read-only inspection may occur before that gate. If any owner choice differs from the recommendations encoded in `PLAN.md` or `SPEC.md`, execution remains blocked until the Product Manager re-baselines the affected plan, board, and acceptance boundary and the Architect re-reviews the specification. The Principal Software Developer must then revise this file before any downstream task starts.

## 2. Sprint Boundary

### In scope after the gate

- Evidence-preserving repository hygiene and an exact, reproducible Git baseline.
- Three-layer authoritative identity: current local demo, hosted SaaS target, immediate customer-discovery gate.
- One owner-approved active Git policy and a documented, unvalidated Node runtime contract.
- Deterministic lifecycle and host-scope classification for agents, skills, roster entries, and skill packs.
- Host-valid active execution guidance that preserves the approval outbox and current connector/calculation/security invariants.
- A bounded Sprint 2 readiness contract and complete Sprint Executive Manager report-up evidence.

### Out of scope for every task

- Any change under `server/` or `public/`.
- Any change to `package.json`, lockfiles, `.npmrc`, dependencies, application databases, API contracts, database schema, connectors, tools, workflows, approval behavior, or customer-facing behavior.
- Test framework selection or installation, `npm test`, health smoke-test implementation, CI, linting, type checking, build tooling, Node compatibility implementation, state-builder/doctor implementation, ledger/work-index implementation or final verification, and clean-clone execution.
- Product features, SaaS foundation work, customer-discovery execution or conclusions, global backlog changes, and changes in the separate framework repository.
- Any access, display, staging, or commit of `.env`, credentials, secrets, ignored business data, or `*.db`.

### Protected existing sprint artifacts

`PLAN.md`, `BOARD.md`, `SPEC.md`, `ONBOARDING.md`, `KICKOFF_PROMPT.md`, and `REPORT_UP_TEMPLATE.md` are inputs and must not be edited by execution workers. If an owner amendment requires changes to PM- or Architect-owned artifacts, stop and return to re-baselining; do not patch them as part of a downstream task.

## 3. Mandatory Safety Rules

1. Use `git status --short --branch`, `git diff`, `git ls-files`, `git check-ignore`, and content searches read-only before mutation.
2. Never use `git clean`, destructive reset, force checkout, force push, bulk deletion, or a command whose result cannot be reviewed path by path.
3. Inventory `.sdd-archaeology.json`, `.sdd-proposal/`, `CON`, and the tracked root onboarding deletion before any move or removal. Preserve provenance first.
4. Never delete an untracked asset merely because it appears temporary. Removal requires the exact R1-T01 disposition and preservation evidence.
5. Stage only from a reviewed path allowlist. Never use `git add .`, `git add -A`, or equivalent broad staging while the repository contains unrelated dirty/untracked state.
6. Never stage `.env`, `.env.*` other than an already-approved non-secret example, `*.db`, runtime data, logs, caches, or unrelated application files.
7. Any unexpected pre-existing change is owner work until proven otherwise. Record it; do not rewrite, restore, stage, or delete it.
8. A task that discovers a protected-surface diff stops immediately and reports it. It does not attempt opportunistic repair.
9. Every task completion report must distinguish observed facts, changes made, unverified claims, and deferred Sprint 2 work.
10. No worker dispatch is authorized by this file. The worker types below are recommendations for later, separately authorized execution.

## 4. Task Summary and Dependency Order

| ID | Title | Type | Execution | Primary owner | Depends on | Parallel group |
|---|---|---|---|---|---|---|
| R1-T01 | Record Level 2 owner policy gate and authorize or block execution | [S] | [HITL] | Project Executive Manager | None | G0 |
| R1-T02 | Capture immutable pre-mutation Git and asset baseline | [S] | [AFK] | Principal Software Developer | R1-T01 | G1 |
| R1-T03 | Establish adopted-asset and authority manifests | [S] | [AFK] | Principal Software Developer | R1-T02 | G2A |
| R1-T04 | Preserve onboarding evidence and apply approved artifact dispositions | [S] | [HITL] | Principal Software Developer | R1-T03 | G3A |
| R1-T05 | Reconcile core host identity and current implementation facts | [P] | [AFK] | Principal Product Manager + Principal Architect | R1-T02 | G2B |
| R1-T06 | Reconcile active onboarding and project-status documentation | [P] | [AFK] | Principal Product Manager | R1-T02 | G2C |
| R1-T07 | Apply governed constitution identity/runtime amendments | [S] | [HITL] | Principal Architect | R1-T05 | G3B |
| R1-T08 | Apply governed constitution Git/quality amendments | [S] | [HITL] | Principal Architect | R1-T07 | G4A |
| R1-T09 | Record PM/sprint inconsistencies and coordination resolution | [P] | [AFK] | Principal Product Manager | R1-T02 | G2D |
| R1-T10 | Reconcile agent lifecycle roster and host activation | [S] | [AFK] | Principal Architect | R1-T03, R1-T09 | G4B |
| R1-T11 | Reconcile skill lifecycle roster and skill packs | [P] | [AFK] | Principal Architect | R1-T03, R1-T09 | G4C |
| R1-T12 | Adapt active principal coordination agents | [S] | [AFK] | Principal Software Developer | R1-T08, R1-T10 | G5A |
| R1-T13 | Adapt active implementation and review workers | [P] | [AFK] | Principal Software Developer | R1-T08, R1-T10 | G5B |
| R1-T14 | Adapt active core host-context and Git skills | [P] | [AFK] | Principal Architect | R1-T08, R1-T11 | G5C |
| R1-T15 | Adapt active execution and review workflow skills | [S] | [AFK] | Principal Software Developer | R1-T13, R1-T14 | G6A |
| R1-T16 | Validate active guidance and protected-behavior invariants | [S] | [AFK] | QA Engineer | R1-T04, R1-T06, R1-T12-R1-T15 | G7 |
| R1-T17 | Publish the bounded Sprint 2 readiness contract | [S] | [AFK] | Principal Product Manager | R1-T04, R1-T08, R1-T09, R1-T16 | G8 |
| R1-T18 | Prepare and authorize the scoped baseline commit/PR | [S] | [HITL] | Principal Software Developer + Human owner | R1-T17 | G9 |
| R1-T19 | Run final acceptance and scope verification | [S] | [AFK] | QA Engineer + Principal Software Developer | R1-T18 | G10 |
| R1-T20 | Complete Sprint EM report-up and close/block recommendation | [S] | [HITL] | Sprint Executive Manager | R1-T19 | G11 |

## 5. Parallel-Safety and File-Ownership Plan

### Permitted parallel groups

- **G2:** R1-T03, R1-T05, R1-T06, and R1-T09 may run concurrently only because their write sets are disjoint. Each begins from the R1-T02 evidence snapshot and must stop if its intended files have changed since that snapshot.
- **G4:** R1-T08, R1-T10, and R1-T11 may run concurrently only after R1-T07. R1-T08 owns constitution files, R1-T10 owns `agents.json`, and R1-T11 owns skill manifests/packs.
- **G5:** R1-T12, R1-T13, and R1-T14 may run concurrently because each has a disjoint allowlist of agent or skill files.

### Mandatory sequential relationships

- R1-T01 and R1-T02 are global gates and run alone.
- R1-T04 follows R1-T03 because cleanup depends on the approved retained/removed manifest.
- R1-T07 follows R1-T05 because constitution amendments must use the reconciled identity language.
- R1-T08 follows R1-T07 because both touch governed constitution metadata and must not race.
- R1-T15 follows R1-T13 and R1-T14 because implementation/review workflows depend on the approved worker and core-skill contracts.
- R1-T16 through R1-T20 are a sequential close path: validate, contract, baseline commit/PR, final acceptance, report.

### Conflict rule

No two active tasks may write the same file or directory category. If the exact file list changes, the Principal Software Developer must recompute the dependency graph. A newly shared file converts the affected tasks to sequential; it must not be resolved through concurrent edits or an unreviewed merge.

## 6. Execution Tasks

## Task R1-T01: Record Level 2 Owner Policy Gate and Authorize or Block Execution

**Story/Outcomes:** RB-001-RB-003; AC-001; AO-01; R1  
**Type:** [S]  
**Execution:** [HITL]  
**Size:** S  
**Owner role:** Project Executive Manager; decision authority is the human owner at Level 2  
**Recommended worker type:** None; this is an owner-policy gate  
**Depends on:** None

### Files/areas in scope

- A dated project-Executive-Manager decision record under `spec-driven-development/exec/briefings/`.
- Read-only review of the sprint `PLAN.md`, `BOARD.md`, `SPEC.md`, and this `TASKS.md`.

### Protected/out of scope

- All repository mutations other than the authoritative decision record.
- No cleanup, constitution/instruction edits, staging, commit, push, merge, or dispatch.
- No inferred approval from chat context, recommendations, existing prose, or partial answers.

### Steps

1. Present the five bundle items as independent approve/reject/amend dispositions: Git policy, Node runtime contract, three-layer identity governance, root onboarding-file disposition, and temporary-artifact/`CON` disposition.
2. Record a dated disposition for every item and a separate explicit answer on whether Sprint 1 may start.
3. Record the authority, source, and any conditions or exclusions.
4. If any item is rejected, amended, pending, ambiguous, or undated, mark downstream execution blocked.
5. For any amendment, route `PLAN.md`/`BOARD.md` acceptance re-baselining to the Product Manager and `SPEC.md` re-review to the Architect. Require a revised dependency/file baseline in this file before execution.
6. Confirm that creating `TASKS.md` was planning only and that no other Sprint 1 mutation preceded approval.

### Verification commands/evidence

- Read the decision record and confirm five item rows plus explicit sprint-start authorization.
- `git diff --name-only -- . ':(exclude)spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/SPEC.md' ':(exclude)spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/TASKS.md'`
- Evidence: dated record, Level 2 authority, disposition completeness, and chronology statement.

### Completion report

Report `PASS — authorized`, `BLOCKED — rejected/amended pending re-baseline`, or `BLOCKED — incomplete`. List each item disposition and the exact downstream gate. Do not describe recommendations as decisions.

### Rollback notes

Decision records are historical evidence and are not silently rewritten. A changed owner decision requires a new dated superseding record, suspension of all downstream tasks, and full re-baselining.

---

## Task R1-T02: Capture Immutable Pre-Mutation Git and Asset Baseline

**Story/Outcomes:** RB-004, RB-022, RB-024, RB-025; AC-002; AO-02; R2  
**Type:** [S]  
**Execution:** [AFK] after gate  
**Size:** M  
**Owner role:** Principal Software Developer  
**Recommended worker type:** Dev Env Manager or QA Engineer for read-only evidence capture  
**Depends on:** R1-T01 PASS

### Files/areas in scope

- Create `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GIT-BASELINE.md`.
- Read-only repository root, Git index, remotes, tracked/untracked paths, ignore rules, and recent history.

### Protected/out of scope

- No file cleanup, restore, move, staging, commit, branch change, or ignore-rule change.
- Do not read or print `.env`, database contents, API keys, or business records.

### Steps

1. Capture UTC date, branch, full HEAD SHA, upstream, remote URL, and recent commit subjects.
2. Capture porcelain status before mutation and distinguish tracked deletion, modifications, untracked paths, ignored runtime files, and adopted SDD surfaces.
3. Record the existing tracked root `AGENT_ONBOARDING.md` deletion without resolving it.
4. Record the existence and file-level inventory of `.sdd-archaeology.json`, `.sdd-proposal/`, and `CON` without printing sensitive content.
5. Record hashes for temporary evidence files where Windows permits safe access; record access failure explicitly rather than forcing access.
6. Capture an application-behavior protection baseline using tracked blob IDs or hashes for `server/`, `public/`, `package.json`, and the lockfile.
7. Define clone-independent reproduction steps as a Sprint 1 procedure only; mark actual clean-clone execution deferred to Sprint 2.

### Verification commands/evidence

- `git rev-parse --verify HEAD`
- `git branch --show-current`
- `git rev-parse --abbrev-ref --symbolic-full-name '@{upstream}'`
- `git remote -v`
- `git status --porcelain=v1 --untracked-files=all`
- `git ls-files --stage -- server public package.json package-lock.json`
- `git log --oneline -10`
- `git check-ignore -v .env *.db` where present, without reading file contents.
- Evidence file contains command, timestamp, exit result, and redaction statement.

### Completion report

Report exact start SHA, branch/upstream, counts by status class, protected-surface baseline, inaccessible paths, and whether evidence is complete enough to permit later cleanup.

### Rollback notes

This task is additive evidence only. If accidental mutation occurs, stop; preserve the diff, do not reset destructively, and escalate before continuing.

---

## Task R1-T03: Establish Adopted-Asset and Authority Manifests

**Story/Outcomes:** RB-004, RB-007, RB-008, RB-015, RB-017, RB-023; AC-002, AC-003, AC-009; AO-02, AO-05; R2, R5  
**Type:** [S]  
**Execution:** [AFK]  
**Size:** L  
**Owner role:** Principal Software Developer with Architect validity review  
**Recommended worker type:** QA Engineer  
**Depends on:** R1-T02

### Files/areas in scope

- Create `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`.
- Read-only `.github/`, `spec-driven-development/`, `project.config.json`, root/docs onboarding files, and temporary onboarding artifacts.

### Protected/out of scope

- No asset is deleted, moved, activated, or edited in this task.
- No `*.db` content is inventoried; runtime data is identified by path/category only and excluded from staging.

### Steps

1. Enumerate retained adoption surfaces by exact path or deterministic directory category.
2. Assign every retained surface one lifecycle/scope class: active host guidance, active framework-process guidance, proposed, reference/example, archival/historical, generated, or runtime data.
3. Record provenance, intended authority, owning role, tracked state, secret/data risk, and intended baseline disposition.
4. Verify `project.config.json` owner, team, and repository URL against live Git remote without exposing credentials; record it as the host identity record below dated owner decisions.
5. Account for all 14 agent files, 35 skill files, 12 rostered agents, 34 rostered skills, all skill packs, `pre-work-check`, Sprint EM, and worker template mismatches.
6. Default any missing/conflicting/unverifiable metadata to inactive/reference.
7. Create retained and proposed-removed sections that R1-T04 can execute only under the exact owner decision.

### Verification commands/evidence

- `(Get-ChildItem .github\agents -File).Count`
- `(Get-ChildItem .github\skills -Recurse -Filter SKILL.md -File).Count`
- `Get-Content project.config.json | ConvertFrom-Json | Select-Object owner,team,repo_url`
- Compare file lists with `spec-driven-development/roster/agents.json`, `skills.json`, and `skill_packs.json` without modifying them.
- Confirm every top-level retained adoption category has one and only one disposition.

### Completion report

Report counts, unmatched files/manifest entries, default-inactive decisions, data exclusions, and whether every adopted surface has a deterministic disposition.

### Rollback notes

Additive manifest only. If classification proves wrong, amend with dated rationale; do not hide the mismatch by deleting the source asset.

---

## Task R1-T04: Preserve Onboarding Evidence and Apply Approved Artifact Dispositions

**Story/Outcomes:** RB-005-RB-008, RB-022-RB-024; AC-003; AO-02; R2  
**Type:** [S]  
**Execution:** [HITL] because it may remove or finalize owner-controlled assets  
**Size:** M  
**Owner role:** Principal Software Developer  
**Recommended worker type:** Dev Env Manager  
**Depends on:** R1-T03 and exact R1-T01 dispositions

### Files/areas in scope

- Root `AGENT_ONBOARDING.md` tracked deletion.
- `.sdd-archaeology.json`, `.sdd-proposal/`, and `CON`.
- Evidence-preservation area `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/onboarding/`.
- `project.config.json` baseline disposition.

### Protected/out of scope

- `docs/AGENT_ONBOARDING.md` content is owned by R1-T06 and must not be edited here.
- No broad cleanup under `.github/` or `spec-driven-development/`.
- No unapproved deletion and no use of `git clean`.

### Steps

1. Reconfirm that each path's owner disposition exactly matches R1-T01 and the proposed removed/retained manifest.
2. Preserve required provenance in normal, readable, non-secret evidence files, including source path, hash where available, capture date, reason, authority, and whether content was copied or summarized.
3. Verify preserved evidence before touching originals.
4. Apply only the approved disposition path by path. If the owner retained an original, document purpose, lifecycle, and authority instead of removing it.
5. For root `AGENT_ONBOARDING.md`, either preserve the tracked deletion or restore the file according to the decision; never infer intent.
6. Stop on inaccessible `CON`, uncertain provenance, secret/data risk, or a mismatch between the decision and manifest.
7. Update the asset manifest with completed disposition evidence, without claiming a commit exists yet.

### Verification commands/evidence

- `git status --short -- AGENT_ONBOARDING.md .sdd-archaeology.json .sdd-proposal CON project.config.json`
- `Get-ChildItem spec-driven-development\sprints\PI-1\sprint-1-readiness-baseline\evidence\onboarding -Recurse -Force`
- Compare preserved hashes/metadata to R1-T02.
- Confirm no other untracked path disappeared from porcelain status.

### Completion report

List each controlled path, decision, preservation reference, final working-tree state, and any stop condition. State explicitly that no unrelated untracked asset was deleted.

### Rollback notes

Restore an accidentally removed untracked artifact only from verified preserved evidence. Restore tracked content from Git only if that matches the owner disposition. Never use destructive reset or overwrite unpreserved owner work.

---

## Task R1-T05: Reconcile Core Host Identity and Current Implementation Facts

**Story/Outcomes:** RB-009-RB-011, RB-014, RB-019, RB-025; AC-004, AC-005, AC-008, AC-011; AO-03; R3  
**Type:** [P]  
**Execution:** [AFK]  
**Size:** M  
**Owner role:** Principal Product Manager for product language; Principal Architect for authority boundaries  
**Recommended worker type:** Developer or technical writer  
**Depends on:** R1-T02

### Files/areas in scope

- `.github/copilot-instructions.md`
- `spec-driven-development/CONTEXT.md`
- `README.md`

### Protected/out of scope

- Constitution files, application code, product backlog, sprint planning artifacts, and customer-discovery conclusions.
- No runtime compatibility claim and no change to `package.json`.

### Steps

1. State the current implementation, hosted SaaS target, and immediate customer-discovery gate as separate layers.
2. Replace framework-project identity in `CONTEXT.md` with Small-Business-Claude host identity while retaining SDD terms only as labeled process vocabulary.
3. Correct active current-state facts: local single-user demo, SQLite sessions/outbox, seven workflows, four mock connector domains, and all eight current routes.
4. Preserve the approval-outbox, connector-contract, deterministic server-side calculation, and secret-handling invariants.
5. Document the owner-approved Node contract as policy only and mark mechanical validation deferred to Sprint 2.
6. Remove active claims that the demo is the final product, SaaS is built/committed, discovery passed, persistence is in-memory, or there are only six workflows.

### Verification commands/evidence

- Search the three files for `6 ready`, `six`, `in-memory`, `Evolving Multi-Agent Framework`, `hosted SaaS`, `customer discovery`, and the eight route names.
- Read-only compare route/workflow/persistence facts with `server/index.js`, `server/workflows.js`, `server/db.js`, and commit `8008c02`.
- `git diff --check -- .github/copilot-instructions.md spec-driven-development/CONTEXT.md README.md`

### Completion report

Report the three-layer wording, corrected implementation inventory, runtime-policy caveat, preserved invariants, and any unresolved equal-authority conflict.

### Rollback notes

Revert only these three files to their pre-task blobs if review fails. Preserve the failed wording diff as review evidence; do not change application facts to match stale documentation.

---

## Task R1-T06: Reconcile Active Onboarding and Project-Status Documentation

**Story/Outcomes:** RB-009, RB-011, RB-019, RB-025; AC-004, AC-005, AC-011; AO-03; R3  
**Type:** [P]  
**Execution:** [AFK]  
**Size:** M  
**Owner role:** Principal Product Manager  
**Recommended worker type:** Developer or technical writer  
**Depends on:** R1-T02

### Files/areas in scope

- `docs/AGENT_ONBOARDING.md`
- `docs/KICK_OFF.md`
- `docs/PROJECT_STATUS.md`

### Protected/out of scope

- Root `AGENT_ONBOARDING.md` disposition is owned by R1-T04.
- `docs/PRODUCT_ROADMAP.md`, task history, sprint artifacts, application code, and backlog files.

### Steps

1. Align active onboarding and status with the three-layer identity model.
2. Correct SQLite, seven-workflow, eight-route, connector, and current-commit facts using live evidence.
3. Remove active instructions to commit/push directly until replaced with the exact owner-approved Git policy.
4. Preserve historical completed-task evidence as historical rather than rewriting it.
5. Preserve approval, deterministic calculation, connector stability, and secret rules.
6. Mark tests, CI, runtime validation, state tools, ledger/work-index verification, and clean-clone rehearsal as Sprint 2 work rather than completed readiness.

### Verification commands/evidence

- Search these files for `in-memory`, `No DB`, `SQLite persistence`, `6 workflows`, `7 workflows`, direct `main`, all eight route names, and false readiness language.
- `git diff --check -- docs/AGENT_ONBOARDING.md docs/KICK_OFF.md docs/PROJECT_STATUS.md`
- Compare current-state claims to the R1-T02 baseline and R1-T05 source language.

### Completion report

List corrected stale claims, preserved historical statements, policy references, and remaining deferred mechanics.

### Rollback notes

Restore only the three scoped docs from pre-task blobs if consistency review fails. Do not restore stale current-state claims without recording the unresolved conflict.

---

## Task R1-T07: Apply Governed Constitution Identity/Runtime Amendments

**Story/Outcomes:** RB-003, RB-009-RB-011, RB-014, RB-021, RB-023-RB-025; AC-004, AC-005, AC-008; AO-03, AO-06; R3, R6  
**Type:** [S]  
**Execution:** [HITL]  
**Size:** M  
**Owner role:** Principal Architect; human approval where amendment policy requires it  
**Recommended worker type:** None; governed Principal edit  
**Depends on:** R1-T05 and approved identity/runtime decisions

### Files/areas in scope

- `spec-driven-development/constitution/mission.md`
- `spec-driven-development/constitution/roadmap.md`
- `spec-driven-development/constitution/tech-stack.md`

### Protected/out of scope

- Other constitution files, application/package files, backlog, tests/CI, and unapproved product commitments.
- No silent amendment and no compatibility claim.

### Steps

1. Follow the constitution amendment procedure and record approving authority/date.
2. Update mission to distinguish current demo, hosted target, and discovery gate.
3. Update roadmap so implemented SQLite is not future work and readiness mechanics remain deferred.
4. Record the approved Node runtime contract in tech stack as policy pending Sprint 2 validation; leave package implementation unchanged.
5. Preserve current stack facts and no-build-step status.
6. Update semantic metadata consistently and run the approved constitution-reference propagation review without editing out-of-scope files.

### Verification commands/evidence

- Review frontmatter versions, ratification history, amendment date, and authority.
- Search these files for stale `6 workflows`, `in-memory`, `>=18` versus the approved policy, and false SaaS/discovery completion.
- `git diff --check -- spec-driven-development/constitution/mission.md spec-driven-development/constitution/roadmap.md spec-driven-development/constitution/tech-stack.md`

### Completion report

Report amendment authority, semantic-version changes, identity/runtime wording, propagation findings, and deferred validation.

### Rollback notes

If amendment approval is missing or rejected, retain the prior ratified constitution, record the conflict, and block dependent activation. Do not partially apply constitution changes.

---

## Task R1-T08: Apply Governed Constitution Git/Quality Amendments

**Story/Outcomes:** RB-003, RB-013, RB-019, RB-021-RB-025; AC-007, AC-011; AO-04; R4  
**Type:** [S]  
**Execution:** [HITL]  
**Size:** M  
**Owner role:** Principal Architect; human approval where amendment policy requires it  
**Recommended worker type:** None; governed Principal edit  
**Depends on:** R1-T07 and approved Git decision

### Files/areas in scope

- `spec-driven-development/constitution/principles.md`
- `spec-driven-development/constitution/decision-policy.md`
- `spec-driven-development/constitution/quality-policy.md`

### Protected/out of scope

- Git hosting configuration, branch-protection implementation, CI/check implementation, application files, and any branch operation.

### Steps

1. Replace active direct-to-`main` language with the exact owner-approved policy, or apply the owner's amended policy verbatim in effect.
2. Distinguish policy documentation from Sprint 2 implementation of checks.
3. Preserve brownfield, secret, approval-outbox, and evidence rules.
4. Clarify that no host test/CI gate exists yet and copied framework tests do not establish host readiness.
5. Record amendment authority/version metadata and propagation findings.

### Verification commands/evidence

- Search the three files for `directly to main`, `master`, `integration/improvements`, branch, PR, worktree, checks, tests, and CI.
- `git diff --check -- spec-driven-development/constitution/principles.md spec-driven-development/constitution/decision-policy.md spec-driven-development/constitution/quality-policy.md`
- Confirm no Git hosting or workflow file was created.

### Completion report

Report the single policy statement, amendment authority, deferred enforcement, preserved quality/safety rules, and unresolved reference-only conflicts.

### Rollback notes

If governance fails, restore all three as one amendment unit and keep Git-dependent tasks blocked. Do not leave mixed constitution policy.

---

## Task R1-T09: Record PM/Sprint Inconsistencies and Coordination Resolution

**Story/Outcomes:** RB-001-RB-003, RB-012, RB-020, RB-025; AC-006, AC-012; AO-03, AO-06; R3, R6  
**Type:** [P]  
**Execution:** [AFK]  
**Size:** M  
**Owner role:** Principal Product Manager  
**Recommended worker type:** QA Engineer  
**Depends on:** R1-T02

### Files/areas in scope

- Create `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/SOURCE-MATRIX.md`.
- Read-only `PLAN.md`, `BOARD.md`, `SPEC.md`, `ONBOARDING.md`, `KICKOFF_PROMPT.md`, `REPORT_UP_TEMPLATE.md`, `exec/state.md`, roster manifests, and `pre-work-check`.

### Protected/out of scope

- Do not edit PM/Architect/sprint onboarding artifacts, generated state, work-index code, ledger code/database, or roster files.

### Steps

1. Record every RB-012 inconsistency with sources, authority, operational risk, resolution owner, current disposition, and evidence.
2. Record RB-001 as the narrow exception allowing pre-gate spec and conditional task-plan authoring while execution remains blocked.
3. Map D1-D7, AO-01-AO-08, and R1-R8 without renaming owner artifacts.
4. Resolve Sprint EM coordination by recorded approved route or keep activation blocked; do not invent roster authority.
5. Carry absent work-index/pre-work-check mechanics and generated-state freshness to Sprint 2.
6. Record roster/file status mismatches for R1-T10/R1-T11.

### Verification commands/evidence

- Checklist against all six inconsistency bullets in RB-012.
- Confirm each row has resolution, owner, or explicit Sprint 2 carry; no blank/implicit disposition.
- `git diff --check -- spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/SOURCE-MATRIX.md`

### Completion report

Report six-of-six coverage, Sprint EM coordination result, carried mechanical items, and any blocker requiring re-baselining.

### Rollback notes

Additive evidence only. Correct errors through a dated revision; do not rewrite upstream artifacts to conceal inconsistency.

---

## Task R1-T10: Reconcile Agent Lifecycle Roster and Host Activation

**Story/Outcomes:** RB-015-RB-019, RB-023, RB-025; AC-009-AC-011; AO-05; R5  
**Type:** [S]  
**Execution:** [AFK]  
**Size:** M  
**Owner role:** Principal Architect for validity; Principal Software Developer for executable set  
**Recommended worker type:** Developer  
**Depends on:** R1-T03, R1-T09

### Files/areas in scope

- `spec-driven-development/roster/agents.json`
- Read-only `.github/agents/*.agent.md`
- `ASSET-MANIFEST.md` agent classification section

### Protected/out of scope

- Agent bodies are handled only by R1-T12/R1-T13.
- No dispatch, hiring, promotion, deletion, or ledger write.

### Steps

1. Add deterministic lifecycle, host scope, provenance, and activation metadata for every agent file and roster entry.
2. Account for Sprint EM and worker template mismatches explicitly.
3. Activate only the minimum roles whose bodies will be host-valid after R1-T12/R1-T13; default all unresolved or framework-only roles inactive/reference.
4. Ensure active roles identify Small-Business-Claude rather than Day-to-Day/framework repository assumptions.
5. Record recommended worker types without creating a dispatch.

### Verification commands/evidence

- Parse `agents.json` as JSON.
- Compare roster paths to all 14 agent files; require every file to be represented or explicitly covered as a non-executable template.
- Confirm every entry has one deterministic lifecycle/scope disposition.
- Confirm no active agent points to a missing file.

### Completion report

Report total files, roster entries, active host roles, inactive/reference roles, Sprint EM disposition, template disposition, and unresolved blockers.

### Rollback notes

Restore the previous manifest if parsing or review fails. Unresolved agents remain inactive by default; do not activate them to preserve count symmetry.

---

## Task R1-T11: Reconcile Skill Lifecycle Roster and Skill Packs

**Story/Outcomes:** RB-015-RB-018, RB-023, RB-025; AC-009, AC-010; AO-05; R5  
**Type:** [P]  
**Execution:** [AFK]  
**Size:** L  
**Owner role:** Principal Architect  
**Recommended worker type:** Developer  
**Depends on:** R1-T03, R1-T09

### Files/areas in scope

- `spec-driven-development/roster/skills.json`
- `spec-driven-development/roster/skill_packs.json`
- `ASSET-MANIFEST.md` skill/pack classification section

### Protected/out of scope

- Skill bodies are not edited here.
- No selection or implementation of a JavaScript test framework.
- No deletion of Python/FastAPI/pytest/HTMX examples.

### Steps

1. Account for all 35 skill files, including unregistered `pre-work-check`, and all 34 existing roster entries.
2. Add deterministic lifecycle, host scope, provenance, compatibility, and activation metadata.
3. Keep framework CLI Python clearly framework-scope; classify Day-to-Day and incompatible domain skills as reference/example.
4. Ensure active host packs contain only active compatible skills.
5. Inactivate or replace existing frontend/backend/full-stack/review packs that activate incompatible Python/FastAPI/pytest/HTMX guidance. A stack-neutral planning pack may remain only after member review.
6. Mark work-index-dependent activation unavailable until Sprint 2 mechanics exist.

### Verification commands/evidence

- Parse both JSON files.
- Compare every `SKILL.md` path with roster IDs and every pack member with a roster entry.
- Require no active pack member to be inactive, missing, incompatible, or reference-only.
- Search active manifest entries for Python/FastAPI/pytest/HTMX/Day-to-Day requirements.

### Completion report

Report file/roster counts, active skills/packs, reference skills, `pre-work-check` disposition, invalid pack corrections, and Sprint 2 dependencies.

### Rollback notes

Restore both manifests together if referential integrity fails. Default ambiguous skills and packs inactive; never delete source evidence to make validation pass.

---

## Task R1-T12: Adapt Active Principal Coordination Agents

**Story/Outcomes:** RB-013, RB-015-RB-019, RB-023; AC-007, AC-009-AC-011; AO-04, AO-05; R4, R5  
**Type:** [S]  
**Execution:** [AFK]  
**Size:** L  
**Owner role:** Principal Software Developer with Architect review  
**Recommended worker type:** Developer  
**Depends on:** R1-T08, R1-T10

### Files/areas in scope

- `.github/agents/principal-executive-manager.agent.md`
- `.github/agents/principal-product-manager.agent.md`
- `.github/agents/principal-architect.agent.md`

### Protected/out of scope

- Other agents, roster manifests, sprint artifacts, application files, framework repository behavior, and worker dispatch.

### Steps

1. Replace active Day-to-Day/Python/FastAPI/pytest and incompatible branch/worktree assumptions with host-valid context.
2. Preserve role authority boundaries and the owner decision format.
3. Encode the approved Git policy and three-layer product identity.
4. Preserve Node/Express/ESM/Anthropic/`node:sqlite`/plain-browser context and application invariants without inventing test tooling.
5. Distinguish framework-process Python from host application runtime where mentioned.

### Verification commands/evidence

- Search these files for the RB-016 incompatible terms and obsolete Git rules.
- Search for required host stack, owner gate, approval outbox, deterministic calculations, connector contract, and secret handling.
- `git diff --check --` on the three files.

### Completion report

Report removed active mismatches, retained role boundaries, approved policy references, and any content intentionally retained as visibly non-normative example.

### Rollback notes

Restore the three-file batch if role authority or host validity regresses. Keep the affected roles inactive until corrected.

---

## Task R1-T13: Adapt Active Implementation and Review Workers

**Story/Outcomes:** RB-013, RB-015-RB-019, RB-023; AC-007, AC-009-AC-011; AO-04, AO-05; R4, R5  
**Type:** [P]  
**Execution:** [AFK]  
**Size:** L  
**Owner role:** Principal Software Developer  
**Recommended worker type:** Developer  
**Depends on:** R1-T08, R1-T10

### Files/areas in scope

- `.github/agents/developer-general.agent.md`
- `.github/agents/qa-engineer-general.agent.md`
- `.github/agents/ux-designer-general.agent.md`

### Protected/out of scope

- Data Scientist, CLI specialist, cloud/security, UI Principal, Dev Env Manager, template, and any role classified inactive/reference.
- No app code, tests, framework selection, or dispatch.

### Steps

1. Adapt the minimum active worker bodies to the host stack and approved Git policy.
2. Remove mandatory pytest, `.venv`, FastAPI/Pydantic/SQLModel, HTMX/Jinja, Day-to-Day paths, `master`/integration, and mandatory worktree requirements.
3. Preserve TDD as a future execution principle without selecting a Sprint 2 JavaScript test framework.
4. Preserve brownfield scope, secret safety, approval outbox, connector stability, and deterministic server-side calculations.
5. Require workers to use exact allowlists and report test unavailability honestly until Sprint 2.

### Verification commands/evidence

- Search the three files for every RB-016 incompatible term and obsolete Git rule.
- Confirm each active worker identifies valid host files and commands without claiming tests exist.
- `git diff --check --` on the three files.

### Completion report

Report each role's host-valid scope, removed incompatibilities, deferred test mechanics, and preserved invariants.

### Rollback notes

Restore only this three-file worker batch if review fails and mark those workers inactive until re-adapted.

---

## Task R1-T14: Adapt Active Core Host-Context and Git Skills

**Story/Outcomes:** RB-013-RB-019, RB-023; AC-007, AC-009-AC-011; AO-04, AO-05; R4, R5  
**Type:** [P]  
**Execution:** [AFK]  
**Size:** L  
**Owner role:** Principal Architect  
**Recommended worker type:** Developer  
**Depends on:** R1-T08, R1-T11

### Files/areas in scope

- `.github/skills/core/project-context/SKILL.md`
- `.github/skills/core/git-workflow/SKILL.md`
- `.github/skills/core/sdd-constitution/SKILL.md`

### Protected/out of scope

- Other skills, skill manifests/packs, constitution files, app files, and Git hosting configuration.

### Steps

1. Make host identity, stack, approved Git policy, and authority hierarchy explicit.
2. Remove active Python/FastAPI/pytest/Day-to-Day and obsolete branch/worktree prescriptions.
3. Preserve the distinction between active host guidance and framework/reference examples.
4. Encode inactive-by-default behavior for missing/conflicting lifecycle metadata.
5. Preserve approval, connector, deterministic calculation, secret, and Sprint 1 scope invariants.

### Verification commands/evidence

- Search the three files for RB-016 incompatible terms and contradictory Git rules.
- Confirm the exact owner-approved Git policy appears consistently.
- `git diff --check --` on the three files.

### Completion report

Report host context corrections, Git policy alignment, activation behavior, and reference-only examples retained.

### Rollback notes

Restore the three skills as a unit if active guidance conflicts. Mark dependent packs inactive until corrected.

---

## Task R1-T15: Adapt Active Execution and Review Workflow Skills

**Story/Outcomes:** RB-015-RB-019, RB-023; AC-009-AC-011; AO-05; R5  
**Type:** [S]  
**Execution:** [AFK]  
**Size:** L  
**Owner role:** Principal Software Developer  
**Recommended worker type:** Developer  
**Depends on:** R1-T13, R1-T14

### Files/areas in scope

- `.github/skills/workflow/implement/SKILL.md`
- `.github/skills/engineering/code-review/SKILL.md`
- `.github/skills/operational/respect-existing/SKILL.md`

### Protected/out of scope

- `testing-conventions`, `pytest-runner`, `fastapi-routes`, and `htmx-frontend` remain inactive/reference; do not convert or delete them in Sprint 1.
- No test runner choice, test implementation, app edit, or dispatch.

### Steps

1. Adapt active execution and review instructions to Node/Express/ESM/Anthropic/`node:sqlite`/plain browser JavaScript.
2. Remove assumptions that tests, `.venv`, pytest fixtures, FastAPI helpers, or Day-to-Day module paths exist.
3. Keep test-first expectations conditional on the future approved Sprint 2 test contract; require honest `not configured` evidence now.
4. Enforce exact file scope, two-stage review, approved Git policy, and no broad staging.
5. Encode protected application behavior and secret/data handling.

### Verification commands/evidence

- Search these files for incompatible terms, stale paths, broad staging, and contradictory Git instructions.
- Confirm explicit no-test-framework-selection language and protected behavior rules.
- `git diff --check --` on the three files.

### Completion report

Report host adaptations, review order, test-mechanics deferral, staging safety, and preserved behavior constraints.

### Rollback notes

Restore this skill batch if execution guidance becomes ambiguous; deactivate the affected skills/packs until fixed.

---

## Task R1-T16: Validate Active Guidance and Protected-Behavior Invariants

**Story/Outcomes:** RB-009-RB-019, RB-021-RB-025; AC-004-AC-011, AC-013; AO-03-AO-05, AO-07; R3-R5, R7  
**Type:** [S]  
**Execution:** [AFK]  
**Size:** L  
**Owner role:** QA Engineer; Principal Architect joins governed-surface review  
**Recommended worker type:** QA Engineer  
**Depends on:** R1-T04, R1-T06, R1-T12-R1-T15

### Files/areas in scope

- Create `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GUIDANCE-VALIDATION.md`.
- Read-only active sources selected by manifests, constitution, instructions, docs, agents, skills, and packs.

### Protected/out of scope

- No corrective edits in the validation task.
- Reference/archive assets may contain incompatible terms only when their inactive status is mechanically clear and they are absent from active packs.

### Steps

1. Build the active-source list from manifests, not from file presence.
2. Scan active sources for incompatible stack/path terms in RB-016 and conflicting Git policies.
3. Scan identity sources for three-layer consistency and false completion language.
4. Confirm active docs state SQLite, seven workflows, and eight routes.
5. Confirm all active execution assets preserve outbox approval, connector stability, deterministic server calculations, and secret handling.
6. Verify lifecycle/pack referential integrity and account for every file-count mismatch.
7. Classify every finding PASS/FAIL with path evidence. Any unresolved active mismatch blocks R1-T17.

### Verification commands/evidence

- `Select-String` over the manifest-derived active file list for `Python|FastAPI|pytest|HTMX|Jinja|Pydantic|SQLModel|SQLAlchemy|Day-to-Day|agent/|master|integration/improvements|integration-improvements|worktree|GitHub Models`.
- Search identity sources for `six|6 ready|in-memory|hosted SaaS|customer discovery|validated|complete` with contextual review.
- Validate JSON manifests and pack membership.
- `git diff --check` for all changed text/JSON files.

### Completion report

Report scan scope, zero/nonzero active mismatches by category, reference-only matches, invariant coverage, and PASS/BLOCKED verdict.

### Rollback notes

Validation is additive. If it fails, return findings to the owning task and re-run after corrections; do not weaken the scan or reclassify an asset solely to hide an active defect.

---

## Task R1-T17: Publish the Bounded Sprint 2 Readiness Contract

**Story/Outcomes:** RB-012, RB-014, RB-020, RB-021, RB-024, RB-025; AC-006, AC-008, AC-012; AO-06; R6  
**Type:** [S]  
**Execution:** [AFK]  
**Size:** M  
**Owner role:** Principal Product Manager with Architect and Principal Software Developer review  
**Recommended worker type:** Technical writer or QA Engineer  
**Depends on:** R1-T04, R1-T08, R1-T09, R1-T16 PASS

### Files/areas in scope

- Create `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/SPRINT-2-CONTRACT.md`.
- Read-only approved decisions, baseline evidence, source matrix, and guidance validation.

### Protected/out of scope

- No Sprint 2 implementation, framework selection, package change, workflow file, state tool, ledger/work-index change, or clean clone.

### Steps

1. Name all eight RB-020 work areas exactly.
2. Define prerequisites, allowed surfaces, required direct evidence, residual risks, stop conditions, and explicit exclusions.
3. State that Node policy is not compatibility evidence and that package/runtime implementation is deferred.
4. State that copied framework tests and generated state are not host-readiness evidence.
5. Include ledger/work-index freshness and clean-clone rehearsal as unverified Sprint 2 work.
6. State that Sprint 1 cannot claim test-, CI-, runtime-, clean-clone-, SDD-, customer-, or SaaS-readiness.
7. Tie each entry item to Sprint 1 evidence and unresolved owner/EM authorization.

### Verification commands/evidence

- Checklist eight-of-eight RB-020 items.
- Checklist prerequisites, allowed surfaces, evidence, risks, stop conditions, exclusions, and no-readiness statement.
- Search for language that implies implementation or validation already passed.
- `git diff --check -- spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/SPRINT-2-CONTRACT.md`

### Completion report

Report eight-of-eight coverage, entry prerequisites, deferred risks, exclusions, and explicit claims not made.

### Rollback notes

Remove only the unapproved contract draft or restore its prior reviewed version. Do not implement a missing contract item to make the document appear complete.

---

## Task R1-T18: Prepare and Authorize the Scoped Baseline Commit/PR

**Story/Outcomes:** RB-004-RB-008, RB-013, RB-022-RB-024; AC-002, AC-003, AC-007, AC-013; AO-02, AO-04, AO-07; R2, R4, R7  
**Type:** [S]  
**Execution:** [HITL]  
**Size:** M  
**Owner role:** Principal Software Developer; human owner authorizes irreversible Git action under the approved policy  
**Recommended worker type:** Dev Env Manager for staging review, not autonomous commit authority  
**Depends on:** R1-T17

### Files/areas in scope

- Only paths explicitly approved in R1-T01 and listed in `ASSET-MANIFEST.md` as retained/removed Sprint 1 baseline assets.
- Update ending section of `evidence/GIT-BASELINE.md` after the approved commit/PR result exists.

### Protected/out of scope

- `.env`, `.env.*` secrets, `*.db`, runtime data, logs, caches, `server/`, `public/`, `package.json`, lockfiles, `.npmrc`, tests, CI, state tools, ledger/work-index mechanics, backlog, and unrelated dirty files.
- No broad staging and no commit/push/PR unless explicitly authorized by the approved Git policy and owner record.

### Steps

1. Generate a path allowlist from completed tasks and compare it to the asset manifest.
2. Review staged intent path by path before staging. Exclude unrelated changes even if they predate the sprint.
3. Stage only explicit paths using individual pathspecs; never use repository-wide add.
4. Review `git diff --cached --name-status`, `--stat`, and content for secrets/data and protected surfaces.
5. Obtain the required human authorization for commit/push/PR under the approved policy.
6. Create the approved baseline commit/PR only after authorization; capture exact resulting SHA, branch, upstream, PR/check state where applicable.
7. If no commit is authorized, record AC-002 as blocked; do not invent an ending SHA or call the working tree reproducible.

### Verification commands/evidence

- `git status --short --branch`
- `git diff --cached --name-status`
- `git diff --cached --stat`
- `git diff --cached -- . ':(exclude).env' ':(exclude)*.db'`
- `git rev-parse HEAD` after authorized commit.
- `git ls-files '*.db' '.env' '.env.*'` reviewed for prohibited additions.
- Evidence: authorization reference, exact SHA, branch/upstream, and PR/check reference if required.

### Completion report

Report allowlisted staged paths, excluded unrelated paths, secret/data scan result, authorization, exact SHA, and PR/check status. State clearly if blocked before commit.

### Rollback notes

Before commit, unstage only Sprint 1 paths with non-destructive index operations and preserve working files. After commit, use normal reviewed revert/PR correction; never force-push, rewrite shared history, or delete unpreserved evidence.

---

## Task R1-T19: Run Final Acceptance and Scope Verification

**Story/Outcomes:** RB-001-RB-025; AC-001-AC-014 except report delivery finalized in R1-T20; AO-01-AO-07; R7  
**Type:** [S]  
**Execution:** [AFK]  
**Size:** L  
**Owner role:** QA Engineer + Principal Software Developer; Product Manager verifies acceptance boundary  
**Recommended worker type:** QA Engineer  
**Depends on:** R1-T18 with exact baseline SHA

### Files/areas in scope

- Create `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ACCEPTANCE.md`.
- Read-only full repository status, scoped baseline diff, approved active guidance, required Sprint 1 assets, and protected application blob comparison.

### Protected/out of scope

- No fixes, staging, commits, app execution claims, copied framework tests as host proof, or Sprint 2 mechanics.

### Steps

1. Verify owner-gate chronology and amendment re-baselining evidence.
2. Review the complete scoped diff from start SHA to approved end SHA and classify every changed path.
3. Verify current `git status`; explain every remaining entry and confirm no unrelated application/runtime data was staged.
4. Search manifest-derived active guidance for incompatible stack/path/Git terms.
5. Check identity, docs facts, asset dispositions, lifecycle/pack integrity, and protected behavior rules.
6. Verify required evidence assets and Sprint 2 contract are present at the end SHA.
7. Compare `server/`, `public/`, `package.json`, lockfile, application data/schema, connectors, and approval surfaces to R1-T02 baseline; require zero Sprint 1 behavior-file changes.
8. Verify `.env` and `*.db` are absent from the Sprint 1 commit.
9. Mark AC-001 through AC-014 PASS/FAIL/PARTIAL with direct evidence. Any non-PASS blocks close.
10. Record explicitly that `npm test`, CI, smoke tests, runtime matrix, state tools, ledger/work-index final verification, and clean-clone execution were not run as Sprint 1 readiness proof.

### Verification commands/evidence

- `git diff --name-status <start-sha>..<end-sha>`
- `git diff --stat <start-sha>..<end-sha>`
- `git status --short --branch`
- `git diff <start-sha>..<end-sha> -- server public package.json package-lock.json .npmrc`
- `git diff --name-only <start-sha>..<end-sha> -- '*.db' '.env' '.env.*'`
- Manifest-derived `Select-String` scans for RB-016 terms and conflicting Git language.
- Presence checks for decision, baseline, manifest, source matrix, validation, Sprint 2 contract, and acceptance evidence.
- `git diff --check <start-sha>..<end-sha>`.

### Completion report

Report AC matrix, changed-path classification, Git status explanation, active-guidance scan counts, required-asset presence, protected-surface zero-diff evidence, prohibited-file result, and close eligibility.

### Rollback notes

Acceptance evidence is additive. A failure returns to the owning task and requires a new reviewed baseline commit/PR plus full re-run. Do not patch files inside validation or mark `PARTIAL` as closeable.

---

## Task R1-T20: Complete Sprint EM Report-Up and Close/Block Recommendation

**Story/Outcomes:** RB-021, RB-023, RB-025; AC-014; AO-08; R8  
**Type:** [S]  
**Execution:** [HITL]  
**Size:** M  
**Owner role:** Sprint Executive Manager, reporting to Project Executive Manager  
**Recommended worker type:** None; Sprint EM coordination duty  
**Depends on:** R1-T19

### Files/areas in scope

- Create a dated completed report beside the template, for example `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/REPORT-UP-2026-07-10.md`.
- Read-only `REPORT_UP_TEMPLATE.md`, acceptance evidence, decision record, baseline/manifest, and Sprint 2 contract.

### Protected/out of scope

- Do not edit the template, `PLAN.md`, `BOARD.md`, `SPEC.md`, onboarding, constitution, application, or prior evidence.
- Sprint EM cannot authorize Sprint 2 or communicate project-wide status directly to the owner.

### Steps

1. Copy every template section without deletion and replace every placeholder or use an explicit not-applicable reason.
2. Map R1-R8 and AO-01-AO-08 to direct evidence.
3. Distinguish observed baseline, approved decisions, completed work, deferred Sprint 2 mechanics, and unresolved blockers.
4. Report commit/PR/status facts without implying a clean clone was executed.
5. Make no full-readiness, customer-validation, or SaaS-completion claim.
6. If all acceptance criteria PASS, recommend only that the project EM consider Sprint 2 planning. Otherwise recommend keeping Sprint 1 open or re-baselining.
7. Record report-up date and project EM acknowledgment/pending state.

### Verification commands/evidence

- Confirm all ten report sections exist.
- Confirm all R and AO rows have direct evidence and no placeholders remain.
- Search for unsupported `fully ready`, `customer validated`, `SaaS complete`, or Sprint 2 checks described as passed.
- `git diff --check -- <completed-report-path>`.

### Completion report

Report close recommendation, acceptance result, carried blockers/risks, report path, handoff date, and project EM acknowledgment state.

### Rollback notes

Correct report errors through a dated revision. Do not alter underlying evidence to support a preferred status and do not close with any non-PASS Sprint 1 criterion.

## 7. Sprint EM Checkpoints

| Checkpoint | Trigger | Required report to Sprint EM | Stop condition |
|---|---|---|---|
| CP-0 Gate | R1-T01 completed | Five dispositions, explicit start authorization, amendment/re-baseline result | Any item pending/ambiguous/undated |
| CP-1 Baseline | R1-T02 completed | Start SHA, status classes, protected-surface hashes/blob IDs, evidence completeness | Secret/data exposure risk or incomplete cleanup evidence |
| CP-2 Identity and authority | R1-T05-R1-T09 completed | Three-layer wording, constitution authority, PM inconsistency matrix, single Git/runtime policy status | Unapproved constitution change or equal-authority conflict |
| CP-3 Fleet validity | R1-T10-R1-T16 completed | Active/inactive counts, pack integrity, mismatch scan, invariant scan | Any incompatible active guidance or unresolved Sprint EM route |
| CP-4 Sprint 2 handoff | R1-T17 completed | Eight deferred areas, prerequisites, risks, stop conditions, exclusions | Contract implies mechanics exist or passed |
| CP-5 Git baseline | R1-T18 completed | Allowlisted paths, excluded dirty paths, authorization, exact SHA/PR/check state | Broad staging, protected path, `.env`, `*.db`, or missing authorization |
| CP-6 Acceptance | R1-T19 completed | AC-001-AC-014 matrix and scope-diff evidence | Any FAIL/PARTIAL/UNKNOWN or missing direct evidence |
| CP-7 Report-up | R1-T20 completed | Completed report and recommendation to project EM | Premature readiness/close claim |

At any checkpoint, the Sprint EM routes rather than implements. A blocked checkpoint must be reported to the project Executive Manager using the required concise decision/escalation discipline.

## 8. Requirements-to-Tasks Traceability

| Requirement | Tasks | Acceptance criteria | Evidence |
|---|---|---|---|
| RB-001 | R1-T01, R1-T09, R1-T19 | AC-001 | Owner chronology, source matrix, acceptance matrix |
| RB-002 | R1-T01, R1-T20 | AC-001, AC-014 | Dated five-item decision and report-up |
| RB-003 | R1-T01, R1-T07, R1-T08, R1-T19 | AC-001 | Re-baseline/re-review evidence and governed amendments |
| RB-004 | R1-T02, R1-T03, R1-T18, R1-T19 | AC-002 | Start/end SHA, before/after status, manifests, reproduction procedure |
| RB-005 | R1-T03, R1-T04, R1-T19 | AC-003 | Root onboarding disposition and provenance |
| RB-006 | R1-T02-R1-T04, R1-T19 | AC-003 | Temporary-artifact inventory, preservation, disposition |
| RB-007 | R1-T03, R1-T04, R1-T19 | AC-003 | Verified host identity record classification |
| RB-008 | R1-T03, R1-T10, R1-T11, R1-T19 | AC-003, AC-009 | Adopted-asset manifest and deterministic lifecycle records |
| RB-009 | R1-T05-R1-T07, R1-T16, R1-T19 | AC-004 | Three-layer source and consistency scan |
| RB-010 | R1-T05, R1-T16, R1-T19 | AC-004 | Host `CONTEXT.md` and identity scan |
| RB-011 | R1-T05-R1-T07, R1-T16, R1-T19 | AC-005 | SQLite/seven-workflow/eight-route source comparison |
| RB-012 | R1-T09, R1-T17, R1-T20 | AC-006, AC-012, AC-014 | Source matrix and explicit carries |
| RB-013 | R1-T08, R1-T12-R1-T16, R1-T19 | AC-007 | Approved policy and contradiction scan |
| RB-014 | R1-T05, R1-T07, R1-T17, R1-T19 | AC-008 | Policy documentation, unchanged package/runtime diff, Sprint 2 validation carry |
| RB-015 | R1-T03, R1-T10-R1-T16 | AC-009, AC-010 | Default-safe manifests and active-source validation |
| RB-016 | R1-T12-R1-T16 | AC-010 | Host-invalid guidance scan |
| RB-017 | R1-T03, R1-T10, R1-T11, R1-T16 | AC-009, AC-010 | Reference/framework classifications and pack exclusion |
| RB-018 | R1-T03, R1-T09-R1-T11, R1-T16 | AC-009, AC-010 | Count reconciliation and pack integrity |
| RB-019 | R1-T05, R1-T06, R1-T12-R1-T16, R1-T19 | AC-011 | Invariant scan and protected-surface diff |
| RB-020 | R1-T09, R1-T17, R1-T20 | AC-012 | Eight-area bounded Sprint 2 contract |
| RB-021 | R1-T05, R1-T07-R1-T08, R1-T17, R1-T19-R1-T20 | AC-008, AC-012-AC-014 | No-readiness statements and scope evidence |
| RB-022 | R1-T02-R1-T04, R1-T16, R1-T18-R1-T19 | AC-002, AC-011, AC-013 | Redacted evidence, prohibited-file/staging scans |
| RB-023 | R1-T03, R1-T07-R1-T17, R1-T19-R1-T20 | AC-009, AC-014 | Requirement/outcome/evidence links and provenance |
| RB-024 | R1-T02-R1-T04, R1-T17-R1-T19 | AC-002, AC-012 | Portable procedure and explicit clean-clone deferral |
| RB-025 | R1-T02, R1-T05-R1-T11, R1-T16-R1-T20 | AC-006, AC-014 | Explicit pending/deferred/unverified/freshness states |

## 9. Acceptance-Criteria Coverage

| Acceptance criterion | Primary tasks | Final verifier |
|---|---|---|
| AC-001 | R1-T01, R1-T09 | R1-T19 |
| AC-002 | R1-T02, R1-T03, R1-T18 | R1-T19 |
| AC-003 | R1-T03, R1-T04, R1-T18 | R1-T19 |
| AC-004 | R1-T05-R1-T07, R1-T16 | R1-T19 |
| AC-005 | R1-T05-R1-T07, R1-T16 | R1-T19 |
| AC-006 | R1-T09, R1-T17 | R1-T19 |
| AC-007 | R1-T08, R1-T12-R1-T16 | R1-T19 |
| AC-008 | R1-T05, R1-T07, R1-T17 | R1-T19 |
| AC-009 | R1-T03, R1-T10, R1-T11, R1-T16 | R1-T19 |
| AC-010 | R1-T10-R1-T16 | R1-T19 |
| AC-011 | R1-T05, R1-T06, R1-T12-R1-T16 | R1-T19 |
| AC-012 | R1-T17 | R1-T19 |
| AC-013 | R1-T18 | R1-T19 |
| AC-014 | R1-T19, R1-T20 | Project Executive Manager acknowledgment |

## 10. Critical Path

`R1-T01 -> R1-T02 -> R1-T05 -> R1-T07 -> R1-T08 -> R1-T10/R1-T11 -> R1-T12/R1-T13/R1-T14 -> R1-T15 -> R1-T16 -> R1-T17 -> R1-T18 -> R1-T19 -> R1-T20`

R1-T03/R1-T04 and R1-T06/R1-T09 join before validation/contract. The critical path cannot be shortened by dispatching overlapping constitution, roster, agent, or skill work concurrently.

## 11. Global Stop and Re-Baseline Conditions

Stop all execution and report through the Sprint EM when:

- R1-T01 is not an unambiguous PASS;
- an owner decision is superseded, rejected, or amended after this task baseline;
- PM-owned `PLAN.md`/`BOARD.md` or Architect-owned `SPEC.md` no longer matches the approved decision;
- intended file ownership differs from this plan or two tasks acquire a shared write path;
- a protected application/runtime/test/CI/state/ledger/backlog surface would change;
- cleanup would precede provenance capture or required evidence is inaccessible;
- `.env`, credentials, business data, or `*.db` could enter evidence or staging;
- constitution amendment authority is absent;
- an active agent/skill/pack remains incompatible or ambiguous;
- an ending exact SHA cannot be established under the approved Git policy;
- any acceptance result is FAIL, PARTIAL, UNKNOWN, DEFERRED, or unsupported; or
- Sprint 1 is represented as full SDD readiness, customer validation, hosted SaaS completion, or Sprint 2 mechanical readiness.

After any owner-policy change, repeat at minimum R1-T01, R1-T02, dependency/file-overlap analysis, and all affected reviews before resuming. Prior PASS evidence must be marked superseded rather than silently reused.
