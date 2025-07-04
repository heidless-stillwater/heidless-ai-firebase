'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [mapActive, setMapActive] = useState(false);
  const address = "703a Seven Sisters Road";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            Have a project in mind, or want to stop by? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-12">
            <div>
              <h3 className="font-headline text-2xl font-bold text-foreground">Our Information</h3>
              <div className="mt-6 space-y-4 text-foreground/80">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>703a Seven Sisters Road</span>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <a href="mailto:test@test.com" className="hover:text-primary transition-colors">test@test.com</a>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <a href="tel:01234567890" className="hover:text-primary transition-colors">0123 456 7890</a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-headline text-2xl font-bold text-foreground">Send Us a Message</h3>
              <form className="mt-6 space-y-6">
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

          <div className="sticky top-24 h-[400px] md:h-auto md:min-h-[600px] w-full rounded-lg overflow-hidden shadow-lg border border-border">
            {mapActive ? (
              <iframe
                src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div
                className="w-full h-full bg-muted flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => setMapActive(true)}
              >
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-foreground">Our Location</h4>
                <p className="text-muted-foreground mb-4">{address}</p>
                <Button variant="outline">Click to load map</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}