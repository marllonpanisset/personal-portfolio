import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import BlogPage from "@/app/blog/page";

import type { BlogPost } from "@/types/blog";

const mockGetPosts = vi.hoisted(() => vi.fn());

vi.mock("@/lib/blog", () => ({
  getPosts: mockGetPosts,
}));

vi.mock("@/components/ui/Container", () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock("@/components/ui/SectionLabel", () => ({
  SectionLabel: ({ label }: { label: string }) => <span>{label}</span>,
}));

vi.mock("@/components/blog/BlogCard", () => ({
  default: ({ post }: { post: BlogPost }) => (
    <article>
      <h2>{post.title}</h2>
      <p>{post.category}</p>
    </article>
  ),
}));

vi.mock("@/components/blog/BlogSidebar", () => ({
  default: () => <aside>Sidebar</aside>,
}));

vi.mock("@/components/blog/BlogPagination", () => ({
  default: ({
    currentPage,
    totalPages,
  }: {
    currentPage: number;
    totalPages: number;
  }) => (
    <nav>
      Página {currentPage} de {totalPages}
    </nav>
  ),
}));

const postsMock: BlogPost[] = [
  {
    slug: "post-react",
    title: "Aprendendo React",
    excerpt: "Meu estudo de React",
    date: "2026-07-22",
    category: "Frontend",
    tags: ["react", "javascript"],
    readingTime: "3 min",
    content: "Conteúdo",
  },

  {
    slug: "post-security",
    title: "Introdução Cyber Security",
    excerpt: "Minha jornada",
    date: "2026-07-20",
    category: "Segurança",
    tags: ["cybersecurity"],
    readingTime: "5 min",
    content: "Conteúdo",
  },
];

describe("BlogPage", () => {
  it("deve renderizar título e descrição do blog", async () => {
    mockGetPosts.mockReturnValue(postsMock);

    const page = await BlogPage({
      searchParams: Promise.resolve({}),
    });

    render(page);

    expect(
      screen.getByText("Tecnologia, carreira e construção de projetos."),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Um espaço para documentar minha evolução em tecnologia/,
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar os posts", async () => {
    mockGetPosts.mockReturnValue(postsMock);

    const page = await BlogPage({
      searchParams: Promise.resolve({}),
    });

    render(page);

    expect(screen.getByText("Aprendendo React")).toBeInTheDocument();

    expect(screen.getByText("Introdução Cyber Security")).toBeInTheDocument();
  });

  it("deve filtrar posts por categoria", async () => {
    mockGetPosts.mockReturnValue(postsMock);

    const page = await BlogPage({
      searchParams: Promise.resolve({
        category: "Segurança",
      }),
    });

    render(page);

    expect(screen.getByText("Introdução Cyber Security")).toBeInTheDocument();

    expect(screen.queryByText("Aprendendo React")).not.toBeInTheDocument();
  });

  it("deve filtrar posts por tag", async () => {
    mockGetPosts.mockReturnValue(postsMock);

    const page = await BlogPage({
      searchParams: Promise.resolve({
        tag: "react",
      }),
    });

    render(page);

    expect(screen.getByText("Aprendendo React")).toBeInTheDocument();

    expect(
      screen.queryByText("Introdução Cyber Security"),
    ).not.toBeInTheDocument();
  });

  it("deve mostrar mensagem quando não encontrar artigos", async () => {
    mockGetPosts.mockReturnValue([]);

    const page = await BlogPage({
      searchParams: Promise.resolve({}),
    });

    render(page);

    expect(screen.getByText("Nenhum artigo encontrado.")).toBeInTheDocument();
  });

  it("deve mostrar paginação quando existir mais de uma página", async () => {
    const manyPosts = Array.from({ length: 8 }, (_, index) => ({
      ...postsMock[0],
      slug: `post-${index}`,
      title: `Post ${index}`,
    }));

    mockGetPosts.mockReturnValue(manyPosts);

    const page = await BlogPage({
      searchParams: Promise.resolve({}),
    });

    render(page);

    expect(screen.getByText("Página 1 de 2")).toBeInTheDocument();
  });
});
