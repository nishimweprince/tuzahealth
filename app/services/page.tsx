import type { Metadata } from "next";
import Link from "next/link";

import { ServiceCard } from "@/components/sections/service-card";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { SERVICES, COPY, CTA } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Three levels of home-based support from Tuza Health — Supportive Home Care, Enhanced Care, and Specialised Medical Care — matched to each person's needs in Johnson County, KS.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div>
      <div className="page-container py-14 md:py-20">
        <SectionHeader
          eyebrow="Services"
          title="Services designed around life at home"
          description={COPY.servicesOverview}
        />
      </div>

      <div className="border-t border-border bg-card">
        <div className="page-container py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} contactHref="/contact" />
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-body max-w-xl">
              Ready to explore the right fit? We help families and referral sources understand options clearly.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">{CTA.primary}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}