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

    category: "Aplicação Full Stack",

    description:
      "Aplicação institucional desenvolvida com Next.js e TypeScript, com formulário Full Stack, API server-side, persistência de leads no Supabase e integrações voltadas a uma operação real.",

    longDescription:
      "A Conjuga é uma aplicação web em produção criada para representar uma operação de engenharia de software e, ao mesmo tempo, servir como ambiente real de evolução técnica. O projeto utiliza Next.js, React e TypeScript com arquitetura modular e componentes reutilizáveis. Entre as funcionalidades implementadas estão formulário de contato com processamento server-side, persistência de leads no Supabase, validação e tratamento de dados, consentimento de privacidade, SEO técnico, sitemap, integração com ferramentas de análise e deploy contínuo. O desenvolvimento do projeto permite aplicar conceitos de Engenharia de Software em um contexto real, envolvendo Front-End, APIs, banco de dados, integrações, arquitetura e manutenção evolutiva.",

    problem:
      "Construir uma aplicação real que representasse uma operação de software e permitisse aplicar conceitos de Engenharia de Software em produção, sem depender apenas de exercícios ou projetos artificiais de estudo.",

    solution:
      "Desenvolvimento de uma aplicação Full Stack com Next.js, React e TypeScript, separando interface, processamento server-side e persistência de dados. O fluxo de contato envia os dados para uma rota de API da aplicação, realiza validação e processamento no servidor e persiste os leads no Supabase, criando uma base preparada para novas integrações e automações.",

    highlights: [
      "Next.js App Router",
      "Arquitetura modular baseada em componentes reutilizáveis",
      "Formulário de contato com fluxo Full Stack",
      "API server-side para processamento de contatos",
      "Persistência de leads no Supabase",
      "PostgreSQL gerenciado pelo Supabase",
      "Migrations para evolução do banco de dados",
      "Validação e tratamento de dados do formulário",
      "Consentimento de privacidade",
      "Separação entre interface, API e persistência",
      "SEO técnico e sitemap",
      "Integração com Google Search Console",
      "Google Analytics condicionado ao consentimento",
      "Design responsivo",
      "Acessibilidade",
      "Otimização de performance",
      "Deploy contínuo com Vercel",
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

    category: "Aplicação Full Stack",

    description:
      "Aplicação que centraliza minha trajetória profissional, projetos, blog, conteúdos técnicos e materiais autorais, funcionando também como plataforma do MarllonCode.",

    longDescription:
      "Meu portfólio profissional foi desenvolvido com Next.js, React e TypeScript para centralizar minha trajetória, projetos técnicos e produção de conteúdo em uma única aplicação. Com o tempo, o projeto evoluiu de uma apresentação profissional para uma plataforma própria de conteúdo vinculada ao MarllonCode. Hoje, reúne experiências, projetos, blog em MDX, páginas dinâmicas, artigos, materiais autorais e uma área dedicada à publicação e distribuição de e-books, incluindo o 'Programação na Era da IA'. A aplicação também incorpora funcionalidades Full Stack, integrações com API e persistência de dados, além de SEO técnico, testes automatizados, acessibilidade, responsividade e deploy contínuo.",

    problem:
      "Centralizar minha presença profissional e minha produção técnica em uma plataforma própria, evitando depender de diferentes serviços externos para apresentar projetos, publicar artigos e distribuir materiais autorais.",

    solution:
      "Construção de uma aplicação modular com Next.js App Router, React e TypeScript, utilizando componentes reutilizáveis, conteúdo em MDX, rotas dinâmicas, APIs e integração com banco de dados. A arquitetura separa dados, conteúdo e apresentação, permitindo que o projeto evolua de um portfólio tradicional para uma plataforma pessoal de conteúdo, distribuição e experimentação técnica.",

    highlights: [
      "Next.js App Router",
      "Arquitetura modular e componentizada",
      "Separação entre dados, conteúdo e apresentação",
      "Páginas individuais para projetos",
      "Blog integrado utilizando MDX",
      "Rotas dinâmicas para artigos e conteúdos",
      "Página dedicada ao e-book Programação na Era da IA",
      "Infraestrutura de conteúdo para o MarllonCode",
      "Publicação e distribuição de materiais autorais",
      "Integração com Supabase",
      "Persistência de dados",
      "Integração com REST API",
      "SEO técnico utilizando Metadata API",
      "URLs preparadas para compartilhamento em redes sociais",
      "Design responsivo",
      "Acessibilidade",
      "Otimização de performance",
      "Animações e microinterações com Framer Motion",
      "Testes automatizados com Vitest",
      "Testes de componentes com React Testing Library",
      "Coverage com V8",
      "Deploy contínuo com Netlify",
    ],

    image: "/projects/portfolio.png",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "MDX",
      "Supabase",
      "REST API",
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
