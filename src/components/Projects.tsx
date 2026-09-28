import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Section } from "./Section";

type Category = "All" | "AI/ML" | "Web" | "Data";

interface Project {
  title: string;
  year: string;
  description: string;
  tags: string[];
  github?: string;
  category: Exclude<Category, "All">;
  status?: string;
}

const projects: Project[] = [
  {
    title: "AI Website Generator App",
    year: "2025",
    description: "AI-powered website generation platform with smart automation and responsive UI workflows.",
    tags: ["React", "AI", "Node.js", "Tailwind"],
    github: "https://github.com/him-keshri/AI-Website-Generator-App",
    category: "AI/ML",
  },
  {
    title: "Smart Grocery Search & Checkout",
    year: "2024",
    description: "AI-assisted grocery management and smart checkout system for faster retail experiences.",
    tags: ["Python", "ML", "React"],
    github: "https://github.com/him-keshri/smart-grocery-checkout",
    category: "AI/ML",
  },
  {
    title: "Vision Transformer Pneumonia Detection",
    year: "2025",
    description: "Deep learning system using Vision Transformer architecture for pneumonia classification from chest X-ray images.",
    tags: ["PyTorch", "ViT", "Computer Vision"],
    github: "https://github.com/him-keshri/Vision-Transformer-Pneumonia-Detection",
    category: "AI/ML",
  },
  {
    title: "Olympics Data Analysis & ML",
    year: "2024",
    description: "Data analytics and machine learning project focused on athlete trends, medal predictions, and performance insights.",
    tags: ["Python", "Pandas", "ML"],
    github: "https://github.com/him-keshri/Olympics-Data-Analysis-ML",
    category: "Data",
  },
  {
    title: "Crop Pest Identification",
    year: "2024",
    description: "AI-based system for identifying crop pests using deep learning and computer vision.",
    tags: ["Deep Learning", "CV", "TensorFlow"],
    github: "https://github.com/him-keshri/crop-pest-identification-dl",
    category: "AI/ML",
  },
  {
    title: "Personal Portfolio Website",
    year: "2025",
    description: "Modern developer portfolio built with React, Tailwind CSS, smooth animations, and responsive design principles.",
    tags: ["React", "Tailwind", "Framer Motion"],
    category: "Web",
    status: "Ongoing",
  },
];

const cats: Category[] = ["All", "AI/ML", "Web", "Data"];

export function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built" description="A selection of recent work across AI, web, and data.">
      <div className="flex flex-wrap gap-2 mb-8">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
              filter === c
                ? "bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground border-transparent"
                : "glass text-muted-foreground hover:text-foreground border-white/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p, idx) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative glass rounded-2xl p-6 flex flex-col hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_var(--neon-blue)] transition"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/0 via-neon-purple/0 to-neon-green/0 group-hover:from-neon-blue/5 group-hover:via-neon-purple/5 group-hover:to-neon-green/5 transition pointer-events-none" />

            <div className="flex items-start justify-between gap-4 mb-3">
              <span className="text-xs font-mono text-neon-green">{p.year}</span>
              {p.status && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-neon-orange/10 text-neon-orange border border-neon-orange/30 uppercase tracking-wider">{p.status}</span>
              )}
            </div>

            <h3 className="text-xl font-semibold leading-tight">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex gap-2">
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-neon-blue transition"
                >
                  <FiGithub /> View Code <FiExternalLink className="opacity-60" />
                </a>
              ) : (
                <span className="text-sm text-muted-foreground italic">In progress</span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
