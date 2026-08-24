import { getPublishedBookBySlug } from "@/data/books";
import type { BookLead, BookLeadInput } from "@/types/books";

import {
  bookLeadRepository,
  type BookLeadRepository,
} from "./book-lead-repository";

export class BookUnavailableForLeadError extends Error {
  constructor() {
    super("O livro informado não está disponível para liberação gratuita.");
    this.name = "BookUnavailableForLeadError";
  }
}

export async function submitBookLead(
  input: BookLeadInput,
  repository: BookLeadRepository = bookLeadRepository,
) {
  const book = getPublishedBookBySlug(input.bookSlug);

  if (!book || book.type !== "free") {
    throw new BookUnavailableForLeadError();
  }

  const lead: BookLead = {
    ...input,
    createdAt: new Date().toISOString(),
  };

  await repository.save(lead);

  return lead;
}
