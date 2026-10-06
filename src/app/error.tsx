'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <main className="min-h-screen pt-32 pb-24 flex items-center justify-center text-center px-4">
      <div className="max-w-xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
          System <span className="text-destructive">Exception</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          An unexpected technical error has occurred. Our engineering team has been notified.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => reset()} size="lg" className="h-12 px-8">
            Attempt Recovery
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg" className="h-12 px-8">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
