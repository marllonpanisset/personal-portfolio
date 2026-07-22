// Projetos apresentados no portfólio.
// Cada projeto possui informações resumidas para cards
// e informações completas utilizadas nas páginas individuais.

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
      "Site pessoal desenvolvido para apresentar minha trajetória em Tecnologia da Informação, experiências profissionais e projetos desenvolvidos.",


    longDescription:
      "Aplicação criada para consolidar minha presença profissional na área de tecnologia, reunindo experiência em suporte técnico, infraestrutura, sustentação de aplicações e desenvolvimento Front-End em uma apresentação moderna e objetiva.",


    problem:
      "Criar uma apresentação profissional que fosse além de um currículo tradicional, permitindo demonstrar experiência técnica, evolução de carreira e projetos realizados.",


    solution:
      "Desenvolvimento de uma aplicação utilizando Next.js com componentes reutilizáveis, arquitetura organizada, foco em performance, responsividade e experiência do usuário.",


    highlights: [
      "Arquitetura utilizando Next.js App Router",
      "Componentização e organização modular",
      "Design responsivo com foco em UX",
      "Estrutura preparada para páginas de projetos e blog",
    ],


    image:
      "/projects/portfolio.png",


    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],


    github:
      "https://github.com/marllonpanisset/personal-portfolio",


    demo:
      "https://marllon.netlify.app",
  },
  {
    slug: "brototec",

    name: "Brototec",

    category: "Conceito de Produto Digital",

    description:
      "Conceito de plataforma digital desenvolvido para explorar autonomia, propriedade e construção de ativos digitais para pequenos negócios.",

    image:
      "/projects/brototec.png",

    longDescription:
      "A Brototec foi um projeto experimental de posicionamento e construção de uma solução digital própria, explorando como tecnologia poderia ser utilizada para criar estruturas digitais mais independentes, transparentes e personalizadas para negócios.",

    problem:
      "Muitos negócios dependem de plataformas fechadas e soluções terceirizadas onde possuem pouco controle sobre seus dados, estrutura digital e evolução futura.",

    solution:
      "Foi desenvolvida uma proposta de ecossistema digital baseado em interfaces personalizadas, estruturas de conteúdo gerenciáveis e entrega de ativos digitais próprios, explorando conceitos de autonomia, performance e experiência do usuário.",

    highlights: [
      "Definição de posicionamento e proposta de valor",
      "Arquitetura completa de informações e páginas",
      "Criação de identidade visual e experiência digital",
      "Estruturação de soluções digitais orientadas a negócio",
      "Desenvolvimento de interface responsiva utilizando Next.js",
    ],

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "UX/UI Design",
      "Vercel",
    ],

    github:
      "https://github.com/marllonpanisset/brototec",

    demo:
      "https://brototec.vercel.app",
  },
  {
    slug: "pousada-profissional",

    name: "Pousada Profissional",

    category: "Produto Digital",


    description:
      "Site modelo para pousadas com apresentação de acomodações, páginas dinâmicas e contato direto via WhatsApp.",


    longDescription:
      "Projeto desenvolvido como demonstração de uma solução digital para o segmento de hospedagem, permitindo apresentar acomodações, informações da pousada e facilitar o contato com hóspedes.",


    problem:
      "Pequenas pousadas muitas vezes dependem exclusivamente de plataformas externas e não possuem um canal próprio profissional para apresentar seus serviços.",


    solution:
      "Criação de um site responsivo utilizando páginas dinâmicas, componentes reutilizáveis e integração com WhatsApp para facilitar solicitações de reservas.",


    highlights: [
      "Rotas dinâmicas utilizando Next.js",
      "Estrutura preparada para múltiplas acomodações",
      "Componentização reutilizável",
      "Foco em conversão e experiência do usuário",
    ],


    image:
      "/projects/pousada-profissional.png",


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
    slug: "dashboard-interativo-de-salarios",

    name:
      "Dashboard Interativo de Salários em Data Science",

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


    image:
      "/projects/dashboard-salarios.png",


    stack: [
      "Python",
      "Streamlit",
      "Pandas",
      "Data Analysis",
    ],


    github:
      "https://github.com/marllonpanisset/dashboard-interativo-com-python",


    demo:
      "https://dashboard-interativo-com-python.streamlit.app/",
  },

];