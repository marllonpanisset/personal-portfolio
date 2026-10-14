# Marllon Panisset — Portfólio Pessoal

Portfólio de Marllon Panisset, Desenvolvedor Front-End com React, JavaScript e VTEX, reunindo experiências profissionais, projetos autorais e para clientes, blog e materiais autorais em uma aplicação com React, Next.js e TypeScript.

Este projeto demonstra componentização, organização de código, SEO, acessibilidade, performance e testes automatizados, com integrações Full Stack via APIs e Supabase nos contextos em que são utilizadas.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion — animações e microinterações
- Lucide React — ícones
- MDX (`next-mdx-remote`) + `gray-matter` — blog em `content/blog/`
- Supabase (`@supabase/supabase-js`) + PostgreSQL — captura de leads de livros
- Vitest + React Testing Library — testes automatizados

## Funcionalidades

- Landing page com Hero, Sobre, Experiência, Competências, Projetos e Contato
- Timeline de experiências profissionais separada de projetos autorais
- Listagem de projetos com páginas individuais (`/projetos/[slug]`)
- Blog em MDX com paginação, categorias e tags (`/blog`, `/blog/[slug]`)
- Livros e e-book com captura de leads (`/livros`, `/livros/[slug]`, `POST /api/livros/leads`)
- SEO com Metadata API, canonical, Open Graph, `sitemap.ts` e `robots.ts`
- Navegação responsiva com menu mobile acessível e skip link
- Componentes reutilizáveis e tokens próprios (`base/ink/signal`)
- Testes automatizados

## Arquitetura do projeto

```text
app/            Rotas, layout, `sitemap.ts`, `robots.ts`, API e estilos
components/     UI, navegação, seções, blog e livros
content/blog/   Artigos MDX (frontmatter com `excerpt`, não `description`)
data/           Conteúdo editável do site (perfil, experiência, projetos, skills, livros)
lib/            Blog, metadados, Supabase server-side e regras de leads
public/         Ativos, imagens, `cv.pdf`, e-book em `public/livros/`
supabase/       Migrations versionadas (`book_leads`)
tests/          Testes Vitest por domínio
types/          Tipos de blog e livros
```

Conceitos aplicados:

- Componentização e separação entre dados e apresentação
- Conteúdo desacoplado da interface
- Rotas dinâmicas e geração estática onde aplicável
- Tipagem estática com TypeScript
- SEO com Metadata API + sitemap/robots
- Testes com Vitest e React Testing Library

## Editando o conteúdo

| Arquivo              | Descrição                                         |
| -------------------- | ------------------------------------------------- |
| `data/profile.ts`    | Perfil, resumo, contatos e tempo em TI/Front-End  |
| `data/experience.ts` | Experiências profissionais (não inclui autorais)  |
| `data/skills.ts`     | Competências, com IA como fluxo, não como produto |
| `data/projects.ts`   | Projetos autorais e para clientes                 |
| `data/books.ts`      | Livros e e-books publicados                       |
| `content/blog/*.mdx` | Artigos (usar `excerpt`, `date`, `category`)      |

Experiências profissionais e projetos autorais são listas separadas. Não cadastre projeto autoral como emprego.

## Variáveis de ambiente

Necessárias para a captura de leads (`/api/livros/leads`):

```bash
SUPABASE_URL=
SUPABASE_SECRET_KEY=
```

- Use `.env.local` para desenvolvimento. Nunca commite `.env`.
- `.env.example` lista apenas nomes, sem valores.
- Sem essas variáveis, a API retorna `503` com mensagem amigável (ver `lib/supabase/server.ts`).

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validação

```bash
npm run lint
npm run typecheck
npm run test:run
npm run coverage
npm run build
npm start
```

Observação: `next` está em `14.2.35` e `@next/mdx` em `16.x`. Não faça upgrade amplo apenas para eliminar avisos sem avaliar impacto em MDX/blog e build.

## Deploy

Deploy contínuo no Netlify a partir da branch `main`:

- Site: `https://marllon.netlify.app`
- `sitemap.xml` e `robots.txt` são gerados pelo App Router.

## Testes

- Vitest + jsdom + Testing Library
- Cobertura V8 via `npm run coverage`
- Abrangem dados, componentes, páginas, blog, livros e metadados

## Autor

**Marllon Panisset — Desenvolvedor Front-End | React • JavaScript • VTEX**

- GitHub: https://github.com/marllonpanisset
- LinkedIn: https://www.linkedin.com/in/marllon-panisset
- Portfólio: https://marllon.netlify.app
- Currículo: `/cv.pdf`
