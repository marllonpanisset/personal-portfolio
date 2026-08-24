create table public.book_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 1 and 254),
  book_slug text not null check (
    book_slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'
  ),
  source text check (source is null or char_length(source) <= 160),
  marketing_consent boolean not null default false,
  created_at timestamptz not null default now()
);

create index book_leads_book_slug_idx
  on public.book_leads (book_slug);

create index book_leads_created_at_desc_idx
  on public.book_leads (created_at desc);

create unique index book_leads_email_book_slug_unique_idx
  on public.book_leads (lower(email), book_slug);

alter table public.book_leads enable row level security;
