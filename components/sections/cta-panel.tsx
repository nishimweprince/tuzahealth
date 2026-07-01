"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Rule-encoded CTA / callout panel.
 * - Always full <Card><CardContent> composition (no raw border divs)
 * - Layout classes only.
 */
export function CtaPanel({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  footerNote,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  footerNote?: string;
}) {
  return (
    <Card className="rounded-none">
      <CardContent className="p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-3 text-muted-foreground max-w-prose">{description}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Button asChild size="lg" className="rounded-none w-full md:w-auto h-12 px-10">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            {secondaryHref && secondaryLabel && (
              <Button asChild variant="outline" className="rounded-none w-full md:w-auto">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            )}
            {footerNote && (
              <p className="text-xs text-muted-foreground md:text-right">{footerNote}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
