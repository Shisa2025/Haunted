import { pool } from './client';

async function createDB() {
  try {
    // Create tables in HauntedDB
    await pool.query(`
      CREATE TABLE IF NOT EXISTS time_record (
        email VARCHAR(255) UNIQUE NOT NULL,
        nickname VARCHAR(255) UNIQUE NOT NULL,
        time FLOAT NOT NULL
      );
    `);
    console.log('Table "time_record" created in HauntedDB');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS feedback (
        email VARCHAR(255) UNIQUE NOT NULL,
        nickname VARCHAR(255) UNIQUE NOT NULL
      );
    `);
    console.log('Table "feedback" created in HauntedDB');

    // Create temp_sessions table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS temp_sessions (
        id SERIAL PRIMARY KEY,
        clear_time FLOAT NOT NULL,
        build VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log('Table "temp_sessions" created in HauntedDB');

  } catch (err) {
    console.error('Error creating tables:', err);
  } finally {
    await pool.end();
  }
}

createDB();