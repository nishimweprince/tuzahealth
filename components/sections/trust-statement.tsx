import { Reveal } from "@/components/reveal";
import { COPY, TRUST_PILLARS } from "@/lib/site-data";

/**
 * Signature section: one oversized editorial statement of the care thesis,
 * grounded by three factual trust pillars. Stands in for testimonials the
 * agency doesn't yet have — honest, not decorative.
 */
export function TrustStatement() {
  return (
    <section className="border-y border-border bg-card">
      <div className="page-container py-20 md:py-28">
        <Reveal className="max-w-[920px]">
          <p className="type-display text-balance">{COPY.trustStatement}</p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3"
        >
          {TRUST_PILLARS.map((pillar) => (
            <div key={pillar.title} className="bg-card px-7 py-7">
              <div className="mb-2 font-serif text-[17px] font-semibold text-foreground">
                {pillar.title}
              </div>
              <p className="text-[14.5px] leading-relaxed text-body-muted">{pillar.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
