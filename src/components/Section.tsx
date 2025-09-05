import { Section as SectionType } from '@/data/platforms';
import Card from './Card';

interface SectionProps {
  section: SectionType;
}

export default function Section({ section }: SectionProps) {
  return (
    <div className="mb-16">
      <div className="relative mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-2">
          {section.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

        {/* 装饰性背景 */}
        <div className="absolute -top-2 -left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -top-1 -right-2 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.platforms.map((platform, index) => (
          <div
            key={platform.id}
            className="animate-float"
            style={{
              animationDelay: `${index * 0.2}s`,
              animationDuration: `${3 + index * 0.5}s`
            }}
          >
            <Card platform={platform} />
          </div>
        ))}
      </div>
    </div>
  );
}
