"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-36 md:pt-40 md:pb-48">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <Image
          src="/images/hero-banner.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-40 blur-[3px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
      </div>

      {/* Subtle grid on top */}
      <div className="absolute inset-0 -z-10 bg-grid-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] opacity-30" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[100px] translate-x-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col items-center text-center">
        
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(45,212,191,0.15)]">
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          AI-Powered Engineering Agency
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
        </div>

        <h1 className="font-heading text-5xl font-black tracking-tight md:text-6xl lg:text-7xl xl:text-8xl max-w-5xl leading-[1.05]">
          We build{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_30px_rgba(45,212,191,0.5)]">
              intelligent
            </span>
          </span>{" "}
          <span className="text-white/90">digital solutions.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light">
          CareNura blends Web Engineering, AI, and Data Intelligence to help ambitious brands work smarter, grow faster, and scale.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href="/start-a-project" className="w-full sm:w-auto">
            <Button size="lg" className="w-full font-semibold h-14 px-10 text-base bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 border-0 shadow-[0_0_30px_rgba(45,212,191,0.35)] hover:shadow-[0_0_40px_rgba(45,212,191,0.55)] transition-all duration-300 rounded-2xl">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services" className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" className="w-full font-semibold h-14 px-10 text-base text-white/80 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-2xl group transition-all duration-300">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "3x", label: "Faster Deployment" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">{stat.value}</div>
              <div className="text-sm text-white/50 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
