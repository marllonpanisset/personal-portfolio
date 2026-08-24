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

/**
 * Adapter server-side para a persistência de leads de livros.
 * A RPC mantém a aquisição idempotente e atualiza apenas metadados permitidos.
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

    const { error } = await supabase.rpc("upsert_book_lead", {
      p_name: lead.name,
      p_email: lead.email,
      p_book_slug: lead.bookSlug,
      p_utm_source: lead.utmSource,
      p_utm_medium: lead.utmMedium,
      p_utm_campaign: lead.utmCampaign,
      p_marketing_consent: lead.marketingConsent,
    });

    if (!error) {
      return;
    }

    throw new BookLeadPersistenceError();
  },
};
