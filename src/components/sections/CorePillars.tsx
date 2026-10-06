import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    id: "01",
    title: "Web & Software Engineering",
    description: "Scalable, high-performance web applications and SaaS platforms built with modern cloud architectures.",
    capabilities: ["Custom Web Apps", "SaaS Development", "Business Portals", "API Engineering"],
    href: "/services/web-software",
    accentHover: "group-hover:text-blue-500",
    borderHover: "hover:border-blue-500/50",
    shadowHover: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    badgeHover: "group-hover:border-blue-500/30 group-hover:bg-blue-500/5 group-hover:text-blue-400"
  },
  {
    id: "02",
    title: "AI & Intelligent Automation",
    description: "Custom AI agents and workflow automations that reduce operational costs and accelerate growth.",
    capabilities: ["AI Customer Agents", "Workflow Automation", "LLM Integration", "Smart Assistants"],
    href: "/services/ai-automation",
    accentHover: "group-hover:text-indigo-500",
    borderHover: "hover:border-indigo-500/50",
    shadowHover: "hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    badgeHover: "group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 group-hover:text-indigo-400"
  },
  {
    id: "03",
    title: "Data & Business Intelligence",
    description: "Transform raw data into actionable insights with predictive modeling and interactive dashboards.",
    capabilities: ["Business Dashboards", "Predictive Analytics", "Data Pipelines", "Machine Learning"],
    href: "/services/data-intelligence",
    accentHover: "group-hover:text-teal-500",
    borderHover: "hover:border-teal-500/50",
    shadowHover: "hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
    badgeHover: "group-hover:border-teal-500/30 group-hover:bg-teal-500/5 group-hover:text-teal-400"
  }
];

export function CorePillars() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 md:mb-24 flex flex-col items-start">
          <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-300 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(45,212,191,0.15)]">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Our Expertise
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">Core Engineering</span>{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">Pillars</span>
          </h2>
          <p className="text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            We focus on three primary disciplines to engineer comprehensive digital solutions for modern enterprises.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className={`flex flex-col md:flex-row gap-6 md:gap-16 items-start group rounded-2xl border border-border/40 bg-card/40 p-8 md:p-12 transition-all duration-500 ${pillar.borderHover} ${pillar.shadowHover} backdrop-blur-sm relative overflow-hidden`}
            >
              {/* Very subtle gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-transparent to-card transition-opacity duration-500 -z-10" />
              
              <div className="hidden md:block w-24 shrink-0 pt-1">
                <span className={`font-heading text-6xl font-bold text-border/50 transition-colors duration-500 ${pillar.accentHover}`}>
                  {pillar.id}
                </span>
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="md:hidden">
                   <span className={`font-heading text-4xl font-bold text-border/50 transition-colors duration-500 ${pillar.accentHover}`}>
                    {pillar.id}
                  </span>
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl group-hover:text-muted-foreground/90 transition-colors">
                  {pillar.description}
                </p>
                
                <div className="flex flex-wrap gap-3 pt-2">
                  {pillar.capabilities.map((cap) => (
                    <span 
                      key={cap} 
                      className={`inline-flex items-center rounded-full border border-border/50 bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-300 ${pillar.badgeHover}`}
                    >
                      {cap}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Link href={pillar.href}>
                    <Button variant="ghost" className={`px-0 hover:bg-transparent transition-colors ${pillar.accentHover} group/btn`}>
                      Explore Capabilities
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
