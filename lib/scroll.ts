export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToId(id: string, { updateHash = true }: { updateHash?: boolean } = {}) {
  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });

  if (updateHash) {
    const hash = `#${id}`;
    if (window.location.hash !== hash) {
      history.pushState(null, "", hash);
    }
  }

  return true;
}

export function parseHash(href: string): string | null {
  if (!href.includes("#")) return null;
  const hash = href.startsWith("#") ? href : href.slice(href.indexOf("#"));
  const id = hash.slice(1);
  return id || null;
}