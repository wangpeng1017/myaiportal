'use client';

import { Platform } from '@/data/platforms';

interface CardProps {
  platform: Platform;
}

export default function Card({ platform }: CardProps) {
  const handleClick = () => {
    window.open(platform.link, '_blank');
  };

  // 截断文本函数
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 p-4 rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-slate-700/50 backdrop-blur-sm overflow-hidden h-[200px] flex flex-col"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* 点击提示图标 */}
      <div className="absolute top-3 right-3 text-slate-400 group-hover:text-white transition-colors duration-300">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>

      <div className="relative text-white flex-1 flex flex-col">
        <div className="mb-3">
          <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">平台名称</span>
          <h3 className="text-base font-bold text-white mt-1 group-hover:text-blue-200 transition-colors duration-300 line-clamp-1">
            {truncateText(platform.name, 20)}
          </h3>
        </div>

        <div className="mb-3 flex-1">
          <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">简介</span>
          <p className="text-xs leading-relaxed text-slate-200 mt-1 line-clamp-3">
            {truncateText(platform.description, 80)}
          </p>
        </div>

        <div className="mt-auto">
          <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">所用模型</span>
          <p className="text-xs text-slate-300 mt-1 font-medium line-clamp-2">
            {truncateText(platform.model, 50)}
          </p>
        </div>
      </div>

      {/* 底部渐变装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
