import Link from "next/link";

export default function GameRules() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/">
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 flex items-center gap-2">
              <span>←</span> Back to Home
            </button>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
          Game Rules & Riddle Hints
        </h1>

        {/* Game Rules Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">Game Rules</h2>
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Objective:</strong> Navigate through the haunted environment, solve puzzles, and reach the exit as quickly as possible.
              </p>
              <p>
                <strong className="text-white">Controls:</strong> Use WASD or arrow keys to move, mouse to look around, and interact with objects using the E key.
              </p>
              <p>
                <strong className="text-white">Scoring:</strong> Your clear time determines your ranking. Faster times get better positions on the leaderboard.
              </p>
              <p>
                <strong className="text-white">Tips:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Pay attention to environmental clues and hidden messages</li>
                <li>Some puzzles require careful observation of patterns</li>
                <li>Don't rush - sometimes the solution is in the details</li>
                <li>Listen for audio cues that might guide you</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Riddle Hints Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Riddle Hints</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">The Whispering Walls</h3>
              <p className="text-gray-300 mb-3">
                <em>"What speaks without a mouth, hears without ears, and runs without legs?"</em>
              </p>
              <div className="text-sm text-gray-400">
                <strong>Hint:</strong> Look for patterns in the architecture. Sometimes the answer is written on the walls themselves.
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">The Mirror Maze</h3>
              <p className="text-gray-300 mb-3">
                <em>"I reflect what you show me, but I never speak the truth. What am I?"</em>
              </p>
              <div className="text-sm text-gray-400">
                <strong>Hint:</strong> Reflections can be deceiving. Try interacting with the mirrors in different ways.
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">The Clock Tower</h3>
              <p className="text-gray-300 mb-3">
                <em>"I have hands but can't clap, a face but can't smile. What am I?"</em>
              </p>
              <div className="text-sm text-gray-400">
                <strong>Hint:</strong> Time is of the essence. The clock might be telling you more than just the time.
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">The Hidden Library</h3>
              <p className="text-gray-300 mb-3">
                <em>"I'm full of stories but never speak. I have pages but no hands. What am I?"</em>
              </p>
              <div className="text-sm text-gray-400">
                <strong>Hint:</strong> Knowledge is power. Some books contain more than just words.
              </div>
            </div>
          </div>
        </section>

        {/* Additional Tips */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-green-400">Additional Tips</h2>
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <ul className="space-y-2 text-gray-300">
              <li>• Take your time to explore every corner</li>
              <li>• Some puzzles require multiple visits to the same area</li>
              <li>• Audio cues can be as important as visual ones</li>
              <li>• Don't be afraid to backtrack - the solution might be behind you</li>
              <li>• The environment itself is part of the puzzle</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}