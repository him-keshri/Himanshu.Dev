import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    date: "Aug 2026 – Present",
    type: "Internship",
    role: "AI Evaluation Engineer",
    org: "Turing",
    color: "neon-green",
    points: [
      "Engineered and validated benchmark tasks for frontier AI models, debugging task logic, execution environments, test suites, and automated verifiers to ensure reliable, accurate, and reproducible evaluation.",
      "Developed automated evaluation workflows to assess model-generated outputs, analyze multi-run failure patterns, and calibrate task difficulty using cross-source reasoning, dependency-based test design, and edge-case analysis.",
    ],
    tags: ["AI Evaluation", "Benchmarking", "Test Design"],
  },
  {
    date: "Dec 2025 – May 2026",
    type: "Internship",
    role: "Frontend Developer Intern",
    org: "JungleWorks",
    color: "neon-purple",
    points: [
      "Contributed to the development and enhancement of production-grade web applications by building responsive and reusable UI components using React.js, JavaScript, HTML5, CSS3, and REST APIs.",
      "Collaborated in an Agile development environment on real-world frontend projects involving code integration, debugging, performance optimization, and Git-based version control workflows.",
    ],
    tags: ["React.js", "JavaScript", "REST APIs", "Git"],
  },
  {
    date: "Dec 2024 – Jan 2025",
    type: "Research Internship",
    role: "Research Intern",
    org: "IIT Guwahati",
    color: "neon-blue",
    points: [
      "Worked on Vision Transformer (ViT)-based Pneumonia Detection",
      "Built and optimized deep learning pipelines for medical image classification",
      "Improved model evaluation and experimentation workflows",
      "Explored AI applications in healthcare systems",
    ],
    tags: ["PyTorch", "ViT", "Computer Vision", "Medical Imaging"],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked & learned">
      <div className="relative max-w-3xl space-y-8">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green via-neon-purple to-neon-blue" />
        {items.map((it, i) => (
          <motion.div
            key={it.org}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative pl-12"
          >
            <div
              className={`absolute left-2 top-2 h-5 w-5 rounded-full bg-background border-2 border-${it.color}`}
              style={{ boxShadow: `0 0 15px var(--${it.color})` }}
            />
            <div className="glass-strong rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neon-green mb-2">
                <span>{it.date}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{it.type}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold break-words">{it.role}</h3>
              <p className="text-muted-foreground mt-1">{it.org}</p>
              <ul className="mt-5 space-y-2.5 text-muted-foreground">
                {it.points.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neon-purple shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-neon-blue/10 text-neon-blue border border-neon-blue/20">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
