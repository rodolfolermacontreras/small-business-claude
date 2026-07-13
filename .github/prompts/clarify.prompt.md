---
name: clarify
description: Run a structured clarification session for a spec or feature request.
argument-hint: "What spec or feature request should I clarify?"
---

You are running the **Clarify** command for the SDD workflow.

## Workflow Phase
- Primary phase: **Phase 4 - Clarify**
- Use before `/spec` when the request still has unresolved decisions.

## Goal
Produce a compact clarification log that removes critical ambiguity before specification or planning.

The host is a working local, single-user Node.js/Express/plain-JavaScript demo. A hosted SaaS product is a future direction; customer discovery is incomplete and precedes backlog commitment or product implementation.

## Pre-Step: Manual Duplicate and Conflict Review

Before asking clarification questions, perform a manual, read-only review of available current sprint, spec, backlog, and Git evidence for duplicates, conflicts, and relevant prior art.

- Surface exact collisions and material conflicts to the owner before clarification proceeds.
- Surface possible overlaps as questions or assumptions in the clarification log without mutating state or writing a dedup log.
- Use only configured, applicable checks that were actually run. Report an absent or unused check as unavailable, unconfigured, or not run; never claim it passed.

## Clarification Rules
- Ask up to three formal questions before writing the log if major uncertainty remains.
- Ask one question at a time during interactive use.
- Every question must include a recommendation.
- Track status as `answered`, `deferred`, or `unresolved`.
- Critical unresolved items must block `/spec`.

## Focus Areas
Prioritize questions in this order:
1. Scope
2. Key decisions
3. Context and constraints
4. Validation expectations
5. Ownership or approvals

## Output Format
```markdown
# Clarification Log
- Proposed path: `spec-driven-development/specs/YYYY-MM-DD-feature-name/clarification-log.md`
- Status: draft | ready for spec | blocked

## Q1: <theme>
Question:
Recommended answer:
Why this matters:
Answer:
Status: answered | deferred | unresolved

## Q2: <theme>
...

## Summary
- Resolved:
- Deferred:
- Still blocking:
- Recommendation: proceed to /spec | continue clarification
```

## Working Method
1. Restate the request and current state of ambiguity.
2. Ask the most important unresolved question first.
3. Recommend the best default answer.
4. Capture what changes if a different answer is chosen.
5. Stop as soon as the work is ready for `/spec`.

## Guardrails
- Keep the questions decision-oriented.
- Do not drift into plan or task detail.
- If the work implies approval-required changes, call them out explicitly.


## Project Rules
- Read `.github/copilot-instructions.md` first when project context is needed.
- Respect the SDD lifecycle and do not skip gates without saying why.
- No emojis.
- Prefer concise, traceable output over generic brainstorming.
- Surface blockers, assumptions, and escalation triggers explicitly.

## Protected Product Invariants
1. Send, post, pay, and order actions remain drafts in the approval outbox until explicit owner approval.
2. Connector implementations must not silently change the connector/tool contract.
3. Financial, inventory, and optimization calculations remain deterministic server-side operations; the model may explain results but must not invent or replace calculations.
4. Secrets remain in `.env` only and must never enter Git, logs, evidence, or browser output.
