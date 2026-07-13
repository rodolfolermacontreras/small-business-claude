---
id: PI-1-S1-R1-T12-R1-T13-R1-T14-G5-AUTHORIZATION-2026-07-10
type: owner-decision
date: 2026-07-10
authority: level-2-human-owner
owner: Rodolfo Lerma
status: authorized
scope: R1-T12-R1-T13-R1-T14-bounded-G5-parallel-agent-and-skill-body-adaptation
supersedes: null
---

# PI-1 Sprint 1 R1-T12, R1-T13, and R1-T14 G5 Parallel Authorization

## Decision Authority and Source

On 2026-07-10, human owner Rodolfo Lerma answered the pending combined PI-1 Sprint 1 R1-T12/R1-T13/R1-T14 decision request:

> Option 1 then

The immediately preceding decision request defined Option 1 as authorization for all three tasks to proceed together as a bounded G5 parallel batch on branch `sprint/pi-1-s1-readiness-baseline`, preserving separate owners, exclusive allowlists, independent validation, and no automatic roster activation. This record is the authoritative dated Level 2 disposition of that decision.

## Combined Authorization Boundary

The owner authorizes R1-T12, R1-T13, and R1-T14 together as the bounded G5 parallel batch. Parallel routing is permitted only because the three scopes have explicit, disjoint write sets. Each task remains separately owned, bounded, validated, reviewed, and reported. Authorization of one task does not expand either other task's scope.

Read-only use of applicable governing project, constitution, sprint-task, roster, agent, and skill context is permitted solely to perform the authorized adaptation and independent validation. Those sources are not added to any task's write set.

Completion of an agent-body or skill-body adaptation does not automatically activate, validate as executable, or change the lifecycle state of any agent, skill, roster entry, or skill pack. Any roster or activation change requires separate authority and applicable validation.

## R1-T12: Adapt Active Principal Coordination Agents

### Ownership

- **Task owner:** Principal Software Developer.
- **Required reviewer:** Principal Architect.

### Exclusive Write Set

R1-T12 may modify only:

- `.github/agents/principal-executive-manager.agent.md`
- `.github/agents/principal-product-manager.agent.md`
- `.github/agents/principal-architect.agent.md`

R1-T12 has no authority to modify either other G5 task's files or any other repository artifact.

### Authorized Purpose

Adapt only the three named principal coordination agent bodies to the approved Small-Business-Claude host context and governing Git and quality policy while preserving role-authority boundaries, the owner decision format, the three-layer product identity, the current host stack, and protected application invariants. Independent task validation and Architect review are required before any completion claim.

## R1-T13: Adapt Active Implementation and Review Workers

### Ownership

- **Task owner:** Principal Software Developer.

### Exclusive Write Set

R1-T13 may modify only:

- `.github/agents/developer-general.agent.md`
- `.github/agents/qa-engineer-general.agent.md`
- `.github/agents/ux-designer-general.agent.md`

R1-T13 has no authority to modify either other G5 task's files or any other repository artifact.

### Authorized Purpose

Adapt only the three named implementation and review worker bodies to the approved Small-Business-Claude host context and governing Git and quality policy while preserving brownfield scope, secret safety, the approval outbox, connector-contract stability, deterministic server-side calculations, exact allowlists, and honest deferral of Sprint 2 test mechanics. Independent task validation is required before any completion claim.

## R1-T14: Adapt Active Core Host-Context and Git Skills

### Ownership

- **Task owner:** Principal Architect.

### Exclusive Write Set

R1-T14 may modify only:

- `.github/skills/core/project-context/SKILL.md`
- `.github/skills/core/git-workflow/SKILL.md`
- `.github/skills/core/sdd-constitution/SKILL.md`

R1-T14 has no authority to modify either other G5 task's files or any other repository artifact.

### Authorized Purpose

