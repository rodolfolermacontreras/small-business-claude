# R1-T02 Git Baseline Evidence

## Scope, timestamp, and redaction

- Baseline capture UTC: `2026-07-10T16:42:16.2224674Z`.
- Baseline date: `2026-07-10`.
- Supporting file-metadata capture: approximately `2026-07-10T16:41:46Z`.
- Independent read-only verification UTC: `2026-07-10T16:44:40.8246527Z`.
- Repository: `C:/Training/Projects/Small-Business-Claude`.
- This record contains Git metadata, path names, file sizes, and cryptographic identifiers only. No file contents were read for the temporary-file inventory.
- Redacted/excluded: `.env` contents, database contents, secrets, credentials, connector keys, and business data. Ignored runtime files are represented only by path, size, and matching ignore rule.
- The evidence file did not exist during the captured baseline. Its creation is the sole mutation for R1-T02 and adds one untracked path after the baseline.

## Git identity

- Branch: `sprint/pi-1-s1-readiness-baseline`
- Full HEAD: `eff0b2de590ca49c66f55c8b92fe211b9da77389`
- Upstream: **absent**. `git rev-parse --abbrev-ref --symbolic-full-name @{upstream}` exited `128` with `fatal: no upstream configured for branch 'sprint/pi-1-s1-readiness-baseline'`.
- Remote fetch: `origin  https://github.com/rodolfolermacontreras/small-business-claude.git (fetch)`
- Remote push: `origin  https://github.com/rodolfolermacontreras/small-business-claude.git (push)`

## Ten recent commits

| # | Full SHA | Subject |
|---:|---|---|
| 1 | `eff0b2de590ca49c66f55c8b92fe211b9da77389` | PM: define inventory-business SaaS beachhead and validation gate |
| 2 | `ca8adf46fc9872d9f7b47eec534eb69e4e3fe19a` | PM: reframe as sellable product; add PRODUCT_ROADMAP gap analysis + productization backlog |
| 3 | `b99c456708598c06f3f1b0212c1146293e9e9112` | PM: mark TASK-001 (SQLite persistence) Done; verified in-scope, no secrets, dependency-free |
| 4 | `8008c02c16f821ed6da3bc128b113803900b930c` | Add SQLite persistence for chat sessions + outbox |
| 5 | `7ff9556660057bf336be11d6c84a26129723d1ce` | PM: add TASK-001 (SQLite persistence) brief; mark in-flight on status board |
| 6 | `1828fb1a14a85cded7c9f226d5c49802993978e1` | Add multi-agent operating model: KICK_OFF, PROJECT_STATUS, task brief template; refresh onboarding |
| 7 | `cd5bcccc95ba3ed78ed2ffe175f538039d95dfec` | Add inventory optimizer: demand forecast + reorder plan (optimizer, 4 tools, [U+1F4E6] workflow, /api/inventory, dashboard outlook card) |
| 8 | `bf2e711a327d76d604403507e35d618d8ab732e4` | Dashboard: collapsible overview + cash-movement sparkline |
| 9 | `e400a1bf3712941b4083efd6d398d36df233a74e` | Add dashboard: KPI tiles + campaign ROI chart via new /api/metrics endpoint |
| 10 | `9263ff40f837817ca32e2319cae450db4b5f157a` | Fix dark mode: replace muddy brown palette with high-contrast slate |

The subject for commit 7 contains Unicode code point `U+1F4E6`; it is represented above by code-point notation to comply with the repository's no-emoji documentation rule.

## Captured pre-evidence porcelain v1 baseline

Command: `git status --porcelain=v1 --untracked-files=all`

Summary: **430 entries** = 1 tracked deletion + 1 tracked modification + **all 428 untracked paths**. The adopted SDD surfaces account for `.github/` = 73 and `spec-driven-development/` = 346 untracked paths. The remaining 9 untracked paths are temporary/adoption-support surfaces at repository root (`.sdd-archaeology.json`, six `.sdd-proposal/` files, `CON`, and `project.config.json`).

### Tracked deletion (1)

```text
 D AGENT_ONBOARDING.md
```

### Tracked modification (1)

```text
 M spec-driven-development/exec/state.md
```

### Untracked paths: adopted `.github/` surface (73)

