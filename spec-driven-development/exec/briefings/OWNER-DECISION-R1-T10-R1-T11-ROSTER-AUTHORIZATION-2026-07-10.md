---
id: PI-1-S1-R1-T10-R1-T11-ROSTER-AUTHORIZATION-2026-07-10
type: owner-decision
date: 2026-07-10
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T10-and-R1-T11-bounded-parallel-roster-reconciliation
supersedes: null
---

# PI-1 Sprint 1 R1-T10 and R1-T11 Roster Authorization

## Decision Authority and Source

On 2026-07-10, human owner Rodolfo Lerma answered the pending combined PI-1 Sprint 1 R1-T10/R1-T11 decision request:

> lets go option 1

The immediately preceding decision request defined Option 1 as authorization for both bounded tasks to proceed together on branch `sprint/pi-1-s1-readiness-baseline`, while preserving separate task boundaries, ownership, and disjoint write sets. This record is the authoritative dated Level 2 disposition of that decision.

## Combined Authorization Boundary

The owner authorizes R1-T10 and R1-T11 together, with parallel routing permitted only because their write sets are explicit and disjoint. Each task remains independently bounded, owned, validated, and reported. Authorization of one task does not expand the other task's scope.

Read-only use of `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/ASSET-MANIFEST.md` and applicable agent and skill bodies is permitted solely as reconciliation input. Those sources are not in either task's write set.

## R1-T10: Agent Lifecycle Roster and Host Activation

### Ownership

- **Lifecycle validity owner:** Principal Architect.
- **Executable-set validation owner:** Principal Software Developer.

### Exclusive Write Set

R1-T10 may modify only:

- `spec-driven-development/roster/agents.json`

R1-T10 has no authority to modify either R1-T11 file or any other repository artifact.

### Authorized Purpose

Reconcile agent lifecycle, host scope, provenance, activation metadata, Sprint Executive Manager disposition, worker-template disposition, and executable-set validity within the bounded R1-T10 task requirements.

## R1-T11: Skill Lifecycle Roster and Skill Packs

### Ownership

- **Lifecycle and pack validity owner:** Principal Architect.

### Exclusive Write Set

R1-T11 may modify only:

- `spec-driven-development/roster/skills.json`
- `spec-driven-development/roster/skill_packs.json`

R1-T11 has no authority to modify the R1-T10 file or any other repository artifact.

### Authorized Purpose

Reconcile skill lifecycle, host scope, provenance, compatibility, activation metadata, skill-pack integrity, and work-index-dependent activation status within the bounded R1-T11 task requirements.

## Disjoint Parallel Write Sets

| Task | Authorized write set | Must not write |
|---|---|---|
| R1-T10 | `spec-driven-development/roster/agents.json` | R1-T11 files and every other artifact |
| R1-T11 | `spec-driven-development/roster/skills.json`; `spec-driven-development/roster/skill_packs.json` | R1-T10 file and every other artifact |

The tasks may be routed in parallel. Any need to cross these boundaries stops the affected task and returns through the applicable Principal and owner gate; it must not be resolved by broadening either write set.

## Explicit Exclusions

This decision does **not** authorize:

- execution of R1-T10 or R1-T11 by the Project Executive Manager;
- mutation of `ASSET-MANIFEST.md` or any other evidence file;
- edits to any agent body or skill body;
- cleanup or deletion of any file, directory, artifact, working-tree state, or repository state;
- staging any file;
- creating a commit;
- pushing any branch or commit;
- merging or rebasing;
- creating, deleting, or switching branches or worktrees;
- worker dispatch;
- ledger, generated-state, work-index, or other generated-artifact mutation;
- application, package, test, or CI work;
- Sprint 2 work; or
- any mutation outside the three explicitly authorized roster files.

Existing Sprint 1 scope, dependency, evidence-preservation, protected-surface, verification, review, and current-branch requirements remain in force. This authorization is not evidence that either task has started or completed.

## Required Parallel Routing

Route **R1-T10** to the **Principal Architect** for lifecycle validity, with the **Principal Software Developer** separately responsible for executable-set validation. Its only authorized write target is `spec-driven-development/roster/agents.json`.

Route **R1-T11** in parallel to the **Principal Architect** for lifecycle and skill-pack validity. Its only authorized write targets are `spec-driven-development/roster/skills.json` and `spec-driven-development/roster/skill_packs.json`.

Neither route authorizes worker dispatch or task execution by the Project Executive Manager. The two routes must preserve independent completion evidence and must not exchange or expand write ownership.
