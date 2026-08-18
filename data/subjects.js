// Daily question allocation, 50 Q/day, weighted by topic-branch count
// (see data/status.js for the branch lists this was derived from).
// No official BOLE per-subject weighting exists — this is a transparent
// proxy, not fact (see plan.html section 3a). dailyQs is stored explicitly
// rather than recomputed from branch counts because hitting exactly 50
// required a largest-remainder rounding adjustment, not naive round().
// Names must match data/status.js entries exactly (used as the join key).
const SUBJECTS_WEIGHT = [
  {name:"Civil Practice & Procedure", dailyQs:7},
  {name:"Torts & Tort Damages", dailyQs:5},
  {name:"Trusts, Wills & Estates", dailyQs:5},
  {name:"Matrimonial & Family Law", dailyQs:5},
  {name:"Criminal Law & Procedure", dailyQs:5},
  {name:"Professional Responsibility", dailyQs:4},
  {name:"Real Property", dailyQs:4},
  {name:"Evidence", dailyQs:4},
  {name:"Contracts", dailyQs:3},
  {name:"Administrative Law", dailyQs:3},
  {name:"Business Relationships", dailyQs:3},
  {name:"Conflict of Laws", dailyQs:2},
];

if(typeof module !== 'undefined' && module.exports) module.exports = SUBJECTS_WEIGHT;