```text
?? .github/agents/_TEMPLATE-worker.agent.md
?? .github/agents/data-scientist-general.agent.md
?? .github/agents/dev-env-manager-general.agent.md
?? .github/agents/developer-cli-specialist-1.agent.md
?? .github/agents/developer-general.agent.md
?? .github/agents/principal-architect.agent.md
?? .github/agents/principal-cloud-security-architect.agent.md
?? .github/agents/principal-executive-manager.agent.md
?? .github/agents/principal-product-manager.agent.md
?? .github/agents/principal-software-developer.agent.md
?? .github/agents/principal-ui-designer.agent.md
?? .github/agents/qa-engineer-general.agent.md
?? .github/agents/sprint-executive-manager.agent.md
?? .github/agents/ux-designer-general.agent.md
?? .github/copilot-instructions.md
?? .github/instructions/fleet-workers.instructions.md
?? .github/instructions/sdd-workflow.instructions.md
?? .github/prompts/analyze.prompt.md
?? .github/prompts/ask.prompt.md
?? .github/prompts/clarify.prompt.md
?? .github/prompts/constitution.prompt.md
?? .github/prompts/evolve.prompt.md
?? .github/prompts/fleet.prompt.md
?? .github/prompts/grill.prompt.md
?? .github/prompts/hire.prompt.md
?? .github/prompts/implement.prompt.md
?? .github/prompts/plan.prompt.md
?? .github/prompts/qa.prompt.md
?? .github/prompts/replan.prompt.md
?? .github/prompts/retro.prompt.md
?? .github/prompts/spec.prompt.md
?? .github/prompts/state.prompt.md
?? .github/prompts/tasks.prompt.md
?? .github/prompts/taskstoissues.prompt.md
?? .github/prompts/triage.prompt.md
?? .github/skills/AI-AGENT-SUPER-SKILL.md
?? .github/skills/core/constitution-sync/SKILL.md
?? .github/skills/core/git-workflow/SKILL.md
?? .github/skills/core/pre-work-check/SKILL.md
?? .github/skills/core/project-context/SKILL.md
?? .github/skills/core/sdd-constitution/SKILL.md
?? .github/skills/core/testing-conventions/SKILL.md
?? .github/skills/domain/README.md
?? .github/skills/domain/fastapi-routes/SKILL.md
?? .github/skills/domain/htmx-frontend/SKILL.md
?? .github/skills/domain/pytest-runner/SKILL.md
?? .github/skills/engineering/code-review/SKILL.md
?? .github/skills/engineering/diagnose/SKILL.md
?? .github/skills/engineering/improve-architecture/SKILL.md
?? .github/skills/engineering/tdd-gate/SKILL.md
?? .github/skills/engineering/tdd/SKILL.md
?? .github/skills/operational/azure-deployment-architecture/SKILL.md
?? .github/skills/operational/design-tokens/SKILL.md
?? .github/skills/operational/em-communication-discipline/SKILL.md
?? .github/skills/operational/fleet-coordinator/SKILL.md
?? .github/skills/operational/handoff/SKILL.md
?? .github/skills/operational/host-integration-symlink/SKILL.md
?? .github/skills/operational/lesson-capture/SKILL.md
?? .github/skills/operational/pi-planning/SKILL.md
?? .github/skills/operational/respect-existing/SKILL.md
?? .github/skills/operational/role-creation/SKILL.md
?? .github/skills/operational/session-self-review/SKILL.md
?? .github/skills/operational/stakeholder-pressure-defense/SKILL.md
?? .github/skills/operational/weekly-status-report/SKILL.md
?? .github/skills/workflow/archetype-recommender/SKILL.md
?? .github/skills/workflow/grill-me/SKILL.md
?? .github/skills/workflow/grill-with-docs/SKILL.md
?? .github/skills/workflow/implement/SKILL.md
?? .github/skills/workflow/to-plan/SKILL.md
?? .github/skills/workflow/to-spec/SKILL.md
?? .github/skills/workflow/to-tasks/SKILL.md
?? .github/skills/workflow/triage/SKILL.md
?? .github/workflows/doctor.yml
```

### Untracked paths: temporary/adoption-support root surfaces (9)

```text
?? .sdd-archaeology.json
?? .sdd-proposal/constitution/decision-policy.md
?? .sdd-proposal/constitution/mission.md
?? .sdd-proposal/constitution/principles.md
?? .sdd-proposal/constitution/quality-policy.md
?? .sdd-proposal/constitution/roadmap.md
?? .sdd-proposal/constitution/tech-stack.md
?? CON
?? project.config.json
```

### Untracked paths: adopted `spec-driven-development/` surface (346)

