"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";

/**
 * Rule-encoded consent checkbox for contact form.
 * - Horizontal Field + Checkbox + FieldContent (never raw <div> for label/desc)
 * - Real errors state passed in; data-invalid / aria-invalid wired.
 * - Uses the fixed pattern only.
 */
export function ConsentCheckboxField({
  checked,
  onCheckedChange,
  error,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  error?: string;
}) {
  const invalid = !!error;

  return (
    <Field orientation="horizontal" className="items-start pt-1" data-invalid={invalid}>
      <Checkbox
        id="consent"
        checked={checked}
        onCheckedChange={(c) => onCheckedChange(!!c)}
        className="mt-1 rounded-none"
        aria-invalid={invalid}
      />
      <FieldContent>
        <FieldLabel htmlFor="consent" className="font-normal text-sm cursor-pointer">
          I confirm this message does not contain personal health information or insurance details.
        </FieldLabel>
        <FieldDescription>We are not able to process PHI through this form.</FieldDescription>
        {error && <FieldDescription className="text-destructive">{error}</FieldDescription>}
      </FieldContent>
    </Field>
  );
}
