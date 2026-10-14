 // Competências exibidas como tags. Agrupadas por categoria.
// Prioriza Front-End, React, JavaScript e VTEX, conforme currículo.

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Front-End",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "HTML5",
      "CSS3",
      "SCSS",
      "jQuery",
      "Tailwind CSS",
      "Componentização",
      "Responsividade",
      "UX",
      "Acessibilidade",
      "Performance",
    ],
  },

  {
    label: "E-commerce e CMS",
    items: [
      "VTEX IO",
      "VTEX Legacy",
      "WordPress",
      "Drupal",
      "Hugo",
      "MDX",
      "Markdown",
      "Pug",
    ],
  },

  {
    label: "APIs e Integrações",
    items: [
      "APIs REST",
      "Supabase",
      "PostgreSQL",
      "Migrations",
      "SEO",
    ],
  },

  {
    label: "Qualidade e Ferramentas",
    items: [
      "Git",
      "GitHub",
      "Vitest",
      "React Testing Library",
      "Testes Automatizados",
      "ESLint",
    ],
  },

  {
    label: "Desenvolvimento Assistido por IA",
    items: [
      "Codex",
      "OpenCode",
      "MCP",
    ],
  },

  {
    label: "Complementar",
    items: ["Python", "Pandas", "Streamlit"],
  },
];
