import type { Metadata } from "next";

import { Nav } from "@/components/navigation/Nav";
import { Container } from "@/components/ui/Container";
import { Projects } from "@/components/sections/Projects";
import { profile } from "@/data/profile";
import { absoluteUrl, defaultOpenGraphImage } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos de Marllon Panisset em desenvolvimento web, arquitetura Front-End e Engenharia de Software.",
  alternates: {
    canonical: absoluteUrl("/projetos"),
  },
  openGraph: {
    title: `Projetos — ${profile.name}`,
    description:
      "Projetos de Marllon Panisset em desenvolvimento web, arquitetura Front-End e Engenharia de Software.",
    url: absoluteUrl("/projetos"),
    type: "website",
    images: [defaultOpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projetos — ${profile.name}`,
    description:
      "Projetos de Marllon Panisset em desenvolvimento web, arquitetura Front-End e Engenharia de Software.",
    images: [defaultOpenGraphImage],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />

      <main className="pt-24">
        <section className="border-b border-base-border py-20">
          <Container>
            <span className="font-mono text-sm text-signal">Projetos</span>

            <h1 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
              Projetos desenvolvidos
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
              Projetos que demonstram minha experiência no desenvolvimento de
              aplicações web, arquitetura Front-End e evolução contínua em
              Engenharia de Software.
            </p>
          </Container>
        </section>

        <Projects />
      </main>
    </>
  );
}
