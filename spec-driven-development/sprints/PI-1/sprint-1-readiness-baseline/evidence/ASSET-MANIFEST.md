# R1-T03 Adopted-Asset and Authority Manifest

## Scope and control

- Manifest date: `2026-07-10`.
- Baseline source: `evidence/GIT-BASELINE.md`, captured at HEAD `eff0b2de590ca49c66f55c8b92fe211b9da77389` on branch `sprint/pi-1-s1-readiness-baseline`.
- Authorized mutation: this file only, under `OWNER-DECISION-R1-T03-ASSET-MANIFEST-AUTHORIZATION-2026-07-10.md`.
- This is classification evidence, not activation, cleanup, staging, commit, push, merge, rebase, or authority to execute a disposition.
- Lifecycle rule: a source with missing, conflicting, or unverifiable activation metadata is inactive and classified `reference/example` until a later authorized reconciliation explicitly activates it.
- Disposition rule: `retain-adapt` means retain for later authorized host correction; it does not make current guidance safe to execute.

## Classification vocabulary

Every retained or proposed-removed surface has exactly one class:

1. `active host guidance`
2. `active framework-process guidance`
3. `proposed`
4. `reference/example`
5. `archival/historical`
6. `generated`
7. `runtime data`

## Authority order

| Rank | Authority surface | Authority and use |
|---:|---|---|
| 1 | Dated Level 2 owner decisions under `spec-driven-development/exec/briefings/` | Controlling authority for approved scope and irreversible actions. |
| 2 | Ratified host constitution under `spec-driven-development/constitution/` | Framework-process policy, subject to dated owner decisions and later governed amendments. |
| 3 | `project.config.json` | Host identity record only: owner, team, and repository URL. It does not authorize execution. |
| 4 | Active host instructions and current host documentation | Operational host guidance where consistent with ranks 1-3 and observed implementation. |
| 5 | Active framework-process agents, skills, prompts, and sprint artifacts | Process guidance only where current roster lifecycle, activation metadata, dependencies, and host validity agree. Active status alone does not authorize automatic dispatch or current execution, satisfy dependencies, or make a dependency-blocked asset executable. |
| 6 | Proposed, reference/example, archival, generated, and runtime surfaces | Non-authoritative for active execution. |

## Host identity verification

Read-only comparison used `project.config.json` and the sanitized output of `git remote get-url origin`. No credential-bearing URL, environment value, or secret was read or printed.

| Field | Local identity value | Remote/evidence comparison | Result |
|---|---|---|---|
| `owner` | `Rodolfo Lerma` | Dated owner decisions name Rodolfo Lerma; remote account slug is consistent but is not treated as a legal-name source. | Verified by owner records. |
| `team` | `Solo` | Remote URL cannot independently prove team membership; repository history and project records do not provide a conflicting team value. | Locally authoritative, externally unverifiable; no conflict observed. |
| `repo_url` | `https://github.com/rodolfolermacontreras/small-business-claude` | Sanitized origin is the same URL with optional `.git` suffix. | Exact normalized match. |

`project.config.json` is therefore retained as `active host guidance`, below dated owner decisions. The `team` field remains a local identity assertion rather than a remote-verified fact.

## Retained surfaces

The rows below are deterministic and non-overlapping within each listed root. Counts refer to the R1-T02 baseline unless a row explicitly says it is a tracked authority surface or post-baseline evidence.

