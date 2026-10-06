export function TechStack() {
  const categories = [
    {
      title: "Frontend & Web",
      emoji: "⚡",
      techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500/20 to-cyan-500/20",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      border: "border-blue-500/20",
      dotColor: "bg-blue-400",
      badgeColor: "text-blue-300 border-blue-500/20 bg-blue-500/10",
    },
    {
      title: "Backend & Cloud",
      emoji: "🚀",
      techs: ["Node.js", "Python", "Go", "PostgreSQL", "AWS / GCP"],
      color: "from-indigo-500/20 to-violet-500/20",
      glow: "shadow-[0_0_30px_rgba(99,102,241,0.15)]",
      border: "border-indigo-500/20",
      dotColor: "bg-indigo-400",
      badgeColor: "text-indigo-300 border-indigo-500/20 bg-indigo-500/10",
    },
    {
      title: "AI & Data",
      emoji: "🧠",
      techs: ["OpenAI", "LangChain", "TensorFlow", "ClickHouse", "dbt"],
      color: "from-teal-500/20 to-green-500/20",
      glow: "shadow-[0_0_30px_rgba(45,212,191,0.15)]",
      border: "border-teal-500/20",
      dotColor: "bg-teal-400",
      badgeColor: "text-teal-300 border-teal-500/20 bg-teal-500/10",
    }
  ];

  return (
    <section className="py-24 md:py-28 bg-card/10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            Modern Tech Stack
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">Engineering</span>{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto text-lg font-light">
            We leverage enterprise-grade technologies to build secure, scalable, and intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${category.border} ${category.glow} overflow-hidden`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-30 -z-10`} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="font-heading text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Tech list */}
              <ul className="space-y-3">
                {category.techs.map((tech, i) => (
                  <li key={i} className="flex items-center justify-between group/item">
                    <div className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${category.dotColor} shadow-[0_0_6px_currentColor]`} />
                      <span className="text-white/80 font-medium text-sm">{tech}</span>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border opacity-0 group-hover/item:opacity-100 transition-opacity ${category.badgeColor}`}>
                      Active
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
