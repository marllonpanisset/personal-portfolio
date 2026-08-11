// Competências exibidas como tags. Agrupadas por categoria apenas para
// organização interna — a interface pode optar por renderizar tudo junto.

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Front-End",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
    ],
  },

  {
    label: "Desenvolvimento Web",
    items: [
      "Componentização",
      "APIs REST",
      "SEO",
      "Performance",
      "Acessibilidade",
      "Responsividade",
      "UX",
      "Git",
      "GitHub",
    ],
  },

  {
    label: "Plataformas",
    items: [
      "VTEX IO",
      "VTEX Legacy",
      "WordPress",
      "Drupal",
      "Hugo",
      "Pug",
      "Markdown",
    ],
  },

  {
    label: "Testes",
    items: ["Vitest", "React Testing Library", "Testes Automatizados"],
  },

  {
    label: "Tecnologias em evolução",
    items: [
      "Node.js",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "Arquitetura de Software",
      "Inteligência Artificial",
      "Python",
      "Pandas",
      "Streamlit",
    ],
  },
];
