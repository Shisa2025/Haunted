import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      <main className="flex min-h-screen w-full max-w-4xl mx-auto flex-col items-center justify-center px-8 py-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          {/* Title with glow effect */}
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            Welcome to SheepShake!
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Discover my game development portfolio featuring innovative gameplay, stunning visuals, and captivating stories.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <Link href="/start-game">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                Start Game
              </button>
            </Link>
            <Link href="/more-info">
              <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                More Info
              </button>
            </Link>
          </div>

          {/* Project Showcase */}
          <div className="mt-16 w-full">
            <h2 className="text-3xl font-semibold text-white mb-8">Other Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Feedback Card */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <Link href="/feedback">
                  <div className="cursor-pointer">
                    <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">💬</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Feedback</h3>
                    <p className="text-gray-400">Share your thoughts and suggestions.</p>
                  </div>
                </Link>
              </div>

              {/* Ranking Card */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <Link href="/ranking">
                  <div className="cursor-pointer">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">🏆</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Ranking</h3>
                    <p className="text-gray-400">Check the leaderboard by fastest time.</p>
                  </div>
                </Link>
              </div>

              {/* Game Rules Card */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <Link href="/game-rules">
                  <div className="cursor-pointer">
                    <div className="w-full h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">📜</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Game Rules</h3>
                    <p className="text-gray-400">Learn the rules and get riddle hints.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
