// /components/quoting-component
"use client";

import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";

import {
  IconMinus,
  IconPlus,
  IconCreditCard,
  IconCalendar,
  IconArrowLeft,
} from "@tabler/icons-react";

import { addons } from "@/lib/data/addons";
import { services } from "@/lib/data/services";
import { paymentOptions } from "@/lib/data/installments";

interface SelectedAddons {
  [key: string]: number;
}

interface CalculatedTotals {
  oneTime: number;
  recurring: number;
  discounts: Array<{ description: string; amount: number }>;
  freeItems?: string[];
}

type PaymentMethod = "now" | "installments";

export default function QuotingComponent() {
  // States
  const [selectedService, setSelectedService] = useState("");
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddons>({});
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("now");
  const [selectedInstallment, setSelectedInstallment] =
    useState<string>("3-months");

  const [comments, setComments] = useState("");

  const [interceptBack, setInterceptBack] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Service Selection
  const handleServiceSelection = (serviceId: string) => {
    setSelectedService(serviceId);
    setInterceptBack(true);

    // Push a new history state
    window.history.pushState(null, "", window.location.href);
  };

  // Calculate discounts and totals
  const calculatedTotals = useMemo((): CalculatedTotals => {
    if (!selectedService) return { oneTime: 0, recurring: 0, discounts: [] };

    const service = services[selectedService];

    const appliedDiscounts: { description: string; amount: number }[] = [];
    const freeItems: string[] = [];

    let oneTimeTotal = service.isRecurring ? 0 : service.basePrice;
    let recurringTotal = service.isRecurring ? service.basePrice : 0;

    // Calculate addon totals
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

    // Apply discount rules
    if (service.discountRules) {
      service.discountRules.forEach((rule) => {
        const hasAllTriggers = rule.trigger.every(
          (triggerId) => (selectedAddons[triggerId] || 0) > 0,
        );

        if (hasAllTriggers) {
          if (rule.action.type === "free") {
            rule.action.items?.forEach((itemId) => {
              if (!(selectedAddons[itemId] > 0)) {
                setSelectedAddons((prev) => ({ ...prev, [itemId]: 1 }));
                freeItems.push(itemId);
              }
            });
          } else if (
            rule.action.type === "discount" &&
            rule.action.percentage !== undefined
          ) {
            const discountAmount =
              oneTimeTotal * (rule.action.percentage / 100);
            oneTimeTotal -= discountAmount;
            appliedDiscounts.push({
              description: `${rule.action.percentage}% Bundle Discount`,
              amount: discountAmount,
            });
          } else if (
            rule.action.type === "quantity_discount" &&
            rule.action.target_item &&
            rule.action.quantity_threshold &&
            rule.action.new_price
          ) {
            const targetAddon = rule.action.target_item;
            const quantity = selectedAddons[targetAddon] || 0;

            if (quantity >= rule.action.quantity_threshold) {
              const addon = addons[targetAddon];
              const originalTotal = addon.price * quantity;
              const discountedTotal = rule.action.new_price * quantity;
              const savings = originalTotal - discountedTotal;

              // Update the totals
              if (addon.isRecurring) {
                recurringTotal =
                  recurringTotal - originalTotal + discountedTotal;
              } else {
                oneTimeTotal = oneTimeTotal - originalTotal + discountedTotal;
              }

              appliedDiscounts.push({
                description: `Bulk discount on ${
                  addon.title
                } (${quantity} × $${rule.action.new_price.toFixed(2)})`,
                amount: savings,
              });
            }
          }
        }
      });
    }

    return {
      oneTime: oneTimeTotal,
      recurring: recurringTotal,
      discounts: appliedDiscounts,
      freeItems,
    };
  }, [selectedService, selectedAddons]);

  // Calculate installment pricing
  const installmentPricing = useMemo(() => {
    if (paymentMethod !== "installments") return null;

    const option = paymentOptions[selectedInstallment];
    const feeAmount = calculatedTotals.oneTime * (option.fee / 100);
    const totalWithFee = calculatedTotals.oneTime + feeAmount;
    const installmentAmount = Math.ceil(totalWithFee / option.installments);

    // Ensure first payment covers at least one month of recurring if applicable
    const minimumFirstPayment =
      calculatedTotals.recurring > 0 ? calculatedTotals.recurring : 0;
    const adjustedFirstPayment = Math.max(
      installmentAmount,
      minimumFirstPayment,
    );

    return {
      feeAmount,
      totalWithFee,
      installmentAmount,
      adjustedFirstPayment,
      remainingPayments: option.installments - 1,
    };
  }, [paymentMethod, selectedInstallment, calculatedTotals]);

  const handleAddonChange = (addonId: string, quantity: number) => {
    setSelectedAddons((prev) => ({
      ...prev,
      [addonId]: quantity,
    }));
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    const checkoutData = {
      service: services[selectedService],
      addons: selectedAddons,
      paymentMethod,
      installmentPlan:
        paymentMethod === "installments"
          ? paymentOptions[selectedInstallment]
          : null,
      totals: calculatedTotals,
      installmentPricing,
      comments: comments.trim(),
    };

    try {
      const response = await fetch("/api/create-stripe-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      // Redirect directly to Stripe's hosted checkout
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

  // Get search params on mount
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
        // Clear service selection
        setSelectedService("");
        setSelectedAddons({});
        setPaymentMethod("now");
        setSelectedInstallment("3-months");
        setComments("");

        setInterceptBack(false);
        setError(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedService, interceptBack]);

  if (!selectedService) {
    return (
      <main className="pb-10 flex flex-col min-h-screen bg-neutral-50">
        <section className="content-section pt-32 pb-24 px-5 sm:px-20 xl:px-36">
          <h1 className="text-4xl md:text-5xl font-medium mb-8">
            Get Your Custom Quote
          </h1>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl">
            Select the service you're interested in to get started with your
            custom quote.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(services).map((service) => (
              <div
                key={service.id}
                onClick={() => {
                  handleServiceSelection(service.id);
                }}
                className="flex flex-col items-start justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-shadow border border-neutral-200 hover:border-ravenci-primary"
              >
                <section>
                  <div
                    className={`mb-4 p-3 inline-block bg-ravenci-primary rounded-full text-white`}
                  >
                    {service.icon && service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {service.description}
                  </p>
                </section>
                <div className="text-xl font-bold text-ravenci-primary">
                  From ${service.basePrice.toFixed(2)}
                  {service.isRecurring && (
                    <span className="text-sm font-normal">
                      /{service.recurringPeriod}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  const service = services[selectedService];
  const availableAddons =
    service.addons?.map((id) => ({ id, ...addons[id] })) || [];

  return (
    <main className="pb-10 flex flex-col min-h-screen bg-neutral-50">
      <section className="content-section pt-32 pb-12 px-5 sm:px-20 xl:px-36">
        <button
          onClick={() => setSelectedService("")}
          className="mb-6 flex items-center gap-1 text-ravenci-primary hover:text-ravenci-primary/80 font-medium transition-all duration-300 ease-in-out"
        >
          <IconArrowLeft /> Back to Services
        </button>

        <h1 className="text-4xl md:text-5xl font-medium mb-4">
          {service.name}
        </h1>
        <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
          {service.description}
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-5 sm:px-20 xl:px-36 pb-20">
        {/* Main Service Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Base Service</h2>
            <div className="flex justify-between items-center p-4 bg-ravenci-primary/10 rounded-lg">
              <div className={`max-w-xl`}>
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
              <div className="text-2xl font-bold text-ravenci-primary">
                ${service.basePrice.toFixed(2)}
                {service.isRecurring && (
                  <span className="text-sm font-normal">
                    /{service.recurringPeriod}
                  </span>
                )}
              </div>
            </div>

            <div className={`mt-5`}>
              <p className="text-sm text-ravenci-dark/50">
                Not quite what you're looking for?{" "}
                <Link
                  href={`/launch-your-vision`}
                  className={`text-ravenci-primary hover:text-ravenci-primary/70 transition-all duration-300 ease-in-out`}
                >
                  Get in touch!
                </Link>
              </p>
            </div>
          </div>

          {/* Add-ons */}
          {availableAddons.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Available Add-ons</h2>
              <div className="space-y-4">
                {availableAddons.map((addon) => {
                  const isFree = calculatedTotals.freeItems?.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      className={`p-4 border rounded-lg ${
                        isFree
                          ? "bg-green-50 border-green-200"
                          : "border-neutral-200"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold flex items-center gap-2">
                            {addon.title}
                            {isFree && (
                              <span className="text-green-600 text-sm font-normal">
                                (FREE)
                              </span>
                            )}
                          </h3>
                          <p className="text-neutral-600 text-sm">
                            {addon.description}
                          </p>
                          <div className="text-lg font-bold text-neutral-800 mt-1">
                            ${addon.price.toFixed(2)}
                            {addon.isRecurring && (
                              <span className="text-sm font-normal">
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
                                    Math.max(
                                      0,
                                      (selectedAddons[addon.id] || 0) - 1,
                                    ),
                                  )
                                }
                                className="p-1 rounded bg-neutral-200 hover:bg-neutral-300"
                                disabled={isFree}
                              >
                                <IconMinus size={16} />
                              </button>
                              <span className="w-8 text-center">
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
                                className="p-1 rounded bg-neutral-200 hover:bg-neutral-300"
                                disabled={isFree}
                              >
                                <IconPlus size={16} />
                              </button>
                            </div>
                          ) : (
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                checked={
                                  (selectedAddons[addon.id] || 0) > 0 || isFree
                                }
                                onChange={(e) =>
                                  handleAddonChange(
                                    addon.id,
                                    e.target.checked ? 1 : 0,
                                  )
                                }
                                className="mr-2"
                                disabled={isFree}
                              />
                              Add
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className={`mt-5`}>
            <p className="text-sm text-ravenci-dark/50">
              Not quite what you're looking for?{" "}
              <Link
                href={`/launch-your-vision`}
                className={`text-ravenci-primary hover:text-ravenci-primary/70 transition-all duration-300 ease-in-out`}
              >
                Get in touch!
              </Link>
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

            {/* Totals */}
            <div className="space-y-3 mb-6">
              {calculatedTotals.oneTime > 0 && (
                <div className="flex justify-between">
                  <span>One-time Total:</span>
                  <span className="font-semibold">
                    ${calculatedTotals.oneTime.toFixed(2)}
                  </span>
                </div>
              )}
              {calculatedTotals.recurring > 0 && (
                <div className="flex justify-between">
                  <span>Monthly Recurring:</span>
                  <span className="font-semibold">
                    ${calculatedTotals.recurring.toFixed(2)}/month
                  </span>
                </div>
              )}
              {calculatedTotals.discounts.map((discount, index) => (
                <div
                  key={index}
                  className="flex justify-between text-green-600"
                >
                  <span className={`text-sm max-w-[200px]`}>
                    {discount.description}:
                  </span>
                  <span className={`text-sm`}>
                    -${discount.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Payment Method Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Payment Method</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="now"
                    checked={paymentMethod === "now"}
                    onChange={() => setPaymentMethod("now")}
                    className="mr-2"
                  />
                  <IconCreditCard size={18} className="mr-2" />
                  Pay Now
                </label>

                {calculatedTotals.oneTime > 0 && (
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="installments"
                      checked={paymentMethod === "installments"}
                      onChange={() => setPaymentMethod("installments")}
                      className="mr-2"
                    />
                    <IconCalendar size={18} className="mr-2" />
                    Payment Installments
                  </label>
                )}
              </div>
            </div>

            {/* Installment Options */}
            {paymentMethod === "installments" &&
              calculatedTotals.oneTime > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Installment Plan</h3>
                  <select
                    value={selectedInstallment}
                    onChange={(e) => setSelectedInstallment(e.target.value)}
                    className="w-full p-2 border border-neutral-300 rounded"
                  >
                    {Object.entries(paymentOptions).map(([key, option]) => (
                      <option key={key} value={key}>
                        {option.name} (+{option.fee}% fee)
                      </option>
                    ))}
                  </select>

                  {installmentPricing && (
                    <div className="mt-3 p-3 bg-neutral-50 rounded text-sm">
                      <div>
                        Processing fee: $
                        {installmentPricing.feeAmount.toFixed(2)}
                      </div>
                      <div>
                        Total with fee: $
                        {installmentPricing.totalWithFee.toFixed(2)}
                      </div>
                      <div className="font-semibold">
                        First payment: $
                        {installmentPricing.adjustedFirstPayment.toFixed(2)}
                      </div>
                      <div>
                        Remaining {installmentPricing.remainingPayments}{" "}
                        payments: $
                        {installmentPricing.installmentAmount.toFixed(2)} each
                      </div>
                    </div>
                  )}
                </div>
              )}

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Additional Comments</h3>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Any special requirements or notes..."
                className="w-full p-3 border border-neutral-300 rounded-lg resize-none h-24 text-sm"
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Updated Checkout Button with loading state */}
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-ravenci-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-ravenci-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Processing...
                </div>
              ) : paymentMethod === "now" ? (
                "Pay Now"
              ) : (
                "Set Up Installments"
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