| Surface or deterministic category | Count | Class | Provenance | Intended authority | Owner role | R1-T02 tracked state | Secret/data risk | Intended baseline disposition |
|---|---:|---|---|---|---|---|---|---|
| `project.config.json` | 1 | active host guidance | Brownfield bootstrap identity input | Host identity below owner decisions | Human owner | Untracked | Low; identity and public repository URL only | Retain and track in later authorized baseline |
| `.github/copilot-instructions.md` | 1 | active host guidance | Adopted SDD host instruction | Session-level host context, subordinate to owner/constitution | Principal Architect | Untracked | Low | Retain-adapt under R1-T05 |
| `.github/instructions/*.instructions.md` | 2 | active framework-process guidance | Adopted SDD instruction layer | Path-scoped process guidance | Principal Architect | Untracked | Low | Retain-adapt |
| `.github/prompts/{analyze,ask,clarify,constitution,evolve,fleet,grill,implement,plan,qa,replan,retro,spec,state,tasks}.prompt.md` | 15 | active framework-process guidance | Adopted SDD command prompts; host-adapted under R1-T16 remediation | Active host-valid process entry points within governing gates | Owning Principals | Untracked | Low | Retain adapted; subject to R1-T16 QA and Architect review |
| `.github/prompts/{hire,triage,taskstoissues}.prompt.md` | 3 | reference/example | Adopted SDD command prompts with unavailable host mechanics or unmet product gates | Unavailable reference hard-stops; no lifecycle, prioritization, backlog commitment, or external issue-mirroring execution | Owning Principals | Untracked | Low | Retain unavailable until separate authorization and applicable host mechanical validation |
| `.github/agents/*.agent.md` with active roster lifecycle | 6 | active framework-process guidance | Adopted framework agents reconciled through R1-T10, R1-T12, and R1-T13 | Three executable task-gated generic workers; three active but dependency-blocked/non-executable Principals; no automatic dispatch or current execution | Principal Architect | Untracked | Low | Retain current roster-controlled lifecycle and gates |
| `.github/agents/*.agent.md` with reference/template roster lifecycle | 8 | reference/example | Adopted framework agents reconciled through R1-T10 | Inactive reference or non-executable template only | Principal Architect | Untracked | Low | Retain as rostered reference/template assets |
| `.github/skills/**/SKILL.md` with active roster lifecycle | 7 | active framework-process guidance | Adopted framework skill library reconciled through R1-T11 | Active only within declared process scope and dependencies; activation does not independently authorize a write or dispatch | Principal Architect | Untracked | Low | Retain current roster-controlled lifecycle and gates |
| `.github/skills/**/SKILL.md` with inactive/reference roster lifecycle | 28 | reference/example | Adopted framework skill library reconciled through R1-T11 | Inactive, unavailable, framework-only, or reference guidance | Principal Architect | Untracked | Low | Retain as rostered inactive/reference bodies |
| `.github/skills/AI-AGENT-SUPER-SKILL.md` and `.github/skills/domain/README.md` | 2 | reference/example | Additional skill-library documentation outside the rostered `SKILL.md` body count | Reference documentation only; not skills or roster asymmetries | Principal Architect | Untracked | Low | Retain as reference documents |
| `.github/workflows/doctor.yml` | 1 | reference/example | Copied framework validation workflow | No host CI authority established | Principal Architect | Untracked | Medium; could execute in GitHub if activated | Retain inactive; CI is deferred |
| `spec-driven-development/CONTEXT.md`, `GENERALIZATION_SDD.md`, and `README.md` | 3 | active framework-process guidance | Adopted SDD navigation/context | Process navigation; host facts require reconciliation | Principal Architect | Untracked | Low | Retain-adapt |
| `spec-driven-development/archetypes/**` | 45 | reference/example | Framework archetype library | Selection/examples only | Principal Architect | Untracked | Low | Retain as reference |
| `spec-driven-development/backlog/BACKLOG.md` | 1 | active framework-process guidance | Adopted backlog state | PM-owned planning input | Principal Product Manager | Untracked | Low | Retain; no backlog mutation in R1-T03 |
| `spec-driven-development/cli/**` excluding `__pycache__/**` and `*.pyc` | 49 | reference/example | Copied framework CLI source and tests | Inactive until host validation; no Node host-readiness claim | Principal Software Developer | Untracked | Low | Retain inactive pending later validation |
| `spec-driven-development/cli/**/__pycache__/**` and `*.pyc` | 84 | generated | Local Python execution cache | None | Principal Software Developer | Untracked | Medium; machine/runtime metadata | Proposed remove under a separately authorized path-by-path cleanup, not R1-T04 controlled-artifact scope |
| `spec-driven-development/constitution/*.md` | 6 | active framework-process guidance | Adopted and ratified host constitution | Governing process policy, subordinate to dated owner decisions | Principal Architect | Untracked | Low | Retain; amendments belong to R1-T07/R1-T08 |
| `spec-driven-development/dispatches/.gitkeep` | 1 | generated | Empty-directory placeholder | None | Principal Software Developer | Untracked | None | Retain only if directory contract is retained |
| `spec-driven-development/docs/**` | 71 | reference/example | Framework ADRs, management history, examples, temp plans, and operating references | Non-authoritative unless separately promoted | Principal Architect | Untracked | Low | Retain as reference/history; later curation required |
| `spec-driven-development/exec/.owner`, dated owner decision/briefing records, and `sprint-progress.md` present in R1-T02 | 5 | active framework-process guidance | Current adoption execution evidence | Owner/EM authority and sprint evidence according to rank | Project Executive Manager | Untracked | Low | Retain and baseline |
| `spec-driven-development/exec/state.md` | 1 | generated | State-builder output/current execution state | Derived state, not policy | Project Executive Manager | Tracked modification | Low | Preserve existing owner work; do not stage or rewrite in R1-T03 |
| `spec-driven-development/feature-prompts/**` | 33 | archival/historical | Framework feature and sprint prompt history | Historical/reference only | Principal Product Manager | Untracked | Low | Retain as history pending later curation |
| `spec-driven-development/fleet/conflict-log.md` | 1 | active framework-process guidance | Framework fleet control | Conflict evidence when dispatch is authorized | Principal Software Developer | Untracked | Low | Retain |
| `spec-driven-development/ledger/**` excluding `__pycache__/**`, `*.pyc`, and `fleet.db` | 6 | reference/example | Framework ledger source, schema, tests, and policy | Inactive until host validation | Principal Software Developer | Untracked | Medium; schema may describe dispatch metadata | Retain inactive; validation deferred |
| `spec-driven-development/ledger/**/__pycache__/**` and `*.pyc` | 9 | generated | Local Python execution cache | None | Principal Software Developer | Untracked | Medium; machine/runtime metadata | Proposed remove only under separate cleanup authority |
| `spec-driven-development/ledger/fleet.db` | 1 | runtime data | Local ignored dispatch ledger | Runtime data, never documentation authority | Principal Software Developer | Ignored | High; database content excluded | Retain locally or dispose only under separate authority; never stage |
| `spec-driven-development/roster/*.json` | 3 | active framework-process guidance | Adopted lifecycle manifests | Reconciliation input, not self-proving activation | Principal Architect | Untracked | Low | Retain-adapt under R1-T10/R1-T11 |
| `spec-driven-development/sessions/**` | 5 | archival/historical | Framework session and research history | Historical only | Project Executive Manager | Untracked | Medium; may contain contextual history | Retain as history; review before any baseline staging |
| `spec-driven-development/sprints/README.md` and `lessons-template.md` | 2 | reference/example | Framework sprint templates/navigation | Reference only | Principal Product Manager | Untracked | Low | Retain |
| `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/{BOARD,KICKOFF_PROMPT,ONBOARDING,PLAN,REPORT_UP_TEMPLATE,SPEC,TASKS}.md` | 7 | active framework-process guidance | Current Sprint 1 package | Current sprint control within owner authorization | Owning Principals and Sprint EM | Untracked | Low | Retain and baseline after gates |
| `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GIT-BASELINE.md` | 1 | active framework-process guidance | R1-T02 additive evidence | Baseline evidence only | Principal Software Developer | Post-baseline untracked | Low; redacted metadata only | Retain and baseline after gates |
| `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md` | 1 | active framework-process guidance | R1-T03 additive evidence | Asset classification evidence only | Principal Software Developer | Absent at R1-T02; authorized creation | Low; no secret/business/database contents | Retain and baseline after gates |
| `spec-driven-development/templates/**` | 14 | reference/example | Framework document templates | Reference until selected by an active process | Owning Principals | Untracked | Low | Retain as reference |
| `README.md`, `docs/AGENT_ONBOARDING.md`, `docs/KICK_OFF.md`, `docs/PROJECT_STATUS.md`, `docs/PRODUCT_ROADMAP.md` | 5 | active host guidance | Existing brownfield host documentation | Host/product guidance subject to owner decisions and current facts | Principal Product Manager | Tracked and unchanged in R1-T02 | Low | Retain; R1-T05/R1-T06 own authorized reconciliation |
| `.env` | 1 | runtime data | Local host configuration | Runtime only | Human owner | Ignored | Critical; secrets | Retain locally, never read, print, inventory by content, stage, or commit |
| `server/data.db` | 1 | runtime data | Local application SQLite database | Runtime only | Human owner | Ignored | Critical; business/application data | Retain locally, never read, print, stage, or commit |

