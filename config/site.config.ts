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
    logoText: "Sebastián Grondona",
    logoTextShort: "Sebastián Grondona",
    logo: "/logo-grondona.png",
    phone: "+54 9 11 2855-5848",
    whatsapp: "5491128555848",
    email: "info@consultoragrondona.com",
    instagram: "consultoragrondona",
  },
  brand: {
    headingFont: "Playfair Display",
    bodyFont: "Open Sans",
  },
  sections: ["hero", "offerings", "booking", "whyUs", "about", "contact"],
  variants: {
    offerings: "grid",
  },
  hero: {
    title: {
      es: "Sebastián Grondona",
      en: "Sebastián Grondona",
    },
    subtitle: {
      es: "La excelencia del liderazgo comienza con una conversación",
      en: "Leadership excellence begins with a conversation",
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
        name: {
          es: "Coaching Ejecutivo Individual",
          en: "Individual Executive Coaching",
        },
        description: {
          es: "Un proceso personalizado para potenciar tu liderazgo, mejorar la toma de decisiones y desarrollar las competencias necesarias para afrontar nuevos desafíos profesionales con confianza y claridad.",
          en: "A personalized process to boost your leadership, improve decision-making and develop the skills needed to face new professional challenges with confidence and clarity.",
        },
        bulletsTitle: { es: "¿En qué te ayudo?", en: "How do I help you?" },
        bullets: {
          es: [
            "Desarrollo de liderazgo.",
            "Gestión del cambio.",
            "Comunicación efectiva.",
            "Inteligencia emocional.",
            "Toma de decisiones estratégicas.",
            "Equilibrio entre vida personal y profesional.",
          ],
          en: [
            "Leadership development.",
            "Change management.",
            "Effective communication.",
            "Emotional intelligence.",
            "Strategic decision-making.",
            "Balance between personal and professional life.",
          ],
        },
      },
      {
        name: {
          es: "Coaching para Líderes y Mandos Medios",
          en: "Coaching for Leaders and Middle Management",
        },
        description: {
          es: "Fortalecé las habilidades que necesita un líder moderno para inspirar equipos, gestionar conflictos y alcanzar resultados sostenibles.",
          en: "Strengthen the skills a modern leader needs to inspire teams, manage conflict and achieve sustainable results.",
        },
        bulletsTitle: { es: "Trabajamos en:", en: "We work on:" },
        bullets: {
          es: [
            "Liderazgo consciente.",
            "Delegación efectiva.",
            "Motivación de equipos.",
            "Feedback de alto impacto.",
            "Resolución de conflictos.",
            "Gestión del desempeño.",
          ],
          en: [
            "Conscious leadership.",
            "Effective delegation.",
            "Team motivation.",
            "High-impact feedback.",
            "Conflict resolution.",
            "Performance management.",
          ],
        },
      },
      {
        name: { es: "Coaching para Empresas", en: "Coaching for Companies" },
        description: {
          es: "Diseño procesos de coaching adaptados a las necesidades de cada organización para desarrollar líderes más preparados, equipos más comprometidos y una cultura orientada a resultados.",
          en: "I design coaching processes adapted to the needs of each organization to develop better-prepared leaders, more committed teams and a results-oriented culture.",
        },
        bulletsTitle: { es: "Beneficios", en: "Benefits" },
        bullets: {
          es: [
            "Mayor productividad.",
            "Mejor clima laboral.",
            "Desarrollo del talento.",
            "Liderazgo alineado con los objetivos del negocio.",
            "Gestión efectiva del cambio.",
          ],
          en: [
            "Greater productivity.",
            "Better workplace climate.",
            "Talent development.",
            "Leadership aligned with business objectives.",
            "Effective change management.",
          ],
        },
      },
      {
        name: {
          es: "Desarrollo de Habilidades Directivas",
          en: "Management Skills Development",
        },
        description: {
          es: "Un programa orientado a fortalecer las competencias clave que distinguen a los líderes de alto desempeño.",
          en: "A program aimed at strengthening the key competencies that set high-performing leaders apart.",
        },
        bulletsTitle: { es: "Competencias", en: "Competencies" },
        bullets: {
          es: [
            "Comunicación estratégica.",
            "Negociación.",
            "Gestión del tiempo.",
            "Pensamiento crítico.",
            "Liderazgo situacional.",
            "Gestión emocional.",
          ],
          en: [
            "Strategic communication.",
            "Negotiation.",
            "Time management.",
            "Critical thinking.",
            "Situational leadership.",
            "Emotional management.",
          ],
        },
      },
      {
        name: {
          es: "Coaching para Transiciones Profesionales",
          en: "Coaching for Career Transitions",
        },
        description: {
          es: "Acompaño a profesionales que atraviesan cambios importantes en su carrera, como ascensos, nuevos desafíos, cambios de empresa o emprendimientos, brindando herramientas para afrontar cada etapa con seguridad y visión estratégica.",
          en: "I support professionals going through major career changes — promotions, new challenges, company moves or new ventures — providing tools to face each stage with confidence and strategic vision.",
        },
      },
      {
        name: { es: "Sesiones de Alto Impacto", en: "High-Impact Sessions" },
        description: {
          es: "Cuando necesitás claridad para resolver un desafío específico, una sesión intensiva puede ayudarte a ordenar ideas, ampliar tu perspectiva y definir un plan de acción concreto en pocas horas.",
          en: "When you need clarity to solve a specific challenge, an intensive session can help you organize your ideas, broaden your perspective and define a concrete action plan in just a few hours.",
        },
        bulletsTitle: { es: "Ideal para:", en: "Ideal for:" },
        bullets: {
          es: [
            "Decisiones importantes.",
            "Conversaciones difíciles.",
            "Preparación para entrevistas o presentaciones.",
            "Resolución de conflictos.",
            "Planificación de objetivos.",
          ],
          en: [
            "Important decisions.",
            "Difficult conversations.",
            "Preparing for interviews or presentations.",
            "Conflict resolution.",
            "Goal planning.",
          ],
        },
      },
    ],
  },
  about: {
    eyebrow: {
      es: "Sebastián Pedro Grondona",
      en: "Sebastián Pedro Grondona",
    },
    title: {
      es: "Quién Soy",
      en: "Who I Am",
    },
    body: {
      es: [
        "Soy Sebastián Pedro Grondona, Coach Ejecutivo certificado y fundador de Consultora Grondona, un espacio dedicado a acompañar a personas, profesionales, emprendedores y organizaciones en el desarrollo de su máximo potencial.",
        "Mi formación incluye las carreras de Martillero y Corredor Inmobiliario, Docencia en la Universidad de Ciencias Empresariales y Sociales (UCES) y la Certificación en Coaching Ejecutivo otorgada por Axón. A lo largo de los años he complementado mi preparación con diversas capacitaciones en liderazgo, comunicación, desarrollo personal, gestión de equipos y habilidades profesionales.",
        "Creo firmemente que cada persona posee recursos y capacidades extraordinarias que, con el acompañamiento adecuado, pueden transformarse en resultados concretos. Mi trabajo consiste en ayudar a identificar objetivos claros, superar obstáculos, fortalecer el liderazgo y diseñar planes de acción que permitan alcanzar metas personales y profesionales de manera efectiva.",
      ],
      en: [
        "I am Sebastián Pedro Grondona, certified Executive Coach and founder of Consultora Grondona, a space dedicated to supporting individuals, professionals, entrepreneurs and organizations in developing their full potential.",
        "My training includes the Real Estate Broker and Auctioneer degrees, Teaching at the University of Business and Social Sciences (UCES) and the Executive Coaching Certification awarded by Axón. Over the years I have complemented my preparation with a range of programs in leadership, communication, personal development, team management and professional skills.",
        "I firmly believe that every person holds extraordinary resources and capabilities that, with the right support, can be turned into concrete results. My work consists of helping to identify clear objectives, overcome obstacles, strengthen leadership and design action plans that make it possible to reach personal and professional goals effectively.",
      ],
    },
    highlights: [
      {
        value: { es: "Espacio Seguro", en: "Safe Space" },
        label: {
          es: "Confidencialidad y contención en cada sesión.",
          en: "Confidentiality and support in every session.",
        },
        icon: "shield",
      },
      {
        value: { es: "Escucha Activa", en: "Active Listening" },
        label: {
          es: "Comprensión profunda de tus desafíos.",
          en: "Deep understanding of your challenges.",
        },
        icon: "listening",
      },
      {
        value: { es: "Compromiso Total", en: "Total Commitment" },
        label: {
          es: "Acompañamiento enfocado en tus metas.",
          en: "Support focused on your goals.",
        },
        icon: "target",
      },
    ],
    image: "/Sebastian.png",
  },
  whyUs: {
    title: {
      es: "¿Por Qué Elegir Consultora Grondona?",
      en: "Why Choose Consultora Grondona?",
    },
    reasons: [
      {
        title: {
          es: "Porque el cambio es posible cuando existe acompañamiento profesional",
          en: "Because change is possible when there is professional support",
        },
        body: {
          es: [
            "En Consultora Grondona creemos que todas las personas tienen el potencial de crecer, superar obstáculos y alcanzar objetivos que les permitan vivir con mayor plenitud, equilibrio y satisfacción.",
            "Nuestro propósito es acompañarte en ese camino de transformación, brindándote un espacio de escucha, reflexión y aprendizaje donde puedas descubrir nuevas posibilidades y convertir tus desafíos en oportunidades de crecimiento.",
          ],
          en: [
            "At Consultora Grondona we believe that every person has the potential to grow, overcome obstacles and reach goals that allow them to live with greater fulfilment, balance and satisfaction.",
            "Our purpose is to accompany you on that path of transformation, offering you a space for listening, reflection and learning where you can discover new possibilities and turn your challenges into opportunities for growth.",
          ],
        },
      },
      {
        title: {
          es: "Porque cada persona es única",
          en: "Because every person is unique",
        },
        body: {
          es: [
            "No existen soluciones universales. Cada proceso de coaching es diseñado de manera personalizada, respetando la historia, los valores, los objetivos y las necesidades de cada cliente.",
            "Trabajamos contigo para que encuentres tus propias respuestas y desarrolles herramientas que te permitan avanzar con confianza hacia el futuro que deseas construir.",
          ],
          en: [
            "There are no universal solutions. Every coaching process is designed in a personalized way, respecting the history, values, objectives and needs of each client.",
            "We work with you so that you find your own answers and develop tools that let you move forward with confidence towards the future you want to build.",
          ],
        },
      },
      {
        title: {
          es: "Porque creemos en el potencial humano",
          en: "Because we believe in human potential",
        },
        body: {
          es: [
            "Las personas suelen ser mucho más capaces de lo que imaginan. A través del coaching ayudamos a identificar fortalezas, superar limitaciones, potenciar habilidades y desarrollar una mentalidad orientada al crecimiento.",
          ],
          en: [
            "People are usually far more capable than they imagine. Through coaching we help identify strengths, overcome limitations, enhance skills and develop a growth-oriented mindset.",
          ],
        },
      },
      {
        title: {
          es: "Porque promovemos cambios reales y sostenibles",
          en: "Because we promote real and sustainable change",
        },
        body: {
          es: [
            "Nuestro enfoque combina reflexión y acción. No se trata solamente de comprender una situación, sino de generar cambios concretos que impacten positivamente en la vida personal, familiar, profesional y social.",
          ],
          en: [
            "Our approach combines reflection and action. It is not only about understanding a situation, but about generating concrete changes that have a positive impact on personal, family, professional and social life.",
          ],
        },
      },
      {
        title: {
          es: "Porque acompañamos procesos de crecimiento integral",
          en: "Because we support integral growth processes",
        },
        body: { es: [], en: [] },
        bulletsTitle: {
          es: "Trabajamos en aspectos como:",
          en: "We work on aspects such as:",
        },
        bullets: {
          es: [
            "Desarrollo personal.",
            "Autoconocimiento.",
            "Liderazgo.",
            "Comunicación efectiva.",
            "Gestión de emociones.",
            "Confianza y autoestima.",
            "Definición de objetivos.",
            "Toma de decisiones.",
            "Equilibrio entre vida personal y profesional.",
            "Desarrollo de hábitos saludables.",
            "Motivación y propósito de vida.",
          ],
          en: [
            "Personal development.",
            "Self-knowledge.",
            "Leadership.",
            "Effective communication.",
            "Emotional management.",
            "Confidence and self-esteem.",
            "Goal setting.",
            "Decision-making.",
            "Balance between personal and professional life.",
            "Building healthy habits.",
            "Motivation and life purpose.",
          ],
        },
      },
      {
        title: {
          es: "Porque vivimos los valores que promovemos",
          en: "Because we live the values we promote",
        },
        body: {
          es: [
            "La ética, la responsabilidad, el respeto, la confidencialidad y el compromiso son pilares fundamentales de nuestra forma de trabajar.",
            "Creemos que una relación de confianza es la base para lograr transformaciones profundas y duraderas.",
          ],
          en: [
            "Ethics, responsibility, respect, confidentiality and commitment are fundamental pillars of the way we work.",
            "We believe that a relationship built on trust is the foundation for achieving deep and lasting transformations.",
          ],
        },
      },
      {
        title: {
          es: "Porque entendemos que el crecimiento es un camino continuo",
          en: "Because we understand that growth is a continuous path",
        },
        body: {
          es: [
            "Así como en la naturaleza cada paso lleva a una nueva cima, el desarrollo personal es un proceso permanente de aprendizaje y evolución.",
            "Inspirados en valores como la perseverancia, la disciplina, el esfuerzo y la superación, acompañamos a nuestros clientes a avanzar con claridad y determinación hacia sus metas.",
          ],
          en: [
            "Just as in nature every step leads to a new summit, personal development is an ongoing process of learning and evolution.",
            "Inspired by values such as perseverance, discipline, effort and self-improvement, we support our clients in moving towards their goals with clarity and determination.",
          ],
        },
      },
    ],
    image: "/logo-grondona.png",
  },
  booking: {
    eyebrow: {
      es: "Agenda online",
      en: "Online booking",
    },
    title: {
      es: "Agendá tu Sesión",
      en: "Book your Session",
    },
    subtitle: {
      es: "Elegí el día y horario que mejor te quede. Vas a recibir la confirmación al instante.",
      en: "Pick the day and time that works best for you. You'll get instant confirmation.",
    },
    pageTitle: {
      es: "Reservá tu sesión de coaching",
      en: "Book your coaching session",
    },
    ctaText: {
      es: "Ver disponibilidad",
      en: "See availability",
    },
    perks: [
      { es: "Sesión online", en: "Online session" },
      { es: "30 minutos", en: "30 minutes" },
      { es: "Confirmación inmediata", en: "Instant confirmation" },
    ],
    calLink: "https://cal.com/roque-othacehe-xdezkn",
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
      es: "Consultora Grondona — Coaching Ejecutivo y Liderazgo",
      en: "Consultora Grondona — Executive Coaching and Leadership",
    },
    description: {
      es: "Liderazgo, enfoque y estrategia para alcanzar tu mejor versión. Coaching ejecutivo, de equipos y para empresas por Sebastián Grondona.",
      en: "Leadership, focus, and strategy to reach your best self. Executive, team and corporate coaching by Sebastián Grondona.",
    },
    keywords: [
      "coaching ejecutivo",
      "coaching para empresas",
      "liderazgo",
      "habilidades directivas",
      "desarrollo profesional",
      "sebastián grondona",
    ],
  },
});
