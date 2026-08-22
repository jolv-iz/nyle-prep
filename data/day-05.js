// Day 5 — cold, closed-book, weighted mix across 12 subjects.
// Continues the second-pass variety pattern from Day 3 — different sub-rules
// and fact patterns within branches already touched on Days 1-3.
const DAY_META = {day: 5, label: 'Day 5 — 50 Questions', sub: 'Cold, closed-book · weighted mix across 12 subjects'};
const QUESTIONS = [
// ===== CIVIL PRACTICE & PROCEDURE (7) =====
{subject:"Civil Practice & Procedure", topic:"Personal jurisdiction & long-arm (CPLR 301/302)", stem:"A plaintiff seeks to assert quasi in rem jurisdiction over an out-of-state defendant by attaching property the defendant owns in New York. Under CPLR 314, this basis of jurisdiction is most relevant when:",
choices:["The defendant is a New York domiciliary, making any other jurisdictional basis unnecessary.","Personal jurisdiction over the defendant cannot otherwise be obtained, and the court's power is limited to the value of the attached in-state property.","The action has nothing to do with any property at all.","Quasi in rem jurisdiction no longer exists in New York under any circumstances."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Statutes of limitations, tolling, renewal actions", stem:"A plaintiff sues a doctor for ordinary medical malpractice (not a continuous treatment or foreign-object case). Under CPLR 214-a, this action must generally be commenced within:",
choices:["One year from the malpractice.","Two and a half years from the act, omission, or failure complained of.","Six years, the same as an ordinary negligence claim.","There is no specific medical malpractice statute of limitations in New York."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Appearances & pleadings", stem:"A defendant's answer asserts a claim against the plaintiff arising from the very same transaction underlying the plaintiff's complaint. Under CPLR 3019, this is best characterized as:",
choices:["An impermissible pleading that must be stricken.","A counterclaim, which may be compulsory or permissive depending on its relationship to the plaintiff's claim.","A third-party claim, since it is asserted against a party already in the action.","A cross-claim, since only cross-claims may be asserted in an answer."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Motions — to dismiss, summary judgment, relief from judgment", stem:"A CPLR 3211 motion to dismiss may be granted on which of the following enumerated grounds?",
choices:["Only that the plaintiff's attorney made a typographical error.","Grounds such as lack of subject matter or personal jurisdiction, the statute of limitations, documentary evidence conclusively establishing a defense, or failure to state a cause of action.","The judge's personal disagreement with the wisdom of the lawsuit.","Only that the defendant would prefer a different venue."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Disclosure", stem:"A party's disclosure response includes documents the party claims are protected attorney work product. Under CPLR 3101(c)-(d), the party generally must:",
choices:["Simply withhold the documents with no further obligation.","Identify the withheld material with enough detail (e.g., a privilege log) to allow the requesting party and the court to assess the claim.","Produce the documents anyway, since work product is never protected in New York.","Destroy the documents to avoid any dispute."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Provisional remedies — attachment, injunction, notice of pendency", stem:"A plaintiff seeks a preliminary injunction to maintain the status quo pending litigation. The plaintiff generally must demonstrate:",
choices:["Nothing beyond simply filing the request.","A likelihood of success on the merits, irreparable harm absent the injunction, and that the balance of equities favors the plaintiff.","That the defendant has already lost at trial.","That the plaintiff has posted no undertaking, since undertakings are prohibited."], answer:1},

{subject:"Civil Practice & Procedure", topic:"Appeals", stem:"A case may reach the Court of Appeals as of right (without needing permission) in which circumstance?",
choices:["In every civil appeal, regardless of the issues involved.","Where, among other narrow grounds, there is a direct constitutional question or a two-Justice dissent at the Appellate Division on a question of law.","Whenever the losing party simply requests it.","Never; the Court of Appeals only hears criminal cases."], answer:1},

// ===== TORTS & TORT DAMAGES (5) =====
{subject:"Torts & Tort Damages", topic:"Comparative negligence & assumption of risk", stem:"A participant in an organized recreational sport is injured by a risk that is inherent in and commonly appreciated as part of that sport. Under the primary assumption of risk doctrine, the sport organizer/co-participant is:",
choices:["Always fully liable, regardless of the nature of the risk.","Generally not liable for injuries resulting from risks that are inherent in the activity and consented to by participating.","Liable only if the participant is a minor.","Strictly liable for any injury occurring during the activity."], answer:1},

{subject:"Torts & Tort Damages", topic:"Labor Law §§240/241 — construction worker standard of care", stem:"An owner or contractor defends a Labor Law § 240 claim by arguing the injured worker was 'recalcitrant.' This narrow defense generally requires showing:",
choices:["Only that the worker was generally careless on the job site that day.","That an adequate, available safety device was provided, the worker knew they were expected to use it, and the worker deliberately refused to use it.","That the worker had a prior workplace injury.","Nothing beyond the worker's own comparative negligence, which is otherwise irrelevant to § 240."], answer:1},

{subject:"Torts & Tort Damages", topic:"Negligent infliction of emotional distress (zone of danger)", stem:"Beyond the zone-of-danger bystander scenario, New York also recognizes NIED liability based on a 'special relationship' or special duty, such as in cases involving:",
choices:["Any emotional upset whatsoever, with no limiting principle.","A direct duty owed to the plaintiff themselves (e.g., mishandling of a relative's corpse by a funeral home), even without being in the zone of physical danger.","Only claims arising from motor vehicle accidents.","Claims where the plaintiff is a corporation, not an individual."], answer:1},

{subject:"Torts & Tort Damages", topic:"Wrongful death actions", stem:"In a New York wrongful death action, damages are generally measured by:",
choices:["The decedent's own pre-death pain and suffering, exclusively.","The pecuniary (financial) injuries suffered by the decedent's distributees as a result of the death, such as lost support and services.","Purely punitive damages against the defendant.","Emotional grief damages for the distributees, which New York freely allows in wrongful death actions."], answer:1},

{subject:"Torts & Tort Damages", topic:"Contribution, indemnification, CPLR Article 16 (joint & several caps)", stem:"Under CPLR Article 16, the general several-liability cap on non-economic damages for a defendant found less than 50% at fault does NOT apply in certain listed exceptions, such as:",
choices:["Never — the cap is absolute with no exceptions whatsoever.","Certain specifically listed situations, such as claims involving specific statutory violations or defendants who acted with reckless disregard, among the enumerated exceptions.","Only when the plaintiff is a minor.","Only in contract, not tort, actions."], answer:1},

// ===== TRUSTS, WILLS & ESTATES (5) =====
{subject:"Trusts, Wills & Estates", topic:"Spousal right of election", stem:"A surviving spouse validly waived their right of election against the decedent's estate in an enforceable prenuptial agreement. As a result, the spouse's elective share rights under EPTL 5-1.1-A are:",
choices:["Unaffected by any prenuptial agreement; the elective share can never be waived.","Generally waived and unenforceable, provided the agreement met the formal requirements for a valid waiver.","Automatically increased to compensate the spouse.","Valid only if a court separately re-approves the waiver after the decedent's death."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Construction problems — lapsed legacies, ademption, advancement, class gifts", stem:"A will leaves a gift 'to my grandchildren,' a class gift, without specifying individual names. Under the rule of convenience, the class of beneficiaries generally closes:",
choices:["Immediately upon the will's execution, freezing the class at that moment.","When a class member first becomes entitled to distribution (e.g., at the testator's death, if distribution is then due), cutting off later-born members.","Only when every possible future grandchild has been born, no matter how long that takes.","Never; class gifts remain open indefinitely under New York law."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Will execution requirements", stem:"A will includes a properly executed 'self-proving affidavit' signed by the witnesses at the time of execution. The main effect of this affidavit is to:",
choices:["Replace the need for any witnesses to sign the will at all.","Allow the will to be admitted to probate without requiring the witnesses to separately testify or be located, since their affidavit substitutes for live testimony.","Make the will immune from any will contest whatsoever.","Have no legal effect in New York probate proceedings."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Non-probate transfers — joint tenancy, Totten trusts, TOD accounts, life insurance", stem:"A depositor who created a Totten trust bank account 'in trust for' a beneficiary wants to revoke the arrangement during their lifetime. This may generally be accomplished by:",
choices:["Nothing; Totten trusts can never be revoked once created.","Withdrawing the funds, or through an express revocation, or by a will that specifically refers to revoking that particular account.","Only a court order, never by the depositor's own unilateral act.","The beneficiary's consent alone, without the depositor's involvement."], answer:1},

{subject:"Trusts, Wills & Estates", topic:"Rule against perpetuities", stem:"New York's rule against perpetuities (EPTL 9-1.1) generally invalidates an interest that might vest too remotely. However, EPTL 9-1.3 provides a reformation ('second look'/wait-and-see-adjacent) mechanism that:",
choices:["Automatically invalidates the entire instrument containing any RAP violation, with no fix available.","Allows certain age contingencies and other specified provisions to be reformed to avoid violating the rule, preserving the grantor's general intent where possible.","Applies only to charitable trusts.","Has been repealed and no longer has any effect in New York."], answer:1},

// ===== MATRIMONIAL & FAMILY LAW (5) =====
{subject:"Matrimonial & Family Law", topic:"Common law marriage recognition; prenup/postnup agreements", stem:"For a New York prenuptial agreement to be valid and enforceable under DRL 236(B)(3), it generally must be:",
choices:["Purely oral, since writing requirements do not apply to prenuptial agreements.","In writing, subscribed by both parties, and acknowledged in the manner required to entitle a deed to be recorded.","Approved in advance by a matrimonial judge before the wedding.","Signed by only one of the two parties, so long as that party is the higher earner."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Child Support Standards Act", stem:"Beyond the basic percentage-of-income child support obligation, the Child Support Standards Act also generally provides for add-on expenses such as:",
choices:["Nothing further; the basic percentage is the exclusive obligation in every case.","Child care expenses and health insurance/unreimbursed medical expenses, typically prorated between the parents based on their respective incomes.","Only expenses the custodial parent unilaterally decides to charge the other parent, with no income-based allocation.","Expenses are never allocated by income share; they are always split exactly 50/50."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Filiation — paternity, equitable estoppel", stem:"In a paternity proceeding, a genetic marker test showing a sufficiently high statistical probability of paternity (generally 95% or more) creates:",
choices:["No legal significance whatsoever.","A rebuttable presumption of paternity.","An absolute, irrebuttable conclusion of paternity that no other evidence may ever overcome.","Proof only of non-paternity, never of paternity."], answer:1},

{subject:"Matrimonial & Family Law", topic:"UCCJEA / custody jurisdiction", stem:"Under the UCCJEA, once a state has made an initial child custody determination, that state generally retains 'continuing, exclusive jurisdiction' until:",
choices:["Forever, with no exceptions, regardless of where the parties and child later live.","Neither the child, the child and a parent, nor a parent with a significant connection to the state remain there, or a court of that state determines it is no longer the appropriate forum.","Immediately upon the child's 18th birthday only.","The custodial parent unilaterally decides to transfer jurisdiction."], answer:1},

{subject:"Matrimonial & Family Law", topic:"Child protective proceedings — abuse/neglect, termination of parental rights", stem:"In a proceeding to terminate parental rights on the ground of permanent neglect, the petitioner (typically an agency) must generally show:",
choices:["Simply that the child would be better off with different parents.","That the agency made diligent efforts to strengthen the parent-child relationship and the parent nonetheless failed to plan for the child's future for the requisite statutory period.","Nothing beyond the parent's poverty.","That the parent was convicted of a crime, which is the sole ground for termination in New York."], answer:1},

// ===== CRIMINAL LAW & PROCEDURE (5) =====
{subject:"Criminal Law & Procedure", topic:"Justification / deadly force", stem:"A person who was the initial aggressor in a physical confrontation later claims self-defense after the other party escalates to deadly force. Under New York's justification statute, the initial aggressor:",
choices:["May always claim self-defense with no limitation, regardless of who started the confrontation.","Is generally barred from claiming self-defense unless they withdraw from the encounter and effectively communicate that withdrawal, after which the other party continues the attack.","Automatically forfeits any self-defense claim forever, even in an unrelated later encounter.","May claim self-defense only if they are physically larger than the other party."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Larceny", stem:"A defendant is charged with burglary. Which factor would most likely elevate the degree of burglary charged?",
choices:["The defendant's age.","Being armed with a deadly weapon, causing physical injury to a non-participant, or the building being a dwelling occupied at night.","The dollar value of items inside the building, regardless of anything else.","Whether the defendant used a key to enter."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Confessions & right to counsel — indelible attachment, voluntariness", stem:"A defendant's confession is challenged as involuntary. New York courts evaluate voluntariness under a totality-of-the-circumstances test, considering factors such as:",
choices:["Only whether Miranda warnings were technically read aloud, with no other factors relevant.","The duration and conditions of questioning, any use of physical or psychological coercion, and the defendant's personal characteristics.","Exclusively whether the defendant ultimately signed a written statement.","Whether the confession was later corroborated by other evidence, which alone determines voluntariness."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Grand jury testimony & immunity, accomplice testimony corroboration", stem:"Under CPL 60.22, corroboration of accomplice testimony must:",
choices:["Independently prove the defendant's guilt beyond a reasonable doubt on its own.","Merely tend to connect the defendant to the commission of the crime; it need not be substantial standing alone.","Come exclusively from another accomplice's testimony.","Be entirely unnecessary if the accomplice testified under oath."], answer:1},

{subject:"Criminal Law & Procedure", topic:"Search & seizure — with/without warrant", stem:"Police impound a lawfully seized vehicle and conduct a routine inventory search of its contents pursuant to standardized department procedures. This inventory search is generally justified because it:",
choices:["Requires a warrant just like any other search, with no exception.","Serves recognized administrative purposes (protecting property, protecting police from claims, ensuring safety) distinct from a search for evidence of crime, making a warrant unnecessary if conducted per standardized procedure.","Is never permitted under any circumstances in New York.","Requires the vehicle owner's consent."], answer:1},

// ===== PROFESSIONAL RESPONSIBILITY (4) =====
{subject:"Professional Responsibility", topic:"Litigation", stem:"During litigation, an attorney becomes aware of legal authority in the controlling jurisdiction that is directly adverse to their client's position and that opposing counsel has not cited. Under RPC Rule 3.3 (candor to the tribunal), the attorney generally:",
choices:["May freely withhold the adverse authority, since zealous advocacy always excuses non-disclosure.","Must disclose that adverse controlling authority to the tribunal.","May disclose it only if the client consents, and otherwise must withhold it.","Has no duty of candor to a court under any circumstance."], answer:1},

{subject:"Professional Responsibility", topic:"Conflicts of interest", stem:"One lawyer in a firm has a disqualifying conflict of interest regarding a matter. Under RPC Rule 1.10, this conflict:",
choices:["Never affects any other lawyer in the firm, regardless of the circumstances.","Is generally imputed to all lawyers in the firm, subject to certain exceptions such as effective screening in specified circumstances.","Only matters if the conflicted lawyer bills more than half the firm's hours on the matter.","Automatically dissolves the entire law firm."], answer:1},

{subject:"Professional Responsibility", topic:"Lawyer-client relationship — scope, communication, withdrawal", stem:"Under RPC Rule 1.16, which of the following is a ground for mandatory (not merely permissive) withdrawal from representation?",
choices:["The client simply becomes difficult to work with.","Continued representation would result in a violation of the Rules of Professional Conduct or other law.","The client is unable to pay the attorney's fee on time.","The matter has become more complex than initially anticipated."], answer:1},

{subject:"Professional Responsibility", topic:"Advertising", stem:"Under the Rules of Professional Conduct governing attorney advertising, a firm distributing print or recorded advertisements generally must:",
choices:["Destroy the advertisement immediately after its first use.","Retain copies or recordings of the advertisement for a specified minimum period, for regulatory review purposes.","Obtain a court order before running any advertisement.","Have no retention obligation whatsoever."], answer:1},

// ===== REAL PROPERTY (4) =====
{subject:"Real Property", topic:"Real property contracts — Statute of Frauds, condition of property, risk of loss", stem:"A contract for the sale of real property requires the seller to convey 'marketable title.' If the buyer identifies a valid objection to title (such as an undischarged lien) that the seller cannot cure by closing, the buyer generally may:",
choices:["Never object to any title defect once the contract is signed.","Refuse to close and seek rescission/damages, since a seller must generally convey marketable title free of such defects.","Only sue for specific performance, never rescind.","Do nothing, since title defects are always the buyer's sole responsibility to cure."], answer:1},

{subject:"Real Property", topic:"Mortgages — lien theory, transfers, foreclosure enforcement", stem:"A mortgage contains a 'due-on-sale' clause. If the mortgagor transfers the property without the lender's consent, this clause generally:",
choices:["Has no legal effect and may be freely ignored.","Permits the lender to accelerate and demand full payment of the loan upon the unauthorized transfer.","Automatically voids the mortgage entirely.","Transfers the mortgage obligation to the new owner without any lender involvement."], answer:1},

{subject:"Real Property", topic:"Title — concurrent estates (joint tenancy/tenancy by entirety)", stem:"One of two joint tenants unilaterally conveys their interest in the jointly held property to a third party, without the other joint tenant's consent. The effect of this conveyance is generally to:",
choices:["Have no effect, since a joint tenant cannot unilaterally transfer their interest.","Sever the joint tenancy as to that share, converting the third party's newly acquired interest and the remaining co-tenant's interest into a tenancy in common (as between them).","Automatically terminate the entire co-tenancy and force a sale.","Convert the entire property into a tenancy by the entirety."], answer:1},

{subject:"Real Property", topic:"Restrictive covenants", stem:"A restrictive covenant that once served a clear purpose may become unenforceable under the 'changed conditions' doctrine when:",
choices:["Any single property owner in the area simply requests its removal.","The character of the neighborhood has changed so substantially that enforcing the covenant would no longer serve its original purpose.","A covenant may never be terminated once validly created, no matter what changes occur.","The covenant is more than one year old."], answer:1},

// ===== EVIDENCE (4) =====
{subject:"Evidence", topic:"Hearsay definition & exceptions", stem:"A hearsay statement is admitted under the former testimony exception. This exception generally requires:",
choices:["Nothing beyond the fact that the statement was made under oath at some point.","That the declarant is now unavailable to testify, and that the party against whom the testimony is offered (or a predecessor in interest, depending on context) had a prior opportunity and similar motive to cross-examine the declarant.","That the prior testimony was given in a completely unrelated case.","That the declarant is available but simply prefers not to testify again."], answer:1},

{subject:"Evidence", topic:"Privileges — spousal, attorney-client, physician/psychologist-patient, self-incrimination", stem:"New York recognizes both a spousal testimonial privilege and a confidential marital communications privilege. These two spousal privileges differ in that:",
choices:["They are identical in every respect, with no meaningful distinction.","The testimonial privilege can bar a spouse from testifying at all in some contexts, while the marital communications privilege more narrowly protects confidential communications made during the marriage, and can survive divorce as to those communications.","Only the confidential communications privilege exists in New York; there is no separate testimonial privilege.","Both privileges automatically terminate the moment the couple separates, regardless of divorce."], answer:1},

{subject:"Evidence", topic:"Expert testimony & scientific evidence (Frye)", stem:"Before an expert may testify on a subject, the proponent must generally establish that:",
choices:["Any person may testify as an expert regardless of qualifications.","The witness is qualified by knowledge, skill, training, or experience, and the subject matter is beyond the ken of the average juror.","Expert testimony is never permitted in New York courts.","The expert must hold a license issued specifically by a New York state board."], answer:1},

{subject:"Evidence", topic:"Judicial notice — law vs adjudicative facts", stem:"For a court to take judicial notice of an adjudicative fact (as opposed to a general/legislative fact), the fact generally must be:",
choices:["Subject to reasonable dispute among knowledgeable people.","Not subject to reasonable dispute — either generally known within the jurisdiction or capable of accurate and ready verification from an unquestionably reliable source.","Supplied only by the testimony of a party's own expert witness.","Impossible to verify by any external source."], answer:1},

// ===== CONTRACTS (3) =====
{subject:"Contracts", topic:"Employment contracts", stem:"An employer seeks to enforce a post-employment non-compete agreement against a former employee. Under New York's reasonableness test (BDO Seidman), courts generally evaluate whether the restriction is:",
choices:["Enforceable automatically, since any signed non-compete is binding regardless of scope.","No greater than necessary to protect the employer's legitimate interests, not unduly burdensome on the employee, and not injurious to the public, considering its duration and geographic scope.","Unenforceable per se in all circumstances in New York.","Valid only if it lasts at least ten years."], answer:1},

{subject:"Contracts", topic:"Formation & enforceability — mutual vs unilateral mistake, capacity, unconscionability", stem:"A minor enters into a contract for goods that are not necessities. Under New York contract law, the minor generally:",
choices:["Is bound by the contract exactly as an adult would be, with no special disaffirmance right.","May disaffirm (void) the contract, generally either during minority or within a reasonable time after reaching the age of majority.","Cannot enter into any contract at all, rendering it void from the start rather than voidable.","Is bound only if a parent co-signed, and otherwise the contract is automatically void."], answer:1},

{subject:"Contracts", topic:"Plain Language Requirement for Consumer Transactions", stem:"Under GOL 5-702, consumer contracts in New York are generally required to be written:",
choices:["In whatever language and format the drafting party prefers, with no readability standard.","In a clear and coherent manner using words with common everyday meaning, appropriately divided and captioned, to promote consumer understanding.","Exclusively in Latin legal terminology for precision.","Only as an oral agreement, since writing requirements do not apply to consumer transactions."], answer:1},

// ===== ADMINISTRATIVE LAW (3) =====
{subject:"Administrative Law", topic:"Exhaustion of remedies", stem:"An exception to the exhaustion of administrative remedies doctrine may apply when a party raises a purely constitutional challenge to a statute, because:",
choices:["Constitutional questions are always barred from any judicial review.","An administrative agency generally cannot decide the constitutionality of the very statute it administers, so requiring exhaustion in that narrow context would be futile.","Constitutional challenges must always go through the agency first, with no exception.","Agencies have exclusive and final authority over all constitutional questions."], answer:1},

{subject:"Administrative Law", topic:"Judicial review — standing, exhaustion, ripeness, finality", stem:"A party seeks judicial review of preliminary agency staff comments that have not yet resulted in any final, binding agency determination. This challenge is most likely to fail for lack of:",
choices:["Subject matter jurisdiction of any court, ever.","Ripeness/finality, since courts generally require a definitive, final agency action before review.","Standing, because the party lacks citizenship.","Timeliness, because the four-month period has already expired before any action existed."], answer:1},

{subject:"Administrative Law", topic:"Public disclosure — FOIL, Open Meetings Law", stem:"Under the Open Meetings Law, a public body may generally enter executive session (closed to the public) only for:",
choices:["Any reason the body finds convenient, with unlimited discretion.","Specifically enumerated purposes, such as certain personnel, litigation, or real property negotiation matters.","Never; all sessions must always be fully open with no exceptions.","Purely social gatherings of the board's members."], answer:1},

// ===== BUSINESS RELATIONSHIPS (3) =====
{subject:"Business Relationships", topic:"Corporations — formation, certificate of incorporation, bylaws", stem:"Shareholders and creditors seeking to hold individuals personally liable for a corporation's obligations by 'piercing the corporate veil' generally must show:",
choices:["Simply that the corporation is small or closely held.","That the corporation was dominated as the individual's alter ego and that this domination was used to commit a fraud or wrong resulting in injury.","That the corporation earned a profit in its first year.","Nothing beyond the fact that the corporation had only one shareholder."], answer:1},

{subject:"Business Relationships", topic:"Partnerships — general, limited, registered LLPs", stem:"Absent a partnership agreement providing otherwise, when a general partnership is dissolved, a partner generally has the right to:",
choices:["Nothing; dissolved partnerships have no further rights for any partner.","Have the partnership's business wound up and its affairs settled, with assets distributed according to the statutory priority scheme.","Unilaterally keep all partnership assets for themselves.","Immediately be personally sued by all creditors with no partnership-level process."], answer:1},

{subject:"Business Relationships", topic:"Professional service corporations", stem:"A professional service corporation (PC) generally shields its shareholders from the corporation's ordinary business debts and contract liabilities. However, this shield generally does NOT protect a professional shareholder from:",
choices:["Any liability whatsoever, since PCs provide complete blanket immunity to every shareholder for everything.","Liability for that shareholder's own professional malpractice or negligence.","Ordinary trade debts owed to office suppliers.","General contract obligations of the PC unrelated to professional services."], answer:1},

// ===== CONFLICT OF LAWS (2) =====
{subject:"Conflict of Laws", topic:"Choice of law — contracts", stem:"A contract contains an express clause selecting the law of a particular state to govern any dispute. New York courts will generally:",
choices:["Ignore the clause entirely and always apply New York law regardless of the parties' choice.","Honor the parties' choice of law, provided the chosen state bears a reasonable relationship to the transaction and applying it would not violate a fundamental New York public policy.","Honor the clause only if both parties are New York residents.","Refuse to enforce any choice-of-law clause under any circumstances."], answer:1},

{subject:"Conflict of Laws", topic:"Substantive vs procedural dichotomy", stem:"A party argues that another state's shorter statute of limitations should apply because that state's substantive law governs the claim. New York courts have traditionally treated statutes of limitations as:",
choices:["Purely substantive in every instance, always following the substantive law's jurisdiction with no exceptions.","Historically procedural for choice-of-law purposes in many contexts (so the forum's own limitations period could apply), subject to statutory modifications (e.g., borrowing statutes) that can change this result.","Irrelevant to any choice-of-law analysis.","Something no New York court has ever addressed."], answer:1},
];
