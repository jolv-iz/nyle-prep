-- NYLE Prep — Supabase schema
-- Run this once in the Supabase project's SQL Editor (left sidebar → SQL Editor → New query).

create table if not exists attempts (
  id bigint generated always as identity primary key,
  day int not null,
  question_index int not null,
  subject text not null,
  topic text not null,
  stem text not null,
  choices jsonb not null,
  chosen_index int not null,
  correct_index int not null,
  is_correct boolean generated always as (chosen_index = correct_index) stored,
  answered_at timestamptz not null default now()
);

create index if not exists attempts_day_idx on attempts (day);
create index if not exists attempts_subject_idx on attempts (subject);

-- Row Level Security: this is a single-user personal tool with no login system,
-- so the anon key (public, embedded in the site's client-side JS) is what reads
-- and writes here. That means anyone who found the live site's JS could also
-- read/write this table directly via the API — same trust model as the site
-- itself being an unlisted-but-public URL. No real secrets live in this table
-- (quiz answers/scores), so this trade-off matches what was already decided
-- for hosting the site. If that stops being acceptable, the fix is adding
-- Supabase Auth (e.g. a magic-link login) and scoping policies to auth.uid()
-- instead of leaving them open to the anon role.
alter table attempts enable row level security;

create policy "anon can read attempts"
  on attempts for select
  to anon
  using (true);

create policy "anon can insert attempts"
  on attempts for insert
  to anon
  with check (true);

-- No update/delete policy for anon — rows are append-only from the client.
-- (Delete/fix mistakes directly in the Supabase Table Editor if ever needed.)
