import { Variants } from "framer-motion";

// Movimento discreto: fade + leve deslocamento vertical.
// Usado em elementos de entrada de seção — nada exagerado.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

// Orquestra a entrada de filhos em sequência sutil (usado no Hero).
export const stagger = (staggerChildren: number = 0.08, delayChildren: number = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const viewportOnce = { once: true, margin: "-80px" };
