# Marllon Panisset — Portfólio Profissional

Site pessoal de **Marllon Panisset**, Analista de Suporte Técnico e
Application Support, com 11 anos de experiência em suporte técnico,
infraestrutura e sustentação de aplicações web em produção.

Design minimalista e premium, inspirado em Vercel, Linear e Stripe —
fundo escuro, tipografia forte, muito espaço em branco e animações
discretas de entrada.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animações de entrada e transições
- [Lucide React](https://lucide.dev/) — ícones

## Estrutura do projeto

```
app/
  layout.tsx        # Layout raiz, fontes e metadata de SEO
  page.tsx           # Composição das seções da landing page
  globals.css         # Tailwind + estilos base

components/
  Nav.tsx             # Navegação fixa
  Hero.tsx            # Seção de abertura
  About.tsx           # Seção "Sobre"
  Experience.tsx       # Timeline profissional
  Skills.tsx           # Competências (tags)
  Projects.tsx          # Grade de projetos (com estado vazio)
  Contact.tsx           # Canais de contato
  Footer.tsx            # Rodapé
  ui/
    Container.tsx        # Wrapper de largura máxima e padding
    SectionLabel.tsx       # Eyebrow numerado usado em cada seção

data/
  profile.ts           # Nome, cargo, bio, links de contato
  experience.ts         # Itens da timeline profissional
  skills.ts              # Grupos de competências
  projects.ts              # Lista de projetos (vazia por padrão)

lib/
  animations.ts          # Variants reutilizáveis do Framer Motion

public/
  favicon.svg              # Favicon do site
```

## Editando o conteúdo

Todo o conteúdo textual fica isolado em `data/`, então **não é necessário
mexer nos componentes para atualizar informações**:

| Arquivo | O que editar |
|---|---|
| `data/profile.ts` | Nome, cargo, descrição, links (LinkedIn, GitHub, e-mail, WhatsApp) e caminho do currículo em PDF |
| `data/experience.ts` | Empresas, cargos, períodos e descrições da timeline |
| `data/skills.ts` | Grupos e tags de competências |
| `data/projects.ts` | Projetos exibidos na seção "Projetos" (a seção mostra um estado vazio até o primeiro item ser adicionado) |

### Adicionando o currículo em PDF

Coloque o arquivo em `public/` (por exemplo,
`public/marllon-panisset-curriculo.pdf`) e ajuste o campo
`links.resume` em `data/profile.ts` para apontar para esse caminho.

### Ajustando os períodos da timeline

Os períodos em `data/experience.ts` estão marcados com comentários
`// ajuste conforme período real` — atualize as datas exatas de cada
experiência (Hospital Riomar Barra, Sirius Interativa, AM4, ED3
Digital, Grupo Binaria) conforme os registros reais.

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

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Next.js automaticamente — nenhuma configuração
   adicional é necessária.
4. (Opcional) Configure um domínio próprio em **Settings → Domains**.

## Notas de design

- **Paleta:** fundo `#0B0E14` (slate quase preto), superfícies em
  `#12161F`, bordas hairline em `#20242F`, texto em `#E7EAF1`/`#8A93A6`
  e acento `#4FD1C5` — um teal que remete a "status operacional",
  coerente com o universo de monitoramento e suporte técnico.
- **Tipografia:** Space Grotesk (display), Inter (corpo de texto) e
  JetBrains Mono (rótulos, tags e metadados) — a fonte monoespaçada
  reforça o vocabulário técnico do perfil (logs, terminais, status).
- **Elemento de assinatura:** a faixa de status no Hero (`status:
  disponível para novas oportunidades`) e o indicador pulsante retomam,
  de forma discreta, a linguagem de monitoramento de sistemas que é o
  dia a dia do profissional — sem repetir o efeito em excesso pelo
  resto da página.
