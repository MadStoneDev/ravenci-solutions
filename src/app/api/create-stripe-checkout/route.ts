// Enhanced /app/api/create-stripe-checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Add validation schemas
interface ServiceData {
  id: string;
  name: string;
  basePrice: number;
  isRecurring: boolean;
  description: string;
}

interface AddonData {
  [key: string]: number;
}

interface RequestBody {
  service: ServiceData;
  addons: AddonData;
  paymentMethod: "now" | "installments";
  installmentPlan?: any;
  totals: {
    oneTime: number;
    recurring: number;
  };
  installmentPricing?: any;
  comments?: string;
  customerEmail?: string;
}

// Server-side addon prices - MUST match your frontend exactly
const ADDON_PRICES: Record<string, { price: number; isRecurring: boolean }> = {
  "ssl-cert": { price: 99, isRecurring: true },
  "backup-service": { price: 19.95, isRecurring: true },
  cdn: { price: 29.95, isRecurring: true },
  "email-hosting": { price: 9.95, isRecurring: true },
  "content-updates": { price: 95, isRecurring: true },
  "security-monitoring": { price: 49.95, isRecurring: true },
  "performance-optimization": { price: 149, isRecurring: true },
  "extra-pages": { price: 295, isRecurring: false },
  portfolio: { price: 795, isRecurring: false },
  "contact-form": { price: 595, isRecurring: false },
  "cookie-banner": { price: 195, isRecurring: false },
  copywriting: { price: 295, isRecurring: false },
  "seo-content": { price: 495, isRecurring: false },
  "blog-setup": { price: 895, isRecurring: false },
  "newsletter-signup": { price: 395, isRecurring: false },
  "facebook-pixel": { price: 395, isRecurring: false },
  "google-business": { price: 495, isRecurring: false },
  "web-hosting-addon": { price: 29.95, isRecurring: true },
  "maintenance-addon": { price: 195, isRecurring: true },
  "business-cards": { price: 295, isRecurring: false },
  letterhead: { price: 395, isRecurring: false },
  brochure: { price: 895, isRecurring: false },
  "social-media-kit": { price: 695, isRecurring: false },
  "brand-guidelines": { price: 1295, isRecurring: false },
  "vehicle-wrap": { price: 1295, isRecurring: false },
  "storefront-sign": { price: 795, isRecurring: false },
  "banner-design": { price: 495, isRecurring: false },
  "display-boards": { price: 395, isRecurring: false },
  "invoice-template": { price: 295, isRecurring: false },
  "presentation-template": { price: 695, isRecurring: false },
};

// Server-side service prices - MUST match your frontend exactly
const SERVICE_PRICES: Record<
  string,
  { basePrice: number; isRecurring: boolean }
> = {
  "web-hosting": { basePrice: 29.95, isRecurring: true },
  "web-maintenance": { basePrice: 195, isRecurring: true },
  "web-hosting-maintenance": { basePrice: 199, isRecurring: true },
  "web-dev-single": { basePrice: 2480, isRecurring: false },
  "web-dev-custom": { basePrice: 4960, isRecurring: false },
  "web-dev-branding": { basePrice: 9920, isRecurring: false },
  "business-branding": { basePrice: 2495, isRecurring: false },
  "business-signage": { basePrice: 1295, isRecurring: false },
  "business-stationery": { basePrice: 695, isRecurring: false },
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

  if (!["now", "installments"].includes(body.paymentMethod)) {
    throw new Error("Invalid payment method");
  }

  if (
    !body.totals ||
    typeof body.totals.oneTime !== "number" ||
    typeof body.totals.recurring !== "number"
  ) {
    throw new Error("Invalid totals data");
  }

  if (body.totals.oneTime < 0 || body.totals.oneTime > 50000) {
    throw new Error("One-time amount out of range");
  }

  if (body.totals.recurring < 0 || body.totals.recurring > 5000) {
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
      paymentMethod,
      installmentPlan,
      totals,
      installmentPricing,
      comments,
      customerEmail,
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
    };

    if (paymentMethod === "now") {
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
            unit_amount: Math.round(totals.oneTime * 100), // Convert to cents
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
    } else if (paymentMethod === "installments") {
      // === INSTALLMENT PAYMENT CHECKOUT ===

      if (!installmentPricing || totals.oneTime <= 0) {
        return NextResponse.json(
          { error: "Invalid installment data" },
          { status: 400 },
        );
      }

      // Create a subscription that will charge for X months then cancel
      const sessionConfig: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "aud",
              product_data: {
                name: `${service.name} - Installment Plan`,
                description: `${description} | ${
                  installmentPlan.installments
                } monthly payments of $${installmentPricing.installmentAmount.toFixed(
                  2,
                )} | Processing fee: $${installmentPricing.feeAmount.toFixed(
                  2,
                )}`,
              },
              unit_amount: Math.round(
                installmentPricing.installmentAmount * 100,
              ),
              recurring: {
                interval: "month",
                interval_count: 1,
              },
            },
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/quote/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/quote`,
        subscription_data: {
          metadata: {
            ...baseMetadata,
            payment_type: "installments",
            installment_plan: installmentPlan.name,
            total_installments: (
              installmentPricing.remainingPayments + 1
            ).toString(),
            installment_amount: installmentPricing.installmentAmount.toString(),
            processing_fee: installmentPricing.feeAmount.toString(),
          },
        },
        metadata: {
          ...baseMetadata,
          payment_type: "installments",
          installment_plan: installmentPlan.name,
        },
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
    }

    return NextResponse.json(
      { error: "Invalid payment method" },
      { status: 400 },
    );
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

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
