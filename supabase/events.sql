-- Anonymous click counts from the website (no cookies, no personal data).
-- Run once in Supabase → SQL Editor. Safe to run again.
create table if not exists public.events (
  id bigint generated always as identity primary key,
  name text not null check (name in ('call','whatsapp','quote_open','quote_sent','calc_open','calc_done','resolve_open','homecare_open','careers_open','job_apply','gallery_swipe','ai_open')),
  page text check (page is null or char_length(page) <= 40),
  device text check (device in ('phone','computer')),
  lang text check (lang in ('en','pt')),
  created_at bigint not null default public.now_ms()
);
create index if not exists events_created_idx on public.events (created_at desc);
alter table public.events enable row level security;
grant insert on public.events to anon;
grant select on public.events to authenticated;
drop policy if exists "website can count" on public.events;
create policy "website can count" on public.events for insert to anon with check (true);
drop policy if exists "staff can read counts" on public.events;
create policy "staff can read counts" on public.events for select to authenticated using (public.is_staff());
