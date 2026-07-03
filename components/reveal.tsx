"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealTag = "div" | "section" | "li" | "article";

/**
 * Fades + lifts its children into view once, when scrolled near the viewport.
 * Motion is CSS-driven and gated behind `prefers-reduced-motion` (see the
 * `.reveal` rules in globals.css), so reduced-motion users always see static,
 * fully-visible content — even before this effect runs.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** Stagger, in ms, applied via the --reveal-delay custom property. */
  delay?: number;
  as?: RevealTag;
}) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      data-revealed={revealed ? "true" : "false"}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
