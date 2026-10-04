import { Stripe } from "stripe";

// One place that decides which Stripe mode to run in, so you never have to swap
// env vars. Keep BOTH keys set permanently:
//   STRIPE_SECRET_KEY        = live key (sk_live_...)
//   STRIPE_TEST_SECRET_KEY   = test key (sk_test_...)
//
// Outside production (local dev, Vercel preview) the test key is used; in
// production the live key is used. If the test key isn't set, it falls back to
// STRIPE_SECRET_KEY so nothing breaks.
const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV;
const useTest = env !== "production";

const secretKey =
  (useTest && process.env.STRIPE_TEST_SECRET_KEY) || process.env.STRIPE_SECRET_KEY;

export const stripe = new Stripe(secretKey!);

// Derived from the key actually in use, so test/live Price IDs always match the
// key (see src/lib/data/care-plans.ts).
export const IS_TEST_MODE = (secretKey ?? "").startsWith("sk_test_");
