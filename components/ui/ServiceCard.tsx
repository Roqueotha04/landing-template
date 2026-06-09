"use client";

import type { Offering } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";

export function ServiceCard({ item }: { item: Offering }) {
  const { t } = useLanguage();

  return (
    <article className="flex h-full flex-col rounded-2xl border border-foreground/10 p-6 transition-colors hover:border-primary/40">
      <h3 className="font-heading text-xl font-semibold text-foreground">
        {t(item.name)}
      </h3>
      <p className="mt-2 flex-1 text-foreground/70">{t(item.description)}</p>
    </article>
  );
}
