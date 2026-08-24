import { beforeEach, describe, expect, it, vi } from "vitest";

const { insert, from, createSupabaseServerClient } = vi.hoisted(() => {
  const insert = vi.fn();
  const from = vi.fn(() => ({ insert }));
  const createSupabaseServerClient = vi.fn(() => ({ from }));

  return { insert, from, createSupabaseServerClient };
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
  source: "instagram-launch",
  marketingConsent: false,
  createdAt: "2026-08-23T00:00:00.000Z",
};

describe("bookLeadRepository", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("insere os campos persistidos e deixa created_at para o banco", async () => {
    insert.mockResolvedValue({ error: null });

    await bookLeadRepository.save(lead);

    expect(from).toHaveBeenCalledWith("book_leads");
    expect(insert).toHaveBeenCalledWith({
      name: lead.name,
      email: lead.email,
      book_slug: lead.bookSlug,
      source: lead.source,
      marketing_consent: false,
    });
  });

  it("considera conflito único como aquisição já válida", async () => {
    insert.mockResolvedValue({
      error: { code: "23505", message: "duplicate key" },
    });

    await expect(bookLeadRepository.save(lead)).resolves.toBeUndefined();
  });

  it("propaga falhas de persistência não relacionadas a duplicidade", async () => {
    insert.mockResolvedValue({
      error: { code: "42501", message: "permission denied" },
    });

    await expect(bookLeadRepository.save(lead)).rejects.toBeInstanceOf(
      BookLeadPersistenceError,
    );
  });
});
