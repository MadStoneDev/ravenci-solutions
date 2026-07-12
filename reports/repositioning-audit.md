# RAVENCI Solutions — Repositioning Audit

**Prepared:** 2026-07-09
**Scope:** Pricing floor, positioning, and conversion-proof audit for a solo premium boutique studio, north of Brisbane. ICP: established AU SMBs in healthcare, construction, professional services.
**Rule applied throughout:** every external claim carries a source URL; verified fact is separated from inference; competitor pricing is never fabricated — where a live page shows no price it is marked **"not published."** Competitor figures supplied in the brief were unverified mid-2026 snippets and were re-checked by fetching the live pages on 2026-07-09. Corrections are called out.

---

## Executive summary

1. **Your live site and your repo have diverged.** The pricing in your brief ($4,950 floor ladder) is what's **live**. The **repo on `main` no longer contains those numbers** — it already sits at a **$7,500 floor**. Your Phase 5 hypothesis ("move the floor to ~$7,500") is *already implemented in code*; it most likely just isn't deployed. The first action is a deploy, not a rewrite. (Phase 1 / §Live-vs-repo.)
2. **The floor move is correct and the evidence supports it.** At $4,950 (live) you overlap the template-shop band (Ape-X content-included ~$5,000; Hireadev 5-page $2,500). At $7,500 (repo) you clear that band and sit at the genuinely-custom entry point (WP Creative custom ~$10k; market "custom starts ~$5k"). (Phase 3 + Phase 5.)
3. **Your intended wedge — "no outsourcing / in-house / 25 years" — is table stakes, not a differentiator.** Strong Digital, Jimmyweb, iSonic and Digital Nomads HQ all claim it, one more aggressively than you. Your defensible differentiation is the **proprietary block system + longevity ("still working in five years") + named-client business outcomes** — which the ICP research independently ranks as the top premium levers. (Phase 3 + Phase 4 + Phase 5.)
4. **The single biggest conversion gap is proof.** 8 of your 9 case studies lead their Results with *craft* metrics (PageSpeed/LCP), not *business* outcomes. Jimmyweb (your closest boutique analogue) shows zero business metrics and no named testimonials; the outcome-claiming competitors (iSonic, DNHQ) show numbers but no attributed named clients. A single named client + real before/after business number would out-prove all of them. This is the highest-ROI content fix. (Phase 1 + Phase 3 + Phase 4 + Phase 6.)

5. **Your own analytics confirm the fix is conversion, not traffic (Phase 2, now with data).** The scary "−95% sessions" is a **stopped Google Ads campaign**, not a collapse — organic is flat, direct is up 63%. The site is a **low-traffic (~118 sessions/mo), warm-audience validation tool**: 74% Direct, only 8% organic search, and it ranks for your *name* but sits on page 4–6 for every commercial ICP term. So the people on the site already know you and are validating you — which makes **proof + pricing clarity the highest-leverage levers**, above SEO. Also flagged: your **conversion tracking is misconfigured** (223 "key events" are auto-firing page loads, not real leads) and must be fixed before any lead number is trustworthy.

---

## PHASE 1 — Repo inventory (verbatim, with file:line)

### 1.1 Live-vs-repo pricing reconciliation (the critical finding)

Your brief's "KNOWN FACTS" ladder was grepped against the entire `src/` tree. **None of those numbers exist in the repo:**

| Brief figure (LIVE) | Present in repo? |
|---|---|
| `$3,490` (About meta, stale) | **NOT FOUND** |
| `$4,950` (brochure floor) | **NOT FOUND** |
| `$6,650` (eCommerce template) | **NOT FOUND** |
| `$9,700` (Custom Solutions) | **NOT FOUND** |
| `$11,650` (Custom eCommerce) | **NOT FOUND** |

The repo's **actual** current ladder (VERIFIED, file:line):

| Tier | Name | Price | Source |
|---|---|---|---|
| 1 | Business Website | **from $7,500** | `src/app/web-development/page.tsx:399` |
| 2 | Custom Website | from $9,500 | `web-development/page.tsx:419` |
| 3 | eCommerce | from $12,000 | `web-development/page.tsx:439` |
| 4 | Custom eCommerce | **Scope to fit** | `web-development/page.tsx:459` |
| — | eCommerce (dedicated page) | from $12,000 | `ecommerce/page.tsx:265` |
| — | Business Design | from $3,500 / $10,000 | `business-design/page.tsx:379,399` |
| — | SEO & Content | from $1,750 / $2,250 / $390-per-page | `seo-and-content/page.tsx:375,399,423` |
| — | Retainers | $350 / $750 / $1,800 / $3,000 per mo | `retainer-packages/page.tsx:412,429,448,466` |
| — | Maintenance | $249/mo / $495 one-off | `website-maintenance/page.tsx:321,339` |
| — | Hosting | $39/mo | (per service page; matches brief) |
| — | Hourly | $165/hr | (service pages) |

Root meta already reads **"Custom Next.js and WordPress websites from $7,500"** (`src/app/layout.tsx:42,47,68`).

**Interpretation (INFERENCE):** The repo was updated (commit "pricing consistency") to a $7,500 floor and restructured ladder, but the production site at ravenci.solutions still serves the old $4,950 ladder — a **deployment lag**, confirmed by your note that "the audit was done on what was live." **Action:** deploy `main`, then treat the recommendations below as refinements on top of the already-raised floor.

> Note on this session: earlier content/code fixes (467 projects, $350 retainer floor, PageSpeed-label consistency, and several API hardening fixes) were committed and pushed to `main` during this session and the working branch deleted. Those are now in `main` too and share the same deploy dependency.

### 1.2 Homepage / hero positioning (VERIFIED, verbatim)

- **H1** (`src/app/page.tsx:54`): *"I'm Richard. I build websites that pay for themselves."*
- **Subhead** (`page.tsx:63`): *"Structural engineer by training, web developer for 25+ years. 467 projects for established Australian businesses — built properly, still working in five years."*
- **Meta title** (`page.tsx:23`): *"Custom Web Development Brisbane | RAVENCI Solutions"*
- **Meta description** (`page.tsx:24`): *"Custom websites and eCommerce platforms for established Australian businesses. A structural engineer's approach to web development — built properly, still working in five years. Brisbane-based, 25+ years experience."*

**Read (INFERENCE):** The homepage is already the strongest asset — "pay for themselves" is an *outcome* frame and the structural-engineer angle is a genuine, uncrowded differentiator. It is currently unsupported by proof (no named-client numbers near it). That is the gap, not the message.

### 1.3 About page (VERIFIED, verbatim)

- **H1** (`about/page.tsx:53`): *"The Engineering Behind Your Website"* — **H2:** *"We take the long view on what your website needs to do."*
- **Meta description** (`about/page.tsx:7`): *"Meet the team behind RAVENCI Solutions. 25+ years of digital experience, an engineering mindset, and a commitment to transparency…"* — note "the **team**" for a solo operator (minor incongruence).
- **Stated values** (`about/page.tsx:22-43`): Transparency; Client Ownership ("You own what you pay for… No lock-in contracts, no proprietary traps"); Education; Integrity.
- **Stat bar** (`about/page.tsx:72-92`): `25+` Years in Digital · `75+` Australian Businesses · `467` [projects] · `85+` PageSpeed Guaranteed.

