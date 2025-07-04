import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's Build Together
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[150px]"/>
                </div>
                <div>
                    <Button type="submit" size="lg" className="w-full">Send Message</Button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
}
