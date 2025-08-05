// /app/quote/page.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  IconMinus,
  IconPlus,
  IconCreditCard,
  IconCalendar,
  IconArrowLeft,
  IconServer,
  IconTool,
  IconServerCog,
  IconDeviceDesktop,
  IconPalette,
  IconTruck,
  IconId,
  IconPaint,
  IconTerminal2,
} from "@tabler/icons-react";

interface Service {
  id: string;
  name: string;
  icon?: React.ReactNode;
  basePrice: number;
  isRecurring: boolean;
  recurringPeriod?: string;
  description: string;
  addons?: string[];
  discountRules?: DiscountRule[];
}

interface Addon {
  title: string;
  price: number;
  isRecurring: boolean;
  recurringPeriod?: string;
  description: string;
  customerQty: boolean;
  minQty: number;
  maxQty: number;
}

interface SelectedAddons {
  [key: string]: number;
}

interface DiscountRule {
  trigger: string[];
  action: {
    type: "free" | "discount" | "quantity_discount";
    items?: string[];
    percentage?: number;
    // New properties for quantity-based discounts
    target_item?: string;
    quantity_threshold?: number;
    new_price?: number;
  };
}

interface PaymentOption {
  name: string;
  fee: number;
  installments: number;
}

interface CalculatedTotals {
  oneTime: number;
  recurring: number;
  discounts: Array<{ description: string; amount: number }>;
  freeItems?: string[];
}

interface InstallmentPricing {
  feeAmount: number;
  totalWithFee: number;
  installmentAmount: number;
  adjustedFirstPayment: number;
  remainingPayments: number;
}

