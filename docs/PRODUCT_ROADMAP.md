# Product Roadmap — From Demo to Sellable Product

**Owner:** Rodolfo · **Maintained by:** PM agent · **Last updated:** 2026-07-09

This document reframes the project. Goal is no longer a personal tool — it is a **product/framework
sold to real small-business owners**. This is the gap analysis from today's single-user demo to a
robust, sellable product, plus a recommended build sequence.

---

## 0. The pivotal fork (decide first — it shapes everything below)

**How is this sold?**

- **A. Hosted SaaS** — you run it in the cloud; owners sign up, connect their accounts, pay a
  subscription. You own hosting, security, billing, uptime, LLM costs.
- **B. Self-hostable / white-label framework** — you sell the software to agencies, bookkeepers,
  or developers who deploy it per client (or clients self-host). You own the framework, packaging,
  docs, licensing; they own hosting.
- **C. Both** — open-core framework + a hosted offering (common path, but more surface area).

Most of the hardening below is **shared** across A and B. The differences are concentrated in
**tenancy, billing, deployment, and support** (flagged with 🔀).

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
- OAuth connect flows for QuickBooks, PayPal, HubSpot; outbound email (Gmail/Microsoft 365/SMTP).
- Token storage (encrypted), refresh handling, per-tenant connection status.
- Graceful degradation when a connector is disconnected or an API is down.
- Keep the existing tool interface stable — swap mock bodies for real API calls.

### T2. Accounts, tenancy & data isolation 🔀
- User signup/login (email + password or SSO); business/workspace model.
- Strict per-tenant data isolation (one owner never sees another's data).
- Roles (owner, staff) if teams are in scope.
- Migrate persistence from a single local SQLite file to a per-tenant model
  (Postgres for hosted SaaS; still-simple option for self-host).

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

### T5. Billing & packaging 🔀
- Subscription billing (e.g. Stripe): plans, trials, upgrades, dunning.
- Usage metering tied to LLM cost so pricing stays profitable.
- Entitlements: which workflows/connectors each plan unlocks.

### T6. Deployment & operations 🔀
- Move off localhost: cloud hosting, environment config, CI/CD, backups.
- Observability: structured logs, error tracking, per-tenant usage dashboards.
- Uptime/runbook basics; secrets in a vault, not `.env`.

### T7. Onboarding & product polish — **conversion**
- Guided "connect your accounts" setup; empty-state guidance.
- Customizable workflows/branding (the "framework" angle — owners tailor to their business).
- In-app help, clear error messages, sample/demo mode for prospects.

### T8. Legal & compliance — **required to charge money for financial tooling**
- Terms of Service, Privacy Policy, DPA; data-processing disclosures.
- Basic GDPR/CCPA posture (export/delete). Consider SOC2 later if selling upmarket.

---

## 3. Recommended sequence (theme order, not a commitment)

1. **Decide the business model** (§0) — unblocks tenancy/billing/deploy decisions.
2. **T1 first real connector** (email-send-on-approval) — smallest real, most convincing, reversible-ish.
3. **T3 security foundation** (encrypted creds, audit log, prompt-injection wrapping) — before real money data.
4. **T2 accounts + tenancy** — the structural leap from demo to product.
5. **T1 remaining connectors** (QuickBooks/PayPal/HubSpot OAuth).
6. **T4 reliability + cost control**, then **T5 billing**, then **T6 deploy/ops**.
7. **T7 onboarding polish** and **T8 legal** in parallel as launch nears.

> Each theme becomes one or more `docs/tasks/TASK-###` briefs dispatched to worker sessions,
> one isolated area at a time to avoid conflicts.

---

## 4. Immediate next task (once model is chosen)
Regardless of A/B/C, the safest high-value first step is **T1: real outbound email on approval**.
It proves "this is real," keeps the approval guardrail, and forces the first real-secret-handling
pattern (which T3 then generalizes). PM will write `TASK-002` for it after the §0 decision.
