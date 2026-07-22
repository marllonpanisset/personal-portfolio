import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
} from "lucide-react";
import Image from "next/image";
import { Nav } from "@/components/navigation/Nav";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";

import { projects } from "@/data/projects";


type ProjectPageProps = {
  params: {
    slug: string;
  };
};


export default function ProjectPage({
  params,
}: ProjectPageProps) {

  const project = projects.find(
    (item) => item.slug === params.slug
  );


  if (!project) {
    notFound();
  }


  return (
    <>
      <Nav />

      <main className="pt-32 pb-24">

        <Container>

          <article className="max-w-5xl">


            {/* Voltar */}
            <Link
              href="/#projetos"
              className="
                inline-flex
                items-center
                gap-2
                font-mono
                text-xs
                text-ink-muted
                transition-colors
                hover:text-signal
              "
            >
              <ArrowLeft size={14} />
              Voltar para projetos
            </Link>



            {/* HERO */}
            <header className="mt-10">

              <p className="
                font-mono
                text-xs
                uppercase
                tracking-widest2
                text-ink-faint
              ">
                Projeto
              </p>


              <h1 className="
                mt-4
                max-w-4xl
                font-display
                text-4xl
                font-semibold
                leading-tight
                text-ink
                md:text-6xl
              ">
                {project.name}
              </h1>


              <p className="
                mt-6
                max-w-3xl
                text-lg
                leading-relaxed
                text-ink-muted
              ">
                {project.description}
              </p>



              <div className="mt-8 flex flex-wrap gap-3">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-md
                      border
                      border-base-border
                      px-4
                      py-2
                      text-sm
                      text-ink
                      hover:border-signal
                      hover:text-signal
                    "
                  >
                    <Github size={15}/>
                    GitHub
                  </a>
                )}



                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-md
                      bg-ink
                      px-4
                      py-2
                      text-sm
                      text-base
                      hover:bg-signal
                    "
                  >
                    <ExternalLink size={15}/>
                    Ver projeto
                  </a>
                )}

              </div>

            </header>



            {/* IMAGEM FUTURA */}

            {project.image && (
              <div className="
                mt-16
                overflow-hidden
                rounded-lg
                border
                border-base-border
              ">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-base-border">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        className="object-cover"
                    />
                </div>
              </div>
            )}





            {/* CONTEÚDO */}

            <section className="mt-16 space-y-12">


              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Sobre o projeto
                </h2>

                <p className="mt-4 leading-relaxed text-ink-muted">
                  {project.longDescription}
                </p>
              </div>



              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Problema
                </h2>

                <p className="mt-4 leading-relaxed text-ink-muted">
                  {project.problem}
                </p>
              </div>




              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Solução
                </h2>

                <p className="mt-4 leading-relaxed text-ink-muted">
                  {project.solution}
                </p>
              </div>




              <div>

                <h2 className="font-display text-2xl font-semibold text-ink">
                  Principais entregas
                </h2>


                <ul className="mt-4 space-y-3">

                  {project.highlights.map((item)=>(
                    <li
                      key={item}
                      className="
                        border-l
                        border-signal
                        pl-4
                        text-ink-muted
                      "
                    >
                      {item}
                    </li>
                  ))}

                </ul>

              </div>




              <div>

                <h2 className="font-display text-2xl font-semibold text-ink">
                  Tecnologias utilizadas
                </h2>


                <div className="mt-5 flex flex-wrap gap-2">

                  {project.stack.map((tech)=>(
                    <span
                      key={tech}
                      className="
                        rounded-md
                        border
                        border-base-border
                        px-3
                        py-1.5
                        font-mono
                        text-xs
                        text-ink-muted
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>


            </section>


          </article>

        </Container>

      </main>


      <Footer />

    </>
  );
}