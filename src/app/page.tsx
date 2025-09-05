import Header from '@/components/Header';
import Section from '@/components/Section';
import { platformData } from '@/data/platforms';

export default function Home() {
  return (
    <main>
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {platformData.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
      
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 AI平台. 探索无限可能的人工智能世界.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
