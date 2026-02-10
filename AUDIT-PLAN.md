# RAVENCI Solutions — Full Website Audit & Improvement Plan

---

## 1. FIRST IMPRESSIONS & PREMIUM POSITIONING

**Verdict: This site reads as a talented solo developer/freelancer, not a premium agency charging $6k-$10k+.**

### The Homepage Doesn't Establish Authority

- **"Digital Development that simply works."** — This headline is passive and generic. It could be on any dev shop's site. A business owner with $8k to spend needs to immediately feel "these people are serious and they understand my business." Instead, they get a tech tagline.
- **"Stable. Scalable. Reliable."** — These are infrastructure adjectives. They mean something to developers, nothing to a business owner deciding where to invest $10k. A premium agency leads with business outcomes: revenue, growth, competitive advantage, ROI.
- The hero section has ONE CTA ("Launch Your Vision") and a commented-out "Work" button. There is no portfolio link, no case studies, no "See our results" — the things that give an $8k buyer confidence.

### Critical Missing Elements for Premium Positioning

| What Premium Agencies Have | RAVENCI Status |
|---|---|
| Case studies with results/metrics | **Missing entirely** |
| Client testimonials (multiple, named, with photos) | **1 on homepage, 2 on service pages — no photos, no company names/roles** |
| About/Team page with professional photos | **No about page exists at all** |
| Portfolio with before/after or detailed breakdowns | **Screenshots only, no context or results** |
| Client logos from recognizable brands | **Small local businesses only** |
| Social proof numbers ("150+ projects delivered") | **Missing** |
| Industry awards/certifications/partnerships | **Missing** |
| Process/methodology page | **Missing** |
| Video testimonials | **Missing** |

### The "1VINE Design (Operating as RAVENCI)" Problem

Footer says: © 2018 - 2024 1VINE Design (Operating as RAVENCI)

This is a **premium positioning killer**. It signals:
1. You're not even fully committed to the RAVENCI name
2. It reads as a sole trader operating under a trading name, not an established agency
3. The copyright year is outdated (still says 2024)
4. "1VINE Design" sounds like a budget creative freelancer brand

### The Founder Quote Feels Like a Freelancer, Not an Agency

Using first person "I" throughout the site positions this as Richard's freelance business. Premium agencies use "we" language and present a team, even if it's small.

### The Video Section is Wasted Space

A 750px tall section with a background video and zero text overlay, zero CTA, zero messaging. This is prime real estate doing nothing.

---

## 2. QUOTE / PRICING PAGE AUDIT

### Critical Bug: Price Mismatch Will Break Checkout

**This is a live production bug.**

| Item | Frontend Price (addons.tsx/services.tsx) | Backend Validation Price (route.ts) |
|---|---|---|
| `web-hosting-addon` | **$29/mo** | **$32/mo** |
| `web-hosting` base service | **$24/mo** | **$32/mo** |

Anyone selecting web hosting will get a "Price validation failed" error and cannot checkout.

Also: FAQ on hosting page says "$29/month" but PriceButton shows $24/mo. Three different prices for the same service.

### Price Display Mismatch for "Professional Development"

`web-development/page.tsx` shows `price={7200}` for Professional Development, but `services.tsx` has `basePrice: 4960`. Quote page shows $4,960 when someone clicks through.

### Stripe Integration Issues

**Good:**
- Server-side price validation implemented
- Input validation exists
- Amount caps in place
- Webhook signature verification
- Promotion codes enabled

**Bad:**
- `isValidEmail` function defined but never called (dead code)
- Server-side `calculateServerTotals` doesn't apply discount rules — any order with bundle discounts will fail validation
- `ADDON_PRICES` in API route differs from `addons.tsx` — prices duplicated in two places that drift apart
- No rate limiting on checkout endpoint

### Fundamental Pricing Strategy Problem

- Listing fixed prices publicly invites price comparison
- Quote page functions like an e-commerce cart, not a consultation
- "Pay Now" button for $12,000 is jarring
- Installment plans with processing fees (2-10%) feel like consumer financing
- Entire checkout flow bypasses human interaction
- No scarcity, social proof, or trust signals on quote page
- Tier names don't communicate value differentiation

---

## 3. CONTENT & COPYWRITING REVIEW

### Everything Talks About What You DO, Not What Clients GET