The stale "$3,490" and the "100+ businesses" inconsistency from the brief are **already gone from the repo** (both reconciled: 75+ everywhere; no price in About meta).

### 1.4 Case-study Results audit — the conversion gap (VERIFIED)

Source: `src/data/case-studies.ts`. Classification of each Results block's headline metrics:

| # | Case study | Industry | Results metrics shown | Type |
|---|---|---|---|---|
| 1 | DIRT | Tech/construction-brand | 97 PageSpeed, 100 Best Practices, 1.2s LCP | **Craft** (site notes analytics "still building") |
| 2 | NNAccountability | Prof. services | none (in progress, `hidden`) | — |
| 3 | **GoingDark** | eCommerce | **+38.5% purchaser rate, +12.5% organic, +57% session duration** | **Business** ✅ |
| 4 | Peninsula Homes | Construction | 94 PageSpeed, 96 Best Practices, 0.8s LCP | **Craft** |
| 5 | Covenant Security | Security | "4 wks brand→launch", "1–2 mo lead time yr 1" | **Mixed** (lead time is an outcome) |
| 6 | SAC Consulting | Prof. services | none | — |
| 7 | Nikita Morell | Prof. services | 100 SEO, 100 Best Practices, 1.0s LCP | **Craft** |
| 8 | Cadeaurable | eCommerce | 89 PageSpeed, 0.7s FCP, 1.1s LCP | **Craft** |
| 9 | Coast Remedial | Construction | none (`hidden`) | — |

**Finding:** Your diagnosis is correct. Of the 6 published case studies with metrics, **only GoingDark leads with business outcomes**; Covenant is partial. The narrative paragraphs *do* contain business outcomes (Covenant "booked 1–2 months in advance within their first year"; GoingDark purchaser rate) but they're buried in prose while the metric tiles — the thing that gets scanned — show PageSpeed. GoingDark is the template to copy. (Reframes drafted in Phase 6.)

### 1.5 Meta / OG (VERIFIED)

Root `layout.tsx`: title *"RAVENCI Solutions | Digital Development & Design | Brisbane, Australia"*; description leads with "agency … 25+ years … from $7,500"; OG/Twitter mirror it; `og-image.jpg` 1200×630; `ProfessionalService` JSON-LD calls itself *"Premium web development and digital design agency."* **Incongruence (INFERENCE):** "agency"/"team" language throughout for a solo operator. For premium positioning this is a *choice* — "agency" reads bigger/safer, but it undercuts the senior-solo-craftsman story that is actually your differentiator (see Phase 5). Decide deliberately; don't leave it accidental.

---

## PHASE 2 — Your real performance data

*Source: GSC "Performance on Search" export (Last 16 months, Web), and GA4 (10 Jul 2025–9 Jul 2026 vs prior year), both for ravenci.solutions, provided 2026-07-10. This is RAVENCI's **own** funnel; client-site before/after numbers (for case-study proof) are still outstanding — see §2.5.*

### 2.1 The headline "−95%" is a paid-campaign wind-down, not a traffic collapse

GA4 shows total sessions **1,418** this year vs **30,822** prior (**−95.4%**) — alarming at face value, but it's an artefact. Prior year was dominated by **27,813 Cross-network sessions (90.2%)** + 926 Paid Search — a large Google Ads/PMax push that has since stopped (current Cross-network = 2, Paid Search = 7). Strip paid/cross-network and the real picture is stable-to-up:

| Channel | Prior yr | This yr | Real change |
|---|---|---|---|
| **Organic Search** | 107 | 111 | **+3.7% (flat)** |
| **Direct** | 642 | 1,045 | **+62.8%** |
| **Organic Social** | 29 | 185 | +538% (small base) |
| Referral | 64 | 41 | −35.9% |
| Paid + Cross-network | ~28,700 | ~9 | campaign ended |

**Takeaway:** you did not lose your audience; you turned off a paid firehose. Don't panic-buy ads to "recover" — that traffic wasn't converting into the premium work you want anyway (prior year: 30,822 sessions, $0 revenue, and the key-event count is unreliable — see §2.4).

### 2.2 This is a low-traffic *validation* site, not a discovery engine — and that's the key strategic fact

- **~1,418 sessions/year ≈ 118/month.** GSC organic is tiny: **~70 clicks in 16 months (~4/month)**, 44 of them from Australia, average position **30.3** (page 3).
- **Direct is 73.7% of all sessions.** Direct = people who already have your URL: referrals typing it in, your outreach, business cards, links you send. **Organic Search is only 7.8%.**
- **Read (INFERENCE):** strangers are not discovering RAVENCI through Google. The people on the site are **already warm** — referred or personally reached by you — and they're using the site to *validate* you before they commit. This lines up exactly with the Phase 4 ICP finding: your buyers come via referral and **validate online before contact.**
- **Strategic consequence:** for near-term revenue, **converting the warm 74% better (proof + pricing clarity + premium framing) beats chasing organic traffic.** The audit's core fixes (case-study business outcomes, pricing reframe, premium positioning) act directly on the audience you actually have. This *raises* the priority of Phase 5 §① and §② and *lowers* the urgency of a broad SEO play. It also explains the diagnosed problem precisely: the bottom-of-market leads who find you "too expensive" are largely **referral/direct visitors hitting a pricing page that doesn't justify the premium** — a conversion/framing problem, not a traffic problem.

### 2.3 SEO: you rank for your name and almost nothing that sells

- **Clicks come almost entirely from brand terms:** "ravenci" (17 clicks), plus navigational variants ("raven solutions", "ravenci.group", "raven ci"). The home page takes **61 of ~70 total clicks** (`Pages.csv`).
- **For commercial ICP queries you're stuck on page 4–6 with zero clicks** (`Queries.csv`): "website design brisbane price" (119 impressions, **pos 56**), "web design brisbane prices" (pos 47), "web designer brisbane" (pos 41), "construction website design company" (pos 36), "website design caboolture" (pos 41), "website designer for construction businesses" (pos 88).
- **Latent ICP opportunity (INFERENCE):** the *right* queries are already appearing as impressions — construction ("construction website design company", "website designer for construction businesses", "website for builders"), healthcare-adjacent ("medical website hosting", "telehealth digital health australia"), and **local north-Brisbane suburbs matching your location** (Caboolture, North Lakes, Sandgate, Geebung, Ipswich). You're just ranking too low to be clicked. This is a **medium-term** play and it aligns perfectly with the Phase 5 §③ industry-specialisation content — build the healthcare/construction/professional-services pages properly and you're chasing demand that already exists, not inventing it.
- **Pages with rank but no clicks** — `/web-development` (pos 4.4, 270 impressions, 0 clicks), `/cost-of-a-website-in-brisbane` (pos 36, 490 impressions, 0 clicks), `/web-hosting` (pos 7). The web-development page ranks well but its **title/meta aren't earning the click** — a cheap fix worth testing.
- Device split: most impressions are **desktop** (2,091) but desktop ranks worse (pos 22.6) than mobile (pos 12.6, 445 impressions). AU-only avg position 30.

### 2.4 Your conversion tracking is unreliable — fix before trusting any lead metric

