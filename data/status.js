// Single source of truth for subject coverage status + BOLE topic branches.
// Used by topic-map.html (renders the map) and scripts/next-day.js (rotation logic).
// status: "done" | "partial" | "todo" — update by hand as subjects clear the
// "done" bar in plan.html (index built + 3-5 clean drills survived without it).
const SUBJECTS_STATUS = [
{name:"Civil Practice & Procedure", status:"done", topics:[
  "Court system & subject matter jurisdiction",
  "Commencement of action & service of process",
  "Personal jurisdiction & long-arm (CPLR 301/302)",
  "Venue & forum non conveniens",
  "Statutes of limitations, tolling, renewal actions",
  "Appearances & pleadings — types, cross-claims, verification, amendment",
  "Parties — necessary/proper, third-party practice",
  "Provisional remedies — attachment, injunction, notice of pendency",
  "Motions — to dismiss, summary judgment, relief from judgment",
  "Disclosure — scope, interrogatories",
  "Special proceedings & Article 78",
  "Alternative dispute resolution — arbitration, mediation",
  "Appeals — scope, timing, routes to AD / Court of Appeals",
]},

{name:"Torts & Tort Damages", status:"todo", topics:[
  "Comparative negligence & assumption of risk",
  "Landowner liability; negligent supervision/entrustment",
  "Negligent infliction of emotional distress (zone of danger)",
  "Labor Law §§240/241 — construction worker standard of care",
  "Vicarious liability — Dram Shop Act, permissive user, parent/child",
  "Wrongful death actions",
  "Negligent misrepresentation to non-contractual parties",
  "Contribution, indemnification, CPLR Article 16 (joint & several caps)",
  "Other torts — defamation per se, invasion of privacy, prima facie tort",
  "No-Fault Insurance — basic economic loss, serious injury threshold, first-party benefits",
  "Municipal tort liability — governmental vs proprietary function, special duty, notice of claim",
]},

{name:"Trusts, Wills & Estates", status:"todo", topics:[
  "Intestate succession (EPTL 4-1.1) & disqualification rules",
  "Will execution requirements & codicils",
  "Revocation — physical act, writing, revival, dependent relative revocation, divorce",
  "Construction problems — lapsed legacies, ademption, advancement, class gifts",
  "Will contests — capacity, undue influence, fraud, no-contest clauses",
  "Non-probate transfers — joint tenancy, Totten trusts, TOD accounts, life insurance",
  "Family protection — spousal elective share, pretermitted child",
  "Health care proxies & powers of attorney",
  "Trusts — creation, revocable/irrevocable/testamentary/pour-over/charitable",
  "Rule against perpetuities",
]},

{name:"Contracts", status:"todo", topics:[
  "Formation & enforceability — mutual vs unilateral mistake, capacity, unconscionability",
  "Consideration",
  "Statute of Frauds",
  "Third-party beneficiary contracts — intended vs incidental",
  "Constructive trusts",
  "Employment contracts",
  "Admissibility of extrinsic/parol evidence",
]},

{name:"Business Relationships", status:"todo", topics:[
  "Corporations — formation, certificate of incorporation, bylaws",
  "Corporations — shareholders' rights (dissent, judicial dissolution)",
  "Corporations — directors & officers (election, interested directors, duties, BJR)",
  "Professional service corporations",
  "LLCs — formation, management, operating agreements, professional LLCs",
  "Partnerships — general, limited, registered LLPs",
]},

{name:"Evidence", status:"todo", topics:[
  "Judicial notice — law vs adjudicative facts",
  "Relevancy — character evidence, uncharged crimes (Molineaux), habit",
  "Witness competency & impeachment (prior inconsistent statements, convictions, Sandoval)",
  "Expert testimony & scientific evidence (Frye)",
  "Privileges — spousal, attorney-client, physician/psychologist-patient, self-incrimination",
  "Hearsay definition & exceptions",
  "  Admissions, present sense impressions, medical diagnosis statements",
  "  Business records (Johnson v. Lutz gap), former testimony/depositions",
]},

{name:"Criminal Law & Procedure", status:"todo", topics:[
  "Mental culpability & mistake of fact/law",
  "Defenses — mental disease, extreme emotional disturbance, intoxication, entrapment, justification, renunciation",
  "Core crimes — assault, homicide (murder/manslaughter/felony murder), sex offenses, burglary, larceny, robbery",
  "Inchoate crimes — solicitation, conspiracy, attempt, facilitation",
  "Detention & warrantless arrest (De Bour levels)",
  "Search & seizure — with/without warrant",
  "Confessions & right to counsel — indelible attachment, voluntariness",
  "Identification procedures — photo, corporeal, in-court",
  "Speedy trial (CPL 30.30), double jeopardy",
  "Grand jury testimony & immunity, accomplice testimony corroboration",
]},

{name:"Professional Responsibility", status:"todo", topics:[
  "Lawyer-client relationship — scope, communication, withdrawal",
  "Confidentiality & exceptions",
  "Conflicts of interest — current clients, imputed disqualification, organization as client",
  "Fees & retainer agreements; prohibited/contingent fees",
  "Safeguarding client property — IOLA, commingling, bookkeeping",
  "Advertising, referrals, solicitation",
  "Duties to third persons & opposing counsel",
  "Litigation conduct — non-meritorious claims, fairness",
  "Regulation of the profession — registration, CLE, discipline, unauthorized practice",
]},

{name:"Real Property", status:"partial", topics:[
  "Landlord-tenant — lease formation, tenancy types, assignment/sublease",
  "Warranty of habitability, holdovers, termination of tenancy",
  "Summary proceedings & remedies for breach",
  "Real property contracts — Statute of Frauds, condition of property, risk of loss",
  "Mortgages — lien theory, transfers, foreclosure enforcement",
  "Title — concurrent estates (joint tenancy/tenancy by entirety)",
  "Adverse possession",
  "Recording act & priorities",
  "Restrictive covenants",
]},

{name:"Matrimonial & Family Law", status:"partial", topics:[
  "Common law marriage recognition; prenup/postnup agreements",
  "Matrimonial actions — grounds/defenses, jurisdiction, residency",
  "Equitable distribution — separate vs marital property",
  "Support — spousal maintenance, Child Support Standards Act, modification",
  "Filiation — paternity, equitable estoppel",
  "Child protective proceedings — abuse/neglect, termination of parental rights",
  "Family offense proceedings",
  "Juvenile delinquency & PINS",
  "Adoption — who may adopt/be adopted, consent, post-adoption rights",
  "Custody — best interests standard, visitation, UCCJEA, relocation",
]},

{name:"Conflict of Laws", status:"partial", topics:[
  "Choice of law — torts (Neumeier factors)",
  "Choice of law — contracts",
  "Choice of law — estates",
  "Substantive vs procedural dichotomy",
  "Local public policy as defense against foreign law",
]},

{name:"Administrative Law", status:"partial", topics:[
  "Rulemaking — power & statutory procedure (SAPA)",
  "Publication of rules — NYCRR, State Register",
  "Adjudication — due process, discovery, hearing rules, subpoenas",
  "Res judicata & collateral estoppel effect of agency decisions",
  "Judicial review — standing, exhaustion, ripeness, finality",
  "Article 78 review — law, fact, substantial evidence, discretionary review",
  "Public disclosure — FOIL, Open Meetings Law",
]},
];

if(typeof module !== 'undefined' && module.exports) module.exports = SUBJECTS_STATUS;
