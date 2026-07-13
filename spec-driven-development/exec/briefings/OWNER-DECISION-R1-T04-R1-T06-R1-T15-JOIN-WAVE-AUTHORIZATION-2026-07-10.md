---
id: PI-1-S1-R1-T04-R1-T06-R1-T15-JOIN-WAVE-AUTHORIZATION-2026-07-10
type: owner-decision
date: 2026-07-10
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T04-R1-T06-R1-T15-bounded-concurrent-join-wave
supersedes: null
---

# PI-1 Sprint 1 R1-T04, R1-T06, and R1-T15 Join-Wave Authorization

## Decision Authority and Source

On 2026-07-10, human owner Rodolfo Lerma answered the pending PI-1 Sprint 1 join-wave decision request:

> Lets go, opton 1 is good

The immediately preceding request defined Option 1 as authorization for R1-T04, R1-T06, and R1-T15 concurrently on branch `sprint/pi-1-s1-readiness-baseline`, preserving exact owners and routes, disjoint write sets, preservation-before-removal, up to three task-specific `developer-general` dispatches by the Principal Software Developer, no automatic dispatch, no ledger mutation, and independent verification. This record is the authoritative dated Level 2 disposition of that decision.

## Combined Authorization Boundary

The owner authorizes R1-T04, R1-T06, and R1-T15 as a bounded concurrent join wave on branch `sprint/pi-1-s1-readiness-baseline`. Concurrent routing is permitted only because the three tasks retain explicit, disjoint write sets. Each task remains separately owned, routed, implemented, reviewed, verified, and reported. Authorization or failure of one task does not expand, invalidate, or otherwise alter either other task.

The Principal Software Developer may issue up to three task-specific `developer-general` dispatches: at most one for R1-T04, at most one for R1-T06 after the Principal Product Manager approves its brief, and at most one for R1-T15. Dispatch remains discretionary and must not occur automatically. This decision record does not dispatch a worker, execute a task, or mutate the ledger.

Read-only use of applicable governing project, constitution, sprint-task, evidence, and approved source context is permitted solely to prepare the exact task brief, perform the bounded work, review it, and conduct independent verification. Read-only context does not enter a task's write set and does not authorize secrets, databases, business data, connector data, application runtime validation, or any excluded operation.

## R1-T04: Preserve Onboarding Evidence and Apply Approved Artifact Dispositions

### Ownership and Route

- **Task owner:** Principal Software Developer.
- **Dispatch authority and mechanics:** Principal Software Developer.
- **Permitted implementer:** At most one task-specific executable `developer-general` dispatched by the Principal Software Developer.
- **Verification:** One independent PASS for R1-T04 is required before completion may be claimed.

### Exclusive Write Set

R1-T04 may create only:

- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/onboarding/PROVENANCE.md`
- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/onboarding/root-AGENT_ONBOARDING.md`
- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/onboarding/sdd-proposal-constitution/decision-policy.md`
- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/onboarding/sdd-proposal-constitution/mission.md`
- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/onboarding/sdd-proposal-constitution/principles.md`
- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/onboarding/sdd-proposal-constitution/quality-policy.md`
- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/onboarding/sdd-proposal-constitution/roadmap.md`
- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/onboarding/sdd-proposal-constitution/tech-stack.md`

After creating and validating those preservation artifacts, R1-T04 may update only:

- `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md`

Only after hashes, provenance, and safety verify, R1-T04 may preserve the already-recorded tracked deletion of root `AGENT_ONBOARDING.md` and remove only:

- `.sdd-archaeology.json`
- `.sdd-proposal/constitution/decision-policy.md`
- `.sdd-proposal/constitution/mission.md`
- `.sdd-proposal/constitution/principles.md`
- `.sdd-proposal/constitution/quality-policy.md`
- `.sdd-proposal/constitution/roadmap.md`
- `.sdd-proposal/constitution/tech-stack.md`
- the empty `.sdd-proposal/` directory after the six exact constitution files are removed
- `CON`

`project.config.json` remains read-only.

### Preservation and Safety Conditions

Preservation must complete before removal. The evidence must record hashes and provenance sufficient to verify each safely preserved artifact and disposition. For `.sdd-archaeology.json` and `CON`, preserve metadata and a non-secret summary rather than raw contents unless safe access and safe preservation of raw content are affirmatively established.

The task must stop per path if preservation, access, or data risk fails. A failure on one path does not authorize removal of that path, does not broaden access, and does not invalidate safely completed work on independently verified paths. Root `AGENT_ONBOARDING.md` must not be restored; its already-recorded tracked deletion is preserved.

R1-T04 has no authority to write any R1-T06 or R1-T15 file or any artifact outside this exact allowlist.

## R1-T06: Reconcile Active Onboarding and Project-Status Documentation

### Ownership and Route

- **Wording, scope, and acceptance owner:** Principal Product Manager.
- **Dispatch mechanics and scope-verification owner:** Principal Software Developer.
- **Permitted implementer:** One executable `developer-general` may implement only the Principal Product Manager-approved brief, if dispatched by the Principal Software Developer.
- **Required acceptance review:** Principal Product Manager.
- **Verification:** One independent PASS for R1-T06 is required before completion may be claimed.

### Exclusive Write Set

R1-T06 may modify only:

- `docs/AGENT_ONBOARDING.md`
- `docs/KICK_OFF.md`
- `docs/PROJECT_STATUS.md`

