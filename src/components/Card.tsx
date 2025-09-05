'use client';

import { Platform } from '@/data/platforms';

interface CardProps {
  platform: Platform;
}

export default function Card({ platform }: CardProps) {
  const handleClick = () => {
    window.open(platform.link, '_blank');
  };

  // 解析模型字符串为数组
  const parseModels = (modelString: string): string[] => {
    return modelString.split('、').map(model => model.trim());
  };

  const models = parseModels(platform.model);

  return (
    <div
      onClick={handleClick}
      className="group relative bg-white p-5 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-blue-100 backdrop-blur-sm overflow-hidden min-h-[240px] flex flex-col"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* 点击提示图标 */}
      <div className="absolute top-4 right-4 text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>

      <div className="relative text-slate-800 flex-1 flex flex-col">
        <div className="mb-4">
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">平台名称</span>
          <h3 className="text-lg font-bold text-slate-800 mt-1 group-hover:text-blue-700 transition-colors duration-300">
            {platform.name}
          </h3>
        </div>

        <div className="mb-4 flex-1">
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">简介</span>
          <p className="text-sm leading-relaxed text-slate-600 mt-2">
            {platform.description}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1 mt-2">
            {models.map((model, index) => (
              <span key={index} className="model-tag">
                {model}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 底部渐变装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
