export const metadata = {
  title: "Terms of Service | CareNura",
  description: "Terms of Service for CareNura.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Terms of <span className="text-primary">Service</span>
        </h1>
        <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
          <p><em>Last updated: [DATE REQUIRED]</em></p>
          <p>
            These Terms of Service govern your use of the CareNura website and services.
          </p>
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these terms.
          </p>
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Services</h2>
          <p>
            CareNura provides digital engineering and AI consulting services subject to separate formal agreements.
          </p>
          <div className="p-4 bg-muted/50 rounded-lg border border-border/50 mt-8">
            <p className="text-sm">
              <strong>Note:</strong> This is a draft terms of service document. A formal legal document should be customized by legal counsel prior to production launch.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
