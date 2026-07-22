"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32">
      <Container>
        <SectionLabel index="04" label="Projetos" />

        {projects.length === 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="flex flex-col items-start gap-3 rounded-lg border border-dashed border-base-border px-6 py-12"
          >
            <FolderGit2
              size={20}
              className="text-ink-faint"
              strokeWidth={1.5}
            />

            <p className="max-w-md text-sm leading-relaxed text-ink-muted">
              Espaço reservado para projetos publicados. Novos projetos entram
              automaticamente aqui assim que forem cadastrados em{" "}
              <code className="font-mono text-xs text-signal">
                data/projects.ts
              </code>
              .
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.article
                key={project.slug}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                custom={i * 0.06}
                className="
                  group
                  overflow-hidden
                  rounded-lg
                  border
                  border-base-border
                  transition-colors
                  hover:border-signal
                "
              >

                <Link
                  href={`/projetos/${project.slug}`}
                  className="block"
                >

                  {project.image && (
                    <div
                      className="
                        relative
                        aspect-video
                        overflow-hidden
                        border-b
                        border-base-border
                      "
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="
                          object-cover
                          opacity-80
                          transition-opacity
                          duration-500
                          ease-out
                          group-hover:opacity-100
                        "
                      />
                    </div>
                  )}


                  <div className="p-6">

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-base font-semibold text-ink">
                          {project.name}
                        </h3>

                        <span
                          className="
                            mt-2
                            inline-flex
                            rounded-md
                            border
                            border-base-border
                            px-2
                            py-1
                            font-mono
                            text-[11px]
                            text-signal
                          "
                        >
                          {project.category}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="
                          shrink-0
                          text-ink-faint
                          transition-colors
                          group-hover:text-signal
                        "
                      />
                    </div>


                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {project.description}
                    </p>


                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded
                            border
                            border-base-border
                            px-2
                            py-1
                            font-mono
                            text-[11px]
                            text-ink-faint
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>


                    <div className="mt-5 font-mono text-xs text-signal">
                      Ver detalhes do projeto →
                    </div>

                  </div>

                </Link>


                <div className="px-6 pb-6 flex flex-wrap gap-3">

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
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-ink
                        transition-colors
                        hover:border-signal
                        hover:text-signal
                      "
                    >
                      <Github size={14} />
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
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-base
                        transition-colors
                        hover:bg-signal
                      "
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}

                </div>

              </motion.article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}