| Current Copy (Features) | What Premium Clients Want (Outcomes) |
|---|---|
| "Responsive Design" | "Your site converts visitors on any device" |
| "Performance Optimization" | "Pages load in under 2 seconds" |
| "SEO Optimization" | "Get found by customers actively searching for your services" |
| "Google Analytics" | "Know exactly where your leads come from" |
| "Built-in Caching" | "Your customers never wait — pages load instantly" |

### Generic Copy That Could Be On Any Agency's Site

- "Professional websites that convert visitors into customers"
- "Innovative and expert solutions to a digital tomorrow"
- "Empowering growth through stability, scalability, and reliability"
- "Modern web hosting that grows with you"

### Contact Page Issues

- "Tell us a little about your awesome idea" — informal, positions you for startup clients not established businesses
- No trust signals, no "what happens next" explanation, no testimonials, no phone number, no estimated response time

### FAQ Copy is the Strongest Content

FAQ sections on service pages are well-written and address real objections. But buried at the bottom.

---

## 4. TECHNICAL SEO & PERFORMANCE

### Critical SEO Issues

- **OpenGraph URL is placeholder**: `"https://your-domain.com"` in layout.tsx
- **Sitemap missing pages**: `/mobile-apps`, `/web-apps`, `/seo-and-content`, `/quote`
- **No structured data** on most pages (only /seo-and-content has JSON-LD)
- **No LocalBusiness schema** on homepage (critical for Brisbane SEO)
- **Homepage meta description is vague**: no local keywords
- **robots.txt is bare minimum**: no disallow for /api/, /quote/success

### Performance Red Flags

- **Homepage video**: full MP4 auto-playing on page load, no lazy loading, no poster, no responsive sources
- **Client logos use `<img>` instead of Next.js `<Image>`**: missing optimization
- **Empty alt text** on standing raven image
- **Client logo grid shuffles with `Math.random()` in server component**: causes hydration mismatches

---

## 5. CONVERSION PATHWAY & USER JOURNEY

### Fragmented Path to Purchase

Too many competing CTAs with no clear hierarchy:
- "Launch Your Vision" (hero button)
- "Start Creating" (mid-page — same contact form)
- Spinning "Book Now · Free Consultation" (Calendly)
- Service page "Get a Quote" buttons
- Footer "Contact Form" link

### No Trust-Building Before Asking for Money

Quote page accessible in 1 click but nothing on the path builds trust: no case studies, no process explanation, no team showcase.

### Zero Lead Capture for Non-Ready Buyers

No email capture, no newsletter, no lead magnet, no downloadable resource anywhere.

### Navigation Issues

Hamburger menu is the ONLY navigation on desktop. No persistent nav links, no visible CTAs.

---

## 6. COMPETITIVE POSITIONING

### vs $2,000 Freelancer: Almost Nothing Differentiates You

- Sole person running business under trading name
- Fixed prices starting at $2,240
- Checkout feels like Fiverr
- Generic copy, small business logos, no portfolio context

### vs $20,000 Agency: Nothing

Missing: named team, case studies with outcomes, industry specializations, documented methodology, multiple video testimonials, gatekeeping mechanism.

### 20 Years of Experience is Being Wasted

Appears exactly once on the entire site in a blockquote. Not woven into copy, service pages, trust signals, or competitive positioning.

---

## 7. IMPLEMENTATION PLAN

### QUICK WINS (This Week)

- [x] 1. Fix price mismatch bug — `web-hosting-addon` $29 vs $32, `web-hosting` $24 vs $32
- [x] 2. Fix OpenGraph URL — change placeholder to `https://ravenci.solutions`
- [x] 3. Update copyright year — "2018 - 2024" → "2018 - 2026"
- [x] 4. Remove "1VINE Design (Operating as RAVENCI)" — use "RAVENCI Solutions"
- [x] 5. Fix empty alt text on standing raven image
- [x] 6. Replace `<img>` with `<Image>` for client logos on homepage
- [x] 7. Add `poster` attribute to homepage video
- [x] 8. Fix server discount validation — `calculateServerTotals()` doesn't apply discount rules
- [x] 9. Add missing pages to sitemap.xml
- [x] 10. Add `Disallow: /api/` and `Disallow: /quote/success` to robots.txt
- [x] 11. Add LocalBusiness JSON-LD to homepage
- [x] 12. Fix `metadataBase` warning for proper OG image resolution
- [x] 13. Fix hosting page FAQ price ($29 → $24 to match actual price)
- [x] 14. Fix hydration mismatch from `Math.random()` in server component (client logo grid)
- [x] 15. Remove dead `isValidEmail` function from checkout route

