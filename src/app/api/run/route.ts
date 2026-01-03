import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/database/client';

export async function POST(request: NextRequest) {
  try {
    const { clearTime, build } = await request.json();

    const result = await pool.query(
      'INSERT INTO temp_sessions (clear_time, build) VALUES ($1, $2) RETURNING id',
      [clearTime, build]
    );

    const sessionId = result.rows[0].id;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const claimUrl = `${baseUrl}/upload-record?session=${sessionId}`;

    return NextResponse.json({ claimUrl });
  } catch (err) {
    console.error('Error in /api/run:', err);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}