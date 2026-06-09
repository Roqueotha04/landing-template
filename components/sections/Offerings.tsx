"use client";

import { siteConfig } from "@/config/site.config";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";

const { offerings } = siteConfig;
const Card = offerings.kind === "products" ? ProductCard : ServiceCard;

export function Offerings() {
  return (
    <Section id="offerings" className="bg-foreground/[0.02]">
      <div className="max-w-2xl">
        <SectionHeading title={offerings.title} subtitle={offerings.subtitle} />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.items.map((item, index) => (
          <Reveal key={item.name.es} delay={index * 0.05} className="h-full">
            <Card item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
