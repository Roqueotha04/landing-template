"use client";

import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";

const { business, contact } = siteConfig;

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      label: "WhatsApp",
      href: buildWhatsAppLink(business.whatsapp, t(contact.whatsappMessage)),
      Icon: WhatsAppIcon,
    },
    ...(business.instagram
      ? [
          {
            label: "Instagram",
            href: `https://instagram.com/${business.instagram.replace(/^@/, "")}`,
            Icon: InstagramIcon,
          },
        ]
      : []),
  ];

  return (
    <footer className="bg-neutral-900 py-12 text-white md:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-6 text-center md:px-8">
        <span className="font-heading text-xl font-bold text-white">{business.name}</span>

        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wide text-white/50">
            {t(ui.footer.follow)}
          </span>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} {business.name}. {t(ui.footer.rights)}
        </p>
      </div>
    </footer>
  );
}
