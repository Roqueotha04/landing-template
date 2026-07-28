"use client";

import { useState, type ComponentType, type FormEvent } from "react";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import type { Localized } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  InstagramIcon,
} from "@/components/ui/icons";

const { business, contact } = siteConfig;

interface ContactDetail {
  Icon: ComponentType<{ className?: string }>;
  label: Localized;
  value: string;
  href?: string;
}

export function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const greeting = t(contact.whatsappMessage);

  const detailCandidates: (ContactDetail | null)[] = [
    business.phone
      ? {
          Icon: PhoneIcon,
          label: ui.contact.phone,
          value: business.phone,
          href: `tel:${business.phone.replace(/\s/g, "")}`,
        }
      : null,
    business.email
      ? {
          Icon: MailIcon,
          label: ui.contact.email,
          value: business.email,
          href: `mailto:${business.email}`,
        }
      : null,
    business.address
      ? { Icon: MapPinIcon, label: ui.contact.address, value: business.address }
      : null,
    business.hours
      ? { Icon: ClockIcon, label: ui.contact.hours, value: t(business.hours) }
      : null,
  ];
  const details = detailCandidates.filter(
    (detail): detail is ContactDetail => detail !== null,
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // Resolve the reason text for the email body
    const reasonText = reason 
      ? t(ui.contact.reasonOptions[reason as keyof typeof ui.contact.reasonOptions] || ui.contact.reasonOptions.other) 
      : t(ui.contact.reasonOptions.other);
      
    const subject = encodeURIComponent(`Consulta Web: ${reasonText} - ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nTeléfono: ${phone}\nMotivo: ${reasonText}\n\nMensaje:\n${message}`
    );
    
    window.location.href = `mailto:${business.email || "info@consultoragrondona.com"}?subject=${subject}&body=${body}`;
  }

  return (
    <Section
      id="contact"
      className="bg-background text-foreground relative overflow-hidden"
      topDivider={<WaveDivider className="fill-accent" />}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="grid gap-16 md:grid-cols-2 md:gap-32 max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow={ui.contact.detailsTitle}
            title={contact.title}
            subtitle={contact.subtitle}
          />

          <ul className="mt-10 flex flex-row flex-wrap gap-x-6 gap-y-4">
            {details.map(({ Icon, label, value, href }) => (
              <li key={value} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-foreground/50 font-bold">
                    {t(label)}
                  </span>
                  {href ? (
                    <a href={href} className="text-sm font-semibold hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-row flex-wrap gap-3">
            <a
              href={buildWhatsAppLink(business.whatsapp, greeting)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(ui.whatsapp.aria)}
              className="inline-flex flex-1 min-w-fit items-center justify-center gap-2 rounded-sm bg-[#25D366] px-4 py-2.5 text-sm md:px-8 md:py-3.5 md:text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-5 w-5 md:h-6 md:w-6" />
              WhatsApp
            </a>
            {business.instagram && (
              <a
                href={`https://instagram.com/${business.instagram.replace(/^@/, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex flex-1 min-w-fit items-center justify-center gap-2 rounded-sm bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] px-4 py-2.5 text-sm md:px-8 md:py-3.5 md:text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                <InstagramIcon className="h-5 w-5 md:h-6 md:w-6" />
                Instagram
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-4">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-primary">
              {t(ui.contact.formTitle)}
            </h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-sm bg-white/5 border border-white/10 backdrop-blur p-5 md:p-8 shadow-2xl"
          >
            <div className="space-y-4">
              <label className="block">
                <span className="mb-1 block text-xs md:text-sm font-semibold text-foreground/80">
                  {t(ui.contact.nameLabel)}
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={t(ui.contact.namePlaceholder)}
                  required
                  className="w-full rounded-sm border border-white/10 bg-black/20 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-foreground/30 focus:border-primary text-foreground"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-xs md:text-sm font-semibold text-foreground/80">
                  {t(ui.contact.phoneLabel)}
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder={t(ui.contact.phonePlaceholder)}
                  required
                  className="w-full rounded-sm border border-white/10 bg-black/20 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-foreground/30 focus:border-primary text-foreground"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-xs md:text-sm font-semibold text-foreground/80">
                  {t(ui.contact.reasonLabel)}
                </span>
                <select
                  value={reason}
                  onChange={(event) => setReason(event.target.value)}
                  required
                  className="w-full rounded-sm border border-white/10 bg-black/20 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary text-foreground appearance-none"
                >
                  <option value="" disabled className="text-black bg-white">{t(ui.contact.reasonPlaceholder)}</option>
                  <option value="executive" className="text-black bg-white">{t(ui.contact.reasonOptions.executive)}</option>
                  <option value="realEstate" className="text-black bg-white">{t(ui.contact.reasonOptions.realEstate)}</option>
                  <option value="personal" className="text-black bg-white">{t(ui.contact.reasonOptions.personal)}</option>
                  <option value="other" className="text-black bg-white">{t(ui.contact.reasonOptions.other)}</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1 block text-xs md:text-sm font-semibold text-foreground/80">
                  {t(ui.contact.messageLabel)}
                </span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={t(ui.contact.messagePlaceholder)}
                  required
                  rows={3}
                  className="w-full resize-none rounded-sm border border-white/10 bg-black/20 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-foreground/30 focus:border-primary text-foreground"
                />
              </label>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm font-bold text-background transition-transform hover:scale-[1.02] shadow-[0_5px_20px_-5px_rgba(197,160,89,0.4)]"
              >
                <MailIcon className="h-5 w-5" />
                {t(ui.contact.submit)}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
