import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Brochure",
    price: "£399",
    priceSuffix: "one-time",
    description: "Perfect for Small Businesses and Individuals",
    features: [
      "Secure your foot-hold on the Web",
      "Excellent Foundation for your Web Presence",
      "Single Page Application",
      "Mobile-Responsive Design",
      "ChatBot + 1 AI Functions tailored to your Profession",
      "First Year 'standard' Support Plan included",
    ],
    buttonLabel: "Get Started",
    buttonLink: "/contact",
  },
  {
    name: "Pro",
    price: "£599",
    priceSuffix: "one-time",
    description: "Optimal for Small Businesses and Individuals",
    features: [
      "Everything in Brochure Plan",
      "Up to 5 pages allowing you to expand on your offering",
      "3 AI Functions tailored to your Profession/Service",
      "First Year 'standard' Support Plan included",
    ],
    buttonLabel: "Choose Pro",
    buttonLink: "/contact",
  },
  {
    name: "Premium",
    price: "Call us",
    priceSuffix: "for a Quote",
    description: "For businesses ready to scale and sell online",
    features: [
      "Everything in Pro Plan",
      "Up to 10 pages",
      "E-commerce Integration",
      "5 AI Functions",
      "Advanced SEO & Analytics",
      "First Year 'premium' Support Plan included",
    ],
    buttonLabel: "Choose Premium",
    buttonLink: "/contact",
  },
  {
    name: "Support/After-care",
    price: "From £49",
    priceSuffix: "/month",
    description: "Ongoing peace of mind for your digital asset",
    features: [
      "Ongoing Maintenance",
      "Security & Plugin Updates",
      "Monthly Performance Reports",
      "Pro-Active Support",
      "Priority Issue Support",
    ],
    buttonLabel: "Find Out More",
    buttonLink: "/support",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose a plan that fits your needs. Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            We use AI to streamline our process. This saves us time & costs. We pass those savings on to you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">
          {tiers.map((tier) => (
            <Card key={tier.name} className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6 flex-shrink-0">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground ml-1">{tier.priceSuffix}</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex-shrink-0">
                <Link href={tier.buttonLink} className="w-full">
                  <Button className="w-full" size="lg">{tier.buttonLabel}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
