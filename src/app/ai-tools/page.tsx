import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AIToolsSection from '@/components/sections/ai-tools';

export default function AIToolsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AIToolsSection />
      </main>
      <Footer />
    </div>
  );
}
