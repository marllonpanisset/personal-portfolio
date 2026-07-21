// Competências exibidas como tags. Agrupadas por categoria apenas para
// organização interna — a UI pode optar por renderizar tudo junto.

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Suporte",
    items: ["Application Support", "Troubleshooting", "Suporte N1/N2", "APIs REST", "DevTools"],
  },
  {
    label: "Infraestrutura",
    items: ["Linux", "Windows", "Redes TCP/IP"],
  },
  {
    label: "Desenvolvimento",
    items: [
      "Git/GitHub",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Python",
      "SQL"
    ],
  },
  {
    label: "Plataformas",
    items: ["WordPress", "VTEX"],
  },
];