```text
?? spec-driven-development/CONTEXT.md
?? spec-driven-development/GENERALIZATION_SDD.md
?? spec-driven-development/README.md
?? spec-driven-development/archetypes/README.md
?? spec-driven-development/archetypes/cli-tool/README.md
?? spec-driven-development/archetypes/cli-tool/constitution/decision-policy.md
?? spec-driven-development/archetypes/cli-tool/constitution/mission.md
?? spec-driven-development/archetypes/cli-tool/constitution/principles.md
?? spec-driven-development/archetypes/cli-tool/constitution/quality-policy.md
?? spec-driven-development/archetypes/cli-tool/constitution/roadmap.md
?? spec-driven-development/archetypes/cli-tool/constitution/tech-stack.md
?? spec-driven-development/archetypes/cli-tool/skills/cli-arg-design/SKILL.md
?? spec-driven-development/archetypes/cli-tool/skills/cli-cross-platform/SKILL.md
?? spec-driven-development/archetypes/data-pipeline/README.md
?? spec-driven-development/archetypes/data-pipeline/constitution/decision-policy.md
?? spec-driven-development/archetypes/data-pipeline/constitution/mission.md
?? spec-driven-development/archetypes/data-pipeline/constitution/principles.md
?? spec-driven-development/archetypes/data-pipeline/constitution/quality-policy.md
?? spec-driven-development/archetypes/data-pipeline/constitution/roadmap.md
?? spec-driven-development/archetypes/data-pipeline/constitution/tech-stack.md
?? spec-driven-development/archetypes/data-pipeline/skills/pipeline-observability/SKILL.md
?? spec-driven-development/archetypes/data-pipeline/skills/pipeline-validation/SKILL.md
?? spec-driven-development/archetypes/python-library/README.md
?? spec-driven-development/archetypes/python-library/constitution/decision-policy.md
?? spec-driven-development/archetypes/python-library/constitution/mission.md
?? spec-driven-development/archetypes/python-library/constitution/principles.md
?? spec-driven-development/archetypes/python-library/constitution/quality-policy.md
?? spec-driven-development/archetypes/python-library/constitution/roadmap.md
?? spec-driven-development/archetypes/python-library/constitution/tech-stack.md
?? spec-driven-development/archetypes/python-library/skills/pytest-modern/SKILL.md
?? spec-driven-development/archetypes/python-web-service/README.md
?? spec-driven-development/archetypes/python-web-service/constitution/decision-policy.md
?? spec-driven-development/archetypes/python-web-service/constitution/mission.md
?? spec-driven-development/archetypes/python-web-service/constitution/principles.md
?? spec-driven-development/archetypes/python-web-service/constitution/quality-policy.md
?? spec-driven-development/archetypes/python-web-service/constitution/roadmap.md
?? spec-driven-development/archetypes/python-web-service/constitution/tech-stack.md
?? spec-driven-development/archetypes/python-web-service/skills/api-contract-testing/SKILL.md
?? spec-driven-development/archetypes/python-web-service/skills/fastapi-routes-modern/SKILL.md
?? spec-driven-development/archetypes/research-repo/README.md
?? spec-driven-development/archetypes/research-repo/constitution/decision-policy.md
?? spec-driven-development/archetypes/research-repo/constitution/mission.md
?? spec-driven-development/archetypes/research-repo/constitution/principles.md
?? spec-driven-development/archetypes/research-repo/constitution/quality-policy.md
?? spec-driven-development/archetypes/research-repo/constitution/roadmap.md
?? spec-driven-development/archetypes/research-repo/constitution/tech-stack.md
?? spec-driven-development/archetypes/research-repo/skills/notebook-discipline/SKILL.md
?? spec-driven-development/archetypes/research-repo/skills/reproducibility/SKILL.md
?? spec-driven-development/backlog/BACKLOG.md
?? spec-driven-development/cli/__init__.py
?? spec-driven-development/cli/__pycache__/__init__.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/__init__.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/backlog_reorder.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/backlog_reorder.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/bootstrap.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/bootstrap.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/dashboard_server.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/dedup.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/dedup.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/doc_count.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/done_check.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/done_check.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/fleet.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/fleet.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/governance_check.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/governance_check.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/length_lint.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/model_upgrade.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/model_upgrade.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/origin_lint.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/origin_lint.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/qa.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/qa.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/retro.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/retro.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/schema_lint.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/schema_lint.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/staledoc_lint.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/state_builder.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/state_builder.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/state_builder_data.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/state_builder_html.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/state_builder_markdown.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/taskstoissues.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/taskstoissues.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/tdd_gate_check.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/tdd_gate_check.cpython-314.pyc
?? spec-driven-development/cli/__pycache__/test_backlog_reorder.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_backlog_reorder.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_bootstrap.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_bootstrap.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/test_bootstrap.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_commit_hook.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_commit_hook.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/test_commit_hook.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_dedup.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_dedup.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/test_dedup.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_deploy_workflow.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_deploy_workflow.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/test_deploy_workflow.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_done_check.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_done_check.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_fleet.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_fleet.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/test_fleet.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_length_lint.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_model_upgrade.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_model_upgrade.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_origin_lint.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_origin_lint.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_qa.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_qa.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/test_qa.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_retro.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_retro.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/test_retro.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_schema_lint.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_schema_lint.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/test_schema_lint.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_schema_lint_variant.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_schema_lint_variant.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_sdd045.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_sdd045.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_sdd053.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_staledoc_lint.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_state_builder.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_state_builder.cpython-313.pyc
?? spec-driven-development/cli/__pycache__/test_state_builder.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_taskstoissues.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_taskstoissues.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/test_tdd_gate_check.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/cli/__pycache__/test_tdd_gate_check.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/cli/__pycache__/work_index.cpython-313.pyc
?? spec-driven-development/cli/backlog_reorder.py
?? spec-driven-development/cli/bootstrap.py
?? spec-driven-development/cli/common/composer.py
?? spec-driven-development/cli/common/identity.py
?? spec-driven-development/cli/common/ledger.py
?? spec-driven-development/cli/common/worktree.py
?? spec-driven-development/cli/dashboard_server.py
?? spec-driven-development/cli/dedup.py
?? spec-driven-development/cli/doc_count.py
?? spec-driven-development/cli/done_check.py
?? spec-driven-development/cli/fleet.py
?? spec-driven-development/cli/governance_check.py
?? spec-driven-development/cli/hooks/commit-msg
?? spec-driven-development/cli/host_gitignore_manifest.json
?? spec-driven-development/cli/length_lint.py
?? spec-driven-development/cli/model_upgrade.py
?? spec-driven-development/cli/origin_lint.py
?? spec-driven-development/cli/qa.py
?? spec-driven-development/cli/retro.py
?? spec-driven-development/cli/schema_lint.py
?? spec-driven-development/cli/staledoc_lint.py
?? spec-driven-development/cli/state_builder.py
?? spec-driven-development/cli/state_builder_data.py
?? spec-driven-development/cli/state_builder_html.py
?? spec-driven-development/cli/state_builder_markdown.py
?? spec-driven-development/cli/taskstoissues.py
?? spec-driven-development/cli/tdd_gate_check.py
?? spec-driven-development/cli/test_backlog_reorder.py
?? spec-driven-development/cli/test_bootstrap.py
?? spec-driven-development/cli/test_commit_hook.py
?? spec-driven-development/cli/test_dedup.py
?? spec-driven-development/cli/test_deploy_workflow.py
?? spec-driven-development/cli/test_done_check.py
?? spec-driven-development/cli/test_fleet.py
?? spec-driven-development/cli/test_length_lint.py
?? spec-driven-development/cli/test_model_upgrade.py
?? spec-driven-development/cli/test_origin_lint.py
?? spec-driven-development/cli/test_qa.py
?? spec-driven-development/cli/test_retro.py
?? spec-driven-development/cli/test_schema_lint.py
?? spec-driven-development/cli/test_schema_lint_variant.py
?? spec-driven-development/cli/test_sdd045.py
?? spec-driven-development/cli/test_sdd053.py
?? spec-driven-development/cli/test_staledoc_lint.py
?? spec-driven-development/cli/test_state_builder.py
?? spec-driven-development/cli/test_taskstoissues.py
?? spec-driven-development/cli/test_tdd_gate_check.py
?? spec-driven-development/cli/work_index.py
?? spec-driven-development/constitution/decision-policy.md
?? spec-driven-development/constitution/mission.md
?? spec-driven-development/constitution/principles.md
?? spec-driven-development/constitution/quality-policy.md
?? spec-driven-development/constitution/roadmap.md
?? spec-driven-development/constitution/tech-stack.md
?? spec-driven-development/dispatches/.gitkeep
?? spec-driven-development/docs/1_1_STATUS_REPORT_SDD.md
?? spec-driven-development/docs/ADR/001-sdd-framework.md
?? spec-driven-development/docs/ADR/002-two-folder-split.md
?? spec-driven-development/docs/ADR/003-specialization-naming.md
?? spec-driven-development/docs/ADR/004-executive-manager-as-orchestrator.md
?? spec-driven-development/docs/ADR/005-validation-as-pre-implementation-contract.md
?? spec-driven-development/docs/ADR/006-constitution-semantic-versioning.md
?? spec-driven-development/docs/ADR/007-hire-command-and-role-lifecycle.md
?? spec-driven-development/docs/ADR/008-hire-cloud-security-architect.md
?? spec-driven-development/docs/ADR/009-ci-oidc-deploys-to-production.md
?? spec-driven-development/docs/ADR/010-hire-principal-ui-designer.md
?? spec-driven-development/docs/ADR/011-three-tier-navigation-layer.md
?? spec-driven-development/docs/ADR/012-filesystem-frontmatter-data-contract.md
?? spec-driven-development/docs/ADR/013-serial-clarify-spec-gate.md
?? spec-driven-development/docs/ADR/014-ui-lifecycle-variant.md
?? spec-driven-development/docs/ADR/015-azure-dashboard-decommission.md
?? spec-driven-development/docs/ADR/016-model-upgrade-protocol-cross-reference.md
?? spec-driven-development/docs/ADR/017-backlog-reorder-safeguards.md
?? spec-driven-development/docs/ADR/018-article-vii-context-isolation-wording.md
?? spec-driven-development/docs/ADR/019-dashboard-reorder-post-endpoint.md
?? spec-driven-development/docs/ADR/020-two-tier-executive-manager.md
?? spec-driven-development/docs/ADR/021-ci-doctor-validation.md
?? spec-driven-development/docs/ADR/022-de-author-constitution.md
?? spec-driven-development/docs/ADR/023-dashboard-render-stdlib-only.md
?? spec-driven-development/docs/ADR/024-closed-pi-roadmap-semantics.md
?? spec-driven-development/docs/ADR/TEMPLATE.md
?? spec-driven-development/docs/ARCHITECTURE.md
?? spec-driven-development/docs/CHEAT-SHEET.html
?? spec-driven-development/docs/CLI-PATTERN.md
?? spec-driven-development/docs/COMMIT-CONVENTION.md
?? spec-driven-development/docs/FINAL_MERGED_PLAN.md
?? spec-driven-development/docs/HIGH_LEVEL_DEV_TRACKER.md
?? spec-driven-development/docs/HOST-INTEGRATION.md
?? spec-driven-development/docs/MODEL-UPGRADE-PROTOCOL.md
?? spec-driven-development/docs/Management/PI-1/INDEX.md
?? spec-driven-development/docs/Management/PI-1/Sprint-1-extraction-and-generalization/AGENT_NOTES.md
?? spec-driven-development/docs/Management/PI-1/Sprint-1-extraction-and-generalization/SPEC.md
?? spec-driven-development/docs/Management/PI-1/Sprint-2-fleet-ledger-pilot/AGENT_NOTES.md
?? spec-driven-development/docs/Management/PI-1/Sprint-2-fleet-ledger-pilot/SPEC.md
?? spec-driven-development/docs/Management/PI-2/INDEX.md
?? spec-driven-development/docs/Management/PI-2/Sprint-A-state-builder-fleet-bridge/AGENT_NOTES.md
?? spec-driven-development/docs/Management/PI-2/Sprint-A-state-builder-fleet-bridge/SPEC.md
?? spec-driven-development/docs/Management/PI-2/Sprint-B-qa-retro-schema-lint/AGENT_NOTES.md
?? spec-driven-development/docs/Management/PI-2/Sprint-B-qa-retro-schema-lint/SPEC.md
?? spec-driven-development/docs/Management/PI-2/Sprint-C-batch-dispatch-specialist-hire/AGENT_NOTES.md
?? spec-driven-development/docs/Management/PI-2/Sprint-C-batch-dispatch-specialist-hire/SPEC.md
?? spec-driven-development/docs/Management/PI-3/INDEX.md
?? spec-driven-development/docs/Management/PI-3/Sprint-1-dashboard-freshness-unblock/AGENT_NOTES.md
?? spec-driven-development/docs/Management/PI-3/Sprint-1-dashboard-freshness-unblock/SPEC.md
?? spec-driven-development/docs/Management/PI-3/Sprint-2-day-to-day-brownfield-bootstrap/AGENT_NOTES.md
?? spec-driven-development/docs/Management/PI-3/Sprint-2-day-to-day-brownfield-bootstrap/SPEC.md
?? spec-driven-development/docs/Management/PI-3/Sprint-3-pi2-lessons-curation/AGENT_NOTES.md
?? spec-driven-development/docs/Management/PI-3/Sprint-3-pi2-lessons-curation/SPEC.md
?? spec-driven-development/docs/Management/PI-3/Sprint-4-live-ui-v2-spec/AGENT_NOTES.md
?? spec-driven-development/docs/Management/PI-3/Sprint-4-live-ui-v2-spec/SPEC.md
?? spec-driven-development/docs/Management/PI-3/Sprint-5-management-navigation-layer/AGENT_NOTES.md
?? spec-driven-development/docs/Management/PI-3/Sprint-5-management-navigation-layer/SPEC.md
?? spec-driven-development/docs/Management/PI-4/INDEX.md
?? spec-driven-development/docs/Management/PI-5/INDEX.md
?? spec-driven-development/docs/ONBOARDING_KICK_OFF.md
?? spec-driven-development/docs/RULES.md
?? spec-driven-development/docs/SCORECARD.md
?? spec-driven-development/docs/Scott_Example/FEEDBACK_NAVIGATION_LAYER.md
?? spec-driven-development/docs/Scott_Example/UI_LEARNINGS_FROM_SCOTT.md
?? spec-driven-development/docs/Scott_Example/backlog-detail.html
?? spec-driven-development/docs/Scott_Example/backlog-list.html
?? spec-driven-development/docs/TEAM-SHARE-ONEPAGER.md
?? spec-driven-development/docs/Temp/EMF-HARDENING-PLAN.md
?? spec-driven-development/docs/Temp/PI-8-TRUTH-IN-THE-WINDOW-AUDIT.md
?? spec-driven-development/docs/Temp/README.md
?? spec-driven-development/docs/UI-LIFECYCLE-VARIANT.md
?? spec-driven-development/exec/.owner
?? spec-driven-development/exec/briefings/OWNER-DECISION-PI-1-SPRINT-1-2026-07-10.md
?? spec-driven-development/exec/briefings/OWNER-DECISION-R1-T02-BRANCH-AUTHORIZATION-2026-07-10.md
?? spec-driven-development/exec/briefings/OWNER-DECISION-R1-T02-EVIDENCE-AUTHORIZATION-2026-07-10.md
?? spec-driven-development/exec/briefings/PROJECT-EM-HANDOFF-2026-07-10.md
?? spec-driven-development/exec/sprint-progress.md
?? spec-driven-development/feature-prompts/F-01-fdc-tasks.prompt.md
?? spec-driven-development/feature-prompts/F-02-fdc-implement.prompt.md
?? spec-driven-development/feature-prompts/F-03-pi5-kickoff.prompt.md
?? spec-driven-development/feature-prompts/F-04-symlink-portability-clarify-spec.prompt.md
?? spec-driven-development/feature-prompts/F-05-symlink-portability-implement.prompt.md
?? spec-driven-development/feature-prompts/F-06-sprint6-clarify.prompt.md
?? spec-driven-development/feature-prompts/F-07-sprint6-plan-tasks.prompt.md
?? spec-driven-development/feature-prompts/F-08-sprint6-implement.prompt.md
?? spec-driven-development/feature-prompts/F-09-sprint7-completion.prompt.md
?? spec-driven-development/feature-prompts/F-10-sprint7-sdd018-design.prompt.md
?? spec-driven-development/feature-prompts/F-11-sprint7-sdd018-implement.prompt.md
?? spec-driven-development/feature-prompts/PROJECT-EM-SESSION-ONBOARDING.prompt.md
?? spec-driven-development/feature-prompts/README.md
?? spec-driven-development/feature-prompts/SPRINT-04-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-05-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-06-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-07-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-08-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-09-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-10-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-11-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-12-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-13-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-14-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-15-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-16-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-17-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-18-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-19-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-20-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-21-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/SPRINT-22-KICKOFF.prompt.md
?? spec-driven-development/feature-prompts/_SHARED_ONBOARDING.md
?? spec-driven-development/fleet/conflict-log.md
?? spec-driven-development/ledger/MIGRATION-POLICY.md
?? spec-driven-development/ledger/__init__.py
?? spec-driven-development/ledger/__pycache__/__init__.cpython-313.pyc
?? spec-driven-development/ledger/__pycache__/__init__.cpython-314.pyc
?? spec-driven-development/ledger/__pycache__/init_ledger.cpython-313.pyc
?? spec-driven-development/ledger/__pycache__/init_ledger.cpython-314.pyc
?? spec-driven-development/ledger/__pycache__/ledger_cli.cpython-313.pyc
?? spec-driven-development/ledger/__pycache__/ledger_cli.cpython-314.pyc
?? spec-driven-development/ledger/__pycache__/test_ledger.cpython-313-pytest-9.0.2.pyc
?? spec-driven-development/ledger/__pycache__/test_ledger.cpython-313.pyc
?? spec-driven-development/ledger/__pycache__/test_ledger.cpython-314-pytest-9.1.1.pyc
?? spec-driven-development/ledger/init_ledger.py
?? spec-driven-development/ledger/ledger_cli.py
?? spec-driven-development/ledger/schema.sql
?? spec-driven-development/ledger/test_ledger.py
?? spec-driven-development/roster/agents.json
?? spec-driven-development/roster/skill_packs.json
?? spec-driven-development/roster/skills.json
?? spec-driven-development/sessions/README.md
?? spec-driven-development/sessions/SESSION-2026-05-16-dashboard-about-and-freshness.md
?? spec-driven-development/sessions/SESSION-MEMORY.md
?? spec-driven-development/sessions/framework-foundations-strategy.md
?? spec-driven-development/sessions/inspiration-repos-research-findings.md
?? spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/BOARD.md
?? spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/KICKOFF_PROMPT.md
?? spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/ONBOARDING.md
?? spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/PLAN.md
?? spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/REPORT_UP_TEMPLATE.md
?? spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/SPEC.md
?? spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/TASKS.md
?? spec-driven-development/sprints/README.md
?? spec-driven-development/sprints/lessons-template.md
?? spec-driven-development/templates/agent-brief.md
?? spec-driven-development/templates/clarification-log.md
?? spec-driven-development/templates/feature-spec.md
?? spec-driven-development/templates/handoff.md
?? spec-driven-development/templates/level-2-decision-EXAMPLE.md
?? spec-driven-development/templates/level-2-decision.md
?? spec-driven-development/templates/lightweight-feature.md
?? spec-driven-development/templates/model-upgrade-pricing.json
?? spec-driven-development/templates/model-upgrade-workload.json
?? spec-driven-development/templates/plan.md
?? spec-driven-development/templates/review-report.md
?? spec-driven-development/templates/stakeholder-pressure-response.md
?? spec-driven-development/templates/task-list.md
?? spec-driven-development/templates/validation.md
```