### MEDIUM-TERM IMPROVEMENTS (Next Month)

- [x] 1. Create an About page with Richard's story, 20-year journey, team, values, professional photos — `feature/about-page`
- [ ] 2. Add 3-5 case studies with problem, approach, results (with numbers), testimonial — `feature/case-studies` (in progress)
- [x] 3. Rethink quote page — replace self-serve checkout with "Request a Proposal" flow for project work; keep Stripe for hosting/maintenance
- [x] 4. Rewrite homepage copy to focus on outcomes and lead with 20 years experience
- [x] 5. Add desktop navigation — show key links persistently (Services dropdown, Articles, Get Started CTA)
- [x] 6. Add multiple testimonials with names, roles, companies — centralized data, initials avatars, shown across service pages
- [x] 7. Generate sitemap dynamically via Next.js `app/sitemap.ts`
- [x] 8. Add FAQ schema markup to all service pages with FAQs
- [x] 9. Fix homepage video performance — lazy-load with Intersection Observer
- [x] 10. Add email capture — "Free AI & Google Visibility Check" lead magnet on homepage + footer CTA, with reCAPTCHA v3

### STRATEGIC SHIFTS (Bigger Changes)

- [x] 1. Restructure pricing display — hybrid model: exact prices for hosting/maintenance, "From $X" for project work, "Enquire" for apps
- [x] 2. Replace self-serve Stripe checkout for project work — project services link to /launch-your-vision, Stripe kept for 4 self-serve services only
- [x] 3. Shift brand voice from "I/developer" to "we/agency" — homepage founder quote + 404 updated
- [x] 4. Create documented process — "The RAVENCI Method" — `/our-process` page with 6 steps, FAQ, JSON-LD
- [x] 5. Specialize or demonstrate verticals — healthcare + construction niche landing pages
- [x] 6. Remove/hide installment payment option from public site — installments removed from quote page
- [x] 7. Build proper portfolio section with context and results — case studies IS the portfolio (`feature/case-studies` branch)
- [x] 8. Invest in blog/content strategy targeting premium Brisbane web development keywords — blog infrastructure ready via Strapi CMS, content is ongoing

### POST-AUDIT FIXES (February 2026 Re-Audit)

**Critical:**
- [x] ~~1. `/privacy-policy` and `/terms-and-conditions` — already exist in `(policies)` route group (false alarm)~~
- [x] 3. Add metadata to `/articles` page — was falling back to homepage title/description
- [x] 4. Raise Stripe one-time validation cap from $5,000 to $10,000 — too low for one-off maintenance + addons
- [x] 5. Add `noindex` to `/quote/success` — transactional page should not be indexed

**High:**
- [x] 6. Differentiate Web Apps tier pricing — all 3 tiers showed "From $25,000" → now $25k/$45k/$60k
- [x] 7. Differentiate Mobile Apps tier pricing — all 3 tiers showed "From $30,000" → now $30k/$50k/$75k
- [x] 8. Add "Brisbane" to 5 meta descriptions — web-development, business-design, website-maintenance, web-hosting, our-process
- [x] 9. Fix `/launch-your-vision` generic meta description — now includes project types, Brisbane, and keywords
- [x] 10. Fix Web Dev FAQ old tier names — "Single Page Starter/Custom Development/Branding & Development" → Foundation/Growth/Premium (visible + JSON-LD)
- [x] 11. Fix Business Design FAQ delivery time mismatch — "Brand Essentials: 2 weeks" → "6 weeks" to match accordion (visible + JSON-LD)
- [x] 12. Fix Business Design Vehicle Wraps PriceButton broken link — `launch-your-vision` → `/launch-your-vision`
- [x] 13. Fix Web Dev scarcity text old tier names — "Single Page Starter/Custom Development/Branding & Development" → Foundation/Growth/Premium

---

## 8. PRICING STRATEGY — What to Show, What to Hide, What to Charge

### The Core Principle: Not All Services Are Created Equal

The answer to "should I show pricing?" is **it depends on the service type**:

