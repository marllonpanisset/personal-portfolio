import { formatBookPrice } from "@/lib/books/format-book-price";
import type { Book } from "@/types/books";

import { BookLeadForm } from "./BookLeadForm";

type BookAcquisitionProps = {
  book: Book;
};

export function BookAcquisition({ book }: BookAcquisitionProps) {
  if (book.type === "free") {
    return book.pdf ? (
      <BookLeadForm bookSlug={book.slug} pdf={book.pdf} />
    ) : null;
  }

  return (
    <div className="rounded-xl border border-base-border bg-base-surface/70 p-6 md:p-8">
      {book.price !== undefined && (
        <p className="font-display text-3xl font-semibold text-ink">
          {formatBookPrice(book.price)}
        </p>
      )}

      {/* TODO: habilitar com /checkout?product=<slug> quando o checkout existir. */}
      <button
        type="button"
        disabled
        className="mt-6 inline-flex w-full cursor-not-allowed items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-base opacity-50"
      >
        Comprar livro
      </button>
    </div>
  );
}
