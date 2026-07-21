// Edite estes dados para atualizar as informações pessoais exibidas no Hero
// e nos links de contato do site.

export const profile = {
  name: "Marllon Panisset",
  role: "Analista de Suporte Técnico",
  roleSecondary: "Application Support",
  tagline:
    "Profissional de TI com 11 anos de experiência em suporte técnico, infraestrutura e sustentação de aplicações web em produção.",
  location: "Rio de Janeiro, Brasil",
  yearsOfExperience: 11,
  status: "open_to_work",
  links: {
    linkedin: "https://www.linkedin.com/in/marllon-panisset", // ajuste para a URL real
    github: "https://github.com/marllonpanisset", // ajuste para a URL real
    resume: "/marllon-panisset-curriculo.pdf", // substitua pelo PDF real em /public
    email: "mailto:marllon.web@gmail.com", // ajuste para o e-mail real
    whatsapp: "https://wa.me/5521987881633", // ajuste para o número real
  },
} as const;

export const about = {
  paragraphs: [
    "Iniciei minha trajetória em TI atuando no suporte técnico N1/N2 em ambiente hospitalar, onde aprendi que sistemas críticos não têm margem para instabilidade — cada chamado tinha um paciente, um médico ou uma equipe esperando do outro lado.",
    "Essa base me levou a aprofundar conhecimentos em infraestrutura, redes TCP/IP e sistemas operacionais Windows e Linux, atuando diretamente na manutenção da disponibilidade de ambientes de produção.",
    "Com o tempo, migrei esse mesmo rigor operacional para a sustentação de aplicações web, atuando em troubleshooting de sistemas em produção, consumo e depuração de APIs REST, análise via DevTools e versionamento com Git.",
    "Tenho também vivência anterior como Desenvolvedor Front-End, o que me dá uma leitura mais completa do ciclo de vida de uma aplicação — do código à operação — e facilita a comunicação entre times de suporte, desenvolvimento e negócio.",
  ],
  focusAreas: [
    "Suporte técnico N1/N2 em ambientes críticos",
    "Infraestrutura, redes e sistemas operacionais",
    "Sustentação de aplicações web em produção",
    "Troubleshooting e análise de causa raiz",
  ],
} as const;
