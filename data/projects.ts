// Projetos apresentados no portfólio.
// Estudos, experimentos e aplicações desenvolvidas
// durante minha trajetória em tecnologia.

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
    slug: "portfolio-profissional",

    name: "Portfólio Profissional",

    category: "Projeto Pessoal",

    description:
      "Portfólio e blog desenvolvidos para apresentar minha trajetória em tecnologia, compartilhar conhecimentos e reunir projetos em um único lugar.",

    longDescription:
      "Aplicação desenvolvida para consolidar minha presença profissional na área de tecnologia, reunindo experiências, projetos e um blog onde documento estudos, aprendizados e minha evolução em desenvolvimento, suporte, sistemas e segurança da informação.",

    problem:
      "Criar uma plataforma que fosse além de um currículo tradicional, permitindo apresentar minha experiência profissional, centralizar projetos e compartilhar conhecimento através de um blog técnico.",

    solution:
      "Desenvolvimento de uma aplicação utilizando Next.js App Router com arquitetura modular, componentes reutilizáveis, sistema de blog em MDX, foco em performance, SEO, responsividade e experiência do usuário.",

    highlights: [
      "Portfólio profissional integrado ao blog",
      "Sistema de blog com MDX",
      "Arquitetura utilizando Next.js App Router",
      "Componentização e organização modular",
      "Design responsivo com foco em UX",
      "SEO e geração dinâmica de páginas",
    ],

    image: "/projects/portfolio.png",

    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX"],

    github: "https://github.com/marllonpanisset/personal-portfolio",

    demo: "https://marllon.netlify.app",
  },
  {
    slug: "brototec",

    name: "Brototec",

    category: "Projeto Experimental",

    description:
      "Experimento de posicionamento digital e construção de uma identidade visual para explorar conceitos de produto, interface e experiência do usuário.",

    longDescription:
      "Projeto experimental criado para estudar como uma marca digital poderia ser estruturada do zero, explorando identidade visual, arquitetura de informação, design de interfaces e desenvolvimento Front-End.",

    problem:
      "Explorar na prática como transformar uma ideia abstrata em uma experiência digital completa, passando por estratégia, design e implementação.",

    solution:
      "Desenvolvimento de uma interface completa utilizando Next.js, criando páginas, componentes reutilizáveis e uma experiência visual focada em clareza e usabilidade.",

    highlights: [
      "Criação de identidade e conceito visual",
      "Arquitetura de páginas e experiência do usuário",
      "Desenvolvimento Front-End completo",
      "Componentização utilizando Next.js",
      "Estudo de posicionamento de produto digital",
    ],

    image: "/projects/brototec.png",

    stack: ["Next.js", "TypeScript", "Tailwind CSS", "UX/UI Design", "Vercel"],
  },
  {
    slug: "pousada-profissional",

    name: "Pousada Profissional",

    category: "Estudo de Produto Digital",

    description:
      "Protótipo de plataforma digital para o segmento de hospedagem, desenvolvido para explorar experiência do usuário, páginas dinâmicas e apresentação de serviços.",

    longDescription:
      "Projeto experimental criado para estudar como uma solução digital poderia ser estruturada para pequenos negócios do setor de hospedagem, explorando arquitetura de informação, componentes reutilizáveis e experiência de navegação.",

    problem:
      "Estudar como organizar informações de um negócio real em uma interface digital clara, responsiva e fácil de utilizar.",

    solution:
      "Construção de um protótipo utilizando Next.js com páginas dinâmicas, componentes reutilizáveis e estrutura preparada para diferentes conteúdos.",

    highlights: [
      "Rotas dinâmicas utilizando Next.js",
      "Estrutura preparada para múltiplas acomodações",
      "Componentização reutilizável",
      "Foco em conversão e experiência do usuário",
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

    name: "Dashboard Interativo de Salários em Data Science",

    category: "Data Science",

    description:
      "Dashboard desenvolvido com Python para análise e visualização de dados salariais utilizando gráficos interativos.",

    longDescription:
      "Projeto desenvolvido durante estudos de Data Science com objetivo de transformar uma base de dados em uma aplicação visual interativa, permitindo exploração através de filtros e gráficos.",

    problem:
      "Dados brutos possuem pouco valor quando não são tratados e apresentados de forma clara para análise.",

    solution:
      "Construção de um dashboard utilizando Python para tratamento, análise e visualização de dados através de uma interface interativa.",

    highlights: [
      "Manipulação e tratamento de dados",
      "Criação de gráficos interativos",
      "Aplicação prática de conceitos de Data Science",
      "Desenvolvimento utilizando Python",
    ],

    image: "/projects/dashboard-salarios.png",

    stack: ["Python", "Streamlit", "Pandas", "Data Analysis"],

    github:
      "https://github.com/marllonpanisset/dashboard-interativo-com-python",

    demo: "https://dashboard-interativo-com-python.streamlit.app/",
  },
];
