'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UploadForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const session = searchParams.get('session');
  const time = searchParams.get('time');

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleBackClick = () => {
    if (confirm('Returning will lose your time record. Are you sure you want to go back?')) {
      router.push('/');
    }
  };

  const handleGoToRanking = () => {
    router.push('/ranking');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const displayTime = time ? formatTime(parseInt(time, 10)) : 'N/A';

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
        setIsSuccessful(true);
      } else {
        setMessage(data.error || 'Upload failed');
        setIsSuccessful(false);
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
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute top-8 left-8 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
      >
        <span>←</span> Back
      </button>

      <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Upload Your Record</h1>
        <p className="mb-6 text-gray-300 text-center">
          Congratulations on clearing the game! Add your nickname and email to upload your record. We may reach out using the email you provide.
        </p>

        {time && (
          <div className="mb-6 p-4 bg-purple-900 rounded border border-purple-500 text-center">
            <p className="text-sm text-gray-300 mb-1">Clear Time</p>
            <p className="text-3xl font-bold text-purple-300">{displayTime}</p>
          </div>
        )}

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
            isSuccessful ? 'bg-green-600' : 'bg-red-600'
          }`}>
            <p>{message}</p>
            {isSuccessful && (
              <button
                onClick={handleGoToRanking}
                className="mt-4 w-full p-3 bg-blue-600 hover:bg-blue-700 rounded font-bold transition-colors"
              >
                View Rankings
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}