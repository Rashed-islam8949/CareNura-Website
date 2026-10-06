import { services, getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | CareNura Engineering`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | CareNura`,
      description: service.shortDescription,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex(s => s.slug === params.slug);
  const prevService = services[(currentIndex - 1 + services.length) % services.length];
  const nextService = services[(currentIndex + 1) % services.length];

  // Accent color mapping for the subtle hero glow
  const glowMap = {
    blue: "bg-blue-500/10",
    indigo: "bg-indigo-500/10",
    teal: "bg-teal-500/10",
    neutral: "bg-primary/10",
  };

  const textMap = {
    blue: "text-blue-500",
    indigo: "text-indigo-500",
    teal: "text-teal-500",
    neutral: "text-primary",
  };

  const glowClass = glowMap[service.accentColor];
  const textClass = textMap[service.accentColor];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.heroDescription,
    "provider": {
      "@type": "Organization",
      "name": "CareNura",
      "url": process.env.SITE_URL || 'http://localhost:3000'
    }
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Service Hero */}
      <section className={`relative pt-32 pb-24 border-b border-border/40 overflow-hidden ${service.image ? 'min-h-[500px] flex flex-col justify-center' : ''}`}>
        {service.image && (
          <>
            <div className="absolute inset-0 -z-20">
              <Image 
                src={service.image} 
                alt={`${service.title} Background`} 
                fill 
                className="object-cover object-center opacity-75"
                priority
              />
            </div>
            {/* Lighter gradient overlay to keep it bright but ensure text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent -z-10" />
          </>
        )}
        
        {/* Fallback glow if no image */}
        {!service.image && (
          <div className={`absolute inset-0 -z-10 ${glowClass} [mask-image:radial-gradient(ellipse_at_top_right,transparent_20%,black)]`} />
        )}
        
        {/* Navigation Arrows */}
        <Link 
          href={`/services/${prevService.slug}`} 
          className="flex absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all z-20 backdrop-blur-md text-white/50 hover:text-white hover:-translate-x-1"
          title={`Previous: ${prevService.title}`}
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
        <Link 
          href={`/services/${nextService.slug}`} 
          className="flex absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all z-20 backdrop-blur-md text-white/50 hover:text-white hover:translate-x-1"
          title={`Next: ${nextService.title}`}
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </Link>

        <div className="container mx-auto px-12 sm:px-16 lg:px-24 max-w-7xl relative z-10 flex flex-col items-center text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-4 md:mb-6 max-w-4xl text-white drop-shadow-[0_5px_30px_rgba(0,0,0,0.6)]">
            {service.title}
          </h1>
          {/* Decorative line */}
          <div className="w-16 md:w-24 h-1 md:h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 mb-6 md:mb-8 shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl leading-relaxed font-medium drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
            {service.heroDescription}
          </p>
        </div>
      </section>

      {/* What We Solve */}
      <section className="py-24 bg-card/20 border-b border-border/20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="font-heading text-4xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-4">What We Solve</h2>
              <p className="text-lg text-white/50 leading-relaxed">We engineer solutions for the most complex strategic and technical challenges your business faces.</p>
            </div>
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 md:[perspective:1500px]">
            {service.businessProblems.map((problem, i) => (
              <div 
                key={i} 
                className="group relative flex flex-col p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl transition-all duration-500 ease-out md:hover:[transform:rotateX(8deg)_rotateY(-8deg)_scale(1.02)] md:hover:shadow-[0_30px_50px_-15px_rgba(45,212,191,0.2)] hover:border-teal-500/40 hover:bg-white/[0.08] md:[transform-style:preserve-3d]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl -z-10 blur-xl" />
                
                {/* 3D Popped Content */}
                <div className="transition-transform duration-500 ease-out md:group-hover:[transform:translateZ(40px)]">
                  <div className="p-3 bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-xl w-fit mb-4 md:mb-6 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] border border-white/5">
                    <CheckCircle2 className={`h-6 w-6 ${textClass} drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]`} />
                  </div>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed font-medium md:group-hover:text-white transition-colors">{problem}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle background glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${glowClass} rounded-full blur-[120px] -z-10 pointer-events-none opacity-50`} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">Capabilities & Offerings</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {service.capabilities.map((cap, i) => (
              <div key={i} className="group relative p-8 md:p-12 rounded-3xl border border-white/20 bg-white/[0.03] backdrop-blur-2xl hover:bg-white/[0.06] hover:border-teal-400/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                {/* Static color layer for mobile (visible by default) */}
                <div className={`absolute inset-0 ${glowClass} opacity-20 md:opacity-0 transition-opacity duration-500 -z-10`} />
                
                {/* Hover color layer for desktop */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
                  <h3 className={`font-heading text-2xl font-bold text-white md:group-hover:${textClass} transition-colors duration-300`}>{cap.title}</h3>
                </div>
                
                <p className="text-white/60 text-lg leading-relaxed md:group-hover:text-white/80 transition-colors duration-300">{cap.description}</p>
                
                {/* Decorative glowing line - 30% visible on mobile, full width on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal-400 to-blue-500 w-1/3 md:w-0 md:group-hover:w-full transition-all duration-700 ease-out opacity-70 md:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack 3D Marquee */}
      <section className="py-32 bg-card/20 border-y border-border/20 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center relative z-20">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent mb-4">
            Technologies Applied
          </h2>
          <p className="text-white/50 text-lg">The modern enterprise stack powering this capability.</p>
        </div>

        {/* Flowing Tunnel Effect */}
        <div className="flex flex-col gap-8 md:gap-12 mt-16 md:mt-20 overflow-visible md:[perspective:1000px]">
          
          {/* Row 1 */}
          <div className="md:[transform:rotateY(-15deg)_rotateX(10deg)] md:[transform-style:preserve-3d]">
            <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] items-center gap-4 md:gap-6">
              {[...service.technologies, ...service.technologies, ...service.technologies].map((tech, i) => (
                <div key={i} className="flex-shrink-0 px-6 py-3 md:px-8 md:py-5 rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.01] backdrop-blur-md text-white/80 font-medium hover:border-teal-400/50 hover:bg-white/10 md:hover:-translate-y-2 md:hover:scale-110 hover:text-white hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300 cursor-pointer min-w-[140px] md:min-w-[200px] text-center text-sm md:text-base">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Reverse Flow) */}
          <div className="md:[transform:rotateY(15deg)_rotateX(10deg)] md:[transform-style:preserve-3d]">
            <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] items-center gap-4 md:gap-6" style={{ animationDirection: "reverse" }}>
              {[...service.technologies, ...service.technologies, ...service.technologies].reverse().map((tech, i) => (
                <div key={i} className="flex-shrink-0 px-6 py-3 md:px-8 md:py-5 rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-l from-white/5 to-white/[0.01] backdrop-blur-md text-white/80 font-medium hover:border-blue-400/50 hover:bg-white/10 md:hover:-translate-y-2 md:hover:scale-110 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer min-w-[140px] md:min-w-[200px] text-center text-sm md:text-base">
                  {tech}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-background border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Ready to scale your architecture?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Discuss your technical requirements and business goals with our engineering team.
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
