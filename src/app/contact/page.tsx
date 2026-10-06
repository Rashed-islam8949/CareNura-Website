import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact | CareNura",
  description: "Get in touch with CareNura.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          We prefer to discuss new opportunities through our project brief process to ensure we can provide the best technical solution.
        </p>
        <Link href="/start-a-project">
          <Button size="lg" className="font-medium h-12 px-8">
            Start a Project
          </Button>
        </Link>
      </div>
    </main>
  );
}
