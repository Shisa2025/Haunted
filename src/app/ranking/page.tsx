import { pool } from '@/database/client';

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default async function RankingPage() {
  const { rows } = await pool.query(
    'SELECT id, nickname, email, time FROM time_record ORDER BY time ASC, id ASC'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto bg-gray-800/90 p-8 rounded-2xl border border-gray-700 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-400">Leaderboard</p>
            <h1 className="text-3xl font-bold">Ranking</h1>
          </div>
          <a
            href="/"
            className="text-sm text-gray-300 hover:text-white underline underline-offset-4"
          >
            Back to Home
          </a>
        </div>

        <p className="text-gray-300 mb-6">
          Congratulations on clearing the game! Rankings are ordered by the fastest clear time. We may reach out using the email you provided.
        </p>

        {rows.length === 0 ? (
          <div className="text-center text-gray-400 py-12">No records yet.</div>
        ) : (
          <div className="divide-y divide-gray-700 border border-gray-700 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[60px_1fr_140px] px-4 py-3 bg-gray-800/80 text-sm text-gray-300 font-semibold">
              <span>#</span>
              <span>Nickname</span>
              <span className="text-right">Time</span>
            </div>
            {rows.map((row: { id: number; nickname: string; email: string; time: number }, index: number) => (
              <div
                key={row.id}
                className="grid grid-cols-[60px_1fr_140px] px-4 py-3 items-center text-gray-200 hover:bg-gray-800/60 transition-colors"
              >
                <span className="text-sm text-gray-400">{index + 1}</span>
                <div className="flex flex-col">
                  <span className="font-semibold">{row.nickname}</span>
                  <span className="text-xs text-gray-500 break-words">{row.email}</span>
                </div>
                <span className="text-right font-mono text-lg text-purple-200">{formatTime(row.time)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
