// List of available day-data files. quiz.html reads this to know what it
// can load and to pick the default day (first day not yet in history).
// Add a line here each time a new data/day-NN.js file is created.
const DAY_MANIFEST = [
  {day: 1, file: 'data/day-01.js'},
  {day: 2, file: 'data/day-02.js'},
  {day: 3, file: 'data/day-03.js'},
  // Day 4 intentionally absent: it's a comprehensive review day per the plan
  // (retests actual Day 1-3 misses), which can't be pre-written — it has to
  // be assembled from real drill results once Days 1-3 are actually done.
  {day: 5, file: 'data/day-05.js'},
  {day: 6, file: 'data/day-06.js'},
  {day: 7, file: 'data/day-07.js'},
];
