import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import { Section } from "./Section";

function Field({ label, type = "text", as = "input", name }: { label: string; type?: string; as?: "input" | "textarea"; name: string }) {
  const [val, setVal] = useState("");
  const [focus, setFocus] = useState(false);
  const active = focus || val.length > 0;
  const common =
    "peer w-full bg-transparent border border-white/10 rounded-xl px-4 pt-6 pb-2 text-sm focus:outline-none focus:border-neon-blue/60 focus:ring-1 focus:ring-neon-blue/40 transition";
  return (
    <label className="relative block">
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={5}
          className={common + " resize-none"}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      ) : (
        <input
          name={name}
          type={type}
          className={common}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      )}
      <span
        className={`absolute left-4 transition-all pointer-events-none ${
          active ? "top-1.5 text-[11px] text-neon-blue" : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great" description="Have a project, role, or idea? I'd love to hear from you.">
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-3"
        >
          {[
            { icon: FiMail, label: "Email", value: "himkeshri04@gmail.com", href: "mailto:himkeshri04@gmail.com" },
            { icon: FiPhone, label: "Phone", value: "+91 7352378521", href: "tel:+917352378521" },
            { icon: FiLinkedin, label: "LinkedIn", value: "himanshu-keshri", href: "https://www.linkedin.com/in/himanshu-keshri/" },
            { icon: FiGithub, label: "GitHub", value: "him-keshri", href: "https://github.com/him-keshri" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 glass rounded-2xl p-4 hover:bg-white/[0.07] transition"
            >
              <div className="h-11 w-11 rounded-xl bg-neon-blue/10 text-neon-blue border border-neon-blue/20 inline-flex items-center justify-center">
                <c.icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="font-medium truncate group-hover:text-neon-blue transition">{c.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="lg:col-span-3 glass-strong rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your Name" name="name" />
            <Field label="Email Address" name="email" type="email" />
          </div>
          <Field label="Subject" name="subject" />
          <Field label="Tell me about your project" name="message" as="textarea" />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground glow-blue hover:opacity-95 transition"
          >
            {sent ? "Message Sent ✓" : (<>Send Message <FiSend /></>)}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