## Ignored runtime paths (metadata only)

| Path | Size (bytes) | Ignore evidence | Content handling |
|---|---:|---|---|
| `.env` | 179 | `.gitignore` line 2: `.env` | Not read or printed |
| `server/data.db` | 45056 | `.gitignore` line 5: `*.db` | Not read or printed |
| `spec-driven-development/ledger/fleet.db` | 28672 | `.gitignore` line 5: `*.db` | Not read or printed |

## Root onboarding tracked deletion

- Worktree state: tracked deletion of `AGENT_ONBOARDING.md` (` D`).
- Index entry remains present: mode `100644`, blob `7bca49a1a9c0a6f860874372b50cf3fb128e2abb`, stage `0`, path `AGENT_ONBOARDING.md`.
- The index blob was identified but its contents were not printed.

## Temporary/adoption-support file-level inventory

Only file metadata and SHA-256 were collected; contents were not read or printed. No inaccessible failures occurred.

| Path | Size (bytes) | SHA-256 | Result |
|---|---:|---|---|
| `.sdd-archaeology.json` | 607 | `7929DEB03105F915A7D27EDA5B946F1A58EF29FD8B6287E518A9ABC709CE6B66` | Accessible |
| `.sdd-proposal/constitution/decision-policy.md` | 667 | `DBB7C919B012ABAFDDE6761BD88FDD0FDEDA2E0340DBD2E3738C3947E02AC097` | Accessible |
| `.sdd-proposal/constitution/mission.md` | 1140 | `82897966D8991B2A2F002452F40046CA57580D2270B9F2CFBAEFE58B44840214` | Accessible |
| `.sdd-proposal/constitution/principles.md` | 899 | `E1F50891829186EEBFD7704BAC17DBAD769828B993F95E25E4ADD9C737A4ABFD` | Accessible |
| `.sdd-proposal/constitution/quality-policy.md` | 870 | `C233D32857B3ACD0EFAC8E8828AED104CEC366FA0F1A8EBE7EAA2AE1F3D4E327` | Accessible |
| `.sdd-proposal/constitution/roadmap.md` | 845 | `7A9C37FFAC9C1FCC79E11AC53D70BC4AC1DCB840287F6632B4A22E9B8E4FAF7D` | Accessible |
| `.sdd-proposal/constitution/tech-stack.md` | 897 | `B84D53E77E6552346052C493CA335AA514DF4DC6DB6EC9C945893C6E03BCDFF4` | Accessible |
| `CON` | 27133 | `ECA37A18B53BDE3D1FD0AD939AD433DE8E1BF83E15707E359D811CDA04338CC2` | Accessible |

