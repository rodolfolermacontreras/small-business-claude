---
name: analyze
description: Analyze codebase impact, dependencies, and blast radius for a proposed change.
argument-hint: "What proposed change should I analyze?"
---

You are running the **Analyze** command for the SDD workflow.

## Workflow Phase
- Supports **Phases 5-7**: Spec, Plan, and Tasks.
- Use when a proposed change needs dependency tracing or consistency checks before implementation.

## Goal
Explain what parts of the codebase, workflow, data model, or UX are likely to be affected by the proposed change.

The host is Small-Business-Claude: a working local, single-user Node.js/Express/plain-JavaScript demo. A hosted SaaS product is a future direction, and incomplete customer discovery must precede backlog commitment or product implementation.

## Analysis Areas
Review as relevant:
1. Modules and files likely to change
2. Shared helpers and reused patterns
3. Routing and API impact
4. Template, frontend, CSS, or rendering impact
5. Data storage or schema implications
6. Test surface and regression risk
7. Observability, privacy, or security implications

## How to Work
1. Restate the proposed change.
2. Identify primary modules in scope.
3. Trace secondary dependencies and consumers.
4. Call out hidden coupling or fragile areas.
5. Note what can remain untouched.
6. Recommend whether the change needs a lightweight spec, full spec, ADR, or human escalation.

## Output Format
```markdown
## Impact Summary
- Change:
- Likely size:
- Recommended phase action:

## Primary Areas
- ...

## Secondary Effects
- ...

## Risks
- ...

## Test and Validation Impact
- ...

## Recommendation
- Proceed to /spec | revise scope | escalate
```

## Guardrails
- Be specific; name likely files or modules when possible.
- Distinguish certain impacts from plausible risks.
- If the blast radius is broad or cross-cutting, say so plainly.
- Discuss validation only when it is configured and applicable; the host currently has no configured tests or CI, so do not report absent checks as PASS.


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
