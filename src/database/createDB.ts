import { pool } from './client';

async function createDB() {
  try {
    // Create schema instead of database
    await pool.query('CREATE SCHEMA IF NOT EXISTS haunteddb');
    console.log('Schema "haunteddb" created');

    // Create tables in the haunteddb schema
    await pool.query(`
      CREATE TABLE IF NOT EXISTS haunteddb.time_record (
        email VARCHAR(255) UNIQUE NOT NULL,
        nickname VARCHAR(255) UNIQUE NOT NULL,
        time TIMESTAMP NOT NULL
      );
    `);
    console.log('Table "time_record" created in schema "haunteddb"');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS haunteddb.feedback (
        email VARCHAR(255) UNIQUE NOT NULL,
        nickname VARCHAR(255) UNIQUE NOT NULL
      );
    `);
    console.log('Table "feedback" created in schema "haunteddb"');

  } catch (err) {
    console.error('Error creating schema/tables:', err);
  } finally {
    await pool.end();
  }
}

createDB();