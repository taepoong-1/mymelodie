import Database from "better-sqlite3";
import path from "path";

// Singleton pattern for database connection
let db: Database.Database | undefined;

export function getDb() {
  if (db) return db;

  // In Next.js, we need to be careful about where the DB file is located
  // For development, root directory is fine.
  const dbPath = path.join(process.cwd(), "data.db");
  db = new Database(dbPath, { verbose: console.log });

  // Initialize Schema
  db.exec(`
    CREATE TABLE IF NOT EXISTS tests (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      category TEXT,
      view_count INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      test_id TEXT,
      text TEXT,
      FOREIGN KEY(test_id) REFERENCES tests(id)
    );

    CREATE TABLE IF NOT EXISTS results (
      id TEXT PRIMARY KEY,
      test_id TEXT,
      title TEXT,
      description TEXT,
      type TEXT,
      FOREIGN KEY(test_id) REFERENCES tests(id)
    );
  `);

  return db;
}

export function incrementViewCount(testId: string) {
  const db = getDb();
  const stmt = db.prepare(
    "UPDATE tests SET view_count = view_count + 1 WHERE id = ?",
  );
  stmt.run(testId);
}
