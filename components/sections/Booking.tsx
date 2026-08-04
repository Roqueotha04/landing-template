"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BookingPreview } from "@/components/ui/BookingPreview";
import { ArrowRightIcon } from "@/components/ui/icons";

const { booking } = siteConfig;

export function Booking() {
  const { t } = useLanguage();

  if (!booking) return null;

  return (
    <Section id="booking" className="bg-surface-deep text-ink">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="text-center md:text-left">
          <Reveal>
            <SectionHeading
              eyebrow={booking.eyebrow}
              title={booking.title}
              subtitle={booking.subtitle}
              tone="onLight"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-8 md:items-start">
              <Link
                href="/agenda"
                className="elev-gold group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-sm bg-primary px-12 py-4 font-heading text-lg font-bold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
              >
                {t(booking.ctaText ?? ui.booking.cta)}
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              {booking.perks && booking.perks.length > 0 && (
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-start">
                  {booking.perks.map((perk) => (
                    <li
                      key={perk.es}
                      className="flex items-center gap-2 text-sm font-semibold text-ink-muted"
                    >
                      <span aria-hidden className="text-primary">
                        ✓
                      </span>
                      {t(perk)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <BookingPreview />
        </Reveal>
      </div>
    </Section>
  );
}
