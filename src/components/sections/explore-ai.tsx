'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Sparkles } from 'lucide-react';
import React from 'react';

// This wrapper component prevents passing the `afterSignInUrl` prop from Clerk's
// SignInButton to the underlying DOM button, which avoids a React warning.
const SafeButtonForClerk = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ afterSignInUrl, ...props }: any, ref) => {
  return <Button {...props} ref={ref} />;
});
SafeButtonForClerk.displayName = 'SafeButtonForClerk';

export default function ExploreAISection() {
  return (
    <section id="explore-ai" className="py-16 sm:py-24">
      <div className="w-[95%] mx-auto">
        <div className="text-center max-w-3xl mx-auto bg-secondary p-10 rounded-lg shadow-md">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Our AI Tools
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            We offer a broad range of AI Tools specific to your Business & personal requirements.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <SignedIn>
              <Link href="/ai-tools">
                <Button size="lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Explore AI Tools
                </Button>
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" afterSignInUrl="/ai-tools">
                <SafeButtonForClerk size="lg">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Explore AI Tools
                </SafeButtonForClerk>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </section>
  );
}
