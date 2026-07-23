import { Nav } from "@/components/navigation/Nav";
import { Container } from "@/components/ui/Container";
import { Projects } from "@/components/sections/Projects";

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
              Uma seleção de projetos desenvolvidos ao longo da minha trajetória
              em Tecnologia da Informação, envolvendo desenvolvimento web,
              produtos digitais e estudos em Data Science.
            </p>
          </Container>
        </section>

        <Projects />
      </main>
    </>
  );
}
