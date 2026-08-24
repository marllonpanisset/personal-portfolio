import type { BookLead } from "@/types/books";
import {
  createSupabaseServerClient,
  SupabaseServerConfigurationError,
} from "@/lib/supabase/server";

export interface BookLeadRepository {
  save(lead: BookLead): Promise<void>;
}

export class BookLeadPersistenceNotConfiguredError extends Error {
  constructor() {
    super("A persistência de leads de livros ainda não foi configurada.");
    this.name = "BookLeadPersistenceNotConfiguredError";
  }
}

export class BookLeadPersistenceError extends Error {
  constructor() {
    super("Não foi possível persistir o lead do livro.");
    this.name = "BookLeadPersistenceError";
  }
}

function isExistingBookLead(error: { code?: string; message?: string }) {
  return error.code === "23505";
}

/**
 * Adapter server-side para a persistência de leads de livros.
 * Conflitos de e-mail + livro representam uma aquisição já concluída.
 */
export const bookLeadRepository: BookLeadRepository = {
  async save(lead) {
    let supabase;

    try {
      supabase = createSupabaseServerClient();
    } catch (error) {
      if (error instanceof SupabaseServerConfigurationError) {
        throw new BookLeadPersistenceNotConfiguredError();
      }

      throw error;
    }

    const { error } = await supabase.from("book_leads").insert({
      name: lead.name,
      email: lead.email,
      book_slug: lead.bookSlug,
      source: lead.source,
      marketing_consent: lead.marketingConsent,
    });

    if (!error || isExistingBookLead(error)) {
      return;
    }

    console.error("Supabase book lead persistence failed", {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
    });

    throw new BookLeadPersistenceError();
  },
};
