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
        "Consultoría Regulatoria",
        "Homologación de Equipos",
        "Medición Densidad de Potencia",
        "Auditoría Técnica",
      ],
      en: [
        "Regulatory Consulting",
        "Equipment Homologation",
        "Power Density Measurement",
        "Technical Auditing",
      ],
    },
    leadingLine: { es: "Lideres en", en: "Leaders in" },
    subtitle: {
      es: "Más de 20 años de experiencia respaldando a la industria de las telecomunicaciones",
      en: "Over 20 years of experience supporting the telecommunications industry",
    },
  },

  // ─── BUTTON ─────────────────────────────────────────────
  textButton:{
    buttonServices:{
    es: "Servicios", en: "Services" },
    butoonContact:
    {es: "Contactanos", en: "Contact"}
  },

  // ─── ABOUT ─────────────────────────────────────────────
  about: {
    whoTitle:   { es: "¿Quiénes Somos?",  en: "Who Are We?" },
    whoText: {
      es: `INGEAUDIT Ltda. es una Consultora creada el año 2004 y conformada por profesionales chilenos con una vasta y exitosa trayectoria en el desarrollo de proyectos relacionados con las Industrias de las Telecomunicaciones, Transportes y las Nuevas Tecnologías de la Comunicación e Información (NTIC).\n\nIngeaudit ha prestado servicios a empresas como WOM, Claro, Entel, EFE y Gallyas, realizando recepción de obras, mediciones de densidad de potencia, procesos de homologación y otras evaluaciones técnicas especializadas.`,
      en: `INGEAUDIT Ltd. is a consulting firm founded in 2004, composed of Chilean professionals with an extensive and successful track record in projects related to the Telecommunications, Transport, and New Information and Communication Technologies (ICT) industries.\n\nIngeaudit has provided services to companies such as WOM, Claro, Entel, EFE, and Gallyas, carrying out works reception, power density measurements, homologation processes, and other specialized technical evaluations.`,
    },
    missionTitle: { es: "Misión",  en: "Mission" },
    missionText: {
      es: "Entregar servicios de auditoría y consultoría técnica con altos estándares de calidad, orientados al cumplimiento normativo y a la optimización de los procesos de nuestros clientes, aportando soluciones confiables que fortalezcan su desempeño y competitividad en el mercado.",
      en: "To deliver audit and technical consulting services with the highest quality standards, oriented towards regulatory compliance and the optimisation of our clients' processes, providing reliable solutions that strengthen their performance and competitiveness in the market.",
    },
    visionTitle: { es: "Visión",  en: "Vision" },
    visionText: {
      es: "Consolidarnos como un referente en servicios técnicos y regulatorios especializados, reconocidos por la excelencia profesional, la independencia de nuestros análisis y la capacidad de generar valor sostenido para nuestros clientes y el sector.",
      en: "To establish ourselves as a benchmark in specialised technical and regulatory services, recognised for professional excellence, the independence of our analyses, and our ability to generate sustained value for our clients and the sector.",
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
    seniority:  { es: "Antigüedad", en: "Tenure" },
    roles: {
      ceoFounder:       { es: "CEO & Fundador",         en: "CEO & Founder" },
      fieldSupervisor:  { es: "Supervisor de Terreno", en: "Field Supervisor" },
      chargeOf:         { es: "Encargado de",          en: "In charge of" },
    },
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
        es: "Certificación y Homologación",
        en: "Certification & Homologation",
      },
      descripcion: {
        es: "Gestión completa del proceso de certificación ante organismos reguladores.",
        en: "Full management of the certification process before regulatory bodies.",
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
