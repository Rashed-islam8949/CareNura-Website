"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WorkGrid({ initialProjects }: { initialProjects: Project[] }) {
  const [filter, setFilter] = useState<"all" | "engineering" | "ai" | "data">("all");

  const filteredProjects = filter === "all" 
    ? initialProjects 
    : initialProjects.filter(p => p.category === filter);

  const categories = [
    { value: "all", label: "All Work" },
    { value: "engineering", label: "Engineering" },
    { value: "ai", label: "AI & Automation" },
    { value: "data", label: "Data Intelligence" }
  ];

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value as any)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === cat.value 
                ? "bg-primary text-primary-foreground" 
                : "bg-card/40 text-muted-foreground hover:bg-card/80 hover:text-foreground border border-border/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.slug}
            className="group rounded-2xl border border-border/50 bg-card/20 p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <Lock className="h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-semibold text-primary uppercase tracking-wider">
                {project.type}
              </span>
            </div>
            
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed flex-grow">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="text-xs font-medium px-2 py-1 bg-background border border-border/50 rounded text-muted-foreground">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs font-medium px-2 py-1 bg-background border border-border/50 rounded text-muted-foreground">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            <Link href={`/work/${project.slug}`} className="mt-auto">
              <Button variant="ghost" className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20">
                Explore Architecture
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-24 text-center text-muted-foreground">
            No projects found for this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
