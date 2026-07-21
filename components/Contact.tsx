"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profile } from "@/data/profile";
import { fadeUp, viewportOnce } from "@/lib/animations";

const channels = [
  { label: "E-mail", value: "Enviar mensagem", href: profile.links.email, icon: Mail },
  { label: "LinkedIn", value: "/in/marllon-panisset", href: profile.links.linkedin, icon: Linkedin },
  { label: "GitHub", value: "@marllonpanisset", href: profile.links.github, icon: Github },
  { label: "WhatsApp", value: "Falar agora", href: profile.links.whatsapp, icon: MessageCircle },
];

export function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32">
      <Container>
        <SectionLabel index="05" label="Contato" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <h2 className="font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
            Aberto a conversar sobre oportunidades em suporte técnico e
            sustentação de aplicações.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
            Respondo em até 24h nos canais abaixo.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-base-border sm:grid-cols-2">
          {channels.map((channel, i) => (
            <motion.a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              custom={i * 0.05}
              className="group flex items-center justify-between gap-4 bg-base-surface/40 p-6 transition-colors hover:bg-base-surface"
            >
              <div className="flex items-center gap-4">
                <channel.icon size={18} className="text-signal" strokeWidth={1.75} />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
                    {channel.label}
                  </div>
                  <div className="mt-1 text-sm text-ink">{channel.value}</div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-ink-faint transition-colors group-hover:text-signal"
              />
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