| Service Type | Show Pricing? | Why |
|---|---|---|
| **Hosting** ($24-$39/mo) | **YES — show exact price** | Low commitment, commodity comparison market, buyers expect to see it |
| **Maintenance** ($195-$450) | **YES — show exact price** | Recurring/retainer services benefit from transparency; qualifies leads |
| **Web Development** ($2,240-$12,000+) | **"Starting from" only** | High-ticket project work; exact prices invite comparison shopping |
| **Business Design** ($2,480-$4,560) | **"Starting from" only** | Creative/strategic work; value varies by scope |
| **Web Apps** ($12,900-$49,900) | **"Enquire" only** | Every project is genuinely different; showing prices anchors too low |
| **Mobile Apps** ($14,900-$59,900) | **"Enquire" only** | Same — custom scoping required |
| **SEO & Content** ($2,490-$4,980/mo) | **"Starting from" only** | Retainer model suits price ranges; clients expect customisation |

### Recommended Approach Per Service:

**KEEP the Stripe self-serve checkout for:**
- Web Hosting ($39/mo — see new pricing below)
- Monthly Maintenance ($249/mo — see new pricing below)
- Hosting + Maintenance Bundle ($269/mo — see new pricing below)
- One-Off Maintenance ($495 — see new pricing below)

These are straightforward, low-friction purchases where self-serve actually helps. Buyers comparing hosting plans WANT to click and buy. Keep the quote page for these.

**REPLACE the Stripe checkout with "Request a Proposal" for:**
- All web development packages
- All business design packages
- Web apps
- Mobile apps
- SEO & Content

For these, the quote page should collect: name, email, phone, business name, service interest, budget range, project timeline, and a brief description. Then you follow up with a personalized proposal.

---

## 9. MARKET RESEARCH — What You Should Charge

### Web Hosting — CURRENTLY UNDERPRICED

**Your current price: $24/mo**

| Competitor | Price | Notes |
|---|---|---|
| WP Engine (cheapest plan, AUD) | $42/mo | Infrastructure only, no personal support |
| Kinsta (cheapest, ~AUD) | ~$47/mo | Infrastructure only |
| Flywheel | ~$23-$38 AUD/mo | Infrastructure only |
| Wolf IQ (AU agency) | $139/mo | Bundled with 15 min support |
| Complete X (AU agency) | $179/mo | Bundled with 30 min support |

**You are charging LESS than the cheapest infrastructure-only host, while offering fully managed, Brisbane-based personal support.** This is leaving significant money on the table.

**Recommended new price: $39/mo**
- Still well below WP Engine ($42) but now profitable
- Position as "Fully Managed Cloud Hosting — everything included"
- A $15/mo increase across your hosting client base is pure margin

### Monthly Maintenance — SLIGHTLY UNDERPRICED

**Your current price: $195/mo**

| Competitor | Price | Support Time |
|---|---|---|
| Wolf IQ Essentials | $139/mo | 15 min |
| Complete X Bronze | $179/mo | 30 min |
| ThemePress Care + Edits | $199/mo | 2 hours |
| Wolf IQ Pro | $259/mo | 2 hours |
| Temerity Silver | $360/mo | 1 hour |
| Wolf IQ Expert | $549/mo | 5 hours |

**Your $195/mo sits at the low end of "standard" tier.** You are competitive but should command more given your 20 years of experience and Brisbane-based support.

**Recommended new price: $249/mo**
- Positions you firmly in the standard tier with room above
- Still below the $259-$360 range of comparable agencies
- Emphasize the value: "20+ years of experience maintaining your site"

### One-Off Maintenance — FAIR BUT COULD BE HIGHER

**Your current price: $450**

| Competitor | Price |
|---|---|
| ThemePress (basic fix) | From $149 |
| Nirmal (minor fixes) | $220-$660 |
| Nirmal (security cleanup) | $550-$2,200 |
| Agency hourly rate (3-4 hrs) | $400-$600 |

**Recommended new price: $495**
- Clean round number
- Sits comfortably in the mid-range for comprehensive one-off work
- Position as a "Website Health Check & Tune-Up"

### Hosting + Maintenance Bundle — CURRENTLY GIVING AWAY HOSTING

**Your current price: $199/mo** (vs $195 maintenance + $24 hosting = $219 separately)

You're only saving the client $20/mo on the bundle, and you're effectively giving hosting away for $4/mo. With the new pricing:

