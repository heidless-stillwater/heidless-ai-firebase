import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce site with a focus on user experience and conversion optimization.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "online store",
  },
  {
    title: "Corporate Landing Page",
    description: "A sleek and professional landing page for a tech startup, designed to attract investors.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "startup website",
  },
  {
    title: "Creative Portfolio",
    description: "A visually-driven portfolio website for a digital artist, featuring interactive galleries.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "art gallery",
  },
  {
    title: "SaaS Dashboard",
    description: "A complex dashboard UI for a SaaS product, focusing on data visualization and usability.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "data dashboard",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="w-[95%] mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            A glimpse into the innovative solutions we've crafted for our clients.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={project.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="mt-2 text-base text-foreground/70">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
