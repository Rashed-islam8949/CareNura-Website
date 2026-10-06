import Link from "next/link";
import { ArrowRight, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 2);

const accentColors = [
  { border: "hover:border-blue-500/40", glow: "hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)]", badge: "border-blue-500/30 bg-blue-500/10 text-blue-300", dot: "bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]", line: "from-blue-400 to-indigo-500" },
  { border: "hover:border-teal-500/40", glow: "hover:shadow-[0_20px_60px_-15px_rgba(45,212,191,0.3)]", badge: "border-teal-500/30 bg-teal-500/10 text-teal-300", dot: "bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]", line: "from-teal-400 to-blue-500" },
];

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background border-t border-white/5">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              Case Studies
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">Featured</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-2xl font-light">
              Architectural concepts and engineered systems demonstrating our capabilities.
            </p>
          </div>
          <Link href="/work" className="hidden md:flex">
            <Button variant="outline" className="border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5 rounded-xl gap-2">
              View All Work <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((project, idx) => {
            const accent = accentColors[idx % accentColors.length];
            return (
              <div 
                key={project.slug}
                className={`group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-10 backdrop-blur-xl transition-all duration-500 overflow-hidden ${accent.border} ${accent.glow} hover:-translate-y-1`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${accent.line} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Lock icon */}
                <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-60 transition-opacity">
                  <Lock className="h-4 w-4 text-white/70" />
                </div>

                {/* Badge */}
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full border text-xs font-semibold uppercase tracking-wider ${accent.badge}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                  {project.type}
                </span>

                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/60 text-base mb-8 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { label: "The Problem", text: project.problem },
                    { label: "The Solution", text: project.solution },
                  ].map(({ label, text }) => (
                    <div key={label} className="rounded-xl bg-white/[0.03] border border-white/5 p-4">
                      <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1.5">{label}</h4>
                      <p className="text-sm text-white/70 leading-relaxed line-clamp-2">{text}</p>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href={`/work/${project.slug}`}>
                  <Button variant="ghost" className={`w-full justify-between border border-white/10 hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white rounded-xl transition-all duration-300`}>
                    Explore Architecture
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/work">
            <Button variant="outline" className="w-full border-white/10 text-white/70 hover:text-white rounded-xl">
              View All Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
