export type Lang = "es" | "en";

const translations = {
  // ─── NAVBAR ────────────────────────────────────────────
  nav: {
    inicio:       { es: "Inicio",              en: "Home" },
    nosotros:     { es: "Nosotros",            en: "About Us" },
    servicios:    { es: "Servicios",           en: "Services" },
    homologacion: { es: "Homologación",        en: "Homologation" },
    mediciones:   { es: "Mediciones de Campo", en: "Field Measurements" },
    operadores:   { es: "Operadores/Empresas", en: "Operators/Companies" },
    personas:     { es: "Personas Naturales",  en: "Individuals" },
    contactanos:  { es: "Contactanos",         en: "Contact" },
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

  // ─── SERVICES ──────────────────────────────────────────
  services: {
    // Homologación (área principal)
    homologacion: {
      titulo: {
        es: "Homologación de Terminales Móviles",
        en: "Mobile Terminal Homologation",
      },
      subtitulo: {
        es: "Empresa Certificadora autorizada por SUBTEL desde 2016. Certificamos dispositivos que se conectan a la Red Móvil en Chile bajo la normativa 1463 y 1474.",
        en: "Certification company authorized by SUBTEL since 2016. We certify devices connecting to Chile's Mobile Network under regulations 1463 and 1474.",
      },
      h1: {
        titulo: {
          es: "Certificación Prototipo (H1)",
          en: "Prototype Certification (H1)",
        },
        descripcion: {
          es: "Proceso que permite certificar modelos de equipos terminales de telefonía móvil y acceso a Internet para su comercialización en Chile. Incluye pruebas en Laboratorios de Ingeaudit, Sala común SAE oficial, verificación de desbloqueo y registro de parámetros que garantizan el cumplimiento de la normativa 1463 y 1474 de 2016.",
          en: "Process to certify mobile terminal and internet access device models for commercialization in Chile. Includes tests at Ingeaudit Laboratories, official SAE common room, unlocking verification and parameter registration ensuring compliance with regulations 1463 and 1474 of 2016.",
        },
      },
      h2: {
        titulo: {
          es: "Certificación Embarques (H2)",
          en: "Shipment Certification (H2)",
        },
        descripcion: {
          es: "Proceso que valida los embarques asociados a modelos ya certificados mediante H1. Este proceso se realiza anualmente en base a muestreo y en laboratorio de Operador Logístico de empresa, asegurando la consistencia del lote con el modelo original certificado.",
          en: "Process that validates shipments associated with models already certified through H1. This process is conducted annually based on sampling at the company's Logistics Operator laboratory, ensuring batch consistency with the originally certified model.",
        },
      },
      h3: {
        titulo: {
          es: "Inscripción Administrativa (H3)",
          en: "Administrative Registration (H3)",
        },
        descripcion: {
          es: "Proceso excepcional que permite a personas naturales certificar documentalmente equipos terminales de telefonía móvil comprados en el extranjero, para su uso en Chile. Si planeas permanecer más de 30 días, debes realizar este trámite.",
          en: "Exceptional process that allows individuals to documentarily certify mobile terminal equipment purchased abroad for use in Chile. If you plan to stay more than 30 days, this registration is required.",
        },
        precio: {
          label: {
            es: "Precio por equipo",
            en: "Price per device",
          },
          valor: {
            es: "$15.000 CLP",
            en: "$15.000 CLP",
          },
        },
        plazo: {
          label: {
            es: "Plazo de certificación",
            en: "Certification turnaround",
          },
          valor: {
            es: "6 horas hábiles",
            en: "6 business hours",
          },
        },
        requisitos: {
          label: {
            es: "Documentos requeridos",
            en: "Required documents",
          },
          items: {
            es: [
              "Copia RUN ambos lados",
              "Imágenes del número IMEI impreso en el equipo o del obtenido por *#06#",
              "Marca del equipo terminal",
              "Modelo del equipo terminal",
              "Documento de compra o acreditación de permanencia en el extranjero",
              "Firma del Formulario de Solicitud de Inscripción Administrativa",
            ],
            en: [
              "Copy of RUN (both sides)",
              "Images of the IMEI printed on the device or obtained via *#06#",
              "Device brand",
              "Device model",
              "Purchase document or proof of residence abroad",
              "Signed Administrative Registration Request Form",
            ],
          },
        },
        links: {
          ingresar: {
            label: {
              es: "Ingresar Solicitud",
              en: "Submit Request",
            },
            url: "http://listotuimei.cl/tienda/",
          },
          buscar: {
            label: {
              es: "Buscar Solicitud",
              en: "Track Request",
            },
            url: "http://ingeaudit.ingeauditech.cl/buscador_solicitud.php",
          },
        },
        seguimiento: {
          label: {
            es: "Seguimiento por compañía (ingresa tu IMEI)",
            en: "Track by carrier (enter your IMEI)",
          },
          operadores: [
            { nombre: "CLARO",    url: "https://www.clarochile.cl" },
            { nombre: "ENTEL",    url: "https://www.entel.cl" },
            { nombre: "WOM",      url: "https://www.wom.cl" },
            { nombre: "MOVISTAR", url: "https://www.movistar.cl" },
          ],
        },
        nota: {
          es: "Ingeaudit Ltda. está facultada para cobrar por este servicio (Res. Ex. N°1463 de SUBTEL, 2016, Art. 7°). También puedes acceder a este servicio de forma gratuita en otras Empresas Certificadoras en www.multibanda.cl.",
          en: "Ingeaudit Ltda. is authorized to charge for this service (SUBTEL Res. Ex. N°1463, 2016, Art. 7). You can also access this service for free at other Certified Companies at www.multibanda.cl.",
        },
      },
      solicitud: {
        presencial: {
          titulo: {
            es: "Atención Presencial",
            en: "In-Person Service",
          },
          horario: {
            es: "Lunes a Viernes · 10:00 a 17:00 hrs",
            en: "Monday to Friday · 10:00 to 17:00 hrs",
          },
          direccion: {
            es: "Los Llanes 86B, Las Condes · (El formulario se llena en oficina)",
            en: "Los Llanes 86B, Las Condes · (Form filled out on-site)",
          },
          telefono: {
            es: "Atención telefónica: Lunes a Viernes · 10:00 a 13:00 hrs",
            en: "Phone support: Monday to Friday · 10:00 to 13:00 hrs",
          },
        },
        remota: {
          titulo: {
            es: "Atención Remota",
            en: "Remote Service",
          },
          descripcion: {
            es: "Ingresa o busca tu solicitud de certificación en línea a través de nuestra plataforma. Dudas: certificacion@ingeaudit.cl",
            en: "Submit or track your certification request online through our platform. Questions: certificacion@ingeaudit.cl",
          },
        },
      },
    },

    // Otros servicios (sidebar)
    otherServices: [
      {
        titulo: {
          es: "Mediciones de Campo",
          en: "Field Measurements",
        },
        descripcion: {
          es: "Mediciones técnicas especializadas para garantizar el cumplimiento de estándares normativos.",
          en: "Specialised technical measurements to ensure compliance with regulatory standards.",
        },
      },
      {
        titulo: {
          es: "Auditoría de Cumplimiento",
          en: "Regulatory Compliance Audit",
        },
        descripcion: {
          es: "Auditoría conforme a los lineamientos del SERNAC.",
          en: "Audit conducted in accordance with SERNAC guidelines.",
        },
      },
      {
        titulo: {
          es: "Obtención de Permisos y Concesiones",
          en: "Obtaining Permits & Concessions",
        },
        descripcion: {
          es: "Permisos para operadores y apoyo en fusión de competidores.",
          en: "Permits for operators and support in competitor mergers.",
        },
      },
      {
        titulo: {
          es: "Asesorías Regulatorias",
          en: "Regulatory Advisory",
        },
        descripcion: {
          es: "Defensa regulatoria ante SUBTEL, informes y apoyo estratégico.",
          en: "Regulatory defence before SUBTEL, reports, and strategic support.",
        },
      },
      {
        titulo: {
          es: "Auditorías Tecnológicas",
          en: "Technology Audits",
        },
        descripcion: {
          es: "Auditorías de cumplimiento y boletas de cobro por espectro.",
          en: "Compliance audits and spectrum fee invoice audits.",
        },
      },
    ],
  },

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

  // ─── HOMOLOGACIÓN page hero ─────────────────────────────
  homologacionPage: {
    title: { es: "Homologación de Equipos", en: "Equipment Homologation" },
    cta:   { es: "Conoce más",              en: "Learn more" },
  },

  // ─── PERSONAS page hero ─────────────────────────────
  personasPage: {
    title: { es: "Homologación de Equipos", en: "Equipment Homologation" },
    cta:   { es: "Conoce más",              en: "Learn more" },
  },

  // ─── MEDICIONES page hero ─────────────────────────────
  medicionesPage: {
    title: { es: "Servicio de Regulación - Mediciones de Campo", en: "Regulation Service - Field Measurements" },
    cta:   { es: "Conoce más",              en: "Learn more" },
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