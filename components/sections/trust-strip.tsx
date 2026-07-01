import { COPY } from "@/lib/site-data";

export function TrustStrip() {
  return (
    <section
      className="bg-navy py-[18px]"
      role="region"
      aria-label="Provider verification summary"
    >
      <div className="page-container grid grid-cols-1 gap-4 text-[13.5px] font-medium text-trust-text sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between lg:gap-6">
        {COPY.trustStrip.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}