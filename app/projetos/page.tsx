import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { Projects } from "@/components/sections/Projects";
import { profile } from "@/data/profile";
import { absoluteUrl, defaultOpenGraphImage } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos de Marllon Panisset como Desenvolvedor Front-End com React, JavaScript e VTEX, além de Next.js, TypeScript e integrações Full Stack.",
  alternates: {
    canonical: absoluteUrl("/projetos"),
  },
  openGraph: {
    title: `Projetos — ${profile.name}`,
    description:
      "Projetos Front-End com React, JavaScript e VTEX, além de Next.js e TypeScript.",
    url: absoluteUrl("/projetos"),
    type: "website",
    images: [defaultOpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projetos — ${profile.name}`,
    description:
      "Projetos Front-End com React, JavaScript e VTEX, além de Next.js e TypeScript.",
    images: [defaultOpenGraphImage],
  },
};

export default function ProjectsPage() {
  return (
    <main id="conteudo" className="pt-24">
        <section className="border-b border-base-border py-20">
          <Container>
            <span className="font-mono text-sm text-signal">Projetos</span>

            <h1 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
              Projetos desenvolvidos
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
              Projetos autorais e para clientes que demonstram minha experiência
              como Desenvolvedor Front-End com React, JavaScript e VTEX, além de
              Next.js, TypeScript e integrações Full Stack.
            </p>
          </Container>
        </section>

        <Projects />
      </main>
  );
}
