"use client";

import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
}

export function WhatsAppButton({ label, className }: WhatsAppButtonProps) {
  const { t } = useLanguage();
  const href = buildWhatsAppLink(
    siteConfig.business.whatsapp,
    t(siteConfig.contact.whatsappMessage),
  );

  return (
    <Button
      href={href}
      external
      ariaLabel={t(ui.whatsapp.aria)}
      className={className}
    >
      {label ?? t(ui.whatsapp.cta)}
    </Button>
  );
}
