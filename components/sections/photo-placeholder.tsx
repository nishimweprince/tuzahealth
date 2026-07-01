import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

export function PhotoPlaceholder({
  label,
  className,
  aspect,
  style,
}: {
  label: string;
  className?: string;
  /** Optional aspect ratio, e.g. "16/9" or "4/5". Omit to size via className. */
  aspect?: string;
  style?: CSSProperties;
}) {
  const lines = label.split("\n");

  return (
    <div
      className={cn("photo-placeholder", className)}
      style={aspect ? { aspectRatio: aspect, ...style } : style}
    >
      <span className="photo-placeholder-label">
        {lines.map((line, i) => (
          <span key={i} className={i > 0 ? "block" : undefined}>
            {line}
          </span>
        ))}
      </span>
    </div>
  );
}
