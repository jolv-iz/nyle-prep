// Day 1 — cold, closed-book, weighted mix across 12 subjects.
// Extracted verbatim from the original quiz.html build (Aug 17-18, 2026).
const DAY_META = {day: 1, label: 'Day 1 — 50 Questions', sub: 'Cold, closed-book · weighted mix across 12 subjects'};
const QUESTIONS = [
// ===== CIVIL PRACTICE & PROCEDURE (7) =====
{subject:"Civil Practice & Procedure", topic:"Statute of limitations", stem:"A plaintiff wants to sue for breach of a written contract that was signed and breached 5 years ago in New York. Is the claim time-barred?",
choices:["Yes, the statute of limitations for contracts is 3 years.","Yes, the statute of limitations for contracts is 4 years.","No, the statute of limitations for a written contract in New York is 6 years.","No, there is no statute of limitations for written contracts."], answer:2},

{subject:"Civil Practice & Procedure", topic:"Venue", stem:"An action is being commenced in Supreme Court. Under CPLR 503, proper venue for a transitory action is generally based on:",
choices:["The location where the cause of action arose.","The county of residence of any party at the time the action was commenced.","The county where the defendant's attorney maintains an office.","The county with the most convenient courthouse for both parties."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Provisional remedies", stem:"A plaintiff seeks an order of attachment against a defendant's bank account. Which showing is generally required to obtain this provisional remedy?",
choices:["Only that the plaintiff is likely to succeed on the merits.","That the defendant is a non-domiciliary, or is about to dispose of assets in a manner tending to frustrate a judgment.","That the plaintiff has already obtained a judgment.","Attachment is unavailable in New York state courts."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Notice of pendency", stem:"A plaintiff commences an action affecting title to real property. To give constructive notice of the pending claim to future purchasers, the plaintiff should file:",
choices:["A notice of pendency (lis pendens) under CPLR 6501.","An order of attachment.","A preliminary injunction only.","A judgment lien with the county clerk."], answer:0},

{subject:"Civil Practice & Procedure", topic:"Article 78 / special proceedings", stem:"A licensed professional wants to challenge a state agency's final determination revoking her license, arguing the determination was not supported by substantial evidence. The proper procedural vehicle is:",
choices:["A plenary action for breach of contract.","An Article 78 proceeding.","A federal habeas corpus petition.","A motion to intervene in the agency's internal proceeding."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Long-arm jurisdiction", stem:"An out-of-state defendant, who has never physically entered New York, negotiated and signed a contract by phone and email with a New York company, and the contract was to be substantially performed in New York. A New York court's exercise of long-arm jurisdiction under CPLR 302 would most likely be based on:",
choices:["The defendant's domicile.","The defendant transacting business within New York.","The defendant owning real property in New York.","Diversity of citizenship."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Summary judgment", stem:"On a motion for summary judgment under CPLR 3212, once the moving party makes a prima facie showing of entitlement to judgment as a matter of law, the burden shifts to the opposing party to:",
choices:["Prove their case beyond a reasonable doubt.","Produce evidentiary proof in admissible form establishing a triable issue of fact.","File a cross-motion to dismiss.","Do nothing, as the burden never shifts."], answer:1},

// ===== TORTS & TORT DAMAGES (5) =====
{subject:"Torts & Tort Damages", topic:"No-fault serious injury", stem:"Under New York's No-Fault Insurance Law, a plaintiff seeking non-economic damages (pain and suffering) in an auto accident case must first establish:",
choices:["That the other driver was more than 50% at fault.","That the plaintiff suffered a 'serious injury' as defined by Insurance Law § 5102(d).","That the accident caused more than $50,000 in property damage.","Nothing further; non-economic damages are always available."], answer:1},

{subject:"Torts & Tort Damages", topic:"Labor Law 240/241", stem:"A construction worker falls from an unsecured scaffold while working on a building. Under Labor Law § 240, the worker's own comparative negligence:",
choices:["Bars recovery entirely.","Reduces the worker's recovery proportionally, like ordinary negligence.","Does not reduce or bar recovery, since § 240 imposes a form of absolute liability on the owner/contractor for elevation-related risks.","Is irrelevant because § 240 does not apply to falls from scaffolding."], answer:2},

{subject:"Torts & Tort Damages", topic:"Dram Shop Act", stem:"Under General Obligations Law § 11-101 (the Dram Shop Act), a tavern may be held liable for injuries caused by an intoxicated patron if the tavern:",
choices:["Served any alcohol to the patron at any point that evening.","Unlawfully sold or provided alcohol to a person who was visibly intoxicated, or to a minor.","Merely allowed the patron to remain on the premises after becoming intoxicated.","Is never liable, since the patron is the sole proximate cause."], answer:1},

{subject:"Torts & Tort Damages", topic:"Defamation per se", stem:"Which of the following statements would most likely constitute defamation per se under New York law, requiring no proof of special damages?",
choices:["A false statement that a person's restaurant has slow service.","A false statement that a person committed a serious crime.","A true but embarrassing statement about a person's personal life.","An opinion that a person is a poor public speaker."], answer:1},

{subject:"Torts & Tort Damages", topic:"Municipal tort liability", stem:"A plaintiff sues a municipality for negligently failing to provide adequate police protection, resulting in injury. To succeed on a negligence theory (as opposed to strict/absolute duty), the plaintiff must generally establish:",
choices:["Only that the municipality is a governmental entity.","A 'special relationship' or special duty running from the municipality to the plaintiff, beyond the general duty owed to the public.","That the municipality was engaged in a proprietary function.","Nothing beyond ordinary negligence elements — municipalities are treated like private defendants."], answer:1},

// ===== TRUSTS, WILLS & ESTATES (5) =====
{subject:"Trusts, Wills & Estates", topic:"Spousal right of election", stem:"A decedent's will leaves nothing to his surviving spouse. Under EPTL 5-1.1-A, the surviving spouse may elect to take:",
choices:["The greater of $50,000 or one-third of the net estate.", "A flat 50% of the net estate regardless of size.", "Nothing, since the will controls absolutely.", "One-third of the estate only if the spouse was married more than 10 years."], answer:0},

{subject:"Trusts, Wills & Estates", topic:"Revocation by divorce", stem:"A testator executes a will leaving his entire estate to his spouse. The couple later divorces, and the testator dies without updating the will. Under EPTL 5-1.4, the disposition to the former spouse is:",
choices:["Still valid, since the will was never formally revoked.","Automatically revoked by operation of law due to the divorce.","Valid only if the former spouse remarries someone else.","Valid unless a court specifically voids it in a separate proceeding."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Totten trusts", stem:"A depositor opens a bank account 'in trust for' his niece, retaining full control and access to the funds during his lifetime. This is best characterized as:",
choices:["An irrevocable trust that cannot be altered.","A Totten trust, revocable during the depositor's lifetime, passing to the beneficiary on death without probate.","A testamentary trust requiring probate.","An invalid transfer for lack of consideration."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Will execution requirements", stem:"Under EPTL 3-2.1, valid execution of a will in New York generally requires all of the following EXCEPT:",
choices:["The will is signed at the end by the testator.","The testator publishes the instrument as their will to the witnesses.","At least two attesting witnesses sign within a specified time period.","The will must be notarized by a notary public."], answer:3},

{subject:"Trusts, Wills & Estates", topic:"Rule against perpetuities", stem:"Under New York's rule against perpetuities (EPTL 9-1.1), a contingent future interest is generally valid only if it must vest, if at all:",
choices:["Within 100 years of creation, with no other limit.","Within lives in being at the creation of the interest, plus 21 years.","Within the lifetime of the settlor only.","There is no time limit under New York law."], answer:1},

// ===== MATRIMONIAL & FAMILY LAW (5) =====
{subject:"Matrimonial & Family Law", topic:"Equitable distribution", stem:"Under DRL 236(B), 'marital property' subject to equitable distribution generally includes:",
choices:["Only property titled jointly in both spouses' names.","All property acquired by either spouse during the marriage, regardless of whose name it is titled in, subject to certain exceptions.","Only property acquired before the marriage.","Only property specifically designated as marital in a written agreement."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Child Support Standards Act", stem:"Under the Child Support Standards Act (DRL 240(1-b)), the statutory percentage of combined parental income applied for child support obligations with one child is:",
choices:["10%", "17%", "25%", "35%"], answer:1},

{subject:"Matrimonial & Family Law", topic:"Grounds for divorce", stem:"A spouse seeks a no-fault divorce under DRL 170(7) based on irretrievable breakdown of the marriage. This ground requires:",
choices:["Proof of the other spouse's fault or misconduct.","That the marriage has broken down irretrievably for a period of at least six months, and resolution of ancillary economic/custody issues.","A minimum separation period of three years.","Mutual written consent notarized at least one year before filing."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Custody standard", stem:"In a contested custody dispute between two fit parents, a New York court applies which standard?",
choices:["The 'tender years' presumption favoring the mother.","The best interests of the child standard.","A strict presumption of joint custody.","Whichever parent filed first."], answer:1},

{subject:"Matrimonial & Family Law", topic:"UCCJEA / custody jurisdiction", stem:"Under the UCCJEA, a state generally has 'home state' jurisdiction to make an initial child custody determination if the child has lived in that state with a parent for:",
choices:["At least 30 days immediately before the proceeding.","At least six consecutive months immediately before the proceeding (or since birth if younger).","At least one full year.","Home state jurisdiction does not exist under the UCCJEA."], answer:1},

// ===== CRIMINAL LAW & PROCEDURE (5) =====
{subject:"Criminal Law & Procedure", topic:"Indelible right to counsel", stem:"A suspect is represented by counsel on a pending criminal matter. Police, aware of this representation, question the suspect about the same matter without counsel present, after obtaining a purported waiver. Under New York's indelible right to counsel doctrine, this waiver is:",
choices:["Valid, since the suspect voluntarily waived the right.","Invalid — once the right to counsel attaches and counsel is known to represent the suspect on the matter, police-initiated questioning without counsel present is barred regardless of waiver.","Valid only if given in writing.","Irrelevant, since New York does not recognize an indelible right to counsel."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Justification / deadly force", stem:"A person is attacked with deadly force by an intruder inside the person's own home. Regarding the duty to retreat before using deadly physical force in self-defense, New York law:",
choices:["Always requires retreat if it can be done with complete safety, with no exceptions.","Does not require retreat when the person is in their own dwelling and was not the initial aggressor (the 'castle doctrine' exception).","Never permits deadly force in self-defense under any circumstance.","Requires retreat only if the intruder is unarmed."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Larceny", stem:"Under New York's consolidated theft statute (Penal Law Article 155), 'larceny' includes conduct historically treated as separate common-law crimes such as:",
choices:["Only common-law trespassory taking.","Larceny by trick, false pretenses, and embezzlement, all consolidated under a single larceny statute.","Only robbery and burglary.","Larceny does not exist as a distinct crime in New York."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Double jeopardy", stem:"A defendant is acquitted of murder after a full jury trial. The prosecution, having discovered new and compelling evidence of guilt, wants to retry the defendant for the same murder. This retrial is:",
choices:["Permitted, given the new evidence.","Barred by double jeopardy protections against retrial for the same offense after acquittal.","Permitted only with appellate court approval.","Permitted if requested within 30 days of acquittal."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Speedy trial (CPL 30.30)", stem:"Under CPL 30.30, the time within which the prosecution must be ready for trial is generally measured from:",
choices:["The date of arrest only, with no reference to the charges.","The commencement of the criminal action, with the applicable time period determined by the highest offense charged.","The date the indictment is filed only.","There is no statutory speedy trial time limit in New York; only constitutional speedy trial applies."], answer:1},

// ===== PROFESSIONAL RESPONSIBILITY (4) =====
{subject:"Professional Responsibility", topic:"Confidentiality exceptions", stem:"Under RPC Rule 1.6, an attorney may reveal client confidences without the client's consent in which of the following circumstances?",
choices:["Never, under any circumstances.","To prevent reasonably certain death or substantial bodily harm.","Whenever the attorney personally disagrees with the client's conduct.","Only if a court orders disclosure, and never otherwise."], answer:1},

{subject:"Professional Responsibility", topic:"Safeguarding client funds", stem:"An attorney receives a settlement check on behalf of a client. Under RPC Rule 1.15, the attorney must:",
choices:["Deposit the funds into the attorney's personal operating account for convenience.","Hold the funds in a separate, identifiable escrow/trust account and avoid commingling with the attorney's own funds.","Immediately disburse all funds to the client without any accounting.","Deposit the funds anywhere, as location is not regulated."], answer:1},

{subject:"Professional Responsibility", topic:"Conflicts of interest", stem:"A law firm represents Client A in a matter. A conflict check reveals the firm also represents Client B, who is directly adverse to Client A in an unrelated matter. Absent informed consent from both clients, representing both is generally:",
choices:["Permissible, since the matters are unrelated.","Prohibited as a concurrent conflict of interest under RPC Rule 1.7.","Permissible as long as different attorneys within the firm handle each matter.","Only a concern if both matters are litigated in the same court."], answer:1},

{subject:"Professional Responsibility", topic:"Advertising", stem:"Under the Rules of Professional Conduct, attorney advertising that is truthful, not misleading, and factually supportable is generally:",
choices:["Prohibited entirely in New York.","Permissible, including comparisons to other lawyers' services and disclosed paid endorsements, provided proper disclaimers are used.","Permissible only if it contains no comparative statements whatsoever.","Permissible only for solo practitioners, not firms."], answer:1},

// ===== REAL PROPERTY (4) =====
{subject:"Real Property", topic:"Recording act", stem:"New York's recording act generally protects a subsequent good-faith purchaser for value against a prior unrecorded conveyance if the subsequent purchaser:",
choices:["Records first, regardless of notice of the prior conveyance.","Takes without notice of the prior conveyance and records first.","Merely takes possession of the property.","Recording is irrelevant in New York; only possession matters."], answer:1},

{subject:"Real Property", topic:"Adverse possession", stem:"To establish title by adverse possession in New York, the possession must generally be:",
choices:["Permissive, open, and notorious.","Actual, open and notorious, exclusive, hostile, and continuous for the statutory period.","Secret and concealed from the true owner for the statutory period.","Based solely on paying property taxes for one year."], answer:1},

{subject:"Real Property", topic:"Warranty of habitability", stem:"Under RPL 235-b, a residential landlord impliedly warrants that the premises are fit for human habitation. A tenant seeking a remedy for breach of this warranty may generally:",
choices:["Only vacate the premises without further recourse.","Seek an abatement of rent and/or other remedies for breach of the implied warranty.","Do nothing, since the warranty applies only to commercial leases.","Only sue for punitive damages."], answer:1},

{subject:"Real Property", topic:"Concurrent estates", stem:"A conveyance to a married couple as grantees, absent language specifying otherwise, is generally presumed in New York to create:",
choices:["A tenancy in common.","A tenancy by the entirety.","A joint tenancy with right of survivorship for unmarried co-owners only.","A life estate."], answer:1},

// ===== EVIDENCE (4) =====
{subject:"Evidence", topic:"Dead Man's Statute", stem:"In a claim against a decedent's estate, CPLR 4519 (the Dead Man's Statute) generally bars testimony by:",
choices:["Any witness, on any topic.","An interested witness testifying about a personal transaction or communication with the deceased, when offered against the estate.","Only expert witnesses.","Disinterested witnesses only."], answer:1},

{subject:"Evidence", topic:"Business records exception", stem:"For a document to qualify under the business records exception to the hearsay rule (CPLR 4518), it must generally be shown that the record was:",
choices:["Made by anyone, at any time, for any purpose.","Made in the regular course of business, at or near the time of the event, by someone with knowledge or under a business duty to report.","Prepared specifically for litigation.","Signed by a notary public."], answer:1},

{subject:"Evidence", topic:"Physician-patient privilege waiver", stem:"A plaintiff commences a personal injury action, placing his physical condition directly at issue. Regarding the physician-patient privilege (CPLR 4504) as to that condition, the plaintiff:",
choices:["Retains full privilege with no exceptions.","Is generally deemed to have waived the privilege as to the condition placed in controversy.","Can only waive the privilege with a court order, never by conduct.","The privilege never applies to personal injury cases regardless of conduct."], answer:1},

{subject:"Evidence", topic:"Present sense impression", stem:"A hearsay statement describing an event, made by the declarant while perceiving the event or immediately thereafter, is most likely admissible as:",
choices:["An excited utterance only.","A present sense impression.","Inadmissible hearsay with no applicable exception.","A dying declaration."], answer:1},

// ===== CONTRACTS (3) =====
{subject:"Contracts", topic:"Statute of Frauds", stem:"Under GOL 5-701, which of the following contracts generally must be in writing to be enforceable?",
choices:["A contract that can be fully performed within one year.","A contract that by its terms cannot be performed within one year from its making.","Any oral contract regardless of subject matter.","A contract for the sale of goods under $50."], answer:1},

{subject:"Contracts", topic:"Mutual mistake", stem:"Both parties to a contract share a mistaken belief about a basic assumption on which the contract was made, and this mistake has a material effect on the agreed exchange. This contract is most likely:",
choices:["Fully enforceable regardless of the mistake.","Voidable due to mutual mistake.","Void ab initio automatically, with no option to enforce.","Unaffected, since mistake is never a defense in New York."], answer:1},

{subject:"Contracts", topic:"Third-party beneficiaries", stem:"A contract between A and B is intended to directly benefit C, a non-party. C is best characterized as:",
choices:["An incidental beneficiary with no enforcement rights.","An intended beneficiary who may generally enforce the contract.","A party to the contract by default.","Someone who can never have rights under the contract."], answer:1},

// ===== ADMINISTRATIVE LAW (3) =====
{subject:"Administrative Law", topic:"Exhaustion of remedies", stem:"Before seeking judicial review of an agency's action, a party must generally:",
choices:["Go directly to court without any agency involvement.","Exhaust available administrative remedies, absent an exception such as futility or a purely constitutional challenge.","Wait a minimum of five years.","File in federal court only."], answer:1},

{subject:"Administrative Law", topic:"Article 78 standard of review", stem:"In reviewing an agency's adjudicatory determination made after a hearing required by law, a court applies which standard to the agency's factual findings?",
choices:["De novo review with no deference.","Whether the determination is supported by substantial evidence.","Beyond a reasonable doubt.","Clear and convincing evidence."], answer:1},

{subject:"Administrative Law", topic:"Rulemaking procedure", stem:"Under the State Administrative Procedure Act, a proposed agency rule generally must be:",
choices:["Kept confidential until final adoption.","Published, with notice and an opportunity for public comment, before or upon adoption.","Approved by the legislature before taking effect.","Immediately effective upon an agency official's signature alone."], answer:1},

// ===== BUSINESS RELATIONSHIPS (3) =====
{subject:"Business Relationships", topic:"Business judgment rule", stem:"A corporate director makes a decision, in good faith and on an informed basis, that later turns out badly for the corporation. Under the business judgment rule, a court will generally:",
choices:["Substitute its own judgment for the director's and impose liability for any loss.","Decline to second-guess the decision, absent bad faith, fraud, or self-dealing.","Automatically hold the director liable for any decision resulting in loss.","Require the director to personally guarantee corporate decisions."], answer:1},

{subject:"Business Relationships", topic:"LLC operating agreements", stem:"In a New York LLC, if members have not adopted a written operating agreement addressing a particular management issue, the default rule is generally supplied by:",
choices:["Nothing — the LLC cannot operate without a written agreement.","The Limited Liability Company Law's default provisions.","The Business Corporation Law exclusively.","Federal partnership law."], answer:1},

{subject:"Business Relationships", topic:"General partnership liability", stem:"In a New York general partnership, each partner's liability for partnership obligations incurred in the ordinary course of business is generally:",
choices:["Limited to the partner's capital contribution only.","Joint and several, with each partner potentially liable for the full obligation.","Nonexistent unless the partner personally signed the obligation.","Limited to torts only, not contracts."], answer:1},

// ===== CONFLICT OF LAWS (2) =====
{subject:"Conflict of Laws", topic:"Neumeier rules (torts)", stem:"In a tort choice-of-law dispute involving loss-allocation rules (such as guest statutes) where the parties are domiciled in different states, New York courts generally apply the Neumeier rules, which primarily look to:",
choices:["The law of the forum state automatically, regardless of domicile.","The domiciles of the parties and where the accident occurred, to determine which jurisdiction has the greater interest.","Whichever law provides the plaintiff the largest recovery.","Federal common law exclusively."], answer:1},

{subject:"Conflict of Laws", topic:"Public policy exception", stem:"A New York court is asked to apply a foreign jurisdiction's law that directly conflicts with a fundamental New York public policy. The court will most likely:",
choices:["Apply the foreign law regardless of the conflict, since choice-of-law rules are absolute.","Decline to apply the foreign law based on the public policy exception.","Refer the matter to federal court for resolution.","Apply whichever law the defendant prefers."], answer:1},
];
