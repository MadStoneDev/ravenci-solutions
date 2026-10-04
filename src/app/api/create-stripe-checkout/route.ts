import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";
import { checkRateLimit } from "@/lib/api-guards";
import {
  getCarePlanPriceIds,
  getStoreAddonPriceId,
  getHostingPriceId,
  isPlaceholderPriceId,
} from "@/lib/data/care-plans";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Use the TEST Price IDs when running against a test secret key, LIVE otherwise,
// so the full care-plan flow can be exercised before go-live.
const IS_TEST_MODE = (process.env.STRIPE_SECRET_KEY ?? "").startsWith("sk_test_");

// Server-side addon prices. Only the add-ons offered on the standalone hosting
// plan in the UI are purchasable. Project-type add-ons (copywriting, SEO
// content, contact forms, etc.) are proposal-only and must never be charged
// here; they are deliberately excluded so a crafted request can't buy them.
const ADDON_PRICES: Record<string, { price: number; isRecurring: boolean }> = {
  "email-hosting": { price: 5, isRecurring: true },
  "malware-protection": { price: 10, isRecurring: true },
  "wordpress-migration": { price: 175, isRecurring: false },
};

// Server-side service prices - MUST match your frontend exactly
const SERVICE_PRICES: Record<
  string,
  { basePrice: number; isRecurring: boolean }
> = {
  "web-hosting": { basePrice: 39, isRecurring: true },
};

function calculateServerTotals(
  serviceId: string,
  addons: Record<string, number>,
) {
  const service = SERVICE_PRICES[serviceId];
  if (!service) {
    throw new Error(`Invalid service ID: ${serviceId}`);
  }

  let oneTimeTotal = service.isRecurring ? 0 : service.basePrice;
  let recurringTotal = service.isRecurring ? service.basePrice : 0;

  Object.entries(addons).forEach(([addonId, quantity]) => {
    if (quantity > 0) {
      const addon = ADDON_PRICES[addonId];
      if (!addon) {
        throw new Error(`Invalid addon ID: ${addonId}`);
      }

      const totalPrice = addon.price * quantity;

      if (addon.isRecurring) {
        recurringTotal += totalPrice;
      } else {
        oneTimeTotal += totalPrice;
      }
    }
  });

  return { oneTime: oneTimeTotal, recurring: recurringTotal };
}

function validateInput(body: any) {
  if (!body.service?.id || typeof body.service.id !== "string") {
    throw new Error("Invalid service data");
  }

  if (!body.addons || typeof body.addons !== "object") {
    throw new Error("Invalid addons data");
  }

  if (body.paymentMethod !== "now") {
    throw new Error("Invalid payment method");
  }

  if (
    !body.totals ||
    typeof body.totals.oneTime !== "number" ||
    typeof body.totals.recurring !== "number"
  ) {
    throw new Error("Invalid totals data");
  }

  if (body.totals.oneTime < 0 || body.totals.oneTime > 10000) {
    throw new Error("One-time amount out of range");
  }

  if (body.totals.recurring < 0 || body.totals.recurring > 2000) {
    throw new Error("Recurring amount out of range");
  }

  if (
    body.customerEmail &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.customerEmail)
  ) {
    throw new Error("Invalid email address");
  }
}

