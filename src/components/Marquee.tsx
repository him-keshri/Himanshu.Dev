const items = [
  "React", "TypeScript", "Tailwind CSS", "Python", "C++", "JavaScript",
  "Node.js", "MySQL", "Firebase", "Git", "ViT", "Deep Learning",
  "Computer Vision", "REST APIs", "DSA", "OOP",
];

export function Marquee() {
  return (
    <section className="relative py-10 border-y border-border/50 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex marquee whitespace-nowrap gap-8 text-2xl sm:text-3xl font-semibold text-muted-foreground/50">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            {t}
            <span className="text-neon-blue">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
