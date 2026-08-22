// Day 2 — cold, closed-book, weighted mix across 12 subjects.
// New topics only (cross-checked against data/day-01.js so Day 1 + Day 2
// together cover as many distinct BOLE branches as possible per subject —
// see data/status.js for the branch lists). Grounded against reference/*.txt
// (OCR'd BOLE course materials) for the 11 non-CPLR subjects, and against
// the source PDF's CPLR section (pages 33-68) for the 7 new CPLR topics.
const DAY_META = {day: 2, label: 'Day 2 — 50 Questions', sub: 'Cold, closed-book · weighted mix across 12 subjects'};
const QUESTIONS = [
// ===== CIVIL PRACTICE & PROCEDURE (7) =====
{subject:"Civil Practice & Procedure", topic:"Court system & subject matter jurisdiction", stem:"A plaintiff wants to bring a wrongful death action against a defendant, seeking damages exceeding $500,000. Which New York trial court has subject matter jurisdiction?",
choices:["The Civil Court of the City of New York, since it hears all tort claims regardless of amount.","The Supreme Court, which has exclusive subject matter jurisdiction over wrongful death claims.","The Family Court, since wrongful death implicates family relationships.","Any court of general jurisdiction, since wrongful death claims may be brought anywhere."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Commencement of action & service of process", stem:"A plaintiff wants to commence a civil action in New York Supreme Court before the statute of limitations expires. Under CPLR 304, the action is commenced when:",
choices:["The defendant is personally served with the summons and complaint.","The summons and complaint (or summons with notice) is filed with the county clerk.","The plaintiff mails the summons to the defendant's last known address.","The plaintiff's attorney signs the complaint."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Appearances & pleadings", stem:"A defendant is personally served with a summons and complaint by hand delivery within New York State. Under CPLR 320(a), the defendant must appear no later than:",
choices:["20 days after delivery.","30 days after delivery.","45 days after delivery.","60 days after delivery."], answer:0},

{subject:"Civil Practice & Procedure", topic:"Parties — necessary/proper, third-party practice", stem:"A defendant in a personal injury action believes a non-party contractor is actually responsible for the plaintiff's injuries and may be liable to the defendant for all or part of the plaintiff's claim. The defendant's proper procedural vehicle to bring that contractor into the lawsuit is:",
choices:["A motion to substitute parties.","A third-party action (impleader) under CPLR 1007.","A motion for interpleader.","A separate plenary action only, since new parties cannot be added to a pending case."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Disclosure", stem:"A party seeks disclosure from a treating physician who is not a party to the litigation and resides more than 100 miles from the place of trial. Under CPLR 3101, obtaining this disclosure generally requires:",
choices:["Nothing further; nonparty disclosure never requires additional formalities.","A subpoena, since disclosure from a nonparty in these circumstances is permitted but must be compelled via subpoena upon proper notice.","A court order is impossible to obtain since nonparties are entirely immune from disclosure.","The nonparty's ex parte consent only."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Alternative dispute resolution — arbitration, mediation", stem:"A party seeks to resist compelled arbitration under a written arbitration agreement. Under CPLR 7503, a party may resist arbitration only on the ground that:",
choices:["The underlying claim lacks merit.","No valid agreement to arbitrate was made, a condition precedent has not been complied with, or the claim is time-barred.","The arbitrator was not selected by a court.","Arbitration is generally disfavored in New York and may be resisted for any reason."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Appeals", stem:"A party is served with a copy of a judgment and written notice of its entry. Under CPLR 5513, the deadline to take an appeal as of right is:",
choices:["10 days after service.","20 days after service.","30 days after service.","60 days after service."], answer:2},

// ===== TORTS & TORT DAMAGES (5) =====
{subject:"Torts & Tort Damages", topic:"Comparative negligence & assumption of risk", stem:"A plaintiff is injured in an accident and found to be 40% at fault, with the defendant 60% at fault. Under New York's pure comparative negligence rule (CPLR 1411), the plaintiff's recovery is:",
choices:["Barred entirely, since the plaintiff was more than 30% at fault.","Reduced by 40%, the plaintiff's own percentage of fault, but not barred.","Barred only if the plaintiff was 50% or more at fault (a modified rule).","Unaffected by the plaintiff's own fault."], answer:1},

{subject:"Torts & Tort Damages", topic:"Negligent infliction of emotional distress (zone of danger)", stem:"A bystander witnesses her child struck by a car but is herself outside the zone of physical danger created by the defendant's negligence. Under New York's zone-of-danger rule, the bystander may recover emotional distress damages:",
choices:["Freely, since witnessing harm to a close family member is always sufficient.","Only if she herself was within the zone of physical danger created by the defendant's negligence.","Never, since New York does not recognize NIED in any form.","Only if the child died as a result of the accident."], answer:1},

{subject:"Torts & Tort Damages", topic:"Wrongful death actions", stem:"A decedent's distributee wishes to bring a wrongful death action in New York. Which of the following is true regarding this claim?",
choices:["The claim belongs to the decedent's estate and must be brought by the personal representative, for the pecuniary injuries of the distributees.","The claim may be brought by any distributee individually, without regard to estate administration.","Wrongful death damages include the decedent's own pain and suffering before death.","Wrongful death claims are not recognized in New York."], answer:0},

{subject:"Torts & Tort Damages", topic:"Negligent misrepresentation to non-contractual parties", stem:"An accountant prepares a financial report negligently, and a non-client third party relies on it to their detriment. Under New York law, the accountant may be liable to that non-client third party for negligent misrepresentation only if:",
choices:["Any reliance by any third party is foreseeable, regardless of the relationship.","There existed a relationship between the accountant and the third party approaching privity, such as actual knowledge the report would be used for a particular purpose by a known party.","The third party paid the accountant directly.","New York never recognizes negligent misrepresentation claims by non-clients."], answer:1},

{subject:"Torts & Tort Damages", topic:"Contribution, indemnification, CPLR Article 16 (joint & several caps)", stem:"Multiple defendants are found liable for a plaintiff's non-economic injuries in a personal injury action. Under CPLR Article 16, a defendant found less than 50% at fault is generally:",
choices:["Jointly and severally liable for the entire non-economic damages award, regardless of fault percentage.","Liable for non-economic damages only in proportion to that defendant's percentage of fault (with exceptions).","Not liable for any damages at all.","Entitled to full indemnification from the plaintiff."], answer:1},

// ===== TRUSTS, WILLS & ESTATES (5) =====
{subject:"Trusts, Wills & Estates", topic:"Intestate succession (EPTL 4-1.1) & disqualification rules", stem:"A decedent dies intestate, survived by a spouse and two children, with a net estate of $650,000. Under EPTL 4-1.1, the spouse's share is:",
choices:["The entire estate.","$50,000 plus one-half of the residue ($300,000), for a total of $350,000, with the remainder to the children by representation.","One-third of the estate only.","Nothing, since the children take priority."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Construction problems — lapsed legacies, ademption, advancement, class gifts", stem:"A testator's will bequeaths 'my 2015 Honda Accord' to a beneficiary, but the testator sold that car years before death and never replaced it. Under the doctrine of ademption, the bequest is:",
choices:["Automatically replaced with the cash value of the car at the time of death.","Extinguished — the beneficiary generally takes nothing, since the specific bequest's subject no longer exists in the estate.","Converted into a general legacy of equivalent value.","Void, invalidating the entire will."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Will contests — capacity, undue influence, fraud, no-contest clauses", stem:"A will contest alleges that the testator's adult child unduly influenced the testator, who was physically frail and dependent on the child, to leave the child a disproportionate share shortly before death. To establish undue influence, the contestant must generally show:",
choices:["Only that the disposition seems unfair.","Motive, opportunity, and actual exercise of influence that substituted the influencer's will for the testator's own.","That the testator lacked testamentary capacity — a separate and unrelated ground.","Undue influence cannot be raised once a will is admitted to probate."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Health care proxies & powers of attorney", stem:"A competent adult wants to appoint someone to make health care decisions if she later becomes incapacitated. Under Public Health Law § 2981, a valid health care proxy generally requires:",
choices:["A notarized writing signed only by the principal, with no witnesses.","A signed writing, executed with at least two adult witnesses, appointing the health care agent.","Oral designation to the treating physician is sufficient.","Health care proxies are not recognized in New York; only powers of attorney apply to health decisions."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Trusts — creation, revocable/irrevocable/testamentary/pour-over/charitable", stem:"A grantor wishes to create a valid lifetime trust in New York. Which of the following is generally required?",
choices:["A trust res (property), an identifiable beneficiary, a trustee, a valid purpose, and compliance with execution requirements.","Court approval before the trust can take effect.","The trust must be irrevocable to be valid.","The beneficiary must be a family member of the grantor."], answer:0},

// ===== MATRIMONIAL & FAMILY LAW (5) =====
{subject:"Matrimonial & Family Law", topic:"Common law marriage recognition; prenup/postnup agreements", stem:"A couple has lived together in New York for 15 years, holding themselves out as married, but never obtained a marriage license or solemnized a ceremony. Under New York law, is this a valid marriage?",
choices:["Yes, New York recognizes common law marriage after a sufficient period of cohabitation.","No, New York does not recognize common law marriages entered into within the state, though it will recognize one validly created under the law of a state that does.","Yes, but only if they have children together.","No, cohabitation is legally irrelevant and creates no rights whatsoever."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Filiation — paternity, equitable estoppel", stem:"A man is not the biological father of a child but has held the child out as his own, provided support, and developed a parent-child bond over several years, and the mother never disputed his paternity. Under the doctrine of equitable estoppel in paternity proceedings, a court may:",
choices:["Ignore the equitable relationship and always require a DNA test to determine paternity.","Estop a party from denying (or asserting) paternity where it would be inequitable and against the child's best interests, based on the developed parent-child relationship.","Automatically terminate the relationship, since only biological fathers have parental rights.","Apply equitable estoppel only if the man is genetically related."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Child protective proceedings — abuse/neglect, termination of parental rights", stem:"A Family Court petition alleges that a child's parent's conduct places the child's physical, mental, or emotional condition in imminent danger. This proceeding is most likely brought as:",
choices:["A criminal prosecution against the parent as the exclusive remedy.","An Article 10 child protective proceeding in Family Court, alleging abuse or neglect.","A matrimonial action in Supreme Court.","A proceeding that only the child, not any agency, may initiate."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Family offense proceedings", stem:"A person subjected to alleged domestic violence by a family or household member may seek an order of protection. Under the Family Court Act, jurisdiction over this family offense proceeding is:",
choices:["Exclusive to Family Court; criminal court has no role.","Concurrent between Family Court and criminal court, giving the petitioner a choice of forum.","Exclusive to criminal court.","Not available for unmarried household members."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Adoption — who may adopt/be adopted, consent, post-adoption rights", stem:"A stepparent seeks to adopt a spouse's child. Under New York adoption law, whose consent is generally required?",
choices:["No one's consent is ever required for a stepparent adoption.","The consent of the child's other legal parent (absent grounds like abandonment or unfitness) and, depending on age, the child's own consent.","Only the adopting stepparent's consent.","Only a court-appointed guardian's consent, never the other parent's."], answer:1},

// ===== CRIMINAL LAW & PROCEDURE (5) =====
{subject:"Criminal Law & Procedure", topic:"Mental culpability & mistake of fact/law", stem:"Under Penal Law § 15.05, New York recognizes which culpable mental states for criminal liability?",
choices:["Only 'intentionally' and 'knowingly.'","Intentionally, knowingly, recklessly, and with criminal negligence.","Only strict liability, without regard to mental state.","'Malice aforethought' is the sole standard for all crimes."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Inchoate crimes — solicitation, conspiracy, attempt, facilitation", stem:"A defendant agrees with another person to commit a burglary and one of them performs an overt act in furtherance of the agreement, but the burglary is never carried out. The defendant may be charged with:",
choices:["Nothing, since the burglary never occurred.","Conspiracy, since New York generally requires an overt act in furtherance of the agreement for most conspiracy charges.","Burglary itself, treated identically to the completed crime.","Only a violation, not a crime."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Detention & warrantless arrest (De Bour levels)", stem:"Under the De Bour framework governing police-civilian street encounters in New York, an officer's request for information (the least intrusive level) requires:",
choices:["Probable cause.","Reasonable suspicion of criminal activity.","An objective, credible reason, not necessarily indicative of criminality.","No justification whatsoever is required to detain someone."], answer:2},

{subject:"Criminal Law & Procedure", topic:"Search & seizure — with/without warrant", stem:"Police conduct a warrantless search of a defendant's vehicle after a lawful custodial arrest of the driver. Under New York law (which affords greater protection here than federal law), a search of the vehicle's passenger compartment incident to arrest is generally justified only if:",
choices:["It is always permitted whenever there has been a lawful custodial arrest, regardless of any other circumstance.","It is never permitted without a warrant.","The officer has a reasonable belief the arrestee could gain access to a weapon or evidence.","The vehicle was reported stolen."], answer:2},

{subject:"Criminal Law & Procedure", topic:"Grand jury testimony & immunity, accomplice testimony corroboration", stem:"A criminal conviction rests solely on the uncorroborated testimony of an accomplice. Under CPL 60.22, this conviction is:",
choices:["Valid, since accomplice testimony alone is always sufficient.","Invalid — a conviction cannot rest on accomplice testimony alone; it must be corroborated by independent evidence tending to connect the defendant to the crime.","Valid only if the accomplice testified under oath before a grand jury.","Irrelevant, since New York abolished the accomplice corroboration requirement."], answer:1},

// ===== PROFESSIONAL RESPONSIBILITY (4) =====
{subject:"Professional Responsibility", topic:"Lawyer-client relationship — scope, communication, withdrawal", stem:"A client asks an attorney to limit the scope of representation to a single discrete task rather than the full matter. Under RPC Rule 1.2, such a limitation is:",
choices:["Never permitted; representation must always be full-scope.","Permitted if reasonable under the circumstances and the client gives informed consent.","Permitted only in criminal matters.","Permitted only if opposing counsel agrees."], answer:1},

{subject:"Professional Responsibility", topic:"Fees & retainer agreements; prohibited/contingent fees", stem:"An attorney is asked to represent a client in a matrimonial action on a contingency fee basis tied to the amount of the divorce settlement. Under the Rules of Professional Conduct, this fee arrangement is:",
choices:["Permissible, like any other civil matter.","Generally prohibited — contingency fees are barred in domestic relations matters (as well as most criminal defense).","Permissible only if court-approved in advance.","Required in all matrimonial matters to protect the client."], answer:1},

{subject:"Professional Responsibility", topic:"Duties to third persons & opposing counsel", stem:"An attorney representing a plaintiff wants to discuss settlement directly with the defendant, whom the attorney knows is represented by counsel in the matter. Under RPC Rule 4.2, this direct communication is:",
choices:["Permitted at any time, since attorneys may always speak with any party.","Prohibited without the consent of the defendant's counsel (absent a court order or other authorization).","Permitted only if the communication is in writing.","Permitted only after litigation has formally commenced."], answer:1},

{subject:"Professional Responsibility", topic:"Regulation of the profession — registration, CLE, discipline, unauthorized practice", stem:"Under New York's attorney regulation rules, an admitted attorney must generally:",
choices:["Register only once, with no further ongoing obligations.","Biennially register with the Office of Court Administration and complete continuing legal education (CLE) requirements.","Re-take the bar exam every ten years.","Nothing is required after admission."], answer:1},

// ===== REAL PROPERTY (4) =====
{subject:"Real Property", topic:"Landlord-tenant — lease formation, tenancy types, assignment/sublease", stem:"A landlord and tenant orally agree to a five-year residential lease. Under New York's Statute of Frauds (GOL 5-703), this lease is:",
choices:["Fully enforceable as an oral agreement regardless of duration.","Unenforceable — a lease for a term exceeding one year generally must be in writing.","Enforceable only if the tenant has already paid a full year's rent.","Automatically converted to a month-to-month tenancy with no other effect."], answer:1},

{subject:"Real Property", topic:"Summary proceedings & remedies for breach", stem:"A landlord seeks to remove a tenant who has failed to pay rent. The proper, expedited procedural vehicle in New York is:",
choices:["A plenary ejectment action only.","A summary proceeding (nonpayment proceeding) in the appropriate local civil/housing court.","Self-help — the landlord may change the locks without any court process.","An Article 78 proceeding."], answer:1},

{subject:"Real Property", topic:"Real property contracts — Statute of Frauds, condition of property, risk of loss", stem:"Under General Obligations Law § 5-703, a contract for the sale of real property is generally enforceable only if:",
choices:["It is in writing and subscribed by the party to be charged (or their lawfully authorized agent).","It is purely oral but witnessed by two people.","Real estate contracts need not satisfy the Statute of Frauds in New York.","It is recorded with the county clerk before closing."], answer:0},

{subject:"Real Property", topic:"Mortgages — lien theory, transfers, foreclosure enforcement", stem:"New York follows the 'lien theory' of mortgages, meaning that until foreclosure:",
choices:["The mortgagee (lender) holds legal title to the property.","The mortgagor (borrower) retains title, and the mortgage merely creates a lien securing the debt.","Title is held in escrow by a neutral third party.","No party holds any interest in the property until the loan is repaid."], answer:1},

// ===== EVIDENCE (4) =====
{subject:"Evidence", topic:"Judicial notice — law vs adjudicative facts", stem:"A court is asked to take judicial notice of a well-established scientific fact not subject to reasonable dispute. This is an example of judicial notice of:",
choices:["An adjudicative fact, which always requires evidentiary proof regardless.","A legislative (general) fact — not the type of fact requiring individualized proof at trial.","Nothing; courts cannot take judicial notice of scientific facts.","A privileged communication."], answer:1},

{subject:"Evidence", topic:"Relevancy — character evidence, uncharged crimes (Molineaux), habit", stem:"In a criminal prosecution, the prosecution seeks to introduce evidence that the defendant committed an uncharged prior crime, to show identity based on a distinctive modus operandi. Under the Molineaux rule, such evidence is:",
choices:["Always inadmissible, since prior bad acts are per se excluded.","Admissible if relevant to a specific, recognized purpose (such as identity, intent, motive, common scheme) other than mere propensity, subject to a probative-value-versus-prejudice balancing.","Automatically admissible without any limiting instruction.","Admissible only if the defendant testifies."], answer:1},

{subject:"Evidence", topic:"Witness competency & impeachment (prior inconsistent statements, convictions, Sandoval)", stem:"Before a criminal defendant testifies, the defense requests a pretrial ruling on which of the defendant's prior convictions the prosecution may use for impeachment if the defendant takes the stand. This request is for a:",
choices:["Frye hearing.","Sandoval hearing.","Mapp hearing.","Huntley hearing."], answer:1},

{subject:"Evidence", topic:"Expert testimony & scientific evidence (Frye)", stem:"A party seeks to introduce expert testimony based on a novel scientific technique. Under New York's Frye standard, the technique's admissibility turns on whether:",
choices:["The technique is generally accepted as reliable within the relevant scientific community.","The trial judge personally believes the technique is reliable, regardless of scientific consensus.","The technique has been used in at least one prior New York case.","New York applies the federal Daubert standard instead of Frye."], answer:0},

// ===== CONTRACTS (3) =====
{subject:"Contracts", topic:"Consideration", stem:"A promisor makes a written promise to pay a debt that was previously discharged in bankruptcy, without any new consideration. Under New York's General Obligations Law, this promise is:",
choices:["Unenforceable, since consideration is always strictly required with no exceptions.","Enforceable despite the lack of new consideration, because GOL 5-1105 makes a written, signed promise to perform an otherwise unenforceable obligation binding without new consideration.","Enforceable only if witnessed by two people.","Automatically void as against public policy."], answer:1},

{subject:"Contracts", topic:"Constructive trusts", stem:"A party transfers property to another in reliance on a promise, and the transferee then breaches that confidential/fiduciary relationship by refusing to convey the property as promised, resulting in unjust enrichment. A court may impose:",
choices:["A resulting trust, requiring proof the parties intended a trust from the outset.","A constructive trust — an equitable remedy to prevent unjust enrichment, generally requiring a confidential relationship, a promise, a transfer in reliance on the promise, and unjust enrichment.","No remedy, since equitable trusts do not exist in New York.","Only money damages are available; property may never be returned."], answer:1},

{subject:"Contracts", topic:"Admissibility of extrinsic/parol evidence", stem:"Two parties sign a fully integrated written contract. One party later seeks to introduce evidence of a prior oral agreement that contradicts the written terms. Under the parol evidence rule, this evidence is:",
choices:["Always admissible to explain the parties' true intent.","Generally inadmissible to contradict the terms of a fully integrated written agreement, though it may be admissible for other purposes (e.g., to explain ambiguity, or to show fraud, mistake, or a separate agreement).","Admissible only if both parties consent in court.","Irrelevant, since New York does not recognize the parol evidence rule."], answer:1},

// ===== ADMINISTRATIVE LAW (3) =====
{subject:"Administrative Law", topic:"Adjudication", stem:"A state agency conducts an adjudicatory hearing required by law before revoking a license. Due process in this administrative adjudication generally requires:",
choices:["No notice or opportunity to be heard, since agencies are exempt from due process.","Adequate notice of the charges and a meaningful opportunity to be heard before an impartial decision-maker.","A jury trial identical to a criminal proceeding.","Only informal notice by phone is required."], answer:1},

{subject:"Administrative Law", topic:"Res judicata & collateral estoppel effect of agency decisions", stem:"A state agency, acting in a quasi-judicial capacity, renders a final determination on an issue after a full and fair opportunity to litigate. In a later court proceeding involving the same parties and the same issue, that determination:",
choices:["Has no preclusive effect whatsoever, since only court judgments can have preclusive effect.","May be given collateral estoppel (issue preclusion) effect, since quasi-judicial agency determinations can preclude relitigation of the same issue.","Must always be relitigated in full regardless of the prior proceeding.","Is binding only on the agency, never on the parties."], answer:1},

{subject:"Administrative Law", topic:"Public disclosure — FOIL, Open Meetings Law", stem:"A member of the public requests records from a state agency under the Freedom of Information Law (FOIL). Under Public Officers Law § 87, the agency:",
choices:["May deny the request for any reason it chooses, with no standard.","Must disclose the records unless they fall within a statutorily enumerated exemption, and the requester's purpose is generally irrelevant.","May only disclose records to New York residents.","Need not respond at all, since FOIL requests are purely discretionary."], answer:1},

// ===== BUSINESS RELATIONSHIPS (3) =====
{subject:"Business Relationships", topic:"Corporations — formation, certificate of incorporation, bylaws", stem:"To form a business corporation in New York, the incorporator(s) must generally file with the Department of State:",
choices:["Bylaws only; a certificate of incorporation is optional.","A certificate of incorporation, containing information such as the corporate name and purpose; bylaws are then typically adopted to govern internal management.","Nothing; corporations exist automatically upon first use of a corporate name.","Only a fictitious name certificate (DBA)."], answer:1},

{subject:"Business Relationships", topic:"Corporations — shareholders' rights (dissent, judicial dissolution)", stem:"A shareholder dissents from a fundamental corporate transaction (such as a merger) that will cash out their shares. Under the Business Corporation Law, the dissenting shareholder's primary remedy is generally:",
choices:["An automatic injunction blocking the transaction.","Appraisal rights — the right to receive the fair value of their shares in cash, in lieu of participating in the transaction.","No remedy at all; dissenters have no rights in New York.","Mandatory dissolution of the corporation."], answer:1},

{subject:"Business Relationships", topic:"Professional service corporations", stem:"A group of licensed physicians wants to form a professional service corporation (PC) in New York to practice medicine. Under the Business Corporation Law, shareholders of this PC must generally be:",
choices:["Any individual investor, regardless of licensure.","Individuals licensed to practice the same profession the PC was formed to provide.","Only non-professionals, to avoid conflicts of interest.","Publicly traded shareholders only."], answer:1},

// ===== CONFLICT OF LAWS (2) =====
{subject:"Conflict of Laws", topic:"Choice of law — contracts", stem:"A contract dispute arises between parties from different states, and the contract lacks an effective choice-of-law clause. New York courts generally apply which approach to determine the governing law for contract disputes?",
choices:["Always the law of New York, regardless of other contacts.","The 'center of gravity' or 'grouping of contacts' approach, applying the law of the jurisdiction with the most significant relationship to the transaction and the parties.","The law of the state where the lawsuit happens to be filed, with no other analysis.","Contract disputes never require a choice-of-law analysis."], answer:1},

{subject:"Conflict of Laws", topic:"Substantive vs procedural dichotomy", stem:"A New York court is applying another state's substantive law to a tort claim under choice-of-law rules. Regarding matters of procedure (such as rules of evidence or the mode of trial), the New York court will generally apply:",
choices:["The other state's procedural rules as well, since substance and procedure travel together.","New York's own procedural rules, since the forum applies its own procedural law even when applying another jurisdiction's substantive law.","No procedural rules at all in a multistate case.","Federal procedural rules exclusively."], answer:1},
];