**Recommended new price: $269/mo** (vs $249 maintenance + $39 hosting = $288 separately)
- Client saves $19/mo on the bundle — meaningful enough to incentivize
- You actually make money on both components
- Complete X charges $179-$289 for similar bundles

### Web Development — NEEDS RESTRUCTURING

**Your current tiers and the market:**

| Your Tier | Your Price | Market Range (Brisbane) |
|---|---|---|
| Single Page Starter | $2,240 | $1,500-$3,000 (mid), $2,995-$5,499 (premium) |
| Professional Development | $4,960 (data) / $7,200 (display) | $4,800-$9,600 (Brandflow), $5,499-$11,499 (Strong Digital) |
| Branding & Development | $12,000 | $8,300-$15,000 (mid), $11,000-$30,000 (premium) |

**Key Brisbane competitors for reference:**
- **Brandflow**: $2,800 (3 pages) → $4,800 (5 pages) → $7,200 (10 pages) → $9,600 (15 pages)
- **Strong Digital**: $5,499 (5 pages + 3 months management) → $11,499 (12 pages) → $24,999 (20 pages, flagship)
- **ONEOUT Creative**: $2,995 (1 page) → $3,995 (6 pages) → $4,995 (20 pages)

**Recommended new pricing (show as "starting from"):**

| Tier | New Name | New "Starting From" | Actual Target Range |
|---|---|---|---|
| Starter | "Foundation Website" | From $3,490 | $3,490-$4,500 |
| Professional | "Growth Website" | From $7,490 | $7,490-$12,000 |
| Premium | "Premium Brand & Web" | From $14,990 | $14,990-$25,000 |
| Custom | "Enterprise / Custom" | "Let's talk" | $25,000+ |

**Rationale:**
- "Foundation" at $3,490 puts you above the budget tier and into the professional range
- "Growth" at $7,490 is competitive with Brandflow's Business tier ($7,200) and below Strong Digital ($11,499)
- "Premium" at $14,990 positions you as genuinely premium, above most Brisbane competitors
- Use "starting from" language — the actual price is determined after consultation

### Business Design — REASONABLY PRICED

**Your current prices:**
- Brand Essentials: $2,480
- Marketing Materials: $4,560

| Competitor | Price |
|---|---|
| Brandflow Basic Branding | $1,800 |
| Brandflow Classic Branding | $3,500 |
| Brandflow Signature Branding | $5,600 |
| Market range (full brand identity) | $2,000-$15,000 |

**Recommended: Keep current pricing but show as "starting from"**
- Brand Essentials: "From $2,490" (round up slightly)
- Marketing Materials: "From $4,590"
- Signage & Vehicle Wraps: "From $350" (these are fine as-is)

### Web Apps — SIGNIFICANTLY UNDERPRICED

**Your current tiers:**
- Process Automation: $12,900
- Business Platform: $24,900
- Enterprise: $49,900

**Market reality (Australia):**
- Simple web app / MVP: $20,000-$60,000
- Mid-complexity: $60,000-$150,000
- Complex: $150,000-$300,000+

**Your pricing is at the absolute bottom of the market.** $12,900 for a process automation tool is below what most agencies charge for a basic website. Custom web applications require significantly more engineering time than websites.

**Recommended: "Enquire for quote" only**
- Don't show prices — every web app project has unique scope
- If you must show ranges: "Custom web applications from $25,000"
- Your current prices suggest you haven't built many of these yet — if that's the case, build 1-2 as case studies before heavily marketing this service

### Mobile Apps — SIGNIFICANTLY UNDERPRICED

**Your current tiers:**
- MVP Sprint: $14,900
- Growth Build: $29,900
- Enterprise: $59,900

**Market reality (Australia):**
- MVP: $15,000-$50,000
- Basic app: $30,000-$80,000
- Mid-range: $80,000-$150,000
- Complex: $150,000-$300,000+
- Brisbane agency rate: $80-$150/hr (130-220/hr agency)

**Your MVP at $14,900 is the absolute floor of the market.** Your Enterprise at $59,900 is what most agencies charge for a basic-to-mid app.

**Recommended: "Enquire for quote" only**
- Same reasoning as web apps — genuinely custom work
- If you show anything: "Mobile applications from $30,000"
- Again, if you haven't delivered many mobile apps, consider whether to offer this yet

### SEO & Content — REASONABLY PRICED

