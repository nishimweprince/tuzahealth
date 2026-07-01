import { SERVICES, CTA, COPY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/** Rising 3-bar meter that encodes each tier's support intensity. */
function IntensityMeter({ level }: { level: number }) {
  return (
    <div className="flex items-end gap-1" aria-hidden>
      {[1, 2, 3].map((bar) => (
        <span
          key={bar}
          className={cn(
            "w-1.5 rounded-sm",
            bar === 1 && "h-2.5",
            bar === 2 && "h-4",
            bar === 3 && "h-[22px]",
            bar <= level ? "bg-primary" : "bg-muted",
          )}
        />
      ))}
    </div>
  );
}

export function CareLevels() {
  return (
    <div>
      {/* Axis encodes the escalating scale — the structural device for this section. */}
      <div className="mb-9 flex items-center gap-4" aria-hidden>
        <span className="whitespace-nowrap text-[11.5px] font-medium uppercase tracking-[0.06em] text-label-muted">
          Lighter, supportive
        </span>
        <span className="h-px flex-1 rounded-full bg-gradient-to-r from-muted via-sky-muted to-primary" />
        <span className="whitespace-nowrap text-[11.5px] font-medium uppercase tracking-[0.06em] text-primary">
          Specialised, clinical
        </span>
      </div>

      <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {SERVICES.map((service, index) => {
          const level = index + 1;
          return (
            <li key={service.slug} className="flex flex-col bg-card px-7 py-8">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-serif text-[15px] font-semibold tabular-nums text-primary">
                  {String(level).padStart(2, "0")}
                </span>
                <IntensityMeter level={level} />
              </div>

              <h3 className="mb-2.5 font-serif text-[21px] font-semibold text-foreground">
                {service.name}
              </h3>
              <p className="mb-5 text-[15px] text-body-muted">{service.summary}</p>

              <ul className="mb-6 flex flex-col gap-2">
                {service.examples.map((example) => (
                  <li key={example} className="flex gap-2.5 text-[14px] text-body-muted">
                    <span
                      className="mt-[7px] size-1 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    {example}
                  </li>
                ))}
              </ul>

              <p className="mb-4 text-[13px] italic text-label-muted">{COPY.fundingNote}</p>

              <a
                href="#contact"
                className="mt-auto text-[14.5px] font-semibold text-primary no-underline hover:underline"
              >
                {CTA.serviceDiscuss}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
