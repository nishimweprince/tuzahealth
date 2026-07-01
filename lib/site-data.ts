/**
 * Canonical site data for Tuza Health, LLC
 * Landing-page copy aligned with standalone reference HTML.
 */

export const COMPANY = {
  legalName: "Tuza Health, LLC",
  npi: "1376248864",
  taxonomy: "251E00000X · Home Health",
  taxonomyShort: "251E00000X Home Health",
  serviceArea: "Johnson County, Kansas",
  serviceAreaShort: "Johnson County, KS",
  yearsDocumented: "since 2023",
  referralStatus: "Accepting new referrals",
  lastReviewed: "June 30, 2026",
  lastReviewedIso: "2026-06-30",
  phone: "913-562-4326",
  phoneHref: "9135624326",
  address: "7500 College Boulevard, Suite 560",
  addressCity: "Overland Park, KS 66210",
  addressShort: "7500 College Blvd, Suite 560",
  officeLabel: "Overland Park, KS office",
} as const;

export const SERVICES = [
  {
    slug: "supportive-home-care",
    name: "Supportive Home Care",
    summary:
      "One-to-one assistance with everyday living, independence-building and participation in home or community life.",
    details:
      "One-to-one assistance with daily living and adaptive skills. Helps individuals participate in home or community activities with dignity and support.",
    examples: [
      "Daily living & adaptive skills",
      "Community participation",
      "Independence-building routines",
    ],
    contactValue: "supportive",
  },
  {
    slug: "enhanced-care-services",
    name: "Enhanced Care",
    summary:
      "Closer supervision or physical assistance with personal tasks for individuals who need more hands-on support.",
    details:
      "Supervision or physical assistance with tasks such as toileting, transferring, mobility and medication reminders.",
    examples: [
      "Transferring & mobility support",
      "Toileting assistance",
      "Medication reminders",
    ],
    contactValue: "enhanced",
  },
  {
    slug: "specialized-medical-care",
    name: "Specialised Medical Care",
    summary:
      "Longer-term nursing support delivered by appropriately qualified clinical staff for medically fragile individuals.",
    details:
      "Long-term RN/LPN support for medically fragile and technology-dependent people.",
    examples: [
      "RN / LPN support",
      "Technology-dependent care",
      "Long-term clinical monitoring",
    ],
    contactValue: "medical",
  },
] as const;

export const CTA = {
  primary: "Speak with our care team",
  secondary: "View services",
  contact: "Request a call back",
  compliance: "View licensing details",
  careers: "Apply for a role",
  serviceDiscuss: "Discuss your needs",
} as const;

export const COPY = {
  heroHeadline: "Support at home, delivered with dignity",
  heroSub:
    "Tuza Health, LLC provides home-based support designed to help individuals and families feel safer, more confident and better supported day to day — right here in Johnson County, Kansas.",
  heroBadge: "Now accepting new referrals",
  heroChipNpi: "NPI 1376248864 · Home Health",
  heroChipCounty: "Johnson County CDDO–listed provider",
  heroChipArea: "Serving Johnson County, KS",
  trustStrip: [
    "Documented public operation since 2023",
    "Accepting new referrals",
    "Supportive · Enhanced · Specialised Medical Care",
    "Overland Park, KS office",
  ] as const,
  servicesIntro:
    "Every care situation is different. Use the summaries below to identify the level of support that best fits your situation, then reach out and we will help confirm the right fit.",
  servicesOverview:
    "Every care situation is different. Some people need one-to-one support with daily routines and community participation. Others need closer supervision or hands-on assistance. Some require longer-term nursing support because they are medically fragile or technology dependent. Our services page helps you identify the level of support that best fits your situation.",
  fundingNote: "Funding/eligibility may apply — we'll walk you through it.",
  aboutHeadline: "Care that puts dignity and clear communication first",
  aboutIntro:
    "Tuza Health is focused on delivering person-centred support in the home, with an emphasis on dignity, safety and practical day-to-day care. We believe home-based care works best when families can reach a real person, understand what to expect, and trust the team supporting them.",
  aboutApproach:
    "Our approach combines compassionate support with clear communication — listening carefully, explaining services in plain language, and helping families understand the pathway into care from the very first conversation.",
  complianceHeadline: "Clear information, plainly verified",
  complianceIntro:
    "This section brings together the public information families and referral partners most often need: our legal business name, verified contact details, service area, provider identifiers and key policies.",
  complianceNote:
    "If any detail below changes, we update it promptly and show the latest review date so families and partners can rely on the information published here.",
  licenceStatus: "Verification in progress",
  privacyOnRequest:
    "Notice of Privacy Practices and licensing documents available on request — call our office directly.",
  faqTitle: "Common questions from families",
  careersHeadline: "Join a team built around dependable, local care",
  careersBody:
    "We're growing our caregiving and clinical staff across Johnson County. Reach out to learn about current openings.",
  contactIntro:
    "If you are exploring care for yourself, a family member or someone you support professionally, please get in touch. We will help you understand the next step, the information we need, and whether our services are the right fit.",
  responseNote:
    "We aim to respond to all routine enquiries within one working day. Prefer to speak today? Call us directly.",
  nonPhiWarning:
    "Please do not include sensitive medical or insurance information in this web form. If you need to discuss private health details, call us and we will guide you to the right next step.",
  formConsent: "I consent to Tuza Health contacting me about this enquiry.",
  formPlaceholder: "Tell us a little about the support you are looking for.",
  formSuccess:
    "Thank you. We have received your enquiry and will be in touch shortly.",
  formError:
    "We could not send your enquiry just now. Please try again or call us directly.",
  footerTagline:
    "Home-based supportive, enhanced and specialised medical care in Johnson County, Kansas.",
} as const;

