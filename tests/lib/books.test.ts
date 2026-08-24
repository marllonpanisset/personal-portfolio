import { describe, expect, it, vi } from "vitest";

import {
  BookUnavailableForLeadError,
  submitBookLead,
} from "@/lib/books/submit-book-lead";
import { validateBookLeadInput } from "@/lib/books/validate-book-lead";
import type { BookLead, BookLeadInput } from "@/types/books";

const validInput: BookLeadInput = {
  name: "Marllon Panisset",
  email: "marllon@example.com",
  bookSlug: "programacao-na-era-da-ia",
  source: "instagram-launch",
  marketingConsent: false,
};

describe("validateBookLeadInput", () => {
  it("valida, normaliza e preserva a origem do lead", () => {
    const result = validateBookLeadInput({
      ...validInput,
      name: "  Marllon Panisset  ",
      email: "MARLLON@EXAMPLE.COM",
    });

    expect(result).toEqual({
      success: true,
      data: validInput,
    });
  });

  it("rejeita nome e e-mail inválidos", () => {
    const result = validateBookLeadInput({
      ...validInput,
      name: "",
      email: "email-invalido",
    });

    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.errors.name).toBeDefined();
      expect(result.errors.email).toBeDefined();
    }
  });

  it("considera o consentimento ausente como falso", () => {
    const { marketingConsent: _marketingConsent, ...input } = validInput;
    const result = validateBookLeadInput(input);

    expect(result.success && result.data.marketingConsent).toBe(false);
  });
});

describe("submitBookLead", () => {
  it("salva o lead com createdAt usando um repository injetado", async () => {
    const save = vi.fn<(lead: BookLead) => Promise<void>>().mockResolvedValue();

    const lead = await submitBookLead(validInput, { save });

    expect(save).toHaveBeenCalledOnce();
    expect(lead).toMatchObject(validInput);
    expect(Number.isNaN(Date.parse(lead.createdAt))).toBe(false);
  });

  it("rejeita livros que não estão publicados como gratuitos", async () => {
    await expect(
      submitBookLead(
        { ...validInput, bookSlug: "livro-inexistente" },
        { save: vi.fn() },
      ),
    ).rejects.toBeInstanceOf(BookUnavailableForLeadError);
  });
});
