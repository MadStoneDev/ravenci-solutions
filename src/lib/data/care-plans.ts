// Hosting, maintenance and Website Care: the single source of truth for the
// /website-maintenance page, the /quote configurator and the Stripe checkout.
//
// Two separate things:
//   1. Hosting & maintenance (keep it running): Hosting $39, Maintenance $239,
//      Hosting + Maintenance $269 (the default). The online-store add-on
//      (+$180/mo) attaches to Maintenance and Hosting + Maintenance ONLY.
//   2. Website Care (keep it improving): Cover, Growth, Partner. Design,
//      development and priority support only. Hosting and maintenance are not
//      included; they're add-ons. Prices are being revised, so they're null
//      until Richard confirms (see WEBSITE_CARE_TIERS).
//
// Billed monthly, cancel any time, no contract, except the optional 12-month
// Website Care contract (full hour rollover; see the page copy and Terms).
//
// Checkout uses Stripe Price IDs. Standalone hosting ($39) is unchanged and
// live. The new prices (Maintenance $239, Hosting + Maintenance $269, store
// add-on $180) need NEW Stripe products; their IDs are placeholders for now, so
// that checkout fails safe (see create-stripe-checkout) until Richard creates
// them and drops the real IDs in.

export const CALENDLY_URL = "https://calendly.com/ravenci";

/** Flat ad-hoc rate for work outside a plan. */
export const AD_HOC_HOURLY = 165;

/**
 * Online-store add-on. Attaches to Maintenance and Hosting + Maintenance only,
 * never to a Website Care tier.
 */
export const STORE_ADDON = {
  label: "Online store",
  note: "For a Shopify or BigCommerce store. Added to Maintenance or Hosting + Maintenance only.",
  monthly: 180,
};

// ===========================================================================
// 1. Hosting & maintenance (keep it running)
// ===========================================================================

export type RunningId = "hosting" | "maintenance" | "hosting-maintenance";

export interface RunningOffer {
  id: RunningId;
  name: string;
  monthly: number;
  line: string;
  bullets: string[];
  /** Can the online-store add-on be added to this offer? */
  storeAddonAllowed: boolean;
  /** The default/recommended offer. */
  featured?: boolean;
  /** checkout = buy now via Stripe; book = book a call. */
  mode: "checkout" | "book";
}

export const RUNNING_OFFERS: RunningOffer[] = [
  {
    id: "hosting",
    name: "Hosting",
    monthly: 39,
    line: "Just hosting, for a site that's being maintained somewhere.",
    bullets: [
      "Your site has to be maintained, by me or a reputable provider (I'll need proof)",
      "Fast cloud servers, free SSL (the padlock next to your domain) and 99.9% uptime",
      "Daily backups that actually restore",
      "Uptime monitoring, so I know if it goes down before you do",
      "Brisbane-based: you deal with me",
    ],
    storeAddonAllowed: false,
    mode: "checkout",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    monthly: 239,
    line: "For a site hosted somewhere else. I keep it updated, secure and backed up.",
    bullets: [
      "Software, plugin and security updates",
      "Daily backups and security monitoring",
      "Small fixes when something breaks",
      "Issues looked at by the next business day",
      "A monthly report of what I did",
    ],
    storeAddonAllowed: true,
    mode: "checkout",
  },
  {
    id: "hosting-maintenance",
    name: "Hosting + Maintenance",
    monthly: 269,
    line: "I host it and keep it maintained. One invoice, one person to call. This is the usual setup.",
    bullets: [
      "Everything in Hosting and Maintenance, together",
      "Updates, security, daily backups and monitoring",
      "Small fixes when something breaks",
      "Issues looked at by the next business day",
      "A monthly report of what I did",
    ],
    storeAddonAllowed: true,
    featured: true,
    mode: "checkout",
  },
];

export function getRunningOffer(id: string): RunningOffer | undefined {
  return RUNNING_OFFERS.find((o) => o.id === id);
}

// ===========================================================================
// 2. Website Care (keep it improving)
// ===========================================================================

export type WebsiteCareId = "cover" | "growth" | "partner";

export interface WebsiteCareTier {
  id: WebsiteCareId;
  name: string;
  /** null while prices are being revised. [TODO: Richard to confirm.] */
  monthly: number | null;
  line: string;
  /** Hours of design/dev/content work included each month. */
  hours: number;
  /** Extra-hour rate once the included hours are used. */
  extraHourly: number;
  bullets: string[];
}

