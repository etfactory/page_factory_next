import Database from 'better-sqlite3';
import path from 'path';

// Define the database path (can be absolute or relative)
const dbPath = path.join(process.cwd(), 'portfolio.db');

// Initialize a new Database connection
const db = new Database(dbPath, { verbose: console.log });
db.pragma('journal_mode = WAL');

// Ensure the projects table exists
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_type TEXT NOT NULL,
    project_key TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    tech_stack TEXT,
    link_name TEXT,
    project_url TEXT,
    modal_description TEXT
  )
`);

export default db;