export const NAV_LINKS = [
  { label: "Services", homeHref: "#services", href: "/services" },
  { label: "Compliance", homeHref: "#compliance", href: "/compliance" },
  { label: "FAQs", homeHref: "#faqs", href: "/#faqs" },
  { label: "Careers", homeHref: "#careers", href: "/#careers" },
  { label: "Contact", homeHref: "#contact", href: "/contact" },
] as const;

export const CONTACT_REASONS = [
  { value: "supportive", label: "Supportive Home Care" },
  { value: "enhanced", label: "Enhanced Care" },
  { value: "medical", label: "Specialised Medical Care" },
  { value: "careers", label: "Careers / employment" },
  { value: "referral", label: "Professional referral" },
  { value: "other", label: "Other" },
] as const;

export type Service = (typeof SERVICES)[number];

export const FAQS = [
  {
    question: "Is funding or referral approval required for your services?",
    answer:
      "Some services may require approved funding or a referral, depending on the type of support and your situation. We will walk you through what is needed for your circumstances during your first conversation with us.",
  },
  {
    question: "What areas do you currently serve?",
    answer:
      "We are currently listed as a provider serving Johnson County, Kansas. If you are located outside this area, please contact us and we can let you know whether we are able to help.",
  },
  {
    question: "What should I expect from a first visit?",
    answer:
      "A first visit typically starts with understanding your needs, discussing the right service level, and answering any questions about scheduling, staffing and what day-to-day support will look like.",
  },
  {
    question: "How quickly will someone respond to my enquiry?",
    answer:
      "We aim to respond to all routine enquiries within one working day. If your need is urgent, please call our office directly.",
  },
  {
    question: "How is my information kept private?",
    answer:
      "We take privacy seriously. Please avoid including detailed medical information in our general web form; call us if you need to discuss private health details, and ask about our Notice of Privacy Practices.",
  },
  {
    question: "Are you currently hiring caregivers or clinical staff?",
    answer:
      'We are growing our team across Johnson County. Use the contact form and select "Careers / employment" to let us know about your interest and experience.',
  },
] as const;

export type FAQ = (typeof FAQS)[number];

export type LegalDocumentSection = {
  heading?: string;
  paragraphs: readonly string[];
};

export type LegalDocument = {
  title: string;
  lastReviewed: string;
  callout?: string;
  sections: readonly LegalDocumentSection[];
};

