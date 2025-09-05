import { Section as SectionType } from '@/data/platforms';
import Card from './Card';

interface SectionProps {
  section: SectionType;
}

export default function Section({ section }: SectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {section.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.platforms.map((platform) => (
          <Card key={platform.id} platform={platform} />
        ))}
      </div>
    </div>
  );
}
