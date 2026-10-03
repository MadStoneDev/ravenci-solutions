// /components/quoting-component
"use client";

import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";

import {
  IconMinus,
  IconPlus,
  IconCreditCard,
  IconArrowLeft,
  IconCheck,
} from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { addons } from "@/lib/data/addons";
import { services } from "@/lib/data/services";
import {
  CARE_PLANS,
  BILLING_INTERVALS,
  STORE_ADDON,
  CALENDLY_URL,
  STANDALONE_HOSTING,
  type BillingInterval,
  type CarePlan,
} from "@/lib/data/care-plans";

interface SelectedAddons {
  [key: string]: number;
}

interface CalculatedTotals {
  oneTime: number;
  recurring: number;
}

function effectiveMonthly(plan: CarePlan, interval: BillingInterval) {
  if (interval === "sixMonth") return plan.upfront.sixMonth;
  if (interval === "twelveMonth") return plan.upfront.twelveMonth;
  return plan.monthly;
}

function intervalNote(interval: BillingInterval) {
  if (interval === "sixMonth") return "billed every 6 months";
  if (interval === "twelveMonth") return "billed yearly";
  return "billed monthly";
}

function renewalNote(interval: BillingInterval): string | null {
  if (interval === "sixMonth")
    return "Billed upfront. Renews automatically every 6 months at the same rate unless cancelled.";
  if (interval === "twelveMonth")
    return "Billed upfront. Renews automatically every 12 months at the same rate unless cancelled.";
  return null;
}

