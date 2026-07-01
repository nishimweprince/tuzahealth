"use client";

import { LegalDocumentDialog } from "@/components/legal-document-dialog";
import {
  ACCESSIBILITY_STATEMENT,
  NOTICE_OF_PRIVACY_PRACTICES,
} from "@/lib/site-data";

const triggerClassName = "text-footer-muted hover:text-white";

export function FooterLegalLinks() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1">
      <LegalDocumentDialog
        document={NOTICE_OF_PRIVACY_PRACTICES}
        triggerLabel="Notice of Privacy Practices"
        triggerClassName={triggerClassName}
      />
      <span aria-hidden>·</span>
      <LegalDocumentDialog
        document={ACCESSIBILITY_STATEMENT}
        triggerLabel="Accessibility Statement"
        triggerClassName={triggerClassName}
      />
    </div>
  );
}