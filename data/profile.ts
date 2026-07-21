// Edite estes dados para atualizar as informações pessoais exibidas no Hero
// e nos links de contato do site.

export const profile = {
  name: "Marllon Panisset",
  role: "Analista de Suporte Técnico",
  roleSecondary: "Application Support | Cyber Security em formação",
  tagline:
    "Profissional de TI com 11 anos de experiência em suporte técnico, infraestrutura, sustentação de aplicações web e análise de ambientes em produção.",
  location: "Rio de Janeiro, Brasil",
  yearsOfExperience: 11,
  status: "open_to_work",
  links: {
    linkedin: "https://www.linkedin.com/in/marllon-panisset",
    github: "https://github.com/marllonpanisset",
    resume: "/marllon-panisset-curriculo.pdf",
    email: "mailto:marllon.web@gmail.com",
    whatsapp: "https://wa.me/5521987881633",
  },
} as const;

export const about = {
  paragraphs: [
    "Minha trajetória em TI começou no suporte técnico N1/N2 em ambiente hospitalar, atuando com sistemas essenciais para a operação diária. Essa experiência desenvolveu minha visão sobre a importância da disponibilidade, estabilidade e segurança dos ambientes tecnológicos.",

    "Ao longo dos anos, ampliei meus conhecimentos em infraestrutura, redes TCP/IP, sistemas operacionais Windows e Linux, além de atuar na identificação e resolução de incidentes técnicos em ambientes corporativos.",

    "Também desenvolvi experiência na sustentação de aplicações web em produção, realizando troubleshooting, análise de erros, investigação de causa raiz, validação de APIs REST, utilização de DevTools e comunicação com equipes de desenvolvimento.",

    "Minha experiência anterior como Desenvolvedor Front-End complementa minha atuação em suporte, permitindo compreender todo o ciclo de vida de uma aplicação — desde o desenvolvimento até sua operação, manutenção e evolução contínua. Atualmente, estou aprofundando meus conhecimentos em segurança da informação.",
  ],
  focusAreas: [
    "Suporte técnico N1/N2 e gerenciamento de incidentes",
    "Sustentação de aplicações web em produção",
    "Infraestrutura, redes e sistemas operacionais",
    "Troubleshooting e análise de causa raiz",
  ],
} as const;