export async function POST(request: NextRequest) {
  try {
    const limit = await checkRateLimit(request, "stripe-checkout");
    if (!limit.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        { status: 429, headers: { "Retry-After": String(limit.retryAfter ?? 60) } },
      );
    }

    const body = await request.json();

    // === CARE-PLAN CHECKOUT (Stripe Price IDs) ===
    // Maintenance and Website Care only. Growth/Partner are book-a-call.
    if (body.carePlan) {
      const planId = body.carePlan.planId;
      const storeAddon = body.carePlan.storeAddon === true;

      if (planId !== "maintenance" && planId !== "website-care") {
        return NextResponse.json(
          { error: "This plan isn't available for online checkout. Please book a call." },
          { status: 400 },
        );
      }

      // Terms of Service acceptance is required.
      if (body.carePlan.termsAccepted !== true) {
        return NextResponse.json(
          { error: "Please accept the Terms of Service." },
          { status: 400 },
        );
      }

      const planPriceId =
        getCarePlanPriceIds(IS_TEST_MODE)[planId as "maintenance" | "website-care"];
      const careLineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
        { price: planPriceId, quantity: 1 },
      ];
      if (storeAddon) {
        careLineItems.push({
          price: getStoreAddonPriceId(IS_TEST_MODE),
          quantity: 1,
        });
      }

      // Fail safe until the real Price IDs are dropped in.
      if (careLineItems.some((li) => isPlaceholderPriceId(li.price as string))) {
        return NextResponse.json(
          {
            error:
              "Online checkout for care plans isn't live yet. Please book a call and I'll set you up.",
          },
          { status: 503 },
        );
      }

      // No tax is applied: automatic_tax stays off and no tax_rates are set, so
      // the customer is charged exactly the listed price.
      const careSession = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: careLineItems,
        mode: "subscription",
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/quote/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/quote`,
        metadata: {
          payment_type: "care_plan",
          care_plan: planId,
          billing_interval: "monthly",
          store_addon: storeAddon ? "true" : "false",
          terms_accepted: "true",
          terms_accepted_at: new Date().toISOString(),
          terms_version: "2026-10-03",
          comments: typeof body.comments === "string" ? body.comments : "",
        },
        allow_promotion_codes: true,
        ...(body.customerEmail &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.customerEmail)
          ? { customer_email: body.customerEmail }
          : {}),
      });

      return NextResponse.json({
        checkoutUrl: careSession.url,
        sessionId: careSession.id,
      });
    }

    validateInput(body);

    const {
      service,
      addons,
      totals,
      comments,
      customerEmail,
      couponCode,
    } = body;

    // CRITICAL: Server-side price validation
    const serverTotals = calculateServerTotals(service.id, addons);

    if (
      Math.abs(serverTotals.oneTime - totals.oneTime) > 0.01 ||
      Math.abs(serverTotals.recurring - totals.recurring) > 0.01
    ) {
      console.error("Price mismatch detected:", {
        client: totals,
        server: serverTotals,
        service: service.id,
        addons,
      });
      return NextResponse.json(
        { error: "Price validation failed" },
        { status: 400 },
      );
    }

    // Build the product description with addons and comments
    let description = service.description;

    // Add selected addons to description
    const selectedAddonsList = Object.entries(addons)
      .filter(([_, quantity]) => (quantity as number) > 0)
      .map(([addonId, quantity]) => `${addonId} (${quantity})`);

    if (selectedAddonsList.length > 0) {
      description += ` | Add-ons: ${selectedAddonsList.join(", ")}`;
    }

    if (comments) {
      description += ` | Notes: ${comments}`;
    }

    const baseMetadata = {
      service_id: service.id,
      service_name: service.name,
      comments: comments || "",
      addons: JSON.stringify(addons),
      original_one_time_total: totals.oneTime.toString(),
      recurring_total: totals.recurring.toString(),
      server_validated: "true",
      coupon_code: couponCode || "",
    };

    // === HOSTING CHECKOUT (base via Stripe Price ID + add-ons as line items) ===
    // Managed Hosting ($39/mo) is the only service here. Its base uses a Stripe
    // Price ID; the optional add-ons ride along on the same subscription as a
    // mixed cart (recurring add-ons renew; one-time add-ons bill once on the
    // first invoice).
    const base = SERVICE_PRICES[service.id];
    const hostingPriceId = getHostingPriceId(IS_TEST_MODE);

    // Fail safe until the real Price ID is dropped in.
    if (isPlaceholderPriceId(hostingPriceId)) {
      return NextResponse.json(
        {
          error:
            "Online checkout for hosting isn't live yet. Please book a call and I'll set you up.",
        },
        { status: 503 },
      );
    }

    // Split the validated totals into base vs add-ons; the base is charged by the
    // Price ID, so only the add-on amounts go into dynamic line items.
    const baseRecurring = base.isRecurring ? base.basePrice : 0;
    const baseOneTime = base.isRecurring ? 0 : base.basePrice;
    const addonRecurring = totals.recurring - baseRecurring;
    const addonOneTime = totals.oneTime - baseOneTime;

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      { price: hostingPriceId, quantity: 1 },
    ];

    if (addonRecurring > 0) {
      lineItems.push({
        price_data: {
          currency: "aud",
          product_data: { name: `${service.name}, monthly add-ons` },
          unit_amount: Math.round(addonRecurring * 100),
          recurring: { interval: "month" },
        },
        quantity: 1,
      });
    }

    if (addonOneTime > 0) {
      lineItems.push({
        price_data: {
          currency: "aud",
          product_data: {
            name: `${service.name}, one-time add-ons`,
            description,
          },
          unit_amount: Math.round(addonOneTime * 100),
        },
        quantity: 1,
      });
    }

    // No tax is applied: automatic_tax stays off and no tax_rates are set.
    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: base.isRecurring ? "subscription" : "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/quote/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/quote`,
      metadata: {
        ...baseMetadata,
        payment_type: "full_payment",
      },
      allow_promotion_codes: true,
    };

    // Add customer email if provided
    if (customerEmail) {
      sessionConfig.customer_email = customerEmail;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({
      checkoutUrl: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    const message = error instanceof Error ? error.message : "Unknown error";
    const isValidationError =
      message.includes("Invalid") ||
      message.includes("validation") ||
      message.includes("out of range");

    return NextResponse.json(
      {
        error: isValidationError
          ? message
          : "Failed to create checkout session",
        details: process.env.NODE_ENV === "development" ? message : undefined,
      },
      { status: isValidationError ? 400 : 500 },
    );
  }
}
