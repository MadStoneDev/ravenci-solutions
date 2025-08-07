import {
  IconServer,
  IconTool,
  IconServerCog,
  IconDeviceDesktop,
  IconTerminal2,
  IconPaint,
  IconId,
  IconPalette,
} from "@tabler/icons-react";

import { Drill } from "lucide-react";

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

export const services: Record<string, Service> = {
  "web-hosting": {
    id: "web-hosting",
    name: "Web Hosting",
    icon: <IconServer size={40} />,
    basePrice: 29,
    isRecurring: true,
    recurringPeriod: "monthly",
    description:
      "Professional web hosting with SSL, backups, and 99.9% uptime guarantee.",
    addons: ["email-hosting", "malware-protection", "wordpress-migration"],
  },
  "monthly-web-maintenance": {
    id: "monthly-web-maintenance",
    name: "Monthly Web Maintenance",
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
  "oneoff-web-maintenance": {
    id: "oneoff-web-maintenance",
    name: "One-Off Web Maintenance",
    icon: <Drill size={40} />,
    basePrice: 450,
    isRecurring: false,
    description:
      "Get your website running smoothly again with optimised system updates, fixes, plugin tests and upgrades and" +
      " security checks.",
    addons: [
      "content-updates",
      "performance-optimization",
      "contact-form",
      "cookie-banner",
      "copywriting",
      "seo-content",
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
      "email-hosting",
      "wordpress-migration",
      "content-updates",
      "performance-optimization",
      "contact-form",
      "cookie-banner",
      "copywriting",
      "seo-content",
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
      "google-business",
      "web-hosting-addon",
      "maintenance-addon",
    ],
    discountRules: [
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
  "business-stationery": {
    id: "business-stationery",
    name: "Business Design - Business Stationery",
    icon: <IconId size={40} />,
    basePrice: 695,
    isRecurring: false,
    description:
      "Professional business stationery including business cards and letterheads.",
    addons: ["social-media-kit"],
  },
  "business-branding": {
    id: "business-branding",
    name: "Business Design - Branding Package",
    basePrice: 2495,
    icon: <IconPalette size={40} />,
    isRecurring: false,
    description:
      "Complete brand identity development from logo to style guide.",
    addons: ["business-cards", "letterhead", "social-media-kit"],
  },
  // "business-signage": {
  //   id: "business-signage",
  //   name: "Business Design - Signage & Vehicle Wraps",
  //   basePrice: 195,
  //   icon: <IconTruck size={40} />,
  //   isRecurring: false,
  //   description:
  //     "Professional signage and vehicle wrap designs that make your brand stand out.",
  //   addons: [
  //     "vehicle-wrap",
  //     "storefront-sign",
  //     "banner-design",
  //     "display-boards",
  //   ],
  // },
};
