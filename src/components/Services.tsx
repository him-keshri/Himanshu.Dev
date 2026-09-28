import { motion } from "framer-motion";
import { Section } from "./Section";
import { FiCode, FiLayout, FiCpu, FiBriefcase, FiFilm } from "react-icons/fi";

const services = [
  { icon: FiCode, title: "Full-Stack Web Development", desc: "Modern, responsive, scalable websites and applications.", color: "neon-blue" },
  { icon: FiLayout, title: "Frontend UI Development", desc: "Pixel-perfect responsive interfaces using React and Tailwind CSS.", color: "neon-purple" },
  { icon: FiCpu, title: "AI & Machine Learning Solutions", desc: "Computer Vision and intelligent AI-based systems.", color: "neon-green" },
  { icon: FiBriefcase, title: "Freelance Web Projects", desc: "Custom portfolio, business, and startup websites.", color: "neon-orange" },
  { icon: FiFilm, title: "Technical Content & Video Editing", desc: "Professional editing for YouTube, reels, and digital branding.", color: "neon-blue" },
];

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title="What I can help you build">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative glass rounded-2xl p-7 hover:-translate-y-1 transition overflow-hidden"
          >
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-${s.color}/10 blur-2xl group-hover:bg-${s.color}/20 transition`} />
            <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-${s.color}/10 text-${s.color} mb-5 border border-${s.color}/20`}>
              <s.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold relative">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground relative">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