### Baseline coverage check

The R1-T02 untracked adoption population is fully partitioned as follows:

- `.github/`: 73 paths = 1 active host guidance + 30 active framework-process guidance + 42 reference/example (`1 + 30 + 42 = 73`). This is the current reconciled classification of the fixed R1-T02 path population; the original R1-T03 classification remains historical chronology rather than a present-tense conclusion.
- `spec-driven-development/`: 346 paths = 27 active framework-process guidance + 187 reference/example + 38 archival/historical + 94 generated. The exact R1-T02 path list remains authoritative.
- Root adoption-support: 9 paths = 1 active host guidance + 8 proposed.
- Total R1-T02 untracked paths: 428.

Because deterministic directory categories can include post-baseline additions, path membership is controlled by the exact R1-T02 list in `GIT-BASELINE.md`; this manifest does not silently expand cleanup scope.

## Agent manifest and mismatch accounting

The original R1-T03 observations in this section were historical findings from before R1-T10, R1-T12, and R1-T13 reconciliation. Current roster authority accounts for all 14 agent bodies in `agents.json`: six are active and eight are reference/template. The six active bodies comprise three executable task-gated generic workers and three active Principals that remain dependency-blocked and non-executable. Active status does not imply automatic dispatch, current execution, satisfied dependencies, or executable authority beyond the roster's explicit gates.

