const $ = (s) => document.querySelector(s);
const sessionId = "web-" + Math.random().toString(36).slice(2, 8);

const els = {
  messages: $("#messages"),
  input: $("#input"),
  form: $("#composer"),
  send: $("#sendBtn"),
  workflows: $("#workflows"),
  connectors: $("#connectors"),
  outbox: $("#outbox"),
  model: $("#modelTag"),
  dot: $("#healthDot"),
  reset: $("#resetBtn"),
  themeToggle: $("#themeToggle"),
  outboxCount: $("#outboxCount"),
  approveAll: $("#approveAll"),
  toasts: $("#toasts")
};

// ---- Theme ----------------------------------------------------------------
function applyTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark", dark);
  if (els.themeToggle) els.themeToggle.textContent = dark ? "☀️" : "🌙";
}
applyTheme(localStorage.getItem("theme") || "light");
els.themeToggle?.addEventListener("click", () => {
  const next = document.body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("theme", next);
  applyTheme(next);
});

// ---- Toasts ---------------------------------------------------------------
function toast(message, kind = "") {
  if (!els.toasts) return;
  const t = document.createElement("div");
  t.className = "toast " + kind;
  t.textContent = message;
  els.toasts.appendChild(t);
  setTimeout(() => {
    t.classList.add("leaving");
    t.addEventListener("animationend", () => t.remove(), { once: true });
  }, 2600);
}

// ---- Boot -----------------------------------------------------------------
async function boot() {
  try {
    const health = await (await fetch("/api/health")).json();
    els.dot.className = "status " + (health.ok ? "ok" : "bad");
    els.model.textContent = health.ok ? `Model: ${health.model}` : "⚠ API key not configured";
  } catch { els.dot.className = "status bad"; }

  const cfg = await (await fetch("/api/config")).json();
  renderConnectors(cfg.connectors);
  renderWorkflows(cfg.workflows);
  refreshOutbox();
}

function renderConnectors(list) {
  els.connectors.innerHTML = list.map((c) => `
    <div class="connector">
      <span class="dot"></span>
      <div><b>${c.name}</b><small>${c.jobs}</small></div>
    </div>`).join("");
}

function renderWorkflows(list) {
  els.workflows.innerHTML = list.map((w) => `
    <button class="wf" data-id="${w.id}">
      <span class="ico">${w.icon}</span>
      <span><b>${w.title}</b><small>${w.blurb}</small><br><span class="cat">${w.category}</span></span>
    </button>`).join("");
  els.workflows.querySelectorAll(".wf").forEach((b) =>
    b.addEventListener("click", () => runWorkflow(b.dataset.id, b.querySelector("b").textContent)));
}

// ---- Chat -----------------------------------------------------------------
function clearWelcome() { const w = els.messages.querySelector(".welcome"); if (w) w.remove(); }

function addMsg(role, text) {
  clearWelcome();
  const div = document.createElement("div");
  div.className = "msg " + role;
  div.innerHTML = role === "bot" ? marked.parse(text) : escapeHtml(text);
  els.messages.appendChild(div);
  els.messages.scrollTop = els.messages.scrollHeight;
  return div;
}

function addTyping() {
  clearWelcome();
  const d = document.createElement("div");
  d.className = "typing"; d.innerHTML = `Claude is working<span class="dots"></span>`;
  els.messages.appendChild(d);
  els.messages.scrollTop = els.messages.scrollHeight;
  return d;
}

function renderSteps(steps) {
  if (!steps?.length) return;
  const wrap = document.createElement("div");
  wrap.className = "steps";
  const names = { qb: "QuickBooks", pp: "PayPal", hs: "HubSpot" };
  wrap.innerHTML = steps.map((s) => {
    const src = names[s.tool.split("_")[0]] || "Action";
    return `<div class="step"><span class="tag">${s.tool}</span> called ${src}</div>`;
  }).join("");
  els.messages.appendChild(wrap);
}

async function send(payload, displayText) {
  addMsg("user", displayText);
  setBusy(true);
  const typing = addTyping();
  try {
    const res = await fetch("/api/chat", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, ...payload })
    });
    const data = await res.json();
    typing.remove();
    if (!res.ok) { addMsg("bot", "⚠️ " + (data.error || "Something went wrong.")); return; }
    renderSteps(data.steps);
    addMsg("bot", data.reply || "(no response)");
    const before = pendingCount;
    renderOutbox(data.outbox || []);
    if (pendingCount > before) {
      const n = pendingCount - before;
      toast(`📋 ${n} draft${n > 1 ? "s" : ""} queued for your approval`);
    }
  } catch (err) {
    typing.remove();
    addMsg("bot", "⚠️ Network error: " + err.message);
  } finally {
    setBusy(false);
  }
}

function runWorkflow(id, title) { send({ workflowId: id }, `▶ Run workflow: ${title}`); }

els.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = els.input.value.trim();
  if (!text) return;
  els.input.value = "";
  send({ message: text }, text);
});

els.reset.addEventListener("click", async () => {
  await fetch("/api/reset", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sessionId }) });
  els.messages.innerHTML = `<div class="welcome"><h2>👋 Fresh start.</h2><p>Pick a workflow or ask me anything about your business.</p></div>`;
});

function setBusy(b) { els.send.disabled = b; els.input.disabled = b; }

// ---- Outbox / approvals ---------------------------------------------------
let pendingCount = 0;

async function refreshOutbox() {
  const list = await (await fetch("/api/outbox")).json();
  renderOutbox(list);
}

async function approveDraft(id) {
  await fetch(`/api/outbox/${id}/approve`, { method: "POST" });
  toast("✓ Approved", "ok");
  refreshOutbox();
}

function renderOutbox(list) {
  const pending = list.filter((o) => o.status !== "approved");
  pendingCount = pending.length;

  // Count badge
  if (els.outboxCount) {
    els.outboxCount.textContent = pendingCount;
    els.outboxCount.hidden = pendingCount === 0;
  }
  // Approve-all button (only when 2+ pending)
  if (els.approveAll) els.approveAll.hidden = pendingCount < 2;

  if (!list.length) { els.outbox.innerHTML = `<p class="empty">Nothing waiting yet.</p>`; return; }
  els.outbox.innerHTML = list.map((o) => `
    <div class="card ${o.status === "approved" ? "approved" : ""}">
      <span class="kind">${o.kind}</span>
      <h3>${escapeHtml(o.summary || o.subject || "")}</h3>
      ${o.to ? `<div class="to">To: ${escapeHtml(o.to)} · ${escapeHtml(o.channel || "")}</div>` : ""}
      ${o.body ? `<div class="body">${escapeHtml(o.body)}</div>` : ""}
      ${o.status === "approved"
        ? `<span class="approved-tag">✓ Approved</span>`
        : `<button data-id="${o.id}">Approve & send</button>`}
    </div>`).join("");
  els.outbox.querySelectorAll("button[data-id]").forEach((b) =>
    b.addEventListener("click", () => approveDraft(b.dataset.id)));
}

els.approveAll?.addEventListener("click", async () => {
  const list = await (await fetch("/api/outbox")).json();
  const pending = list.filter((o) => o.status !== "approved");
  await Promise.all(pending.map((o) => fetch(`/api/outbox/${o.id}/approve`, { method: "POST" })));
  toast(`✓ Approved all ${pending.length}`, "ok");
  refreshOutbox();
});

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

boot();
