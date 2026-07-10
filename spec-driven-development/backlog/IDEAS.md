# Ideas Inbox

Raw ideas captured here. Triage moves them to BACKLOG.md with RICE scoring.

## Format
- **[YYYY-MM-DD]** Idea title -- brief description

## Ideas

- **[2026-07-09]** Add a test runner + first smoke test -- establish a Node test setup (e.g. `node --test`) and a smoke test that boots the server and asserts `GET /api/health` returns key + model status. First SDD pilot for this project.

### 2026-07-10 -- Inventory-business SaaS beachhead

**Owner wording (verbatim):**

> Yes, well for now lets start with invetory business (option 2), but with the goal to expand later to Option 1. My idea is to target initially small business in el Paso Texas, and Juarez Mexico, that operate that way, coffee shopts, wholesalers (like interior design wholesalers that sells floors, wall materials, like vinil floors, etc )

**Decision already made:** Build a hosted SaaS product for real small-business owners. Start with inventory-based businesses in El Paso, Texas, and Ciudad Juárez, Mexico, while preserving a path to serve small businesses beyond inventory later.

**Recommended initial segment:** Owner-operated or owner-led inventory businesses in the El Paso-Ciudad Juárez market, initially coffee shops and flooring, wall-material, and related building/interior-finish wholesalers. The shared product need is operational visibility and controlled follow-through, not an industry-specific accounting system.

**Recommended value proposition:** Give an inventory-business owner one trusted daily view of stock risks, near-term cash obligations, receivables, and sales follow-up, then turn the highest-priority issues into drafts the owner can review and approve. The product should use reusable business concepts and configurable workflows so later segments can be added without redefining the core product.

**Recommended MVP boundary:**

- **Serves:** One owner and one business per workspace in the initial segment and geography.
- **Top jobs:** Identify stockout and overstock risks; decide what needs attention today; anticipate near-term cash pressure; follow up on overdue invoices and promising leads; review and approve any outbound action.
- **Required capabilities:** Secure hosted account and isolated business workspace; guided business setup; reliable ingestion of the minimum inventory, sales, purchasing, receivables, and cash-obligation data needed for the validated jobs; daily prioritized business pulse; focused draft workflows; explicit approval gate for every send, post, or pay action; action history and clear source-data visibility.
- **Non-goals:** Serving every small-business type at launch; replacing accounting, point-of-sale, inventory, or CRM systems; autonomous send, post, order, or payment actions; broad connector coverage; advanced optimization or forecasting; multi-location, franchise, or enterprise administration; cross-border tax or legal advice.

**Triage status:** Untriaged. Available evidence establishes owner strategy but does not establish Reach, customer Impact, Confidence, or Effort. No RICE score is assigned.

**Validation needed before triage:**

- Confirm the priority jobs and current workarounds with prospective coffee-shop and wholesaler owners on both sides of the border.
- Identify which systems or files hold inventory, sales, purchasing, receivables, and cash-obligation data for those businesses.
- Test willingness to connect business data, use an approval queue, and pay for the proposed outcome.
- Determine whether Spanish-language and cross-border operational needs are launch requirements.
- Narrow the first customer profile if coffee shops and material wholesalers show materially different needs.
- Obtain Architect and Software Developer assessments before assigning Effort.

**Next product gate:** Approve a validated beachhead problem statement and first-customer profile, with evidence for all four RICE inputs. Only then triage this idea and decide whether it is ready for clarification and specification.
