"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { COMPANY } from "@/lib/site-data";
import { ShieldCheck } from "lucide-react";

/**
 * Signature aesthetic element per frontend-design and plan.
 * Flat, boxy "Source of truth" verification strip using Lyra sharp geometry (rounded-none),
 * Sky semantic tokens, explicit last-reviewed date, NPI and county status.
 * Encodes trust/credibility structurally — not decorative.
 * Appears consistently to ground every page in verified public records.
 */
export function VerificationStrip() {
  return (
    <div
      className="border-y bg-muted/30"
      role="region"
      aria-label="Verification and compliance summary"
    >
      <div className="mx-auto max-w-5xl px-6 py-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldCheck className="size-4" />
              <span>Source of truth</span>
            </div>
            <Separator orientation="vertical" className="hidden h-4 sm:block" />
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="rounded-none border-foreground/20 font-mono text-xs tracking-[0.5px]">
                NPI {COMPANY.npi}
              </Badge>
              <Badge variant="outline" className="rounded-none border-foreground/20 text-xs">
                {COMPANY.serviceArea}
              </Badge>
              <Badge variant="secondary" className="rounded-none text-xs">
                {COMPANY.referralStatus}
              </Badge>
            </div>
          </div>
          <div className="text-xs text-muted-foreground font-mono tracking-wide">
            Last reviewed: {COMPANY.lastReviewed} • Public records
          </div>
        </div>
      </div>
    </div>
  );
}
