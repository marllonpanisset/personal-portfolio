"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/data/experience";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function Experience() {
  return (
    <section id="experiencia" className="py-24 md:py-32">
      <Container>
        <SectionLabel index="02" label="Experiência" />

        <div className="relative">
          <div className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-base-border md:left-[7.5rem] md:block" />

          <ol className="space-y-12 md:space-y-16">
            {experience.map((item, i) => (
              <motion.li
                key={item.company}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                custom={i * 0.05}
                className="relative grid gap-2 md:grid-cols-12 md:gap-6"
              >
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-ink-faint">{item.period}</span>
                </div>

                <div className="hidden md:col-span-1 md:flex md:items-start md:justify-center">
                  <span className="mt-1.5 h-2 w-2 rounded-full border border-signal bg-base" />
                </div>

                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.role}
                    </h3>
                    <span className="text-ink-faint">—</span>
                    <span className="font-body text-sm text-signal">{item.company}</span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
                    {item.location}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
