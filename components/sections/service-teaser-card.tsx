"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Service } from "@/lib/site-data";

/**
 * Rule-encoded service teaser card.
 * - Full Card composition (Header + Title + Description + Content)
 * - className used for layout only on Card subs (no typography size/leading overrides)
 * - ul uses flex + gap (no space-y)
 * - Follows fixed patterns from services + shadcn rules.
 */
export function ServiceTeaserCard({ service }: { service: Service }) {
  return (
    <Card className="rounded-none border-border/70 flex flex-col">
      <CardHeader>
        <CardTitle>{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="mb-4">
          {service.summary}
        </CardDescription>

        <ul className="mt-auto flex flex-col gap-1.5 text-sm text-muted-foreground">
          {service.examples.map((ex, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 size-3.5 shrink-0 text-primary" />
              <span>{ex}</span>
            </li>
          ))}
        </ul>

        <Button asChild variant="outline" className="mt-6 w-full rounded-none">
          <Link href="/services">Learn more <ArrowRight data-icon="inline-end" /></Link>
        </Button>
      </CardContent>
    </Card>
  );
}
