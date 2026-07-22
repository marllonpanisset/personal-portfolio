"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

// ── Links de navegação ─────────────────────────────────────────────
const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#experiencia", label: "Experiência" },
  { href: "/#competencias", label: "Competências" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/#contato", label: "Contato" },
];

const socialLinks = [
  { href: "https://github.com/marllonpanisset", label: "GitHub", icon: Github },
  {
    href: "https://linkedin.com/in/marllon-panisset",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:marllon.web@gmail.com", label: "Email", icon: Mail },
];

// ── Componente de status "Disponível" ──────────────────────────────
function AvailabilityBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2 font-mono text-[11px] text-ink-muted ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-signal" />
      </span>
      <span>Disponível</span>
    </div>
  );
}

// ── Link de navegação reutilizável ───────────────────────────────
function NavLink({
  href,
  label,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`font-mono text-[11px] uppercase tracking-widest2 text-ink-muted transition-colors hover:text-signal ${className}`}
    >
      {label}
    </a>
  );
}

// ── Link social reutilizável ─────────────────────────────────────
function SocialLink({
  href,
  label,
  icon: Icon,
  onClick,
}: {
  href: string;
  label: string;
  icon: typeof Github;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 text-ink-muted transition-colors hover:text-signal"
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}

// ── Animações ──────────────────────────────────────────────────────
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

const menuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: { opacity: 0, y: 8, transition: { duration: 0.15 } },
};

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { delay: 0.35, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: { scaleX: 0, transition: { duration: 0.2 } },
};

// ── Componente principal ─────────────────────────────────────────────
export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // ── Handlers ────────────────────────────────────────────────────
  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleLinkClick = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  // ── Scroll lock ─────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // ── Fechar com Escape ───────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  return (
    <>
      {/* ── Navbar fixa ─────────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-base-border/70 bg-base/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="/#top"
            className="font-display text-sm font-semibold tracking-tight text-ink"
          >
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </a>

          {/* Links desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Status + botão mobile */}
          <div className="flex items-center gap-4">
            {/* Status: sempre visível em desktop, visível em mobile */}
            <AvailabilityBadge className="hidden md:flex" />

            {/* Botão hambúrguer mobile */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-md text-ink transition-colors hover:bg-base-hover md:hidden"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </header>

      {/* ── Overlay mobile fullscreen ───────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col bg-base/95 backdrop-blur-xl md:hidden"
          >
            {/* Header do overlay */}
            <div className="flex h-16 items-center justify-between px-6">
              <a
                href="/#top"
                onClick={handleLinkClick}
                className="font-display text-sm font-semibold tracking-tight text-ink"
              >
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </a>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Fechar menu"
                className="flex h-9 w-9 items-center justify-center rounded-md text-ink transition-colors hover:bg-base-hover"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Conteúdo do menu */}
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-1 flex-col items-center justify-center px-6"
            >
              {/* Links de navegação */}
              <ul className="flex flex-col items-center gap-6">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="font-mono text-lg uppercase tracking-widest2 text-ink-muted transition-colors hover:text-signal"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Divider 1 */}
              <motion.div
                variants={dividerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="my-8 h-px w-32 origin-center bg-base-border"
              />

              {/* Status Disponível */}
              <motion.div
                custom={links.length}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <AvailabilityBadge />
              </motion.div>

              {/* Divider 2 */}
              <motion.div
                variants={dividerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="my-8 h-px w-32 origin-center bg-base-border"
              />

              {/* Links sociais */}
              <ul className="flex flex-col items-center gap-4">
                {socialLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    custom={links.length + 1 + i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <SocialLink
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      onClick={handleLinkClick}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
