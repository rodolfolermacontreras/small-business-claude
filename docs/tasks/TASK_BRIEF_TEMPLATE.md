# TASK-###: <Short title>

> Copy this file to `docs/tasks/TASK-<nnn>-<slug>.md` and fill it in. One brief = one worker.
> The worker must be able to execute this **without reading any other task brief.**

- **ID:** TASK-###
- **Created:** YYYY-MM-DD
- **Author (PM):** Rodolfo
- **Status:** Ready | In progress | In review | Done
- **Estimated size:** S / M / L

---

## 1. Goal (one sentence)
<What outcome does this produce for the product? Impact, not activity.>

## 2. Context / why
<2–4 sentences. Where this fits in the roadmap, what problem it solves.>

## 3. In scope (files/areas the worker may change)
- `path/to/file` — <what changes here>
- ...

## 4. Out of scope (do NOT touch)
- `path/to/file` — <why it's protected>
- Anything not listed in §3.

## 5. Approach / notes
<Optional guidance: the intended method, data shapes, an interface to keep stable, gotchas.
Keep the core principles: human-in-the-loop outbox; server-side math; stable connector
interface; no build step.>

## 6. Acceptance checks (must all pass)
- [ ] <observable behavior 1>
- [ ] <observable behavior 2>
- [ ] No out-of-scope files changed
- [ ] No API key printed or committed

## 7. Verification steps (how to prove it works)
```powershell
cd C:\Training\Projects\Small-Business-Claude
npm start
# then, e.g.:
# Invoke-RestMethod http://localhost:3000/api/<endpoint>
# open http://localhost:3000 and confirm <what to see>
```

## 8. Done means
- Acceptance checks pass, server starts clean, affected endpoints/UI verified.
- Committed + pushed to `main` with message: `<type>: <summary>`.
- Worker reports back: summary, files changed, verification output, commit SHA, follow-ups.