| Agent path | Roster state | Observed mismatch/default | Class | Disposition |
|---|---|---|---|---|
| `.github/agents/principal-executive-manager.agent.md` | Rostered; active | Host-adapted but handoff/skill dependencies and PSD revalidation remain unsatisfied | active framework-process guidance | Active dependency-blocked/non-executable Principal; retain gates |
| `.github/agents/principal-product-manager.agent.md` | Rostered; active | Host-adapted but handoff/skill dependencies and PSD revalidation remain unsatisfied | active framework-process guidance | Active dependency-blocked/non-executable Principal; retain gates |
| `.github/agents/principal-architect.agent.md` | Rostered; active | Host-adapted but handoff/skill dependencies and PSD revalidation remain unsatisfied | active framework-process guidance | Active dependency-blocked/non-executable Principal; retain gates |
| `.github/agents/developer-general.agent.md` | Rostered; active | Compatible body; execution requires PSD validation and separate task authorization | active framework-process guidance | Executable task-gated generic worker; no automatic dispatch or Git authority |
| `.github/agents/ux-designer-general.agent.md` | Rostered; active | Compatible body; execution requires PSD validation and separate task authorization | active framework-process guidance | Executable task-gated generic worker; no automatic dispatch or Git authority |
| `.github/agents/qa-engineer-general.agent.md` | Rostered; active | Compatible body; execution requires PSD validation and separate task authorization | active framework-process guidance | Executable task-gated generic worker; no automatic dispatch or Git authority |
| `.github/agents/principal-software-developer.agent.md` | Rostered; inactive | Body retains incompatible framework/Day-to-Day assumptions | reference/example | Inactive reference pending separate adaptation and validation |
| `.github/agents/principal-cloud-security-architect.agent.md` | Rostered; inactive | No approved Small-Business-Claude cloud scope | reference/example | Inactive conditional-future reference |
| `.github/agents/principal-ui-designer.agent.md` | Rostered; inactive | Prior framework visualization provenance; not hired for this host | reference/example | Inactive framework reference |
| `.github/agents/data-scientist-general.agent.md` | Rostered; inactive | No current host need; incompatible inherited assumptions | reference/example | Inactive reference; deterministic calculations remain server-owned |
| `.github/agents/developer-cli-specialist-1.agent.md` | Rostered; inactive | Framework CLI specialization is distinct from the host application | reference/example | Inactive framework-only reference |
| `.github/agents/dev-env-manager-general.agent.md` | Rostered; inactive | Prior framework host-link provenance; no host dispatch authorized | reference/example | Inactive framework-only reference |
| `.github/agents/sprint-executive-manager.agent.md` | Rostered; inactive | Current sequencing uses the owner-approved PSD route; body is not validated for execution | reference/example | Inactive sprint-coordination reference; no inferred authority |
| `.github/agents/_TEMPLATE-worker.agent.md` | Rostered; template/inactive | Placeholder, not an agent identity | reference/example | Non-executable template; separate hire workflow required for a concrete identity |

