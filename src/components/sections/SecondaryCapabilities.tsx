import { Smartphone, TrendingUp, Paintbrush, Video } from "lucide-react";

const secondaryServices = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences for iOS and Android.",
    color: "from-pink-500/20 to-rose-600/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
    border: "group-hover:border-pink-500/40",
    iconColor: "text-pink-400",
    dot: "bg-pink-400",
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing",
    description: "Data-driven digital marketing and growth hacking strategies.",
    color: "from-green-500/20 to-emerald-600/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]",
    border: "group-hover:border-green-500/40",
    iconColor: "text-green-400",
    dot: "bg-green-400",
  },
  {
    icon: Paintbrush,
    title: "Branding & Creative",
    description: "Premium visual identity, UI/UX design, and brand positioning.",
    color: "from-violet-500/20 to-purple-600/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    border: "group-hover:border-violet-500/40",
    iconColor: "text-violet-400",
    dot: "bg-violet-400",
  },
  {
    icon: Video,
    title: "Video & Motion",
    description: "High-end motion graphics and video production for digital platforms.",
    color: "from-orange-500/20 to-amber-600/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]",
    border: "group-hover:border-orange-500/40",
    iconColor: "text-orange-400",
    dot: "bg-orange-400",
  }
];

export function SecondaryCapabilities() {
  return (
    <section className="py-24 md:py-28 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            Full-Service Agency
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">Ecosystem</span>{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto text-lg font-light">
            While engineering and AI are our core, we provide end-to-end digital services to ensure your product succeeds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {secondaryServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative p-7 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 overflow-hidden ${service.glow} ${service.border}`}
              >
                {/* Background color on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                
                {/* Static subtle color */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 -z-10`} />

                {/* Icon */}
                <div className={`mb-5 inline-flex p-3.5 rounded-2xl bg-white/5 border border-white/10 ${service.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>

                {/* Bottom glowing dot */}
                <div className={`absolute bottom-4 right-4 h-2 w-2 rounded-full ${service.dot} opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_currentColor]`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
