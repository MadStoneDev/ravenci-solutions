import { IconServer } from "@tabler/icons-react";

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

// Care plans (Maintenance, Website Care, Growth, Partner) live in
// src/lib/data/care-plans.ts and check out via Stripe Price IDs. What remains
// here is standalone managed hosting, for clients who don't want a care plan.
export const services: Record<string, Service> = {
  "web-hosting": {
    id: "web-hosting",
    name: "Managed Hosting",
    icon: <IconServer size={40} />,
    basePrice: 39,
    isRecurring: true,
    recurringPeriod: "monthly",
    description:
      "Standalone managed hosting with SSL, daily backups and 99.9% uptime. Included free on every care plan.",
    addons: ["email-hosting", "malware-protection", "wordpress-migration"],
  },
};
