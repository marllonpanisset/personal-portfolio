import type { BookLeadInput } from "@/types/books";

type LeadField = keyof BookLeadInput;

export type LeadFieldErrors = Partial<Record<LeadField, string>>;

export type BookLeadValidationResult =
  | { success: true; data: BookLeadInput }
  | { success: false; errors: LeadFieldErrors };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBookLeadInput(
  value: unknown,
): BookLeadValidationResult {
  if (!value || typeof value !== "object") {
    return {
      success: false,
      errors: {
        name: "Informe seu nome.",
        email: "Informe seu e-mail.",
        bookSlug: "Livro inválido.",
      },
    };
  }

  const input = value as Record<string, unknown>;
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const bookSlug =
    typeof input.bookSlug === "string" ? input.bookSlug.trim() : "";
  const source =
    typeof input.source === "string" && input.source.trim()
      ? input.source.trim()
      : "livros";
  const marketingConsent = input.marketingConsent ?? false;
  const errors: LeadFieldErrors = {};

  if (!name) {
    errors.name = "Informe seu nome.";
  } else if (name.length > 120) {
    errors.name = "O nome deve ter no máximo 120 caracteres.";
  }

  if (!email) {
    errors.email = "Informe seu e-mail.";
  } else if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    errors.email = "Informe um e-mail válido.";
  }

  if (!bookSlug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(bookSlug)) {
    errors.bookSlug = "Livro inválido.";
  }

  if (source.length > 160) {
    errors.source = "A origem deve ter no máximo 160 caracteres.";
  }

  if (typeof marketingConsent !== "boolean") {
    errors.marketingConsent = "Consentimento inválido.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name,
      email: email.toLowerCase(),
      bookSlug,
      source,
      marketingConsent: marketingConsent as boolean,
    },
  };
}