GA4 reports **223 "key events"** this year, but they don't stand up:
- `/launch-your-vision` shows **174 key events on 170 sessions (98.82% rate) with 1-second average engagement.** A key event firing on ~every session, on a page nobody engages with for more than a second, is **auto-firing on page load — not genuine lead submissions.** 223 "key events" is almost certainly **not** 223 leads.
- This was the exact risk flagged when the data was requested, now confirmed. **Action:** redefine the key event as the *actual* form-submit success (the `/launch-your-vision` and `/visibility-check` POST completing), not a page view or form-start. Until then, treat all "conversion" figures as unusable and judge leads from your inbox/CRM instead.
- The 1s engagement on your primary CTA page also warrants a manual check — confirm the page isn't redirecting or mis-firing for real visitors.

### 2.5 Still outstanding — the client-side proof numbers

The data provided is RAVENCI's *own* funnel. The **case-study before/after business numbers** (Phase 6 `[NEED FROM RICHARD]` flags) are separate — they come from **client** GSC/GA4/Shopify/BigCommerce properties you can access as their developer. GoingDark is already done (+38.5% purchaser rate). One before/after number each for Peninsula Homes, Nikita Morell, Covenant and Cadeaurable would convert those craft case studies into business ones. Drop any client exports into `./research-data/` and I'll fold them in.

### 2.6 Phase 2 bottom line

Three findings that reshape the plan:
1. The "collapse" is a stopped ad campaign; **organic is flat, direct is up** — no emergency.
2. The site is a **warm-traffic validation tool**, so **proof + pricing clarity are the highest-leverage fixes** (they act on the 74% who already know you). SEO is a real but *medium-term* ICP opportunity, not the near-term lever.
3. **Conversion tracking is broken** and must be fixed before any lead/ROI number means anything.

---

## PHASE 3 — Competitor verification + teardown (fetched live 2026-07-09)

**Corrections to the brief's unverified figures (important):**
- **Strong Digital is NOT a $5k–$8k one-off.** It's a **monthly subscription**: sites from **$850/mo +GST** (Foundational) → $1,500 → $2,500; eCommerce $3,500→$4,500→$6,000/mo +GST; 12-month initial term. The "$5,000–$8,000 SMB sweet spot" snippet is **superseded** — do not cite it. Source: https://strong.digital/websites/ , https://strong.digital/ecommerce-websites/
- **Digital Nomads HQ's page-count ladder is NOT published.** The packages page now shows feature lists + "Request A Quote," no dollar figures. Their blog says SMB sites "start at $5,000." Treat the $2,997–$14,997 ladder as **stale/unverified.** Source: https://digitalnomadshq.com.au/web-design-packages/ , https://digitalnomadshq.com.au/blog/website-design-cost-in-australia/
- **Ape-X is a digital-marketing agency**, not a web-first studio — web is one line item. Source: https://ape-x.com.au/web-design/
- **WP Creative blocked automated fetch (HTTP 403).** Its figures are from Google snippets quoting WP Creative's own pages — flagged VERIFIED-via-snippet, spot-check in a browser before quoting externally.

### 3.1 Comparison table

| Studio | Positioning | Published price (VERIFIED live) | How they present PROOF | Target audience | Wedge |
|---|---|---|---|---|---|
| **Ape-X** ape-x.com.au | "#1 Digital Marketing Agency Brisbane" | Web **$3,000–$4,000** (client content) / **$5,000** (done-for-you); larger = consultative. Marketing retainers min $1,500/mo, sweet spot $2,500–4,500/mo | **Business outcomes, strong** — "+$200k revenue in 3 months", "5x leads", "342% organic". Zero craft metrics | Service SMBs $1–20M, trades/health/finance/legal | Selective, in-house "Tribe", month-to-month, SEO-baked |
| **Strong Digital** strong.digital | "Strong website. Stronger Business." / "Australian Built Websites For the Small And Mighty" | **Subscription:** sites **$850–$2,500/mo +GST**; eComm **$3,500–$6,000/mo +GST**; 12-mo term | **Mixed** — one hard number ("+64% YoY sales"), rest design/UX praise | "The small and mighty" — time-poor owner-operators | **Handcrafted, no templates, no off-shoring, no account managers, direct access** (your twin) |
| **Jimmyweb** jimmyweb.net | "The leading Sydney web design agency, for ambitious Aussie brands" | **Not published** (quote only) | **Craft/aesthetic only** — "clean, sharp, high-converting"; no numbers; no named testimonials; 4.9★ (26) | SMB→enterprise, AU-only | "In-house… complete control over quality", "won't disappear", no lock-in |
| **iSonic** isonic.com.au | "Integrated Digital Marketing that Drives Real Growth" | **Not published** | **Business outcomes** — "200+ leads/mo", "7404% ROI", "416% visibility". No named testimonials | Brisbane/national SMB, eComm, franchise | "local in-house team… pop into our office" (softest in-house claim; no explicit "no offshore") |
| **Digital Nomads HQ** digitalnomadshq.com.au | "Remarkable Marketing, Genuine Partnership" | Web builds **not published**; SEO from $1,500/mo, Ads from $1,000/mo, full-service $3,000+/mo | **Business outcomes, at scale** — "735% organic sessions", "1176% top-3 keywords" (30+ studies). No named testimonials | Sunshine Coast→national/ASX200; incl. construction | **"No white-labelling, no offshore outsourcing"** (most combative in-house claim) |
| **WP Creative** wpcreative.com.au | "the web agency behind better marketing" | Custom **from ~$10k** (range $2,500→$100,000+); retainers from $1k/mo; SEO $500–2,000/mo *(via snippet)* | **Best proof pattern** — pairs craft + business: "29% traffic, 75% quote increase, 102% speed"; 100×5★; "1,200+ projects" | "Marketers" / scaling brands AU+US | Trademarked "Marketechs™ / GrowthStack™"; site-as-marketing-engine |
| **KND** knd.au | "Reaching peak performance requires the right digital team" | **Not published** (consultation-gated) | Outcome-*themed* but **un-quantified**; blue-chip + **government** logos (Qld Revenue Office, JBS, Orange Sky) | **SMB + Government** | Full-stack team; enterprise + government roster (real moat) |
| **Chillybin** chillybin.co *(budget anchor)* | "High-Performance Websites. Zero Compromise." | **Not published** (no pricing page) | Outcome-*worded*, un-quantified; "500+ projects, 85% retention" | Marketing/leadership teams SG+Brisbane | Fast/secure WordPress; **client supplies own copy** |
| **Hireadev** hireadev.com.au *(budget anchor / floor)* | "A full-custom Brisbane website for $999" | **$999** (1-page splash) / **from $2,500** (5-page, 2 revisions) / custom = quote / consulting $150/hr | **Craft/engineering, NDA-gated** — "40% latency", "$2.4M cloud savings"; not customer outcomes | AU SMB by vertical + funded startups | Price + "no offshoring, Australian owned" + engineering rigor |

### 3.2 What the table says (INFERENCE, grounded in the rows above)

