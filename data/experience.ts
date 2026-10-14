// Timeline profissional — ordem da mais recente para a mais antiga.
// Experiências profissionais separadas de projetos autorais.
// Projetos autorais (Conjuga, portfólios, estudos) estão em `data/projects.ts`.

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Conjuga",
    role: "Fundador e Desenvolvedor",
    period: "Ago 2026 — Atual",
    location: "Rio de Janeiro, RJ",
    description:
      "Criação e desenvolvimento de uma iniciativa de engenharia de software voltada a soluções digitais para empresas, com foco em aplicações web, sistemas personalizados, integrações e automações. Responsável pela arquitetura técnica, implementação e evolução dos projetos, utilizando ferramentas de IA como apoio ao processo de desenvolvimento.",
    highlights: [
      "Desenvolvimento de aplicações web com Next.js, React e TypeScript.",
      "Implementação de APIs e integrações com serviços externos.",
      "Estruturação de arquitetura modular e componentes reutilizáveis.",
      "Integração com Supabase e PostgreSQL para persistência de dados.",
      "Utilização de ferramentas e agentes de IA para apoiar implementação, testes e manutenção de software.",
    ],
  },
  {
    company: "Grupo Binaria",
    role: "Desenvolvedor Front-End",
    period: "Jun 2022 — Dez 2022",
    location: "Rio de Janeiro, RJ",
    description:
      "Desenvolvimento e manutenção do site institucional da Binaria Arte Contemporânea utilizando Hugo, HTML, CSS, JavaScript e Markdown, realizando evolução contínua da plataforma e publicação de conteúdos em ambiente de produção.",
    highlights: [
      "Desenvolvimento e manutenção do site institucional utilizando Hugo.",
      "Criação e publicação de páginas de artistas, exposições e conteúdos institucionais.",
      "Manutenção de templates e layouts da plataforma.",
      "Versionamento de código utilizando Git.",
      "Publicação e gerenciamento de conteúdos em ambiente produtivo.",
    ],
  },

  {
    company: "ED3 Digital",
    role: "Desenvolvedor Front-End",
    period: "Ago 2020 — Abr 2022",
    location: "Rio de Janeiro, RJ",
    description:
      "Desenvolvimento, customização e manutenção de lojas virtuais utilizando VTEX Legacy e VTEX IO para diferentes clientes, participando da evolução contínua de aplicações de e-commerce em produção.",
    highlights: [
      "Desenvolvimento de componentes, vitrines e landing pages.",
      "Customização de checkout e funcionalidades da plataforma VTEX.",
      "Implementação de interfaces responsivas utilizando HTML, CSS, SCSS, JavaScript e jQuery.",
      "Manutenção evolutiva e correção de problemas em aplicações de e-commerce.",
      "Atuação em ambiente de produção com diferentes clientes e segmentos.",
    ],
  },

  {
    company: "AM4",
    role: "Desenvolvedor Front-End (contrato)",
    period: "Jun 2019 — Mar 2020",
    location: "Remoto",
    description:
      "Desenvolvimento e manutenção da plataforma digital de leitura da Pearson por contrato, implementando novas funcionalidades e realizando evolução contínua da interface da aplicação.",
    highlights: [
      "Desenvolvimento de funcionalidades para biblioteca digital.",
      "Implementação da funcionalidade de marcação (highlight) em livros PDF e EPUB.",
      "Manipulação do DOM e tratamento da seleção de texto.",
      "Integração com o fluxo de persistência da plataforma.",
      "Evolução contínua da interface utilizando HTML, CSS, JavaScript e jQuery.",
    ],
  },

  {
    company: "Sirius Interativa",
    role: "Desenvolvedor Front-End",
    period: "Jan 2018 — Mai 2019",
    location: "Rio de Janeiro, RJ",
    description:
      "Atuação como Desenvolvedor Front-End no desenvolvimento de sites institucionais, intranets e plataformas digitais para diferentes clientes, após período de estágio na mesma empresa.",
    highlights: [
      "Desenvolvimento de interfaces utilizando React, HTML, CSS, JavaScript, WordPress e Drupal.",
      "Integração do Front-End com aplicações desenvolvidas pela equipe Back-End.",
      "Criação de componentes reutilizáveis utilizando Pug e SCSS.",
      "Participação no desenvolvimento da plataforma 'Tô de Love no Trem', reconhecida no Prêmio Aberje 2018 — Mídia Digital Nacional.",
      "Manutenção evolutiva, homologação e correção de bugs em aplicações web.",
    ],
  },

  {
    company: "Sirius Interativa",
    role: "Estagiário de Desenvolvimento Front-End",
    period: "Jun 2016 — Dez 2017",
    location: "Rio de Janeiro, RJ",
    description:
      "Estágio em desenvolvimento Front-End com implementação e manutenção de interfaces web, apoio à padronização de componentes e manutenção de sites.",
    highlights: [
      "Implementação e manutenção de interfaces web com HTML, CSS e JavaScript.",
      "Apoio à padronização de componentes.",
      "Manutenção de sites institucionais.",
      "Versionamento de código com Git durante o estágio.",
    ],
  },

  {
    company: "Hospital de Clínicas Rio Mar Barra",
    role: "Suporte de TI N1/N2",
    period: "Ago 2011 — Jan 2016",
    location: "Rio de Janeiro, RJ",
    description:
      "Atuação em suporte técnico N1/N2 em ambiente hospitalar, realizando manutenção de computadores, instalação de sistemas e atendimento aos usuários para garantir a continuidade operacional dos serviços de TI.",
    highlights: [
      "Suporte técnico a usuários em ambiente hospitalar.",
      "Diagnóstico e resolução de incidentes de hardware e software.",
      "Instalação e configuração de sistemas Windows.",
      "Administração de usuários, permissões e recursos de rede.",
      "Manutenção preventiva e corretiva de equipamentos.",
    ],
  },
];
