# Marllon Panisset — Portfólio Pessoal

Portfólio de Marllon Panisset, Desenvolvedor Front-End com React, JavaScript e VTEX, reunindo experiências profissionais, projetos autorais e para clientes, blog e materiais autorais em uma aplicação com React, Next.js e TypeScript.

Este projeto demonstra componentização, organização de código, SEO, acessibilidade, performance e testes automatizados, com captura de leads de livros via `POST /api/livros/leads` + Supabase (RPC `upsert_book_lead`) nos fluxos gratuitos. A seção de contato utiliza links externos (e-mail, LinkedIn, GitHub e WhatsApp), sem formulário próprio.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion — animações e microinterações
- Lucide React — ícones
- MDX (`next-mdx-remote/rsc` + `gray-matter`) — blog em `content/blog/` (render via `MDXRemote` em `app/blog/[slug]/page.tsx`, frontmatter em `lib/blog.ts`)
- `reading-time` — tempo de leitura dos artigos
- `@tailwindcss/typography` — estilos do conteúdo MDX
- Supabase (`@supabase/supabase-js`) + PostgreSQL — captura de leads de livros gratuitos via RPC `upsert_book_lead`
- Vitest + React Testing Library — testes automatizados

> Observação: `@next/mdx` (`16.x`) está declarado em `package.json`, mas não foi encontrado em uso no código atual nem configurado via `withMDX` em `next.config.js`. Não remover nem atualizar dependências sem avaliar impacto em MDX/blog e build.

## Funcionalidades

- Landing page com Hero, Sobre, Experiência, Competências, Projetos e Contato (links externos, sem formulário)
- Timeline de experiências profissionais separada de projetos autorais
- Listagem de projetos com páginas individuais (`/projetos/[slug]`)
- Blog em MDX com paginação, categorias e tags (`/blog`, `/blog/[slug]`)
- Livros e e-book com captura de leads exclusiva para títulos gratuitos (`type: "free"`): `/livros`, `/livros/[slug]`, `POST /api/livros/leads` (RPC `upsert_book_lead`). Livros pagos exibem ação de checkout ainda não implementada (`TODO` em `components/books/BookAcquisition.tsx`)
- Contato via links externos de e-mail, LinkedIn, GitHub e WhatsApp (`components/sections/Contact.tsx`), sem formulário próprio ou backend
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

Necessárias apenas para a captura de leads (`POST /api/livros/leads`):

```bash
SUPABASE_URL=
SUPABASE_SECRET_KEY=
```

- Use `.env.local` para desenvolvimento. Nunca commite `.env`.
- `.env.example` lista apenas nomes, sem valores.
- Fluxo auditado: `app/api/livros/leads/route.ts` → `lib/books/submit-book-lead.ts` → `lib/books/book-lead-repository.ts` → `supabase.rpc("upsert_book_lead", ...)`. A configuração de servidor é lida em `lib/supabase/server.ts`.
- Sem essas variáveis, a API retorna `503` com mensagem amigável; falhas da RPC resultam em `500` (ver `app/api/livros/leads/route.ts`).
- O projeto Supabase remoto precisa das três migrations em `supabase/migrations/` (criação de `book_leads`, grant de `insert` e evolução UTM + função `upsert_book_lead`). As migrations concedem permissões apenas a `service_role`, sem policies para `anon`/`authenticated`. Não há confirmação de que o ambiente remoto já foi configurado.

## Rodando localmente

Pré-requisito: Node.js (verifique com `node -v`).

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

O site executa sem a configuração opcional do Supabase, mas o envio de leads (`POST /api/livros/leads`) retornará `503`.

## Validação

```bash
npm run lint
npm run typecheck
npm run test:run
npm run coverage
npm run build
npm start
```

Observação: `next` está em `14.2.35` e `@next/mdx` em `16.x` (declarado, mas sem uso encontrado no código atual — ver Stack). Não faça upgrade amplo apenas para eliminar avisos sem avaliar impacto em MDX/blog e build.

## Deploy

- URL canônica configurada no código (`lib/site-metadata.ts`): `https://marllon.netlify.app`.
- `sitemap.xml` e `robots.txt` são gerados pelo App Router.
- Nenhuma configuração de deploy contínuo foi encontrada no repositório (sem `netlify.toml` ou workflows); o estado atual do deploy e a automação a partir da `main` precisam de confirmação externa. Este README não afirma que o site está online.

## Testes

- Vitest + jsdom + Testing Library
- Cobertura V8 via `npm run coverage`
- Abrangem dados, componentes, páginas, blog, livros e metadados
- A auditoria não encontrou testes dedicados para `POST /api/livros/leads`, `sitemap.ts` e `robots.ts`

## Autor

**Marllon Panisset — Desenvolvedor Front-End | React • JavaScript • VTEX**

- GitHub: https://github.com/marllonpanisset
- LinkedIn: https://www.linkedin.com/in/marllon-panisset
- Portfólio: https://marllon.netlify.app
- Currículo: `/cv.pdf`
