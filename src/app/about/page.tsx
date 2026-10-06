export const metadata = {
  title: "About | CareNura",
  description: "Learn about CareNura, a premium digital engineering & AI agency.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-8">
          About <span className="text-primary">CareNura</span>
        </h1>
        <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
          <p className="text-xl mb-6">
            CareNura is a premium digital engineering and AI agency focused on delivering intelligent, scalable, and high-performance solutions.
          </p>
          <p className="mb-4">
            We blend web engineering, artificial intelligence, and data intelligence to help ambitious brands work smarter and grow faster.
          </p>
        </div>
      </div>
    </main>
  );
}
