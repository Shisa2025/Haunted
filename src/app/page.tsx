import Image from "next/image";

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
            我的游戏开发成果展示
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            探索我精心打造的游戏世界，这里有创新的玩法、震撼的视觉效果和扣人心弦的故事体验。
          </p>

          {/* Start Button */}
          <button className="mt-8 px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out animate-bounce">
            开始
          </button>

          {/* Project Showcase */}
          <div className="mt-16 w-full">
            <h2 className="text-3xl font-semibold text-white mb-8">精选游戏项目</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Game Card 1 */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎮</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">游戏1</h3>
                <p className="text-gray-400">创新玩法，引人入胜的故事。</p>
              </div>

              {/* Game Card 2 */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">游戏2</h3>
                <p className="text-gray-400">高速动作，视觉盛宴。</p>
              </div>

              {/* Game Card 3 */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">游戏3</h3>
                <p className="text-gray-400">策略深度，无限可能。</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
