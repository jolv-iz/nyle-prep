-- Run after creating your Supabase Auth user. Replaces the open anon
-- policies with policies scoped to any authenticated session — since this
-- is a single-user tool with public signup disabled, "authenticated" means
-- "you, logged in," not "anyone with the API key."

drop policy if exists "anon can read attempts" on attempts;
drop policy if exists "anon can insert attempts" on attempts;

create policy "authenticated can read attempts"
  on attempts for select
  to authenticated
  using (true);

create policy "authenticated can insert attempts"
  on attempts for insert
  to authenticated
  with check (true);