Roster-to-file check: 14 roster entries, 14 agent bodies, 0 roster paths missing on disk, 0 bodies unrostered. Current classification is 6 active bodies and 8 reference/template bodies, with zero body-to-roster asymmetries.

## Skill manifest and mismatch accounting

The original R1-T03 mismatch observations were historical findings from before R1-T11 reconciliation. Current roster authority accounts for all 35 `SKILL.md` bodies: seven are active framework-process guidance and 28 are inactive/reference. `AI-AGENT-SUPER-SKILL.md` and `domain/README.md` are two additional reference documents outside the rostered `SKILL.md` body count; they are not active skills, rostered skill bodies, or roster asymmetries.

| Skill category | Files | Rostered | Class | Mismatch/default and disposition |
|---|---:|---:|---|---|
| `.github/skills/core/*/SKILL.md` | 6 | 6 | 2 active framework-process; 4 reference/example | `sdd-constitution` and `constitution-sync` are active. The other four are inactive/reference or unavailable under roster gates. |
| `.github/skills/domain/*/SKILL.md` | 3 | 3 | reference/example | All three are inactive/reference Day-to-Day Python/FastAPI/HTMX/pytest examples. |
| `.github/skills/engineering/*/SKILL.md` | 5 | 5 | reference/example | All five are inactive/reference pending applicable host adaptation or Sprint 2 test mechanics. |
| `.github/skills/operational/*/SKILL.md` | 13 | 13 | 4 active framework-process; 9 reference/example | `lesson-capture`, `respect-existing`, `em-communication-discipline`, and `stakeholder-pressure-defense` are active within their declared gates; nine are inactive/reference. |
| `.github/skills/workflow/*/SKILL.md` | 8 | 8 | 1 active framework-process; 7 reference/example | `grill-me` is active; seven are inactive/reference, incompatible, or unavailable. |

Roster-to-file check: 35 roster entries, 35 `SKILL.md` bodies, 0 roster paths missing on disk, 0 bodies unrostered. The seven active plus 28 inactive/reference bodies equal 35. The two additional non-`SKILL.md` reference documents remain outside this body-to-roster comparison.

### Skill-pack reconciliation

All five packs exist in `skill_packs.json`; zero packs are active. Pack presence or membership does not imply active-pack status, activation, dispatch, or executable authority.

| Pack | Members | Observed mismatch | Disposition |
|---|---|---|---|
| `frontend` | `htmx-frontend`, `testing-conventions`, `git-workflow` | Retired; incompatible Day-to-Day HTMX/Jinja2, pytest, and stale Git composition | Inactive reference; no replacement inferred |
| `backend` | `fastapi-routes`, `testing-conventions`, `git-workflow` | Retired; incompatible FastAPI/Pydantic, pytest, and stale Git composition | Inactive reference; no replacement inferred |
| `full-stack` | 7 listed skills | Retired; incompatible Day-to-Day Python/FastAPI/pytest/HTMX composition | Inactive reference; no replacement inferred |
| `planning` | 5 listed skills | Lifecycle inactive and activation unavailable pending member review, discovery gate, and PM authorization | Inactive/unavailable; member presence grants no pack authority |
| `review` | 3 listed skills | Retired; Python/pytest and Day-to-Day review composition remains incompatible | Inactive reference pending separately governed host mechanics |

