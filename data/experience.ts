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
      "Desenvolvimento e manutenção do site institucional utilizando Hugo, HTML, CSS, JavaScript e Markdown, realizando evolução contínua da plataforma e publicação de conteúdos em ambiente de produção.",
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
    role: "Desenvolvedor Front-End",
    period: "Jun 2019 — Mar 2020",
    location: "Remoto",
    description:
      "Desenvolvimento e manutenção da plataforma digital de leitura da Pearson, implementando novas funcionalidades e realizando evolução contínua da interface da aplicação.",
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
    period: "Jun 2016 — Mai 2019",
    location: "Rio de Janeiro, RJ",
    description:
      "Ingressou como estagiário e foi efetivado como Desenvolvedor Front-End, participando do desenvolvimento de sites institucionais, intranets e plataformas digitais para diferentes clientes.",
    highlights: [
      "Desenvolvimento de interfaces utilizando React, HTML, CSS, JavaScript, WordPress e Drupal.",
      "Integração do Front-End com aplicações desenvolvidas pela equipe Back-End.",
      "Criação de componentes reutilizáveis utilizando Pug e SCSS.",
      "Participação no desenvolvimento da plataforma 'Tô de Love no Trem', premiada nacionalmente pelo Prêmio Aberje.",
      "Manutenção evolutiva, homologação e correção de bugs em aplicações web.",
    ],
  },

  {
    company: "Hospital Riomar Barra",
    role: "Técnico de Informática",
    period: "Ago 2011 — Mai 2016",
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
