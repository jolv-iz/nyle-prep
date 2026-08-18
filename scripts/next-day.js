#!/usr/bin/env node
// Computes the subject/question mix for the next NYLE drilling day.
//
// Usage:
//   node scripts/next-day.js [--history path/to/nyle-progress-*.json]
//
// Reads:
//   - data/subjects.js  (fixed daily weighting across 12 subjects, sums to 50)
//   - data/status.js    (topic branches per subject, for coverage gaps)
//   - data/day-*.js     (topics already drilled, to spot repeats)
//   - an exported nyle-progress-*.json (via --history, or the newest
//     matching file in the repo root) for daily-history / error data.
//     Export that file from index.html's Backup box after each session and
//     drop it in the repo root before running this.
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

function loadDayFile(file){
  const src = fs.readFileSync(file, 'utf8');
  const fn = new Function(src + '\nreturn {DAY_META, QUESTIONS};');
  return fn();
}

function findHistoryFile(){
  const argIdx = process.argv.indexOf('--history');
  if(argIdx !== -1 && process.argv[argIdx + 1]) return process.argv[argIdx + 1];
  // exports may land in the repo root or in data/ — check both, take the newest overall
  const dirs = [ROOT, path.join(ROOT, 'data')];
  const candidates = [];
  dirs.forEach(dir => {
    if(!fs.existsSync(dir)) return;
    fs.readdirSync(dir)
      .filter(f => /^nyle-progress-.*\.json$/.test(f))
      .forEach(f => candidates.push(path.join(dir, f)));
  });
  if(candidates.length === 0) return null;
  candidates.sort();
  return candidates[candidates.length - 1];
}

function loadHistory(){
  const file = findHistoryFile();
  if(!file){
    console.log('(no exported progress file found in repo root — assuming no days completed yet; pass --history <file> if it lives elsewhere)');
    return [];
  }
  const raw = JSON.parse(fs.readFileSync(file, 'utf8'));
  const historyRaw = raw['nyle-daily-history'];
  if(!historyRaw) return [];
  const history = JSON.parse(historyRaw);
  console.log(`Loaded history from ${path.relative(ROOT, file)} — ${history.length} day(s) logged.`);
  return history;
}

function main(){
  const history = loadHistory();
  const completedDays = history.map(h => h.day).sort((a, b) => a - b);
  const nextDay = completedDays.length ? Math.max(...completedDays) + 1 : 1;
  const isReviewDay = nextDay % 4 === 0;

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
      console.log(`No flagged errors found for days ${reviewDays.join(', ')} — nothing to retest yet (history may be incomplete; check --history points at the latest export).`);
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

  const dayFiles = fs.existsSync(path.join(ROOT, 'data'))
    ? fs.readdirSync(path.join(ROOT, 'data')).filter(f => /^day-\d+\.js$/.test(f))
    : [];
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
