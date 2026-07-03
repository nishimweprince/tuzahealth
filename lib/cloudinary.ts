/**
 * Cloudinary image sources and URL helpers.
 *
 * The four production photos live in one Cloudinary folder. Keep the raw URLs
 * here (single source of truth) and use `cldImage` to inject delivery
 * transforms — format/quality auto, an optional warmth bump — into the
 * `/image/upload/` segment. `next/image` still resizes and serves a responsive
 * srcset on top of whatever source we hand it.
 */

export const IMAGES = {
  /** Wide caregiving scene — hero and warm editorial slots. */
  hero: "https://res.cloudinary.com/nishimweprince/image/upload/v1782863013/timesheets/website/caregiving-hero_gj58wh.jpg",
  /** Nurse supporting an older adult at home. */
  elderNursing:
    "https://res.cloudinary.com/nishimweprince/image/upload/v1782865476/timesheets/website/elder-nursing_inrsx0.jpg",
  /** Hands-on companionship / everyday support. */
  help: "https://res.cloudinary.com/nishimweprince/image/upload/v1782865397/timesheets/website/help-1_zuxzvj.jpg",
  /** Clinical / nursing careers. */
  nursingCareers:
    "https://res.cloudinary.com/nishimweprince/image/upload/v1782865521/timesheets/website/nursing-careers_hurq18.jpg",
} as const;

const UPLOAD_SEGMENT = "/image/upload/";

/**
 * Insert Cloudinary transforms right after `/image/upload/`.
 * Returns the URL unchanged if it isn't a Cloudinary upload URL.
 */
export function cldImage(url: string, transforms?: string): string {
  if (!transforms) return url;
  const at = url.indexOf(UPLOAD_SEGMENT);
  if (at === -1) return url;
  const cut = at + UPLOAD_SEGMENT.length;
  return `${url.slice(0, cut)}${transforms}/${url.slice(cut)}`;
}

/** Format + quality auto, with a gentle saturation lift so photos read warm, not muted. */
export function cldWarm(url: string): string {
  return cldImage(url, "f_auto,q_auto,e_saturation:18");
}

/** Tiny, heavily blurred variant for use as a `placeholder="blur"` blurDataURL. */
export function cldBlur(url: string): string {
  return cldImage(url, "f_auto,q_auto:low,e_blur:1200,w_32");
}
