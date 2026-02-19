export type Lang = "es" | "en";

const translations = {
  // ─── NAVBAR ────────────────────────────────────────────
  nav: {
    inicio:     { es: "Inicio",      en: "Home" },
    nosotros:   { es: "Nosotros",    en: "About Us" },
    servicios:  { es: "Servicios",   en: "Services" },
    contactanos:{ es: "Contactanos", en: "Contact" },
  },

  // ─── HERO (página principal) ───────────────────────────
  hero: {
    typeSequence: {
      es: [
        "Consultoría Regulatoria, Medición y Homologación de equipos",
      ],
      en: [
        "Regulatory Consulting, Measurement, and Equipment Certification",
      ],
    },
    leadingLine: { es: "Gestión integral en", en: "Comprehensive Management in" },
    subtitle: {
      es: "Más de 20 años de experiencia respaldando a la industria de las telecomunicaciones",
      en: "Over 20 years of experience supporting the telecommunications industry",
    },
  },

   // ─── ABOUT ─────────────────────────────────────────────
  about: {
    whoTitle:   { es: "¿Quiénes Somos?",  en: "Who Are We?" },
    whoText: {
      es: `Consultora fundada en 2004, especializada en telecomunicaciones y tecnologías de la información. Hemos trabajado con empresas líderes como Claro, Entel, WOM, Motorola y Otros, realizando homologaciones, mediciones de densidad de potencia, recepción de obras y auditorías técnicas especializadas.`,
      en: `Consulting firm founded in 2004, specialized in telecommunications and information technologies. We have worked with leading companies such as Claro, Entel, WOM, Motorola and Others, performing homologations, power density measurements, site receptions, and specialized technical audits.`,
    },
    missionTitle: { es: "Misión",  en: "Mission" },
    missionText: {
      es: "Entregar servicios de auditoría y consultoría tecnologica con los más altos estándares de calidad, garantizando cumplimiento normativo y optimización de procesos.",
      en: "Deliver audit and technological consulting services with the highest quality standards, ensuring regulatory compliance and process optimization.",
    },
    visionTitle: { es: "Visión",  en: "Vision" },
    visionText: {
      es: "Ser el referente en servicios técnicos y regulatorios especializados, reconocidos por la excelencia profesional y la capacidad de generar valor sostenido.",
      en: "To be the benchmark in specialized technical and regulatory services, recognized for professional excellence and ability to generate sustained value.",
    },
  },

  // ─── TEAM ──────────────────────────────────────────────
  team: {
    title:    { es: "Nuestro Equipo",  en: "Our Team" },
    subtitle: {
      es: "Profesionales con amplia experiencia en telecomunicaciones y regulación.",
      en: "Professionals with extensive experience in telecommunications and regulation.",
    },
    email:      { es: "Correo",     en: "Email" },
    phone:      { es: "Teléfono",   en: "Phone" },
    seniority:  { es: "Antigüedad", en: "Tenure" },
    ceoQuote: {
      es: "Nuestro compromiso es entregar soluciones técnico-regulatorias que generen valor real para nuestros clientes, respaldados por más de 20 años de experiencia en la industria de las telecomunicaciones.",
      en: "Our commitment is to deliver technical-regulatory solutions that generate real value for our clients, backed by over 20 years of experience in the telecommunications industry."
    },
    roles: {
      ceoFounder:       { es: "CEO & Fundador",         en: "CEO & Founder" },
      fieldSupervisor:  { es: "Supervisor de Terreno", en: "Field Supervisor" },
      chargeOf:         { es: "Encargado de",          en: "In charge of" },
    },
    teams: {
      homologation: {
        es: "Homologación y Certificación",
        en: "Homologation & Certification"
      },
      homologationDesc: {
        es: "Equipo especializado en homologación de terminales móviles y dispositivos. Gestión completa del proceso de certificación ante SUBTEL con laboratorio propio equipado con tecnología R&S y Aaronia",
        en: "Specialized team in mobile terminal and device homologation. Complete management of the certification process before SUBTEL with own laboratory equipped with R&S CMW 500 technology."
      },
      fieldMeasurements: {
        es: "Mediciones de Campo",
        en: "Field Measurements"
      },
      fieldMeasurementsDesc: {
        es: "Personal capacitado en recepciones de obra y mediciones de densidad de potencia en todas las bandas (700 MHz a 26 GHz). Experiencia comprobada con operadores nacionales.",
        en: "Trained personnel in site receptions and power density measurements across all bands (700 MHz to 26 GHz). Proven experience with national operators."
      },
      regulatoryAdvisory: {
        es: "Asesorías Regulatorias",
        en: "Regulatory Advisory"
      },
      regulatoryAdvisoryDesc: {
        es: "Equipo enfocado en defensa regulatoria ante SUBTEL, elaboración de informes regulatorios y apoyo en obtención de permisos y concesiones para operadores.",
        en: "Team focused on regulatory defense before SUBTEL, regulatory report preparation, and support in obtaining permits and concessions for operators."
      },
      technicalAudits: {
        es: "Auditorías Tecnológicas",
        en: "Technical Audits"
      },
      technicalAuditsDesc: {
        es: "Especialistas en auditorías de cumplimiento regulatorio y revisión de boletas de cobro por espectro. Certificados por la CMF desde enero 2025.",
        en: "Specialists in regulatory compliance audits and spectrum fee invoice reviews. Certified by CMF since January 2025."
      }
    }
  },

  // ─── SERVICES (cards) ──────────────────────────────────
  services: [
    {
      titulo: {
        es: "Homologación de terminales móviles",
        en: "Mobile Terminal Homologation",
      },
      descripcion: {
        es: "El servicio más común y necesario para dispositivos que entran al país.",
        en: "The most common and necessary service for devices entering the country.",
      },
    },
    {
      titulo: {
        es: "Mediciones de Campo",
        en: "Field Measurements",
      },
      descripcion: {
        es: "Realizamos mediciones técnicas especializadas para garantizar el cumplimiento de estándares.",
        en: "We carry out specialised technical measurements to ensure compliance with standards.",
      },
    },
    {
      titulo: {
        es: "Auditoria de Cumplimiento",
        en: "Regulatory Compliance Audit",
      },
      descripcion: {
        es: "Auditoría realizada conforme a los lineamientos del SERNAC",
        en: "Audit conducted in accordance with SERNAC guidelines.",
      },
    },
    {
      titulo: {
        es: "Obtención de Permisos y Concesiones",
        en: "Obtaining Permits & Concessions",
      },
      descripcion: {
        es: "Obtención de permisos variados para operadores y apoyo en fusión de competidores.",
        en: "Obtaining various permits for operators and support in competitor mergers.",
      },
    },
    {
      titulo: {
        es: "Asesorías Regulatorias",
        en: "Regulatory Advisory",
      },
      descripcion: {
        es: "Defensa regulatoria ante SUBTEL, informes regulatorios y apoyo estratégico.",
        en: "Regulatory defence before SUBTEL, regulatory reports, and strategic support.",
      },
    },
    {
      titulo: {
        es: "Auditorías Tecnológicas",
        en: "Technology Audits",
      },
      descripcion: {
        es: "Auditorías de cumplimiento regulatorio y boletas de cobro por espectro.",
        en: "Regulatory compliance audits and spectrum fee invoice audits.",
      },
    },
  ],

  // ─── CERTIFICATIONS ────────────────────────────────────
  certifications: {
    sectionTitle: { es: "Certificaciones de Respaldo", en: "Supporting Certifications" },
    items: [
      {
        titulo: {
          es: "Medición de Espectro",
          en: "Spectrum Measurement",
        },
        descripcion: {
          es: "Certificado por SUBTEL desde 2012 hasta 2026 para realizar mediciones de ondas electromagnéticas en distintos sistemas radiantes.",
          en: "Certified by SUBTEL from 2012 to 2026 to perform electromagnetic wave measurements on various radiating systems.",
        },
      },
      {
        titulo: {
          es: "Auditoría de Cumplimiento",
          en: "Compliance Audit",
        },
        descripcion: {
          es: "Desde enero de 2025, inscrita en el Registro de Inspectores de Cuentas y Auditores Externos, y certificada por la Comisión para el Mercado Financiero (CMF).",
          en: "Since January 2025, registered in the Registry of Account Inspectors and External Auditors, and certified by the Financial Market Commission (CMF).",
        },
      },
      {
        titulo: {
          es: "Homologación de Dispositivos",
          en: "Device Homologation",
        },
        descripcion: {
          es: "Desde 2016 certificado por SUBTEL para homologar todo tipo de dispositivos que se conectan a la Red Móvil.",
          en: "Since 2016, certified by SUBTEL to homologate all types of devices that connect to the Mobile Network.",
        },
      },
    ],
  },

  // ─── FOOTER ────────────────────────────────────────────
  footer: {
    tagline: {
      es: "Expertos en soluciones técnico-regulatorias, medición del espectro electromagnético y homologación de equipos.",
      en: "Experts in technical-regulatory solutions, electromagnetic spectrum measurement, and equipment homologation.",
    },
    legal:          { es: "LEGAL",                en: "LEGAL" },
    certifications: { es: "Certificaciones",     en: "Certifications" },
    securityPolicy: { es: "Políticas de Seguridad", en: "Security Policies" },
    workWithUs:     { es: "Trabaja con Nosotros", en: "Work With Us" },
    interestLinks:  { es: "Links de Interés",    en: "Links of Interest" },
    copyright:      { es: "Todos los derechos reservados.", en: "All rights reserved." },
  },

  // ─── NOSOTROS page hero ────────────────────────────────
  nosotrosPage: {
    title:    { es: "Nosotros",  en: "About Us" },
    subtitle: {
      es: "Más de 20 años liderando la consultoría técnica-regulatoria en Chile",
      en: "Over 20 years leading technical-regulatory consulting in Chile",
    },
  },

  // ─── SERVICIOS page hero ───────────────────────────────
  serviciosPage: {
    title:    { es: "Portafolio de Servicios", en: "Services Portfolio" },
    subtitle: {
      es: "Soluciones integrales para la industria de telecomunicaciones",
      en: "Comprehensive solutions for the telecommunications industry",
    },
  },

  // ─── CONTACTANOS page ──────────────────────────────────
  contactPage: {
    title:    { es: "Contáctanos",  en: "Contact Us" },
    subtitle: {
      es: "Estamos aquí para ayudarte con tus proyectos de telecomunicaciones",
      en: "We are here to help you with your telecommunications projects",
    },
    infoTitle: {
      es: "Información de Contacto",
      en: "Contact Information",
    },
    email:     { es: "Email",      en: "Email" },
    phone:     { es: "Teléfono",   en: "Phone" },
    address:   { es: "Dirección",  en: "Address" },
    schedule:  { es: "Horario",    en: "Schedule" },
    scheduleDetail: {
      es: "Lunes a Viernes",
      en: "Monday to Friday",
    },
    formTitle: {
      es: "Envíanos un Mensaje",
      en: "Send Us a Message",
    },
    fullName:       { es: "Nombre Completo *",  en: "Full Name *" },
    fullNamePlaceholder: { es: "Tu nombre",    en: "Your name" },
    emailLabel:     { es: "Email *",           en: "Email *" },
    emailPlaceholder: { es: "tu@email.com",   en: "you@email.com" },
    phoneLabel:     { es: "Teléfono",         en: "Phone" },
    company:        { es: "Empresa",           en: "Company" },
    companyPlaceholder: { es: "Nombre de tu empresa", en: "Your company name" },
    message:        { es: "Mensaje *",         en: "Message *" },
    messagePlaceholder: {
      es: "Cuéntanos sobre tu proyecto o consulta...",
      en: "Tell us about your project or inquiry...",
    },
    sendButton:     { es: "Enviar Mensaje",    en: "Send Message" },
    successStatus:  {
      es: "Mensaje enviado con éxito. Nos pondremos en contacto pronto.",
      en: "Message sent successfully. We will get back to you shortly.",
    },
    ourLocation:    { es: "Nuestra Ubicación", en: "Our Location" },
  },
};

// Helper: pick the string for the active language
export function t(key: string, lang: Lang): string {
  const parts = key.split(".");
  let node: any = translations;
  for (const p of parts) {
    if (node == null) return key;
    node = node[p];
  }
  if (node && typeof node === "object" && "es" in node && "en" in node) {
    return node[lang] as string;
  }
  return typeof node === "string" ? node : key;
}

export default translations;