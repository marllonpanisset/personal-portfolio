"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" aria-hidden />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger(0.09)}
          className="max-w-3xl"
        >
          {/* Signature element: a monitoring-style status strip — this is the one
             piece of vocabulary from the subject's own world (uptime / status
             monitoring) that recurs, quietly, through the page. */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-base-border bg-base-surface/60 px-3 py-1.5 font-mono text-[11px] text-ink-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-signal" />
            </span>
            status: {profile.status.toLowerCase()}
          </motion.div>

          <motion.h1
            custom={0.08}
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            custom={0.16}
            variants={fadeUp}
            className="mt-5 font-display text-lg text-signal md:text-xl"
          >
            {profile.role} <span className="text-ink-faint">·</span> {profile.roleSecondary}
          </motion.p>

          <motion.p
            custom={0.24}
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div custom={0.32} variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 font-body text-sm font-medium text-base transition-colors hover:bg-signal"
            >
              <Linkedin size={16} strokeWidth={2} />
              LinkedIn
              <ArrowUpRight
                size={14}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-base-border px-4 py-2.5 font-body text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <Github size={16} strokeWidth={2} />
              GitHub
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-base-border px-4 py-2.5 font-body text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <FileDown size={16} strokeWidth={2} />
              Currículo (PDF)
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-md border border-base-border px-4 py-2.5 font-body text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <Mail size={16} strokeWidth={2} />
              Contato
            </a>
          </motion.div>
        </motion.div>

        {/* Minimal metric strip — quiet, not a card grid. */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          custom={0.1}
          className="mt-20 flex max-w-2xl flex-wrap gap-x-12 gap-y-6 border-t border-base-border pt-8"
        >
          <Metric value={`${profile.yearsOfExperience}`} label="Anos de experiência" />
          <Metric value="N1 / N2" label="Suporte técnico" />
          <Metric value="24/7" label="Ambientes críticos" />
          <Metric value="Prod" label="Sustentação em produção" />
        </motion.div>
      </Container>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-ink">{value}</div>
      <div className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-ink-muted">
        {label}
      </div>
    </div>
  );
}
