import type { Localized, SectionId } from "./site.types";

interface UiStrings {
  nav: Record<SectionId, Localized>;
  languageToggle: {
    label: Localized;
  };
  menu: {
    open: Localized;
    close: Localized;
  };
  whatsapp: {
    cta: Localized;
    aria: Localized;
  };
  contact: {
    phone: Localized;
    email: Localized;
    address: Localized;
    hours: Localized;
  };
  footer: {
    rights: Localized;
    follow: Localized;
  };
}

export const ui: UiStrings = {
  nav: {
    hero: { es: "Inicio", en: "Home" },
    offerings: { es: "Servicios", en: "Services" },
    about: { es: "Nosotros", en: "About" },
    contact: { es: "Contacto", en: "Contact" },
  },
  languageToggle: {
    label: { es: "Cambiar idioma", en: "Switch language" },
  },
  menu: {
    open: { es: "Abrir menú", en: "Open menu" },
    close: { es: "Cerrar menú", en: "Close menu" },
  },
  whatsapp: {
    cta: { es: "Escribinos por WhatsApp", en: "Message us on WhatsApp" },
    aria: { es: "Abrir chat de WhatsApp", en: "Open WhatsApp chat" },
  },
  contact: {
    phone: { es: "Teléfono", en: "Phone" },
    email: { es: "Email", en: "Email" },
    address: { es: "Dirección", en: "Address" },
    hours: { es: "Horarios", en: "Hours" },
  },
  footer: {
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
    follow: { es: "Seguinos", en: "Follow us" },
  },
};
