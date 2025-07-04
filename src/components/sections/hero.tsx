import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="py-24 sm:py-32 md:py-40">
      <div className="w-[95%] mx-auto text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Crafting the Future of the Web with AI-Powered Design
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80">
          Heidless AI is a digital agency that blends creative design with cutting-edge technology to build websites that are not just beautiful, but brilliant.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="#portfolio">
            <Button size="lg">Explore Our Work</Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
