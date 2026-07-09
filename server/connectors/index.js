// Connector layer: mock QuickBooks / PayPal / HubSpot.
// Each read function mimics what a live API would return. Swap the JSON reads
// for real OAuth API calls to go to production — the tool interface stays the same.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const load = (f) => JSON.parse(readFileSync(join(__dirname, "..", "data", f), "utf8"));

const qb = load("quickbooks.json");
const pp = load("paypal.json");
const hs = load("hubspot.json");
const inv = load("inventory.json");

// In-memory "outbox": actions Claude proposes that a human must approve before
// they actually send/post/pay. Nothing here touches the real world until approved.
export const outbox = [];
let outboxSeq = 1;

function queueAction(action) {
  const item = { id: `ACT-${outboxSeq++}`, status: "pending_approval", created: new Date().toISOString(), ...action };
  outbox.push(item);
  return item;
}

export const connectors = {
  quickbooks: {
    connected: true,
    getBusinessProfile: () => qb.business,
    listInvoices: ({ status } = {}) =>
      status ? qb.invoices.filter((i) => i.status === status) : qb.invoices,
    getCashPosition: () => {
      const open = qb.invoices.filter((i) => i.status !== "paid");
      const receivable = open.reduce((s, i) => s + i.amount, 0);
      const overdue = qb.invoices.filter((i) => i.status === "overdue").reduce((s, i) => s + i.amount, 0);
      return { bank_balance_estimate: pp.balance.available, accounts_receivable: receivable, overdue_receivable: overdue };
    }
  },
  paypal: {
    connected: true,
    getBalance: () => pp.balance,
    listSettlements: ({ status } = {}) =>
      status ? pp.settlements.filter((s) => s.status === status) : pp.settlements,
    listDisputes: () => pp.disputes
  },
  hubspot: {
    connected: true,
    getPipeline: () => hs.pipeline,
    listLeads: ({ status } = {}) =>
      status ? hs.leads.filter((l) => l.status === status) : hs.leads,
    getCampaigns: () => hs.campaigns
  },
  inventory: {
    connected: true,
    historyStart: inv.history_start,
    listProducts: () =>
      inv.products.map(({ monthly_units, ...rest }) => rest),
    getProduct: ({ sku } = {}) => inv.products.find((p) => p.sku === sku),
    getSalesHistory: ({ sku } = {}) => {
      const p = inv.products.find((x) => x.sku === sku);
      return p ? { sku, unit: p.unit, history_start: inv.history_start, monthly_units: p.monthly_units } : { error: `Unknown sku ${sku}` };
    },
    all: () => inv.products
  }
};

// Actions that require human approval (queued, never auto-sent)
export const actions = {
  draftInvoiceReminder: ({ invoice_id, customer, email, amount, tone = "friendly", body }) =>
    queueAction({ kind: "email", channel: "PayPal / email", to: email,
      subject: `Reminder: invoice ${invoice_id} (${tone})`,
      summary: `Payment reminder to ${customer} for $${amount} (${invoice_id})`, body }),
  draftLeadReply: ({ lead_id, name, email, body }) =>
    queueAction({ kind: "email", channel: "HubSpot", to: email,
      subject: `Reply to new lead ${name}`, summary: `Reply to lead ${name} (${lead_id})`, body }),
  createReport: ({ title, body }) =>
    queueAction({ kind: "document", channel: "Report", summary: title, subject: title, body }),
  draftPurchaseOrder: ({ sku, product, quantity, unit, supplier, needed_by, unit_cost, rationale }) =>
    queueAction({
      kind: "purchase_order", channel: supplier || "Supplier",
      to: supplier,
      subject: `PO: ${quantity} ${unit || "units"} of ${product} (${sku})`,
      summary: `Order ${quantity} ${unit || "units"} of ${product}${needed_by ? ` by ${needed_by}` : ""}`,
      body: `Purchase order\nProduct: ${product} (${sku})\nQuantity: ${quantity} ${unit || "units"}\nSupplier: ${supplier || "—"}\nNeeded by: ${needed_by || "—"}\nEst. cost: ${unit_cost ? "$" + (unit_cost * quantity).toFixed(2) : "—"}\n\nWhy: ${rationale || "—"}`
    })
};

export function connectorStatus() {
  return [
    { id: "quickbooks", name: "Intuit QuickBooks", connected: connectors.quickbooks.connected, jobs: "Cash flow, invoices, month-end close" },
    { id: "paypal", name: "PayPal", connected: connectors.paypal.connected, jobs: "Settlements, disputes, refunds" },
    { id: "hubspot", name: "HubSpot", connected: connectors.hubspot.connected, jobs: "Pipeline, leads, campaigns" },
    { id: "inventory", name: "Inventory / Warehouse", connected: connectors.inventory.connected, jobs: "Stock levels, demand forecast, reorder plan" }
  ];
}
