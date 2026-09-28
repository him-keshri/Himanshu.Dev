import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
              scrolled ? "glass-strong" : "bg-transparent"
            }`}
          >
            <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-neon-green shadow-[0_0_12px_var(--neon-green)]" />
              <span className="text-gradient">Himanshu.dev</span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-neon-blue to-neon-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground hover:opacity-90 transition"
              >
                Hire Me
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg glass"
              >
                <div className="space-y-1.5">
                  <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                  <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                </div>
              </button>
            </div>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-3"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>

        <div
          className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green z-50 transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </motion.header>
    </>
  );
}
