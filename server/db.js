// SQLite persistence layer (built-in node:sqlite — no native dependency, no build step).
// Stores chat sessions and the human-in-the-loop approval outbox so both survive restarts.
//
// node:sqlite is an experimental Node core module (v24 here). It works without any CLI flag;
// it only prints a one-time "SQLite is an experimental feature" warning on stderr at import.
import { DatabaseSync } from "node:sqlite";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
// DB lives beside the server code; git-ignored via *.db so it is never committed.
const DB_PATH = process.env.DB_PATH || join(__dirname, "data.db");

const db = new DatabaseSync(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS sessions (
    session_id TEXT PRIMARY KEY,
    messages   TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS outbox (
    id   TEXT PRIMARY KEY,
    seq  INTEGER NOT NULL,
    data TEXT NOT NULL
  );
`);

// --- Chat sessions ----------------------------------------------------------
// One row per session storing the full JSON messages array (message content can
// be a string OR an array of tool_use / tool_result blocks — JSON keeps it intact).

export function loadSession(sessionId) {
  const row = db.prepare("SELECT messages FROM sessions WHERE session_id = ?").get(sessionId);
  return row ? JSON.parse(row.messages) : [];
}

export function saveSession(sessionId, messages) {
  db.prepare(
    `INSERT INTO sessions (session_id, messages) VALUES (?, ?)
       ON CONFLICT(session_id) DO UPDATE SET messages = excluded.messages`
  ).run(sessionId, JSON.stringify(messages));
}

export function deleteSession(sessionId) {
  db.prepare("DELETE FROM sessions WHERE session_id = ?").run(sessionId);
}

// --- Approval outbox --------------------------------------------------------
// Each draft action is stored as JSON so /api/outbox returns the exact same
// objects it does today. `seq` preserves insertion order across restarts.

const numericSeq = (id) => {
  const n = parseInt(String(id).replace(/^\D+/, ""), 10);
  return Number.isFinite(n) ? n : 0;
};

export function insertOutboxItem(item) {
  db.prepare("INSERT OR REPLACE INTO outbox (id, seq, data) VALUES (?, ?, ?)")
    .run(item.id, numericSeq(item.id), JSON.stringify(item));
}

export function updateOutboxItem(item) {
  db.prepare("UPDATE outbox SET data = ? WHERE id = ?").run(JSON.stringify(item), item.id);
}

export function getOutboxItem(id) {
  const row = db.prepare("SELECT data FROM outbox WHERE id = ?").get(id);
  return row ? JSON.parse(row.data) : null;
}

export function listOutbox() {
  return db.prepare("SELECT data FROM outbox ORDER BY seq").all().map((r) => JSON.parse(r.data));
}

// Highest outbox sequence number persisted so far (0 if empty). Lets the
// connector continue ID numbering after a restart instead of colliding.
export function maxOutboxSeq() {
  const row = db.prepare("SELECT MAX(seq) AS m FROM outbox").get();
  return row && row.m != null ? row.m : 0;
}

export default db;
