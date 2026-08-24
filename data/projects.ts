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
      "Aplicação web institucional e laboratório de Engenharia de Software com arquitetura moderna, formulário Full Stack, API própria, persistência de leads e integrações com serviços externos.",

    longDescription:
      "A Conjuga nasceu como o site institucional de uma empresa de engenharia de software e evoluiu para se tornar meu principal laboratório de desenvolvimento Full Stack e Engenharia de Software. O projeto utiliza Next.js, React e TypeScript em uma arquitetura baseada em componentes e vem incorporando funcionalidades reais de produção, como API para processamento de contatos, persistência de leads no Supabase, validação de formulários, consentimento de privacidade, SEO técnico, analytics condicionado ao consentimento do usuário e documentação estruturada do negócio e da aplicação. Além de representar uma presença digital real em produção, o projeto funciona como ambiente contínuo para estudar arquitetura de software, bancos de dados, integrações, automações, observabilidade, segurança, CI/CD e inteligência artificial aplicada.",

    problem:
      "Construir uma aplicação real capaz de representar uma operação de software e, ao mesmo tempo, servir como ambiente contínuo para aplicar conceitos de Engenharia de Software em situações próximas às encontradas em produção.",

    solution:
      "Desenvolvimento de uma aplicação Full Stack com Next.js, React e TypeScript, combinando arquitetura modular, componentes reutilizáveis, rotas de API, integração com banco de dados e serviços externos. O fluxo de contato envia os dados para uma API da própria aplicação, realiza o processamento no servidor e persiste os leads no Supabase, mantendo responsabilidades de interface, regras de processamento e armazenamento separadas.",

    highlights: [
      "Next.js App Router",
      "Arquitetura modular baseada em componentes reutilizáveis",
      "Formulário de contato com fluxo Full Stack",
      "API server-side para processamento de contatos",
      "Persistência de leads no Supabase",
      "Migrations para evolução controlada do banco de dados",
      "Validação e tratamento de dados do formulário",
      "Consentimento de privacidade no envio de contatos",
      "Separação entre interface, processamento e persistência",
      "SEO técnico e sitemap",
      "Google Search Console",
      "Google Analytics condicionado ao consentimento do usuário",
      "Design responsivo e acessibilidade",
      "Otimização de performance",
      "Documentação estratégica e técnica do projeto",
      "Arquitetura preparada para integrações e automações",
      "Deploy contínuo em ambiente de produção",
      "Laboratório contínuo de Engenharia de Software",
    ],

    image: "/projects/conjuga.png",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "REST API",
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
      "Aplicação web que centraliza minha trajetória profissional, projetos, artigos técnicos e publicações autorais, evoluindo também como plataforma do projeto MarllonCode.",

    longDescription:
      "Meu portfólio profissional foi desenvolvido com Next.js, React e TypeScript para centralizar minha trajetória, experiências, projetos técnicos e produção de conteúdo em uma única aplicação. Com o tempo, deixou de funcionar apenas como uma apresentação profissional e passou a servir também como infraestrutura para o MarllonCode, reunindo blog, artigos técnicos e páginas dedicadas a conteúdos autorais. Entre as evoluções recentes está a publicação do e-book 'Programação na Era da IA', com página própria para apresentação e distribuição do material. A aplicação utiliza App Router, rotas dinâmicas, conteúdo em MDX, arquitetura modular, componentes reutilizáveis, SEO técnico, testes automatizados e práticas voltadas a performance, acessibilidade e manutenção contínua.",

    problem:
      "Centralizar em uma única aplicação minha experiência profissional, projetos, produção técnica e conteúdos autorais, evitando depender de diferentes plataformas externas para apresentar minha trajetória e publicar materiais.",

    solution:
      "Construção de uma aplicação modular com Next.js App Router, React e TypeScript, utilizando componentes reutilizáveis e separação entre dados, conteúdo e apresentação. O projeto incorpora blog em MDX, páginas individuais de projetos, rotas de conteúdo, SEO técnico e uma área dedicada à distribuição de materiais autorais, permitindo que o portfólio evolua progressivamente de uma página profissional para uma plataforma própria de conteúdo.",

    highlights: [
      "Next.js App Router",
      "Arquitetura modular e componentizada",
      "Separação entre dados, conteúdo e apresentação",
      "Páginas individuais para projetos",
      "Blog integrado utilizando MDX",
      "Rotas dinâmicas para conteúdo",
      "Página dedicada ao e-book Programação na Era da IA",
      "Infraestrutura de conteúdo para o projeto MarllonCode",
      "Publicação e distribuição de materiais autorais",
      "SEO técnico utilizando Metadata API",
      "URLs e páginas preparadas para compartilhamento em redes sociais",
      "Design responsivo",
      "Acessibilidade",
      "Otimização de performance",
      "Animações e microinterações com Framer Motion",
      "Testes automatizados com Vitest",
      "Testes de componentes com React Testing Library",
      "Coverage utilizando V8",
      "Conteúdo desacoplado dos componentes visuais",
      "Deploy contínuo",
      "Evolução contínua como laboratório Front-End e de Engenharia de Software",
    ],

    image: "/projects/portfolio.png",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "MDX",
      "Vitest",
      "React Testing Library",
      "Netlify",
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
