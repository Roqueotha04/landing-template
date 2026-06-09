"use client";

import type { Localized } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";

interface SectionHeadingProps {
  title: Localized;
  subtitle?: Localized;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { t } = useLanguage();

  return (
    <>
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {t(title)}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-foreground/70">{t(subtitle)}</p>}
    </>
  );
}