export default function QuotingComponent() {
  // Standalone-hosting flow (dynamic Stripe price_data).
  const [selectedService, setSelectedService] = useState("");
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddons>({});
  const [comments, setComments] = useState("");
  const [interceptBack, setInterceptBack] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Care-plan flow (Stripe Price IDs).
  const [planInterval, setPlanInterval] = useState<
    Record<string, BillingInterval>
  >({});
  const [planStore, setPlanStore] = useState<Record<string, boolean>>({});
  const [planTerms, setPlanTerms] = useState<Record<string, boolean>>({});
  const [planLoading, setPlanLoading] = useState<string | null>(null);
  const [planError, setPlanError] = useState<string | null>(null);

  const handleServiceSelection = (serviceId: string) => {
    setSelectedService(serviceId);
    setInterceptBack(true);
    window.history.pushState(null, "", window.location.href);
  };

  const calculatedTotals = useMemo((): CalculatedTotals => {
    if (!selectedService) return { oneTime: 0, recurring: 0 };

    const service = services[selectedService];

    let oneTimeTotal = service.isRecurring ? 0 : service.basePrice;
    let recurringTotal = service.isRecurring ? service.basePrice : 0;

    Object.entries(selectedAddons).forEach(([addonId, quantity]) => {
      if (quantity > 0) {
        const addon = addons[addonId];
        const totalPrice = addon.price * quantity;
        if (addon.isRecurring) {
          recurringTotal += totalPrice;
        } else {
          oneTimeTotal += totalPrice;
        }
      }
    });

    return { oneTime: oneTimeTotal, recurring: recurringTotal };
  }, [selectedService, selectedAddons]);

  const handleAddonChange = (addonId: string, quantity: number) => {
    setSelectedAddons((prev) => ({ ...prev, [addonId]: quantity }));
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    const checkoutData = {
      service: services[selectedService],
      addons: selectedAddons,
      paymentMethod: "now",
      totals: calculatedTotals,
      comments: comments.trim(),
    };

    try {
      const response = await fetch("/api/create-stripe-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkoutData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }
      window.location.href = data.checkoutUrl;
    } catch (error) {
      console.error("Error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
      setIsLoading(false);
    }
  };

  const handleCarePlanCheckout = async (plan: CarePlan) => {
    setPlanLoading(plan.id);
    setPlanError(null);

    try {
      const response = await fetch("/api/create-stripe-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          carePlan: {
            planId: plan.id,
            interval: planInterval[plan.id] ?? "monthly",
            storeAddon: !!planStore[plan.id],
            termsAccepted: !!planTerms[plan.id],
          },
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }
      window.location.href = data.checkoutUrl;
    } catch (error) {
      console.error("Error:", error);
      setPlanError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
      setPlanLoading(null);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get("service");
    if (serviceParam && services[serviceParam]) {
      setSelectedService(serviceParam);
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (selectedService && interceptBack) {
        setSelectedService("");
        setSelectedAddons({});
        setComments("");
        setInterceptBack(false);
        setError(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedService, interceptBack]);

  // ============================ LANDING VIEW ============================
  if (!selectedService) {
    return (
      <main className="flex flex-col bg-background">
        <section className="px-5 py-14 md:px-12 md:py-20 lg:px-20">
          <div className="max-w-3xl">
            <Breadcrumbs items={[{ label: "Get a Quote" }]} />
            <div className="mt-4">
              <SectionLabel index="01" label="Care Plans" tick />
            </div>
            <h1 className="mt-4 text-display-l text-foreground">
              Care plans &amp; hosting
            </h1>
            <p className="mt-6 text-lead text-muted-foreground">
              Every plan includes hosting, updates, security and backups. Higher
              plans add hours each month for design, development and content
              work. Pick a plan and check out securely, or book a call for the
              larger tiers.
            </p>
            <p className="mt-4 text-small text-muted-foreground">
              Looking for a website, eCommerce, branding, SEO or an app project?{" "}
              <Link
                href="/launch-your-vision"
                className="font-medium text-accent transition-colors duration-fast hover:text-accent/70"
              >
                Request a proposal
              </Link>
            </p>
          </div>

          {/* Care plan cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {CARE_PLANS.map((plan) => {
              const interval = planInterval[plan.id] ?? "monthly";
              const store = !!planStore[plan.id];
              const monthly = effectiveMonthly(plan, interval);
              const isCheckout = plan.mode === "checkout";
              const loading = planLoading === plan.id;

              return (
                <div
                  key={plan.id}
                  className="flex flex-col rounded-sm border border-border bg-card p-6"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h2 className="text-heading-s text-foreground">
                      {plan.name}
                    </h2>
                    <p className="text-heading-s text-accent">
                      ${monthly.toLocaleString()}
                      <span className="text-small font-normal text-muted-foreground">
                        /mo
                      </span>
                    </p>
                  </div>
                  <p className="mt-2 text-small text-muted-foreground">
                    {plan.line}
                  </p>

                  <ul className="mt-4 flex flex-1 flex-col gap-2">
                    {plan.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-small text-muted-foreground"
                      >
                        <IconCheck
                          size={16}
                          aria-hidden
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {isCheckout ? (
                    <div className="mt-6 flex flex-col gap-4 border-t border-border pt-5">
                      {/* Billing interval */}
                      <div>
                        <p className="mb-2 font-mono text-label-sm uppercase text-muted-foreground">
                          Billing
                        </p>
                        <div className="flex flex-col gap-1.5">
                          {BILLING_INTERVALS.map((bi) => (
                            <label
                              key={bi.id}
                              className="flex cursor-pointer items-center gap-2 text-small text-foreground"
                            >
                              <input
                                type="radio"
                                name={`billing-${plan.id}`}
                                checked={interval === bi.id}
                                onChange={() =>
                                  setPlanInterval((prev) => ({
                                    ...prev,
                                    [plan.id]: bi.id,
                                  }))
                                }
                                className="accent-accent"
                              />
                              <span>{bi.label}</span>
                              <span className="text-muted-foreground">
                                · {bi.note}
                              </span>
                            </label>
                          ))}
                        </div>
                        {renewalNote(interval) && (
                          <p className="mt-3 text-small text-muted-foreground">
                            {renewalNote(interval)}
                          </p>
                        )}
                      </div>

                      {/* Store add-on */}
                      <label className="flex cursor-pointer items-center gap-2 text-small text-foreground">
                        <input
                          type="checkbox"
                          checked={store}
                          onChange={(e) =>
                            setPlanStore((prev) => ({
                              ...prev,
                              [plan.id]: e.target.checked,
                            }))
                          }
                          className="accent-accent"
                        />
                        <span>
                          Add {STORE_ADDON.label} (+${STORE_ADDON.monthly}/mo)
                        </span>
                      </label>

                      <div className="text-small text-muted-foreground">
                        <span className="font-medium text-foreground">
                          ${(monthly + (store ? STORE_ADDON.monthly : 0)).toLocaleString()}
                          /mo
                        </span>{" "}
                        {intervalNote(interval)}
                        {store ? ", store included" : ""}
                        {renewalNote(interval) && (
                          <span className="mt-1 block">{renewalNote(interval)}</span>
                        )}
                      </div>

                      {/* Terms acceptance (required) */}
                      <label className="flex cursor-pointer items-start gap-2 text-small text-foreground">
                        <input
                          type="checkbox"
                          checked={!!planTerms[plan.id]}
                          onChange={(e) =>
                            setPlanTerms((prev) => ({
                              ...prev,
                              [plan.id]: e.target.checked,
                            }))
                          }
                          className="mt-0.5 accent-accent"
                        />
                        <span>
                          I agree to a 3-month minimum term and the{" "}
                          <Link
                            href="/terms-and-conditions"
                            target="_blank"
                            className="font-medium text-accent underline underline-offset-2 hover:no-underline"
                          >
                            Terms of Service
                          </Link>
                          .
                        </span>
                      </label>

                      <button
                        onClick={() => handleCarePlanCheckout(plan)}
                        disabled={loading || !planTerms[plan.id]}
                        className="flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {loading ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-b-2 border-accent-foreground" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <IconCreditCard size={18} /> Subscribe
                          </>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5">
                      <p className="text-small text-muted-foreground">
                        Upfront: ${plan.upfront.sixMonth.toLocaleString()}/mo for
                        6 months, ${plan.upfront.twelveMonth.toLocaleString()}/mo
                        for 12.
                      </p>
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-full items-center justify-center rounded-sm border border-foreground px-6 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
                      >
                        Book a call
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {planError && (
            <div className="mt-6 rounded-sm border border-border bg-muted p-3">
              <p className="text-small text-foreground">{planError}</p>
            </div>
          )}

          <p className="mt-6 max-w-3xl text-small text-muted-foreground">
            3-month minimum, then month-to-month. Online stores add $
            {STORE_ADDON.monthly}/month to any plan. Hours reset each month and
            don&apos;t roll over. Extra work outside your plan is billed at
            $165/hr.
          </p>

          {/* Standalone hosting */}
          <div className="mt-12">
            <h2 className="text-heading-s text-foreground">
              Just need hosting?
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
              {Object.values(services).map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelection(service.id)}
                  className="flex cursor-pointer flex-col items-start justify-between rounded-sm border border-border bg-card p-6 transition-colors hover:border-accent"
                >
                  <section>
                    <div className="mb-4 inline-block rounded-sm bg-accent/10 p-3 text-accent">
                      {service.icon && service.icon}
                    </div>
                    <h3 className="mb-2 text-heading-s text-foreground">
                      {service.name}
                    </h3>
                    <p className="mb-4 text-small text-muted-foreground">
                      {service.description}
                    </p>
                  </section>
                  <div className="text-heading-s text-accent">
                    ${service.basePrice.toFixed(0)}
                    {service.isRecurring && (
                      <span className="text-small font-normal text-muted-foreground">
                        /{service.recurringPeriod}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ======================= STANDALONE HOSTING CONFIG =======================
  const service = services[selectedService];
  const availableAddons =
    service.addons?.map((id) => ({ id, ...addons[id] })) || [];

  return (
    <main className="flex flex-col bg-background">
      <section className="px-5 pt-14 pb-8 md:px-12 md:pt-20 lg:px-20">
        <Breadcrumbs
          items={[
            { label: "Get a Quote", href: "/quote" },
            { label: service.name },
          ]}
        />
        <button
          onClick={() => setSelectedService("")}
          className="mt-4 mb-6 inline-flex items-center gap-1 font-medium text-accent transition-colors duration-fast hover:text-accent/80"
        >
          <IconArrowLeft size={18} /> Back to plans
        </button>

        <h1 className="text-display-m text-foreground">{service.name}</h1>
        <p className="mt-4 max-w-3xl text-lead text-muted-foreground">
          {service.description}
        </p>
      </section>

      <div className="grid grid-cols-1 gap-8 px-5 pb-20 md:px-12 lg:grid-cols-3 lg:px-20">
        {/* Main Service Details */}
        <div className="lg:col-span-2">
          <div className="mb-8 rounded-sm border border-border bg-card p-6">
            <h2 className="mb-4 text-heading-s text-foreground">Base Service</h2>
            <div className="flex flex-col justify-between gap-5 rounded-sm border border-accent bg-accent/10 p-5 md:flex-row md:items-center md:gap-2">
              <div className="max-w-xl">
                <h3 className="text-heading-s text-foreground">
                  {service.name}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              <div className="min-w-[180px] text-right text-heading-s text-accent">
                ${service.basePrice.toFixed(0)}
                {service.isRecurring && (
                  <span className="text-small font-normal text-muted-foreground">
                    /{service.recurringPeriod}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-small text-muted-foreground">
                Want hosting plus ongoing support?{" "}
                <button
                  onClick={() => setSelectedService("")}
                  className="text-accent transition-colors hover:text-accent/70"
                >
                  See the care plans
                </button>
                .
              </p>
            </div>
          </div>

          {/* Add-ons */}
          {availableAddons.length > 0 && (
            <div className="rounded-sm border border-border bg-card p-6">
              <h2 className="mb-6 text-heading-s text-foreground">
                Available Add-ons
              </h2>
              <div className="space-y-4">
                {availableAddons.map((addon) => (
                  <div
                    key={addon.id}
                    className="rounded-sm border border-border bg-card p-5"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">
                          {addon.title}
                        </h3>
                        <p className="text-small text-muted-foreground">
                          {addon.description}
                        </p>
                        <div className="mt-1 text-heading-s text-foreground">
                          ${addon.price.toFixed(0)}
                          {addon.isRecurring && (
                            <span className="text-small font-normal text-muted-foreground">
                              /{addon.recurringPeriod}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="ml-4">
                        {addon.customerQty ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                handleAddonChange(
                                  addon.id,
                                  Math.max(0, (selectedAddons[addon.id] || 0) - 1),
                                )
                              }
                              className="rounded-sm border border-border bg-muted p-1 text-foreground hover:border-accent"
                            >
                              <IconMinus size={16} />
                            </button>
                            <span className="w-8 text-center text-foreground">
                              {selectedAddons[addon.id] || 0}
                            </span>
                            <button
                              onClick={() =>
                                handleAddonChange(
                                  addon.id,
                                  Math.min(
                                    addon.maxQty,
                                    (selectedAddons[addon.id] || 0) + 1,
                                  ),
                                )
                              }
                              className="rounded-sm border border-border bg-muted p-1 text-foreground hover:border-accent"
                            >
                              <IconPlus size={16} />
                            </button>
                          </div>
                        ) : (
                          <label className="flex items-center text-small text-foreground">
                            <input
                              type="checkbox"
                              checked={(selectedAddons[addon.id] || 0) > 0}
                              onChange={(e) =>
                                handleAddonChange(addon.id, e.target.checked ? 1 : 0)
                              }
                              className="mr-2 accent-accent"
                            />
                            Add
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-sm border border-border bg-card p-6">
            <h2 className="mb-6 text-heading-s text-foreground">Order Summary</h2>

            <div className="mb-6 space-y-3">
              {calculatedTotals.oneTime > 0 && (
                <div className="flex justify-between text-foreground">
                  <span>One-time Total:</span>
                  <span className="font-semibold text-accent">
                    ${calculatedTotals.oneTime.toFixed(2)}
                  </span>
                </div>
              )}
              {calculatedTotals.recurring > 0 && (
                <div className="flex justify-between text-foreground">
                  <span>Monthly Recurring:</span>
                  <span className="font-semibold text-accent">
                    ${calculatedTotals.recurring.toFixed(2)}/month
                  </span>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h3 className="mb-3 font-mono text-label-sm uppercase text-muted-foreground">
                Payment Method
              </h3>
              <div className="flex items-center text-muted-foreground">
                <IconCreditCard size={18} className="mr-2" />
                Secure checkout via Stripe
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 font-mono text-label-sm uppercase text-muted-foreground">
                Additional Comments
              </h3>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Any special requirements or notes..."
                className="h-24 w-full resize-none rounded-sm border border-input/60 bg-background p-3.5 text-small text-foreground outline-none focus:border-accent"
              />
            </div>

            {error && (
              <div className="mb-4 rounded-sm border border-border bg-muted p-3">
                <p className="text-small text-foreground">{error}</p>
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="h-12 w-full rounded-sm bg-accent px-6 font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-accent-foreground"></div>
                  Processing...
                </div>
              ) : (
                "Pay Now"
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
