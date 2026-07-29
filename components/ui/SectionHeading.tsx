"use client";

import type { Localized } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";

type HeadingTone = "default" | "onColor" | "onLight";

interface SectionHeadingProps {
  title: Localized;
  subtitle?: Localized;
  eyebrow?: Localized;
  tone?: HeadingTone;
  align?: "left" | "center";
}

const toneClasses: Record<HeadingTone, { title: string; subtitle: string; eyebrow: string }> = {
  default: {
    title: "text-primary",
    subtitle: "text-foreground/75",
    eyebrow: "bg-primary/10 text-primary",
  },
  onColor: {
    title: "text-white",
    subtitle: "text-white/80",
    eyebrow: "bg-white/20 text-white",
  },
  onLight: {
    title: "text-ink",
    subtitle: "text-ink-muted",
    eyebrow: "bg-primary/20 text-primary-deep",
  },
};

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  tone = "default",
  align = "left",
}: SectionHeadingProps) {
  const { t } = useLanguage();
  const styles = toneClasses[tone];

  return (
    <div className={align === "center" ? "flex flex-col items-center text-center" : ""}>
      {eyebrow && (
        <span
          className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${styles.eyebrow}`}
        >
          {t(eyebrow)}
        </span>
      )}
      <h2
        className={`font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${styles.title}`}
      >
        {t(title)}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-xl text-base md:text-lg ${styles.subtitle}`}>{t(subtitle)}</p>
      )}
    </div>
  );
}
