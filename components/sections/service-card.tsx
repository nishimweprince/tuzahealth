import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";
import { COPY, CTA, Service } from "@/lib/site-data";

export function ServiceCard({
  service,
  contactHref = "#contact",
}: {
  service: Service;
  contactHref?: string;
}) {
  return (
    <div className="group flex flex-col border border-border bg-card transition duration-200 hover:border-primary/60 hover:shadow-sm">
      <PhotoPlaceholder label={`PHOTO — ${service.name}`} aspect="16/9" />
      <div className="flex flex-1 flex-col px-[26px] py-[30px]">
        <h3 className="font-serif text-[21px] font-semibold text-foreground mb-3">
          {service.name}
        </h3>
        <p className="text-[15px] text-body-muted mb-[18px]">{service.summary}</p>
        <ul className="mb-5 pl-[18px] text-[14.5px] text-body-muted list-disc">
          {service.examples.map((ex) => (
            <li key={ex} className="mb-1.5 last:mb-0">
              {ex}
            </li>
          ))}
        </ul>
        <p className="text-[13px] text-label-muted italic mb-[18px]">{COPY.fundingNote}</p>
        <a
          href={contactHref}
          className="mt-auto text-[14.5px] font-semibold text-primary no-underline hover:underline"
        >
          {CTA.serviceDiscuss}
        </a>
      </div>
    </div>
  );
}