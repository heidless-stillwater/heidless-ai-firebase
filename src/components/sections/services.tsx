import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PenTool, Code, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "Web Design",
    description: "Visually stunning and user-centric designs that capture your brand's essence and engage your audience from the first click.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Robust and scalable websites built with the latest technologies for optimal performance, security, and a seamless user experience.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Digital Strategy",
    description: "Data-driven strategies to enhance your online presence, reach your target audience, and achieve your business goals.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            We deliver comprehensive solutions to elevate your digital presence.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 bg-background/50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                    {service.icon}
                </div>
                <CardTitle className="font-headline text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-base text-foreground/70">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
