import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-background">
      {/* Dramatic glowing background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-teal-600/15 via-blue-600/20 to-indigo-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20 pointer-events-none -z-10" />

      {/* Top border glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-600/20 border border-white/10 mb-8 shadow-[0_0_30px_rgba(45,212,191,0.2)]">
          <Zap className="h-8 w-8 text-teal-400" />
        </div>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
          <span className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">Ready to build something</span>{" "}
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.4)]">intelligent?</span>
        </h2>

        <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Partner with CareNura to engineer premium digital solutions that drive your business forward. Let's talk about your vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/start-a-project">
            <Button size="lg" className="h-14 px-10 text-base font-semibold bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 border-0 shadow-[0_0_40px_rgba(45,212,191,0.4)] hover:shadow-[0_0_60px_rgba(45,212,191,0.6)] transition-all duration-300 rounded-2xl">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="ghost" size="lg" className="h-14 px-10 text-base font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-2xl transition-all duration-300">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
