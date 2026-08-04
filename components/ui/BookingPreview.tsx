"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { AGENDA_ROUTE } from "@/lib/nav";
import { ArrowRightIcon } from "@/components/ui/icons";

const { business, booking } = siteConfig;

const WEEK_LENGTH = 7;

interface MonthGrid {
  label: string;
  weekdays: string[];
  leadingBlanks: number;
  days: number[];
  today: number;
}

/**
 * Built after mount on purpose: `output: "export"` freezes the build date into
 * the HTML, so rendering the month during SSR would ship a stale month and
 * mismatch on hydration.
 */
function buildMonthGrid(locale: string): MonthGrid {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const narrow = new Intl.DateTimeFormat(locale, { weekday: "narrow" });
  const weekdays = Array.from({ length: WEEK_LENGTH }, (_, index) =>
    narrow.format(new Date(2024, 8, index)),
  );

  return {
    label: new Intl.DateTimeFormat(locale, {
      month: "long",
      year: "numeric",
    }).format(now),
    weekdays,
    leadingBlanks: firstWeekday,
    days: Array.from({ length: daysInMonth }, (_, index) => index + 1),
    today: now.getDate(),
  };
}

export function BookingPreview() {
  const { locale, t } = useLanguage();
  const [grid, setGrid] = useState<MonthGrid | null>(null);

  useEffect(() => {
    setGrid(buildMonthGrid(locale));
  }, [locale]);

  if (!booking) return null;

  const ctaLabel = t(booking.ctaText ?? ui.booking.cta);

  return (
    <Link
      href={AGENDA_ROUTE}
      aria-label={ctaLabel}
      className="elev-1 group block overflow-hidden rounded-2xl bg-surface-raised ring-1 ring-primary/15 transition-all duration-300 hover:-translate-y-1 hover:ring-primary/40 hover:elev-2"
    >
      <div className="grid gap-px bg-primary/10 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <div className="bg-surface-raised p-6">
          <div className="flex items-center gap-2.5">
            {business.logo && (
              <Image
                src={business.logo}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-full ring-1 ring-primary/30"
              />
            )}
            <span className="text-sm font-semibold text-ink-muted">
              {business.name}
            </span>
          </div>

          <h3 className="mt-4 font-heading text-lg font-bold text-ink">
            {t(booking.title)}
          </h3>

          {booking.perks && booking.perks.length > 0 && (
            <ul className="mt-4 space-y-2">
              {booking.perks.map((perk) => (
                <li
                  key={perk.es}
                  className="flex items-center gap-2 text-sm text-ink-muted"
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

        <div className="relative bg-surface-raised p-6">
          <div aria-hidden className="min-h-[17rem] pb-4">
            {grid && (
              <>
                <p className="text-center font-heading text-sm font-bold capitalize text-ink">
                  {grid.label}
                </p>

                <div className="mt-4 grid grid-cols-7 gap-1 text-center">
                  {grid.weekdays.map((weekday, index) => (
                    <span
                      key={`${weekday}-${index}`}
                      className="text-[0.65rem] font-bold uppercase text-ink-muted/60"
                    >
                      {weekday}
                    </span>
                  ))}

                  {Array.from({ length: grid.leadingBlanks }, (_, index) => (
                    <span key={`blank-${index}`} />
                  ))}

                  {grid.days.map((day) => (
                    <span
                      key={day}
                      className={`flex h-7 items-center justify-center rounded-full text-xs ${
                        day === grid.today
                          ? "font-bold text-primary-deep ring-1 ring-primary"
                          : "text-ink-muted"
                      }`}
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-surface-raised via-surface-raised/95 to-transparent pt-20 pb-7">
            <span className="cta-float elev-gold inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform duration-300 group-hover:scale-[1.06]">
              {ctaLabel}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
