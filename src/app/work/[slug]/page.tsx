import { projects, getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Work Not Found" };

  return {
    title: `${project.title} | CareNura Engineering`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | CareNura`,
      description: project.shortDescription,
    },
  };
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Work",
        "item": `${process.env.SITE_URL || 'http://localhost:3000'}/work`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": project.title,
        "item": `${process.env.SITE_URL || 'http://localhost:3000'}/work/${project.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Case Study Hero */}
      <section className="relative pt-32 pb-24 border-b border-border/40 overflow-hidden bg-background">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
          <Link href="/work" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to Showcase
          </Link>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-semibold text-primary uppercase tracking-wider">
              {project.type}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-24 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-24">
          
          {/* The Problem */}
          <div>
            <div className="flex items-center gap-3 mb-6 border-b border-border/40 pb-4">
              <span className="font-heading text-xl font-bold text-muted-foreground">01</span>
              <h2 className="font-heading text-3xl font-bold">The Problem</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Our Approach */}
          <div>
            <div className="flex items-center gap-3 mb-6 border-b border-border/40 pb-4">
              <span className="font-heading text-xl font-bold text-muted-foreground">02</span>
              <h2 className="font-heading text-3xl font-bold">Engineering Approach</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* Architecture / Solution */}
          <div>
            <div className="flex items-center gap-3 mb-6 border-b border-border/40 pb-4">
              <span className="font-heading text-xl font-bold text-muted-foreground">03</span>
              <h2 className="font-heading text-3xl font-bold">Architecture & Solution</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {project.solution}
            </p>
            
            {/* Abstract Tech Representation instead of fake UI */}
            <div className="p-6 rounded-xl border border-border/50 bg-background/50 font-mono text-sm text-muted-foreground overflow-hidden relative">
              <Terminal className="h-5 w-5 mb-4 text-primary opacity-70" />
              <div className="space-y-2 opacity-80">
                <p>{"// Architectural Execution Profile"}</p>
                <p><span className="text-blue-400">system.initialize</span>({`{ mode: "${project.category}" }`});</p>
                <p><span className="text-blue-400">modules.load</span>({JSON.stringify(project.technologies.slice(0,3))});</p>
                <p><span className="text-blue-400">status.report</span>(): <span className="text-green-400">&quot;STABLE&quot;</span></p>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <span className="text-xs uppercase tracking-widest opacity-30">{project.type}</span>
              </div>
            </div>
          </div>

          {/* Technical Highlights */}
          <div>
            <div className="flex items-center gap-3 mb-6 border-b border-border/40 pb-4">
              <span className="font-heading text-xl font-bold text-muted-foreground">04</span>
              <h2 className="font-heading text-3xl font-bold">Technical Highlights</h2>
            </div>
            <ul className="space-y-4">
              {project.technicalHighlights.map((highlight, index) => (
                <li key={index} className="flex gap-4">
                  <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary shrink-0" />
                  <p className="text-lg text-muted-foreground leading-relaxed">{highlight}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Status */}
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <h3 className="font-heading text-xl font-bold mb-4 text-primary">Current Status</h3>
            <p className="text-foreground leading-relaxed">
              {project.currentStatus}
            </p>
          </div>
          
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold mb-10">Technologies Utilized</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border border-border/50 bg-card/40 text-sm font-medium text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-background border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Need a similar architecture?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Discuss your technical requirements with our engineering team.
          </p>
          <Link href="/start-a-project">
            <Button size="lg" className="h-14 px-10 text-base shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              Start a Project
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
