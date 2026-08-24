update public.book_leads
set email = lower(email);

drop index public.book_leads_email_book_slug_unique_idx;

create unique index book_leads_email_book_slug_unique_idx
  on public.book_leads (email, book_slug);

alter table public.book_leads
  add column utm_source text,
  add column utm_medium text,
  add column utm_campaign text;

alter table public.book_leads
  drop column source;

create function public.upsert_book_lead(
  p_name text,
  p_email text,
  p_book_slug text,
  p_utm_source text,
  p_utm_medium text,
  p_utm_campaign text,
  p_marketing_consent boolean
)
returns void
language sql
security invoker
set search_path = pg_catalog, public
as $$
  insert into public.book_leads (
    name,
    email,
    book_slug,
    utm_source,
    utm_medium,
    utm_campaign,
    marketing_consent
  )
  values (
    p_name,
    p_email,
    p_book_slug,
    p_utm_source,
    p_utm_medium,
    p_utm_campaign,
    p_marketing_consent
  )
  on conflict (email, book_slug) do update
  set
    marketing_consent =
      public.book_leads.marketing_consent
      or excluded.marketing_consent,
    utm_source =
      coalesce(public.book_leads.utm_source, excluded.utm_source),
    utm_medium =
      coalesce(public.book_leads.utm_medium, excluded.utm_medium),
    utm_campaign =
      coalesce(public.book_leads.utm_campaign, excluded.utm_campaign);
$$;

revoke all on function public.upsert_book_lead(
  text,
  text,
  text,
  text,
  text,
  text,
  boolean
) from public;

grant execute on function public.upsert_book_lead(
  text,
  text,
  text,
  text,
  text,
  text,
  boolean
) to service_role;

grant update (
  marketing_consent,
  utm_source,
  utm_medium,
  utm_campaign
) on table public.book_leads to service_role;

grant select (
  email,
  book_slug,
  marketing_consent,
  utm_source,
  utm_medium,
  utm_campaign
) on table public.book_leads to service_role;
