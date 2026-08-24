export type BookType = "free" | "paid";

export type BookStatus = "published" | "draft";

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  edition: string;
  author: string;
  brand: string;
  type: BookType;
  price?: number;
  pdf?: string;
  stripePriceId?: string;
  status: BookStatus;
  audience: readonly string[];
  contents: readonly string[];
};

export type BookLeadInput = {
  name: string;
  email: string;
  bookSlug: string;
  source: string;
  marketingConsent: boolean;
};

export type BookLead = BookLeadInput & {
  createdAt: string;
};
