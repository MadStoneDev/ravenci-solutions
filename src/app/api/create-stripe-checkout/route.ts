// Enhanced /app/api/create-stripe-checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Server-side addon prices - MUST match your frontend exactly
const ADDON_PRICES: Record<string, { price: number; isRecurring: boolean }> = {
  "backup-service": { price: 19, isRecurring: true },
  "oneoff-backup-service": { price: 39, isRecurring: false },
  "wordpress-migration": { price: 175, isRecurring: false },
  "email-hosting": { price: 5, isRecurring: true },
  "malware-protection": { price: 10, isRecurring: true },
  "malware-audit": { price: 49, isRecurring: false },
  "content-updates": { price: 95, isRecurring: true },
  "oneoff-content-updates": { price: 85, isRecurring: false },
  "performance-optimization": { price: 95, isRecurring: true },
  "oneoff-performance-optimization": { price: 120, isRecurring: false },
  "contact-form": { price: 595, isRecurring: false },
  "cookie-banner": { price: 195, isRecurring: false },
  copywriting: { price: 295, isRecurring: false },
  "seo-content": { price: 495, isRecurring: false },
  "web-hosting-addon": { price: 39, isRecurring: true },
  "maintenance-addon": { price: 249, isRecurring: true },
};

// Server-side service prices - MUST match your frontend exactly
const SERVICE_PRICES: Record<
  string,
  { basePrice: number; isRecurring: boolean }
> = {
  "web-hosting": { basePrice: 39, isRecurring: true },
  "monthly-web-maintenance": { basePrice: 249, isRecurring: true },
  "oneoff-web-maintenance": { basePrice: 495, isRecurring: false },
  "web-hosting-maintenance": { basePrice: 269, isRecurring: true },
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

  if (body.totals.oneTime < 0 || body.totals.oneTime > 5000) {
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
    const body = await request.json();

    // Validate input
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

    // === SINGLE PAYMENT CHECKOUT ===
    const lineItems: any[] = [];

    // Add one-time payment if exists
    if (totals.oneTime > 0) {
      lineItems.push({
        price_data: {
          currency: "aud",
          product_data: {
            name: `${service.name} - Complete Package`,
            description: description,
          },
          unit_amount: Math.round(totals.oneTime * 100),
        },
        quantity: 1,
      });
    }

    // Add recurring subscription if exists
    if (totals.recurring > 0) {
      lineItems.push({
        price_data: {
          currency: "aud",
          product_data: {
            name: `${service.name} - Monthly Services`,
            description: `Recurring services: hosting, maintenance, etc.`,
          },
          unit_amount: Math.round(totals.recurring * 100),
          recurring: {
            interval: "month",
          },
        },
        quantity: 1,
      });
    }

    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: totals.recurring > 0 ? "subscription" : "payment",
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
