"use client";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function ServicesOverviewPage() {
  const coreServices = services.filter((s) => s.category === "core");
  const ecosystemServices = services.filter((s) => s.category === "ecosystem");

  return (
    <main className="min-h-screen pt-16 pb-16">



      {/* Ecosystem Capabilities — 3D Carousel */}
      <section className="pt-4 pb-20 relative overflow-hidden bg-background">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-orange-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">Ecosystem</span>{" "}
              <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">Capabilities</span>
            </h2>
          </div>

          {/* 3D Carousel — All devices */}
          <div className="flex items-center justify-center h-[300px] sm:h-[350px] md:h-[450px] overflow-visible" style={{ perspective: "1200px" }}>
            <div className="w-full h-full scale-[0.45] sm:scale-75 md:scale-100 flex items-center justify-center">
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  animation: "carousel-spin 35s linear infinite",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
                onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
              >
                {ecosystemServices.map((service, i) => {
                  const count = ecosystemServices.length;
                  const angle = (360 / count) * i;
                  const radius = 380; // Increased radius for 8 cards
                  const colors = [
                    { color: "from-pink-500/30 to-rose-600/30", border: "border-pink-500/40", glow: "shadow-[0_0_40px_rgba(236,72,153,0.35)]", iconBg: "bg-pink-500/20", dot: "bg-pink-400" },
                    { color: "from-orange-500/30 to-amber-600/30", border: "border-orange-500/40", glow: "shadow-[0_0_40px_rgba(249,115,22,0.35)]", iconBg: "bg-orange-500/20", dot: "bg-orange-400" },
                    { color: "from-violet-500/30 to-purple-600/30", border: "border-violet-500/40", glow: "shadow-[0_0_40px_rgba(139,92,246,0.35)]", iconBg: "bg-violet-500/20", dot: "bg-violet-400" },
                    { color: "from-green-500/30 to-emerald-600/30", border: "border-green-500/40", glow: "shadow-[0_0_40px_rgba(34,197,94,0.35)]", iconBg: "bg-green-500/20", dot: "bg-green-400" },
                    { color: "from-blue-500/30 to-cyan-600/30", border: "border-blue-500/40", glow: "shadow-[0_0_40px_rgba(59,130,246,0.35)]", iconBg: "bg-blue-500/20", dot: "bg-blue-400" },
                    { color: "from-yellow-500/30 to-amber-500/30", border: "border-yellow-500/40", glow: "shadow-[0_0_40px_rgba(234,179,8,0.35)]", iconBg: "bg-yellow-500/20", dot: "bg-yellow-400" },
                    { color: "from-teal-500/30 to-emerald-500/30", border: "border-teal-500/40", glow: "shadow-[0_0_40px_rgba(20,184,166,0.35)]", iconBg: "bg-teal-500/20", dot: "bg-teal-400" },
                    { color: "from-indigo-500/30 to-blue-600/30", border: "border-indigo-500/40", glow: "shadow-[0_0_40px_rgba(99,102,241,0.35)]", iconBg: "bg-indigo-500/20", dot: "bg-indigo-400" },
                  ];
                  const c = colors[i % colors.length];
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translateX(-50%) translateY(-50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                        transformStyle: "preserve-3d",
                        width: "250px",
                      }}
                    >
                      <div
                        className={`relative flex flex-col p-8 rounded-3xl border border-white/20 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 ${c.border} ${c.glow}`}
                        style={{ background: "rgba(255,255,255,0.03)", height: "340px" }}
                      >
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${c.color} opacity-20 -z-10`} />

                        <div className={`inline-flex p-3 rounded-xl border border-white/10 mb-6 w-fit ${c.iconBg}`}>
                          <span className={`h-2.5 w-2.5 rounded-full ${c.dot} shadow-[0_0_10px_currentColor]`} />
                        </div>

                        <h3 className="font-heading text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed flex-grow">{service.shortDescription}</p>

                        <div className="mt-4 flex items-center text-sm font-semibold text-white/60 hover:text-white transition-colors">
                          Explore <ArrowRight className="ml-1.5 h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Hero (Moved Below Carousel) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-12 mb-24 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Our <span className="text-primary">Expertise</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We bridge the gap between strategic vision and technical execution. Explore our engineering disciplines and comprehensive digital ecosystem capabilities.
        </p>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center py-16 border-t border-border/40">
        <h2 className="font-heading text-3xl font-bold mb-4">Ready to engineer your solution?</h2>
        <p className="text-muted-foreground mb-8">Discuss your technical challenges with our architects.</p>
        <Link href="/start-a-project">
          <Button size="lg" className="h-12 px-8 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
            Start a Project
          </Button>
        </Link>
      </section>
    </main>
  );
}
