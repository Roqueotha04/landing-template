"use client";

import Link from "next/link";
import type { Offering } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { offeringSlug } from "@/lib/slug";

export function ServiceGridCard({
  item,
  index,
}: {
  item: Offering;
  index: number;
}) {
  const { t } = useLanguage();

  return (
    <Link
      href={`/oferta/${offeringSlug(item)}`}
      className="elev-1 group flex h-full flex-col rounded-2xl bg-surface-raised p-7 ring-1 ring-primary/20 transition-all duration-300 hover:-translate-y-1 hover:ring-primary/50 hover:elev-2"
    >
      <span
        aria-hidden
        className="font-heading text-4xl font-bold leading-none text-primary/35 transition-colors group-hover:text-primary/60"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="mt-4 font-heading text-xl font-bold text-ink group-hover:underline group-hover:decoration-primary group-hover:underline-offset-4">
        {t(item.name)}
      </h3>

      <div className="mt-3 h-0.5 w-12 bg-primary" />

      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
        {t(item.description)}
      </p>
    </Link>
  );
}
