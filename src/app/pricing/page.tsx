import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PricingSection from '@/components/sections/pricing';

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
