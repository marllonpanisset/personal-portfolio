import type { Book } from "@/types/books";

export const books: readonly Book[] = [
  {
    slug: "programacao-na-era-da-ia",
    title: "Programação na Era da IA",
    subtitle:
      "Direção, fundamentos e prática para aprender e construir com IA sem perder o controle",
    description:
      "E-book gratuito para quem quer começar a programar em um cenário em que inteligência artificial já consegue gerar código, mas ainda é necessário compreender, verificar, alterar e controlar o que está sendo construído.",
    cover: "/livros/programacao-na-era-da-ia/cover.svg",
    edition: "1ª edição — 2026",
    author: "Marllon Panisset",
    brand: "MarllonCode",
    type: "free",
    pdf: "/livros/programacao-na-era-da-ia/programacao-na-era-da-ia.pdf",
    status: "published",
    audience: [
      "Quem quer começar a programar com direção em um cenário transformado pela IA.",
      "Quem já usa IA para gerar código, mas quer compreender e controlar melhor o resultado.",
      "Quem busca fundamentos para construir com mais autonomia e senso crítico.",
    ],
    contents: [
      "Direção para aprender programação sem terceirizar o raciocínio para a IA.",
      "Fundamentos para compreender, verificar e alterar o código gerado.",
      "Práticas para usar IA como ferramenta sem perder o controle do que está sendo construído.",
    ],
  },
];

export function getPublishedBooks() {
  return books.filter((book) => book.status === "published");
}

export function getPublishedBookBySlug(slug: string) {
  return getPublishedBooks().find((book) => book.slug === slug);
}
