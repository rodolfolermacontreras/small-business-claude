// The agentic loop: sends messages to Claude, executes any tools it calls,
// feeds results back, and repeats until Claude produces a final answer.
import Anthropic from "@anthropic-ai/sdk";
import { tools, runTool } from "./tools.js";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MODEL = process.env.CLAUDE_MODEL || "claude-haiku-4-5-20251001";

const SYSTEM = `You are the AI copilot inside "Claude for Small Business" — a helpful, plain-spoken assistant for a small business owner.

Rules:
- The owner is busy and not a finance expert. Be clear, concrete, and brief. Use plain English, short paragraphs, and tables where helpful.
- Use the connected tools (QuickBooks, PayPal, HubSpot, Inventory) to get REAL data before answering money/sales/stock questions. Never invent numbers — call a tool. For inventory forecasts and reorder math, always call inv_optimize rather than estimating yourself.
- You are human-in-the-loop. Anything that would send, post, pay, or order must go through a draft_* or create_report tool, which only QUEUES it for the owner's approval. Never claim you sent something or placed an order.
- When you finish a workflow, end with a short, friendly summary of what you did and what needs the owner's approval.
- Always show your math when giving financial forecasts.`;

// Runs the agent to completion. Returns { text, steps } where steps is a
// timeline of tool calls (for the UI to show what the agent did).
export async function runAgent(messages, { maxTurns = 12, onStep } = {}) {
  const convo = [...messages];
  const steps = [];

  for (let turn = 0; turn < maxTurns; turn++) {
    const res = await client.messages.create({
      model: MODEL,
      max_tokens: 2048,
      system: SYSTEM,
      tools,
      messages: convo
    });

    convo.push({ role: "assistant", content: res.content });

    if (res.stop_reason !== "tool_use") {
      const text = res.content.filter((b) => b.type === "text").map((b) => b.text).join("\n").trim();
      return { text, steps, messages: convo };
    }

    // Execute every tool call in this turn
    const toolResults = [];
    for (const block of res.content) {
      if (block.type !== "tool_use") continue;
      const result = await runTool(block.name, block.input);
      const step = { tool: block.name, input: block.input, result };
      steps.push(step);
      if (onStep) onStep(step);
      toolResults.push({ type: "tool_result", tool_use_id: block.id, content: JSON.stringify(result) });
    }
    convo.push({ role: "user", content: toolResults });
  }

  return { text: "I reached my step limit before finishing. Try narrowing the request.", steps, messages: convo };
}

export { MODEL };
