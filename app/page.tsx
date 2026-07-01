import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CareersBand } from '@/components/sections/careers-band';
import { ComplianceGrid } from '@/components/sections/compliance-grid';
import { ContactSection } from '@/components/sections/contact-section';
import { SectionHeader } from '@/components/sections/section-header';
import { SectionShell } from '@/components/sections/section-shell';
import { CareLevels } from '@/components/sections/care-levels';
import { TrustStrip } from '@/components/sections/trust-strip';
import { COPY, CTA, COMPANY, FAQS } from '@/lib/site-data';
import Image from 'next/image';

const HERO_CREDENTIALS = [
  { label: 'NPI', value: COMPANY.npi },
  { label: 'Listing', value: 'Johnson County CDDO' },
  { label: 'Service area', value: COMPANY.serviceAreaShort },
] as const;

/** Swap for production hero: place image at `public/hero.jpg` and use next/image in the background layer below. */
const HERO_IMAGE_SRC =
  'https://res.cloudinary.com/nishimweprince/image/upload/v1782863013/timesheets/website/caregiving-hero_gj58wh.jpg';

const ABOUT_IMAGE_MAIN =
  'https://res.cloudinary.com/nishimweprince/image/upload/v1782865476/timesheets/website/elder-nursing_inrsx0.jpg';
const ABOUT_IMAGE_INSET =
  'https://res.cloudinary.com/nishimweprince/image/upload/v1782865397/timesheets/website/help-1_zuxzvj.jpg';

export default function HomePage() {
  return (
    <>
      <section id="top" className="hero-viewport w-full overflow-hidden">
        <div
          className="hero-layer hero-background"
          aria-hidden
          data-hero-image-src={HERO_IMAGE_SRC}
        >
          <Image
            src={HERO_IMAGE_SRC}
            alt="Caregiving Hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="hero-layer hero-overlay" aria-hidden />

        <div className="hero-layer hero-content page-container w-full pt-[var(--header-height)] pb-12 md:pb-20">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-[12px] md:text-[12.5px] font-semibold tracking-[0.04em] uppercase px-3 py-1.5 rounded mb-5 md:mb-[22px]">
              <span className="size-2 rounded-full bg-sky-muted" aria-hidden />
              {COPY.heroBadge}
            </div>

            <h1 className="type-hero mb-4 md:mb-[22px] text-white">{COPY.heroHeadline}</h1>

            <p className="text-base md:text-lg text-trust-text max-w-[540px] leading-relaxed md:leading-snug mb-7 md:mb-[30px]">
              {COPY.heroSub}
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-3.5 mb-8 md:mb-9">
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="inline-flex w-full sm:w-auto items-center justify-center bg-primary text-primary-foreground text-[15.5px] font-semibold px-[26px] py-3.5 rounded-md no-underline transition-colors hover:bg-primary/90"
              >
                {CTA.primary}
              </a>
              <a
                href="#services"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-transparent text-white text-[15.5px] font-semibold px-[26px] py-3.5 rounded-md border-[1.5px] border-white/70 no-underline transition-colors hover:bg-white/10"
              >
                {CTA.secondary}
              </a>
            </div>

            {/* A single verified-credential strip, not loose chips. */}
            <dl className="grid w-full max-w-sm grid-cols-1 divide-y divide-white/12 overflow-hidden rounded-md bg-white/10 ring-1 ring-white/15 sm:w-fit sm:max-w-full sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {HERO_CREDENTIALS.map((item) => (
                <div key={item.label} className="px-4 py-3 sm:px-5">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/60">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5 text-[14px] font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section id="services" className="page-container py-24 md:py-28">
        <SectionHeader
          eyebrow="Levels of care"
          title="Three levels of support, one standard of care"
          description={COPY.servicesIntro}
          className="mb-12"
        />

        <CareLevels />
      </section>

      <SectionShell band>
        <div className="page-container py-20 md:py-24 grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          {/* Two-image collage for depth: primary portrait + smaller overlapping tile. */}
          <div className="relative">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg">
              <Image
                src={ABOUT_IMAGE_MAIN}
                alt="Nurse supporting an older adult at home"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="About Tuza Health"
              title={COPY.aboutHeadline}
              description={COPY.aboutIntro}
              className="mb-4"
            />
            <p className="type-body">{COPY.aboutApproach}</p>
          </div>
        </div>
      </SectionShell>

      <section
        id="compliance"
        className="page-container py-20 md:py-24"
      >
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14 items-start">
          <div>
            <SectionHeader
              eyebrow="Compliance & Licensing"
              title={COPY.complianceHeadline}
              description={COPY.complianceIntro}
            />
            <p className="text-[14.5px] text-label-muted mt-4">
              {COPY.complianceNote}
            </p>
          </div>

          <ComplianceGrid />
        </div>
      </section>

      <SectionShell id="faqs" band>
        <div className="page-container py-16 md:py-20 max-w-[860px]">
          <SectionHeader
            eyebrow="FAQs"
            title={COPY.faqTitle}
            centered
            className="mb-11 mx-auto"
          />

          <Accordion type="single" collapsible>
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-[16.5px] py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] pb-5 pr-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionShell>

      <CareersBand />
      <ContactSection />
    </>
  );
}
