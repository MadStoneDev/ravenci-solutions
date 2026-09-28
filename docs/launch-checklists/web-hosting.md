# Web Hosting — Launch Checklist

**Route:** `/web-hosting` · **Source:** `src/app/web-hosting/page.tsx` (bespoke page, not the shared ServicePage template), `src/components/proof-cluster.tsx`, `src/data/testimonials.ts` · **Purpose:** Sell managed cloud hosting from $39/mo (maintenance now required to host).

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/svc-web-hosting.png`, `dod-screens/mobile-390/{light,dark}/svc-web-hosting.png`

## Content
- [ ] Breadcrumb "Web Hosting"; SectionLabel "Web Hosting"; H1 reads exactly "Host With Me!"
- [ ] Lead "Modern web hosting that grows with you." + intro paragraph ending "from $39/mo with no hidden fees, no surprise charges, and no complex add-ons to buy."
- [ ] Social proof heading (dark): "Hosting websites for 75+ Australian businesses including law firms, medical practices and retail stores"
- [ ] Verify the "75+ Australian businesses" claim (memory: ~100 unique clients / 467 projects — 75+ is plausible but confirm before launch)
- [ ] Testimonial quote renders — first match for page "web-hosting" is Danni Green (Black Cactus Digital): "Eleven out of ten for an amazing service! Richard goes above and beyond to ensure all the i's are dotted and t's are crossed." (author + role/company shown)
- [ ] "Hosting Should Be Simple" pain-point list (5 bullets) present
- [ ] "Why Choose RAVENCI Over Other Hosts?" 4 ticks: Brisbane-based support, All-inclusive pricing, Automatic scaling, Built for business websites
- [ ] "What's Included with Every Hosting" — all 8 feature cards present (Fast for Every Customer, I Run It So You Don't Have To, Pages That Load Instantly, Properly Secured, Protected From the Bad Guys, Watched Around the Clock, Handles Sudden Traffic Spikes, Daily Backups No Drama)
- [ ] ⚠️ Copy typo in "Daily Backups, No Drama" description: "...back the way it was yesterday in minutes. In minutes, not days" — "in minutes" is duplicated; fix before launch
- [ ] Pricing (01, dark): "Managed Cloud Hosting" card, price "$39 /mo.", CTA "Get a hosting quote" → `/quote?service=web-hosting`
- [ ] Showcase (02): 4 hosted businesses with images — Peninsula Homes, SAC Consulting, Beauty Retreat Bribie Islands, The DIRT Agency (confirm images exist in `/showcase-images/`)
- [ ] Confirm "The DIRT Agency" — DIRT rendered all-caps per brand spelling (memory)
- [ ] Notice block: "As of October, 2024, I no longer host websites that are not signed up to reliable ongoing maintenance..." — matches the policy line on `/website-maintenance`
- [ ] Investment/ROI (03) "Cheap Hosting Has a Real Price": stats $1.30/day, $468/year, 99.9% uptime — $468/yr should equal ~$39×12 (check math); 99.9% uptime is a real claim to stand behind
- [ ] What Can Affect Pricing (04): 8 factors listed; note "$39/mo for most business websites" framing
- [ ] Related Services (05 area): Website Maintenance → `/website-maintenance`, Website Design → `/web-development`, Retainer Packages → `/retainer-packages`
- [ ] FAQ (05): all 5 Q&As present incl. "How is this different from cheap hosting like Bluehost?" and "What's included in the $39/month price?"
- [ ] Closing CTA (dark): ProofCluster + heading "Ready to host with me?" + button "Get a Hosting Quote" → `/quote?service=web-hosting`
- [ ] ProofCluster shows "5.0 from 11 Google reviews" (→ Google review URL), the Danni Green quote, "85+ PageSpeed guarantee", and partner badges "Shopify Partner / BigCommerce Partner / Synergy Wholesale Partner"
- [ ] Sticky CTA: "Get a Hosting Quote" → `/quote?service=web-hosting`, $39 "per month"
- [ ] JSON-LD: Product (Managed Cloud Hosting, $39 AUD/month) + FAQPage present
- [ ] ⚠️ This page uses the redesign token system (foreground/border/accent) but is a bespoke page separate from the shared ServicePage template — verify visual consistency with the templated service pages

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll
- [ ] 1440px: layout correct
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal
- [ ] Keyboard-navigable, focus always visible
- [ ] Reduced-motion: final state shown
- [ ] No purple background / gradient / hard shadow
- [ ] Images via next/image
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve (esp. `/quote?service=web-hosting` in 3 places)
- [ ] External links open the right target (Google reviews URL in ProofCluster; `target="_blank"` + rel present)
- [ ] Meta title & description accurate — title "Web Hosting | RAVENCI Solutions"
- [ ] Breadcrumbs correct (if present) — Home / Web Hosting

## Notes
-
