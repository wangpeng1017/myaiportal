import Header from '@/components/Header';
import Section from '@/components/Section';
import { platformData } from '@/data/platforms';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pb-8">
        {platformData.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>

      <footer className="relative bg-white border-t border-blue-100 mt-16 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2359%2082%20f6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-slate-600 font-medium">
              &copy; 2024 AI平台. 探索无限可能的人工智能世界.
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>
        </div>

        {/* 底部渐变 */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
      </footer>
    </main>
  );
}
