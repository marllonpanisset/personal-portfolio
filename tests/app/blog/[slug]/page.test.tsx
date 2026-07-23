import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const { mockNotFound } = vi.hoisted(() => ({
  mockNotFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

vi.mock("next/navigation", () => ({
  notFound: mockNotFound,
}));

vi.mock("next-mdx-remote/rsc", () => ({
  MDXRemote: ({ source }: { source: string }) => (
    <div data-testid="mdx-content">{source}</div>
  ),
}));

vi.mock("@/components/ui/Container", () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock("@/components/blog/CategoryBadge", () => ({
  default: ({ category }: { category: string }) => (
    <span data-testid="category">{category}</span>
  ),
}));

import BlogPostPage, {
  generateMetadata,
  generateStaticParams,
} from "@/app/blog/[slug]/page";

import { getPosts } from "@/lib/blog";

describe("BlogPostPage", () => {
  it("deve renderizar um post existente", async () => {
    const posts = getPosts();

    const post = posts[0];

    const result = await BlogPostPage({
      params: Promise.resolve({
        slug: post.slug,
      }),
    });

    render(result);

    expect(screen.getByText(post.title)).toBeInTheDocument();

    expect(screen.getByText(post.excerpt)).toBeInTheDocument();

    expect(screen.getByTestId("category")).toHaveTextContent(post.category);
  });

  it("deve renderizar tags do post", async () => {
    const posts = getPosts();

    const post = posts.find((item) => item.tags.length > 0);

    if (!post) {
      throw new Error("Nenhum post com tags encontrado");
    }

    const result = await BlogPostPage({
      params: Promise.resolve({
        slug: post.slug,
      }),
    });

    render(result);

    post.tags.forEach((tag) => {
      expect(screen.getByText(`#${tag}`)).toBeInTheDocument();
    });
  });

  it("deve renderizar conteúdo MDX", async () => {
    const post = getPosts()[0];

    const result = await BlogPostPage({
      params: Promise.resolve({
        slug: post.slug,
      }),
    });

    render(result);

    const content = screen.getByTestId("mdx-content");

    expect(content).toHaveTextContent(
      "Minha trajetória na tecnologia nunca foi linear.",
    );

    expect(content).toHaveTextContent("Tecnologia é uma construção contínua");
  });

  it("deve chamar notFound quando slug não existir", async () => {
    await expect(
      BlogPostPage({
        params: Promise.resolve({
          slug: "post-inexistente",
        }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });
});

describe("generateStaticParams", () => {
  it("deve gerar params dos posts existentes", () => {
    const params = generateStaticParams();

    const posts = getPosts();

    expect(params).toHaveLength(posts.length);

    expect(params[0]).toHaveProperty("slug");
  });
});

describe("generateMetadata", () => {
  it("deve gerar metadata do post", async () => {
    const posts = getPosts();

    const post = posts[0];

    const metadata = await generateMetadata({
      params: Promise.resolve({
        slug: post.slug,
      }),
    });

    expect(metadata.title).toBe(`${post.title} | Marllon Panisset`);

    expect(metadata.description).toBe(post.excerpt);
  });

  it("deve retornar título de artigo não encontrado", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({
        slug: "inexistente",
      }),
    });

    expect(metadata.title).toBe("Artigo não encontrado");
  });
});
