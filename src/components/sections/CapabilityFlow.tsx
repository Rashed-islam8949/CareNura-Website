"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Bot, Code2, Database, LayoutDashboard, Smartphone, Workflow } from "lucide-react";

const capabilities = [
  { name: "AI Agents", icon: Bot, href: "/services/ai-automation" },
  { name: "Custom Web Apps", icon: Code2, href: "/services/web-software" },
  { name: "Workflow Automation", icon: Workflow, href: "/services/ai-automation" },
  { name: "Data Intelligence", icon: Database, href: "/services/data-intelligence" },
  { name: "Mobile Apps", icon: Smartphone, href: "/services/mobile-apps" },
  { name: "Business Dashboards", icon: LayoutDashboard, href: "/services/data-intelligence" },
];

export function CapabilityFlow() {
  // Smooth continuous animation that pauses on hover (handled by css hover:[animation-play-state:paused])
  
  return (
    <section className="py-12 border-y border-border/30 bg-background/50 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      {/* CSS based infinite marquee for better performance and smooth hover pause */}
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] items-center gap-6 pr-6">
        {/* We duplicate the array to create a seamless loop */}
        {[...capabilities, ...capabilities, ...capabilities].map((cap, index) => {
          const Icon = cap.icon;
          return (
            <Link key={index} href={cap.href} className="flex-shrink-0 group">
              <Card className="flex items-center gap-5 px-8 py-5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border border-white/10 hover:border-teal-400/50 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] transition-all duration-500 cursor-pointer min-w-[320px] rounded-2xl group-hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-600/20 text-teal-400 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] border border-white/5">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-heading font-semibold text-lg text-white/90 group-hover:text-white tracking-wide transition-colors">{cap.name}</span>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