- **The "in-house / no outsourcing" wedge is crowded.** Strong Digital, Jimmyweb, iSonic and DNHQ all claim it; DNHQ says it hardest ("no offshore outsourcing… no one person pretending to cover six disciplines" — note that line also implicitly attacks *solo operators*). Leaning on it as your lead differentiator reads as sameness. Ironically DNHQ's jab is a thing you must answer: "solo" must be framed as *senior accountability*, not *one person spread thin*.
- **Price transparency spectrum:** Hireadev (exact floors) → WP Creative (ranges) → Ape-X (a web range) → Strong (full monthly tiers) → Jimmyweb/iSonic/KND/Chillybin/DNHQ (**nothing on web builds**). Publishing your $7,500/$9,500/$12,000 ladder is itself a **transparency differentiator** in this set — *if* the proof justifies it.
- **The proof gap is the exploitable white space.** Only WP Creative pairs a named craft+business result. Jimmyweb (your closest boutique analogue) shows **no numbers and no named testimonials**. iSonic/DNHQ show numbers but **no attributed named clients**. **A named client + a real before/after business number + an attributed quote out-proves all of them at once.**
- **Market floor for genuinely-custom** sits around **$5k (DNHQ blog "start at $5,000") to ~$10k (WP Creative custom)**. Template/entry shops top out ~$5k (Ape-X done-for-you) and the true budget floor is $999–$2,500 (Hireadev). **A $7,500 floor sits cleanly above the template band and at the low end of genuinely-custom — exactly where premium-boutique belongs.**
- **Positioning white space (unowned):** WP Creative owns "site as marketing engine (for marketers)"; KND owns "enterprise + government"; the anchors own "cheap + fast + onshore"; Strong owns "small-and-mighty subscription." **Nobody strongly owns "the established/rebranding owner-operated service business that wants a durable, low-maintenance custom build that still performs in five years, from one senior person who owns the outcome."** That is your lane.

---

## PHASE 4 — ICP research (AU SMBs: healthcare, construction, professional services)

Full citations below. Evidence-quality caveat from the research: rigorous *independent* AU buyer surveys for "how a [vertical] picks a web developer" barely exist; much vertical material is from AU agencies with a commercial interest (directional, not gospel). The independent anchors are **HIA, The Good Builder, NSW Law Society Journal, ASIC, Deloitte, Hinge**. Percentages are directional unless the source is independent.

