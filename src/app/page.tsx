import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import PortfolioSection from '@/components/sections/portfolio';
import AIStyleAssistantSection from '@/components/sections/ai-assistant';
import PricingSection from '@/components/sections/pricing';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <PortfolioSection />
        <AIStyleAssistantSection />
      </main>
      <Footer />
    </div>
  );
}
