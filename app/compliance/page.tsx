import type { Metadata } from "next";
import Link from "next/link";

import { ComplianceGrid } from "@/components/sections/compliance-grid";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { COPY } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Compliance & Licensing",
  description:
    "Tuza Health's public identifiers, licensing status, service area and privacy policies — clearly published and dated for families and referral partners. NPI 1376248864.",
  path: "/compliance",
});

export default function CompliancePage() {
  return (
    <div className="page-container py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14 items-start">
        <div>
          <SectionHeader
            eyebrow="Compliance & Licensing"
            title={COPY.complianceHeadline}
            description={COPY.complianceIntro}
          />
          <p className="text-[14.5px] text-label-muted mt-4">{COPY.complianceNote}</p>
        </div>

        <ComplianceGrid />
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <Link href="/contact">Contact us to confirm details</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </div>
  );
}