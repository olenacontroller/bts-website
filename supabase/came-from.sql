-- Where each visitor came from (Google, Facebook, Direct / app …). Run once in Supabase → SQL Editor. Safe to run again.
alter table public.leads add column if not exists came_from text check (came_from is null or char_length(came_from) <= 60);
alter table public.candidates add column if not exists came_from text check (came_from is null or char_length(came_from) <= 60);
alter table public.events add column if not exists came_from text check (came_from is null or char_length(came_from) <= 60);
notify pgrst, 'reload schema';
