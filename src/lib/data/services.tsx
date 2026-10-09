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

// Hosting, maintenance and Website Care live in src/lib/data/care-plans.ts and
// check out via Stripe Price IDs. What remains here is the standalone hosting
// configurator (sub-add-ons like email hosting and migration).
export const services: Record<string, Service> = {
  "web-hosting": {
    id: "web-hosting",
    name: "Hosting",
    icon: <IconServer size={40} />,
    basePrice: 39,
    isRecurring: true,
    recurringPeriod: "monthly",
    description:
      "Managed hosting with SSL, daily backups and 99.9% uptime, for a site maintained by another reputable provider.",
    addons: ["email-hosting", "malware-protection", "wordpress-migration"],
  },
};
