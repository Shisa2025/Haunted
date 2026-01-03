'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function UploadForm() {
  const searchParams = useSearchParams();
  const session = searchParams.get('session');

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/upload-record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session, email, nickname }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error || 'Upload failed');
      }
    } catch (err) {
      setMessage('Network error');
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center p-8">
        <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Invalid Session</h1>
          <p>Please return to the game and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Upload Your Record</h1>
        <p className="mb-6 text-gray-300 text-center">
          Enter your email and nickname to save your clear time.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Nickname</label>
            <input
              type="text"
              placeholder="Your Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 rounded font-bold transition-colors"
          >
            {loading ? 'Uploading...' : 'Upload Record'}
          </button>
        </form>

        {message && (
          <div className={`mt-4 p-3 rounded text-center ${
            message.includes('success') ? 'bg-green-600' : 'bg-red-600'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}