const QuotingPage: React.FC = () => {
  // Service definitions
  const services: Record<string, Service> = {
    "web-hosting": {
      id: "web-hosting",
      name: "Web Hosting",
      icon: <IconServer size={40} />,
      basePrice: 29.95,
      isRecurring: true,
      recurringPeriod: "monthly",
      description:
        "Professional web hosting with SSL, backups, and 99.9% uptime guarantee.",
      addons: ["ssl-cert", "backup-service", "cdn", "email-hosting"],
    },
    "web-maintenance": {
      id: "web-maintenance",
      name: "Web Maintenance",
      icon: <IconTool size={40} />,
      basePrice: 195,
      isRecurring: true,
      recurringPeriod: "monthly",
      description: "Keep your website updated, secure, and running smoothly.",
      addons: [
        "content-updates",
        "security-monitoring",
        "performance-optimization",
      ],
    },
    "web-hosting-maintenance": {
      id: "web-hosting-maintenance",
      name: "Web Hosting + Maintenance Package",
      icon: <IconServerCog size={40} />,
      basePrice: 199,
      isRecurring: true,
      recurringPeriod: "monthly",
      description:
        "Complete hosting and maintenance solution with bundle savings.",
      addons: [
        "ssl-cert",
        "backup-service",
        "cdn",
        "email-hosting",
        "content-updates",
        "security-monitoring",
      ],
      discountRules: [
        {
          trigger: ["ssl-cert"],
          action: { type: "free", items: ["ssl-cert"] },
        },
      ],
    },
    "web-dev-single": {
      id: "web-dev-single",
      name: "Web Development - Single Page Starter",
      basePrice: 2480,
      icon: <IconDeviceDesktop size={40} />,
      isRecurring: false,
      description:
        "Perfect for businesses looking to get their foot in the door with a professional single-page website.",
      addons: [
        "contact-form",
        "cookie-banner",
        "copywriting",
        "seo-content",
        "newsletter-signup",
        "facebook-pixel",
        "google-business",
        "web-hosting-addon",
        "maintenance-addon",
      ],
      discountRules: [
        {
          trigger: ["web-hosting-addon"],
          action: { type: "free", items: ["ssl-cert"] },
        },
        {
          trigger: ["contact-form", "newsletter-signup", "facebook-pixel"],
          action: { type: "discount", percentage: 10 },
        },
        {
          trigger: ["extra-pages"],
          action: {
            type: "quantity_discount",
            target_item: "extra-pages",
            quantity_threshold: 6,
            new_price: 250,
          },
        },
      ],
    },
    "web-dev-custom": {
      id: "web-dev-custom",
      name: "Web Development - Custom Development",
      basePrice: 4960,
      icon: <IconTerminal2 size={40} />,
      isRecurring: false,
      description:
        "Perfect for businesses who already have their design sorted and just need it built right.",
      addons: [
        "extra-pages",
        "portfolio",
        "contact-form",
        "cookie-banner",
        "copywriting",
        "seo-content",
        "blog-setup",
        "newsletter-signup",
        "facebook-pixel",
        "facebook-pixel",
        "google-business",
        "web-hosting-addon",
        "maintenance-addon",
      ],
      discountRules: [
        {
          trigger: ["web-hosting-addon"],
          action: { type: "free", items: ["ssl-cert"] },
        },
        {
          trigger: ["contact-form", "newsletter-signup", "facebook-pixel"],
          action: { type: "discount", percentage: 15 },
        },
        {
          trigger: ["extra-pages"],
          action: {
            type: "quantity_discount",
            target_item: "extra-pages",
            quantity_threshold: 6,
            new_price: 250,
          },
        },
      ],
    },
    "web-dev-branding": {
      id: "web-dev-branding",
      name: "Web Development - Branding & Development",
      basePrice: 9920,
      icon: <IconPaint size={40} />,
      isRecurring: false,
      description: `Complete transformation for businesses who want it all - from logo to launch.`,
      addons: [
        "extra-pages",
        "portfolio",
        "contact-form",
        "cookie-banner",
        "copywriting",
        "seo-content",
        "blog-setup",
        "newsletter-signup",
        "facebook-pixel",
        "google-business",
        "business-cards",
        "letterhead",
        "web-hosting-addon",
        "maintenance-addon",
      ],
      discountRules: [
        {
          trigger: ["web-hosting-addon"],
          action: { type: "free", items: ["ssl-cert"] },
        },
        {
          trigger: ["business-cards", "letterhead"],
          action: { type: "discount", percentage: 20 },
        },
        {
          trigger: ["extra-pages"],
          action: {
            type: "quantity_discount",
            target_item: "extra-pages",
            quantity_threshold: 6,
            new_price: 250,
          },
        },
      ],
    },
    "business-branding": {
      id: "business-branding",
      name: "Business Design - Branding Package",
      basePrice: 2495,
      icon: <IconPalette size={40} />,
      isRecurring: false,
      description:
        "Complete brand identity development from logo to style guide.",
      addons: [
        "business-cards",
        "letterhead",
        "brochure",
        "social-media-kit",
        "brand-guidelines",
      ],
    },
    "business-signage": {
      id: "business-signage",
      name: "Business Design - Signage & Vehicle Wraps",
      basePrice: 1295,
      icon: <IconTruck size={40} />,
      isRecurring: false,
      description:
        "Professional signage and vehicle wrap designs that make your brand stand out.",
      addons: [
        "vehicle-wrap",
        "storefront-sign",
        "banner-design",
        "display-boards",
      ],
    },
    "business-stationery": {
      id: "business-stationery",
      name: "Business Design - Business Stationery",
      icon: <IconId size={40} />,
      basePrice: 695,
      isRecurring: false,
      description:
        "Professional business stationery including cards, letterheads, and more.",
      addons: [
        "business-cards",
        "letterhead",
        "invoice-template",
        "presentation-template",
      ],
    },
  };

  // Addon definitions
  const addons: Record<string, Addon> = {
    "ssl-cert": {
      title: "SSL Certificate",
      price: 99,
      isRecurring: true,
      recurringPeriod: "yearly",
      description: "Secure your website with SSL encryption",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "backup-service": {
      title: "Daily Backups",
      price: 19.95,
      isRecurring: true,
      recurringPeriod: "monthly",
      description: "Automated daily backups of your website",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    cdn: {
      title: "CDN Service",
      price: 29.95,
      isRecurring: true,
      recurringPeriod: "monthly",
      description: "Global content delivery network for faster loading",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "email-hosting": {
      title: "Professional Email",
      price: 9.95,
      isRecurring: true,
      recurringPeriod: "monthly",
      description: "Professional email hosting with your domain",
      customerQty: true,
      minQty: 1,
      maxQty: 10,
    },
    "content-updates": {
      title: "Content Updates",
      price: 95,
      isRecurring: true,
      recurringPeriod: "monthly",
      description: "4 content updates per month",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "security-monitoring": {
      title: "Security Monitoring",
      price: 49.95,
      isRecurring: true,
      recurringPeriod: "monthly",
      description: "24/7 security monitoring and malware protection",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "performance-optimization": {
      title: "Performance Optimization",
      price: 149,
      isRecurring: true,
      recurringPeriod: "monthly",
      description: "Monthly performance optimization and speed improvements",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "extra-pages": {
      title: "Extra Pages",
      price: 295,
      isRecurring: false,
      description: "Additional pages beyond the standard package",
      customerQty: true,
      minQty: 1,
      maxQty: 20,
    },
    portfolio: {
      title: "Portfolio / Gallery",
      price: 795,
      isRecurring: false,
      description: "Showcase your work with a professional portfolio section",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "contact-form": {
      title: "Contact Form + Integration",
      price: 595,
      isRecurring: false,
      description: "Advanced contact form with email integration",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "cookie-banner": {
      title: "Cookie Consent Banner",
      price: 195,
      isRecurring: false,
      description: "Stay compliant with privacy laws",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    copywriting: {
      title: "Professional Copywriting",
      price: 295,
      isRecurring: false,
      description: "Compelling content that converts visitors",
      customerQty: true,
      minQty: 1,
      maxQty: 10,
    },
    "seo-content": {
      title: "SEO Content Optimization",
      price: 495,
      isRecurring: false,
      description: "Boost search rankings with optimized content",
      customerQty: true,
      minQty: 1,
      maxQty: 5,
    },
    "blog-setup": {
      title: "Advanced Blog Setup",
      price: 895,
      isRecurring: false,
      description: "Professional blog with categories and management",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "newsletter-signup": {
      title: "Newsletter Signup Forms",
      price: 395,
      isRecurring: false,
      description: "Build your email list effectively",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "facebook-pixel": {
      title: "Facebook Pixel Integration",
      price: 395,
      isRecurring: false,
      description: "Track website visitors for Facebook ads",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "google-business": {
      title: "Google Business Profile",
      price: 495,
      isRecurring: false,
      description: "Optimize your Google Business Profile",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "web-hosting-addon": {
      title: "Web Hosting",
      price: 29.95,
      isRecurring: true,
      recurringPeriod: "monthly",
      description: "Professional web hosting",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "maintenance-addon": {
      title: "Web Maintenance",
      price: 195,
      isRecurring: true,
      recurringPeriod: "monthly",
      description: "Website maintenance",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "business-cards": {
      title: "Business Cards Design",
      price: 295,
      isRecurring: false,
      description: "Professional business card design",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    letterhead: {
      title: "Letterhead Design",
      price: 395,
      isRecurring: false,
      description: "Professional letterhead design",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    brochure: {
      title: "Brochure Design",
      price: 895,
      isRecurring: false,
      description: "Tri-fold brochure design",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "social-media-kit": {
      title: "Social Media Kit",
      price: 695,
      isRecurring: false,
      description: "10 social media templates",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "brand-guidelines": {
      title: "Brand Guidelines Manual",
      price: 1295,
      isRecurring: false,
      description: "Comprehensive brand guidelines document",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "vehicle-wrap": {
      title: "Vehicle Wrap Design",
      price: 1295,
      isRecurring: false,
      description: "Professional vehicle wrap design",
      customerQty: true,
      minQty: 1,
      maxQty: 5,
    },
    "storefront-sign": {
      title: "Storefront Signage",
      price: 795,
      isRecurring: false,
      description: "Professional storefront sign design",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "banner-design": {
      title: "Banner Design",
      price: 495,
      isRecurring: false,
      description: "Professional banner design for events",
      customerQty: true,
      minQty: 1,
      maxQty: 10,
    },
    "display-boards": {
      title: "Display Boards",
      price: 395,
      isRecurring: false,
      description: "Professional display board design",
      customerQty: true,
      minQty: 1,
      maxQty: 10,
    },
    "invoice-template": {
      title: "Invoice Template",
      price: 295,
      isRecurring: false,
      description: "Professional invoice template design",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
    "presentation-template": {
      title: "Presentation Template",
      price: 695,
      isRecurring: false,
      description: "Professional presentation template",
      customerQty: false,
      minQty: 1,
      maxQty: 1,
    },
  };

  // Payment options
  const paymentOptions: Record<string, PaymentOption> = {
    "3-months": { name: "3 Monthly Payments", fee: 5, installments: 3 },
    "4-months": { name: "4 Monthly Payments", fee: 7, installments: 4 },
    "6-months": { name: "6 Monthly Payments", fee: 10, installments: 6 },
    "12-months": { name: "12 Monthly Payments", fee: 15, installments: 12 },
  };

  // States
  const [selectedService, setSelectedService] = useState("");
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddons>({});
  const [paymentMethod, setPaymentMethod] = useState("now"); // 'now' or 'installments'
  const [selectedInstallment, setSelectedInstallment] = useState("3-months");
  const [comments, setComments] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get search params on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get("service");
    if (serviceParam && services[serviceParam]) {
      setSelectedService(serviceParam);
    }
  }, []);

  // Calculate discounts and totals
  const calculatedTotals = useMemo((): CalculatedTotals => {
    if (!selectedService) return { oneTime: 0, recurring: 0, discounts: [] };
    const service = services[selectedService];
    let oneTimeTotal = service.isRecurring ? 0 : service.basePrice;
    let recurringTotal = service.isRecurring ? service.basePrice : 0;
    const appliedDiscounts: { description: string; amount: number }[] = [];
    const quantityDiscounts: { description: string; amount: number }[] = [];
    const freeItems: string[] = [];

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
                onClick={() => setSelectedService(service.id)}
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
          className="mb-6 flex items-center gap-1 text-ravenci-primary hover:text-ravenci-primary/80 font-medium"
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
                    onChange={(e) => setPaymentMethod(e.target.value)}
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
                      onChange={(e) => setPaymentMethod(e.target.value)}
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
};

export default QuotingPage;
