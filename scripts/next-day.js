#!/usr/bin/env node
// Computes the subject/question mix for the next NYLE drilling day.
//
// Usage:
//   node scripts/next-day.js
//   node scripts/next-day.js --history path/to/nyle-progress-*.json   (force the old file-based path)
//
// History source, in order of preference:
//   1. Supabase, authenticated as you via SUPABASE_EMAIL/SUPABASE_PASSWORD in
//      .env (copy .env.example -> .env and fill in the same email/password
//      you use to sign into the live site). Queries the 'attempts' table
//      with the same RLS-scoped access your own browser session has —
//      nothing broader. Reflects real drilling on any device, live.
//   2. Falls back to an exported nyle-progress-*.json (via --history, or
//      the newest match in the repo root/data/) if Supabase isn't
//      configured or the request fails — the original pre-Supabase path.
//
// Also reads:
//   - data/subjects.js  (fixed daily weighting across 12 subjects, sums to 50)
//   - data/status.js    (topic branches per subject, for coverage gaps)
//   - data/day-*.js     (topics already drilled, to spot repeats; also used
//                         to tell whether a day's attempts are complete)
//
// Prints: next day number, whether it's a review day (every 4th day per
// the plan), the fresh-day subject/question mix, rough topic-coverage
// gaps, and any subjects trending weak — as a steer for writing that
// day's actual questions, not a replacement for judgment.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SUBJECTS_WEIGHT = require(path.join(ROOT, 'data/subjects.js'));
const SUBJECTS_STATUS = require(path.join(ROOT, 'data/status.js'));
const { SUPABASE_URL, SUPABASE_ANON_KEY } = require(path.join(ROOT, 'data/supabase-config.js'));

function loadDayFile(file){
  const src = fs.readFileSync(file, 'utf8');
  const fn = new Function(src + '\nreturn {DAY_META, QUESTIONS};');
  return fn();
}

function listDayFiles(){
  return fs.existsSync(path.join(ROOT, 'data'))
    ? fs.readdirSync(path.join(ROOT, 'data')).filter(f => /^day-\d+\.js$/.test(f))
    : [];
}

function loadEnvFile(){
  const envPath = path.join(ROOT, '.env');
  if(!fs.existsSync(envPath)) return {};
  const env = {};
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const trimmed = line.trim();
    if(!trimmed || trimmed.startsWith('#')) return;
    const eq = trimmed.indexOf('=');
    if(eq === -1) return;
    env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  });
  return env;
}

