"use client";

import { siteConfig } from "@/config/site.config";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProductCard } from "@/components/ui/ProductCard";

const { offerings } = siteConfig;
const Card = offerings.kind === "products" ? ProductCard : ServiceCard;

export function OfferingsCarousel() {
  return (
    <Section id="offerings" className="bg-foreground/[0.02]">
      <div className="max-w-2xl">
        <SectionHeading title={offerings.title} subtitle={offerings.subtitle} />
      </div>

      <div className="mt-12">
        <Carousel>
          {offerings.items.map((item) => (
            <div key={item.name.es} className="w-72 shrink-0 snap-start">
              <Card item={item} />
            </div>
          ))}
        </Carousel>
      </div>
    </Section>
  );
}
