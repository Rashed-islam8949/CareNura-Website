import { projects } from "@/data/projects";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata = {
  title: "Featured Work & Architecture | CareNura",
  description: "Explore our conceptual and architectural showcases demonstrating premium digital engineering.",
};

export default function WorkHubPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Architectural <span className="text-primary">Showcase</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Deep dives into the technical systems, problem-solving approaches, and scalable architectures we build.
        </p>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <WorkGrid initialProjects={projects} />
      </section>
    </main>
  );
}
