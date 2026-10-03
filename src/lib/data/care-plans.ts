// Care Plans — the single source of truth for the plan tiers shown on
// /pricing, /website-maintenance and the /quote configurator.
//
// Checkout uses Stripe Price IDs (not dynamic amounts) for the care plans so
// Richard can manage prices, invoicing and the 6/12-month upfront options from
// the Stripe dashboard. Replace the REPLACE_WITH_STRIPE_PRICE_ID_* placeholders
// below with the real Price IDs once they're created in Stripe. Until then,
// care-plan checkout fails safe (see src/app/api/create-stripe-checkout).

export const CALENDLY_URL = "https://calendly.com/ravenci";

/** Online store add-on, added to any checkout care plan. */
export const STORE_ADDON = {
  label: "Online store",
  note: "For a Shopify or BigCommerce store",
  monthly: 200,
};

export type BillingInterval = "monthly" | "sixMonth" | "twelveMonth";

export const BILLING_INTERVALS: {
  id: BillingInterval;
  label: string;
  /** Short note shown under the label. */
  note: string;
}[] = [
  { id: "monthly", label: "Monthly", note: "Rolling, 3-month minimum" },
  { id: "sixMonth", label: "6 months upfront", note: "Save about 5%" },
  { id: "twelveMonth", label: "12 months upfront", note: "Save about 10%" },
];

// Stripe Price IDs — REPLACE each placeholder with the real Price ID from
// Stripe. Keys map to the plan ids and billing intervals below.
export const CARE_PLAN_PRICE_IDS: Record<
  "maintenance" | "website-care",
  Record<BillingInterval, string>
> = {
  maintenance: {
    monthly: "REPLACE_WITH_STRIPE_PRICE_ID_maintenance_monthly", // $249/mo
    sixMonth: "REPLACE_WITH_STRIPE_PRICE_ID_maintenance_6month", // $239/mo billed every 6 months
    twelveMonth: "REPLACE_WITH_STRIPE_PRICE_ID_maintenance_12month", // $225/mo billed yearly
  },
  "website-care": {
    monthly: "REPLACE_WITH_STRIPE_PRICE_ID_websitecare_monthly", // $549/mo
    sixMonth: "REPLACE_WITH_STRIPE_PRICE_ID_websitecare_6month", // $519/mo billed every 6 months
    twelveMonth: "REPLACE_WITH_STRIPE_PRICE_ID_websitecare_12month", // $495/mo billed yearly
  },
};

// Store add-on Price IDs. Stripe requires every recurring item in one
// subscription to share the same billing interval, so the store add-on needs a
// matching price for each interval ($200/mo = $1,200 per 6 months = $2,400/yr).
export const STORE_ADDON_PRICE_IDS: Record<BillingInterval, string> = {
  monthly: "REPLACE_WITH_STRIPE_PRICE_ID_store_addon_monthly", // $200/mo
  sixMonth: "REPLACE_WITH_STRIPE_PRICE_ID_store_addon_6month", // $1,200 every 6 months
  twelveMonth: "REPLACE_WITH_STRIPE_PRICE_ID_store_addon_12month", // $2,400 yearly
};

/** True while a Price ID is still a placeholder, so checkout can fail safe. */
export function isPlaceholderPriceId(id: string): boolean {
  return id.startsWith("REPLACE_WITH_STRIPE_PRICE_ID");
}

export type CarePlanId = "maintenance" | "website-care" | "growth" | "partner";

export interface CarePlan {
  id: CarePlanId;
  name: string;
  /** Headline monthly price. */
  monthly: number;
  /** Who it's for. */
  line: string;
  bullets: string[];
  /** checkout = buy now via Stripe; book = Book a call (no self-serve checkout). */
  mode: "checkout" | "book";
  /** Effective $/mo on the upfront options. */
  upfront: { sixMonth: number; twelveMonth: number };
}

export const CARE_PLANS: CarePlan[] = [
  {
    id: "maintenance",
    name: "Maintenance",
    monthly: 249,
    line: "For a site that just needs to stay safe and fast.",
    bullets: [
      "Hosting included",
      "Updates, security, daily backups and monitoring",
      "Minor fixes when something breaks",
      "Issues looked at the next business day",
    ],
    mode: "checkout",
    upfront: { sixMonth: 239, twelveMonth: 225 },
  },
  {
    id: "website-care",
    name: "Website Care",
    monthly: 549,
    line: "For businesses that regularly need small changes.",
    bullets: [
      "Everything in Maintenance",
      "2 hours a month of design, development or content work",
      "Requests handled within 2 business days",
      "Extra hours at $150 instead of $165",
    ],
    mode: "checkout",
    upfront: { sixMonth: 519, twelveMonth: 495 },
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 1390,
    line: "For businesses actively adding to their site.",
    bullets: [
      "Everything in Maintenance",
      "8 hours a month for new pages, landing pages and features",
      "Priority turnaround, within 1 business day",
      "Extra hours at $140",
    ],
    mode: "book",
    upfront: { sixMonth: 1320, twelveMonth: 1250 },
  },
  {
    id: "partner",
    name: "Partner",
    monthly: 2750,
    line: "About half a day a week of my time, for a fraction of hiring in-house.",
    bullets: [
      "Everything in Maintenance",
      "20 hours a month across design, development and content",
      "Same-day response and a monthly planning call",
      "Extra hours at $125",
    ],
    mode: "book",
    upfront: { sixMonth: 2600, twelveMonth: 2475 },
  },
];

export function getCarePlan(id: string): CarePlan | undefined {
  return CARE_PLANS.find((p) => p.id === id);
}

/** Standalone managed hosting, for clients who don't want a care plan. */
export const STANDALONE_HOSTING = {
  name: "Managed Hosting",
  monthly: 39,
  line: "For sites that don't need a care plan.",
  bullets: [
    "Fast servers, SSL and uptime monitoring",
    "Daily backups",
    "Brisbane-based support",
    "Included free on every care plan",
  ],
};
