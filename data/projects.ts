// Projetos apresentados no portfólio.
// Cada projeto representa uma aplicação desenvolvida para resolver um
// problema específico ou explorar conceitos utilizados em projetos reais.

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  longDescription: string;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "conjuga",

    name: "Conjuga",

    category: "Laboratório de Engenharia de Software",

    description:
      "Aplicação web que representa a Conjuga e funciona como meu principal laboratório para evolução contínua em Engenharia de Software.",

    longDescription:
      "A Conjuga nasceu como o site institucional de uma empresa de engenharia de software e evoluiu para se tornar meu principal ambiente de experimentação técnica. O projeto cresce continuamente conforme estudo e implemento novos conceitos relacionados à arquitetura de software, desenvolvimento Full Stack, bancos de dados, Docker, CI/CD, integrações e inteligência artificial aplicada.",

    problem:
      "Criar uma aplicação real que permitisse evoluir continuamente competências técnicas sem depender de projetos artificiais de estudo.",

    solution:
      "Construção de uma aplicação com Next.js, React e TypeScript baseada em componentes reutilizáveis, preparada para incorporar novas funcionalidades e tecnologias de forma incremental.",

    highlights: [
      "Arquitetura baseada em componentes reutilizáveis",
      "Design responsivo",
      "SEO técnico",
      "Otimização de performance",
      "Integração com Supabase",
      "Base preparada para evolução Full Stack",
      "Laboratório contínuo de Engenharia de Software",
    ],

    image: "/projects/conjuga.png",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
    ],

    github: "https://github.com/marllonpanisset/conjuga",

    demo: "https://conjuga.com.br",
  },

  {
    slug: "portfolio-profissional",

    name: "Portfólio Profissional",

    category: "Aplicação Web",

    description:
      "Aplicação desenvolvida para reunir minha experiência profissional, projetos técnicos e artigos em um único ambiente.",

    longDescription:
      "Projeto criado para centralizar minha presença profissional por meio de uma aplicação construída com Next.js, React e TypeScript. Além de apresentar experiências e projetos, também funciona como laboratório para aplicar arquitetura Front-End, componentização, SEO, acessibilidade, testes automatizados e organização de código.",

    problem:
      "Criar uma aplicação que reunisse minha experiência profissional, projetos e artigos técnicos em um único ambiente.",

    solution:
      "Desenvolvimento de uma aplicação utilizando Next.js App Router, arquitetura modular, componentes reutilizáveis, blog em MDX e foco em performance, SEO e experiência do usuário.",

    highlights: [
      "Next.js App Router",
      "Arquitetura baseada em componentes",
      "Blog integrado em MDX",
      "SEO técnico",
      "Responsividade",
      "Testes automatizados",
    ],

    image: "/projects/portfolio.png",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "MDX",
    ],

    github: "https://github.com/marllonpanisset/personal-portfolio",

    demo: "https://marllon.netlify.app",
  },

  {
    slug: "brototec",

    name: "Brototec",

    category: "Projeto Conceitual",

    description:
      "Projeto conceitual criado para explorar arquitetura Front-End, componentização e construção de interfaces para empresas de tecnologia.",

    longDescription:
      "Projeto desenvolvido para transformar o conceito de uma empresa fictícia de tecnologia em uma presença digital completa. O objetivo foi explorar arquitetura Front-End, organização de componentes, estrutura de páginas e boas práticas de desenvolvimento para aplicações institucionais.",

    problem:
      "Construir uma aplicação capaz de apresentar serviços e posicionamento de forma organizada, responsiva e preparada para evolução.",

    solution:
      "Desenvolvimento de uma aplicação utilizando Next.js, TypeScript e componentes reutilizáveis, priorizando organização de código, experiência do usuário e facilidade de manutenção.",

    highlights: [
      "Arquitetura baseada em componentes",
      "Componentização reutilizável",
      "Design responsivo",
      "SEO",
      "Experiência do usuário",
    ],

    image: "/projects/brototec.png",

    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },

  {
    slug: "pousada-profissional",

    name: "Pousada Profissional",

    category: "Projeto Conceitual",

    description:
      "Projeto desenvolvido para explorar arquitetura de aplicações, SEO e experiência do usuário em um cenário próximo ao mercado.",

    longDescription:
      "Aplicação criada para simular a presença digital de um meio de hospedagem, explorando estrutura de páginas, rotas dinâmicas, componentização, organização de conteúdo e boas práticas de desenvolvimento Front-End.",

    problem:
      "Criar uma experiência digital capaz de apresentar serviços e informações de forma clara, responsiva e preparada para crescimento.",

    solution:
      "Construção de uma aplicação utilizando Next.js com componentes reutilizáveis, rotas dinâmicas e foco em desempenho, SEO e experiência do usuário.",

    highlights: [
      "Next.js",
      "Rotas dinâmicas",
      "Componentização",
      "SEO",
      "Responsividade",
    ],

    image: "/projects/pousada-profissional.png",

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Dynamic Routes",
      "Static Generation",
    ],

    github: "https://github.com/marllonpanisset/pousada-profissional",

    demo: "https://pousada-profissional.netlify.app/",
  },

  {
    slug: "dashboard-interativo-de-salarios",

    name: "Dashboard Interativo de Salários",

    category: "Estudo em Data Science",

    description:
      "Dashboard desenvolvido para análise e visualização interativa de dados utilizando Python.",

    longDescription:
      "Projeto desenvolvido durante meus estudos em análise de dados com o objetivo de transformar uma base de informações em uma aplicação interativa. O dashboard utiliza Python, Pandas e Streamlit para realizar tratamento de dados, filtros dinâmicos e visualizações gráficas.",

    problem:
      "Facilitar a exploração e interpretação de dados por meio de uma interface simples e interativa.",

    solution:
      "Desenvolvimento de um dashboard utilizando Python para tratamento de dados, filtros dinâmicos e visualizações gráficas.",

    highlights: [
      "Python",
      "Pandas",
      "Streamlit",
      "Filtros dinâmicos",
      "Visualização de dados",
    ],

    image: "/projects/dashboard-salarios.png",

    stack: ["Python", "Pandas", "Streamlit", "Data Analysis"],

    github:
      "https://github.com/marllonpanisset/dashboard-interativo-com-python",

    demo: "https://dashboard-interativo-com-python.streamlit.app/",
  },
];