**Your current tiers:**
- SEO Foundation: $2,490 (one-off)
- Growth SEO: $1,980 setup + $4,980/mo
- Copywriting: $3,480

**Market reality (Australia):**
- Monthly SEO retainer: $1,400-$7,500/mo (average $1,800-$2,200/mo)
- SEO audit (one-off): $1,500-$5,000
- Copywriting per page: $300-$1,200+

**Your pricing is reasonable** but the structure could be improved:
- SEO Foundation at $2,490 one-off is solid for a comprehensive audit + setup
- Growth SEO at $4,980/mo is on the higher end but justified if delivering results
- Copywriting at $3,480 — unclear how many pages this covers

**Recommended: Show as "starting from" with monthly retainer emphasis**
- "SEO Audit & Foundation: From $2,490"
- "Monthly SEO & Content: From $1,980/mo" (reframe as monthly retainer, drop the setup fee framing)
- "Professional Copywriting: From $390/page"

---

## 10. SHOULD YOU NICHE? — Market Research & Recommendations

### The Data Is Clear: Premium Agencies Niche

- Niche agencies command **40-60% higher fees** than generalists for comparable work
- Specialists charge **2-3x higher rates** than generalists with similar skills
- Healthcare, financial, and legal agencies earn **30-50% more** due to domain expertise
- Agencies that niched grew **up to 50x faster** than generalists

### Brisbane's Top Industries by Employment

1. **Healthcare & Social Assistance** — largest employer, growing 16.4%
2. **Retail Trade**
3. **Construction** — growing 6.8%, projected 50,000 worker shortfall by 2026-27
4. **Education & Training** — growing 9.9%
5. **Professional Services** — growing 12.6%
6. **Hospitality** — growing 10%, 2032 Olympics boost

### Recommended Niche Strategy for RAVENCI

**Tier 1 — Primary Niche: Healthcare / Medical**
- Brisbane's largest and fastest-growing sector
- Medical practices, dental clinics, allied health, specialists, NDIS providers
- High barrier to entry (privacy compliance, patient portals, practice management integration)
- Medical websites command $5,000-$30,000+
- Strong recurring revenue: ongoing SEO, content, patient portal maintenance
- 2032 Olympics will further drive healthcare infrastructure growth

**Tier 2 — Secondary Niche: Construction / Property Development**
- NOT sole-trader tradies (that market is crowded with $500 sites)
- Focus on mid-to-large construction companies, property developers, commercial builders
- $8k-$20k sites with project showcases, tender documentation, lead generation
- Massive growth sector in Brisbane with Olympics infrastructure

**Tier 3 — Continue Serving: Professional Services (Legal + Financial)**
- Similar website needs to medical: trust, compliance, lead generation, content
- Good fit for your experience level
- Don't actively market to, but accept referrals and build case studies

### Transition Strategy

1. **Don't drop generalist work overnight** — continue serving existing clients
2. **Build 2-3 healthcare case studies** — this is the single most important step
3. **Create content targeting "medical website design Brisbane"** — blog posts, landing pages
4. **Join healthcare industry associations** — attend events, become a known name
5. **Develop a healthcare-specific landing page** — "Websites for Medical Practices"
6. **Adjust pricing upward** as you build vertical expertise and case studies

### The Pricing Display Debate — Research Conclusion

The consensus best practice for premium agencies is a **hybrid model**:

- **Show "starting from" prices** for each tier so prospects can self-qualify
- **Add a "Custom / Enterprise" tier** that says "Let's talk"
- **Frame pricing around outcomes** not deliverables
- This builds trust, qualifies leads, and positions you as confident in your value

Studies show:
- Hidden prices trigger suspicion in most buyers
- Visitors who contact after seeing prices have **already mentally accepted your cost structure** — shorter sales cycles
- The most successful agencies use "starting from" rather than hiding prices entirely or locking into fixed packages

### Summary: Pricing Changes at a Glance