## Protected index baseline

Protected scope: every tracked file under `server/`, `public/`, plus `package.json` and `package-lock.json`.

| Mode | Blob ID | Stage | Path |
|---|---|---:|---|
| `100644` | `7e86723a6a73eeda1be0b2d0431e5601e0c19d7a` | 0 | `package-lock.json` |
| `100644` | `39eba0990a33f89ef4b13c4ba072e26b9726a90a` | 0 | `package.json` |
| `100644` | `d860df67f7a0be308ac7b84e87610c56d93722b2` | 0 | `public/app.js` |
| `100644` | `ab6785568bcd371cc080b1c81f254ea209279427` | 0 | `public/index.html` |
| `100644` | `e68f249120b69490090215a869ca4032cc48a938` | 0 | `public/styles.css` |
| `100644` | `23da841d3e290d56dd8bf1adc11d7eed99900f52` | 0 | `server/agent.js` |
| `100644` | `6647e76ddc6ff4076a6a9fdeb4a4ce35c18df326` | 0 | `server/connectors/index.js` |
| `100644` | `49839f8a1a5177e55e9e5d1382979fc1e5755148` | 0 | `server/data/hubspot.json` |
| `100644` | `ada673192b31d0133412cd54e8e59ff44eaf8987` | 0 | `server/data/inventory.json` |
| `100644` | `28d4fb0f775b28ef270c2f6728175f0f52c33b33` | 0 | `server/data/paypal.json` |
| `100644` | `a46b37d6d821a78e41f2428cc0cd5f1e922830cd` | 0 | `server/data/quickbooks.json` |
| `100644` | `2ff8bb9df9bc499d1d64d9980f5a7c788aadb69a` | 0 | `server/db.js` |
| `100644` | `9c3a45824fea226dff478f281c6e8c56e1c4c581` | 0 | `server/index.js` |
| `100644` | `ab264feae768c804d9b407dc1aa018356cc91dfc` | 0 | `server/optimizer.js` |
| `100644` | `b6ddb75acbc283993ef0f493b63f195620d935eb` | 0 | `server/tools.js` |
| `100644` | `d12cb7fef08ac989f76b904181476cba78a990e3` | 0 | `server/workflows.js` |

