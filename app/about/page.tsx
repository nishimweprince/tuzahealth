import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";
import { SectionHeader } from "@/components/sections/section-header";
import { COPY, COMPANY } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <div className="page-container py-14 md:py-20">
      <SectionHeader
        eyebrow="About Tuza Health"
        title="Care that puts dignity and clear communication first"
        description={COPY.aboutIntro}
        className="max-w-3xl mb-12"
      />

      <div className="grid items-start gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        <PhotoPlaceholder
          label={"PHOTO PLACEHOLDER\noffice exterior, Overland Park"}
          className="min-h-[220px] md:min-h-[300px]"
        />

        <div className="flex flex-col gap-6">
          <p className="type-body">{COPY.aboutApproach}</p>

          <div className="flex flex-col gap-5 text-sm">
            <div>
              <div className="font-medium text-foreground">Person-centred, plain language</div>
              <p className="text-body-muted mt-1">
                We explain services and pathways clearly so families can make confident decisions without guesswork.
              </p>
            </div>
            <div>
              <div className="font-medium text-foreground">Local focus, verified participation</div>
              <p className="text-body-muted mt-1">
                {COMPANY.legalName} appears on official Johnson County CDDO provider lists for the three services we deliver.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <Card>
          <CardHeader>
            <CardTitle>Public identifiers</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <div className="text-label-muted text-xs uppercase tracking-wide">Legal name</div>
              <div className="font-medium">{COMPANY.legalName}</div>
            </div>
            <div>
              <div className="text-label-muted text-xs uppercase tracking-wide">NPI</div>
              <div className="font-mono font-medium">{COMPANY.npi}</div>
            </div>
            <div>
              <div className="text-label-muted text-xs uppercase tracking-wide">Service area</div>
              <div className="font-medium">{COMPANY.serviceArea}</div>
            </div>
            <div>
              <div className="text-label-muted text-xs uppercase tracking-wide">Referral status</div>
              <div className="font-medium">{COMPANY.referralStatus}</div>
            </div>
            <div className="sm:col-span-2 pt-2 text-xs text-label-muted border-t">
              Last reviewed {COMPANY.lastReviewed}. Confirm current details directly.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}