Cross-reference reconciliation: all referenced agent and skill bodies are rostered, including `pre-work-check`. Agent prose, dependency references, and pack membership do not override roster lifecycle or activation metadata. Inactive/unavailable dependencies remain unsatisfied, which keeps the three active Principals dependency-blocked and non-executable.

## Proposed removed or disposition-controlled surfaces for R1-T04

R1-T04 may act only after rechecking the exact owner decision, preservation evidence, and this table. This section proposes no deletion itself.

| Controlled path | Count | Class | Provenance | Owner-approved intended disposition | Required preservation/stop condition |
|---|---:|---|---|---|---|
| Root `AGENT_ONBOARDING.md` worktree deletion | 1 tracked path | archival/historical | Original tracked root onboarding; index blob recorded in R1-T02 | Preserve evidence, then keep approved deletion in favor of `docs/AGENT_ONBOARDING.md` | Preserve source path, index blob/hash, date, authority, and disposition before finalizing; stop on mismatch |
| `.sdd-archaeology.json` | 1 | proposed | Brownfield archaeology output; SHA-256 recorded in R1-T02 | Preserve needed non-secret evidence, then remove | Do not copy secrets/business data; stop if content risk cannot be ruled out safely |
| `.sdd-proposal/constitution/*.md` | 6 | proposed | Bootstrap proposal constitution superseded by adopted constitution; hashes recorded in R1-T02 | Preserve needed evidence, then remove | Preserve provenance/hash and supersession rationale; compare decision before removal |
| `CON` | 1 | proposed | Temporary/adoption-support artifact; hash recorded in R1-T02 | Preserve needed evidence, then remove | Stop on access, provenance, or data-risk uncertainty |

`project.config.json` is explicitly retained, not proposed removed.

Generated Python caches are proposed cleanup candidates but are not added to the R1-T04 controlled-path allowlist by this manifest. Their removal requires separate exact authorization because R1-T04 names only the controlled onboarding/adoption artifacts above.

## Data exclusions

- `.env`: path/ignore metadata only; content excluded.
- `server/data.db`: path/size/ignore metadata only; database content excluded.
- `spec-driven-development/ledger/fleet.db`: path/size/ignore metadata only; database content excluded.
- `server/data/*.json`: application/business data content not inventoried; protected by the R1-T02 blob baseline and outside R1-T03.
- Credentials, API keys, connector records, business records, database rows/schema contents, and secret-bearing remote forms were not read or reproduced.
- Temporary artifacts were classified from R1-T02 metadata and authorized governance records; this task did not print their contents.

## Completeness verdict and next gate

- Agent files: 14/14 accounted for and rostered; 6 active bodies comprise 3 executable task-gated generic workers and 3 active dependency-blocked/non-executable Principals; 8 are reference/template; 0 body-to-roster asymmetries.
- Skill files: 35/35 `SKILL.md` bodies accounted for and rostered; 7 active framework-process bodies and 28 inactive/reference bodies; 0 body-to-roster asymmetries.
- Additional skill documents: 2/2 accounted for as reference documents outside the rostered `SKILL.md` body count (`AI-AGENT-SUPER-SKILL.md` and `domain/README.md`); neither is a roster asymmetry or active skill.
- Skill packs: 5/5 accounted for; 0 active packs. Presence and membership convey no activation, dispatch, or executable authority.
- Current special dispositions: `pre-work-check` is rostered but unavailable; Sprint EM is rostered but inactive; the worker template is rostered and non-executable; incompatible Day-to-Day/Python and stale Git material remains inactive/reference. No current roster/file mismatch remains.
- Root temporary/adoption-support paths: 9/9 accounted for; 1 retained identity record and 8 proposed removed.
- Ignored sensitive/runtime categories: 3/3 accounted for without content access.
- Unmatched items remaining after classification: none. There are zero body-to-roster asymmetries; the two additional reference skill documents are explicitly outside the rostered `SKILL.md` count.
- Deterministic disposition: the original R1-T03 classification is preserved as historical chronology, and the present-tense agent, skill, pack, cross-reference, completeness, and `.github/` aggregate conclusions are reconciled to current roster authority. No active status by itself authorizes dispatch or execution.

## Explicit excluded-action confirmation

