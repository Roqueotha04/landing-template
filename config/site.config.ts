import type { SiteConfig } from "./site.types";
import { validateConfig } from "@/lib/validate-config";

export const siteConfig: SiteConfig = validateConfig({
  site: {
    url: "https://consultoragrondona.com",
    defaultLocale: "es",
  },
  business: {
    name: "Consultora Grondona",
    legalName: "Consultora Grondona",
    logoText: "GRONDONA",
    logo: "/logo.jpeg",
    phone: "+54 9 11 2855-5848",
    whatsapp: "5491128555848",
    email: "info@consultoragrondona.com",
    instagram: "consultoragrondona",
  },
  brand: {
    headingFont: "Playfair Display",
    bodyFont: "Open Sans",
  },
  sections: ["hero", "offerings", "about", "contact"],
  variants: {
    offerings: "promo",
  },
  hero: {
    title: {
      es: "Consultora Grondona",
      en: "Consultora Grondona",
    },
    subtitle: {
      es: "Acompañamiento estratégico y personalizado para potenciar tu desempeño y alcanzar tus metas.",
      en: "Strategic and personalized support to boost your performance and achieve your goals.",
    },
    ctaText: { es: "Agendá tu Sesión", en: "Book your Session" },
    secondaryCtaText: { es: "Conocé los Servicios", en: "Explore Services" },
    backgroundImage: "/sobre-nosotros-nuevo.png",
  },
  offerings: {
    kind: "services",
    title: { es: "Nuestros Servicios", en: "Our Services" },
    items: [
      {
        name: { es: "Coaching Ejecutivo", en: "Executive Coaching" },
        description: {
          es: "Liderazgo al más alto nivel. Trabajamos juntos para desarrollar una comunicación estratégica y asertiva que logre potenciar tu desempeño profesional. Este programa está diseñado para gerentes, directores y profesionales que buscan desbloquear su máximo potencial, mejorar el clima de sus equipos y alcanzar metas corporativas de alta exigencia.",
          en: "Leadership at the highest level. We work together to develop strategic communication that boosts your professional performance. Designed for managers and professionals seeking to unlock their full potential and achieve demanding corporate goals.",
        },
        image: "/coaching-ejecutivo.jpg",
      },
      {
        name: { es: "Life Coaching (Personal)", en: "Life Coaching (Personal)" },
        description: {
          es: "Diseñá una vida con propósito. A través del autoconocimiento profundo, te guío para definir con claridad tus metas personales y establecer un plan de acción concreto. Vas a superar creencias limitantes, gestionar mejor tus emociones y encontrar el equilibrio necesario para avanzar hacia la mejor versión de vos mismo en tu día a día.",
          en: "Design a life with purpose. Through deep self-knowledge, I guide you to clearly define your personal goals and establish a concrete action plan. Overcome limiting beliefs and find the balance needed to move forward.",
        },
        image: "/coaching-personal.jpg",
      },
    ],
  },
  about: {
    eyebrow: {
      es: "Sebastián Pedro Grondona",
      en: "Sebastián Pedro Grondona",
    },
    title: {
      es: "Sobre Nosotros",
      en: "About Us",
    },
    body: {
      es: [
        "Acompañamos a personas, líderes y equipos a cerrar la brecha entre su realidad actual y sus objetivos más altos. A través de un enfoque centrado en la claridad, el enfoque y la acción, facilitamos procesos de transformación personal y profesional alineados a resultados reales.",
      ],
      en: [
        "We accompany individuals, leaders, and teams to bridge the gap between their current reality and their highest goals. Through an approach focused on clarity, focus, and action, we facilitate personal and professional transformation processes aligned with real results.",
      ],
    },
    highlights: [
      {
        value: "Seguro",
        label: {
          es: "Espacio Seguro: Confidencialidad y contención en cada sesión.",
          en: "Safe Space: Confidentiality and support in every session.",
        },
      },
      {
        value: "Activa",
        label: {
          es: "Escucha Activa: Comprensión profunda de tus desafíos.",
          en: "Active Listening: Deep understanding of your challenges.",
        },
      },
      {
        value: "Total",
        label: {
          es: "Compromiso Total: Acompañamiento enfocado en tus metas.",
          en: "Total Commitment: Support focused on your goals.",
        },
      },
    ],
    image: "/logo.jpeg",
  },
  contact: {
    title: {
      es: "Contacto",
      en: "Contact",
    },
    subtitle: {
      es: "Da el primer paso hacia tu transformación. Escribinos para empezar.",
      en: "Take the first step towards your transformation. Message us to start.",
    },
    whatsappMessage: {
      es: "Hola! Me gustaría recibir mas información sobre el servicio de coaching",
      en: "Hi! I'd like to receive more information about the coaching service",
    },
  },
  seo: {
    title: {
      es: "Consultora Grondona — Coaching Ejecutivo e Inmobiliario",
      en: "Consultora Grondona — Executive and Real Estate Coaching",
    },
    description: {
      es: "Liderazgo, enfoque y estrategia para alcanzar tu mejor versión. Coaching ejecutivo e inmobiliario por Sebastián Grondona.",
      en: "Leadership, focus, and strategy to reach your best self. Executive and real estate coaching by Sebastián Grondona.",
    },
    keywords: ["coaching", "ejecutivo", "inmobiliario", "liderazgo", "estrategia", "sebastián grondona"],
  },
});
