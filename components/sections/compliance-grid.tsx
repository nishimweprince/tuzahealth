import { COMPANY, COPY } from "@/lib/site-data";

const CELLS = [
  { label: "Legal name", value: COMPANY.legalName },
  { label: "NPI", value: COMPANY.npi },
  { label: "Taxonomy", value: COMPANY.taxonomy },
  { label: "Service area", value: COMPANY.serviceAreaShort },
  { label: "Kansas home health licence", value: COPY.licenceStatus, highlight: true },
  { label: "Last reviewed", value: COMPANY.lastReviewed },
] as const;

export function ComplianceGrid() {
  return (
    <div className="border border-border bg-card">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {CELLS.map((cell, index) => {
          const isLeft = index % 2 === 0;
          const isBottom = index >= 4;

          return (
            <div
              key={cell.label}
              className={[
                "px-[26px] py-[22px]",
                !isBottom && "border-b border-[#e5e9ec]",
                isLeft && "sm:border-r sm:border-[#e5e9ec]",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="text-xs text-label-muted uppercase tracking-[0.04em] mb-1.5">
                {cell.label}
              </div>
              <div
                className={
                  "highlight" in cell && cell.highlight
                    ? "text-[14.5px] font-semibold text-[#9a6b1e]"
                    : "text-[15.5px] font-semibold text-foreground"
                }
              >
                {cell.value}
              </div>
            </div>
          );
        })}
      </div>
      <p className="px-[26px] py-4 text-[13.5px] text-label-muted border-t border-[#e5e9ec]">
        {COPY.privacyOnRequest}
      </p>
    </div>
  );
}