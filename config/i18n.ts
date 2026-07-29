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
  offerings: {
    viewAll: Localized;
    promoCta: Localized;
  };
  offeringDetail: {
    back: Localized;
    addToCart: Localized;
    requestService: Localized;
    whatsappIntro: Localized;
  };
  booking: {
    back: Localized;
    cta: Localized;
  };
  contact: {
    phone: Localized;
    email: Localized;
    address: Localized;
    hours: Localized;
    detailsTitle: Localized;
    formTitle: Localized;
    nameLabel: Localized;
    namePlaceholder: Localized;
    phoneLabel: Localized;
    phonePlaceholder: Localized;
    reasonLabel: Localized;
    reasonPlaceholder: Localized;
    reasonOptions: {
      executive: Localized;
      realEstate: Localized;
      personal: Localized;
      other: Localized;
    };
    messageLabel: Localized;
    messagePlaceholder: Localized;
    submit: Localized;
  };
  footer: {
    rights: Localized;
    follow: Localized;
    sections: Localized;
    legal: Localized;
    designedBy: Localized;
    agencyTagline: Localized;
  };
}

export const ui: UiStrings = {
  nav: {
    hero: { es: "Inicio", en: "Home" },
    offerings: { es: "Servicios", en: "Services" },
    about: { es: "Nosotros", en: "About" },
    booking: { es: "Agendar", en: "Book" },
    contact: { es: "Contacto", en: "Contact" },
    testimonials: { es: "Testimonios", en: "Testimonials" },
    gallery: { es: "Galería", en: "Gallery" },
    faq: { es: "Preguntas frecuentes", en: "FAQ" },
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
  offerings: {
    viewAll: { es: "Ver todos", en: "View all" },
    promoCta: { es: "¡Quiero saber más!", en: "I want to know more!" },
  },
  offeringDetail: {
    back: { es: "Volver", en: "Back" },
    addToCart: { es: "Agregar al carrito", en: "Add to cart" },
    requestService: { es: "Solicitar servicio", en: "Request service" },
    whatsappIntro: { es: "¡Hola! Me interesa:", en: "Hi! I'm interested in:" },
  },
  booking: {
    back: { es: "Volver al inicio", en: "Back to home" },
    cta: { es: "Ver disponibilidad", en: "See availability" },
  },
  contact: {
    phone: { es: "Teléfono", en: "Phone" },
    email: { es: "Email", en: "Email" },
    address: { es: "Dirección", en: "Address" },
    hours: { es: "Horarios", en: "Hours" },
    detailsTitle: { es: "Hablemos", en: "Let's talk" },
    formTitle: { es: "Dejanos tu mensaje", en: "Leave us a message" },
    nameLabel: { es: "Nombre", en: "Name" },
    namePlaceholder: { es: "¿Cómo te llamás?", en: "What's your name?" },
    phoneLabel: { es: "Teléfono", en: "Phone" },
    phonePlaceholder: { es: "Tu número", en: "Your number" },
    reasonLabel: { es: "Motivo de la consulta", en: "Reason for inquiry" },
    reasonPlaceholder: { es: "Elegí una opción...", en: "Select an option..." },
    reasonOptions: {
      executive: { es: "Coaching Ejecutivo", en: "Executive Coaching" },
      realEstate: { es: "Coaching Inmobiliario", en: "Real Estate Coaching" },
      personal: { es: "Life Coaching (Personal)", en: "Life Coaching (Personal)" },
      other: { es: "Otro", en: "Other" },
    },
    messageLabel: { es: "Mensaje", en: "Message" },
    messagePlaceholder: {
      es: "Contanos tu consulta...",
      en: "Tell us about your inquiry...",
    },
    submit: { es: "Escribinos", en: "Message us" },
  },
  footer: {
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
    follow: { es: "Seguinos", en: "Follow us" },
    sections: { es: "Secciones", en: "Sections" },
    legal: { es: "Legal", en: "Legal" },
    designedBy: { es: "Diseñado por", en: "Designed by" },
    agencyTagline: {
      es: "Agencia de Desarrollo de Software",
      en: "Software Development Agency",
    },
  },
};
