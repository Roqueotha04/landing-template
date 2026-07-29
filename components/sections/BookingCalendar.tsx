"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { CalEmbed } from "@/components/ui/CalEmbed";
import { Reveal } from "@/components/ui/Reveal";

const { booking } = siteConfig;

export function BookingCalendar() {
  const { t } = useLanguage();

  if (!booking) return null;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12 md:px-8 md:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
      >
        <span aria-hidden>←</span>
        {t(ui.booking.back)}
      </Link>

      <Reveal className="mt-8 flex flex-col items-center text-center">
        {booking.eyebrow && (
          <span className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            {t(booking.eyebrow)}
          </span>
        )}

        <h1 className="font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
          {t(booking.pageTitle ?? booking.title)}
        </h1>

        {booking.subtitle && (
          <p className="mt-4 max-w-xl text-base text-foreground/75 md:text-lg">
            {t(booking.subtitle)}
          </p>
        )}

        {booking.perks && booking.perks.length > 0 && (
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {booking.perks.map((perk) => (
              <li
                key={perk.es}
                className="flex items-center gap-2 text-sm font-semibold text-foreground/70"
              >
                <span aria-hidden className="text-primary">
                  ✓
                </span>
                {t(perk)}
              </li>
            ))}
          </ul>
        )}
      </Reveal>

      <Reveal delay={0.1} className="mt-10 md:mt-12">
        <CalEmbed calLink={booking.calLink} />
      </Reveal>
    </section>
  );
}
