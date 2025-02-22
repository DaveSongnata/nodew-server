import { sql } from './db.js';

async function createTable() {
  try {
    const result = await sql`
      CREATE TABLE IF NOT EXISTS videos (
          id TEXT PRIMARY KEY,
          description TEXT NOT NULL,
          title TEXT,
          duration INTEGER NOT NULL
      );
    `;

    console.log("Table created", result); 
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

createTable(); 