# Quote Success — Launch Checklist

**Route:** `/quote/success` · **Source:** `src/app/quote/success/page.tsx` · **Purpose:** Post-Stripe confirmation page that fetches the checkout session and shows an order summary.

Screenshots: not captured (page not in routes.ts)

## Content
- [ ] Page reads `?session_id=` and fetches `/api/checkout-session?session_id=...` to build the confirmation
- [ ] Loading state: spinner + "Loading your confirmation..."
- [ ] Missing session_id → error state "No session ID provided"; fetch failure → "Failed to load confirmation details"
- [ ] Error state shows a red cross icon, "Something went wrong", the message, and a "Back to Quote" button routing to `/quote`
- [ ] Success (standard payment): H1 "Payment Successful", body "Thank you for your purchase. We've received your payment and will be in touch soon."
- [ ] Order Summary lists Service, Amount (session `amount_total`/100, 2dp), Status (capitalised, accent colour), Email, and Notes (if `metadata.comments` present)
- [ ] "Return to Home" → `/`; "Create Another Quote" → `/quote`
- [ ] Confirmation-email line: "A confirmation email has been sent to your email address."
- [ ] ⚠️ Installment branch: page renders "Installment Plan Set Up", "First Payment", "Payment Plan", "Total Payments" and a monthly-invoice line when `metadata.payment_type === "installments"` — but the `/quote` configurator only ever sends `paymentMethod: "now"` and offers a single "Pay Now" button. Confirm installments are actually reachable from this flow; if not, this branch is dead copy to remove or the quote flow is missing the installments option
- [ ] Verify `amount_total` divide-by-100 renders correctly for real Stripe amounts (cents → dollars)
- [ ] "we"/"We've" first-person-plural voice here vs. Richard's usual "I" elsewhere — confirm intended for the transactional confirmation, otherwise align voice
- [ ] Copy has no placeholders/TODOs

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
- Client component wrapped in Suspense; no exported `metadata` (title/description inherit the root layout defaults) — confirm that's acceptable for a noindex-worthy confirmation page.
- Test end-to-end with a real Stripe test-mode session, not just a stubbed session_id.
