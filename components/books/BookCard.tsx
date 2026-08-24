import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { formatBookPrice } from "@/lib/books/format-book-price";
import type { Book } from "@/types/books";

type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  const label =
    book.type === "free"
      ? "Gratuito"
      : book.price !== undefined
        ? formatBookPrice(book.price)
        : null;

  return (
    <article className="group grid overflow-hidden rounded-xl border border-base-border bg-base-surface/70 sm:grid-cols-[13rem_1fr]">
      <Link
        href={`/livros/${book.slug}`}
        aria-label={`Ver ${book.title}`}
        className="relative aspect-[3/4] overflow-hidden border-b border-base-border bg-base sm:aspect-auto sm:border-b-0 sm:border-r"
      >
        <Image
          src={book.cover}
          alt={`Capa do livro ${book.title}`}
          fill
          sizes="(max-width: 640px) 100vw, 208px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-col p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          {label && (
            <span className="rounded-full border border-signal/30 bg-signal-dim/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-signal">
              {label}
            </span>
          )}
          <span className="font-mono text-[11px] text-ink-faint">
            {book.edition}
          </span>
        </div>

        <h2 className="mt-6 max-w-xl font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
          {book.title}
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {book.description}
        </p>

        <Link
          href={`/livros/${book.slug}`}
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-base transition-colors hover:bg-signal"
        >
          Ver livro
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}
