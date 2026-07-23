# Marllon Panisset — Portfólio Profissional

Portfólio profissional de Marllon Panisset, profissional de tecnologia
com experiência em desenvolvimento web, suporte técnico, infraestrutura
e sustentação de aplicações em produção.

O projeto reúne minha trajetória profissional, competências técnicas,
projetos pessoais e estudos contínuos em tecnologia.

O projeto foi desenvolvido com foco em performance, acessibilidade,
organização de código e uma experiência de navegação simples e objetiva.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion — animações e transições
- Lucide React — ícones
- MDX — artigos do blog
- Vitest + React Testing Library — testes automatizados

## Funcionalidades

- Landing page profissional
- Blog com artigos em MDX
- SEO técnico utilizando Metadata API do Next.js
- Listagem de projetos
- Navegação responsiva
- Componentes reutilizáveis
- Testes automatizados
- Deploy contínuo

## Arquitetura do projeto

O projeto utiliza uma arquitetura baseada em componentes React,
separação de responsabilidades e organização modular.

Principais conceitos aplicados:

- Componentes reutilizáveis
- Separação entre dados e apresentação
- Organização por domínio
- Tipagem com TypeScript
- Conteúdo gerenciado separadamente da interface
- SEO utilizando Metadata API do Next.js
- Testes automatizados com Vitest e React Testing Library

A estrutura foi pensada para facilitar manutenção, evolução e
escalabilidade do projeto ao longo do tempo.

## Testes

O projeto possui testes automatizados para garantir estabilidade dos
componentes e páginas principais.

Ferramentas utilizadas:

- Vitest
- React Testing Library
- Coverage V8

Os testes cobrem componentes, páginas, dados e funções auxiliares.

## Editando o conteúdo

Todo o conteúdo textual fica isolado em `data/`, então **não é necessário
mexer nos componentes para atualizar informações**:

| Arquivo              | O que editar                                                                                              |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| `data/profile.ts`    | Nome, cargo, descrição, links (LinkedIn, GitHub, e-mail, WhatsApp) e caminho do currículo em PDF          |
| `data/experience.ts` | Empresas, cargos, períodos e descrições da timeline                                                       |
| `data/skills.ts`     | Grupos e tags de competências                                                                             |
| `data/projects.ts`   | Projetos exibidos na seção "Projetos" (a seção mostra um estado vazio até o primeiro item ser adicionado) |

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Deploy

O projeto possui deploy automatizado integrado ao repositório Git,
permitindo publicação contínua a cada atualização validada.

## Objetivo

Este projeto foi criado para centralizar minha presença profissional,
documentar minha evolução em tecnologia e apresentar projetos,
experiências e aprendizados durante minha trajetória profissional.

## Autor

Marllon Panisset

GitHub: https://github.com/marllonpanisset
LinkedIn: https://linkedin.com/in/marllonpanisset
Portfólio: https://marllon.netlify.app
