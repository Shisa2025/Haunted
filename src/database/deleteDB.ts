import { pool } from './client';

async function deleteDB() {
  try {
    // Drop tables from haunteddb schema
    await pool.query('DROP TABLE IF EXISTS haunteddb.time_record');
    console.log('Table "time_record" dropped from schema "haunteddb"');

    await pool.query('DROP TABLE IF EXISTS haunteddb.feedback');
    console.log('Table "feedback" dropped from schema "haunteddb"');

    // Drop schema
    await pool.query('DROP SCHEMA IF EXISTS haunteddb CASCADE');
    console.log('Schema "haunteddb" dropped');

  } catch (err) {
    console.error('Error dropping schema/tables:', err);
  } finally {
    await pool.end();
  }
}

deleteDB();