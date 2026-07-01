import { COMPANY, COPY, SERVICES } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-navy pt-14 pb-8">
      <div className="page-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          <div>
            <div className="font-serif text-xl font-bold text-white mb-3">
              {COMPANY.legalName}
            </div>
            <p className="text-[13.5px] text-footer-muted max-w-[260px]">
              {COPY.footerTagline}
            </p>
          </div>

          <div>
            <div className="text-[12.5px] font-semibold uppercase tracking-[0.04em] text-footer-label mb-3.5">
              Services
            </div>
            <div className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <a
                  key={s.slug}
                  href="#services"
                  className="text-sm text-trust-text no-underline hover:text-white"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[12.5px] font-semibold uppercase tracking-[0.04em] text-footer-label mb-3.5">
              Company
            </div>
            <div className="flex flex-col gap-2">
              <a href="#compliance" className="text-sm text-trust-text no-underline hover:text-white">
                Compliance &amp; Licensing
              </a>
              <a href="#careers" className="text-sm text-trust-text no-underline hover:text-white">
                Careers
              </a>
              <a href="#faqs" className="text-sm text-trust-text no-underline hover:text-white">
                FAQs
              </a>
            </div>
          </div>

          <div>
            <div className="text-[12.5px] font-semibold uppercase tracking-[0.04em] text-footer-label mb-3.5">
              Contact
            </div>
            <div className="flex flex-col gap-2 text-sm text-trust-text">
              <a href={`tel:${COMPANY.phoneHref}`} className="no-underline hover:text-white">
                {COMPANY.phone}
              </a>
              <span>
                {COMPANY.addressShort}
                <br />
                {COMPANY.addressCity}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1c3a4f] pt-[22px] flex flex-col gap-3 text-xs text-footer-muted md:flex-row md:items-center md:justify-between">
          <div>© 2026 {COMPANY.legalName}. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Notice of Privacy Practices</span>
            <span aria-hidden>·</span>
            <span>Accessibility Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}