function AILogo() {
  return (
    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg">
      <div className="relative">
        {/* AI 文字 */}
        <span className="text-white font-bold text-xl tracking-tight">AI</span>
        {/* 装饰性圆点 */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-2xl border-b border-slate-700/50 mb-12 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          <div className="flex items-center space-x-6">
            <AILogo />
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                AI平台
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-slate-300 font-medium">
                探索无限可能的人工智能世界
              </p>
            </div>
          </div>

          {/* 装饰性元素 */}
          <div className="absolute top-4 right-4 hidden sm:block">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </header>
  );
}
