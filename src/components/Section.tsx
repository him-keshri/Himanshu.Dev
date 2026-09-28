import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neon-blue mb-3">
              <span className="h-px w-8 bg-neon-blue" /> {eyebrow}
            </div>
          )}
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight">{title}</h2>
          {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
