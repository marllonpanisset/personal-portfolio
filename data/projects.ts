// Projetos apresentados no portfólio.
// Experiências profissionais estão em `data/experience.ts`.
// Projetos autorais e para clientes estão separados de vínculos de emprego.

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  gallery?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
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
    category: "Projeto Autoral",
    description:
      "Projeto autoral iniciado em ago. 2026, no qual atuo como fundador e responsável técnico da Conjuga, iniciativa de engenharia de software voltada a soluções digitais para empresas. O projeto inclui uma aplicação web em produção, desenvolvida com Next.js e TypeScript, com formulário Full Stack, API server-side e persistência de leads no Supabase.",
    longDescription:
      "A Conjuga é um projeto autoral iniciado em ago. 2026, no qual atuo como fundador e responsável técnico. É uma aplicação web em produção criada para representar uma operação de engenharia de software e, ao mesmo tempo, servir como ambiente real de evolução técnica. O projeto utiliza Next.js, React e TypeScript com arquitetura modular e componentes reutilizáveis. Entre as funcionalidades implementadas estão formulário de contato com processamento server-side, persistência de leads no Supabase, validação e tratamento de dados, consentimento de privacidade, SEO técnico, sitemap, integração com ferramentas de análise e deploy contínuo.",
    problem:
      "Construir uma aplicação real que representasse uma operação de software e permitisse aplicar conceitos de engenharia de software em produção, sem depender apenas de exercícios ou projetos artificiais de estudo.",
    solution:
      "Desenvolvimento de uma aplicação Full Stack com Next.js, React e TypeScript, separando interface, processamento server-side e persistência de dados. O fluxo de contato envia os dados para uma rota de API da aplicação, realiza validação e processamento no servidor e persiste os leads no Supabase, criando uma base preparada para novas integrações e automações.",
    highlights: [
      "Projeto autoral · ago. 2026 – atual · fundador e responsável técnico",
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
    name: "Portfólio Profissional — Desenvolvimento Web Assistido por IA",
    category: "Projeto para Cliente",
    description:
      "Portfólio profissional desenvolvido para cliente entre set. 2026 e out. 2026 com Next.js, React e TypeScript. Site publicado, aguardando a inserção do conteúdo final pela cliente.",
    longDescription:
      "Projeto desenvolvido para cliente entre set. 2026 e out. 2026: desenvolvimento e publicação de portfólio profissional com Next.js, React e TypeScript, com foco em responsividade, organização da aplicação e manutenção do código. O processo envolveu planejamento, análise técnica, implementação de funcionalidades, auditoria de código, depuração e validação de soluções, com apoio de ferramentas de IA como Codex, OpenCode e MCP. Status: aplicação publicada em https://taissales.vercel.app/, aguardando a inserção do conteúdo final pela cliente.",
    problem:
      "Criar um portfólio profissional publicado, responsivo e de fácil manutenção, permitindo que a cliente insira o conteúdo final após a entrega técnica.",
    solution:
      "Construção de aplicação com Next.js App Router, React e TypeScript, utilizando componentes reutilizáveis e organização modular. O fluxo de trabalho incluiu planejamento, análise técnica, implementação, auditoria de código com apoio de Codex, OpenCode e MCP, depuração e validação, sem declarar como concluídos CMS, autenticação ou armazenamento que não estejam implementados.",
    highlights: [
      "Projeto para cliente · set. 2026 – out. 2026",
      "Next.js App Router com React e TypeScript",
      "Responsividade e organização da aplicação",
      "Planejamento e análise técnica",
      "Implementação de funcionalidades",
      "Auditoria de código com apoio de Codex, OpenCode e MCP",
      "Depuração e validação de soluções",
      "Site publicado, aguardando conteúdo final pela cliente",
      "Deploy contínuo com Vercel",
    ],
    image: "/projects/tais/sobre.png",
    gallery: [
      {
        src: "/projects/tais/login.png",
        alt: "Página de login do dashboard",
        caption: "Página de login do dashboard",
      },
      {
        src: "/projects/tais/dashboard-editar-pagina.png",
        alt: "Dashboard > Paginas > Editar página",
        caption: "Edição de página no dashboard",
      },
      {
        src: "/projects/tais/dashboard-paginas.png",
        alt: "Dashboard > Paginas do portfólio profissional da Taís",
        caption: "Lista de páginas no dashboard",
      },
      {
        src: "/projects/tais/dashboard-novo-projeto.png",
        alt: "Dashboard > Projetos > Novo projeto",
        caption: "Dashboard > Projetos > Novo projeto",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Codex",
      "OpenCode",
      "MCP",
      "Vercel",
    ],
    github: "https://github.com/marllonpanisset/portfolio-tais",
    demo: "https://taissales.vercel.app/",
  },

  {
    slug: "portfolio-pessoal",
    name: "Portfólio Pessoal e MarllonCode",
    category: "Projeto Autoral",
    description:
      "Aplicação autoral em evolução que centraliza trajetória profissional, projetos, blog em MDX e materiais autorais, incluindo o e-book Programação na Era da IA, com APIs REST, Supabase e testes automatizados.",
    longDescription:
      "Meu portfólio pessoal foi desenvolvido com Next.js, React e TypeScript para centralizar trajetória, projetos técnicos e produção de conteúdo em uma única aplicação vinculada ao MarllonCode. Reúne experiências, projetos, blog em MDX, páginas dinâmicas, artigos, materiais autorais e área dedicada à publicação e distribuição de e-books, incluindo o 'Programação na Era da IA'. A aplicação incorpora funcionalidades com APIs e persistência de dados via Supabase, além de SEO técnico, testes automatizados, acessibilidade, responsividade e deploy contínuo. Código: https://github.com/marllonpanisset/personal-portfolio. Site: https://marllon.netlify.app.",
    problem:
      "Centralizar presença profissional e produção técnica em plataforma própria, sem depender de serviços externos para apresentar projetos, publicar artigos e distribuir materiais autorais.",
    solution:
      "Construção de aplicação modular com Next.js App Router, React e TypeScript, utilizando componentes reutilizáveis, conteúdo em MDX, rotas dinâmicas, APIs e integração com Supabase. A arquitetura separa dados, conteúdo e apresentação, permitindo evoluir de portfólio tradicional para plataforma pessoal de conteúdo e experimentação técnica.",
    highlights: [
      "Projeto autoral em evolução",
      "Next.js App Router",
      "Arquitetura modular e componentizada",
      "Separação entre dados, conteúdo e apresentação",
      "Páginas individuais para projetos",
      "Blog integrado utilizando MDX",
      "Rotas dinâmicas para artigos e conteúdos",
      "Página dedicada ao e-book Programação na Era da IA",
      "Infraestrutura de conteúdo para o MarllonCode",
      "Integração com Supabase",
      "Persistência de dados",
      "Integração com REST API",
      "SEO técnico utilizando Metadata API",
      "Design responsivo",
      "Acessibilidade",
      "Animações e microinterações com Framer Motion",
      "Testes automatizados com Vitest",
      "Testes de componentes com React Testing Library",
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
    slug: "pousada-profissional",
    name: "Pousada Profissional",
    category: "Projeto Autoral",
    description:
      "Website autoral de jul. 2026 para pousadas e pequenos meios de hospedagem, com foco em experiência do usuário, responsividade, apresentação de acomodações e serviços, SEO e facilitação do contato.",
    longDescription:
      "Projeto autoral de jul. 2026 criado para simular a presença digital de um meio de hospedagem, priorizando experiência do usuário, responsividade, apresentação de acomodações e serviços, SEO e facilitação do contato. Explora estrutura de páginas, rotas dinâmicas, componentização e organização de conteúdo com boas práticas de desenvolvimento Front-End.",
    problem:
      "Criar uma experiência digital capaz de apresentar serviços e informações de hospedagem de forma clara, responsiva e preparada para crescimento.",
    solution:
      "Construção de aplicação utilizando Next.js com componentes reutilizáveis, rotas dinâmicas e foco em desempenho, SEO e experiência do usuário.",
    highlights: [
      "Projeto autoral · jul. 2026",
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
    category: "Estudo Complementar",
    description:
      "Projeto complementar de ago. 2025 para análise e visualização interativa de dados utilizando Python, mantido em posição secundária em relação aos projetos de Front-End.",
    longDescription:
      "Projeto complementar de ago. 2025 desenvolvido durante estudos em análise de dados, com o objetivo de transformar uma base de informações em aplicação interativa. O dashboard utiliza Python, Pandas e Streamlit para tratamento de dados, filtros dinâmicos e visualizações gráficas.",
    problem:
      "Facilitar a exploração e interpretação de dados por meio de uma interface simples e interativa.",
    solution:
      "Desenvolvimento de dashboard utilizando Python para tratamento de dados, filtros dinâmicos e visualizações gráficas.",
    highlights: [
      "Projeto complementar · ago. 2025",
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
