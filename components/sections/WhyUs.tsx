"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  animate,
  m,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import type { AnimationPlaybackControls } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

const { whyUs } = siteConfig;

/** Seconds a reason stays on screen before the carousel advances on its own. */
const ROTATE_S = 5;
/**
 * Horizontal swipe past this many pixels flips to the next/previous reason.
 * Done with pointer events instead of Motion's `drag`, which needs `domMax`
 * features — the app loads `domAnimation` to keep the bundle small.
 */
const SWIPE_THRESHOLD = 70;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
};

const staticVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

function CarouselArrow({
  label,
  direction,
  onClick,
  className = "",
}: {
  label: string;
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}) {
  const Icon = direction === "prev" ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`group flex h-12 w-8 shrink-0 items-center justify-center text-primary/45 transition-colors duration-300 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${className}`}
    >
      <Icon
        className={`h-7 w-7 transition-transform duration-300 ${
          direction === "prev"
            ? "group-hover:-translate-x-1"
            : "group-hover:translate-x-1"
        }`}
      />
    </button>
  );
}

export function WhyUs() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  /** 0 → 1 over one autoplay cycle; drives both the bar and the slide change. */
  const progress = useMotionValue(0);
  const playbackRef = useRef<AnimationPlaybackControls | null>(null);
  /** Kept in a ref so hovering never restarts the cycle, it only pauses it. */
  const pausedRef = useRef(false);
  const swipeStartRef = useRef<number | null>(null);

  const total = whyUs?.reasons.length ?? 0;
  const autoplay = !reduceMotion && total > 1;

  const goTo = useCallback(
    (next: number, dir: number) => {
      if (total === 0) return;
      setDirection(dir);
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (!autoplay) return;

    progress.set(0);
    const playback = animate(progress, 1, {
      duration: ROTATE_S,
      ease: "linear",
      onComplete: () => {
        setDirection(1);
        setIndex((current) => (current + 1) % total);
      },
    });
    playbackRef.current = playback;
    if (pausedRef.current) playback.pause();

    return () => playback.stop();
  }, [autoplay, index, total, progress]);

  function setPaused(paused: boolean) {
    pausedRef.current = paused;
    if (paused) playbackRef.current?.pause();
    else playbackRef.current?.play();
  }

  if (!whyUs) return null;

  const reason = whyUs.reasons[index];
  const bullets = reason.bullets ? t(reason.bullets) : [];

  function handleSwipeEnd(event: ReactPointerEvent) {
    const start = swipeStartRef.current;
    swipeStartRef.current = null;
    if (start === null) return;
    const offset = event.clientX - start;
    if (offset < -SWIPE_THRESHOLD) goTo(index + 1, 1);
    else if (offset > SWIPE_THRESHOLD) goTo(index - 1, -1);
  }

  return (
    <Section id="whyUs" stacked className="overflow-hidden bg-accent">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative">
        <SectionHeading
          eyebrow={whyUs.eyebrow}
          title={whyUs.title}
          subtitle={whyUs.subtitle}
        />

        <div className="mt-12 grid gap-14 md:mt-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center md:gap-16 md:pb-6">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="flex items-center gap-2 md:gap-5">
              <CarouselArrow
                label={t(ui.whyUs.prev)}
                direction="prev"
                onClick={() => goTo(index - 1, -1)}
                className="hidden md:flex"
              />

              <div
                className="relative h-152 w-full max-w-132 touch-pan-y overflow-hidden md:h-116"
                aria-live="polite"
                onPointerDown={(event) => {
                  swipeStartRef.current = event.clientX;
                }}
                onPointerUp={handleSwipeEnd}
                onPointerCancel={() => {
                  swipeStartRef.current = null;
                }}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-primary/25"
                />

                {/* Slides are absolutely stacked, so the default sync mode
                    crossfades them in place — no layout mode needed. */}
                <AnimatePresence initial={false} custom={direction}>
                  <m.article
                    key={index}
                    custom={direction}
                    variants={reduceMotion ? staticVariants : slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 34 },
                      opacity: { duration: 0.28, ease: "easeOut" },
                    }}
                    className="absolute inset-0 flex flex-col justify-center py-8 md:py-10"
                  >
                    <span className="font-heading text-xs font-bold tracking-[0.3em] text-primary/70">
                      {String(index + 1).padStart(2, "0")} ⁄{" "}
                      {String(total).padStart(2, "0")}
                    </span>

                    <h3 className="mt-5 font-heading text-2xl font-bold leading-tight text-primary md:text-3xl">
                      {t(reason.title)}
                    </h3>

                    <span aria-hidden className="mt-5 h-px w-12 bg-primary/50" />

                    {t(reason.body).map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="mt-5 max-w-prose text-base leading-relaxed text-foreground/70"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {reason.bulletsTitle && (
                      <p className="mt-5 text-base text-foreground/70">
                        {t(reason.bulletsTitle)}
                      </p>
                    )}

                    {bullets.length > 0 && (
                      <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.9375rem] text-foreground/70 sm:grid-cols-2">
                        {bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5">
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </m.article>
                </AnimatePresence>

                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px overflow-hidden bg-primary/25"
                >
                  {autoplay && (
                    <m.span
                      style={{ scaleX: progress }}
                      className="block h-full w-full origin-left bg-primary"
                    />
                  )}
                </div>
              </div>

              <CarouselArrow
                label={t(ui.whyUs.next)}
                direction="next"
                onClick={() => goTo(index + 1, 1)}
                className="hidden md:flex"
              />
            </div>

            <div className="mt-8 flex items-center justify-center gap-5 md:justify-start md:pl-13">
              <CarouselArrow
                label={t(ui.whyUs.prev)}
                direction="prev"
                onClick={() => goTo(index - 1, -1)}
                className="md:hidden"
              />

              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {whyUs.reasons.map((item, dot) => (
                  <button
                    key={item.title.es}
                    type="button"
                    onClick={() => goTo(dot, dot > index ? 1 : -1)}
                    aria-label={`${t(ui.whyUs.goTo)} ${dot + 1}`}
                    aria-current={dot === index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      dot === index ? "w-8 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/60"
                    }`}
                  />
                ))}
              </div>

              <CarouselArrow
                label={t(ui.whyUs.next)}
                direction="next"
                onClick={() => goTo(index + 1, 1)}
                className="md:hidden"
              />
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-64 md:max-w-xs">
              <span
                aria-hidden
                className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl"
              />
              {whyUs.image && (
                <Image
                  src={whyUs.image}
                  alt={siteConfig.business.name}
                  width={640}
                  height={640}
                  sizes="(max-width: 768px) 60vw, 20rem"
                  className="relative w-full rounded-2xl ring-1 ring-primary/25"
                />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
