# PI-1 Sprint 2 Readiness Contract

## Status and authority

- Contract date: `2026-07-13`.
- Owner: Principal Product Manager.
- Required reviews: Principal Architect and Principal Software Developer.
- Entry authority: Sprint 2 may begin only through a separate dated Level 2 owner authorization after Sprint 1 acceptance and report-up. This contract does not authorize implementation.
- Source requirements: `SPEC.md` RB-012, RB-014, RB-020, RB-021, RB-024, and RB-025.
- Entry evidence: `evidence/GIT-BASELINE.md`, `evidence/ASSET-MANIFEST.md`, `evidence/SOURCE-MATRIX.md`, and `evidence/GUIDANCE-VALIDATION.md`.

## Contract-wide prerequisites

Before any Sprint 2 implementation task starts:

1. R1-T19 must pass against the exact Sprint 1 start and end SHAs.
2. R1-T20 must report Sprint 1 accurately and receive Project Executive Manager acknowledgment.
3. The human owner must separately authorize Sprint 2 scope, Git actions, and any irreversible operation.
4. The Product Manager must approve Sprint 2 stories and acceptance boundaries.
5. The Principal Architect must approve technical sequencing and any new dependency, workflow, runtime, or generated-state design; an ADR and human approval are required where governance requires them.
6. The Principal Software Developer must establish an exact file allowlist, dependency graph, baseline, and verification plan.
7. The working tree must be classified so unrelated owner work, secrets, runtime data, and protected application data cannot enter a Sprint 2 change.

## Eight RB-020 work areas

| # | Work area | Prerequisites | Allowed surfaces | Required direct evidence | Residual risks and stop conditions |
|---:|---|---|---|---|---|
| 1 | Define and implement `npm test` without assuming a framework before approval | Approved test strategy; Architect and owner approval for any dependency; current application baseline | `package.json`, lockfile only if approved; new host test files and narrowly required configuration | Test-framework decision, dependency approval, red-first evidence, exact commands, pass/fail output, and package diff | Stop on unapproved dependency, broad package churn, real API/connector calls, secret access, or replacement of deterministic server calculations |
| 2 | Implement an automated `GET /api/health` smoke test | Work area 1 test contract available; health route contract reviewed | Approved host test files; minimal test helpers only | Automated test proving status and documented response expectations without real Anthropic calls or secret disclosure | Stop if test requires production credentials, external network, customer data, route-shape changes, or application behavior changes outside an approved defect task |
| 3 | Implement host CI and required checks | Work areas 1 and 2 pass locally; approved Git-hosting policy and workflow design | `.github/workflows/` and narrowly approved CI configuration | Workflow diff, event/permission review, least-privilege review, successful PR check evidence, and documented required-check names | Stop on overbroad permissions, secret printing, deployment behavior, unapproved external action, unavailable credentials, or checks that do not exercise the host tests |
| 4 | Validate the Node.js `>=24` policy on the supported runtime matrix | Approved runtime matrix and compatibility method; work area 1 available | Runtime metadata and package surfaces only if separately approved after evidence; test configuration | Exact Node versions, install/start/test results, `node:sqlite` behavior, incompatibilities, and justified package metadata decision | Stop on unsupported runtime, native/runtime incompatibility, package change before evidence, or treating the policy statement as compatibility proof |
| 5 | Make state-builder and doctor outputs host-aware so copied framework tests do not define application readiness | Approved generated-state schema and source-of-truth rules; Architect review | Narrowly approved state-builder/doctor source, templates, and their focused framework tests | Host-aware output with source commit and freshness, distinction between framework and host checks, deterministic regeneration, and focused test results | Stop if generated state becomes policy, copied tests are reported as host proof, global history is rewritten, or unrelated framework behavior changes |
| 6 | Verify ledger initialization, host use, and work-index generation/freshness | Approved ledger/work-index contract and data-handling review | Narrowly approved ledger/work-index source, schema only if separately authorized, generated evidence location, and focused tests | Fresh initialization evidence, host-scoped records, work-index generation, source commit/freshness, duplicate/conflict behavior, and no sensitive runtime rows committed | Stop on schema migration without approval, database content entering Git/evidence, stale index, cross-project records, or fabricated dispatch history |
| 7 | Perform a clean-clone rehearsal from the approved Sprint 1 baseline | Exact Sprint 1 commit and reachable remote; work areas 1-6 complete as required; isolated approved location | No source mutation in the rehearsal; temporary clone and documented local configuration placeholders only | Clone command/result, checkout SHA, dependency install, configured non-secret prerequisites, start/test/CI-equivalent results, generated-state checks, and cleanup disposition | Stop on unavailable remote/credentials, secret copying, dependency drift, ignored local database dependence, mutation of the source workspace, or inability to reproduce the exact SHA |
| 8 | Publish the final host-readiness result with direct evidence | Work areas 1-7 complete with all mandatory checks resolved | Sprint 2 evidence and report artifacts only | Criterion-by-criterion matrix citing exact commands, SHAs, check runs, failures, deferrals, and residual risks; independent QA and Principal reviews | Stop on any `PARTIAL`, `UNKNOWN`, unsupported inference, stale generated result, missing direct evidence, or attempt to claim customer/SaaS readiness from operational checks |

