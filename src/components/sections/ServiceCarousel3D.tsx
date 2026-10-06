"use client";
import Link from "next/link";
import { Bot, Code2, Database, LayoutDashboard, Smartphone, Workflow } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Intelligent automation agents built natively into your workflow.",
    color: "from-violet-500/30 to-indigo-600/30",
    border: "border-violet-500/40",
    glow: "shadow-[0_0_40px_rgba(139,92,246,0.4)]",
    iconColor: "text-violet-300",
    href: "/services/ai-automation",
  },
  {
    icon: Code2,
    title: "Web Engineering",
    desc: "Scalable SaaS platforms and high-performance web apps.",
    color: "from-blue-500/30 to-cyan-600/30",
    border: "border-blue-500/40",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.4)]",
    iconColor: "text-blue-300",
    href: "/services/web-software",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    desc: "Transform raw data into insights with predictive analytics.",
    color: "from-teal-500/30 to-green-600/30",
    border: "border-teal-500/40",
    glow: "shadow-[0_0_40px_rgba(45,212,191,0.4)]",
    iconColor: "text-teal-300",
    href: "/services/data-intelligence",
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "Streamline complex workflows and reduce operational overhead.",
    color: "from-orange-500/30 to-amber-600/30",
    border: "border-orange-500/40",
    glow: "shadow-[0_0_40px_rgba(249,115,22,0.4)]",
    iconColor: "text-orange-300",
    href: "/services/ai-automation",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native iOS & Android experiences with modern cross-platform tech.",
    color: "from-pink-500/30 to-rose-600/30",
    border: "border-pink-500/40",
    glow: "shadow-[0_0_40px_rgba(236,72,153,0.4)]",
    iconColor: "text-pink-300",
    href: "/services/mobile-apps",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    desc: "Interactive business dashboards powered by real-time data.",
    color: "from-indigo-500/30 to-purple-600/30",
    border: "border-indigo-500/40",
    glow: "shadow-[0_0_40px_rgba(99,102,241,0.4)]",
    iconColor: "text-indigo-300",
    href: "/services/data-intelligence",
  },
];

// Radius for the 3D circle (in px). Tune to taste.
const RADIUS = 340;

export function ServiceCarousel3D() {
  const count = services.length;

  return (
    <section className="pt-8 pb-28 md:pt-12 md:pb-32 relative overflow-hidden bg-background">
      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-teal-600/10 via-blue-600/10 to-violet-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            <span className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">What We</span>{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Build</span>
          </h2>
        </div>

        {/* 3D Carousel — All devices */}
        <div className="flex items-center justify-center h-[300px] sm:h-[350px] md:h-[450px] overflow-visible" style={{ perspective: "1200px" }}>
          {/* Responsive scale wrapper */}
          <div className="w-full h-full scale-[0.55] sm:scale-75 md:scale-100 flex items-center justify-center">
            <div
              className="relative w-full h-full animate-[carousel-spin_20s_linear_infinite] hover:[animation-play-state:paused]"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {services.map((svc, i) => {
                const Icon = svc.icon;
                const angle = (360 / count) * i;
                return (
                  <Link
                    key={i}
                    href={svc.href}
                    className="absolute top-1/2 left-1/2 group"
                    style={{
                      transform: `translateX(-50%) translateY(-50%) rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                      transformStyle: "preserve-3d",
                      width: "250px",
                    }}
                  >
                    <div
                      className={`relative flex flex-col items-center text-center p-8 rounded-3xl border border-white/20 backdrop-blur-2xl transition-all duration-300 group-hover:-translate-y-2 ${svc.color} ${svc.border} ${svc.glow}`}
                      style={{ background: "rgba(255,255,255,0.03)", height: "340px" }}
                    >
                      {/* Tinted gradient overlay */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${svc.color} opacity-20 -z-10`} />

                      <div className={`inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 w-fit ${svc.iconColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white mb-3">{svc.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed flex-grow">{svc.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
