import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Himanshu Keshri — Computer Science Engineer, Web Developer & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Himanshu Keshri — Computer Science Engineer, Web Developer, and AI enthusiast building scalable web apps and AI solutions.",
      },
      { property: "og:title", content: "Himanshu Keshri — Computer Science Engineer, Web Developer & AI Enthusiast" },
      { property: "og:description", content: "Scalable web apps, AI solutions, and modern digital experiences." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://i.postimg.cc/XvkbCxLZ/Whats-App-Image-2025-09-07-at-11-44-29.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