## Allowed change boundary

Sprint 2 work is limited to files explicitly named by an approved Sprint 2 plan and task allowlist. Package, lockfile, workflow, test, runtime metadata, state-tool, ledger, work-index, generated-state, or evidence changes are allowed only for the corresponding approved work area. Shared files make tasks sequential. Every task requires scoped staging and two-stage review.

## Explicit exclusions

Unless a later dated Level 2 decision expressly adds them, Sprint 2 excludes:

- product features, customer-facing workflow changes, authentication, tenancy, billing, cloud deployment, live connectors, and SaaS implementation;
- customer discovery, customer-validation conclusions, RICE scoring, pricing, or product-backlog commitment;
- changes to approval-outbox semantics, connector/tool contracts, API response contracts, database schema, or deterministic financial, inventory, and optimization calculations;
- access to or commit of `.env`, credentials, secrets, business records, connector data, local databases, logs, caches, or generated runtime data;
- unrelated `Small-business-ideas/`, global backlog, historical/reference curation, and separate framework-repository work;
- force push, history rewrite, destructive cleanup, or merge without separate authority.

## Evidence and review rules

- Host readiness requires direct host evidence. Copied framework tests, examples, documentation, policy statements, or generated state alone are insufficient.
- Every changed path must map to one work area, approved task, acceptance criterion, and evidence entry.
- Tests must avoid real Anthropic, connector, payment, customer, or external-service calls.
- Generated artifacts must identify source commit and freshness and remain subordinate to governing decisions and direct Git/runtime evidence.
- A reviewer may not independently approve their own correction. Spec compliance precedes code-quality review; fixes require re-review and affected checks rerun.
- Missing credentials, network, hosted checks, runtime versions, or clean-clone evidence are `BLOCKED` or `UNAVAILABLE`, never PASS.

## Contract-wide stop conditions

Stop and route to the owning Principal if work would require a new product or policy decision, unapproved dependency, schema migration, protected-surface change, secret/data access, external integration, widened workflow permissions, unsupported runtime, unavailable mandatory evidence, or weakened acceptance gate. Stop immediately on suspected credential or protected-data exposure. Ordinary bounded implementation defects may be corrected only under the applicable approved Sprint 2 task authority and then independently re-reviewed.

## Residual risks carried from Sprint 1

- No host test runner or `npm test` contract exists yet.
- No automated health smoke test exists.
- No host CI or required check is configured.
- Node.js `>=24` is policy only; compatibility and package metadata alignment are unvalidated.
- State-builder and doctor host awareness is unverified.
- Ledger initialization, host use, work-index generation, and freshness are unverified; `pre-work-check` remains unavailable.
- No clean-clone rehearsal has been executed.
- Remote push, pull-request checks, and branch protection may be unavailable or procedurally enforced only.

## Explicit non-claims at Sprint 1 close

Sprint 1 does not prove or claim:

1. host test readiness or passing host tests;
2. continuous-integration readiness or passing required checks;
3. Node runtime compatibility or package-metadata correctness;
4. automated health-smoke readiness;
5. clean-clone reproducibility;
6. host-aware state-builder/doctor readiness;
7. ledger/work-index readiness or fresh pre-work clearance;
8. full SDD readiness;
9. customer validation; or
10. SaaS readiness or implementation.

Sprint 1 establishes only the reviewed governance/documentation baseline and this bounded entry contract. Sprint 2 remains unstarted and requires separate authorization.

## Required reviews and acceptance

### Principal Architect review — 2026-07-13

**Verdict: PASS.** The contract covers all eight RB-020 areas, keeps policy distinct from implementation and validation, preserves lifecycle and protected-product invariants, requires separate authority for dependencies/workflows/runtime/generated-state mechanics, and contains adequate technical, evidence, risk, and stop boundaries. No Sprint 2 implementation or widened authority is introduced.

### Principal Software Developer review — 2026-07-13

**Verdict: PASS.** The work areas are executable as separately planned tasks; prerequisites and sequencing are explicit; allowed surfaces are bounded; direct evidence is feasible; shared-file sequencing and two-stage review are required; and the contract does not substitute documentation for implementation. No package, runtime, workflow, test, state-tool, ledger/work-index, or clean-clone action is authorized now.

### Principal Product Manager acceptance — 2026-07-13

**Verdict: PASS.** Eight-of-eight work areas, prerequisites, allowed surfaces, direct evidence, residual risks, stop conditions, exclusions, and explicit non-claims are present. Product scope remains unchanged, customer discovery remains incomplete, and Sprint 2 is not authorized or started. R1-T17 is complete at 17/20 and unlocks R1-T18 under the close-path preapproval.
