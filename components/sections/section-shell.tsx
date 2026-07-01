import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionShell({
  children,
  className,
  id,
  band = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  band?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(band && "border-y border-border bg-card", className)}
    >
      {children}
    </section>
  );
}