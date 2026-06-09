"use client";

import Image from "next/image";
import type { Offering } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";

export function ProductCard({ item }: { item: Offering }) {
  const { t } = useLanguage();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 transition-colors hover:border-primary/40">
      <div className="relative aspect-square w-full bg-accent">
        {item.image && (
          <Image
            src={item.image}
            alt={t(item.name)}
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {t(item.name)}
        </h3>
        <p className="mt-1 flex-1 text-sm text-foreground/70">{t(item.description)}</p>
        {item.price && (
          <span className="mt-3 text-lg font-semibold text-primary">{item.price}</span>
        )}
      </div>
    </article>
  );
}
