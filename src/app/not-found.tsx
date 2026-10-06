import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center relative">
        <h1 className="font-heading text-8xl md:text-9xl font-bold text-border/40 mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
          Signal Lost
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-10 text-lg">
          The architectural route you are looking for does not exist in our current deployment.
        </p>
        
        <Link href="/">
          <Button variant="outline" size="lg" className="h-12 px-8">
            Return to Base
          </Button>
        </Link>
      </div>
    </main>
  );
}
