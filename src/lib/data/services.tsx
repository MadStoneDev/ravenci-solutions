import {
  IconServer,
  IconTool,
  IconServerCog,
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
}

export const services: Record<string, Service> = {
  "web-hosting": {
    id: "web-hosting",
    name: "Web Hosting",
    icon: <IconServer size={40} />,
    basePrice: 39,
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
    basePrice: 249,
    isRecurring: true,
    recurringPeriod: "monthly",
    description: "Keep your website updated, secure, and running smoothly.",
    addons: [
      "malware-protection",
      "performance-optimization",
      "backup-service",
      "content-updates",
    ],
  },
  "oneoff-web-maintenance": {
    id: "oneoff-web-maintenance",
    name: "One-Off Web Maintenance",
    icon: <Drill size={40} />,
    basePrice: 495,
    isRecurring: false,
    description:
      "Get your website running smoothly again with optimised system updates, fixes, plugin tests and upgrades and" +
      " security checks.",
    addons: [
      "oneoff-backup-service",
      "oneoff-content-updates",
      "malware-audit",
      "oneoff-performance-optimization",
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
    basePrice: 269,
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
};
