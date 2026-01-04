import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const pixelGridStyle = {
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.24) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
    opacity: 0.35,
  } as const;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#ffb88e,transparent_35%),radial-gradient(circle_at_80%_0%,#6b9fd4,transparent_30%),radial-gradient(circle_at_40%_80%,#ffb3d9,transparent_28%)] bg-gradient-to-br from-[#ffd5a8] via-[#7fa8d6] to-[#ffcce6] text-slate-900 font-sans">
      <main className="flex min-h-screen w-full max-w-5xl mx-auto flex-col items-center justify-center px-8 py-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-300 rounded-3xl mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-32 -left-24 w-72 h-72 bg-sky-300 rounded-3xl mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-pink-200 rounded-3xl mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute inset-0" style={pixelGridStyle}></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-10 top-20 h-10 w-10 bg-[#ffb703] shadow-[8px_8px_0_0_#fb8500] rounded-[6px]"></div>
            <div className="absolute right-16 top-36 h-8 w-8 bg-[#8ecae6] shadow-[8px_8px_0_0_#219ebc] rounded-[6px]"></div>
            <div className="absolute right-24 bottom-16 h-12 w-12 bg-[#ffd166] shadow-[8px_8px_0_0_#ef476f] rounded-[6px]"></div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            {/* Title with glow effect */}
            <h1 className="text-8xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_12px_28px_rgba(255,182,193,0.38)] animate-pulse whitespace-nowrap">
              Welcome to SheepShake!
            </h1>

            <p className="text-xl max-w-3xl leading-relaxed bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-pulse font-semibold">
              Race to clear the game in the shortest time possible for a chance to snag exclusive prizes.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <Link href="/start-game">
              <button className="px-16 py-7 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold text-2xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                Start Game
              </button>
            </Link>
            <Link href="/more-info">
              <button className="px-16 py-7 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-extrabold text-2xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                More Info
              </button>
            </Link>
          </div>

          {/* Project Showcase */}
          <div className="mt-16 w-full">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-pulse mb-8">Other Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Feedback Card */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1">
                <Link href="/feedback">
                  <div className="cursor-pointer">
                    <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-4 flex items-center justify-center shadow-inner">
                      <span className="text-4xl">💬</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Feedback</h3>
                    <p className="text-slate-600">Share your thoughts and suggestions.</p>
                  </div>
                </Link>
              </div>

              {/* Ranking Card */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1">
                <Link href="/ranking">
                  <div className="cursor-pointer">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg mb-4 flex items-center justify-center shadow-inner">
                      <span className="text-4xl">🏆</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Ranking</h3>
                    <p className="text-slate-600">Check the leaderboard by fastest time.</p>
                  </div>
                </Link>
              </div>

              {/* Game Rules Card */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1">
                <Link href="/game-rules">
                  <div className="cursor-pointer">
                    <div className="w-full h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg mb-4 flex items-center justify-center shadow-inner">
                      <span className="text-4xl">📜</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Game Rules</h3>
                    <p className="text-slate-600">Learn the rules and get riddle hints.</p>
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