R1-T06 has no authority to restore or modify root `AGENT_ONBOARDING.md`, write any R1-T04 or R1-T15 file, or modify any artifact outside this exact allowlist.

### Acceptance Condition

The Principal Product Manager must approve the wording, scope, and acceptance brief before implementation begins. The Principal Software Developer must preserve the exact write boundary in dispatch and scope verification. After implementation and independent verification, the Principal Product Manager must perform the required acceptance review before completion may be claimed.

## R1-T15: Adapt Active Execution and Review Workflow Skills

### Ownership and Route

- **Task owner:** Principal Software Developer.
- **Dispatch authority and mechanics:** Principal Software Developer.
- **Permitted implementer:** One executable `developer-general` may implement, if dispatched by the Principal Software Developer.
- **Verification:** One independent PASS for R1-T15 is required before completion may be claimed.

### Exclusive Write Set

R1-T15 may modify only:

- `.github/skills/workflow/implement/SKILL.md`
- `.github/skills/engineering/code-review/SKILL.md`
- `.github/skills/operational/respect-existing/SKILL.md`

R1-T15 has no authority to write any R1-T04 or R1-T06 file, any roster or skill-manifest or skill-pack artifact, any other agent or skill body, or any artifact outside this exact allowlist.

## Disjoint Concurrent Write Sets

| Task | Authorized write set | Must not write |
|---|---|---|
| R1-T04 | Eight exact onboarding evidence files; then `evidence/ASSET-MANIFEST.md`; then only the exact controlled removals after preservation verification | R1-T06 files, R1-T15 files, `project.config.json`, root-onboarding restoration, and every other artifact |
| R1-T06 | `docs/AGENT_ONBOARDING.md`; `docs/KICK_OFF.md`; `docs/PROJECT_STATUS.md` | R1-T04 files, R1-T15 files, root `AGENT_ONBOARDING.md`, and every other artifact |
| R1-T15 | `.github/skills/workflow/implement/SKILL.md`; `.github/skills/engineering/code-review/SKILL.md`; `.github/skills/operational/respect-existing/SKILL.md` | R1-T04 files, R1-T06 files, rosters, manifests, packs, other bodies, and every other artifact |

Any need to cross a write boundary stops the affected task and returns through its owner and the applicable owner gate. Write ownership must not be broadened, exchanged, or combined.

## Explicit Exclusions

This decision does **not** authorize:

- execution of R1-T04, R1-T06, or R1-T15 by the Project Executive Manager;
- execution of any task through this decision record;
- automatic activation or dispatch of any worker, agent, skill, or route;
- more than one task-specific `developer-general` dispatch per task or more than three across this join wave;
- mutation of the fleet ledger;
- mutation of the work index, executive state, sprint progress, or any other generated state or progress artifact;
- any edit outside the three exact task write sets;
- broad cleanup or generated-cache removal;
- `git clean` or any equivalent broad removal;
- restoration of root `AGENT_ONBOARDING.md`;
- any change to `project.config.json`;
- any roster, agent-body, skill-manifest, or skill-pack change;
- any skill or agent change outside the three exact R1-T15 skill bodies;
- staging any file;
- creating a commit;
- pushing any branch or commit;
- opening or modifying a pull request;
- merging or rebasing;
- creating, deleting, switching, or otherwise modifying branches or worktrees;
- application or package changes;
- test, continuous-integration, or runtime-validation work;
- Sprint 2 work;
- access to or mutation of secrets, databases, business data, or connector data; or
- any authority inferred beyond the exact bounded join wave recorded here.

Existing Sprint 1 dependencies, protected surfaces, owner gates, evidence discipline, current-branch requirement, and review requirements remain in force. This authorization is not evidence that any task has started or completed.

## Required Ordered and Parallel Routing

The three task routes may begin concurrently on branch `sprint/pi-1-s1-readiness-baseline`, subject to these task-internal orders:

1. **R1-T04 route:** Route to the **Principal Software Developer** as task owner. The Principal Software Developer may dispatch at most one task-specific executable `developer-general`. Within R1-T04, create preservation evidence first; verify hashes, provenance, access, and safety; update `evidence/ASSET-MANIFEST.md`; only then preserve the already-recorded root-onboarding deletion and perform the exact path-by-path removals that passed safety checks. Obtain one independent R1-T04 PASS.
2. **R1-T06 route:** Route first to the **Principal Product Manager** for the wording, scope, and acceptance brief. After PM approval, route to the **Principal Software Developer** for dispatch mechanics and exact-scope verification; the Principal Software Developer may dispatch one executable `developer-general` to implement only the approved brief. Obtain one independent R1-T06 PASS, then return to the **Principal Product Manager** for required acceptance review.
3. **R1-T15 route:** Route to the **Principal Software Developer** as task owner. The Principal Software Developer may dispatch one executable `developer-general` for only the three authorized skill bodies. Obtain one independent R1-T15 PASS.

R1-T04, the PM-briefing portion of R1-T06, and R1-T15 may proceed in parallel. R1-T06 implementation must wait for PM brief approval. R1-T04 removals must wait for preservation, hash, provenance, access, and safety verification. Each task's independent PASS and completion report remain separate. Failure in one task does not invalidate or block independently valid results from the other two, except where a separately governing dependency or safety gate expressly requires otherwise.

These are authorization and routing instructions only. No task is executed, no worker is dispatched, and no ledger or generated state is mutated by this record or by the Project Executive Manager.
