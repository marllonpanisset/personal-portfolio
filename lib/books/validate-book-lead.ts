import type { BookLeadInput } from "@/types/books";

type LeadField = keyof BookLeadInput;

export type LeadFieldErrors = Partial<Record<LeadField, string>>;

export type BookLeadValidationResult =
  | { success: true; data: BookLeadInput }
  | { success: false; errors: LeadFieldErrors };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_UTM_LENGTH = 160;

function parseOptionalUtm(
  input: Record<string, unknown>,
  key: "utmSource" | "utmMedium" | "utmCampaign",
  errors: LeadFieldErrors,
) {
  const value = input[key];

  if (value === undefined || value === null || value === "") {
    return null;
  }

  if (typeof value !== "string") {
    errors[key] = "Parâmetro UTM inválido.";
    return null;
  }

  const normalized = value.trim();

  if (!normalized) {
    return null;
  }

  if (normalized.length > MAX_UTM_LENGTH) {
    errors[key] = `O parâmetro UTM deve ter no máximo ${MAX_UTM_LENGTH} caracteres.`;
    return null;
  }

  return normalized;
}

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
  const marketingConsent = input.marketingConsent ?? false;
  const errors: LeadFieldErrors = {};
  const utmSource = parseOptionalUtm(input, "utmSource", errors);
  const utmMedium = parseOptionalUtm(input, "utmMedium", errors);
  const utmCampaign = parseOptionalUtm(input, "utmCampaign", errors);

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
      utmSource,
      utmMedium,
      utmCampaign,
      marketingConsent: marketingConsent as boolean,
    },
  };
}