| Service | Current Price | Recommended Price | Show Publicly? |
|---|---|---|---|
| Web Hosting | $24/mo | **$39/mo** | Yes — exact price |
| Monthly Maintenance | $195/mo | **$249/mo** | Yes — exact price |
| One-Off Maintenance | $450 | **$495** | Yes — exact price |
| Hosting + Maint. Bundle | $199/mo | **$269/mo** | Yes — exact price |
| Web Dev — Starter | $2,240 | **From $3,490** | "Starting from" only |
| Web Dev — Professional | $4,960-$7,200 | **From $7,490** | "Starting from" only |
| Web Dev — Premium | $12,000 | **From $14,990** | "Starting from" only |
| Business Design — Essentials | $2,480 | **From $2,490** | "Starting from" only |
| Business Design — Marketing | $4,560 | **From $4,590** | "Starting from" only |
| Web Apps | $12,900-$49,900 | **From $25,000 (enquire)** | Enquire only |
| Mobile Apps | $14,900-$59,900 | **From $30,000 (enquire)** | Enquire only |
| SEO Foundation | $2,490 | **From $2,490** | "Starting from" only |
| SEO Monthly | $4,980/mo | **From $1,980/mo** | "Starting from" only |
| Copywriting | $3,480 | **From $390/page** | "Starting from" only |

---

## 11. RETAINER PACKAGES — What to Offer & What to Charge

### Why Retainers Matter

Retainers are the single best revenue model for a premium agency:
- **Predictable monthly income** — smooths out the feast/famine project cycle
- **Higher lifetime client value** — a $990/mo retainer client pays $11,880/year vs a one-off $8k project
- **Deeper relationships** — retainer clients become referral engines
- **Better work** — ongoing access means you can iterate and improve, not just launch and walk away

### Market Context (Australian Agency Retainers)

| Agency | Retainer Price | What's Included |
|---|---|---|
| Brandflow (Brisbane) | $1,200-$3,800/mo | Marketing: social, content, strategy |
| Strong Digital (Brisbane) | $2,500/mo | Development, SEO, CRO, maintenance, design |
| Wolf IQ (AU) | $139-$549/mo | Care plans: hosting, updates, limited support hours |
| WP Creative (AU) | $2,200-$9,900/mo | Dedicated dev hours, CRO, full team access |
| Complete X (AU) | $179-$479/mo | Care plans: hosting, maintenance, support hours |
| Typical AU small agency | $500-$2,000/mo | Mix of maintenance, updates, small dev tasks |
| Typical AU mid-agency | $2,000-$5,000/mo | Strategy + execution, dedicated hours |

### Recommended RAVENCI Retainer Packages

The key insight: **your retainers should stack on top of your maintenance/hosting**, not replace them. A client on a retainer still needs hosting and maintenance — those are the foundation. The retainer adds strategic and development capacity on top.

---

#### TIER 1: "Starter Care" — $490/mo

**Who it's for:** Small businesses who need more than maintenance but aren't ready for full agency support. Typically clients whose site you've already built.

**What's included:**
- Everything in Hosting + Maintenance Bundle ($269 value)
- 2 hours of development/design work per month
- Content updates (up to 4 per month)
- Monthly performance report (PageSpeed, uptime, traffic snapshot)
- Email support with 48-hour response time
- Unused hours do NOT roll over

**What it costs you:** ~1.5-2 hours of actual work + automated hosting/maintenance. High margin.

**Positioning:** "Keep your site fresh and evolving without project fees."

---

#### TIER 2: "Growth" — $990/mo

**Who it's for:** Established businesses actively investing in their digital presence. They want ongoing improvements, not just maintenance. This is your bread-and-butter retainer.

**What's included:**
- Everything in Hosting + Maintenance Bundle ($269 value)
- 5 hours of development/design/strategy work per month
- Monthly strategy call (30 min) — review analytics, plan next month's priorities
- Content updates (unlimited reasonable requests)
- Basic on-page SEO monitoring and recommendations
- Priority email support with 24-hour response time
- 1 blog post or content piece per month (you write or they write, you publish + optimise)
- Unused hours roll over for 1 month only

**What it costs you:** ~4-5 hours of actual work + hosting/maintenance. Very healthy margin.

**Positioning:** "A dedicated digital partner, not just a developer. We keep your website working harder for your business every month."

---

#### TIER 3: "Partner" — $1,990/mo

**Who it's for:** Businesses that treat their website as a core revenue channel. They need consistent development, content, and strategic input. This is where you become indispensable.

**What's included:**
- Everything in Hosting + Maintenance Bundle ($269 value)
- 12 hours of development/design/strategy work per month
- Bi-weekly strategy calls (30 min each) — review performance, plan priorities
- Conversion rate optimisation: monthly review of key pages, A/B test recommendations
- Content strategy: 2 blog posts/content pieces per month (written + published + SEO-optimised)
- SEO monitoring, keyword tracking, and monthly recommendations
- Priority support with same-business-day response
- Quarterly website performance review (detailed report + action plan)
- Unused hours roll over for up to 2 months

