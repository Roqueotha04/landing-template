"use client";

import { m, useReducedMotion } from "framer-motion";
import type { Localized } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";

type HeadingTone = "default" | "onColor" | "onLight";

interface SectionHeadingProps {
  title: Localized;
  subtitle?: Localized;
  eyebrow?: Localized;
  tone?: HeadingTone;
  align?: "left" | "center";
  /** "underline" adds an animated gold rule under the title, for the section
   *  that needs to pull the eye. Gold stays decorative — as text it fails
   *  contrast on the warm paper surfaces. */
  titleVariant?: "default" | "underline";
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
  titleVariant = "default",
}: SectionHeadingProps) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
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
      {titleVariant === "underline" ? (
        <h2
          className={`relative mb-3 inline-block font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ${styles.title}`}
        >
          {t(title)}
          <m.span
            aria-hidden
            className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-linear-to-r from-secondary via-primary to-primary-deep"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          />
        </h2>
      ) : (
        <h2
          className={`font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${styles.title}`}
        >
          {t(title)}
        </h2>
      )}
      {subtitle &&
        (titleVariant === "underline" ? (
          <p className="mt-5 font-heading text-xl font-medium italic text-primary-deep md:text-2xl">
            {t(subtitle)}
          </p>
        ) : (
          <p className={`mt-4 max-w-xl text-base md:text-lg ${styles.subtitle}`}>{t(subtitle)}</p>
        ))}
    </div>
  );
}
