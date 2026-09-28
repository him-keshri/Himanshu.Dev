import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  { title: "Programming Languages", color: "neon-blue", items: ["C++", "Python", "JavaScript", "HTML", "CSS"] },
  { title: "Frontend & Web", color: "neon-purple", items: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design", "REST APIs"] },
  { title: "Backend & Databases", color: "neon-orange", items: ["Node.js", "Express.js", "MongoDB", "SQL"] },
  { title: "AI / ML", color: "neon-green", items: ["Vision Transformer (ViT)", "Deep Learning", "Computer Vision", "Machine Learning"] },
  { title: "Core CS", color: "neon-orange", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Cloud Computing"] },
  { title: "Tools & Platforms", color: "neon-blue", items: ["Git & GitHub", "VS Code", "MySQL", "Firebase"] },
  { title: "Other Skills", color: "neon-purple", items: ["Video Editing", "UI Implementation", "Problem Solving", "Content Creation"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The toolkit I build with" description="A blend of fundamentals, modern frameworks, and applied AI.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative glass rounded-2xl p-6 hover:-translate-y-1 transition"
          >
            <div className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-${g.color} to-transparent opacity-60`} />
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full bg-${g.color} shadow-[0_0_10px_currentColor]`} />
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
