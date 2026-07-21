// Seção preparada para projetos futuros. Adicione novos objetos ao array
// seguindo a mesma estrutura — o card será renderizado automaticamente.

export type Project = {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Portfólio Profissional",
    description:
      "Site pessoal desenvolvido com foco em performance, experiência do usuário e apresentação profissional da trajetória em Tecnologia da Informação.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/marllonpanisset/personal-portfolio",
    demo: "https://marllon.netlify.app"
  },
  {
    name: "Brototec",
    description:
    "Site institucional desenvolvido para uma solução digital de tecnologia, com arquitetura de páginas, apresentação de serviços, identidade visual e foco em experiência do usuário.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/marllonpanisset/brototec",
    demo: "https://brototec.vercel.app"
  },
  {
    name: "Pousada Profissional",
    description:
      "Site institucional para pousadas com catálogo de acomodações, páginas dinâmicas de quartos e integração com WhatsApp através de mensagens personalizadas para facilitar o contato com hóspedes.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Dynamic Routes",
      "Static Generation",
    ],
    github:
      "https://github.com/marllonpanisset/pousada-profissional",
    demo:
      "https://pousada-profissional.netlify.app/",
  },
  {
    name: "Dashboard Interativo de Salários em Data Science",
    description:
      "Dashboard desenvolvido para análise e visualização de dados salariais utilizando Python, permitindo exploração de informações através de gráficos interativos.",
    stack: ["Python", "Streamlit", "Pandas", "Data Analysis"],
    github: "https://github.com/marllonpanisset/dashboard-interativo-com-python",
    demo: "https://dashboard-interativo-com-python.streamlit.app/"
  },
];