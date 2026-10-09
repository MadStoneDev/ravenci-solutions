// Care Plans — the single source of truth for the plan tiers shown on
// /pricing, /website-maintenance and the /quote configurator.
//
// Care plans are monthly only: billed monthly in advance, no minimum term, no
// upfront options, cancel any time. Checkout uses Stripe Price IDs so Richard
// can manage prices and invoicing from the Stripe dashboard. Replace the
// REPLACE_WITH_*_PRICE_ID_* placeholders with the real Price IDs once created.
// Until then, care-plan checkout fails safe (see create-stripe-checkout).

export const CALENDLY_URL = "https://calendly.com/ravenci";

/** Online store add-on, added to any checkout care plan. */
export const STORE_ADDON = {
  label: "Online store",
  note: "For a Shopify or BigCommerce store",
  monthly: 200,
};

// Stripe Price IDs, split by mode. The checkout route picks the TEST set when
// STRIPE_SECRET_KEY starts with sk_test_, otherwise the LIVE set, so the flow
// can be tested before go-live. All prices are recurring monthly.
type CarePlanPriceIds = Record<"maintenance" | "website-care", string>;

const CARE_PLAN_PRICE_IDS_TEST: CarePlanPriceIds = {
  maintenance: "price_1UMovQB9qPQKWGdBFBYljP1K", // $249/mo (test)
  "website-care": "price_1UMovcB9qPQKWGdBh0aXj8nq", // $549/mo (test)
};

const CARE_PLAN_PRICE_IDS_LIVE: CarePlanPriceIds = {
  maintenance: "price_1UMoFJB9qPQKWGdBo1GyeKjR", // $249/mo (live)
  "website-care": "price_1UMoGcB9qPQKWGdBljJXo4UI", // $549/mo (live)
};

const STORE_ADDON_PRICE_ID_TEST = "price_1UMovqB9qPQKWGdBnRBKoNn1"; // $200/mo (test)
const STORE_ADDON_PRICE_ID_LIVE = "price_1UMoKOB9qPQKWGdBh2RUWhsP"; // $200/mo (live)

// Standalone Managed Hosting base price ($39/mo). Add-ons (email hosting,
// malware protection, WordPress migration) ride along as dynamic line items on
// the same subscription (mixed cart: recurring + one-time on the first invoice).
const HOSTING_PRICE_ID_TEST = "price_1UMov5B9qPQKWGdBJIkrGx0m"; // $39/mo (test)
const HOSTING_PRICE_ID_LIVE = "price_1UMoEwB9qPQKWGdBlhurA1nc"; // $39/mo (live)

/** Care-plan Price IDs for the active Stripe mode. */
export function getCarePlanPriceIds(isTestMode: boolean): CarePlanPriceIds {
  return isTestMode ? CARE_PLAN_PRICE_IDS_TEST : CARE_PLAN_PRICE_IDS_LIVE;
}

/** Store add-on monthly Price ID for the active Stripe mode. */
export function getStoreAddonPriceId(isTestMode: boolean): string {
  return isTestMode ? STORE_ADDON_PRICE_ID_TEST : STORE_ADDON_PRICE_ID_LIVE;
}

/** Standalone Managed Hosting base ($39/mo) Price ID for the active Stripe mode. */
export function getHostingPriceId(isTestMode: boolean): string {
  return isTestMode ? HOSTING_PRICE_ID_TEST : HOSTING_PRICE_ID_LIVE;
}

/** True while a Price ID is still a placeholder, so checkout can fail safe. */
export function isPlaceholderPriceId(id: string): boolean {
  return id.startsWith("REPLACE_WITH_");
}

export type CarePlanId = "maintenance" | "website-care" | "growth" | "partner";

export interface CarePlan {
  id: CarePlanId;
  name: string;
  /** Monthly price. */
  monthly: number;
  /** Who it's for. */
  line: string;
  bullets: string[];
  /** checkout = buy now via Stripe; book = Book a call (no self-serve checkout). */
  mode: "checkout" | "book";
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
      "Issues looked at within 24 to 48 hours",
    ],
    mode: "checkout",
  },
  {
    id: "website-care",
    name: "Website Care",
    monthly: 549,
    line: "For businesses that regularly need small changes.",
    bullets: [
      "Everything in Maintenance",
      "2 hours a month of design, development or content work",
      "Requests handled within 24 to 48 hours",
      "Extra hours at $150 instead of $165",
    ],
    mode: "checkout",
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 1390,
    line: "For businesses actively adding to their site.",
    bullets: [
      "Everything in Maintenance",
      "8 hours a month for new pages, landing pages and features",
      "Priority same-day response",
      "Extra hours at $140",
    ],
    mode: "book",
  },
  {
    id: "partner",
    name: "Partner",
    monthly: 2750,
    line: "About half a day a week of my time, for a fraction of hiring in-house.",
    bullets: [
      "Everything in Maintenance",
      "20 hours a month across design, development and content",
      "Priority 2-hour response and a monthly planning call",
      "Extra hours at $125",
    ],
    mode: "book",
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
