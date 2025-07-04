import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Bot, ChevronDown } from 'lucide-react';
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs';
import { ThemeToggle } from '../theme-toggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/support', label: 'Support' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const aiToolsLinks = [
  { href: '/ai-tools', label: 'AI Tools Overview' },
  { href: '/ai-tools/fast-food', label: 'Fast Food Business' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-[95%] mx-auto flex h-14 items-center">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">heidless ai</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm justify-center">
          {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.label}
              </Link>
          ))}
          <SignedIn>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground/60 transition-colors hover:text-foreground/80 px-2 text-sm font-medium">
                  AI Tools
                  <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {aiToolsLinks.map(link => (
                  <DropdownMenuItem key={link.href} asChild>
                     <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeToggle />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
              <SignInButton mode="modal">
                  <Button variant="outline" size="sm">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                  <Button size="sm">Sign Up</Button>
              </SignUpButton>
          </SignedOut>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                ))}
                <SignedIn>
                   <p className="text-lg font-medium text-foreground/80">AI Tools</p>
                   <div className="flex flex-col gap-4 pl-4">
                    {aiToolsLinks.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-medium text-foreground/60 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ))}
                   </div>
                </SignedIn>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
