# Quote — Launch Checklist

**Route:** `/quote` · **Source:** `src/app/quote/page.tsx`, `src/components/quoting-component.tsx` (data: `src/lib/data/services.tsx`, `src/lib/data/addons.tsx`) · **Purpose:** Self-serve configurator for hosting/maintenance plans that checks out via Stripe.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/quote.png`, `dod-screens/mobile-390/{light,dark}/quote.png`

## Content
- [ ] Landing view H1 "Hosting & Maintenance" with intro to select a plan and check out securely via Stripe
- [ ] "Request a proposal" link routes to `/launch-your-vision` for non-hosting work
- [ ] Four service cards render with correct prices: Web Hosting $39.00/monthly, Monthly Web Maintenance $249.00/monthly, One-Off Web Maintenance $495.00 (one-time), Web Hosting + Maintenance Package $269.00/monthly
- [ ] Each service icon and description shows; card is clickable and opens the configurator
- [ ] `?service=<id>` deep link preselects that plan on load (ids: web-hosting, monthly-web-maintenance, oneoff-web-maintenance, web-hosting-maintenance)
- [ ] Configurator view: "Back to Services" clears the selection; browser Back also pops back to the service list (popstate intercept)
- [ ] Base Service card repeats name/description/price; two "Get in touch!" links route to `/launch-your-vision`
- [ ] Add-ons render only those attached to the chosen service; qty add-ons use −/+ steppers (clamped to min/max), single add-ons use an "Add" checkbox
- [ ] Verify each add-on price and period, e.g. Professional Email $5.00/monthly (qty up to 10), Content Updates $95.00/monthly, Migrate Your Website $175.00 one-time
- [ ] ⚠️ "Daily Backups" / "One-Off Backups" add-on descriptions say "You do not need this if hosting with RAVENCI!" — odd to sell an add-on the copy tells you not to buy; confirm wording/placement is intended
- [ ] Order Summary shows One-time Total and/or Monthly Recurring, recalculated live as add-ons change
- [ ] Payment Method block states "Secure checkout via Stripe"; Additional Comments textarea is optional
- [ ] "Pay Now" posts to `/api/create-stripe-checkout` and redirects to Stripe's hosted checkout URL
- [ ] Loading state shows spinner + "Processing..."; button disabled while loading
- [ ] Error path: failed checkout shows the returned error message in a bordered box and re-enables the button
- [ ] Verify totals math for a mixed cart (one-time add-on + recurring add-on on a recurring base)
- [ ] Copy is plain, no placeholders/TODOs; prices are real and current

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
- [ ] All internal links resolve
- [ ] External links open the right target
- [ ] Meta title & description accurate
- [ ] Breadcrumbs correct (if present)

## Notes
- Service cards are `div` with an onClick, not buttons/links — verify they are keyboard-reachable and operable, or convert to buttons for accessibility.
- No breadcrumbs on this page (component renders its own `<main>`, bypassing the shared layout header pattern).
- Top padding `pt-32` assumes a fixed header; confirm nothing is clipped under it at 390px.
