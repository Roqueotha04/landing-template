"use client";

import Link from "next/link";
import Image from "next/image";
import type { Offering } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { offeringSlug } from "@/lib/slug";

export function ServiceCard({ item }: { item: Offering }) {
  const { t } = useLanguage();

  return (
    <Link
      href={`/oferta/${offeringSlug(item)}`}
      className="group flex h-full flex-col rounded-3xl border border-primary/30 bg-accent/90 shadow-[0_0_20px_rgba(197,160,89,0.05)] p-6 md:p-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(197,160,89,0.2)] hover:border-primary text-foreground"
    >
      {item.image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-900 mb-6 border border-white/10">
          <Image
            src={item.image}
            alt={t(item.name)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            sizes="(max-width: 768px) 60vw, 900px"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-center">
        <h3 className="font-heading text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors uppercase tracking-widest text-gradient-gold">
          {t(item.name)}
        </h3>
        <p className="mt-4 text-sm md:text-lg text-foreground/80 leading-relaxed font-medium">
          {t(item.description)}
        </p>
      </div>
    </Link>
  );
}
