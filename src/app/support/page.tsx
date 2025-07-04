import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SupportPlansSection from '@/components/sections/support-plans';

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <SupportPlansSection />
      </main>
      <Footer />
    </div>
  );
}
