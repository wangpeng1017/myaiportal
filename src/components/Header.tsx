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
    <header className="relative bg-white shadow-lg border-b border-blue-100 mb-6 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2359%2082%20f6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="py-2 sm:py-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <div className="relative">
                {/* AI 文字 */}
                <span className="text-white font-bold text-lg tracking-tight">AI</span>
                {/* 装饰性圆点 */}
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                AI平台
              </h1>
              <p className="mt-1 text-base sm:text-lg text-slate-600 font-medium">
                探索无限可能的人工智能世界
              </p>
            </div>
          </div>

          {/* 装饰性元素 */}
          <div className="absolute top-3 right-3 hidden sm:block">
            <div className="flex space-x-1.5">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
    </header>
  );
}
