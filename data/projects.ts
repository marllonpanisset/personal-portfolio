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
      "Aplicação web desenvolvida para apresentar minha trajetória profissional, projetos técnicos e compartilhar conteúdos sobre tecnologia através de um blog integrado.",

    longDescription:
      "Aplicação desenvolvida em Next.js para consolidar minha presença profissional na área de tecnologia, reunindo experiências, projetos, tecnologias utilizadas e um sistema de blog onde compartilho estudos, aprendizados e evolução profissional.",

    problem:
      "Criar uma plataforma profissional que fosse além de um currículo tradicional, permitindo demonstrar experiência técnica, apresentar projetos desenvolvidos e documentar conhecimentos adquiridos durante minha trajetória.",

    solution:
      "Desenvolvimento de uma aplicação utilizando Next.js App Router, arquitetura modular, componentes reutilizáveis, blog em MDX, otimização para SEO, responsividade e foco em experiência do usuário.",

    highlights: [
      "Aplicação web desenvolvida com Next.js App Router",
      "Portfólio profissional integrado ao sistema de blog",
      "Blog utilizando MDX para criação de conteúdos técnicos",
      "Arquitetura baseada em componentes reutilizáveis",
      "Design responsivo e otimizado para experiência do usuário",
      "Estrutura preparada para evolução contínua",
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
      "Projeto experimental de produto digital desenvolvido para explorar criação de interfaces, arquitetura de aplicações e experiência do usuário.",

    longDescription:
      "Projeto criado para estudar o desenvolvimento de uma solução digital completa, explorando desde a definição da proposta até a implementação Front-End, organização de componentes e construção de uma experiência de navegação consistente.",

    problem:
      "Transformar uma ideia de produto digital em uma aplicação estruturada, aplicando conceitos de desenvolvimento, interface e organização de software.",

    solution:
      "Desenvolvimento de uma aplicação utilizando Next.js com componentes reutilizáveis, estrutura escalável e foco em boas práticas de desenvolvimento Front-End.",

    highlights: [
      "Desenvolvimento completo da interface Front-End",
      "Criação de componentes reutilizáveis",
      "Organização de arquitetura utilizando Next.js",
      "Aplicação de conceitos de UX/UI",
      "Estudo de produto digital e experiência do usuário",
    ],

    image: "/projects/brototec.png",

    stack: ["Next.js", "TypeScript", "Tailwind CSS", "UX/UI Design", "Vercel"],
  },

  {
    slug: "pousada-profissional",

    name: "Pousada Profissional",

    category: "Estudo de Produto Digital",

    description:
      "Protótipo de plataforma digital para hospedagem desenvolvido para explorar aplicações web, páginas dinâmicas e experiência de usuário.",

    longDescription:
      "Projeto desenvolvido para estudar a criação de uma solução digital para pequenos negócios, explorando estrutura de páginas, componentes reutilizáveis, apresentação de informações e organização de conteúdo através de uma aplicação moderna.",

    problem:
      "Criar uma experiência digital capaz de apresentar serviços, informações e conteúdos de forma organizada, responsiva e preparada para crescimento.",

    solution:
      "Construção de uma aplicação utilizando Next.js com rotas dinâmicas, componentes reutilizáveis e arquitetura preparada para diferentes tipos de conteúdo.",

    highlights: [
      "Aplicação desenvolvida com Next.js",
      "Criação de páginas dinâmicas",
      "Componentização reutilizável",
      "Estrutura preparada para múltiplos conteúdos",
      "Foco em experiência do usuário e conversão",
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
      "Dashboard desenvolvido com Python para análise e visualização de dados através de uma aplicação interativa.",

    longDescription:
      "Projeto desenvolvido durante estudos de Data Science com objetivo de transformar uma base de dados em uma aplicação visual, permitindo análise de informações através de filtros, gráficos e indicadores interativos.",

    problem:
      "Transformar dados brutos em informações úteis através de uma interface que facilite exploração e interpretação dos resultados.",

    solution:
      "Desenvolvimento de um dashboard utilizando Python para tratamento, análise e visualização de dados, criando uma experiência interativa para exploração das informações.",

    highlights: [
      "Tratamento e análise de dados utilizando Python",
      "Criação de gráficos e visualizações interativas",
      "Construção de aplicação utilizando Streamlit",
      "Aplicação prática de conceitos de Data Science",
    ],

    image: "/projects/dashboard-salarios.png",

    stack: ["Python", "Streamlit", "Pandas", "Data Analysis"],

    github:
      "https://github.com/marllonpanisset/dashboard-interativo-com-python",

    demo: "https://dashboard-interativo-com-python.streamlit.app/",
  },
];
