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
      className="bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-lg shadow-lg cursor-pointer card-hover border border-blue-700"
    >
      <div className="text-white">
        <div className="mb-4">
          <span className="text-sm text-blue-200">平台名称：</span>
          <span className="font-semibold">{platform.name}</span>
        </div>
        
        <div className="mb-4">
          <span className="text-sm text-blue-200">简介：</span>
          <span className="text-sm leading-relaxed">{platform.description}</span>
        </div>
        
        <div className="mb-4">
          <span className="text-sm text-blue-200">所用模型：</span>
          <span className="text-sm">{platform.model}</span>
        </div>
        
        <div>
          <span className="text-sm text-blue-200">跳转至：</span>
          <span className="text-sm text-blue-300 hover:text-blue-100 transition-colors">
            {platform.link}
          </span>
        </div>
      </div>
    </div>
  );
}