- Protected index count: **16**.
- Protected worktree diff command: `git diff --name-only -- server public package.json package-lock.json`.
- Protected diff count: **0**.

## Clone-independent reproduction procedure

> **PROCEDURE ONLY — ACTUAL EXECUTION DEFERRED TO SPRINT 2.**
>
> The steps below describe a future clean-clone comparison. They were not executed during R1-T02, do not assert that untracked artifacts exist in the remote clone, and must not be interpreted as a mutation performed in Sprint 1.

1. In Sprint 2, create a new disposable directory outside this working tree.
2. Clone `https://github.com/rodolfolermacontreras/small-business-claude.git` into that directory without copying files from this working tree.
3. Checkout the immutable commit `eff0b2de590ca49c66f55c8b92fe211b9da77389` in detached-HEAD mode.
4. Capture `git status --porcelain=v1 --untracked-files=all`, `git ls-files -s -- server public package.json package-lock.json`, and `git diff --name-only -- server public package.json package-lock.json` in the clean clone.
5. Compare the 16 protected index mode/blob/path tuples with this record. Expected protected index equality is exact; expected clean-clone protected diff count is zero.
6. Treat the 428 pre-evidence untracked paths, ignored runtime paths, and deleted worktree copy of `AGENT_ONBOARDING.md` as local-state evidence only. Recreate or transfer nothing unless a separately authorized Sprint 2 task specifies it.
7. Delete the disposable clone only under the separately authorized Sprint 2 cleanup procedure.