**What it costs you:** ~10-12 hours of work + hosting/maintenance. Still strong margin because the strategy/reporting work scales well once you have systems in place.

**Positioning:** "Your outsourced digital team. Strategy, development, content, and performance — all handled."

---

#### TIER 4: "Scale" — $3,490/mo

**Who it's for:** Larger businesses or fast-growing companies who need near-dedicated agency support. This replaces the need for an in-house web/digital person.

**What's included:**
- Everything in Hosting + Maintenance Bundle ($269 value)
- 25 hours of development/design/strategy work per month
- Weekly strategy calls (30 min)
- Full conversion rate optimisation: heatmap analysis, A/B testing, landing page optimisation
- Content: 4 blog posts/content pieces per month (full service)
- Comprehensive SEO: technical audits, keyword strategy, link building coordination, monthly reporting
- Priority support with 4-hour response time during business hours
- Dedicated project board (Trello/Notion) for ongoing task management
- Quarterly business review: website ROI analysis, competitive benchmarking, 90-day roadmap
- Unused hours roll over for up to 3 months

**What it costs you:** ~20-25 hours of work. At this level, you may need to subcontract content writing, but you keep the strategic oversight and client relationship.

**Positioning:** "Full-service digital partnership. We become your digital department."

---

### Retainer Package Summary

| Package | Monthly Price | Hours Included | Best For |
|---|---|---|---|
| **Starter Care** | $490/mo | 2 hrs + hosting/maint | Small businesses, post-launch care |
| **Growth** | $990/mo | 5 hrs + hosting/maint + strategy call | Established businesses, active improvement |
| **Partner** | $1,990/mo | 12 hrs + hosting/maint + bi-weekly calls + content + SEO | Revenue-focused businesses |
| **Scale** | $3,490/mo | 25 hrs + hosting/maint + weekly calls + full SEO + CRO | Larger businesses, replaces in-house hire |

### Key Retainer Rules

**Always include in your retainer agreements:**

1. **Minimum 3-month commitment** — retainers take time to show results; month-to-month invites churn
2. **Scope definition** — hours cover "standard development, design, and content work." Major new features or redesigns are quoted separately as projects with a retainer client discount (10-15% off)
3. **Rollover limits** — unused hours roll over for 1-3 months depending on tier, then expire. This prevents clients banking 6 months of hours and then demanding a massive project
4. **Annual discount** — offer 10% off for clients who commit to 12 months upfront (paid monthly). A Growth client at $990/mo becomes $891/mo — still great revenue, and you lock in $10,692/year
5. **Overage rate** — hours beyond the retainer are billed at $150/hr (below your standard rate of $175-$200/hr, positioning it as a retainer benefit)
6. **Retainer client perks** — priority scheduling, dedicated support channel (even just a shared email thread), quarterly reviews

### How to Pitch This to Your Current Client

Frame it around their business needs, not your hours:

> "Based on what we've discussed, I'd recommend our **Growth** package at $990/month. This gives you a dedicated digital partner — not just someone who fixes things when they break, but someone actively improving your site's performance, content, and conversion rate every month.
>
> That includes hosting, maintenance, security, 5 hours of development and strategy work, a monthly strategy call where we review your analytics together, and ongoing content optimisation.
>
> Most of our Growth clients see measurable improvements in site traffic and lead quality within the first 3-4 months. Would you like me to put together a proposal?"

### Revenue Impact Projections

If you convert just a few clients to retainers:

| Scenario | Monthly Recurring | Annual Recurring |
|---|---|---|
| 3 Starter Care clients | $1,470/mo | $17,640/yr |
| 3 Growth clients | $2,970/mo | $35,640/yr |
| 2 Partner clients | $3,980/mo | $47,760/yr |
| 1 Scale client | $3,490/mo | $41,880/yr |
| **Mix: 3 Starter + 3 Growth + 2 Partner + 1 Scale** | **$11,910/mo** | **$142,920/yr** |

That's $142k/year in predictable recurring revenue before any project work. And each of those retainer clients is also a likely candidate for future project work (redesigns, new features, additional services).
