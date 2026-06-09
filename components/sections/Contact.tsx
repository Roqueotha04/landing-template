"use client";

import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

const { business, contact } = siteConfig;

export function Contact() {
  const { t } = useLanguage();

  const details = [
    business.phone && {
      label: t(ui.contact.phone),
      value: business.phone,
      href: `tel:${business.phone.replace(/[^\d+]/g, "")}`,
    },
    business.email && {
      label: t(ui.contact.email),
      value: business.email,
      href: `mailto:${business.email}`,
    },
    business.address && {
      label: t(ui.contact.address),
      value: business.address,
      href: business.mapUrl,
    },
    business.hours && {
      label: t(ui.contact.hours),
      value: t(business.hours),
    },
  ].filter(
    (detail): detail is { label: string; value: string; href?: string } =>
      Boolean(detail),
  );

  return (
    <Section id="contact" className="bg-foreground/[0.02]">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <SectionHeading title={contact.title} subtitle={contact.subtitle} />
          <div className="mt-8">
            <WhatsAppButton />
          </div>
        </Reveal>

        <dl className="flex flex-col gap-6">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
                {detail.label}
              </dt>
              <dd className="mt-1 text-lg text-foreground/80">
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="transition-colors hover:text-primary"
                  >
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
