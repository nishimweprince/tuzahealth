import type { Metadata } from "next";

/** Canonical production origin — used for metadataBase, canonical URLs and sitemap. */
export const SITE_URL = "https://tuzahealth.nishimweprince.dev";
export const SITE_NAME = "Tuza Health";

/** Shared link-preview image (square brand logo). */
export const OG_IMAGE = {
  url: "https://res.cloudinary.com/nishimweprince/image/upload/v1783103236/timesheets/website/logo_h8abdb.png",
  width: 115,
  height: 115,
  alt: "Tuza Health, LLC logo",
  type: "image/png",
} as const;

export const TITLE_DEFAULT = "Tuza Health, LLC | Home-Based Support in Johnson County, KS";
export const DESCRIPTION_DEFAULT =
  "Tuza Health, LLC provides home-based support in Johnson County, Kansas — Supportive Home Care, Enhanced Care Services, and Specialized Medical Care. Accepting new referrals. NPI 1376248864.";

/**
 * Build per-page metadata with matching Open Graph + Twitter previews and a
 * canonical URL. Pass the plain page title (e.g. "About") — the root layout's
 * title template renders the browser tab as "About | Tuza Health", while the
 * social preview uses the full "About | Tuza Health" string built here.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: `/${string}`;
}): Metadata {
  const ogTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: ogTitle,
      description,
      url,
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary",
      title: ogTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
