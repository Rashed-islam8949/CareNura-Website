import { ProjectWizard } from "@/components/forms/ProjectWizard";

export const metadata = {
  title: "Start a Project | CareNura",
  description: "Submit your project brief and let's engineer something extraordinary together.",
};

export default function StartAProjectPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s Engineer Your <span className="text-primary">Vision</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Provide us with the context of your technical challenge. Our architects will review your requirements and formulate a scalable solution.
          </p>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-12 shadow-2xl relative">
          {/* Subtle grid pattern overlay for the form card */}
          <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none rounded-3xl" />
          <div className="relative z-10">
            <ProjectWizard />
          </div>
        </div>
      </div>
    </main>
  );
}
