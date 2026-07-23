import { render, screen } from "@testing-library/react";
import BlogCard from "@/components/blog/BlogCard";

const mockPost = {
  slug: "minha-transicao-para-cyber-security",
  title: "Minha transição para Cyber Security",
  excerpt: "Compartilhando minha trajetória estudando segurança da informação.",
  category: "Cyber Security",
  date: "22 Jul 2026",
  readingTime: "5 min de leitura",
  tags: ["security", "linux", "network"],
};

describe("BlogCard", () => {
  it("deve renderizar o card do blog", () => {
    render(<BlogCard post={mockPost} />);

    expect(
      screen.getByText("Minha transição para Cyber Security"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título do artigo", () => {
    render(<BlogCard post={mockPost} />);

    expect(
      screen.getByRole("heading", {
        name: "Minha transição para Cyber Security",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar o resumo do artigo", () => {
    render(<BlogCard post={mockPost} />);

    expect(
      screen.getByText(
        "Compartilhando minha trajetória estudando segurança da informação.",
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar categoria do post", () => {
    render(<BlogCard post={mockPost} />);

    expect(screen.getByText("Cyber Security")).toBeInTheDocument();
  });

  it("deve renderizar data e tempo de leitura", () => {
    render(<BlogCard post={mockPost} />);

    expect(screen.getByText("22 Jul 2026")).toBeInTheDocument();

    expect(screen.getByText("5 min de leitura")).toBeInTheDocument();
  });

  it("deve renderizar todas as tags do artigo", () => {
    render(<BlogCard post={mockPost} />);

    expect(screen.getByText("#security")).toBeInTheDocument();
    expect(screen.getByText("#linux")).toBeInTheDocument();
    expect(screen.getByText("#network")).toBeInTheDocument();
  });

  it("deve possuir link correto para o artigo", () => {
    render(<BlogCard post={mockPost} />);

    const link = screen.getByRole("link", {
      name: /Ler artigo/i,
    });

    expect(link).toHaveAttribute(
      "href",
      "/blog/minha-transicao-para-cyber-security",
    );
  });

  it("não deve renderizar tempo de leitura quando não existir", () => {
    const postWithoutReadingTime = {
      ...mockPost,
      readingTime: undefined,
    };

    render(<BlogCard post={postWithoutReadingTime} />);

    expect(screen.queryByText("5 min de leitura")).not.toBeInTheDocument();
  });

  it("não deve renderizar tags quando lista estiver vazia", () => {
    const postWithoutTags = {
      ...mockPost,
      tags: [],
    };

    render(<BlogCard post={postWithoutTags} />);

    expect(screen.queryByText("#security")).not.toBeInTheDocument();
  });
});