Adapt only the three named core skill bodies so host identity, host stack, authority hierarchy, governing Git policy, active-versus-reference guidance, inactive-by-default behavior for missing or conflicting lifecycle metadata, and protected application and Sprint 1 invariants are explicit and consistent. Independent task validation is required before any completion claim.

## Disjoint G5 Parallel Write Sets

| Task | Authorized write set | Must not write |
|---|---|---|
| R1-T12 | `.github/agents/principal-executive-manager.agent.md`; `.github/agents/principal-product-manager.agent.md`; `.github/agents/principal-architect.agent.md` | R1-T13 files, R1-T14 files, rosters, and every other artifact |
| R1-T13 | `.github/agents/developer-general.agent.md`; `.github/agents/qa-engineer-general.agent.md`; `.github/agents/ux-designer-general.agent.md` | R1-T12 files, R1-T14 files, rosters, and every other artifact |
| R1-T14 | `.github/skills/core/project-context/SKILL.md`; `.github/skills/core/git-workflow/SKILL.md`; `.github/skills/core/sdd-constitution/SKILL.md` | R1-T12 files, R1-T13 files, rosters, and every other artifact |

The three tasks may be routed in parallel. Each route must preserve its exclusive allowlist and produce independent validation and completion evidence. Any need to cross a write boundary stops the affected task and returns through its owner and the applicable owner gate; it must not be resolved by broadening, exchanging, or combining write ownership.

## Explicit Exclusions

This decision does **not** authorize:

- execution of R1-T12, R1-T13, or R1-T14 by the Project Executive Manager;
- automatic roster activation, executable activation, lifecycle-state changes, or any inference that an adapted body is active or executable;
- mutation of `spec-driven-development/roster/agents.json`, `spec-driven-development/roster/skills.json`, `spec-driven-development/roster/skill_packs.json`, or any other roster artifact;
- edits to any agent body or skill body outside the nine explicitly authorized files;
- mutation of any evidence file, sprint artifact, constitution file, briefing other than this authoritative decision record, or any other repository artifact;
- cleanup or deletion of any file, directory, artifact, working-tree state, or repository state;
- staging any file;
- creating a commit;
- pushing any branch or commit;
- merging or rebasing;
- creating, deleting, switching, or otherwise modifying branches or worktrees;
- worker dispatch;
- ledger, generated-state, executive-state, sprint-progress, work-index, or other generated-artifact mutation;
- application, package, test, or continuous-integration work;
- Sprint 2 work; or
- any mutation outside the three exclusive write sets stated above.

Existing Sprint 1 scope, dependencies, evidence-preservation rules, protected surfaces, verification requirements, review requirements, and current-branch requirements remain in force. This authorization is not evidence that any task has started or completed.

## Required Parallel Routing

Route **R1-T12** to the **Principal Software Developer** as task owner, with mandatory **Principal Architect review**. Its only authorized write targets are `.github/agents/principal-executive-manager.agent.md`, `.github/agents/principal-product-manager.agent.md`, and `.github/agents/principal-architect.agent.md`. Validation and completion reporting remain independent from R1-T13 and R1-T14.

Route **R1-T13** in parallel to the **Principal Software Developer** as task owner. Its only authorized write targets are `.github/agents/developer-general.agent.md`, `.github/agents/qa-engineer-general.agent.md`, and `.github/agents/ux-designer-general.agent.md`. Validation and completion reporting remain independent from R1-T12 and R1-T14.

Route **R1-T14** in parallel to the **Principal Architect** as task owner. Its only authorized write targets are `.github/skills/core/project-context/SKILL.md`, `.github/skills/core/git-workflow/SKILL.md`, and `.github/skills/core/sdd-constitution/SKILL.md`. Validation and completion reporting remain independent from R1-T12 and R1-T13.

These are authorization routes only. No task execution or worker dispatch is performed by this record or by the Project Executive Manager. The three owners must not infer authority for roster changes, automatic activation, other bodies, evidence or state mutation, repository cleanup, Git mutations, application work, mechanical readiness work, or Sprint 2 work.
