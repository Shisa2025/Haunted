import { pool } from './client';

async function checkTables() {
  try {
    const client = await pool.connect();
    try {
      // Check if tables exist
      const timeRecordExists = await client.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables
          WHERE table_name = 'time_record'
        );
      `);
      console.log('time_record table exists:', timeRecordExists.rows[0].exists);

      const feedbackExists = await client.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables
          WHERE table_name = 'feedback'
        );
      `);
      console.log('feedback table exists:', feedbackExists.rows[0].exists);

      // List all tables in current database
      const allTables = await client.query(`
        SELECT table_name FROM information_schema.tables
        WHERE table_schema = 'public';
      `);
      console.log('All tables in public schema:', allTables.rows.map(row => row.table_name));

    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Error checking tables:', err);
  } finally {
    await pool.end();
  }
}

checkTables();