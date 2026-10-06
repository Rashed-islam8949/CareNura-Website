import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "AI-First Thinking",
    description: "We don't just bolt on AI; we design systems where artificial intelligence is natively integrated to solve complex challenges.",
  },
  {
    title: "Engineering-Led Execution",
    description: "Premium code quality, rigorous testing, and scalable architectures form the backbone of every solution we deliver.",
  },
  {
    title: "Business-Focused Solutions",
    description: "Technology should drive growth. We align our engineering efforts directly with your core business objectives.",
  },
  {
    title: "Scalable Architecture",
    description: "Built for tomorrow. Our platforms are designed to handle exponential growth without compromising performance.",
  },
  {
    title: "Modern Technology Stack",
    description: "We utilize the latest enterprise-grade frameworks to ensure your product is secure, fast, and future-proof.",
  },
  {
    title: "Intelligent Automation",
    description: "We streamline complex business workflows using AI-driven automation, saving countless hours and reducing human error.",
  }
];

export function WhyCareNura() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border/40 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          <div className="lg:w-1/3">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
              Why <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(45,212,191,0.3)]">CareNura</span>
            </h2>
            <p className="mt-6 text-xl text-white/60 font-light leading-relaxed">
              We bridge the gap between complex engineering and strategic business growth.
            </p>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
