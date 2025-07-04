import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const supportTiers = [
  {
    name: "Standard Support",
    price: "£49",
    priceSuffix: "/month",
    description: "Essential maintenance and support.",
    features: [
      "Weekly Plugin & Security Updates",
      "Monthly Performance Reports",
      "Email Support (24hr response)",
      "1 Hour of Content Updates per Month",
    ],
    buttonLabel: "Select Plan",
    buttonLink: "/contact",
  },
  {
    name: "Business Support",
    price: "£99",
    priceSuffix: "/month",
    description: "For growing businesses needing more.",
    features: [
      "Everything in Standard",
      "Daily Backups",
      "Priority Email Support (12hr response)",
      "3 Hours of Content Updates per Month",
      "Pro-Active Uptime Monitoring",
    ],
    buttonLabel: "Select Plan",
    buttonLink: "/contact",
  },
  {
    name: "Premium Support",
    price: "£199",
    priceSuffix: "/month",
    description: "Comprehensive support for mission-critical sites.",
    features: [
      "Everything in Business",
      "Real-time Backups",
      "Phone & Email Support (4hr response)",
      "5 Hours of Content/Dev Updates per Month",
      "Staging Environment",
    ],
    buttonLabel: "Select Plan",
    buttonLink: "/contact",
  },
  {
    name: "Enterprise Support",
    price: "Custom",
    priceSuffix: "pricing",
    description: "Dedicated support for large-scale operations.",
    features: [
      "Everything in Premium",
      "Dedicated Account Manager",
      "24/7 Emergency Support",
      "Unlimited Small Jobs",
      "Custom Service Level Agreement (SLA)",
    ],
    buttonLabel: "Contact Us",
    buttonLink: "/contact",
  },
];

export default function SupportPlansSection() {
  return (
    <section id="support-plans" className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Support & After-care Plans
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            Keep your website secure, updated, and performing at its best with our comprehensive support plans.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">
          {supportTiers.map((tier) => (
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
