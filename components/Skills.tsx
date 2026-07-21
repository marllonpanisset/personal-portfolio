"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skillGroups } from "@/data/skills";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function Skills() {
  return (
    <section id="competencias" className="py-24 md:py-32">
      <Container>
        <SectionLabel index="03" label="Competências" />

        <div className="grid gap-10 md:grid-cols-2 md:gap-x-16">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              custom={i * 0.06}
            >
              <div className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
                {group.label}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-base-border px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:border-signal hover:text-signal"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
