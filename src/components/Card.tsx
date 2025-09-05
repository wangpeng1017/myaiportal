'use client';

import { Platform } from '@/data/platforms';

interface CardProps {
  platform: Platform;
}

export default function Card({ platform }: CardProps) {
  const handleClick = () => {
    window.open(platform.link, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 p-6 rounded-2xl shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-slate-700/50 backdrop-blur-sm overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* 点击提示图标 */}
      <div className="absolute top-4 right-4 text-slate-400 group-hover:text-white transition-colors duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>

      <div className="relative text-white">
        <div className="mb-4">
          <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">平台名称</span>
          <h3 className="text-lg font-bold text-white mt-1 group-hover:text-blue-200 transition-colors duration-300">
            {platform.name}
          </h3>
        </div>

        <div className="mb-4">
          <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">简介</span>
          <p className="text-sm leading-relaxed text-slate-200 mt-1">
            {platform.description}
          </p>
        </div>

        <div className="mb-2">
          <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">所用模型</span>
          <p className="text-sm text-slate-300 mt-1 font-medium">
            {platform.model}
          </p>
        </div>
      </div>

      {/* 底部渐变装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
