import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import BlogSidebar from "@/components/blog/BlogSidebar";

const posts = [
  {
    slug: "primeiro-post",
    title: "Primeiro Post",
    excerpt: "Conteúdo do primeiro post",
    category: "Tecnologia",
    date: "2026-07-22",
    readingTime: "5 min",
    tags: ["nextjs", "typescript"],
  },
  {
    slug: "segundo-post",
    title: "Segundo Post",
    excerpt: "Conteúdo do segundo post",
    category: "Segurança",
    date: "2026-07-21",
    readingTime: "8 min",
    tags: ["cybersecurity", "typescript"],
  },
];

describe("BlogSidebar", () => {
  it("deve renderizar a seção de categorias", () => {
    render(<BlogSidebar posts={posts} />);

    expect(screen.getByText("Categorias")).toBeInTheDocument();

    expect(screen.getByText("Todos")).toBeInTheDocument();

    expect(screen.getByText("Tecnologia")).toBeInTheDocument();

    expect(screen.getByText("Segurança")).toBeInTheDocument();
  });

  it("deve criar link correto para categorias", () => {
    render(<BlogSidebar posts={posts} />);

    const categoryLink = screen.getByText("Tecnologia");

    expect(categoryLink).toHaveAttribute("href", "/blog?category=Tecnologia");
  });

  it("deve renderizar tags únicas", () => {
    render(<BlogSidebar posts={posts} />);

    expect(screen.getByText("#nextjs")).toBeInTheDocument();

    expect(screen.getByText("#typescript")).toBeInTheDocument();

    expect(screen.getByText("#cybersecurity")).toBeInTheDocument();

    const typescriptTags = screen.getAllByText("#typescript");

    expect(typescriptTags).toHaveLength(1);
  });

  it("deve criar links corretos para tags", () => {
    render(<BlogSidebar posts={posts} />);

    const tagLink = screen.getByText("#nextjs");

    expect(tagLink).toHaveAttribute("href", "/blog?tag=nextjs");
  });

  it("deve limitar as tags exibidas para 10", () => {
    const manyTagsPost = {
      ...posts[0],
      tags: [
        "tag1",
        "tag2",
        "tag3",
        "tag4",
        "tag5",
        "tag6",
        "tag7",
        "tag8",
        "tag9",
        "tag10",
        "tag11",
      ],
    };

    render(<BlogSidebar posts={[manyTagsPost]} />);

    expect(screen.getByText("#tag10")).toBeInTheDocument();

    expect(screen.queryByText("#tag11")).not.toBeInTheDocument();
  });

  it("não deve renderizar tags quando não existirem", () => {
    const postsWithoutTags = [
      {
        ...posts[0],
        tags: [],
      },
    ];

    render(<BlogSidebar posts={postsWithoutTags} />);

    expect(screen.queryByText("Tags")).not.toBeInTheDocument();
  });

  it("deve renderizar apenas uma categoria quando os posts possuem categoria repetida", () => {
    const duplicatedCategoryPosts = [
      posts[0],
      {
        ...posts[1],
        category: "Tecnologia",
      },
    ];

    render(<BlogSidebar posts={duplicatedCategoryPosts} />);

    const categoryLinks = screen.getAllByText("Tecnologia");

    expect(categoryLinks).toHaveLength(1);
  });
});
