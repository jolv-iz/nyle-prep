// Single shared Supabase client, built from data/supabase-config.js.
// Load order on every page: supabase-js CDN -> supabase-config.js -> this file.
window.supabaseClient = (window.supabase && typeof SUPABASE_URL !== 'undefined' && SUPABASE_URL && !SUPABASE_URL.includes('PASTE'))
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
