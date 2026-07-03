import Image from "next/image";

import { cldBlur, cldWarm, IMAGES } from "@/lib/cloudinary";
import { COPY, CTA, Service } from "@/lib/site-data";

/** Each care level maps to one of the real caregiving photos. */
const SERVICE_IMAGE: Record<string, string> = {
  "supportive-home-care": IMAGES.help,
  "enhanced-care-services": IMAGES.elderNursing,
  "specialized-medical-care": IMAGES.nursingCareers,
};

export function ServiceCard({
  service,
  contactHref = "#contact",
}: {
  service: Service;
  contactHref?: string;
}) {
  const photo = SERVICE_IMAGE[service.slug] ?? IMAGES.help;

  return (
    <div className="group flex flex-col border border-border bg-card transition duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
        <Image
          src={cldWarm(photo)}
          alt={`${service.name} at Tuza Health`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          placeholder="blur"
          blurDataURL={cldBlur(photo)}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
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
