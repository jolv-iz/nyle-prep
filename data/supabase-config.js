// Supabase project connection info. Both values are safe to be public —
// the anon key is designed to sit in client-side code; access control is
// enforced by the RLS policies in sql/schema.sql, not by hiding this key.
// Fill these in from Project Settings -> API after creating the project.
const SUPABASE_URL = 'https://dbuopoxuosyrzhtxurct.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_lNioq1ZRIGlBVl67tQwzeQ_7xZZFi2f';

if(typeof module !== 'undefined' && module.exports) module.exports = { SUPABASE_URL, SUPABASE_ANON_KEY };
