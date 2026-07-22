// Timeline profissional — ajuste períodos, cargos e descrições conforme
// necessário. A ordem abaixo é da mais recente para a mais antiga.

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
    company: "Grupo Binaria",
    role: "Desenvolvedor Front-End",
    period: "Jun 2022 — Dez 2022",
    location: "Rio de Janeiro, RJ",
    description:
      "Atuação na sustentação e manutenção de páginas web em ambiente de produção utilizando arquitetura estática com Hugo, realizando diagnóstico de falhas, correções e suporte às demandas relacionadas à publicação e estabilidade das aplicações.",
    highlights: [
      "Sustentação de aplicações web em ambiente produtivo",
      "Diagnóstico e correção de falhas visando continuidade operacional",
      "Controle de versões utilizando Git",
      "Gerenciamento e organização de conteúdos em CMS privado",
    ],
  },
  {
    company: "ED3 Digital",
    role: "Desenvolvedor Front-End (VTEX)",
    period: "Ago 2020 — Abr 2022",
    location: "Rio de Janeiro, RJ",
    description:
      "Atuação na sustentação técnica de e-commerces em produção utilizando plataforma VTEX IO e Legacy, realizando troubleshooting, análise de incidentes e manutenção evolutiva das aplicações.",
    highlights: [
      "Sustentação de mais de 10 e-commerces em ambiente produtivo",
      "Troubleshooting de funcionalidades, integrações e comportamento da aplicação",
      "Diagnóstico de falhas funcionais e análise de causa",
      "Desenvolvimento e manutenção de componentes Front-End utilizando Git",
      "Atuação integrada com equipes técnicas e áreas de negócio",
    ],
  },
  {
    company: "AM4",
    role: "Desenvolvedor Front-End",
    period: "Jun 2019 — Mar 2020",
    location: "Rio de Janeiro, RJ",
    description:
      "Atuação no desenvolvimento e sustentação de sistema de biblioteca virtual em produção, realizando correções, manutenção evolutiva e implementação de novas funcionalidades.",
    highlights: [
      "Troubleshooting e correção de bugs em aplicações web",
      "Manutenção contínua de sistema em ambiente produtivo",
      "Implementação de funcionalidades com integração a banco de dados",
      "Análise de problemas funcionais e apoio na estabilidade da plataforma",
    ],
  },
  {
    company: "Sirius Interativa",
    role: "Desenvolvedor Front-End",
    period: "Jun 2016 — Mai 2019",
    location: "Rio de Janeiro, RJ",
    description:
      "Atuação no desenvolvimento, sustentação e evolução de sites, sistemas e plataformas digitais para diferentes clientes, participando desde a implementação até a manutenção de aplicações em produção.",
    highlights: [
      "Desenvolvimento e manutenção de sites, intranets e plataformas web",
      "Diagnóstico e resolução de incidentes utilizando React, WordPress e Drupal",
      "Correção de bugs e implementação de melhorias evolutivas",
      "Versionamento utilizando Git e atuação em equipes multidisciplinares",
      "Participação no projeto 'Tô de Love no Trem', plataforma digital de alta escala",
    ],
  },
  {
    company: "Hospital Riomar Barra",
    role: "Técnico de Suporte de Informática N1/N2",
    period: "Ago 2011 — Jan 2016",
    location: "Rio de Janeiro, RJ",
    description:
      "Atuação em suporte técnico N1/N2 em ambiente hospitalar de alta criticidade, realizando atendimento aos usuários, manutenção de equipamentos, configuração de sistemas e suporte à infraestrutura local.",
    highlights: [
      "Instalação, configuração e manutenção de computadores, impressoras e sistemas Windows/Linux",
      "Diagnóstico e resolução de incidentes de hardware, software e conectividade",
      "Administração e troubleshooting de redes locais cabeadas e Wi-Fi",
      "Criação de usuários, permissões e compartilhamentos de rede",
      "Atendimento direto aos usuários garantindo continuidade operacional",
    ],
  },
];
