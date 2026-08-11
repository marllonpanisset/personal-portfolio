# Marllon Panisset — Portfólio Profissional

Portfólio profissional desenvolvido para apresentar minha trajetória como Desenvolvedor Front-End, reunindo experiências profissionais, projetos autorais e artigos técnicos em uma aplicação construída com React, Next.js e TypeScript.

Além de apresentar minha experiência, este projeto funciona como um laboratório para aplicar boas práticas de arquitetura Front-End, componentização, SEO, acessibilidade, performance e testes automatizados.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion — animações e microinterações
- Lucide React — ícones
- MDX — gerenciamento do blog
- Vitest + React Testing Library — testes automatizados

## Funcionalidades

- Landing page profissional
- Timeline de experiências
- Listagem de projetos com páginas individuais
- Blog integrado utilizando MDX
- SEO técnico utilizando Metadata API do Next.js
- Navegação responsiva
- Componentes reutilizáveis
- Testes automatizados

## Arquitetura do projeto

O projeto utiliza uma arquitetura baseada em componentes React, separação de responsabilidades e organização modular para facilitar manutenção, evolução e reutilização de código.

Principais conceitos aplicados:

- Componentização
- Separação entre dados e apresentação
- Organização por domínio
- Tipagem estática com TypeScript
- Conteúdo desacoplado da interface
- Rotas dinâmicas
- SEO utilizando Metadata API do Next.js
- Testes automatizados com Vitest e React Testing Library

A estrutura foi planejada para permitir evolução contínua sem concentrar informações diretamente nos componentes visuais.

## Testes

O projeto possui testes automatizados para garantir estabilidade dos componentes, páginas e funções auxiliares.

Ferramentas utilizadas:

- Vitest
- React Testing Library
- Coverage V8

Os testes abrangem componentes, páginas, dados e funções utilitárias utilizadas pela aplicação.

## Editando o conteúdo

Todo o conteúdo textual fica isolado na pasta `data/`, permitindo atualizar informações sem alterar os componentes da interface.

| Arquivo              | Descrição                                         |
| -------------------- | ------------------------------------------------- |
| `data/profile.ts`    | Informações pessoais, descrição, contatos e links |
| `data/experience.ts` | Experiências profissionais                        |
| `data/skills.ts`     | Competências técnicas                             |
| `data/projects.ts`   | Projetos apresentados no portfólio                |

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse:

```
http://localhost:3000
```

## Build de produção

```bash
npm run build
npm start
```

## Objetivo

Este projeto foi criado para centralizar minha presença profissional e demonstrar minha forma de desenvolver aplicações Front-End, aplicando organização de código, componentização, acessibilidade, SEO, performance e testes automatizados.

O projeto evolui continuamente conforme avanço nos estudos de Engenharia de Software e incorporo novas tecnologias e boas práticas de desenvolvimento.

## Autor

**Marllon Panisset**

GitHub  
https://github.com/marllonpanisset

LinkedIn  
https://linkedin.com/in/marllon-panisset

Portfólio  
https://marllon.netlify.app
