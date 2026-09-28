import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { label: "Projects Built", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "DSA Problems Solved", value: "200+" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A developer focused on impact" >
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
            I'm a <span className="text-foreground font-medium">Computer Science Engineer</span> focused on building{" "}
            <span className="text-neon-blue">scalable web applications</span> and practical{" "}
            <span className="text-neon-purple">AI-powered solutions</span>. My work spans frontend and full-stack
            development, applied AI, <span className="text-neon-green">computer vision</span>, and software evaluation.
            I enjoy solving technical problems, improving system reliability, and turning ideas into polished, usable products.
          </p>
          <p>
            <span className="text-foreground font-medium">B.Tech in Computer Science &amp; Engineering</span> —
            <span className="text-foreground font-medium"> SRM Institute of Science and Technology, Kattankulathur</span>. Graduated in
            <span className="text-foreground font-medium"> 2026</span>.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {[
              "Strong DSA & problem solving",
              "Scalable web applications",
              "AI, Computer Vision & modern frontend",
              "Clean architecture & performance",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-foreground/90">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-green shadow-[0_0_8px_var(--neon-green)]" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-5 hover:bg-white/[0.07] transition group"
            >
              <div className={`text-3xl font-bold ${i % 2 ? "text-neon-purple" : "text-neon-blue"}`}>
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
