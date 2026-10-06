export const metadata = {
  title: "Privacy Policy | CareNura",
  description: "Privacy Policy for CareNura.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
          <p><em>Last updated: [DATE REQUIRED]</em></p>
          <p>
            This Privacy Policy outlines how CareNura collects, uses, and protects your information when you use our website and services.
          </p>
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information Collection</h2>
          <p>
            We collect information you provide directly to us through our project inquiry forms, including your name, email address, phone number, and project details.
          </p>
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Use of Information</h2>
          <p>
            We use the information we collect to communicate with you, evaluate your project requirements, and provide our services.
          </p>
          <div className="p-4 bg-muted/50 rounded-lg border border-border/50 mt-8">
            <p className="text-sm">
              <strong>Note:</strong> This is a draft privacy policy. A formal legal policy should be customized by legal counsel prior to production launch.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
