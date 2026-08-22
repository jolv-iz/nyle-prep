// Day 3 — cold, closed-book, weighted mix across 12 subjects.
// Second-pass variety: Day 1+2 already touched every branch at least once
// for most subjects, so this day mixes remaining untouched branches with
// different sub-rules/fact patterns within already-touched branches.
const DAY_META = {day: 3, label: 'Day 3 — 50 Questions', sub: 'Cold, closed-book · weighted mix across 12 subjects'};
const QUESTIONS = [
// ===== CIVIL PRACTICE & PROCEDURE (7) =====
{subject:"Civil Practice & Procedure", topic:"Personal jurisdiction & long-arm (CPLR 301/302)", stem:"A defendant corporation is incorporated and headquartered in New Jersey but maintains a permanent, continuous, and substantial physical presence in New York. A New York court's jurisdiction over this defendant, even on a claim unrelated to its New York activities, would most likely rest on:",
choices:["CPLR 302 long-arm jurisdiction only.","CPLR 301 general jurisdiction, based on the defendant 'doing business' in New York on a permanent and continuous basis.","Diversity jurisdiction, which only federal courts may exercise.","No jurisdiction is possible without an in-state agent for service."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Statutes of limitations, tolling, renewal actions", stem:"A plaintiff discovers a fraud that was committed against them 5 years ago in New York. Under CPLR 213(8), the action for fraud must generally be commenced within:",
choices:["The greater of six years from the fraud or two years from when it was discovered (or should have been discovered).","Exactly two years from the date of the fraudulent act, with no discovery rule.","One year from the date of the fraudulent act.","There is no statute of limitations for fraud claims."], answer:0},

{subject:"Civil Practice & Procedure", topic:"Appearances & pleadings", stem:"A plaintiff serves a complaint and then wants to amend it to add a new cause of action. Under CPLR 3025(a), a party may amend a pleading once as of right:",
choices:["At any time, without limitation, throughout the litigation.","Within 20 days after serving it, or before the period to respond to it expires, whichever is later.","Only with the opposing party's written consent.","Never; all amendments require a motion and court order."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Motions — to dismiss, summary judgment, relief from judgment", stem:"A defendant wants to challenge the legal sufficiency of a complaint before ever filing an answer. The appropriate vehicle, and its timing relative to summary judgment, is:",
choices:["A CPLR 3212 summary judgment motion, which may only be made before an answer is served.","A CPLR 3211 pre-answer motion to dismiss; CPLR 3212 summary judgment, by contrast, generally cannot be made until issue has been joined (i.e., after an answer is served).","Either motion may be made interchangeably at any time with identical standards.","There is no pre-answer vehicle to challenge a complaint's sufficiency in New York."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Disclosure", stem:"A party fails to comply with a court-ordered disclosure obligation without reasonable excuse. Under CPLR 3126, the court may impose which sanction?",
choices:["No sanction is available; disclosure orders are purely advisory.","Sanctions ranging from precluding evidence to striking a pleading or entering a default judgment, at the court's discretion based on the willfulness and prejudice involved.","Only a monetary fine payable to the court, never an evidentiary or dispositive sanction.","Automatic dismissal with prejudice in every instance, with no judicial discretion."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Venue & forum non conveniens", stem:"An action is commenced in a county that is not a proper venue under CPLR 503. The defendant's proper procedural response, and its timing, is:",
choices:["Ignoring the defect, since improper venue never affects the action.","Serving a written demand to change venue with (or before) the answer, and moving to change venue if plaintiff doesn't consent within the statutory period.","Immediately refiling the action in a different court.","Waiting until trial to raise the issue for the first time."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Appeals", stem:"A Supreme Court order denies a defendant's motion to dismiss (an interlocutory, non-final order). Under CPLR 5701, may the defendant appeal immediately, before final judgment?",
choices:["No — New York, unlike federal practice, never permits appeals from interlocutory orders.","Yes — New York generally permits an appeal as of right from most interlocutory orders, unlike the narrower federal final-judgment rule.","Only if the Court of Appeals grants permission first.","Only if the parties stipulate to permit the appeal."], answer:1},

// ===== TORTS & TORT DAMAGES (5) =====
{subject:"Torts & Tort Damages", topic:"Landowner liability; negligent supervision/entrustment", stem:"A visitor is injured by a dangerous condition on private property in New York. Regarding the landowner's duty of care, New York law:",
choices:["Applies rigid, separate duty standards depending on whether the visitor is a trespasser, licensee, or invitee, with trespassers owed no duty at all.","Applies a single, unified standard of reasonable care under the circumstances, with the visitor's status as one relevant factor rather than a rigid category (Basso v Miller).","Imposes strict liability on landowners for any injury occurring on their property.","Never imposes any duty on a landowner toward a visitor who did not pay for entry."], answer:1},

{subject:"Torts & Tort Damages", topic:"Labor Law §§240/241 — construction worker standard of care", stem:"A construction worker is injured by a hazard covered by a specific Industrial Code provision, but the injury is not elevation-related (so Labor Law § 240 does not apply). The worker may still have a viable claim under:",
choices:["Nothing further; only § 240 provides a remedy for construction injuries.","Labor Law § 241(6), which imposes a non-delegable duty to comply with specific Industrial Code safety rules, regardless of elevation-related risk.","A claim is only viable if the worker's own employer, not the owner or general contractor, is sued.","Labor Law § 240 by analogy, extended to cover any workplace hazard."], answer:1},

{subject:"Torts & Tort Damages", topic:"No-Fault Insurance — basic economic loss, serious injury threshold, first-party benefits", stem:"A plaintiff injured in an auto accident claims a '90/180-day' category of serious injury under Insurance Law § 5102(d). This category generally requires:",
choices:["Any injury lasting more than a single day.","A medically determined injury or impairment preventing the plaintiff from performing substantially all of their usual daily activities for at least 90 of the first 180 days following the accident.","Permanent loss of a body part, which is a wholly separate category.","Nothing beyond the plaintiff's own subjective claim of pain."], answer:1},

{subject:"Torts & Tort Damages", topic:"Vicarious liability — Dram Shop Act, permissive user, parent/child", stem:"A tavern unlawfully sells alcohol to a visibly intoxicated patron who later injures a third party in a car accident. Is the tavern's liability under the Dram Shop Act civil, criminal, or both?",
choices:["Purely criminal; the Dram Shop Act creates no civil cause of action.","Civil — General Obligations Law § 11-101 creates a civil cause of action for injured third parties, separate from any criminal liability for the unlawful sale.","Neither; only the intoxicated patron can be held liable.","Civil liability only if the tavern is also convicted criminally first."], answer:1},

{subject:"Torts & Tort Damages", topic:"Other torts — defamation per se, invasion of privacy, prima facie tort", stem:"A speaker makes a defamatory statement about a matter of public concern regarding a private figure, but the statement was made in a setting protected by a qualified (common-interest) privilege. To overcome this privilege, the plaintiff must generally show:",
choices:["Nothing further; qualified privilege is never a valid defense to defamation.","Common-law or constitutional 'actual malice' — that the statement was made with knowledge of falsity or reckless disregard for the truth (or spite/ill will, depending on the privilege), defeating the privilege.","That the statement was merely false, without more.","That the speaker is a public figure."], answer:1},

// ===== TRUSTS, WILLS & ESTATES (5) =====
{subject:"Trusts, Wills & Estates", topic:"Intestate succession (EPTL 4-1.1) & disqualification rules", stem:"A decedent dies intestate, survived by two children but no spouse. Under EPTL 4-1.1, the estate is distributed:",
choices:["Entirely to the state, since there is no spouse.","100% to the issue, by representation.","One-half to each child's spouse.","Nothing to the children until they reach age 30."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Will contests — capacity, undue influence, fraud, no-contest clauses", stem:"A will contest alleges the testator lacked testamentary capacity. The relevant standard generally asks whether the testator, at the time of execution, understood:",
choices:["Complex tax and financial planning consequences of the will.","The nature and extent of their property, the natural objects of their bounty, and the plan of disposition being made.","Nothing beyond their own name and the date.","The precise legal meaning of every clause, as would a licensed attorney."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Non-probate transfers — joint tenancy, Totten trusts, TOD accounts, life insurance", stem:"A decedent held a brokerage account registered as 'transfer on death' (TOD) to a named beneficiary. Upon the decedent's death, this account:",
choices:["Must pass through probate like any other estate asset.","Passes directly to the named beneficiary outside of probate, similar to a Totten trust bank account.","Is void, since TOD registrations are not recognized for securities accounts in New York.","Passes only if a will separately confirms the TOD designation."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Health care proxies & powers of attorney", stem:"A principal wants to grant an agent broad authority to handle financial affairs using New York's standard statutory short form power of attorney. Under GOL 5-1501 et seq., gifts by the agent exceeding the annual statutory threshold generally require:",
choices:["No special authorization; the basic short form automatically permits unlimited gifting.","A separate 'Statutory Gifts Rider' expressly granting that authority.","Court approval in every instance, regardless of any rider.","Gifts are never permitted under a power of attorney in New York."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Trusts — creation, revocable/irrevocable/testamentary/pour-over/charitable", stem:"A trust instrument includes a spendthrift provision restricting a beneficiary's ability to transfer their interest. Under New York law, this provision generally:",
choices:["Has no effect; spendthrift provisions are unenforceable in New York.","Prevents the beneficiary from voluntarily or involuntarily transferring their interest, generally shielding it from most creditors before distribution.","Only restricts voluntary transfers, never protects against creditors.","Applies only to testamentary trusts, never lifetime trusts."], answer:1},

// ===== MATRIMONIAL & FAMILY LAW (5) =====
{subject:"Matrimonial & Family Law", topic:"Juvenile delinquency & PINS", stem:"A 12-year-old is accused of conduct that would be a crime if committed by an adult. Absent a Raise the Age provision routing the matter elsewhere, this is most likely handled as a:",
choices:["Criminal prosecution in adult criminal court.","Juvenile delinquency proceeding in Family Court.","A PINS (Person In Need of Supervision) proceeding, since PINS covers only status offenses like truancy, not crimes.","No proceeding at all; children under 16 cannot be subject to any court proceeding."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Equitable distribution", stem:"During the marriage, one spouse receives a gift of money from a parent and keeps it in an account titled solely in that spouse's name, never mixing it with marital funds. Under DRL 236(B), this property is generally treated as:",
choices:["Marital property subject to equitable distribution, since it was acquired during the marriage.","Separate property, since gifts from a third party to one spouse are excluded from the marital estate absent commingling or transmutation.","Automatically split 50/50 regardless of its separate character.","Marital property only if the other spouse contributed labor to the marriage generally."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Support — spousal maintenance, Child Support Standards Act, modification", stem:"A New York court awarding post-divorce spousal maintenance generally applies:",
choices:["No guidelines whatsoever; awards are entirely ad hoc with no statutory formula.","A statutory guideline formula (with an income cap) similar in structure to the Child Support Standards Act, along with duration guidelines tied to the length of the marriage.","The exact same percentage-of-income formula used for child support, with no distinction.","A fixed lifetime award regardless of the marriage's length."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Matrimonial actions — grounds/defenses, jurisdiction, residency", stem:"In addition to no-fault irretrievable breakdown under DRL 170(7), New York divorce law:",
choices:["Abolished all fault-based grounds once no-fault divorce was enacted.","Still recognizes fault-based grounds, such as cruel and inhuman treatment, abandonment, imprisonment, and adultery, alongside the no-fault ground.","Only recognizes adultery as a valid ground for divorce.","Requires proof of fault in every divorce action, even under DRL 170(7)."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Custody — best interests standard, visitation, UCCJEA, relocation", stem:"A custodial parent wishes to relocate a significant distance away with the child, over the objection of the noncustodial parent. Under Tropea v Tropea, the court applies:",
choices:["An automatic presumption against relocation.","A best-interests analysis weighing all relevant factors (including the reasons for the move, the impact on the relationship with the noncustodial parent, and the child's needs) rather than a rigid presumption.","An automatic presumption in favor of relocation for any custodial parent.","No standard at all; relocation is entirely unregulated by courts."], answer:1},

// ===== CRIMINAL LAW & PROCEDURE (5) =====
{subject:"Criminal Law & Procedure", topic:"Justification / deadly force", stem:"A person is defending against a non-deadly physical attack. Compared to the standard for using deadly physical force, the standard for justified use of ordinary (non-deadly) physical force in self-defense is:",
choices:["Identical to the deadly force standard, including the same duty-to-retreat rules.","Generally lower — a person may use non-deadly force when they reasonably believe it is necessary to defend against what they reasonably believe to be the use or imminent use of unlawful physical force, without the same retreat analysis required for deadly force.","Higher, since any use of force at all requires the same showing as deadly force.","Nonexistent; New York does not justify non-deadly force in self-defense."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Larceny", stem:"Under New York's consolidated larceny statute, the degree of larceny (petit vs. grand, and grand larceny's sub-degrees) is generally determined primarily by:",
choices:["The larceny defendant's criminal history alone.","The value of the property stolen (and certain special categories, such as a firearm or vehicle, regardless of value).","Whether the theft occurred during the day or night.","The relationship between the defendant and the victim exclusively."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Indelible right to counsel", stem:"How does New York's 'indelible' right to counsel differ from the Miranda right to counsel under the Fifth Amendment?",
choices:["They are identical in scope and origin.","The indelible right (grounded in the state constitution/Sixth Amendment principles) attaches once formal proceedings begin or counsel is retained/appointed on the matter, and bars police-initiated questioning without counsel present regardless of a purported waiver — broader than Miranda's Fifth Amendment custodial-interrogation-based right, which can be waived.","Miranda rights are broader and supersede the indelible right whenever they conflict.","Neither right can ever be waived under any circumstances."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Double jeopardy", stem:"A defendant's single act violates both a New York state larceny statute and a federal statute. Under the dual sovereignty doctrine, may both the state and federal governments prosecute the defendant for the same underlying conduct?",
choices:["No — double jeopardy always bars any second prosecution by a different sovereign for the same conduct.","Yes — separate sovereigns (state and federal) may each prosecute for the same conduct without violating double jeopardy, since each vindicates a different sovereign's interest.","Only the sovereign that files first may ever prosecute.","Only if the defendant consents to both prosecutions."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Speedy trial (CPL 30.30)", stem:"In computing the time within which the prosecution must be ready for trial under CPL 30.30, which of the following periods is generally excluded from the running of the clock?",
choices:["No periods are ever excluded; the clock runs continuously with no exceptions.","Reasonable periods of delay resulting from pretrial motions and periods of delay to which the defendant consents.","Any delay caused by the prosecution's own scheduling convenience.","Time during which the defendant is out on bail, automatically."], answer:1},

// ===== PROFESSIONAL RESPONSIBILITY (4) =====
{subject:"Professional Responsibility", topic:"Litigation", stem:"An attorney files a claim knowing it lacks any good faith basis in law or fact, purely to harass an opposing party. Under RPC Rule 3.1, this conduct is:",
choices:["Permissible, since attorneys have unlimited discretion over what claims to file.","Prohibited — a lawyer shall not bring or defend a proceeding, or assert an issue, unless there is a basis in law and fact that is not frivolous.","Permissible as long as the client requested it in writing.","Only prohibited if the claim is ultimately unsuccessful."], answer:1},

{subject:"Professional Responsibility", topic:"Conflicts of interest", stem:"An attorney previously represented a client in a matter and now wants to represent a new client adverse to the former client in a substantially related matter, without the former client's consent. Under RPC Rule 1.9, this representation is:",
choices:["Always permissible once the prior representation has ended.","Generally prohibited, since a lawyer owes ongoing duties to former clients regarding substantially related matters, absent informed consent.","Permissible only if the new client pays a higher fee.","Irrelevant, since duties to former clients terminate immediately upon the end of representation."], answer:1},

{subject:"Professional Responsibility", topic:"Confidentiality exceptions", stem:"An attorney's office inadvertently receives a privileged document that was clearly not intended for them. Under the professional conduct rules, the receiving attorney generally must:",
choices:["Immediately use the document to the client's advantage, regardless of the sender's rights.","Promptly notify the sender, so the sender can take protective measures.","Destroy the document without telling anyone.","Publish the document's contents in a court filing to gain a tactical advantage."], answer:1},

{subject:"Professional Responsibility", topic:"Safeguarding client funds", stem:"An attorney holds a client's funds that are nominal in amount or expected to be held only briefly. Under RPC Rule 1.15, these funds are typically deposited into:",
choices:["The attorney's personal account, since the amounts are too small to matter.","An IOLA (Interest on Lawyer Account) account, with the interest generated going to fund civil legal services rather than to the client or attorney.","No account at all; nominal funds need not be safeguarded.","A separate account solely in the client's name, requiring the client's own signature for any attorney transaction."], answer:1},

// ===== REAL PROPERTY (4) =====
{subject:"Real Property", topic:"Recording act", stem:"A grantee discovers that their deed is part of a 'wild deed' — a conveyance recorded outside the regular chain of title. Under New York's recording act principles, a wild deed:",
choices:["Always provides constructive notice to all subsequent purchasers, regardless of its location in the chain of title.","Generally fails to provide constructive notice to a subsequent purchaser who would not find it through a standard title search of the regular chain of title.","Automatically voids the underlying transaction.","Is irrelevant, since New York does not require recording at all."], answer:1},

{subject:"Real Property", topic:"Landlord-tenant — lease formation, tenancy types, assignment/sublease", stem:"A landlord forcibly removes a tenant's belongings and changes the locks without resorting to legal process, despite the tenant's lawful possession. Under RPAPL 853, the tenant may recover:",
choices:["Nothing, since self-help is always a permissible landlord remedy in New York.","Treble (triple) damages for an unlawful, forcible eviction carried out without legal process.","Only the cost of a new lock.","Damages only if the tenant can prove the landlord acted maliciously beyond mere unlawful conduct."], answer:1},

{subject:"Real Property", topic:"Adverse possession", stem:"Under New York's adverse possession statute (RPAPL 501 et seq., as amended), a claim of right may be established even where the possessor:",
choices:["Knew the true owner held title and possessed anyway, since actual knowledge always defeats a claim of right under current law.","Reasonably believed, based on a good faith claim, that the property was their own, even without formal color of title, under the modern statutory standard.","Never possessed the property at all.","Paid property taxes on the parcel for only one year."], answer:1},

{subject:"Real Property", topic:"Restrictive covenants", stem:"A restrictive covenant limiting land use is contained in a deed and intended to bind future owners of the burdened parcel. For this covenant to run with the land and bind successors, it generally must:",
choices:["Touch and concern the land, and the parties must have intended it to run with the land, with successors having notice of it.","Be recorded in a separate document from the deed to have any effect.","Apply only to commercial property, never residential property.","Automatically expire after one year regardless of its terms."], answer:0},

// ===== EVIDENCE (4) =====
{subject:"Evidence", topic:"Present sense impression", stem:"A hearsay statement is made by a declarant immediately after witnessing a car accident, describing what just happened, while still under the stress of the event. Beyond present sense impression, this statement might also qualify as an:",
choices:["Excited utterance, since it was made under the stress of a startling event before there was time to fabricate.","Admission, since only the declarant's own statements against interest qualify.","Business record, since it describes an event.","Dying declaration, since car accidents are inherently life-threatening."], answer:0},

{subject:"Evidence", topic:"Dead Man's Statute", stem:"In an action against a decedent's estate, the estate's representative calls the interested witness (whom CPLR 4519 would otherwise bar from testifying about a personal transaction with the deceased) and cross-examines that witness about the very transaction at issue. This questioning by the estate:",
choices:["Has no effect on the Dead Man's Statute bar.","Generally waives the Dead Man's Statute protection as to that transaction, opening the door to further related testimony.","Is itself barred, since the estate can never question its own adverse witness.","Automatically results in dismissal of the estate's defense."], answer:1},

{subject:"Evidence", topic:"Relevancy — character evidence, uncharged crimes (Molineaux), habit", stem:"Evidence that a person always follows the exact same specific routine when leaving for work each morning (habit evidence) is generally treated, for admissibility purposes, as:",
choices:["Identical to character evidence, and therefore subject to the same strict limitations.","More freely admissible than character evidence, since habit describes a regular, specific response to a repeated situation rather than a general character trait.","Never admissible under any circumstances.","Admissible only in criminal cases, never civil cases."], answer:1},

{subject:"Evidence", topic:"Physician-patient privilege waiver", stem:"Which of the following is generally required for information to qualify under the physician-patient privilege in New York?",
choices:["The communication must have been made to a physician (or similar covered provider) acting in a professional capacity, and information was necessary to enable treatment.","The privilege applies to any conversation with any person who happens to be a physician, regardless of context.","The privilege only applies if the patient later becomes a party to litigation.","The privilege applies to statements made to an insurance adjuster."], answer:0},

// ===== CONTRACTS (3) =====
{subject:"Contracts", topic:"Employment contracts", stem:"Absent an express agreement fixing a definite duration or restricting the employer's right to terminate, New York employment relationships are generally presumed to be:",
choices:["For a fixed one-year term, by default.","At-will, terminable by either party at any time, for any or no reason (subject to limited exceptions like unlawful discrimination).","Permanent, requiring good cause to terminate.","Governed exclusively by federal law, never state common law."], answer:1},

{subject:"Contracts", topic:"Statute of Frauds", stem:"A contract is made on January 1 and, by its explicit terms, cannot possibly be performed within one year of that date. Under GOL 5-701, the one-year period for Statute of Frauds purposes is measured from:",
choices:["The date performance is scheduled to begin.","The date the contract was made.","The date of the first payment under the contract.","There is no fixed starting point; it is left to the court's discretion in every case."], answer:1},

{subject:"Contracts", topic:"Formation & enforceability — mutual vs unilateral mistake, capacity, unconscionability", stem:"A court evaluating whether a contract term is unconscionable generally looks for:",
choices:["Only substantive unfairness in the contract's terms, since procedural fairness is irrelevant.","Both procedural unconscionability (unfairness in the bargaining process, such as unequal bargaining power or hidden terms) and substantive unconscionability (unfairness in the actual terms).","Only whether one party is a corporation and the other an individual.","Nothing; unconscionability is not recognized as a contract defense in New York."], answer:1},

// ===== ADMINISTRATIVE LAW (3) =====
{subject:"Administrative Law", topic:"Rulemaking procedure", stem:"After a state agency adopts a permanent rule following notice-and-comment rulemaking, where must that rule generally be published to have legal effect?",
choices:["Nowhere; agency rules take effect immediately upon internal agency approval with no publication requirement.","The rule is codified in NYCRR (New York Codes, Rules and Regulations) and published, with notice, in the State Register.","Only in a national federal register.","Only on the agency's internal, non-public intranet."], answer:1},

{subject:"Administrative Law", topic:"Article 78 standard of review", stem:"A party seeks Article 78 review, framed as being 'in the nature of mandamus to compel,' 'certiorari,' or 'prohibition.' These are examples of:",
choices:["Separate lawsuits entirely unrelated to Article 78.","The different traditional forms of relief that Article 78 consolidated into a single proceeding for reviewing governmental/administrative action.","Criminal, not civil, remedies.","Remedies available only in federal court."], answer:1},

{subject:"Administrative Law", topic:"Exhaustion of remedies", stem:"A party seeks to bypass an available administrative appeal and go straight to court, arguing that pursuing the administrative remedy would clearly be futile given the agency's publicly stated, fixed position. This is an example of:",
choices:["A situation where exhaustion is still absolutely required with no exceptions.","The futility exception to the exhaustion of administrative remedies doctrine.","An automatic waiver of the party's right to any judicial review at all.","A basis for immediate criminal contempt against the agency."], answer:1},

// ===== BUSINESS RELATIONSHIPS (3) =====
{subject:"Business Relationships", topic:"Corporations — directors & officers (election, interested directors, duties, BJR)", stem:"A corporate director has a personal financial interest in a transaction being approved by the board. For this interested-director transaction to avoid being voidable, it generally must be:",
choices:["Automatically valid regardless of disclosure, since directors always act in good faith.","Approved with the material facts disclosed and either approved by disinterested directors/shareholders or shown to be fair to the corporation.","Approved by the interested director alone, since they know the transaction best.","Never permitted under any circumstances, regardless of disclosure or fairness."], answer:1},

{subject:"Business Relationships", topic:"LLCs — formation, management, operating agreements, professional LLCs", stem:"A member of a New York LLC is sued personally by a creditor of the LLC for a debt of the business. Absent a personal guaranty or grounds to pierce the veil, the member's personal liability for that LLC debt is generally:",
choices:["Unlimited, identical to a general partner's liability.","Limited — members of an LLC generally are not personally liable for the LLC's debts and obligations, similar to corporate shareholders.","Limited only if the member is also a manager.","Determined solely by the member's percentage ownership interest."], answer:1},

{subject:"Business Relationships", topic:"Partnerships — general, limited, registered LLPs", stem:"A limited partner in a New York limited partnership begins actively participating in the control of the business beyond what the statute safely permits. This conduct may result in:",
choices:["No consequence; limited partners always retain full liability protection regardless of their conduct.","Loss of the limited partner's liability shield, exposing them to general-partner-like liability for the partnership's obligations.","Automatic dissolution of the entire limited partnership.","Conversion of the limited partnership into a corporation."], answer:1},

// ===== CONFLICT OF LAWS (2) =====
{subject:"Conflict of Laws", topic:"Choice of law — estates", stem:"A testator domiciled in New York at death owned personal property (not real property). Which jurisdiction's law generally governs the validity and construction of the will as to that personal property?",
choices:["The law of wherever the property happens to be physically located, regardless of domicile.","The law of the testator's domicile at death.","Federal law exclusively.","The law of the state where the will was physically printed."], answer:1},

{subject:"Conflict of Laws", topic:"Neumeier rules (torts)", stem:"Before applying the specific Neumeier rules to a loss-allocation tort conflict, a court must first determine whether there is a genuine conflict at all. This preliminary step distinguishes:",
choices:["Federal claims from state claims.","A 'true conflict' (where the interested jurisdictions' laws differ and each has a real interest in applying its own rule) from a 'false conflict' (where only one jurisdiction has a real interest, so its law simply applies).","Criminal conflicts from civil conflicts.","Nothing; Neumeier applies identically regardless of any such distinction."], answer:1},
];
