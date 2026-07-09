import "dotenv/config";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { runAgent, MODEL } from "./agent.js";
import { workflows, findWorkflow } from "./workflows.js";
import { connectors, connectorStatus, outbox } from "./connectors/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.static(join(__dirname, "..", "public")));

const PORT = process.env.PORT || 3000;

// Simple in-memory chat sessions: sessionId -> message array
const sessions = new Map();
function getSession(id) {
  if (!sessions.has(id)) sessions.set(id, []);
  return sessions.get(id);
}

app.get("/api/health", (req, res) => {
  const hasKey = !!process.env.ANTHROPIC_API_KEY && process.env.ANTHROPIC_API_KEY.startsWith("sk-ant");
  res.json({ ok: hasKey, model: MODEL, keyConfigured: hasKey });
});

app.get("/api/config", (req, res) => {
  res.json({ model: MODEL, workflows, connectors: connectorStatus() });
});

// Read-only business metrics for the dashboard tiles + chart.
// Uses the same connector layer as the agent — no data is mutated.
app.get("/api/metrics", (req, res) => {
  const invoices = connectors.quickbooks.listInvoices();
  const overdue = invoices.filter((i) => i.status === "overdue");
  const openInv = invoices.filter((i) => i.status !== "paid");
  const receivable = openInv.reduce((s, i) => s + i.amount, 0);
  const overdueTotal = overdue.reduce((s, i) => s + i.amount, 0);

  const balance = connectors.paypal.getBalance();
  const settlements = connectors.paypal.listSettlements();
  const pendingIn = settlements
    .filter((s) => s.status === "pending")
    .reduce((s, x) => s + x.net, 0);
  const disputes = connectors.paypal.listDisputes();

  const pipeline = connectors.hubspot.getPipeline();
  const openDeals = pipeline.filter((d) => d.stage !== "closed_won");
  const pipelineOpen = openDeals.reduce((s, d) => s + d.amount, 0);
  const pipelineWeighted = openDeals.reduce((s, d) => s + d.amount * d.probability, 0);

  const campaigns = connectors.hubspot.getCampaigns().map((c) => ({
    name: c.name,
    revenue: c.revenue,
    cost: c.cost,
    roi: c.cost > 0 ? +((c.revenue - c.cost) / c.cost).toFixed(2) : null
  }));

  // Recent cash movement from PayPal settlements (real dated data)
  const cashFlow = [...settlements]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((s) => ({ date: s.date, net: +s.net.toFixed(2), note: s.note }));

  res.json({
    cash_available: balance.available,
    accounts_receivable: receivable,
    overdue_total: overdueTotal,
    overdue_count: overdue.length,
    pending_incoming: pendingIn,
    pipeline_open: pipelineOpen,
    pipeline_weighted: pipelineWeighted,
    open_deals: openDeals.length,
    disputes_open: disputes.filter((d) => d.status !== "resolved").length,
    campaigns,
    cash_flow: cashFlow
  });
});

app.get("/api/outbox", (req, res) => res.json(outbox));

app.post("/api/outbox/:id/approve", (req, res) => {
  const item = outbox.find((o) => o.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  item.status = "approved";
  item.approved_at = new Date().toISOString();
  res.json(item);
});

// Run a chat message (optionally seeded by a workflow prompt)
app.post("/api/chat", async (req, res) => {
  const { sessionId = "default", message, workflowId } = req.body || {};
  const userText = workflowId ? findWorkflow(workflowId)?.prompt : message;
  if (!userText) return res.status(400).json({ error: "No message or workflow provided." });

  const convo = getSession(sessionId);
  convo.push({ role: "user", content: userText });

  try {
    const { text, steps, messages } = await runAgent(convo);
    sessions.set(sessionId, messages);
    res.json({ reply: text, steps, outbox });
  } catch (err) {
    console.error("Agent error:", err);
    res.status(500).json({ error: err?.message || "Agent failed", detail: String(err) });
  }
});

app.post("/api/reset", (req, res) => {
  const { sessionId = "default" } = req.body || {};
  sessions.delete(sessionId);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`\n  Claude for Small Business running:  http://localhost:${PORT}`);
  console.log(`  Model: ${MODEL}`);
  if (!process.env.ANTHROPIC_API_KEY?.startsWith("sk-ant")) {
    console.log("  ⚠  No ANTHROPIC_API_KEY found in .env — the app will start but chat will fail.");
  }
  console.log("");
});