### 4.1 Buying triggers (why *now*)
- **Healthcare:** rebrand after adding services/locations; an outdated site "subconsciously signalling" the practice is behind on clinical tech; online booking now table-stakes (~51% of new dental patients find a dentist via search; >70% of dental searches mobile). AHPRA compliance is a *latent* constraint discovered during a redesign, not usually the primary trigger. Sources: https://medicalmarketingaustralia.com.au/medical-website-redesign-2026-checklist/ , https://elephynlabs.com/web-design-dentists-australia/
- **Construction:** the **"moving upmarket" structural shift** — builders deliberately doing "fewer homes, more money," chasing custom/commercial work (independent: https://thegoodbuilder.com.au/fewer-homes-the-same-money-the-year-queenslands-100-top-builders-changed-what-they-sell/ ). Long considered cycle — choosing a builder "can take up to 22 months / eight touchpoints" (HIA: https://hia.com.au/our-industry/housing/business-and-digital/2024/03/digital-marketing-for-builders ). Referrals drying up / escaping HiPages-style lead platforms (agency-sourced).
- **Professional services:** rebrand, merger, new practice area, or platform "hitting its ceiling" (https://picassomedia.com.au/web-design/law-firm-website-design-how-to-do-it-right/ ); credibility gap — 44.3% said an outdated site raises doubts about a firm's quality/tech capability (AU pub citing US survey: https://lsj.com.au/articles/form-function-freshness-law-firms-and-website-design/ ); compliance as live constraint (ASIC RG 234 / s923A: https://www.asic.gov.au/regulatory-resources/find-a-document/regulatory-guides/rg-234-advertising-financial-products-and-services-including-credit-good-practice-guidance/ ).
- **Cross-vertical:** redesign is cyclical (~3–5 yrs; 81% have redesigned at least once; 90% plan to invest within 12 months — US/global Clutch: https://clutch.co/resources/state-of-small-business-websites-2025 ). >60% of AU visits are mobile.

### 4.2 Decision criteria (what they evaluate)
- **Healthcare:** AHPRA-compliance fluency ranked *first* (knows testimonial/before-after/specialist-title rules unprompted); booking/PMS integration competence (HotDoc, HealthEngine, Cliniko, Best Practice, etc.); 85+ mobile PageSpeed; local/suburb SEO; **source-code ownership / no lock-in**; warranty; post-launch support. https://webstallion.com.au/blog/dental-website-design-australia/
- **Construction:** portfolio of real, comparable, still-live work (top predictor — "see their last 5–10 projects"); trades specialisation; **lead-gen/SEO capability not just aesthetics** (born of the "$3,000 and got zero leads" scar); tender-ready capability (capability statements, HIA/MBA accreditations, safety); provider longevity/stability. https://odinwebsitedesign.com/blog/how-to-choose-a-web-designer , https://egsolutions.com.au/industries/construction/
- **Professional services:** **reputation is the #1 selection factor**; industry/subject-matter expertise rising fast (valued by 32.2%, up from 20.6%); **price tipped the decision only ~8% of the time** (Hinge, US/global but travels well: https://hingemarketing.com/library/article/how_buyers_buy_professional_services_buyers_study ). Peer-firm portfolio is the fastest trust shortcut. https://accountantwebdesign.com.au/articles/who-is-the-best-website-designer-for-accountants-in-2025/
- **Cross-vertical:** <30% of SMBs ask process-specific questions — most rely on **portfolio + price**; trust is peer-driven (77% consult reviews; 73% trust peer recs > vendor sites 55% — Sopro/Forrester); buyers increasingly screen for **case studies with measurable results**. https://sopro.io/resources/blog/b2b-buyer-statistics-and-insights/ , https://cliquestudios.com/faq/how-to-choose-a-web-design-agency

### 4.3 Top objections (what makes them hesitate)
- **Healthcare:** "we're already full"; can't prove marketing ROI (only ~1% of practices can — https://improvado.io/blog/healthcare-marketing-attribution ); clinician time to review/author content; compliance fear (publishing risk); scope-creep fear (want fixed quotes).
- **Construction:** **"I get all my work by word of mouth / don't need a website"** (most-cited); "websites don't get me work" (the "$3,000, zero leads" scar); can't see ROI; too busy on the tools; scepticism of marketers. https://www.tradiewebguys.com.au/why-your-tradie-website-design-isnt-getting-you-more-jobs/
- **Professional services:** "our business comes from referrals, not the web" — empirically weak because the modern referral is *validated online before contact* (Doyle's/LinkedIn/site checked first: https://prodonovich.com.au/blog/how-to-strengthen-word-of-mouth-referrals-professional-services ); fear of losing rankings during a rebuild; committee/partner disagreement.
- **Cross-vertical (AU-specific):** AU SMBs without a site cite "too small" (44%), "too expensive" (30%), "no time" (17%) — **Australians are more price-conscious than US buyers** (GoDaddy/Yellow: https://www.godaddy.com/resources/au/stories/study-reveals-why-59-of-australian-small-businesses-dont-have-a-website ). "Fear of paying twice" (cheap build → rebuild) is a documented regret pattern: https://norakramerdesigns.com/the-hidden-cost-of-cheap-web-design/

### 4.4 What makes them pay a PREMIUM (the core question)
- **Healthcare:** single-new-patient ROI (high LTV — one extra patient/month can cover the build); quantified cost-of-cheap (AU worked example: mobile PageSpeed 91→45 raises abandonment ~53%, ~4–5 lost enquiries/mo ≈ ~$18k/yr at $300/appt: https://webstallion.com.au/blog/dental-website-design-australia/ ); design-as-clinical-competence-proxy; **AHPRA-done-right sold as insurance against a regulator**. Order of persuasion: downside protection → measurable upside → time bought back.
- **Construction:** ROI framed in *jobs, not features* ("a $500 site that never ranks is dead money"); portfolio quality that **matches the builder's new upmarket level**; de-risking (the anti-"$3k-for-nothing" signal); done-for-you so they stay on the tools. Premium buyer = the **established builder moving upmarket**, not the survival-mode tradie. https://tradiecard.au/resources/how-much-does-a-tradie-website-cost-australia
- **Professional services:** price isn't the deciding factor (~8%); reputation + specialisation dominate; **specialisation commands premium fees — and they know it because they price their own work that way**; they *distrust* the cheapest quote as evidence of a generalist. Strongest lever: named specialisation + peer-firm portfolio. https://hingemarketing.com/blog/story/high-growth-study-2025-insights-into-todays-best-performing-firms
- **Cross-vertical (best AU-native datapoint):** Deloitte Access Economics (600+ AU SMBs) — businesses at *advanced* digital engagement are ~1.5× more likely to be growing revenue and earn ~1.4× more per employee (note: survey ~2016–17): https://www.deloitte.com/au/en/services/economics/perspectives/connected-small-businesses-google.html . Behavioural mechanism: B2B buyers optimise for *defensibility* ("who won't make me look incompetent?") and use price as a **quality/risk heuristic** — a low price can signal *higher* risk: https://dreamdata.io/blog/why-b2b-buyers-choose-safe-decisions-over-better-ones . Case studies lift willingness-to-pay ~10–15% vs ~5% for basic testimonials: https://www.paddle.com/studios/shows/profitwell-report/case-studies-customer-stories

### 4.5 Synthesis — the four premium levers (ordered by evidence strength)
1. **Named industry specialisation** — strongest, most consistent; sets the price ceiling and doubles as risk-reduction (AHPRA / tender-ready / TPB-ASIC fluency).
2. **Proof of business results / peer-relevant portfolio** — buyers screen for measurable case studies; raises WTP ~10–15%. *(This is RAVENCI's missing asset — Phase 2.)*
3. **Reduced risk / anti-"paying twice"** — maps directly onto your existing "long-term solutions vs plugin-clutter" differentiator: code ownership, no lock-in, warranty, longevity. A 20–25-yr solo operator's stability is itself a named premium signal.
4. **Done-for-you convenience + partnership** — "tell me the problem, I'll take it from there" *is* the premium; it neutralises "no time."

**The conversion reframe (well-supported):** *raise the stakes and lower the risk simultaneously* — make vivid what a cheap/bad site actually costs (lost enquiries, AHPRA exposure, looking like the cheap operator, rebuilding within 18 months), while removing the fear of choosing you (named references, transparent scoped pricing that exposes the cheap quote as the *lesser product*, ownership, guarantees, longevity).

**Claims flagged DO-NOT-PUBLISH without primary verification** (from the research): the "38% redid within 18 months (Clutch)" stat (**not found in Clutch — likely fabricated**); second-hand Stanford/McKinsey/Bain-Google figures; specific AHPRA penalty dollar amounts; and note Deloitte's AU data is ~2016–17 vintage.

---

## PHASE 5 — Gap analysis + recommendations

### 5.1 Testing your pricing hypothesis

> *"RAVENCI's $4,950 floor sits at/below template-shop ceilings and below the custom-tier entry (~$5,499+), incongruent with premium positioning; move the floor to ~$7,500 and add a flagship anchor above the current top."*

**Verdict: CONFIRMED for the live site, and already half-solved in the repo.**
- **True on the live site:** $4,950 overlaps the template band — Ape-X done-for-you is ~$5,000, Hireadev 5-page is $2,500, and "custom starts ~$5,000" per DNHQ's own blog. At $4,950 you are priced *as a template shop that happens to be custom* — which invites the bottom-of-market lead and the "too expensive for what looks like a template price" objection simultaneously.
- **The corrected competitive fact:** the "$5,499 custom entry" in your hypothesis came from Strong Digital, which is actually **subscription ($850/mo+)**, not a one-off. The real one-off custom entry point in your set is **~$7.5k–$10k** (you at repo-$7,500; WP Creative ~$10k). So $7,500 doesn't just clear templates — it *lands you at the genuinely-custom entry point*, which is exactly right for premium-boutique.
- **Already implemented:** the repo floor is $7,500 (Phase 1.1). The hypothesis's first half needs a **deploy**, not a decision.
- **Flagship anchor — CONFIRMED as a gap.** Your top tier is "Scope to fit" (unpriced). Behavioural pricing says an explicit high anchor pulls the middle up and makes $12k read as mid-range. WP Creative openly ranges to "$100,000+"; KND plays enterprise/government. You need a *named, priced* flagship.

### 5.2 Recommended pricing ladder

Framing every tier as **outcome + who it's for**, published as "from $X" (transparency differentiator vs the 5 competitors who hide web pricing). Confidence reflects evidence strength *and* the absence of your own sales data (Phase 2) — treat these as directional until you have a quote/close log.

| Tier | Name (suggested) | Recommended price | vs repo now | Confidence | Rationale |
|---|---|---|---|---|---|
| 1 (floor) | **Business Website** | **from $7,500** (hold) | = $7,500 | **HIGH** | Clears template band; = genuinely-custom entry (WP Creative ~$10k, market ~$5k). Deploy it. Don't drop below. |
| 2 | **Custom Website** | **from $10,000** | +$500 (from $9,500) | **MEDIUM-HIGH** | Rounds to the psychological "custom = ~$10k" anchor WP Creative sets; widens the gap from the floor so tiers read as distinct. |
| 3 | **eCommerce** | **from $12,000** (hold) | = $12,000 | **MEDIUM-HIGH** | Custom eComm is genuinely more work (GoingDark/Cadeaurable evidence); sits above Strong's annualised eComm entry. |
| 4 | **Custom eCommerce / Platform** | **from $18,000** | replaces "Scope to fit" with a floor | **MEDIUM** | Give the open-ended tier a *starting number* so it stops reading as "call us"; still scope-to-fit above it. |
| 5 (NEW) | **Signature / Flagship** | **from $30,000** | new anchor | **MEDIUM (anchoring), LOW (demand)** | Explicit high anchor makes tiers 1–3 read as sensible; credible given WP Creative→$100k, KND enterprise. Won't sell often — that's the point. Validate demand before leaning on it. |

**Notes:**
- **Should the floor go higher than $7,500?** Tempting (WP Creative's custom floor is ~$10k) but not yet — without your own close-rate data, $7,500 is the defensible minimum that clears templates. Revisit after 5–10 quotes at the new floor. (Confidence that $7,500 is *at least* correct: HIGH. Confidence it's *optimal*: MEDIUM.)
- **Retainers ($350/$750/$1,800/$3,000)** are well-structured and align with the ICP "reduced-risk / ongoing partnership" lever — leave them, but rename tier language toward outcomes (see 5.4).
- **Publish the ladder.** Five of eight competitors hide web pricing; a clear "from $X" ladder + a "why we cost more than a $999 site" explainer is a transparency + risk-reduction win.

### 5.3 Testing your differentiation wedge

> *"'No outsourcing / 25 yrs / in-house' is claimed by iSonic and Jimmyweb too — is my defensible differentiation instead the proprietary block system + measurable business outcomes?"*

**Verdict: CONFIRMED. Drop "no outsourcing" as the *lead*; make it a supporting reassurance.**
- The wedge is **crowded**: Strong Digital ("no off-shoring… no faceless outsourcing"), Jimmyweb ("in-house… won't disappear"), iSonic ("local in-house team"), **DNHQ ("no offshore outsourcing… no one person pretending to cover six disciplines")**. DNHQ's line actively attacks solo operators — so "in-house" alone doesn't even protect you; it invites the "you're just one person" objection.
- **Your defensible differentiation** (confirmed by Phase 4's premium levers):
  1. **Proprietary block system** — a genuine, uncopied technical asset. Frame it as the *client* benefit: "you edit everything yourself, nothing breaks, no plugin clutter to rot, still fast in five years." This is your "no plugin-clutter / durable" story made concrete, and it's the anti-"paying twice" lever (Phase 4 lever #3).
  2. **Longevity as proof** — "built properly, still working in five years" + Peninsula Homes "two years on, untouched" + Nikita Morell "three years on, still humming." Longevity *is* the premium signal for risk-averse buyers.
  3. **Named-client business outcomes** — the lever every competitor is weak on (lever #2).
  4. **Senior solo accountability, reframed** — turn DNHQ's jab around: not "one person spread thin" but "the person who quotes it builds it and answers the phone in five years — no account-manager layer, no juniors, no handoff." Strong Digital and Jimmyweb sell "direct access"; you go further — *direct access to a 25-year principal*, not a 5-person team on a 4-day week.
- **"Structural engineer" is your single most uncopied asset** — none of the eight competitors has an equivalent. It's the credibility root of "engineering / built to last / still working in five years." Lean into it harder.

### 5.4 Positioning statement (separating you from the twins)

**The twins:** Strong Digital = "small-and-mighty," subscription, team, 4-day week. Ape-X = marketing agency renting month-to-month results. Both are *volume/growth* plays.

**Recommended positioning (INFERENCE — a synthesis, not a fetched claim):**

> **RAVENCI builds custom websites that still perform in five years — for established Australian businesses that are done with cheap sites they have to rebuild.**
> One senior developer (structural engineer, 25+ years) designs, builds and maintains it on a proprietary block system: no plugin clutter, no offshore handoff, no account-manager layer. You own everything, you can edit it yourself, and the person who quotes your project is the person who still answers the phone years later. *Tell me the problem — I'll take it from there.*

Why it separates you: it's **durability + senior-solo-accountability + ownership**, not growth-hacking (Ape-X) or affordable-subscription (Strong). It answers DNHQ's "solo" jab head-on (senior, not spread-thin). It's aimed at the *rebranding/upmarket* buyer identified in Phase 4 (the builder moving upmarket, the firm whose site "should look as established as they are").

### 5.5 Prioritised content edits (ranked by impact on defusing price objections)

Each item: **current → proposed → the finding that justifies it.** Ranked highest-impact first.

**① Case-study Results → business outcomes** *(highest impact — the top conversion gap)*
- **Current:** 8/9 Results tiles show PageSpeed/LCP; business outcomes buried in prose (Phase 1.4).
- **Proposed:** lead every Results block with a business-outcome tile where data exists; reframe craft metrics as *supporting* evidence. Drafts in Phase 6.
- **Finding:** Phase 4 lever #2 (case studies raise WTP 10–15%); Phase 3 (Jimmyweb/iSonic/DNHQ all lack *named-client* outcomes — this out-proves them); your own diagnosis.

**② Publish + reframe the pricing/cost page at the new floor** *(defuses the core objection directly)*
- **Current:** live ladder $4,950 (template-band); repo ladder $7,500 but deliverables-list framed; top tier unpriced.
- **Proposed:** deploy $7,500 ladder; reframe each tier as outcome + who-it's-for + risk-reduction; add flagship anchor; add a short "why we cost more than a $999 site" section using the "paying twice" logic. Draft in Phase 6.
- **Finding:** Phase 5.1 (floor); Phase 4.4 (price-as-risk-heuristic; paying-twice regret); Phase 3 (publishing = transparency differentiator).

**③ Add named industry-specialisation signals** *(strongest premium lever, currently implicit)*
- **Current:** service/industry pages exist (construction, healthcare) but don't foreground compliance/tender fluency as *risk-reduction*.
- **Proposed:** on healthcare, lead with AHPRA-advertising fluency + AU booking/PMS integration (HotDoc/Cliniko/etc.); on construction, lead with tender-ready capability presentation + portfolio-at-your-level; add a professional-services page leading with compliance fluency (TPB/ASIC) + peer-firm portfolio.
- **Finding:** Phase 4.5 lever #1 (named specialisation sets the ceiling and doubles as insurance-against-a-regulator).

**④ Reframe the "in-house/no-outsourcing" line; elevate the block system + longevity** *(protects the premium from the "just one person" jab)*
- **Current:** in-house/no-outsourcing carries differentiation weight it can't hold (crowded); block system under-sold as a client benefit.
- **Proposed:** demote "no outsourcing" to a reassurance bullet; lead with the block-system client benefit ("edit it yourself, nothing breaks, still fast in five years") and senior-solo accountability.
- **Finding:** Phase 3.2 (crowded wedge; DNHQ's anti-solo jab); Phase 5.3.

**⑤ Homepage proof injection** *(convert the strong message into a converting one)*
- **Current:** "pay for themselves" H1 is excellent but unsupported near the fold.
- **Proposed:** place one named-client business outcome within the first viewport (e.g. GoingDark "+38.5% purchaser rate" with logo) once ② is done.
- **Finding:** Phase 1.2; Phase 4.2 (portfolio/proof is a primary shortlist filter).

**⑥ Resolve "agency/team" vs solo language** *(coherence; lower urgency)*
- **Current:** "agency", "the team", "we" throughout for a solo operator.
- **Proposed:** decide deliberately. Recommend leaning *into* senior-solo ("I", Richard) as the differentiator, keeping "we" only where collaborators (The Design Order) are genuinely involved.
- **Finding:** Phase 5.3 (senior-solo accountability is the defensible frame); Phase 1.5.

---

## PHASE 6 — Draft rewrites (ready to review; NOT applied to the site)

> All drafts below are proposals only. `[NEED FROM RICHARD]` marks a real metric you must supply — do not publish a fabricated number. Where you have no business number for a client, the draft falls back to a *verifiable* non-craft outcome (longevity, repeat business, ranking) rather than a PageSpeed score.

### 6.1 Case-study Results reframes

**GoingDark** *(already business-led — light polish; the model for the rest)*
- Keep the three tiles (`+38.5%` purchaser rate, `+12.5%` organic, `+57%` session duration). Add a one-line business framing above them:
  > **"Three months after relaunch, more visitors were buying, more were finding them on Google, and they were staying longer to compare gear."**
- Move the PageSpeed/LCP numbers into a smaller "under the hood" line beneath. `[NEED FROM RICHARD: revenue or AOV change, if Jo will share — would make this the flagship case study.]`

**Covenant Security** *(strong story, craft-free already — sharpen the tiles)*
- Current tiles: "4 wks brand→launch", "1–2 mo lead time yr 1." Proposed:
  > **Booked 1–2 months in advance within year one.** · **Ranked at/near #1 for Brisbane security searches** (incl. AI summaries) · **Four weeks** brand-to-trading.
- Lead paragraph reframe:
  > "Word of mouth and organic search did the work. Covenant ranked early for Brisbane-area security searches, and within their first year of trading they were booked one to two months in advance — without paid ads carrying it." `[NEED FROM RICHARD: enquiries/month or jobs/month figure, year 1 vs now, if Adam will share.]`

**Peninsula Homes** *(currently craft-only — reframe around durability + [NEED])*
- Proposed tiles: **2 years live, zero rebuilds** · **Still 90+ PageSpeed** (kept as *proof of durability*, not the headline) · `[NEED FROM RICHARD: enquiry/lead volume change since launch, or "referral-driven — X% of new builds cite the site," if Peninsula will share]`.
- Lead reframe:
  > "Two years on, the site hasn't been touched, rebuilt, or slowed down — the same shape and speed it launched with, still clearing the 75+ PageSpeed bar their SEO consultant set. For a builder whose work comes largely through referral, the site does its job quietly: making Peninsula look like the calibre of builder they are the moment a referred client checks them out." `[NEED: any enquiry/referral-conversion number.]`

**Nikita Morell** *(prof-services; reframe craft → business continuity)*
- Proposed tiles: **3 years live, still edited by Nikita herself** · **Long-term partnership → 5+ projects** (incl. DIRT) · `[NEED FROM RICHARD: any traffic/enquiry/newsletter-signup change, if available]`.
- Keep the honest "Performance sits at 85, not 90+, and that's the cost of Divi" line — it's a *trust* asset (matches the Integrity value) and should stay.

**DIRT** *(too new — set expectation, don't fabricate)*
- Keep as-is but change the promise to a dated commitment:
  > "Launched April 2026. Traffic and conversion data are still accumulating — this case study will be updated with business results in `[NEED FROM RICHARD: date]`." Retain the craft tiles as interim proof, clearly labelled interim.

**Cadeaurable / SAC Consulting** *(reframe to verifiable non-craft outcomes)*
- Cadeaurable: lead with **repeat-purchase / review behaviour** ("customers routinely return for the next event; reviews single out response time") + `[NEED: repeat-order rate or review count/rating]`; demote PageSpeed.
- SAC (no metrics): add a business-continuity tile — **"On the road every week; the platform + podcast carry the authority"** + `[NEED: podcast reach or enquiry data if Skye will share]`.

**Template for all future case studies (add to `case-studies.ts` authoring notes):**
> Results tiles must lead with a *business* metric (enquiries, leads, revenue, rankings, repeat rate, lead-time). Craft metrics (PageSpeed/LCP) go in a secondary "under the hood" line as *durability/quality* proof, never as the headline.

### 6.2 Cost/pricing page reframe (deliverables → outcomes, at the new floor)

**Current pattern:** tiers are deliverables lists ("What's Included" accordions) with a price. **Proposed pattern:** each tier leads with the *outcome and the buyer*, states "from $X", and the deliverables move *below* as reassurance. Add a framing section that does the "raise-the-stakes / lower-the-risk" work.

**Page intro (new section — the price-objection defuser):**
> **Why a RAVENCI site costs more than a $999 one**
> You can buy a website for $999. You'll get one page, no revisions, and a template you'll be rebuilding inside two years. The cheapest quote is usually the most expensive site you'll ever own — because you pay for it twice.
> A RAVENCI build is custom, owned by you, editable by you, and built on a system with no plugin clutter to rot. The sites I built five years ago are still fast, still ranking, still untouched. You're not buying pages — you're buying a business asset that keeps working after launch day. Tell me the problem; I'll take it from there.

*(Justification: Phase 4.4 price-as-risk-heuristic + paying-twice regret; Phase 3 budget-anchor contrast — Hireadev's $999 = literally one page, no revisions.)*

**Tier cards (proposed copy — prices per §5.2):**

> **Business Website — from $7,500**
> *For the established business whose site should look as credible as they are.* A custom, fast, search-ready site that still performs in five years. You own it, you can edit it, and it won't need rebuilding. `[Deliverables list below.]`

> **Custom Website — from $10,000**
> *For businesses that need the site to do something specific* — integrations, bespoke interactions, industry-specific flows — without a stack of plugins to maintain.

> **eCommerce — from $12,000**
> *For product businesses that want a store built to sell and to last* — the right platform for your products (Shopify or BigCommerce), no app-subscription tower, fast on every product page.

> **Custom eCommerce / Platform — from $18,000**
> *For stores with real complexity* — deep personalisation, custom logic, migrations done properly.

> **Signature — from $30,000**
> *For the flagship build* — brand, site and system as one considered asset, senior-led end to end.

**Industry reassurance block (new — Phase 4 lever #1):**
> **Built for your industry.** Healthcare: AHPRA-compliant, integrated with the booking/PMS tools you already use. Construction: tender-ready capability presentation and a portfolio that matches the level you build at. Professional services: compliant, credible, and built to look as established as your firm. `[NEED FROM RICHARD: confirm you want a dedicated professional-services industry page — currently none exists; construction & healthcare pages do.]`

**Metrics/claims to supply or confirm before this page ships:**
- `[NEED FROM RICHARD]` Final call on tier prices in §5.2 (esp. Custom Website $9,500→$10,000, new $18k and $30k tiers).
- `[NEED FROM RICHARD]` At least one named-client business outcome to embed on the pricing page as proof (GoingDark is the readiest).
- `[NEED FROM RICHARD]` Whether to keep "Scope to fit" language anywhere, or replace entirely with "from $18,000 / from $30,000."
- `[NEED FROM RICHARD]` AHPRA penalty specifics if you want to quote them — verify on AHPRA's own site first (research flagged secondary sources as unreliable).

---

## PHASE 7 — Quick-win drafts (proposals — NOT applied to site code)

### 7.1 Close log (started 2026-07 — keep adding to this)

| Month | Prospect | Offer | Outcome | Lost reason |
|---|---|---|---|---|
| 2026-07 | DIRT | SEO Retainer (3-month trial) | **Won** | — (existing client) |
| 2026-07 | Coast Constructions + Coast Formwork | Website package (one package, both entities) | **Lost** | `[NEED: ask why — price? timing? fit?]` |
| 2026-07 | `[pending]` | Website | **Open** | — |

**Read (small sample — do not over-interpret):** 1 of 3 closed this month, but the win was a *retainer trial* on an existing client, not a new build. New-build close rate this month is 0 of 2 (one lost, one open). That's far too little to adjust the pricing ladder — **the value here is the habit.** Log every quote with a **lost-reason**, because the one thing that would actually validate or refute the $7,500 floor is a run of "lost — too expensive" vs "lost — timing/fit." Ask Coast why they said no; that single data point is worth more than the count. Target: ~10 quotes logged before we revisit §5.2 pricing confidence.

### 7.2 Fix GA4 lead tracking (config + code draft)

**Problem (Phase 2.4):** 174 "key events" on `/launch-your-vision` across 170 sessions at 1s engagement = an event auto-firing on load, not real leads. Two-part fix:

**Part A — GA4 Admin (no code, do this first):**
1. Admin → **Key events** (formerly Conversions). Identify the event currently marked key that fires on nearly every session (likely `form_start`, `page_view`, or `session_start`).
2. **Un-mark it** as a key event. This stops the inflated count immediately.

**Part B — fire a real lead event on submit success (code — draft, not applied).**
`window.gtag` is already global (`layout.tsx:212` + `<GoogleAnalytics>` at `:214`), so each form only needs one line in its existing success branch:

```js
// helper (add once, e.g. src/lib/analytics.ts)
export function trackLead(formName: string) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "generate_lead", { form_name: formName, value: 1 });
  }
}
```

Call sites (add after each success state is set):
- `src/components/launch-your-vision-form.tsx` — after `setSubmitStatus("success")` (~line 70): `trackLead("launch-your-vision");`
- `src/components/visibility-check-form.tsx` — after `setStatus("success")` (~line 43): `trackLead("visibility-check");`
- Any audit-report-request / free-audit form success branch: `trackLead("audit-report-request");`

Then Admin → mark **`generate_lead`** as a key event.

**Notes:** consent is denied-by-default until the cookie banner is accepted (`analytics_storage:'denied'`, `layout.tsx:212`), so `generate_lead` records only for consented visitors — expected, and honest. The 1s-engagement anomaly on `/launch-your-vision` should also be eyeballed manually (confirm the page isn't mis-rendering for real users).

### 7.3 Title/meta rewrites to earn the clicks you're already ranking for

**The one true CTR win — `/web-development`** (ranks **pos 4.4** on 270 impressions but **0 clicks** — good rank, weak snippet):
- **Current title:** `Web Development | RAVENCI Solutions`
- **Current description:** *"Custom web development in Brisbane. Modern, responsive websites and eCommerce platforms built for performance and designed to convert visitors into customers."*
- **Proposed title:** `Custom Website Design Brisbane, Built to Last | RAVENCI`
- **Proposed description:** *"Custom websites for established Brisbane businesses — fast, owned by you, still working in five years. No templates, no plugin clutter. From $7,500."*
- **Why:** the current snippet is generic and pricephobic; the proposed one leads with the differentiator (durability/ownership/no-clutter) and **includes "From $7,500" to pre-qualify** — you *want* to lose the bargain-hunter click and win the established-business click. Files: `web-development/page.tsx:12-14` and the OG mirror at `:18-20`. (Location: `layout.tsx:42` already carries "$7,500" so this is consistent.)

**ICP pages — rank problem, not snippet problem (be honest):** `/construction` (pos 24–36) and `/healthcare` (pos 27) already have strong, specific meta (QBCC/85+/$7,500; Cliniko/HotDoc/APP). Rewriting titles won't lift them off page 3 — **that needs content depth + internal links + local signals**, which is the Phase 5 §③ / Phase 2.3 medium-term play, not a meta tweak. Optional light title tweaks to match the exact high-intent queries seen in GSC:
- `/construction` title → `Construction Website Design Brisbane | RAVENCI` (matches "construction website design company", "website designer for construction businesses").
- `/healthcare` title → `Healthcare & Medical Website Design Brisbane | RAVENCI`.
- `/cost-of-a-website-in-brisbane` (pos 36 on 490 impressions for "website design brisbane price/cost") is a **ranking** target — the page exists and targets the right query but sits on page 4. Prioritise it for internal links from `/web-development` and `/about`, and freshening, rather than a meta edit.

### 7.4 Naming & search language (the honest "design" reframe)

**Finding (grounded in your GSC `Queries.csv`):** ICP demand is on **"design" language** by ~10:1 over "development" — "website design brisbane price" (119 impr), "web designer brisbane" (19), "web designer near me" (23), suburb variants — while "development" queries are few and skew to **apps/software/PHP** (a different buyer served by `/web-apps`). Your `/web-development` page ranks pos 4.4 for design queries but says "Development" in the snippet — a word-mismatch that costs the click.

**Recommendation — reframe ICP-facing pages to "design," honestly:**
- In buyer vernacular, **"website design" means "build me a website," not "design only."** You deliver the whole website, so using the term is *accurate*. (The misleading direction — calling it "design" and delivering only design — is one you never do.)
- **Rule:** lead with "design" in titles/H1s (findability); state plainly in the body that it's **custom-built / hand-coded / owned by you** (accuracy — and it's your premium differentiator, so honesty and marketing align).
- **Keep** "development / engineering / build" as the *quality* language in the body and as the *primary* language on genuinely technical pages (`/web-apps`, software/app buyers who really do search "development").
- **Honesty guardrails:** (1) where a design partner did the visual design (The Design Order on Peninsula/Nikita/SAC), keep the credit — the accurate umbrella is "designed **and** built," not "I'm a designer"; (2) route app/software intent to `/web-apps` so that buyer isn't mis-sold either.

**Honest draft — `/web-development` (rename toward "design"):**
> **H1:** Custom website design for established Brisbane businesses
> **Sub:** Designed *and built* by one senior developer — no templates, no offshore, no plugin clutter. You own it, you can edit it, and it's still working in five years.
> **Scope line:** Every project is a fully custom website — the design *and* the code. I design it around your business, then hand-build it so it stays fast and stays yours. Not a theme you rent.

Pages to shift from "development" → "design" in title/H1 (ICP marketing-site pages): `/web-development`, and the industry pages `/construction`, `/healthcare`, plus a future professional-services page. Pages to **leave** in "development"/technical language: `/web-apps`, `/mobile-apps`.

---

## Appendix — method & reliability notes

- **Repo facts** are cited to file:line and were read directly from the working tree on `main` (post the fixes pushed this session).
- **Competitor facts** were fetched live 2026-07-09. Exceptions: **WP Creative** (HTTP 403 — figures via Google snippets quoting its own pages; spot-check before external use). **Strong Digital** and **Digital Nomads HQ** brief figures were **corrected** against live pages (see §3). Where a live page showed no price it is marked **not published**.
- **ICP facts** carry source URLs inline; independent anchors (HIA, The Good Builder, NSW Law Society Journal, ASIC, Deloitte, Hinge) are distinguished from AU-agency sources (commercially interested — directional). Several commonly-cited stats were flagged **do-not-publish** pending primary verification (§4.5).
- **First-party data now partially in:** RAVENCI's own GSC (16-mo) + GA4 (12-mo) were provided 2026-07-10 and analysed in Phase 2. Still outstanding: (a) a **quote/close log** (needed to move pricing confidence from directional to grounded), and (b) **client-site before/after exports** (needed to fill the Phase 6 `[NEED FROM RICHARD]` proof gaps). Drop either into `./research-data/`.
- **Conversion tracking caveat:** GA4 "key events" are unreliable (§2.4) — no lead/ROI figure in this report should be trusted until the key event is redefined as a real form-submit.
