import { pool } from './client';

async function deleteDB() {
  try {
    // Note: In NeonDB (managed PostgreSQL), you typically cannot drop databases
    // as you don't have superuser privileges. This script assumes you have the necessary permissions.
    // If it fails, you may need to drop the database manually in the Neon console.

    // Drop tables first (if they exist)
    await pool.query('DROP TABLE IF EXISTS time_record');
    console.log('Table "time_record" dropped');

    await pool.query('DROP TABLE IF EXISTS feedback');
    console.log('Table "feedback" dropped');

    // Drop database (may fail in Neon)
    await pool.query('DROP DATABASE "HauntedDB"');
    console.log('Database "HauntedDB" dropped successfully');

  } catch (err) {
    console.error('Error dropping database/tables:', err);
  } finally {
    await pool.end();
  }
}

deleteDB();