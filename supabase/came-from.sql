-- Where each visitor came from + counting visits. Run once in Supabase → SQL Editor. Safe to run again.
alter table public.leads add column if not exists came_from text check (came_from is null or char_length(came_from) <= 60);
alter table public.candidates add column if not exists came_from text check (came_from is null or char_length(came_from) <= 60);
alter table public.events add column if not exists came_from text check (came_from is null or char_length(came_from) <= 60);
alter table public.events drop constraint if exists events_name_check;
alter table public.events add constraint events_name_check check (name in ('visit','call','whatsapp','quote_open','quote_sent','calc_open','calc_done','resolve_open','homecare_open','careers_open','job_apply','gallery_swipe','ai_open'));
notify pgrst, 'reload schema';
