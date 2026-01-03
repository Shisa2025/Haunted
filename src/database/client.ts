import { Pool } from 'pg';

const connectionString = 'postgresql://neondb_owner:npg_Y8kp6WOGroiQ@ep-lucky-lab-a4qskx5x-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const pool = new Pool({
  connectionString,
});

export { pool };