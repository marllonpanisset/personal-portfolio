import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";

import { BookAcquisition } from "@/components/books/BookAcquisition";
import { Container } from "@/components/ui/Container";
import {
  getPublishedBookBySlug,
  getPublishedBooks,
} from "@/data/books";

type BookPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedBooks().map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getPublishedBookBySlug(slug);

  if (!book) {
    return {
      title: { absolute: "Livro não encontrado | MarllonCode" },
    };
  }

  const title = `${book.title} | ${book.brand}`;
  const url = `/livros/${book.slug}`;

  return {
    title: { absolute: title },
    description: book.subtitle,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: book.subtitle,
      url,
      type: "website",
      images: [
        {
          url: book.cover,
          width: 1200,
          height: 1600,
          alt: `Capa do livro ${book.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: book.subtitle,
      images: [book.cover],
    },
  };
}

export default async function BookPage({
  params,
}: BookPageProps) {
  const { slug } = await params;
  const book = getPublishedBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="pb-28 pt-28 md:pt-32">
      <Container>
        <Link
          href="/livros"
          className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted transition-colors hover:text-signal"
        >
          <ArrowLeft aria-hidden="true" size={14} />
          Voltar para livros
        </Link>

        <article className="mt-10">
          <header className="grid gap-10 border-b border-base-border pb-16 lg:grid-cols-[minmax(18rem,0.75fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg border border-base-border bg-base shadow-2xl shadow-black/30 lg:mx-0">
              <Image
                src={book.cover}
                alt={`Capa do livro ${book.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 448px, 420px"
                className="object-cover"
              />
            </div>

            <div className="self-center">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-signal/30 bg-signal-dim/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-signal">
                  {book.type === "free" ? "E-book gratuito" : "Livro"}
                </span>
                <span className="font-mono text-[11px] text-ink-faint">
                  {book.edition}
                </span>
              </div>

              <p className="mt-7 font-mono text-xs uppercase tracking-widest2 text-ink-muted">
                {book.brand}
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
                {book.title}
              </h1>
              <p className="mt-6 max-w-2xl font-display text-xl leading-relaxed text-ink md:text-2xl">
                {book.subtitle}
              </p>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted">
                {book.description}
              </p>
              <p className="mt-8 font-mono text-xs text-ink-faint">
                Por {book.author}
              </p>
            </div>
          </header>

          <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start lg:gap-16">
            <div className="space-y-14">
              <section aria-labelledby="book-audience-title">
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
                  Leitura orientada
                </p>
                <h2
                  id="book-audience-title"
                  className="mt-4 font-display text-3xl font-semibold text-ink"
                >
                  Para quem é
                </h2>
                <ul className="mt-7 space-y-4">
                  {book.audience.map((item) => (
                    <li key={item} className="flex gap-3 text-ink-muted">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-signal"
                        size={18}
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="book-contents-title">
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
                  Conteúdo
                </p>
                <h2
                  id="book-contents-title"
                  className="mt-4 font-display text-3xl font-semibold text-ink"
                >
                  O que você vai encontrar
                </h2>
                <ol className="mt-7 space-y-5">
                  {book.contents.map((item, index) => (
                    <li
                      key={item}
                      className="grid grid-cols-[2rem_1fr] gap-3 border-t border-base-border pt-5 text-ink-muted"
                    >
                      <span className="font-mono text-xs text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <aside aria-label="Obter livro" className="lg:sticky lg:top-24">
              <BookAcquisition book={book} />
            </aside>
          </div>
        </article>
      </Container>
    </main>
  );
}
