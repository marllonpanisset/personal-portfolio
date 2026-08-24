import { beforeEach, describe, expect, it, vi } from "vitest";

const { rpc, createSupabaseServerClient } = vi.hoisted(() => {
  const rpc = vi.fn();
  const createSupabaseServerClient = vi.fn(() => ({ rpc }));

  return { rpc, createSupabaseServerClient };
});

vi.mock("@/lib/supabase/server", () => ({
  createSupabaseServerClient,
  SupabaseServerConfigurationError: class SupabaseServerConfigurationError extends Error {},
}));

import {
  bookLeadRepository,
  BookLeadPersistenceError,
} from "@/lib/books/book-lead-repository";
import type { BookLead } from "@/types/books";

const lead: BookLead = {
  name: "Marllon Panisset",
  email: "marllon@example.com",
  bookSlug: "programacao-na-era-da-ia",
  utmSource: "instagram",
  utmMedium: "dm",
  utmCampaign: "ebook_programacao_ia",
  marketingConsent: false,
  createdAt: "2026-08-23T00:00:00.000Z",
};

describe("bookLeadRepository", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("envia os dados normalizados para a RPC atômica", async () => {
    rpc.mockResolvedValue({ error: null });

    await bookLeadRepository.save(lead);

    expect(rpc).toHaveBeenCalledWith("upsert_book_lead", {
      p_name: lead.name,
      p_email: lead.email,
      p_book_slug: lead.bookSlug,
      p_utm_source: lead.utmSource,
      p_utm_medium: lead.utmMedium,
      p_utm_campaign: lead.utmCampaign,
      p_marketing_consent: false,
    });
  });

  it("propaga falhas de persistência não relacionadas a duplicidade", async () => {
    rpc.mockResolvedValue({
      error: { code: "42501", message: "permission denied" },
    });

    await expect(bookLeadRepository.save(lead)).rejects.toBeInstanceOf(
      BookLeadPersistenceError,
    );
  });
});
