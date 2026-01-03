import { pool } from './client';

async function createDB() {
  try {
    // Note: In NeonDB (managed PostgreSQL), you typically cannot create or drop databases
    // as you don't have superuser privileges. This script assumes you have the necessary permissions.
    // If it fails, you may need to create the database manually in the Neon console.

    // Create database (may fail in Neon)
    await pool.query('CREATE DATABASE "HauntedDB"');
    console.log('Database "HauntedDB" created successfully');

    // Note: After creating the database, you would need to reconnect to it.
    // But since the pool is already connected to the specified database in the connection string,
    // the tables will be created in the current database.
    // To create in "HauntedDB", you would need to update the connection string and reconnect.

    // Create tables in the current database
    await pool.query(`
      CREATE TABLE IF NOT EXISTS time_record (
        email VARCHAR(255) UNIQUE NOT NULL,
        nickname VARCHAR(255) UNIQUE NOT NULL,
        time TIMESTAMP NOT NULL
      );
    `);
    console.log('Table "time_record" created');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS feedback (
        email VARCHAR(255) UNIQUE NOT NULL,
        nickname VARCHAR(255) UNIQUE NOT NULL
      );
    `);
    console.log('Table "feedback" created');

  } catch (err) {
    console.error('Error creating database/tables:', err);
  } finally {
    await pool.end();
  }
}

createDB();