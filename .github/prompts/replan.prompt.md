---
name: replan
description: "Provide a read-only advisory review after completed work without mutating governance or committing the next feature."
argument-hint: "Which feature just completed (path or short name)?"
---

You are running the **Replan** ceremony for **Small-Business-Claude**, a working local single-user demo. Hosted SaaS is a future direction, and customer discovery is incomplete.

## Workflow Phase

- Primary phase: **Post-DONE ceremony**
- Use after a feature reaches DONE and before selecting the next feature.
- Purpose: slow down to run fast by updating the operating model before more work starts.

## Input

The user argument is the completed feature path, short name, sprint deliverable, commit, or PR reference. If ambiguous, make the best reasonable match from nearby artifacts and state the assumption.

## Required Reading

Read these artifacts before producing the report:

1. Constitution files in `spec-driven-development/constitution/`
   - `mission.md`, `principles.md`, `tech-stack.md`
   - `roadmap.md`, `decision-policy.md`, `quality-policy.md`
2. Roadmap: `spec-driven-development/constitution/roadmap.md`
3. Skill catalog:
   - `.github/skills/`
   - `spec-driven-development/roster/skills.json`
4. Lessons file for the current PI, if present:
   - `spec-driven-development/sprints/PI-{N}/lessons.md`
   - If missing, report it as unavailable; do not generate or mutate it.
5. Completed feature artifacts, when available:
   - `spec.md`, `plan.md`, `tasks.md`, `validation.md`, `clarification-log.md`, optional `research.md`

## Ceremony Protocol

1. Identify what just changed.
   - Summarize the completed feature in 3 bullets or fewer.
   - Reference the feature directory or commit instead of duplicating content.
2. Review the constitution.
   - Check for missing principles, changed policy, or outdated technical assumptions.
   - Surface suggested updates only; do not edit constitution files.
3. Review the roadmap.
   - Check whether the next planned item still makes sense.
   - Consider dependencies, newly discovered risks, value, and sequence.
4. Review the skills.
   - Identify repeated behavior that should become a new skill.
   - Identify existing skills needing sharper triggers, guardrails, examples, or frontmatter.
5. Review lessons.
   - Read `spec-driven-development/sprints/PI-{N}/lessons.md` if present.
   - If absent, report lessons evidence as unavailable and limit the advisory conclusions.
6. Assess readiness for further planning.
   - Do not recommend `/triage`, backlog commitment, product implementation, connector selection, or a next feature while discovery is incomplete unless separately authorized.
   - Recommendations are advisory and are not approved decisions.

## Output Format

Return exactly these five sections:

```markdown
# Replan Report: {completed feature}

## 1. Constitution updates suggested
- Recommendation: ...
- Evidence: ...
- Approval path: ADR required? yes/no

## 2. Roadmap reorder suggested
- Recommendation: ...
- Evidence: ...
- Next roadmap item still valid: yes/no

## 3. Skill changes suggested
- New skill candidates: ...
- Existing skill improvements: ...
- Roster updates needed: yes/no

## 4. Lessons evidence
- Available evidence: ...
- Unavailable evidence: ...

## 5. Discovery and planning readiness
- Discovery status: incomplete
- Advisory recommendation: ...
- Separate authorization required: ...
```

## Guardrails

- This ceremony is advisory and read-only. Do not modify the constitution, roadmap, backlog, lessons, roster, generated state, lifecycle records, ledger, work-index, or any other file.
- Do not propose constitution changes as final decisions; policy-level changes require human approval and an ADR.
- Do not reorder the roadmap solely because a newer idea feels more interesting.
- Do not create a new skill for one-off knowledge; prefer skills for repeatable behavior.
- Do not duplicate full specs, plans, ADRs, or diffs in the report; reference paths.
- Missing lessons, state, ledger, or work-index evidence is unavailable or advisory; do not generate it or report it as PASS.
- Do not perform `/triage`, make backlog commitments, select connectors, begin product implementation, or choose the next feature while discovery is incomplete absent separate authorization.
- Do not create or switch branches or worktrees, or perform any Git operation. Worktrees are optional and separately authorized when useful.
- Only report configured, applicable, authorized validation commands that were actually executed. Missing tests, lint, typecheck, build, CI, ledger, or work-index mechanics are unavailable, unconfigured, or deferred, never PASS.
- Keep the report evidence-based and concise.
- Use dates in `YYYY-MM-DD` format.
- No emojis.

## Host Policy and Product Invariants
- `main` is protected. Changes use authorized short-lived branches and enter `main` only through a pull request after required checks; direct commits to `main` are prohibited. This prompt authorizes no Git operation.
- Node.js `>=24` is owner policy, but compatibility validation and package metadata alignment are deferred to separately authorized Sprint 2 work; do not claim compatibility or readiness.
- Send, post, pay, and order actions remain drafts in the approval outbox until explicit owner approval.
- Connector implementations must not silently change the connector/tool contract.
- Financial, inventory, and optimization calculations remain deterministic server-side operations; the model may explain results but must not invent or replace calculations.
- Secrets remain in `.env` only and must never enter Git, logs, evidence, or browser output.

## Decision Thresholds

Suggest a constitution update when a recurring rule, quality gate, approval boundary, or canonical technical convention is missing from the constitution.

Suggest roadmap reorder when the completed feature unlocks a dependency, blocks the next item, or reveals a risk that should be reduced first.

Suggest skill changes when agents repeated a multi-step protocol, needed missing role guidance, or found ambiguity in an existing skill.

## Project Rules

- Read `.github/copilot-instructions.md` first when project context is needed.
- Respect SDD lifecycle gates.
- Surface assumptions and escalation triggers explicitly.
- Prefer traceable recommendations over broad brainstorming.
