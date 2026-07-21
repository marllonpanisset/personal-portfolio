"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { about } from "@/data/profile";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <Container>
        <SectionLabel index="01" label="Sobre" />

        <div className="grid gap-12 md:grid-cols-12">
          {/* Texto principal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="md:col-span-7"
          >
            <div className="space-y-5">
              {about.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-ink-muted md:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Coluna lateral */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            custom={0.1}
            className="space-y-10 md:col-span-4 md:col-start-9"
          >
            {/* Foto */}
            <div>
              <div className="overflow-hidden rounded-lg border border-base-border bg-base-surface">
                <Image
                  src="/profile.png"
                  alt="Marllon Panisset"
                  width={320}
                  height={320}
                  className="
                    aspect-square
                    w-full
                    object-cover
                    transition-all
                    duration-500
                    hover:scale-[1.03]
                  "
                />
              </div>
            </div>

            {/* Áreas de atuação */}
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
                Frentes de atuação
              </div>

              <ul className="mt-4 space-y-4 border-l border-base-border pl-5">
                {about.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="text-sm leading-relaxed text-ink"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}