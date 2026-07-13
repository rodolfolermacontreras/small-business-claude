---
version: '1.1.0'
ratified: 2026-07-09
last_amended: 2026-07-10
amendment_authority: 'Rodolfo Lerma (Level 2 human owner)'
amendment_record: 'PI-1-S1-R1-T07-CONSTITUTION-AMENDMENT-AUTHORIZATION-2026-07-10'
proposal: false
---

# Mission

Owner: Rodolfo Lerma

## Current Implementation

Small-Business-Claude is currently a working local, single-user AI copilot demo that runs
on the owner's machine. It uses the Anthropic API, a plain-JavaScript web UI, local SQLite
persistence for chat sessions and the approval outbox, and seven ready-to-run workflows.
Its mock connector domains are QuickBooks, PayPal, HubSpot, and inventory.

Anything that would send, post, pay, or place an order remains a draft in the approval
outbox until the owner explicitly approves it. Connector implementations may change only
without silently changing the connector/tool contract, deterministic financial and
inventory calculations remain server-side, and secrets remain in `.env` only.

## Future Product Target

The future product direction is a hosted SaaS product for real small-business owners. The
approved beachhead direction is inventory-based businesses in El Paso, Texas, and Ciudad
Juarez, Mexico, beginning with coffee shops and flooring, wall-material, and related
building/interior-finish wholesalers. This direction is not evidence that hosted SaaS
capabilities are implemented or that a product feature set is committed.

## Immediate Customer-Discovery Gate

Before product backlog commitment or implementation, customer discovery must validate the
beachhead problem, first-customer profile, shared MVP jobs, source systems, language needs,
and willingness to pay. Discovery is not complete. This constitution records the gate but
does not claim customer validation, select connectors, or authorize product implementation.

## Observed Evidence

- Top-level doc: README.md

## Adoption Note

SDD is being wrapped around the existing project. This constitution should describe current reality before it prescribes changes.
