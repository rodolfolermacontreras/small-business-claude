# R1-T04 Onboarding Preservation Provenance

## Authority and capture

- Task: `R1-T04`.
- Capture date: `2026-07-10`.
- Branch: `sprint/pi-1-s1-readiness-baseline`.
- Source HEAD: `eff0b2de590ca49c66f55c8b92fe211b9da77389`.
- Authority: `spec-driven-development/exec/briefings/OWNER-DECISION-R1-T04-R1-T06-R1-T15-JOIN-WAVE-AUTHORIZATION-2026-07-10.md`.
- Baselines: `evidence/GIT-BASELINE.md` and `evidence/ASSET-MANIFEST.md`.
- Implementer: Principal Software Developer directly; no worker dispatched.

Preservation completed before removal. Full-content copies were limited to the deleted tracked root onboarding document and the six exact proposal-constitution files. The archaeology and `CON` artifacts were not copied because the authorization requires metadata and a non-secret summary unless raw preservation is affirmatively safe.

## Full-content preservation

| Source path | Preservation path | Source identifier | Evidence identifier | Verification | Disposition |
|---|---|---|---|---|---|
| Root `AGENT_ONBOARDING.md` tracked deletion | `evidence/onboarding/root-AGENT_ONBOARDING.md` | Git blob `7bca49a1a9c0a6f860874372b50cf3fb128e2abb` in HEAD and index | Git blob `7bca49a1a9c0a6f860874372b50cf3fb128e2abb`; SHA-256 `85B7CD44E564787F524D081D8B2AEDB229CAB5131682198F99B4C733D64743DA` | Exact Git blob match | Preserve existing worktree deletion; do not restore |
| `.sdd-proposal/constitution/decision-policy.md` | `evidence/onboarding/sdd-proposal-constitution/decision-policy.md` | SHA-256 `DBB7C919B012ABAFDDE6761BD88FDD0FDEDA2E0340DBD2E3738C3947E02AC097` | Same SHA-256 | Exact byte match | Remove source after verification |
| `.sdd-proposal/constitution/mission.md` | `evidence/onboarding/sdd-proposal-constitution/mission.md` | SHA-256 `82897966D8991B2A2F002452F40046CA57580D2270B9F2CFBAEFE58B44840214` | Same SHA-256 | Exact byte match | Remove source after verification |
| `.sdd-proposal/constitution/principles.md` | `evidence/onboarding/sdd-proposal-constitution/principles.md` | SHA-256 `E1F50891829186EEBFD7704BAC17DBAD769828B993F95E25E4ADD9C737A4ABFD` | Same SHA-256 | Exact byte match | Remove source after verification |
| `.sdd-proposal/constitution/quality-policy.md` | `evidence/onboarding/sdd-proposal-constitution/quality-policy.md` | SHA-256 `C233D32857B3ACD0EFAC8E8828AED104CEC366FA0F1A8EBE7EAA2AE1F3D4E327` | Same SHA-256 | Exact byte match | Remove source after verification |
| `.sdd-proposal/constitution/roadmap.md` | `evidence/onboarding/sdd-proposal-constitution/roadmap.md` | SHA-256 `7A9C37FFAC9C1FCC79E11AC53D70BC4AC1DCB840287F6632B4A22E9B8E4FAF7D` | Same SHA-256 | Exact byte match | Remove source after verification |
| `.sdd-proposal/constitution/tech-stack.md` | `evidence/onboarding/sdd-proposal-constitution/tech-stack.md` | SHA-256 `B84D53E77E6552346052C493CA335AA514DF4DC6DB6EC9C945893C6E03BCDFF4` | Same SHA-256 | Exact byte match | Remove source after verification |

The proposal copies are historical evidence only. They are superseded by the ratified host constitution and dated Level 2 owner decisions; their stale direct-to-`main`, workflow-count, persistence, runtime, and roadmap statements are not active guidance.

## Metadata-only preservation and safety summaries

### `.sdd-archaeology.json`

- Size: `607` bytes.
- SHA-256: `7929DEB03105F915A7D27EDA5B946F1A58EF29FD8B6287E518A9ABC709CE6B66`.
- Attributes at capture: `Archive`.
- Safe access: UTF-8 text, 32 lines, no NUL bytes, printable ratio `1.0`.
- Risk scan: zero secret-pattern matches and zero business-risk keyword matches; matched values were never printed.
- Non-secret summary: brownfield bootstrap archaeology metadata with top-level categories for target path, Git observations, detected language/package-manager arrays, empty test/CI/convention arrays, existing documentation, and inferred branching. It contains no application records or connector/business data.
- Raw-content handling: not preserved. Metadata and summary are sufficient for provenance under the authorization.
- Disposition: remove only after hash and provenance verification.

### `CON`

- Size: `27133` bytes.
- SHA-256: `ECA37A18B53BDE3D1FD0AD939AD433DE8E1BF83E15707E359D811CDA04338CC2`.
- Attributes at capture: `Archive`.
- Safe access: text-like content, 424 lines, no NUL bytes, printable ratio `1.0`.
- Risk scan: one secret-pattern keyword match and zero business-risk keyword matches; neither the matching text nor raw content was printed or preserved.
- Non-secret summary: temporary adoption-support text artifact associated with constitution/bootstrap work. Because a secret-related keyword was detected, no raw-content copy or detailed content extraction was made.
- Raw-content handling: affirmatively not safe for evidence preservation without broader inspection, which is unauthorized. Metadata and conservative non-secret summary are preserved instead.
- Disposition: removal is permitted because access and metadata hashing succeeded, the raw artifact is owner-authorized for removal, and no raw content is needed or copied.

## Protected retained path

- `project.config.json` remained read-only.
- Pre-mutation SHA-256: `2EF1A0EF804E5D5FBD6DC922C4A06DCEB55BBB49B90E38AC9ABACACE37D5702C`.
- Intended final disposition: retain unchanged as active host identity guidance below dated owner decisions.

## Safety boundary

No `.env`, database, business-data, or connector-data content was accessed. No broad cleanup, cache removal, `git clean`, staging, commit, push, pull-request, merge, rebase, branch/worktree operation, application/package change, test/CI/runtime validation, Sprint 2 work, ledger mutation, work-index mutation, or progress/state mutation was performed.