export const NOTICE_OF_PRIVACY_PRACTICES: LegalDocument = {
  title: "Notice of Privacy Practices",
  lastReviewed: COMPANY.lastReviewed,
  callout: `A complete Notice of Privacy Practices is available on request. Call our office at ${COMPANY.phone} to receive a copy or to discuss how we protect your information.`,
  sections: [
    {
      paragraphs: [
        `This notice describes how medical information about you may be used and disclosed by ${COMPANY.legalName} and how you can get access to this information. We are required by law to maintain the privacy of protected health information (PHI) and to provide you with this notice of our legal duties and privacy practices.`,
        "This is a summary notice for our website. It is not a substitute for the full Notice of Privacy Practices that we provide to clients and families.",
      ],
    },
    {
      heading: "Who this notice applies to",
      paragraphs: [
        `${COMPANY.legalName} provides home-based supportive, enhanced and specialised medical care in ${COMPANY.serviceArea}. This notice applies to PHI we create or receive in connection with those services.`,
      ],
    },
    {
      heading: "How we may use and disclose your information",
      paragraphs: [
        "We may use and disclose PHI for treatment, payment and health care operations, such as coordinating care, managing schedules, quality review and required reporting.",
        "We may also use or disclose PHI when required by law, for public health activities, to prevent serious threats to health or safety, or when otherwise permitted or required under applicable privacy rules.",
        "We will not use or sell your information for unrelated marketing without your authorisation.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "You have the right to request restrictions on certain uses and disclosures, although we are not always required to agree to a requested restriction.",
        "You have the right to request confidential communications by alternative means or at alternative locations.",
        "You have the right to inspect and obtain a copy of PHI that we maintain about you, subject to limited exceptions.",
        "You have the right to request an amendment to PHI we maintain, and to receive an accounting of certain disclosures.",
        "You have the right to receive a paper copy of our full Notice of Privacy Practices upon request.",
      ],
    },
    {
      heading: "Our responsibilities",
      paragraphs: [
        "We are required by law to maintain the privacy of PHI, provide you with this notice, and follow the terms of the notice currently in effect.",
        "We reserve the right to change our privacy practices and to make the new terms effective for all PHI we maintain. Updated notices will be available on request and, where required, posted in our office.",
      ],
    },
    {
      heading: "Questions, complaints and contact",
      paragraphs: [
        `If you have questions about this notice or our privacy practices, contact ${COMPANY.legalName} at ${COMPANY.phone} or ${COMPANY.address}, ${COMPANY.addressCity}.`,
        "If you believe your privacy rights have been violated, you may file a complaint with us or with the U.S. Department of Health and Human Services, Office for Civil Rights. We will not retaliate against you for filing a complaint.",
      ],
    },
    {
      heading: "Using this website",
      paragraphs: [
        "Our general website contact form is not designed for submitting detailed medical or insurance information. Please do not include protected health information in web enquiries. Call us if you need to discuss private health details.",
      ],
    },
  ],
};

export const ACCESSIBILITY_STATEMENT: LegalDocument = {
  title: "Accessibility Statement",
  lastReviewed: COMPANY.lastReviewed,
  sections: [
    {
      paragraphs: [
        `${COMPANY.legalName} is committed to making our website reasonably accessible to people with disabilities. We aim to conform, where practicable, to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.`,
        "Accessibility is an ongoing effort. We review this site periodically and improve pages, components and content based on feedback and recognised best practices.",
      ],
    },
    {
      heading: "Measures we take",
      paragraphs: [
        "We use semantic HTML structure, descriptive headings and labels, and visible keyboard focus styles across interactive elements.",
        "We design for readable contrast, scalable text and layouts that adapt to different screen sizes.",
        "Where animations or motion are used, we respect the prefers-reduced-motion setting in supporting browsers.",
        "We aim to ensure forms, navigation and disclosure patterns such as accordions and dialogs can be operated with a keyboard.",
      ],
    },
    {
      heading: "Known limitations",
      paragraphs: [
        "Some third-party content, older documents or downloadable resources may not yet meet every accessibility requirement.",
        "We are working to improve alternative text, document accessibility and consistency across all pages as the site evolves.",
      ],
    },
    {
      heading: "Feedback and assistance",
      paragraphs: [
        `If you have difficulty accessing any part of this website, or if you need information in an alternative format, please contact us at ${COMPANY.phone} or through our contact page.`,
        `Postal address: ${COMPANY.address}, ${COMPANY.addressCity}.`,
        "When you contact us, please describe the page or feature you tried to use and the difficulty you experienced so we can assist you and improve the site.",
      ],
    },
  ],
};