## Command, timestamp, and exit-result evidence

| UTC | Command | Exit/result |
|---|---|---|
| `2026-07-10T16:42:16.2224674Z` | Baseline command set: branch, HEAD, upstream, remotes, recent log, full porcelain v1, ignored-path metadata, index entries, protected diff | Capture completed; individual upstream result below |
| `2026-07-10T16:44:40.8246527Z` | `git branch --show-current` | Exit 0; `sprint/pi-1-s1-readiness-baseline` |
| `2026-07-10T16:44:40.8246527Z` | `git rev-parse --verify HEAD` | Exit 0; `eff0b2de590ca49c66f55c8b92fe211b9da77389` |
| `2026-07-10T16:44:40.8246527Z` | `git rev-parse --abbrev-ref --symbolic-full-name @{upstream}` | Exit 128; upstream absent |
| `2026-07-10T16:44:40.8246527Z` | `git remote -v` | Exit 0; origin fetch/push verified |
| `2026-07-10T16:44:40.8246527Z` | `git log -10 --format=%H%x09%s` | Exit 0; ten full SHAs and subjects captured |
| `2026-07-10T16:44:40.8246527Z` | `git status --porcelain=v1 --untracked-files=all` | Exit 0; pre-write baseline reconfirmed as 430 entries |
| `2026-07-10T16:44:40.8246527Z` | `git check-ignore -v -- .env server/data.db spec-driven-development/ledger/fleet.db` | Exit 0; all three paths ignored by recorded rules |
| `2026-07-10T16:44:40.8246527Z` | Safe `Get-Item` metadata for ignored paths | Success; sizes only, no contents |
| `2026-07-10T16:44:40.8246527Z` | `git ls-files -s -- AGENT_ONBOARDING.md` | Exit 0; tracked index blob recorded |
| `2026-07-10T16:44:40.8246527Z` | `git ls-files -s -- server public package.json package-lock.json` | Exit 0; 16 protected index entries |
| `2026-07-10T16:44:40.8246527Z` | `git diff --name-only -- server public package.json package-lock.json` | Exit 0; protected diff count 0 |
| `2026-07-10T16:44:40.8246527Z` | Safe `Get-Item` and `Get-FileHash -Algorithm SHA256` for `.sdd-archaeology.json`, all `.sdd-proposal` files, and `CON` | Success; 8 accessible files, 0 inaccessible failures; contents not printed |
| `2026-07-10T16:44:40.8246527Z` | Target-file metadata check | `GIT-BASELINE.md` absent before creation |

## Post-write distinction

- Captured pre-evidence baseline: 430 porcelain entries = 1 tracked deletion + 1 tracked modification + 428 untracked paths.
- Expected and subsequently verified post-write delta: exactly one additional untracked path, `spec-driven-development/sprints/PI-1/sprint-1-readiness-baseline/evidence/GIT-BASELINE.md`.
- Therefore expected post-write porcelain total: 431 entries = 1 tracked deletion + 1 tracked modification + 429 untracked paths.
- No staging, commit, push, merge, rebase, branch/worktree creation, cleanup, restoration, application work, or Sprint 2 procedure execution is part of this evidence task.
