import { Section as SectionType } from '@/data/platforms';
import Card from './Card';

interface SectionProps {
  section: SectionType;
}

export default function Section({ section }: SectionProps) {
  return (
    <div className="mb-10">
      <div className="relative mb-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-2">
          {section.title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

        {/* 装饰性背景 */}
        <div className="absolute -top-2 -left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -top-1 -right-2 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* 使用更紧凑的5列网格布局，减小间距 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {section.platforms.map((platform, index) => (
          <div
            key={platform.id}
            className="animate-float"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: `${2.5 + index * 0.3}s`
            }}
          >
            <Card platform={platform} />
          </div>
        ))}
      </div>
    </div>
  );
}