// Prices confirmed (VOICE.md): Cover $320, Growth $1,200, Partner $2,800.
// Extra-hour rates ($160/$150/$140) are still [TODO: Richard to confirm].
export const WEBSITE_CARE_TIERS: WebsiteCareTier[] = [
  {
    id: "cover",
    name: "Cover",
    monthly: 320,
    line: "For a site you keep yourself, but want a professional on call.",
    hours: 2,
    extraHourly: 160, // [TODO: confirm extra-hour rate]
    bullets: [
      "2 hours a month of design, development or content work",
      "Priority for design, dev and support",
      "Looked at by the next business day",
      "Extra hours at $160 instead of $165", // [TODO: confirm]
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 1200,
    line: "For a site you're actively adding to.",
    hours: 8,
    extraHourly: 150, // [TODO: confirm extra-hour rate]
    bullets: [
      "8 hours a month for new pages, features and content",
      "Priority for design, dev and support, same-day response",
      "Extra hours at $150", // [TODO: confirm]
    ],
  },
  {
    id: "partner",
    name: "Partner",
    monthly: 2800,
    line: "About half a day a week of my time, for a fraction of hiring in-house.",
    hours: 20,
    extraHourly: 140, // [TODO: confirm extra-hour rate]
    bullets: [
      "20 hours a month across design, development and content",
      "Two-hour response in business hours, and a monthly planning call",
      "Extra hours at $140", // [TODO: confirm]
    ],
  },
];

/**
 * Website Care add-ons. Both are $10/mo less than buying the same thing on its
 * own, because the monthly report isn't duplicated.
 */
export const WEBSITE_CARE_ADDONS = {
  maintenance: { id: "maintenance", label: "Maintenance", monthly: 229 },
  "hosting-maintenance": {
    id: "hosting-maintenance",
    label: "Hosting + Maintenance",
    monthly: 259,
  },
} as const;

// ===========================================================================
// Stripe Price IDs, split by mode. The checkout route picks the TEST set when
// STRIPE_SECRET_KEY starts with sk_test_, otherwise LIVE. All recurring monthly.
// ===========================================================================

/** The offers that can self-serve check out (the store add-on rides along). */
type CheckoutOfferId = "maintenance" | "hosting-maintenance";
type CheckoutPriceIds = Record<CheckoutOfferId, string>;

// Maintenance ($239) and Hosting + Maintenance ($269) need NEW Stripe products.
// Until they exist these stay placeholders, so checkout fails safe.
const CHECKOUT_PRICE_IDS_TEST: CheckoutPriceIds = {
  maintenance: "REPLACE_WITH_MAINTENANCE_239_PRICE_ID_TEST",
  "hosting-maintenance": "REPLACE_WITH_HOSTING_MAINTENANCE_269_PRICE_ID_TEST",
};

const CHECKOUT_PRICE_IDS_LIVE: CheckoutPriceIds = {
  maintenance: "REPLACE_WITH_MAINTENANCE_239_PRICE_ID_LIVE",
  "hosting-maintenance": "REPLACE_WITH_HOSTING_MAINTENANCE_269_PRICE_ID_LIVE",
};

// Online-store add-on ($180/mo) needs a NEW Stripe product (was $200).
const STORE_ADDON_PRICE_ID_TEST = "REPLACE_WITH_STORE_ADDON_180_PRICE_ID_TEST";
const STORE_ADDON_PRICE_ID_LIVE = "REPLACE_WITH_STORE_ADDON_180_PRICE_ID_LIVE";

// Standalone hosting ($39/mo) is unchanged, so its existing products stay live.
const HOSTING_PRICE_ID_TEST = "price_1UMov5B9qPQKWGdBJIkrGx0m"; // $39/mo (test)
const HOSTING_PRICE_ID_LIVE = "price_1UMoEwB9qPQKWGdBlhurA1nc"; // $39/mo (live)

/** Checkout Price IDs for the active Stripe mode. */
export function getCarePlanPriceIds(isTestMode: boolean): CheckoutPriceIds {
  return isTestMode ? CHECKOUT_PRICE_IDS_TEST : CHECKOUT_PRICE_IDS_LIVE;
}

/** Store add-on monthly Price ID for the active Stripe mode. */
export function getStoreAddonPriceId(isTestMode: boolean): string {
  return isTestMode ? STORE_ADDON_PRICE_ID_TEST : STORE_ADDON_PRICE_ID_LIVE;
}

/** Standalone hosting ($39/mo) Price ID for the active Stripe mode. */
export function getHostingPriceId(isTestMode: boolean): string {
  return isTestMode ? HOSTING_PRICE_ID_TEST : HOSTING_PRICE_ID_LIVE;
}

/** True while a Price ID is still a placeholder, so checkout can fail safe. */
export function isPlaceholderPriceId(id: string): boolean {
  return id.startsWith("REPLACE_WITH_");
}
