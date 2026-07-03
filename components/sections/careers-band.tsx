import Image from "next/image";

import { cldBlur, cldWarm, IMAGES } from "@/lib/cloudinary";
import { CTA, COPY } from "@/lib/site-data";

export function CareersBand() {
  return (
    <section id="careers" className="page-container py-[70px]">
      <div className="grid items-stretch gap-6 md:grid-cols-[1.5fr_1fr]">
        <div className="bg-navy px-[50px] py-12 flex flex-col justify-center gap-8">
          <div className="max-w-[560px]">
            <div className="section-eyebrow text-sky-muted mb-2.5">Careers</div>
            <h2 className="font-serif text-[27px] font-semibold text-white mb-3">
              {COPY.careersHeadline}
            </h2>
            <p className="text-[15.5px] text-trust-text">{COPY.careersBody}</p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit shrink-0 items-center justify-center bg-white text-navy text-[15px] font-semibold px-[26px] py-3.5 rounded hover:bg-white/90 no-underline whitespace-nowrap"
          >
            {CTA.careers}
          </a>
        </div>
        <div className="relative min-h-[220px] overflow-hidden rounded md:min-h-full">
          <Image
            src={cldWarm(IMAGES.nursingCareers)}
            alt="Nurse caring for a patient"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
            placeholder="blur"
            blurDataURL={cldBlur(IMAGES.nursingCareers)}
          />
        </div>
      </div>
    </section>
  );
}