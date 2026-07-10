# Product Roadmap — From Demo to Sellable Product

**Owner:** Rodolfo · **Maintained by:** PM agent · **Last updated:** 2026-07-10

This document reframes the project. Goal is no longer a personal tool — it is a **hosted SaaS
sold to real small-business owners**. This is the gap analysis from today's single-user demo to a
robust, sellable product, plus a recommended build sequence.

---

## 0. Product direction (owner decision, 2026-07-10)

The product will be a **hosted SaaS for real small-business owners**. The initial segment is
inventory-based businesses in El Paso, Texas, and Ciudad Juárez, Mexico, beginning with coffee
shops and flooring, wall-material, and related building/interior-finish wholesalers. The long-term
direction remains a broader all-small-business product.

**Initial value proposition:** Give an inventory-business owner one trusted daily view of stock
risks, near-term cash obligations, receivables, and sales follow-up, then turn priority issues into
drafts the owner can review and approve. Core business concepts and workflows must remain reusable
so future segments can be added without redefining the product.

**Current product gate:** Validate the beachhead problem and first-customer profile before committing
connector scope, pricing, or launch requirements. The untriaged framing and validation needs are
recorded in `spec-driven-development/backlog/IDEAS.md`.

---

## 1. Where we are today (honest baseline)
- Single-user local demo. One hard-coded fictional business ("Riverside Roasters").
- **Mock** connectors (QuickBooks/PayPal/HubSpot/Inventory) — no real data, no OAuth.
- One shared API key in `.env`; no user accounts, no auth, no tenant isolation.
- Persistence is a single local SQLite file (good for one machine; not multi-tenant).
- No billing, no deployment target, no monitoring, no cost controls, no compliance posture.
- Strong bones: clean tool/connector interface, human-in-the-loop approval, server-side math,
  no build step. These are the right foundations to productize.

---

## 2. Gap analysis — themes that must be true to sell this

### T1. Real integrations (replace the mocks) — **highest credibility**
- Connect the source systems validated for the initial segment; current candidates include
  QuickBooks, PayPal, HubSpot, inventory systems, and outbound email.
- Token storage (encrypted), refresh handling, per-tenant connection status.
- Graceful degradation when a connector is disconnected or an API is down.
- Keep the existing tool interface stable — swap mock bodies for real API calls.

### T2. Accounts, tenancy & data isolation
- User signup/login (email + password or SSO); business/workspace model.
- Strict per-tenant data isolation (one owner never sees another's data).
- Roles (owner, staff) if teams are in scope.
- Migrate persistence from a single local SQLite file to a hosted per-tenant model.

### T3. Security & trust — **table stakes for handling financial data**
- Secrets management (no plaintext keys; per-tenant connector creds encrypted at rest).
- Prompt-injection defense (untrusted business data flows into the LLM — wrap/segment it).
- PII handling & data retention policy; delete-my-data path.
- Audit log of every drafted/approved action (who, what, when).
- Rate limiting, input validation, dependency/supply-chain hygiene.
- Keep human-in-the-loop as the core safety guarantee — nothing sends/pays without approval.

### T4. Reliability & cost control — **protects margins and UX**
- LLM error handling: retries, timeouts, model fallback (cheap↔capable).
- Per-tenant token/cost budgets and metering (LLM cost is your COGS).
- Idempotency for approved actions (never double-send / double-charge).
- Health checks, graceful restarts, background job handling.

### T5. Billing & packaging
- Subscription billing (e.g. Stripe): plans, trials, upgrades, dunning.
- Usage metering tied to LLM cost so pricing stays profitable.
- Entitlements: which workflows/connectors each plan unlocks.

### T6. Deployment & operations
- Move off localhost: cloud hosting, environment config, CI/CD, backups.
- Observability: structured logs, error tracking, per-tenant usage dashboards.
- Uptime/runbook basics; secrets in a vault, not `.env`.

### T7. Onboarding & product polish — **conversion**
- Guided "connect your accounts" setup; empty-state guidance.
- Reusable, configurable workflows that can support later customer segments.
- In-app help, clear error messages, sample/demo mode for prospects.

### T8. Legal & compliance — **required to charge money for financial tooling**
- Terms of Service, Privacy Policy, DPA; data-processing disclosures.
- Basic GDPR/CCPA posture (export/delete). Consider SOC2 later if selling upmarket.

---

## 3. Recommended sequence (theme order, not a commitment)

1. **Validate the initial segment and MVP jobs** (§0) before selecting connector or launch scope.
2. **T1 first validated data connection** — prove the highest-priority customer job with real data.
3. **T3 security foundation** — required before handling real customer data.
4. **T2 accounts + tenancy** — the structural leap from demo to hosted product.
5. **T1 remaining validated connections** — add only those supported by customer evidence.
6. **T4 reliability + cost control**, then **T5 billing**, then **T6 deploy/ops**.
7. **T7 onboarding polish** and **T8 legal** in parallel as launch nears.

> This sequence is directional only. No theme becomes a task or sprint commitment before the
> current product gate is passed and the idea is triaged.

---

## 4. Immediate next product gate

Do not commit a connector, implementation task, or product sprint yet. First validate the priority
jobs, source systems, willingness to connect data and pay, language needs, and whether coffee shops
and material wholesalers can share one MVP. Use that evidence to assign Reach, Impact, Confidence,
and Effort before backlog triage.
