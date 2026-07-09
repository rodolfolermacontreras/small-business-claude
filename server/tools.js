// Tool definitions exposed to Claude (Anthropic tool-use format) + dispatcher.
import { connectors, actions } from "./connectors/index.js";
import { optimizeAll, optimizeProduct } from "./optimizer.js";

export const tools = [
  {
    name: "qb_get_cash_position",
    description: "Get current cash position from QuickBooks: bank balance estimate, total accounts receivable, and overdue receivable.",
    input_schema: { type: "object", properties: {} }
  },
  {
    name: "qb_list_invoices",
    description: "List invoices from QuickBooks. Optionally filter by status.",
    input_schema: { type: "object", properties: { status: { type: "string", enum: ["overdue", "open", "paid"], description: "Filter by invoice status" } } }
  },
  {
    name: "pp_get_balance",
    description: "Get the current available PayPal balance.",
    input_schema: { type: "object", properties: {} }
  },
  {
    name: "pp_list_settlements",
    description: "List PayPal settlements (incoming/outgoing money). Optionally filter by status pending or completed.",
    input_schema: { type: "object", properties: { status: { type: "string", enum: ["pending", "completed"] } } }
  },
  {
    name: "pp_list_disputes",
    description: "List open PayPal disputes and refund requests that may need a response.",
    input_schema: { type: "object", properties: {} }
  },
  {
    name: "hs_get_pipeline",
    description: "Get the HubSpot sales pipeline (deals, stages, amounts, probabilities).",
    input_schema: { type: "object", properties: {} }
  },
  {
    name: "hs_list_leads",
    description: "List HubSpot leads. Optionally filter by status (e.g. new).",
    input_schema: { type: "object", properties: { status: { type: "string" } } }
  },
  {
    name: "hs_get_campaigns",
    description: "Get HubSpot marketing campaign performance (sends, opens, clicks, revenue, cost).",
    input_schema: { type: "object", properties: {} }
  },
  {
    name: "draft_invoice_reminder",
    description: "Draft a payment-reminder email for an overdue invoice. This is QUEUED for the owner's approval and is NOT sent automatically.",
    input_schema: {
      type: "object",
      properties: {
        invoice_id: { type: "string" }, customer: { type: "string" }, email: { type: "string" },
        amount: { type: "number" }, tone: { type: "string", enum: ["friendly", "firm", "final-notice"] },
        body: { type: "string", description: "Full email body text" }
      },
      required: ["invoice_id", "customer", "email", "amount", "body"]
    }
  },
  {
    name: "draft_lead_reply",
    description: "Draft a reply to a new sales lead. QUEUED for owner approval, not sent automatically.",
    input_schema: {
      type: "object",
      properties: { lead_id: { type: "string" }, name: { type: "string" }, email: { type: "string" }, body: { type: "string" } },
      required: ["lead_id", "name", "email", "body"]
    }
  },
  {
    name: "create_report",
    description: "Save a finished report/document (e.g. P&L summary, business pulse, campaign plan) to the owner's outbox for review and export.",
    input_schema: {
      type: "object",
      properties: { title: { type: "string" }, body: { type: "string", description: "Full report in markdown" } },
      required: ["title", "body"]
    }
  },
  {
    name: "inv_list_products",
    description: "List warehouse/inventory products with current on-hand stock, unit cost, supplier, and lead time.",
    input_schema: { type: "object", properties: {} }
  },
  {
    name: "inv_sales_history",
    description: "Get 24 months of unit sales history for one product (by SKU) for demand analysis.",
    input_schema: { type: "object", properties: { sku: { type: "string", description: "Product SKU" } }, required: ["sku"] }
  },
  {
    name: "inv_optimize",
    description: "Run the demand forecast + reorder optimization. Returns, per product: next-month forecast, safety stock, reorder point, days of cover, recommended order quantity, order-by date, and status (reorder_now / healthy / overstock). Optionally pass a single SKU.",
    input_schema: { type: "object", properties: { sku: { type: "string", description: "Optional: limit to one product SKU" } } }
  },
  {
    name: "draft_purchase_order",
    description: "Draft a purchase order for a product. QUEUED for the owner's approval, not sent to the supplier automatically.",
    input_schema: {
      type: "object",
      properties: {
        sku: { type: "string" }, product: { type: "string" }, quantity: { type: "number" },
        unit: { type: "string" }, supplier: { type: "string" }, needed_by: { type: "string", description: "Order-by or needed-by date" },
        unit_cost: { type: "number" }, rationale: { type: "string", description: "Short reason for this order" }
      },
      required: ["sku", "product", "quantity"]
    }
  }
];

const dispatch = {
  qb_get_cash_position: () => connectors.quickbooks.getCashPosition(),
  qb_list_invoices: (a) => connectors.quickbooks.listInvoices(a),
  pp_get_balance: () => connectors.paypal.getBalance(),
  pp_list_settlements: (a) => connectors.paypal.listSettlements(a),
  pp_list_disputes: () => connectors.paypal.listDisputes(),
  hs_get_pipeline: () => connectors.hubspot.getPipeline(),
  hs_list_leads: (a) => connectors.hubspot.listLeads(a),
  hs_get_campaigns: () => connectors.hubspot.getCampaigns(),
  draft_invoice_reminder: (a) => actions.draftInvoiceReminder(a),
  draft_lead_reply: (a) => actions.draftLeadReply(a),
  create_report: (a) => actions.createReport(a),
  inv_list_products: () => connectors.inventory.listProducts(),
  inv_sales_history: (a) => connectors.inventory.getSalesHistory(a),
  inv_optimize: (a = {}) => {
    const hs = connectors.inventory.historyStart;
    if (a && a.sku) {
      const p = connectors.inventory.getProduct({ sku: a.sku });
      return p ? optimizeProduct(p, hs) : { error: `Unknown sku ${a.sku}` };
    }
    return optimizeAll(connectors.inventory.all(), hs);
  },
  draft_purchase_order: (a) => actions.draftPurchaseOrder(a)
};

export async function runTool(name, input) {
  const fn = dispatch[name];
  if (!fn) return { error: `Unknown tool: ${name}` };
  try {
    return fn(input || {});
  } catch (err) {
    return { error: String(err?.message || err) };
  }
}
