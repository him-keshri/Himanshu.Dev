import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowDown, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const ROLES = ["Computer Science Engineer", "Web Developer", "AI Enthusiast"];

function useTyped() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[i % ROLES.length];
    const timeout = setTimeout(
      () => {
        if (!del) {
          setText(full.slice(0, text.length + 1));
          if (text.length + 1 === full.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(full.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((p) => p + 1);
          }
        }
      },
      del ? 40 : 90
    );
    return () => clearTimeout(timeout);
  }, [text, del, i]);

  return text;
}

export function Hero() {
  const typed = useTyped();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* background fx */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-neon-blue/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-neon-purple/20 blur-[120px] animate-pulse-glow" />
      {/* floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-foreground/40 animate-float"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${5 + (i % 5)}s`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-neon-green shadow-[0_0_10px_var(--neon-green)]" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">Himanshu Keshri</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-xl sm:text-2xl text-muted-foreground font-medium"
          >
            <span className="text-foreground">{typed}</span>
            <span className="inline-block w-0.5 h-6 align-middle bg-neon-blue ml-1 animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            I build modern web applications, AI-powered solutions, and user-focused digital experiences.
            With strong foundations in Data Structures &amp; Algorithms, full-stack development, and
            machine learning, I focus on building scalable products that combine performance,
            functionality, and clean design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground glow-blue hover:opacity-95 transition"
            >
              Explore Projects <FiArrowDown />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass hover:bg-white/10 transition"
            >
              <FiMail /> Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a href="https://github.com/him-keshri" target="_blank" rel="noreferrer" className="hover:text-foreground transition"><FiGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/himanshu-keshri/" target="_blank" rel="noreferrer" className="hover:text-foreground transition"><FiLinkedin size={20} /></a>
            <a href="mailto:himkeshri04@gmail.com" className="hover:text-foreground transition"><FiMail size={20} /></a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative h-72 w-72 sm:h-96 sm:w-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-green blur-2xl opacity-60 animate-pulse-glow" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-green p-[2px]">
              <div className="h-full w-full rounded-full glass-strong overflow-hidden">
                <img
                  src="https://i.postimg.cc/XvkbCxLZ/Whats-App-Image-2025-09-07-at-11-44-29.jpg"
                  alt="Himanshu Keshri"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
            {/* orbiting badges */}
            <div className="absolute -top-2 -right-2 glass rounded-full px-3 py-1.5 text-xs font-medium animate-float">⚡ React</div>
            <div className="absolute -bottom-2 -left-2 glass rounded-full px-3 py-1.5 text-xs font-medium animate-float" style={{ animationDelay: "1s" }}>🤖 AI/ML</div>
            <div className="absolute top-1/2 -right-6 glass rounded-full px-3 py-1.5 text-xs font-medium animate-float" style={{ animationDelay: "2s" }}>🚀 DSA</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
