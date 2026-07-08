import "dotenv/config";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { runAgent, MODEL } from "./agent.js";
import { workflows, findWorkflow } from "./workflows.js";
import { connectorStatus, outbox } from "./connectors/index.js";

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
