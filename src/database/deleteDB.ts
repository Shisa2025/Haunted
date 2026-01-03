import { pool } from './client';

async function deleteDB() {
  try {
    // Drop tables from HauntedDB
    await pool.query('DROP TABLE IF EXISTS time_record');
    console.log('Table "time_record" dropped from HauntedDB');

    await pool.query('DROP TABLE IF EXISTS feedback');
    console.log('Table "feedback" dropped from HauntedDB');

  } catch (err) {
    console.error('Error dropping tables:', err);
  } finally {
    await pool.end();
  }
}

deleteDB();