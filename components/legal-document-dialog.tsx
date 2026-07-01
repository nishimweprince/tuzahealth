"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { LegalDocument } from "@/lib/site-data";

type LegalDocumentDialogProps = {
  document: LegalDocument;
  triggerLabel: string;
  triggerClassName?: string;
};

export function LegalDocumentDialog({
  document,
  triggerLabel,
  triggerClassName,
}: LegalDocumentDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "cursor-pointer border-0 bg-transparent p-0 text-inherit underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            triggerClassName,
          )}
        >
          {triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-md sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">{document.title}</DialogTitle>
          <DialogDescription>Last reviewed {document.lastReviewed}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-5 pr-1">
          {document.callout ? (
            <Alert className="rounded-md border-border">
              <AlertTitle className="text-sm font-semibold">Important</AlertTitle>
              <AlertDescription className="text-sm text-body-muted">
                {document.callout}
              </AlertDescription>
            </Alert>
          ) : null}

          {document.sections.map((section, index) => (
            <section key={section.heading ?? `section-${index}`} className="flex flex-col gap-2">
              {section.heading ? (
                <h3 className="text-sm font-semibold text-foreground">{section.heading}</h3>
              ) : null}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={`${section.heading ?? index}-p-${paragraphIndex}`}
                  className="type-body text-[15px] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}