// Competências exibidas como tags. Agrupadas por categoria apenas para
// organização interna — a UI pode optar por renderizar tudo junto.

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Suporte Técnico",
    items: [
      "Suporte N1/N2",
      "Atendimento ao usuário",
      "Troubleshooting",
      "Gestão de incidentes",
      "Análise de causa raiz",
      "Application Support",
      "DevTools",
    ],
  },
  {
    label: "Infraestrutura",
    items: [
      "Windows",
      "Linux",
      "Redes TCP/IP",
      "Configuração de estações",
      "Hardware",
      "Backup",
      "Permissões de acesso",
    ],
  },
  {
    label: "Aplicações & Desenvolvimento",
    items: [
      "Git/GitHub",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Python básico",
      "SQL básico",
      "APIs REST (conceitos)",
    ],
  },
  {
    label: "Plataformas",
    items: [
      "WordPress",
      "VTEX",
      "E-commerce",
    ],
  },
];