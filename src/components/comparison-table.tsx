import { IconCheck, IconMinus, IconX } from "@tabler/icons-react";

interface ComparisonRow {
  feature: string;
  ravenci: "yes" | "no" | "partial" | string;
  agency: "yes" | "no" | "partial" | string;
  diy: "yes" | "no" | "partial" | string;
}

function CellIcon({ value }: { value: string }) {
  if (value === "yes")
    return (
      <IconCheck
        size={20}
        className="p-0.5 bg-ravenci-primary rounded-full text-white"
      />
    );
  if (value === "no")
    return (
      <IconX
        size={20}
        className="p-0.5 bg-neutral-300 rounded-full text-white"
      />
    );
  if (value === "partial")
    return (
      <IconMinus
        size={20}
        className="p-0.5 bg-yellow-400 rounded-full text-white"
      />
    );
  return <span className="text-sm text-neutral-600">{value}</span>;
}

const rows: ComparisonRow[] = [
  {
    feature: "Custom design to your brand",
    ravenci: "yes",
    agency: "partial",
    diy: "no",
  },
  {
    feature: "85+ PageSpeed guaranteed",
    ravenci: "yes",
    agency: "no",
    diy: "no",
  },
  {
    feature: "Structured data (schema markup)",
    ravenci: "yes",
    agency: "partial",
    diy: "no",
  },
  {
    feature: "Brisbane-based support",
    ravenci: "yes",
    agency: "partial",
    diy: "no",
  },
  {
    feature: "Fixed pricing, no scope creep",
    ravenci: "yes",
    agency: "no",
    diy: "yes",
  },
  {
    feature: "Ongoing maintenance included",
    ravenci: "yes",
    agency: "partial",
    diy: "no",
  },
  {
    feature: "You own all the code",
    ravenci: "yes",
    agency: "partial",
    diy: "no",
  },
  {
    feature: "AI/GEO-ready SEO",
    ravenci: "yes",
    agency: "no",
    diy: "no",
  },
  {
    feature: "Launch in under 6 weeks",
    ravenci: "yes",
    agency: "partial",
    diy: "yes",
  },
  {
    feature: "Clean, minimal codebase",
    ravenci: "yes",
    agency: "no",
    diy: "partial",
  },
];

export default function ComparisonTable() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto brutalist-card bg-white p-6 lg:p-8 rounded-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-ravenci-primary/30">
              <th className="py-4 pr-6 text-left font-bold text-ravenci-dark w-2/5" />
              <th className="py-4 px-4 text-center font-bold text-ravenci-primary w-1/5">
                RAVENCI
              </th>
              <th className="py-4 px-4 text-center font-bold text-neutral-500 w-1/5">
                Typical Agency
              </th>
              <th className="py-4 px-4 text-center font-bold text-neutral-500 w-1/5">
                DIY Builder
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-neutral-100 last:border-0"
              >
                <td className="py-4 pr-6 font-medium text-ravenci-dark">
                  {row.feature}
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center">
                    <CellIcon value={row.ravenci} />
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center">
                    <CellIcon value={row.agency} />
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center">
                    <CellIcon value={row.diy} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-3">
        {rows.map((row, index) => (
          <div key={index} className="p-4 bg-white brutalist-card rounded-lg">
            <p className="mb-3 font-medium text-ravenci-dark text-sm">
              {row.feature}
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex flex-col items-center gap-1">
                <CellIcon value={row.ravenci} />
                <span className="text-ravenci-primary font-medium">
                  RAVENCI
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <CellIcon value={row.agency} />
                <span className="text-neutral-400">Agency</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <CellIcon value={row.diy} />
                <span className="text-neutral-400">DIY</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
