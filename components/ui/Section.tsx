import type { ReactNode } from "react";
import type { SectionId } from "@/config/site.types";

interface SectionProps {
  id: SectionId;
  className?: string;
  children: ReactNode;
  stacked?: boolean;
  wide?: boolean;
  topDivider?: ReactNode;
}

export function Section({
  id,
  className = "",
  children,
  stacked = false,
  wide = false,
  topDivider,
}: SectionProps) {
  const shape = stacked
    ? "-mt-8 rounded-t-[2.5rem] pb-16 pt-20 shadow-[0_-10px_30px_-18px_rgba(0,0,0,0.25)] md:-mt-10 md:pb-24 md:pt-28"
    : "py-16 md:py-28";

  return (
    <section id={id} className={`relative scroll-mt-16 ${shape} ${className}`}>
      {topDivider}
      <div
        className={`mx-auto w-full px-6 md:px-8 ${wide ? "max-w-7xl" : "max-w-6xl"}`}
      >
        {children}
      </div>
    </section>
  );
}
