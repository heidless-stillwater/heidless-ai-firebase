import Link from "next/link";
import { Github, Twitter, Linkedin, Bot, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">heidless ai</span>
            </Link>
            <p className="text-foreground/60 max-w-xs">
              AI-Powered Web Design for the modern web. We blend creative design with cutting-edge technology.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3 text-foreground/80">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>703a Seven Sisters Road</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:test@test.com" className="hover:text-primary transition-colors">test@test.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <a href="tel:01234567890" className="hover:text-primary transition-colors">0123 456 7890</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-2">
              <Link href="#" passHref>
                  <Button variant="ghost" size="icon">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                  </Button>
              </Link>
              <Link href="#" passHref>
                  <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                  </Button>
              </Link>
              <Link href="#" passHref>
                  <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                  </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} heidless ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
