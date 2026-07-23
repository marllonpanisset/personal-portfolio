import { describe, expect, it, vi, beforeEach } from "vitest";
import path from "path";

const mockFs = vi.hoisted(() => ({
  existsSync: vi.fn(),
  readdirSync: vi.fn(),
  readFileSync: vi.fn(),
}));

vi.mock("fs", () => ({
  default: mockFs,
}));

import { getPosts, getPostBySlug } from "@/lib/blog";

const mockFiles = {
  "post-antigo.mdx": `---
title: Post Antigo
excerpt: Conteúdo antigo
date: "2026-07-20"
category: Tecnologia
tags:
  - nextjs
  - react
---

Conteúdo do post antigo.
`,

  "post-recente.mdx": `---
title: Post Recente
excerpt: Conteúdo recente
date: "2026-07-22"
category: Segurança
tags:
  - cybersecurity
---

Conteúdo do post recente.
`,
};

describe("lib/blog", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockFs.existsSync.mockReturnValue(true);

    mockFs.readdirSync.mockReturnValue(["post-antigo.mdx", "post-recente.mdx"]);

    mockFs.readFileSync.mockImplementation((filePath: string) => {
      const filename = path.basename(filePath);

      return mockFiles[filename as keyof typeof mockFiles] ?? "";
    });
  });

  it("deve retornar todos os posts", () => {
    const posts = getPosts();

    expect(posts).toHaveLength(2);

    expect(posts[0].title).toBe("Post Recente");

    expect(posts[1].title).toBe("Post Antigo");
  });

  it("deve ordenar posts do mais recente para o mais antigo", () => {
    const posts = getPosts();

    expect(posts[0].date).toBe("2026-07-22");

    expect(posts[1].date).toBe("2026-07-20");
  });

  it("deve retornar um post pelo slug", () => {
    const post = getPostBySlug("post-recente");

    expect(post).not.toBeNull();

    expect(post?.title).toBe("Post Recente");

    expect(post?.slug).toBe("post-recente");
  });

  it("deve retornar null quando slug não existir", () => {
    mockFs.existsSync.mockReturnValue(false);

    const post = getPostBySlug("post-inexistente");

    expect(post).toBeNull();
  });

  it("deve calcular tempo de leitura", () => {
    const post = getPostBySlug("post-recente");

    expect(post?.readingTime).toBeTruthy();

    expect(typeof post?.readingTime).toBe("string");
  });

  it("deve retornar tags corretamente", () => {
    const post = getPostBySlug("post-antigo");

    expect(post?.tags).toEqual(["nextjs", "react"]);
  });

  it("deve usar valores padrão quando metadata estiver ausente", () => {
    mockFs.readdirSync.mockReturnValue(["post-sem-meta.mdx"]);

    mockFs.readFileSync.mockReturnValue(`
---
---

Conteúdo sem metadata.
`);

    const posts = getPosts();

    expect(posts[0].title).toBe("Sem título");

    expect(posts[0].excerpt).toBe("");

    expect(posts[0].category).toBe("Tecnologia");

    expect(posts[0].tags).toEqual([]);
  });
});
