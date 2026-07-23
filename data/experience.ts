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
      "Atuação no desenvolvimento e manutenção de páginas web em ambiente de produção utilizando arquitetura estática com Hugo, realizando implementação de melhorias, correções de problemas e suporte às demandas relacionadas à publicação das aplicações.",
    highlights: [
      "Desenvolvimento e manutenção de aplicações web em ambiente produtivo",
      "Implementação de melhorias e correções visando qualidade e estabilidade das aplicações",
      "Diagnóstico de problemas durante publicação e atualização de conteúdos",
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
      "Atuação no desenvolvimento e evolução de e-commerces utilizando plataforma VTEX IO e Legacy, participando da manutenção de componentes Front-End, correções, melhorias evolutivas e análise de problemas em ambiente produtivo.",
    highlights: [
      "Desenvolvimento e manutenção de mais de 10 e-commerces em ambiente produtivo",
      "Criação e manutenção de componentes Front-End utilizando tecnologias web",
      "Troubleshooting de funcionalidades, integrações e comportamento das aplicações",
      "Diagnóstico de falhas funcionais e análise de causa",
      "Atuação integrada com equipes técnicas e áreas de negócio",
    ],
  },
  {
    company: "AM4",
    role: "Desenvolvedor Front-End",
    period: "Jun 2019 — Mar 2020",
    location: "Rio de Janeiro, RJ",
    description:
      "Atuação no desenvolvimento e evolução de aplicação web de biblioteca virtual em produção, realizando implementação de funcionalidades, manutenção evolutiva e correção de problemas encontrados pelos usuários.",
    highlights: [
      "Desenvolvimento e evolução de aplicação web em ambiente produtivo",
      "Implementação de novas funcionalidades e melhorias contínuas",
      "Troubleshooting e correção de bugs em aplicações web",
      "Integração com banco de dados e validação de funcionalidades",
      "Análise de problemas e apoio na estabilidade da plataforma",
    ],
  },
  {
    company: "Sirius Interativa",
    role: "Desenvolvedor Front-End",
    period: "Jun 2016 — Mai 2019",
    location: "Rio de Janeiro, RJ",
    description:
      "Atuação no desenvolvimento, manutenção e evolução de sites, sistemas e plataformas digitais para diferentes clientes, participando da implementação de novas funcionalidades, correções e melhorias em aplicações web.",
    highlights: [
      "Desenvolvimento e manutenção de sites, intranets e plataformas web",
      "Implementação de interfaces utilizando React, WordPress e Drupal",
      "Diagnóstico e resolução de problemas em aplicações digitais",
      "Correção de bugs e desenvolvimento de melhorias evolutivas",
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
      "Atuação em suporte técnico N1/N2 em ambiente hospitalar de alta criticidade, realizando atendimento aos usuários, manutenção de equipamentos, configuração de sistemas e suporte à infraestrutura local, garantindo continuidade operacional dos serviços de TI.",
    highlights: [
      "Instalação, configuração e manutenção de computadores, impressoras e sistemas Windows/Linux",
      "Diagnóstico e resolução de incidentes de hardware, software e conectividade",
      "Administração e troubleshooting de redes locais cabeadas e Wi-Fi",
      "Criação de usuários, permissões e compartilhamentos de rede",
      "Atendimento direto aos usuários e suporte a ambientes críticos",
    ],
  },
];
