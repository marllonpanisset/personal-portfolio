import type { Metadata } from "next";

import { BookCard } from "@/components/books/BookCard";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getPublishedBooks } from "@/data/books";

export const metadata: Metadata = {
  title: { absolute: "Livros | MarllonCode" },
  description:
    "Livros e materiais editoriais de Marllon Panisset sobre programação, tecnologia e inteligência artificial.",
  alternates: {
    canonical: "/livros",
  },
  openGraph: {
    title: "Livros | MarllonCode",
    description:
      "Livros e materiais editoriais sobre programação, tecnologia e inteligência artificial.",
    url: "/livros",
    type: "website",
  },
};

export default function BooksPage() {
  const publishedBooks = getPublishedBooks();

  return (
    <main className="py-32">
      <Container>
        <SectionLabel index="05" label="Livros" />

        <header className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest2 text-signal">
            MarllonCode editorial
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Livros para aprender e construir com mais autonomia.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Materiais autorais sobre programação, tecnologia e inteligência
            artificial, organizados para apoiar estudo e prática.
          </p>
        </header>

        <section aria-label="Catálogo de livros" className="mt-16 space-y-8">
          {publishedBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </section>
      </Container>
    </main>
  );
}
