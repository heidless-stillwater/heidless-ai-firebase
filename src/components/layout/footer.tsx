import Link from "next/link";
import { Github, Twitter, Linkedin, Bot } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">heidless ai</span>
          </div>
          <p className="text-center text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} heidless ai. All rights reserved.
          </p>
          <div className="flex space-x-4">
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
    </footer>
  );
}
