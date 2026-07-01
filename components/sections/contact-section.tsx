"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { COMPANY, CONTACT_REASONS, COPY } from "@/lib/site-data";

interface FormData {
  name: string;
  phone: string;
  email: string;
  reason: string;
  message: string;
  consent: boolean;
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<{ consent?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!formData.consent) {
      setErrors({ consent: "Please confirm your consent to be contacted." });
      return;
    }
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 650));
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", reason: "", message: "", consent: false });
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="page-container pb-[90px] pt-6">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="section-eyebrow">Contact</div>
          <h2 className="font-serif text-[32px] font-semibold text-foreground mb-[18px]">
            Contact our care team
          </h2>
          <p className="text-base text-body-muted mb-[26px]">{COPY.contactIntro}</p>

          <div className="flex flex-col gap-4 mb-[26px]">
            <div>
              <div className="text-xs text-label-muted uppercase tracking-[0.04em] mb-1">
                Phone
              </div>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="text-base font-semibold text-foreground no-underline hover:underline"
              >
                {COMPANY.phone}
              </a>
            </div>
            <div>
              <div className="text-xs text-label-muted uppercase tracking-[0.04em] mb-1">
                Office
              </div>
              <div className="text-base font-semibold text-foreground">
                {COMPANY.address}
                <br />
                {COMPANY.addressCity}
              </div>
            </div>
          </div>

          <p className="text-[13.5px] text-label-muted">{COPY.responseNote}</p>
        </div>

        <div className="border border-border bg-card p-9">
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center size-8 text-primary mb-3.5">
                <Check className="size-8" strokeWidth={2} />
              </div>
              <p className="text-base font-semibold text-foreground">{COPY.formSuccess}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-0">
              <div className="bg-warning-bg border border-warning-border px-3.5 py-3 text-[13px] text-warning-text mb-[22px]">
                {COPY.nonPhiWarning}
              </div>

              <FieldGroup>
                <div className="grid gap-4 sm:grid-cols-2 mb-4">
                  <Field>
                    <FieldLabel htmlFor="contact-name">Name</FieldLabel>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="contact-phone">Phone</FieldLabel>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </Field>
                </div>

                <Field className="mb-4">
                  <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </Field>

                <Field className="mb-4">
                  <FieldLabel htmlFor="contact-reason">I am contacting you for</FieldLabel>
                  <Select
                    value={formData.reason}
                    onValueChange={(val) => setFormData({ ...formData, reason: val })}
                  >
                    <SelectTrigger id="contact-reason">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {CONTACT_REASONS.map((r) => (
                          <SelectItem key={r.value} value={r.value}>
                            {r.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>

                <Field className="mb-[18px]">
                  <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                    placeholder={COPY.formPlaceholder}
                    className="resize-y min-h-[100px]"
                  />
                </Field>

                <label className="flex items-start gap-2.5 mb-[22px] cursor-pointer">
                  <Checkbox
                    checked={formData.consent}
                    onCheckedChange={(c) => {
                      setFormData({ ...formData, consent: !!c });
                      if (c && errors.consent) setErrors({});
                    }}
                    required
                    className="mt-0.5"
                    aria-invalid={!!errors.consent}
                  />
                  <span className="text-[13.5px] text-body-muted">{COPY.formConsent}</span>
                </label>
                {errors.consent && (
                  <p className="text-sm text-destructive -mt-4 mb-4">{errors.consent}</p>
                )}
              </FieldGroup>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-auto py-3.5 text-[15.5px] font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send enquiry"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}