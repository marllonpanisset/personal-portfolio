"use client";

import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#experiencia", label: "Experiência" },
  { href: "/#competencias", label: "Competências" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#contato", label: "Contato" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-base-border/70 bg-base/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="/#top" className="font-display text-sm font-semibold tracking-tight text-ink">
          {profile.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-widest2 text-ink-muted transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 font-mono text-[11px] text-ink-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-signal" />
          </span>
          <span className="hidden sm:inline">Disponível</span>
        </div>
      </Container>
    </header>
  );
}