R1-T03 created/populated only this manifest. It did not clean, restore, move, delete, activate, or edit any other asset; stage or commit any file; push, merge, or rebase; create a branch or worktree; touch `server/`, `public/`, package/lock files, application behavior, Sprint 2 surfaces, secrets, databases, or business data; or dispatch a worker.

## R1-T04 completed dispositions

R1-T04 executed on `2026-07-10` under
`OWNER-DECISION-R1-T04-R1-T06-R1-T15-JOIN-WAVE-AUTHORIZATION-2026-07-10.md`.
Preservation and hash verification completed before removal. Detailed provenance, safety
summaries, source identifiers, and preservation identifiers are recorded in
`evidence/onboarding/PROVENANCE.md`.

| Controlled path | Preservation reference | Final disposition |
|---|---|---|
| Root `AGENT_ONBOARDING.md` | `evidence/onboarding/root-AGENT_ONBOARDING.md`; source/evidence Git blob `7bca49a1a9c0a6f860874372b50cf3fb128e2abb` | Existing tracked worktree deletion preserved; file not restored |
| `.sdd-archaeology.json` | Metadata and non-secret summary in `evidence/onboarding/PROVENANCE.md`; SHA-256 `7929DEB03105F915A7D27EDA5B946F1A58EF29FD8B6287E518A9ABC709CE6B66` | Removed after access, hash, provenance, and safety verification |
| `.sdd-proposal/constitution/decision-policy.md` | `evidence/onboarding/sdd-proposal-constitution/decision-policy.md`; SHA-256 `DBB7C919B012ABAFDDE6761BD88FDD0FDEDA2E0340DBD2E3738C3947E02AC097` | Removed after exact-copy verification |
| `.sdd-proposal/constitution/mission.md` | `evidence/onboarding/sdd-proposal-constitution/mission.md`; SHA-256 `82897966D8991B2A2F002452F40046CA57580D2270B9F2CFBAEFE58B44840214` | Removed after exact-copy verification |
| `.sdd-proposal/constitution/principles.md` | `evidence/onboarding/sdd-proposal-constitution/principles.md`; SHA-256 `E1F50891829186EEBFD7704BAC17DBAD769828B993F95E25E4ADD9C737A4ABFD` | Removed after exact-copy verification |
| `.sdd-proposal/constitution/quality-policy.md` | `evidence/onboarding/sdd-proposal-constitution/quality-policy.md`; SHA-256 `C233D32857B3ACD0EFAC8E8828AED104CEC366FA0F1A8EBE7EAA2AE1F3D4E327` | Removed after exact-copy verification |
| `.sdd-proposal/constitution/roadmap.md` | `evidence/onboarding/sdd-proposal-constitution/roadmap.md`; SHA-256 `7A9C37FFAC9C1FCC79E11AC53D70BC4AC1DCB840287F6632B4A22E9B8E4FAF7D` | Removed after exact-copy verification |
| `.sdd-proposal/constitution/tech-stack.md` | `evidence/onboarding/sdd-proposal-constitution/tech-stack.md`; SHA-256 `B84D53E77E6552346052C493CA335AA514DF4DC6DB6EC9C945893C6E03BCDFF4` | Removed after exact-copy verification |
| Empty `.sdd-proposal/` directory | Six exact constitution copies and provenance above | Removed only after the six authorized files were removed and both proposal directories were empty |
| `CON` | Metadata and conservative non-secret summary in `evidence/onboarding/PROVENANCE.md`; SHA-256 `ECA37A18B53BDE3D1FD0AD939AD433DE8E1BF83E15707E359D811CDA04338CC2` | Removed after access, hash, provenance, and safety verification; raw content not preserved because a secret-related keyword was detected |
| `project.config.json` | Pre/post SHA-256 `2EF1A0EF804E5D5FBD6DC922C4A06DCEB55BBB49B90E38AC9ABACACE37D5702C` | Retained read-only and unchanged |

No generated cache, unrelated untracked path, application or package path, secret,
database, business-data path, connector-data path, ledger/progress/state path, or R1-T06/R1-T15
write-set path was removed or modified by R1-T04. No worker was dispatched.
