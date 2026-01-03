import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/database/client';

const EXPECTED_TOKEN = 'SHEEPSHAKE_2026_ABC123_2548376679';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.substring(7); // Remove 'Bearer '
    if (token !== EXPECTED_TOKEN) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

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