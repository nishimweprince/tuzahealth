"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { scrollToId } from "@/lib/scroll";

/**
 * Scrolls to the URL hash after client navigations (e.g. /about → /#faqs).
 * Respects prefers-reduced-motion via scrollToId.
 */
export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;

    const timer = window.setTimeout(() => {
      scrollToId(id, { updateHash: false });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}