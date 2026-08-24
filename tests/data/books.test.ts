import { describe, expect, it } from "vitest";

import {
  getPublishedBookBySlug,
  getPublishedBooks,
} from "@/data/books";

describe("books data", () => {
  it("lista apenas livros publicados", () => {
    expect(getPublishedBooks().every((book) => book.status === "published")).toBe(
      true,
    );
  });

  it("disponibiliza o primeiro e-book gratuito", () => {
    const book = getPublishedBookBySlug("programacao-na-era-da-ia");

    expect(book).toMatchObject({
      title: "Programação na Era da IA",
      author: "Marllon Panisset",
      brand: "MarllonCode",
      type: "free",
    });
    expect(book?.pdf).toBe(
      "/livros/programacao-na-era-da-ia/programacao-na-era-da-ia.pdf",
    );
  });
});
