import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Tuza Health about home-based care or referrals in Johnson County, Kansas. We aim to respond to routine enquiries within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactSection />;
}