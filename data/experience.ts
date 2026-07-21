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
      "Atuação na sustentação de páginas web em ambiente de produção, realizando manutenção, correções de incidentes e publicação de atualizações.",
    highlights: [
      "Diagnóstico e correção de problemas em aplicações web",
      "Manutenção de conteúdos e páginas em produção",
      "Versionamento e controle de código utilizando Git",
    ],
  },
  {
    company: "ED3 Digital",
    role: "Desenvolvedor Front-End",
    period: "Ago 2020 — Abr 2022",
    location: "Rio de Janeiro, RJ",
    description:
      "Sustentação de e-commerces em produção na plataforma VTEX, atuando na investigação de incidentes e manutenção evolutiva.",
    highlights: [
      "Troubleshooting utilizando DevTools",
      "Análise de integrações e comportamento das aplicações",
      "Correções evolutivas em ambientes produtivos",
    ],
  },
  {
    company: "AM4",
    role: "Desenvolvedor Front-End",
    period: "Jun 2019 — Mar 2020",
    location: "Rio de Janeiro, RJ",
    description:
      "Desenvolvimento e sustentação de aplicações web, atuando na correção de bugs e evolução de funcionalidades.",
    highlights: [
      "Manutenção de sistemas web em produção",
      "Investigação de problemas funcionais",
      "Versionamento utilizando Git",
    ],
  },
  {
    company: "Sirius Interativa",
    role: "Desenvolvedor Front-End",
    period: "Jun 2016 — Mai 2019",
    location: "Rio de Janeiro, RJ",
    description:
      "Desenvolvimento, manutenção e sustentação de sites institucionais, intranets e plataformas web.",
    highlights: [
      "Desenvolvimento com React, WordPress e Drupal",
      "Melhorias de usabilidade, responsividade e desempenho",
      "Participação em projetos digitais de grande acesso",
    ],
  },
  {
    company: "Hospital Riomar Barra",
    role: "Técnico de Informática N1/N2",
    period: "Ago 2011 — Mai 2016",
    location: "Rio de Janeiro, RJ",
    description:
      "Suporte técnico em ambiente hospitalar crítico, atendendo usuários administrativos e assistenciais.",
    highlights: [
      "Manutenção de hardware, sistemas operacionais e softwares corporativos",
      "Suporte a redes locais e resolução de incidentes",
      "Gestão de chamados com foco em continuidade operacional",
    ],
  },
];
