---
name: spec
description: Generate a feature specification from a clarified request.
argument-hint: "What feature do you want to spec?"
---

You are running the **Spec** command for the SDD workflow.

## Workflow Phase
- Primary phase: **Phase 5 - Specify**
- Input should come from a clarified request, backlog item, or approved feature direction.

## Goal
Produce a feature specification that is clear enough for planning, task decomposition, implementation, and later QA.

## Spec Sizing Rules
- Bug fix affecting fewer than 3 files: call out that a full spec may be unnecessary.
- Feature affecting fewer than 5 files: use a lightweight spec.
- Feature affecting 5 or more files, cross-cutting changes, or schema changes: use a full spec.

## Required Deliverable
Produce or explicitly instruct creation of `spec.md` in the feature directory using the feature-spec template.

## Required Sections
Include these sections unless the work is explicitly lightweight:
1. Problem statement
2. Target user
3. Goals
4. Non-goals
5. User stories by priority (`P1`, `P2`, `P3`)
6. Acceptance criteria phrased as testable assertions
7. Functional requirements (`FR-NNN`)
8. Non-functional requirements
9. Edge cases
10. Data, privacy, and dependency considerations
11. Assumptions
12. Success criteria
13. Out of scope
14. Traceability matrix
15. Validation expectations supported by current host mechanics

## Validation Requirements
- Specify only checks that are configured, applicable, authorized, and capable of being run in the host.
- Distinguish automated checks from manual inspection and unavailable checks.
- Never report an unavailable mechanic as `PASS`.
- Do not invent a test runner, CI gate, required check, or validation artifact.

## How to Work
1. Summarize the feature in one sentence.
2. State what pain point or opportunity it addresses.
3. Convert vague requests into explicit goals and non-goals.
4. Write user stories tied to user value.
5. Write acceptance criteria as assertions a test can prove true or false.
6. Define evidence-based validation expectations supported by current host mechanics.
7. Make hidden assumptions visible.
8. Call out approval-required items like dependencies, schema changes, or permissions.

## Output Format
```markdown
# <Feature Name>

## Metadata
- Proposed path: `spec-driven-development/specs/YYYY-MM-DD-feature-name/spec.md`
- Spec size: lightweight | full
- Status: draft for review

## Problem Statement
...

## Target User
...

## Goals
- ...

## Non-Goals
- ...

## User Stories
### P1
- US-1: ...
  - Acceptance Criteria:
    - AC-1.1 Given ..., when ..., then ...

## Functional Requirements
- FR-001 MUST ...

## Non-Functional Requirements
- NFR-001 ...

## Edge Cases
- ...

## Data, Privacy, and Dependencies
- ...

## Assumptions
- ...

## Success Criteria
- ...

## Out of Scope
- ...

## Validation Expectations
- Configured and applicable checks:
- Manual checks:
- Unavailable or deferred checks:

## Traceability Matrix
| Story | Requirements | Acceptance Criteria | Validation Check |
|-------|--------------|---------------------|------------------|
```

## Guardrails
- Do not write implementation tasks here.
- Do not skip acceptance criteria.
- Keep every acceptance criterion testable and specific.
- Do not claim validation that is not configured, applicable, authorized, and actually run.
- Unavailable mechanics never receive a `PASS` result.
- If critical ambiguity remains, say `/clarify` must continue before approval.

## Protected Product Invariants
Send, post, pay, and order actions remain drafts in the approval outbox until explicit owner approval.

Connector implementations must not silently change the connector/tool contract.

Financial, inventory, and optimization calculations remain deterministic server-side operations; the model may explain results but must not invent or replace calculations.

Secrets remain in `.env` only and must never enter Git, logs, evidence, or browser output.


## Project Rules
- Read `.github/copilot-instructions.md` first when project context is needed.
- Respect the SDD lifecycle and do not skip gates without saying why.
- No emojis.
- Prefer concise, traceable output over generic brainstorming.
- Surface blockers, assumptions, and escalation triggers explicitly.
