import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0B0E14", // deep slate-black background
          surface: "#12161F", // elevated panels / cards
          border: "#20242F", // hairline borders
        },
        ink: {
          DEFAULT: "#E7EAF1", // primary text
          muted: "#8A93A6", // secondary text
          faint: "#565E70", // tertiary / disabled text
        },
        signal: {
          DEFAULT: "#4FD1C5", // status/teal accent — "operational" signal
          dim: "#274744", // low-opacity accent background
          amber: "#E3B341", // reserved: warning-state accent, used sparingly
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "72rem",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        blink: "blink 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