async function fetchHistoryFromSupabase(){
  const env = loadEnvFile();
  const email = env.SUPABASE_EMAIL;
  const password = env.SUPABASE_PASSWORD;
  if(!email || !password){
    console.log('(.env has no SUPABASE_EMAIL/SUPABASE_PASSWORD — copy .env.example to .env and fill them in to read live Supabase history)');
    return null;
  }
  if(!SUPABASE_URL || SUPABASE_URL.includes('PASTE')){
    console.log('(data/supabase-config.js not configured — skipping Supabase)');
    return null;
  }

  let accessToken;
  try{
    const authRes = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { apikey: SUPABASE_ANON_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const authJson = await authRes.json();
    if(!authRes.ok || !authJson.access_token){
      console.log(`(Supabase sign-in failed: ${authJson.error_description || authJson.msg || authRes.status} — falling back to exported JSON)`);
      return null;
    }
    accessToken = authJson.access_token;
  }catch(e){
    console.log(`(Could not reach Supabase to sign in: ${e.message} — falling back to exported JSON)`);
    return null;
  }

  let attempts;
  try{
    const dataRes = await fetch(
      `${SUPABASE_URL}/rest/v1/attempts?select=day,subject,topic,chosen_index,correct_index,is_correct,answered_at&order=answered_at.asc`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${accessToken}` } }
    );
    if(!dataRes.ok){
      console.log(`(Supabase query failed: HTTP ${dataRes.status} — falling back to exported JSON)`);
      return null;
    }
    attempts = await dataRes.json();
  }catch(e){
    console.log(`(Could not query Supabase attempts: ${e.message} — falling back to exported JSON)`);
    return null;
  }

  if(!attempts.length){
    console.log('Loaded 0 attempts from Supabase (signed in OK, table just empty so far).');
    return [];
  }

  // Reconstruct the day-level history[] this script's logic expects,
  // from raw per-question attempts.
  const dayTotals = {};
  listDayFiles().forEach(f => {
    const dayNum = parseInt(f.match(/^day-(\d+)\.js$/)[1], 10);
    const { QUESTIONS } = loadDayFile(path.join(ROOT, 'data', f));
    dayTotals[dayNum] = QUESTIONS.length;
  });

  const byDay = {};
  attempts.forEach(a => {
    if(!byDay[a.day]) byDay[a.day] = { day: a.day, questionIndices: new Set(), score: 0, bySubject: {}, errors: [], lastAnsweredAt: a.answered_at };
    const d = byDay[a.day];
    d.questionIndices.add(a.subject + '|' + a.topic); // rough distinct-question proxy
    if(a.is_correct) d.score++;
    if(!d.bySubject[a.subject]) d.bySubject[a.subject] = { correct: 0, total: 0 };
    d.bySubject[a.subject].total++;
    if(a.is_correct) d.bySubject[a.subject].correct++;
    if(!a.is_correct) d.errors.push({ subject: a.subject, topic: a.topic, wrong: true });
    if(a.answered_at > d.lastAnsweredAt) d.lastAnsweredAt = a.answered_at;
  });

  const history = Object.values(byDay).map(d => {
    const total = Object.values(d.bySubject).reduce((sum, s) => sum + s.total, 0);
    const expectedTotal = dayTotals[d.day] || total;
    return {
      day: d.day,
      date: (d.lastAnsweredAt || '').split('T')[0],
      score: d.score,
      total,
      expectedTotal,
      complete: total >= expectedTotal,
      bySubject: d.bySubject,
      errors: d.errors,
    };
  });

  console.log(`Loaded ${attempts.length} attempt(s) from Supabase across ${history.length} day(s) (signed in as ${email}).`);
  return history;
}

function loadHistoryFromFile(){
  const argIdx = process.argv.indexOf('--history');
  let file = argIdx !== -1 && process.argv[argIdx + 1] ? process.argv[argIdx + 1] : null;
  if(!file){
    const dirs = [ROOT, path.join(ROOT, 'data')];
    const candidates = [];
    dirs.forEach(dir => {
      if(!fs.existsSync(dir)) return;
      fs.readdirSync(dir)
        .filter(f => /^nyle-progress-.*\.json$/.test(f))
        .forEach(f => candidates.push(path.join(dir, f)));
    });
    if(candidates.length === 0){
      console.log('(no exported progress file found either — assuming no days completed yet)');
      return [];
    }
    candidates.sort();
    file = candidates[candidates.length - 1];
  }
  const raw = JSON.parse(fs.readFileSync(file, 'utf8'));
  const historyRaw = raw['nyle-daily-history'];
  if(!historyRaw) return [];
  const history = JSON.parse(historyRaw).map(h => ({ ...h, complete: true }));
  console.log(`Loaded history from ${path.relative(ROOT, file)} — ${history.length} day(s) logged.`);
  return history;
}

async function loadHistory(){
  const forceFile = process.argv.includes('--history');
  if(!forceFile){
    const fromSupabase = await fetchHistoryFromSupabase();
    if(fromSupabase !== null) return fromSupabase;
  }
  return loadHistoryFromFile();
}

async function main(){
  const history = await loadHistory();
  const completedDays = history.filter(h => h.complete).map(h => h.day).sort((a, b) => a - b);
  const nextDay = completedDays.length ? Math.max(...completedDays) + 1 : 1;
  const isReviewDay = nextDay % 4 === 0;

  const incomplete = history.filter(h => !h.complete);
  if(incomplete.length){
    console.log(`(In-progress, not yet complete: ${incomplete.map(h => `Day ${h.day} (${h.total}/${h.expectedTotal})`).join(', ')})`);
  }

  console.log('');
  console.log(`=== Day ${nextDay} plan ===`);

  if(isReviewDay){
    console.log('Type: COMPREHENSIVE REVIEW (every 4th day) — no fresh material, retest flagged misses.');
    const reviewDays = [nextDay - 3, nextDay - 2, nextDay - 1].filter(d => d >= 1);
    const errorsByTopic = {};
    history.filter(h => reviewDays.includes(h.day)).forEach(h => {
      (h.errors || []).forEach(e => {
        const key = `${e.subject} — ${e.topic}`;
        errorsByTopic[key] = (errorsByTopic[key] || 0) + 1;
      });
    });
    const entries = Object.entries(errorsByTopic).sort((a, b) => b[1] - a[1]);
    if(entries.length === 0){
      console.log(`No flagged errors found for days ${reviewDays.join(', ')} — nothing to retest yet (history may be incomplete).`);
    } else {
      console.log(`Retest queue from days ${reviewDays.join(', ')} (${entries.length} distinct topic misses):`);
      entries.forEach(([k, c]) => console.log(`  - ${k}  (missed ${c}x)`));
    }
    return;
  }

  console.log('Type: fresh drill, weighted mix across all 12 subjects (fixed weighting — see data/subjects.js).');
  console.log('');
  console.log('Subject'.padEnd(32) + 'Qs');
  SUBJECTS_WEIGHT.forEach(s => console.log(s.name.padEnd(32) + s.dailyQs));
  console.log('Total'.padEnd(32) + SUBJECTS_WEIGHT.reduce((a, s) => a + s.dailyQs, 0));

  const dayFiles = listDayFiles();
  const usedTopics = {};
  dayFiles.forEach(f => {
    const { QUESTIONS } = loadDayFile(path.join(ROOT, 'data', f));
    QUESTIONS.forEach(q => {
      if(!usedTopics[q.subject]) usedTopics[q.subject] = new Set();
      usedTopics[q.subject].add(q.topic);
    });
  });

  console.log('');
  console.log(`Topics drilled so far across ${dayFiles.length} day file(s) (rough steer only — quiz "topic" tags`);
  console.log('are short labels, not exact matches to data/status.js branch headings):');
  SUBJECTS_STATUS.forEach(s => {
    const used = usedTopics[s.name] || new Set();
    console.log(`  ${s.name}: ${used.size} distinct topic(s) drilled / ${s.topics.length} branches in the official outline`);
  });

  if(history.length){
    const totals = {};
    history.forEach(h => {
      Object.entries(h.bySubject || {}).forEach(([subj, s]) => {
        if(!totals[subj]) totals[subj] = { correct: 0, total: 0 };
        totals[subj].correct += s.correct;
        totals[subj].total += s.total;
      });
    });
    const weak = Object.entries(totals)
      .map(([subj, s]) => ({ subj, pct: s.correct / s.total }))
      .filter(x => x.pct < 0.7)
      .sort((a, b) => a.pct - b.pct);
    console.log('');
    if(weak.length){
      console.log('Weak subjects across history so far (< 70% cumulative) — weight extra scrutiny here:');
      weak.forEach(x => console.log(`  - ${x.subj}: ${Math.round(x.pct * 100)}%`));
    } else {
      console.log('No subject currently below 70% cumulative.');
    }
  }
}

main();
