-- ============================================================
-- BTS website + CRM — Supabase schema
-- Run once: Supabase dashboard → SQL Editor → New query → paste → Run
-- ============================================================

-- Timestamps are stored as milliseconds (the CRM works with JS Date.now()).
create or replace function public.now_ms() returns bigint
language sql stable as $$ select (extract(epoch from now()) * 1000)::bigint $$;

-- ---------- Staff: only people listed here can open the CRM data ----------
create table if not exists public.staff (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text
);
alter table public.staff enable row level security;
drop policy if exists "staff can see own row" on public.staff;
create policy "staff can see own row" on public.staff
  for select to authenticated using (user_id = auth.uid());

create or replace function public.is_staff() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.staff where user_id = auth.uid())
$$;

-- ---------- Leads (estimate requests + manually added leads) ----------
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 200),
  email text check (email is null or char_length(email) <= 200),
  phone text check (phone is null or char_length(phone) <= 60),
  location text,
  service text,
  property_type text,
  budget text,
  timing text,
  description text check (description is null or char_length(description) <= 5000),
  calc jsonb,
  photo_paths text[] not null default '{}',
  source text not null default 'Website',
  stage text not null default 'new',
  notes text,
  lang text,
  consent boolean not null default false,
  created_at bigint not null default public.now_ms(),
  updated_at bigint not null default public.now_ms()
);
create index if not exists leads_created_idx on public.leads (created_at desc);

-- ---------- Lead activity log ----------
create table if not exists public.activities (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete cascade,
  type text,
  content text,
  created_by text,
  created_at bigint not null default public.now_ms()
);
create index if not exists activities_created_idx on public.activities (created_at desc);

-- ---------- Vacancies ----------
create table if not exists public.vacancies (
  id text primary key default gen_random_uuid()::text,
  title text not null,
  title_en text,
  location text,
  type text,
  experience text,
  openings int not null default 1,
  status text not null default 'open',
  on_site boolean not null default false,
  duties text,
  requirements text,
  created_at bigint not null default public.now_ms(),
  updated_at bigint not null default public.now_ms()
);

-- ---------- Candidates (job applications) ----------
create table if not exists public.candidates (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 200),
  phone text check (phone is null or char_length(phone) <= 60),
  email text check (email is null or char_length(email) <= 200),
  vacancy_id text,
  experience text,
  availability text,
  city text,
  permit text,
  source text not null default 'Website',
  cv_received boolean not null default false,
  cv_path text,
  notes text check (notes is null or char_length(notes) <= 5000),
  stage text not null default 'applied',
  history jsonb not null default '[]',
  lang text,
  consent boolean not null default false,
  created_at bigint not null default public.now_ms(),
  updated_at bigint not null default public.now_ms()
);
create index if not exists candidates_created_idx on public.candidates (created_at desc);

-- ---------- API access (Row Level Security below decides what each role may actually see) ----------
grant usage on schema public to anon, authenticated;
grant insert on public.leads, public.candidates to anon;
grant select, insert, update, delete on public.leads, public.activities, public.vacancies, public.candidates to authenticated;
grant select on public.staff to authenticated;
grant execute on function public.is_staff() to anon, authenticated;
grant execute on function public.now_ms() to anon, authenticated;

-- ---------- Row Level Security ----------
alter table public.leads enable row level security;
alter table public.activities enable row level security;
alter table public.vacancies enable row level security;
alter table public.candidates enable row level security;

-- Staff: full access from the CRM
drop policy if exists "staff full access" on public.leads;
create policy "staff full access" on public.leads for all to authenticated using (public.is_staff()) with check (public.is_staff());
drop policy if exists "staff full access" on public.activities;
create policy "staff full access" on public.activities for all to authenticated using (public.is_staff()) with check (public.is_staff());
drop policy if exists "staff full access" on public.vacancies;
create policy "staff full access" on public.vacancies for all to authenticated using (public.is_staff()) with check (public.is_staff());
drop policy if exists "staff full access" on public.candidates;
create policy "staff full access" on public.candidates for all to authenticated using (public.is_staff()) with check (public.is_staff());

-- Website visitors: may only ADD a new request/application. They can never read, change or delete anything.
drop policy if exists "website can submit" on public.leads;
create policy "website can submit" on public.leads for insert to anon
  with check (stage = 'new' and source = 'Website' and consent = true);
drop policy if exists "website can submit" on public.candidates;
create policy "website can submit" on public.candidates for insert to anon
  with check (stage = 'applied' and source = 'Website' and consent = true and cv_received = (cv_path is not null));

-- ---------- File storage: property photos and CVs ----------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('uploads', 'uploads', false, 10485760, array[
  'image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif',
  'application/pdf', 'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
])
on conflict (id) do nothing;

drop policy if exists "website can upload" on storage.objects;
create policy "website can upload" on storage.objects for insert to anon
  with check (bucket_id = 'uploads' and (storage.foldername(name))[1] in ('leads', 'cv'));
drop policy if exists "staff can read uploads" on storage.objects;
create policy "staff can read uploads" on storage.objects for select to authenticated
  using (bucket_id = 'uploads' and public.is_staff());
drop policy if exists "staff can delete uploads" on storage.objects;
create policy "staff can delete uploads" on storage.objects for delete to authenticated
  using (bucket_id = 'uploads' and public.is_staff());

-- ---------- Live updates in the CRM ----------
do $$
begin
  begin alter publication supabase_realtime add table public.leads; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.activities; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.vacancies; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.candidates; exception when duplicate_object then null; end;
end $$;

-- ---------- Open vacancies (same as on the website) ----------
insert into public.vacancies (id, title, title_en, location, type, experience, openings, status, on_site, duties, requirements)
values
('vac_pedreiro', 'Pedreiro', 'Stonemason · Bricklayer', 'Aveiro · Porto · Douro Valley', 'Full-time', '3+ years', 1, 'open', true,
 E'Build and repair stone and brick masonry walls\nRestore traditional granite and schist walls on rural properties\nBuild retaining walls, foundations and small concrete works\nLay blocks, render and prepare surfaces for finishing',
 E'Proven experience as a mason (pedreiro)\nKnowledge of natural stone — granite, schist\nAble to read basic construction drawings\nReliable, tidy and safety-minded; driving licence is a plus'),
('vac_cofragem', 'Carpinteiro de Cofragem', 'Formwork Carpenter', 'Aveiro · Porto · Douro Valley', 'Full-time', '2+ years', 1, 'open', true,
 E'Assemble and strip formwork for foundations, slabs, beams, columns and walls\nWork with traditional timber and modular/metal formwork systems\nSet out, level and brace formwork to the drawings\nSupport concrete pours and look after equipment and materials',
 E'Proven experience as a formwork carpenter\nAble to read structural drawings and take accurate measurements\nSafe working at height and with power tools\nTeam player, punctual; driving licence is a plus')
on conflict (id) do nothing;

-- ============================================================
-- AFTER creating your CRM login (Authentication → Users → Add user),
-- run this ONE line with your email to give that login access to the CRM:
--
--   insert into public.staff (user_id, email) select id, email from auth.users where email = 'YOUR-EMAIL@example.com';
-- ============================================================
