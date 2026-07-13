# Small-Business-Claude Executive Manager Handoff

Date: 2026-07-10

## 1. Purpose and authority

This is the authoritative operational handoff from the framework-level parallel Executive Manager that performed brownfield onboarding and readiness audits. It applies only to Small-Business-Claude. Use live project sources when they conflict with this summary, and mark unresolved facts rather than assuming completion.

## 2. Project snapshot

- Owner: Rodolfo Lerma; team model: solo.
- Repository branch: `main`; HEAD observed at `eff0b2d` on 2026-07-10.
- Application: Node.js, Express, JavaScript, Anthropic SDK, plain HTML/CSS/JS, and SQLite.
- SDD state: PI-1 named but no sprint or feature spec started; the fresh fleet ledger has no dispatches.
- Git status is not clean. Most copied SDD assets are untracked, and `AGENT_ONBOARDING.md` has a tracked deletion.
- `package.json` declares Node.js `>=18`; the observed workstation has Node.js `v24.13.1`. The real supported minimum has not been validated.

## 3. What onboarding completed

- The brownfield SDD framework was copied into the host repository.
- Framework-project contamination was manually removed from the initial host setup.
- A fresh host ledger was initialized.
- Host-specific constitution files, project configuration, and Copilot instructions were created from repository archaeology.
- Executive state was refreshed on 2026-07-10.

These are onboarding outputs, not proof that the host is ready for the full SDD lifecycle.

## 4. Important correction / current product direction

`exec/state.md`, dated 2026-07-10, records the owner decision that the product direction is hosted SaaS for real small-business owners. The initial segment is inventory-based businesses in El Paso, Texas, and Ciudad Juárez, Mexico, starting with coffee shops and flooring, wall-material, and related building/interior-finish wholesalers.

The immediate gate is customer discovery: validate the beachhead problem, first-customer profile, shared MVP jobs, source systems, language needs, and willingness to pay before backlog commitment or implementation.

`.github/copilot-instructions.md` and parts of the constitution still describe the prior local runnable application direction. The Product Manager and Architect must reconcile the hosted-SaaS direction into project instructions and constitution through the applicable governance process before implementation begins.

## 5. Remaining blockers before full SDD lifecycle

- Establish a clean, reproducible Git baseline. Most SDD assets are uncommitted.
- Decide whether the tracked deletion of `AGENT_ONBOARDING.md` is intentional.
- Remove temporary `.sdd-archaeology.json`, `.sdd-proposal/`, and the reserved `CON` entry after preserving any needed evidence.
- Replace framework identity in `spec-driven-development/CONTEXT.md` with host identity and vocabulary.
- Adapt copied agents, skills, and skill packs that still carry Python, FastAPI, pytest, or old Git/worktree rules. Active guidance must match Node.js, Express, JavaScript, Anthropic, and SQLite.
- Choose and document one consistent Git workflow across instructions, constitution, agents, and skills.
- Add an `npm test` entry point, an automated `GET /api/health` smoke test, and host CI.
- Reconcile roster entries with the agents and skills that are actually valid for this host.
- Make the state builder host-aware; copied framework assumptions must not define host readiness.
- Confirm the real minimum supported Node.js version rather than relying only on the current `>=18` declaration or the workstation version.
- Update the roadmap and README because SQLite persistence is already implemented, despite stale text describing it as future or in-memory work.
- Do not treat copied framework tests or doctor checks as host application readiness gates.

Audit findings above remain blockers until the owning principal verifies and closes each one. `exec/state.md` currently says “None” under blockers; that statement is stale relative to the readiness audits and current Git status.

## 6. Recommended execution order

1. Clean Git and establish a reproducible baseline.
2. Reconcile product identity, mission, context, constitution, and authoritative instructions.
3. Adapt active agents, skills, roster, and Git policy to the host stack.
4. Establish host tests and CI, including `npm test` and the health smoke test.
5. Correct host assumptions in state generation and ledger operations.
6. Open PI-1 / Sprint 1 only after critical readiness blockers close, then run the first complete pilot lifecycle.

## 7. First instructions for the local Executive Manager

1. Read the live Copilot instructions, executive state, all six constitution files, project context, project configuration, and current Git status/log.
2. Route product-direction reconciliation to the Product Manager and Architect.
3. Route the operational readiness plan to the Principal Software Developer.
4. Keep customer discovery ahead of backlog commitment.
5. Do not start implementation dispatch until critical blockers are verified closed.
6. Report uncertainty explicitly; do not convert audit recommendations into completion claims.

## 8. Evidence locations

- `.github/copilot-instructions.md`: current host instructions; still states the prior local-app direction.
- `spec-driven-development/exec/state.md`: 2026-07-10 hosted-SaaS decision, segment, discovery gate, and current SDD state.
- `spec-driven-development/constitution/`: mission, principles, tech stack, roadmap, decision policy, and quality policy.
- `spec-driven-development/CONTEXT.md`: currently retains framework identity.
- `project.config.json`: owner, team, and repository URL.
- `package.json`: runtime declaration and current lack of a test script.
- `server/db.js` and commit `8008c02`: evidence that SQLite persistence was implemented.
- Current Git status and recent log: evidence for the uncommitted SDD assets, tracked deletion, temporary artifacts, and recent product-direction commits.

## 9. Boundary with the framework project

The local Executive Manager owns only Small-Business-Claude. The other framework Executive Manager owns Evolving-Multi-Agent-Framework and Sprint 22. Do not manage, reprioritize, report, or dispatch work for that framework repository from this project. Framework changes must be handed back across the project boundary; host adaptation belongs here.
