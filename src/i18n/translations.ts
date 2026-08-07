export type Lang = "es" | "en";

const translations = {
  // ─── NAVBAR ────────────────────────────────────────────
  nav: {
    inicio: { es: "Inicio", en: "Home" },
    nosotros: { es: "Nosotros", en: "About Us" },
    servicios: { es: "Servicios", en: "Services" },
    homologacion: { es: "Homologación", en: "Homologation" },
    mediciones: { es: "Mediciones de Campo", en: "Field Measurements" },
    operadores: { es: "Operadores/Empresas", en: "Operators/Companies" },
    personas: { es: "Personas Naturales", en: "Individuals" },
    contactanos: { es: "Contactanos", en: "Contact" },
  },

  // ─── HERO (página principal) ───────────────────────────
  hero: {
    typeSequence: {
      es: [
        "Homologación, Consultoría",
      ],
      en: [
        "Certification, Consulting",
      ],
    },
    SaltoLineaType: {
      es: [
        "y Mediciones de Campo",
      ],
      en: [
        "& Field Measurements",
      ],
    },
    leadingLine: { es: "Expertos en", en: "Experts in" },
    subtitle: {
      es: "Más de 20 años de experiencia respaldando a la industria de las telecomunicaciones",
      en: "Over 20 years of experience supporting the telecommunications industry",
    },
  },

  // ─── ABOUT ─────────────────────────────────────────────
  about: {
    whoTitle: { es: "¿Quiénes Somos?", en: "Who Are We?" },
    whoText: {
      es: `Consultora fundada en 2004, especializada en telecomunicaciones y tecnologías de la información. Hemos trabajado con empresas líderes como Claro, Entel, WOM, Motorola y Otros, realizando homologaciones, mediciones de densidad de potencia, recepción de obras y auditorías técnicas especializadas.`,
      en: `Consulting firm founded in 2004, specialized in telecommunications and information technologies. We have worked with leading companies such as Claro, Entel, WOM, Motorola and Others, performing homologations, power density measurements, site receptions, and specialized technical audits.`,
    },
    missionTitle: { es: "Misión", en: "Mission" },
    missionText: {
      es: "Entregar servicios de auditoría y consultoría tecnologica con los más altos estándares de calidad, garantizando cumplimiento normativo y optimización de procesos.",
      en: "Deliver audit and technological consulting services with the highest quality standards, ensuring regulatory compliance and process optimization.",
    },
    visionTitle: { es: "Visión", en: "Vision" },
    visionText: {
      es: "Ser el referente en servicios técnicos y regulatorios especializados, reconocidos por la excelencia profesional y la capacidad de generar valor sostenido.",
      en: "To be the benchmark in specialized technical and regulatory services, recognized for professional excellence and ability to generate sustained value.",
    },
  },

  // ─── TEAM ──────────────────────────────────────────────
  team: {
    title: { es: "Nuestro Equipo", en: "Our Team" },
    subtitle: {
      es: "Profesionales con amplia experiencia en telecomunicaciones y regulación.",
      en: "Professionals with extensive experience in telecommunications and regulation.",
    },
    email: { es: "Correo", en: "Email" },
    phone: { es: "Teléfono", en: "Phone" },
    seniority: { es: "Antigüedad", en: "Tenure" },
    ceoQuote: {
      es: "Nuestro compromiso es entregar soluciones técnico-regulatorias que generen valor real para nuestros clientes, respaldados por más de 20 años de experiencia en la industria de las telecomunicaciones.",
      en: "Our commitment is to deliver technical-regulatory solutions that generate real value for our clients, backed by over 20 years of experience in the telecommunications industry."
    },
    roles: {
      ceoFounder: { es: "CEO & Fundador", en: "CEO & Founder" },
      fieldSupervisor: { es: "Supervisor de Terreno", en: "Field Supervisor" },
      chargeOf: { es: "Encargado de", en: "In charge of" },
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

  // METRICAS
  metricas:{
    titulo:{
      es: "¿Por qué elegir INGEAUDIT?",
      en: "Why Choose INGEAUDIT?",
    },
    cantidadPrevisitas: {
      es: "Previsitas a la fecha",
      en: "Pre-site visits to date",
    },
    cantidadAntenas: {
      es: "Antenas medidas en todo Chile",
      en: "Antennas measured across Chile",
    },
    cantidadHomologacion: {
      es: "Equipos homologados a la fecha",
      en: "Devices approved to date",
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
          es: "Proceso de certificación de modelos de equipos terminales de telefonía móvil y acceso a internet para su comercialización en el país, mediante pruebas en laboratorios de Ingeaudit, sala común SAE oficial, verificación de desbloqueo y validación de parámetros conforme a la normativa 1463 y 1474 de 2016.",
          en: "Process for certifying models of mobile telephony and internet access terminal equipment for commercialization in the country, through testing in Ingeaudit laboratories, an official SAE common room, device unlock verification, and validation of parameters in accordance with regulations 1463 and 1474 of 2016.",
        },
      },
      h2: {
        titulo: {
          es: "Certificación Embarques (H2)",
          en: "Shipment Certification (H2)",
        },
        descripcion: {
          es: "Proceso que permite realizar la validación de los embarques asociados a modelos ya certificados mediante H1. Este proceso se hace en base a muestreo y en laboratorio de Operador Logístico de empresa.",
          en: "Process that enables the validation of shipments associated with models already certified through H1. This process is carried out based on sampling and at the company's Logistics Operator laboratory.",
        },
      },
      h3: {
        titulo: {
          es: "Inscripción Administrativa (H3)",
          en: "Administrative Registration (H3)",
        },
        descripcion: {
          es: "Proceso excepcional que permite a personas naturales certificar documentalmente equipos terminales de telefonía móvil comprados en el extranjero, para su uso en Chile.",
          en: "Exceptional process that allows individuals to documentarily certify mobile terminal equipment purchased abroad for use in Chile.",
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
            { nombre: "CLARO", url: "https://digital.clarochile.cl/consulta_imei/" },
            { nombre: "ENTEL", url: "https://www.entel.cl/nueva-normativa" },
            { nombre: "WOM", url: "https://www.wom.cl/sello-multibandas/" },
            { nombre: "MOVISTAR", url: "https://ww2.movistar.cl/terminos-regulaciones/multibanda-sae/consulta-imei/" },
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

  //MEDICIONES
  mediciones:{
    badge: {
      es: "mediciones y más",
      en: "Measurements and More",
    },
    titulo:{
      es: "Mediciones de Campo",
      en: "Field Measurements",
    },
    subtitulo:{
      es: "Experto en medición de Densidad de Potencia",
      en: "Experts in Power Density Measurement",
    },
    cards: {
      saberMas: { es: "Saber más", en: "Learn more" },
      verMenos: { es: "Ver menos", en: "Show less" },
      incluye: { es: "El servicio incluye", en: "The service includes" },
      detalleTecnico: { es: "Detalle técnico", en: "Technical details" },
      duracionLabel: { es: "Duración estimada", en: "Estimated duration" },
      equipamientoLabel: { es: "Equipamiento utilizado", en: "Equipment used" },
      normativaLabel: { es: "Normativa aplicable", en: "Applicable regulation" },
      solicitarServicio: { es: "Solicitar este servicio", en: "Request this service" },
      card1: {
        title: { es: "Recepciones de Obra", en: "Site Receptions" },
        description: {
          es: "Verificación técnica de infraestructura de telecomunicaciones para garantizar el cumplimiento normativo en nuevas instalaciones.",
          en: "Technical verification of telecommunications infrastructure to ensure regulatory compliance in new installations.",
        },
        details: {
          item1: { es: "Inspección visual y técnica de la infraestructura instalada.", en: "Visual and technical inspection of the installed infrastructure." },
          item2: { es: "Revisión de antenas, cableado, soportes, energía y puesta a tierra.", en: "Review of antennas, cabling, supports, power systems, and grounding." },
          item3: { es: "Validación de la instalación conforme al proyecto y la normativa aplicable.", en: "Validation of the installation against the project specifications and applicable regulations." },
          item4: { es: "Entrega de registro fotográfico, observaciones e informe técnico.", en: "Delivery of photographic records, findings, and a technical report." },
          item5: { es: "Coordinación con el mandante y disponibilidad de acceso al sitio.", en: "Coordination with the client and site access availability." },
        },
        duracion: { es: "1 a 2 días por sitio, según complejidad.", en: "1 to 2 days per site, depending on complexity." },
        equipamiento: { es: "Cámara termográfica, telémetro láser y medidor de puesta a tierra.", en: "Thermal camera, laser rangefinder, and grounding tester." },
        normativa: { es: "Conforme al proyecto técnico aprobado y normativa SUBTEL vigente.", en: "In accordance with the approved technical project and current SUBTEL regulations." },
      },
      card2: {
        title: { es: "Medición 5G", en: "5G Measurement" },
        description: {
          es: "Mediciones especializadas en redes 5G y bandas de alta frecuencia para validar cobertura y calidad de señal.",
          en: "Specialized measurements on 5G networks and high-frequency bands to validate coverage and signal quality.",
        },
        details: {
          item1: { es: "Evaluación de cobertura y comportamiento de la señal 5G.", en: "Assessment of 5G signal coverage and performance." },
          item2: { es: "Medición en bandas de alta frecuencia y distintos escenarios de operación.", en: "Measurement in high-frequency bands and different operating scenarios." },
          item3: { es: "Identificación de zonas con baja cobertura o posibles interferencias.", en: "Identification of low-coverage areas or potential interference." },
          item4: { es: "Informe de resultados con registros y conclusiones técnicas.", en: "Results report with records and technical conclusions." },
          item5: { es: "Pruebas en horario de máxima demanda para validar comportamiento real.", en: "Testing during peak-demand hours to validate real-world behavior." },
        },
        duracion: { es: "Depende del número de sitios y puntos a evaluar.", en: "Depends on the number of sites and points to evaluate." },
        equipamiento: { es: "Analizador de espectro R&S y sonda de banda ancha para 5G NR.", en: "R&S spectrum analyzer and wideband probe for 5G NR." },
        normativa: { es: "Bandas asignadas según concesión y normativa técnica de SUBTEL.", en: "Bands assigned according to concession and SUBTEL technical regulations." },
      },
      card3: {
        title: { es: "Densidad de Potencia", en: "Power Density" },
        description: {
          es: "Medición de densidad de potencia en todas las bandas (700 MHz a 26 GHz) con equipos de última generación R&S y Aaronia.",
          en: "Power density measurement across all bands (700 MHz to 26 GHz) with state-of-the-art R&S and Aaronia equipment.",
        },
        details: {
          item1: { es: "Mediciones entre 700 MHz y 26 GHz según las condiciones del sitio.", en: "Measurements from 700 MHz to 26 GHz according to site conditions." },
          item2: { es: "Uso de instrumentación especializada R&S y Aaronia.", en: "Use of specialized R&S and Aaronia instrumentation." },
          item3: { es: "Comparación de resultados con los límites normativos aplicables.", en: "Comparison of results with applicable regulatory limits." },
          item4: { es: "Informe técnico con puntos medidos, valores obtenidos y respaldo fotográfico.", en: "Technical report with measured points, obtained values, and photographic evidence." },
          item5: { es: "Medición en puntos críticos definidos según el entorno del sitio.", en: "Measurement at critical points defined according to the site's surroundings." },
        },
        duracion: { es: "Según cantidad de sitios; usualmente medio día por punto.", en: "Depends on the number of sites; usually half a day per point." },
        equipamiento: { es: "Sonda isotrópica Aaronia y analizador de espectro R&S.", en: "Aaronia isotropic probe and R&S spectrum analyzer." },
        normativa: { es: "D.S. N°476/1994 sobre límites de exposición a radiaciones no ionizantes.", en: "D.S. No. 476/1994 on non-ionizing radiation exposure limits." },
      },
      card4: {
        title: { es: "Auditoría en Terreno", en: "Field Audit" },
        description: {
          es: "Inspección técnica en sitio para validar el cumplimiento de estándares normativos y condiciones de operación.",
          en: "On-site technical inspection to validate compliance with regulatory standards and operating conditions.",
        },
        details: {
          item1: { es: "Levantamiento de las condiciones reales de operación en terreno.", en: "Survey of actual operating conditions on site." },
          item2: { es: "Verificación de equipamiento, configuración e infraestructura disponible.", en: "Verification of equipment, configuration, and available infrastructure." },
          item3: { es: "Detección de desviaciones, incumplimientos y oportunidades de mejora.", en: "Detection of deviations, non-compliance, and improvement opportunities." },
          item4: { es: "Emisión de informe técnico con hallazgos y recomendaciones.", en: "Issuance of a technical report with findings and recommendations." },
          item5: { es: "Levantamiento fotográfico y registro de evidencias en terreno.", en: "Photographic survey and on-site evidence recording." },
        },
        duracion: { es: "Aproximadamente 1 día por sitio auditado.", en: "Approximately 1 day per audited site." },
        equipamiento: { es: "Equipos de medición certificados y checklist normativo.", en: "Certified measurement equipment and regulatory checklist." },
        normativa: { es: "Cumplimiento del proyecto técnico y normativa vigente aplicable.", en: "Compliance with the technical project and applicable current regulations." },
      },
    },
  },

  // NECESITAS CERTIFICACION
  necesitasCertificacion: {
    titulo: {
      es: "¿Necesitas una certificación o asesoría técnica?",
      en: "Do you need a certification or technical advisory?",
    },
    subtitulo: {
      es: "Contáctanos y uno de nuestros especialistas te orientará en el proceso.",
      en: "Contact us and one of our specialists will guide you through the process.",
    },
    cta: { es: "Contáctanos", en: "Contact Us" },
  },

  //PERSONAS NATURALES

  // ── Hero ────────────────────────────────────────────────────────────────
  personasNaturales: {
    hero: {
      badge: {
        es: "Inscripción Administrativa · H3",
        en: "Administrative Registration · H3",
      },
      titulo: {
        es: "Personas Naturales",
        en: "Individuals",
      },
      subtitulo: {
        es: "Proceso excepcional que permite a personas naturales certificar documentalmente equipos terminales de telefonía móvil comprados en el extranjero, para su uso en Chile.",
        en: "Exceptional process that allows individuals to documentarily certify mobile terminal equipment purchased abroad for use in Chile.",
      },
    },

    // ── Intro ──────────────────────────────────────────────────────────────
    intro: {
      badge: {
        es: "Inscripción Administrativa (H3)",
        en: "Administrative Registration (H3)",
      },
      autorizada: {
        es: "Esta Empresa Certificadora está autorizada para cobrar por todas las Inscripciones Administrativas (Res. Ex. N°1463 de SUBTEL del año 2016, Artículo 7°). El costo por cada teléfono es de $15.000.",
        en: "This Certification Company is authorized to charge for all Administrative Registrations (SUBTEL Res. Ex. N°1463, 2016, Art. 7°). The cost per device is $15,000 CLP.",
      },
    },

    // ── Callout (extranjero en Chile) ──────────────────────────────────────
    callout: {
      title: {
        es: "Soy extranjero, viajo a Chile (o estoy en Chile) y quiero usar mi teléfono con una SIM Card local",
        en: "I am a foreigner traveling to Chile (or already in Chile) and I want to use my phone with a local SIM Card",
      },
      step1: {
        es: "1. Si su permanencia en Chile será superior a 30 días, deberá realizar una Inscripción Administrativa (IA) en el sistema, para poder seguir usando su teléfono móvil en Chile, después de los 30 días de activado su equipo en la red.",
        en: "1. If your stay in Chile will exceed 30 days, you must complete an Administrative Registration (IA) to continue using your mobile phone in Chile after 30 days of activating your device on the network.",
      },
      step2: {
        es: "2. Para realizar la IA, puede hacerlo en nuestros portales (Solicitud y Formularios → Remota → Ingresar Solicitud de Certificación) o contactarse con otra empresa homologadora en www.multibanda.cl.",
        en: "2. To complete the IA, you can do so through our portals (Request and Forms → Remote → Submit Certification Request) or contact another certified company at www.multibanda.cl.",
      },
    },

    // ── Requisitos ─────────────────────────────────────────────────────────
    requisitos: {
      titulo: {
        es: "¿Qué debe entregar el Usuario?",
        en: "What does the User need to provide?",
      },
      desc: {
        es: "Acorde a lo instruido por SUBTEL, la información a entregar por el usuario es la siguiente:",
        en: "According to SUBTEL's instructions, the information the user must provide is as follows:",
      },
      descargar: {
        es: "Descargar Formulario",
        en: "Download Form",
      },
    },

    // ── Precio ─────────────────────────────────────────────────────────────
    precio: {
      titulo: {
        es: "¿Qué precio tiene el Servicio de Inscripción Administrativa?",
        en: "What is the price of the Administrative Registration Service?",
      },
      desc: {
        es: "Informamos a usted que el precio del servicio de inscripción administrativa es de $15.000 por cada equipo. INGEAUDIT Ltda. de acuerdo a la regulación vigente de SUBTEL (Res. N°1463) superó el 2% de las inscripciones administrativas, por lo que está facultada para realizar el cobro por cada inscripción.",
        en: "We inform you that the price of the administrative registration service is $15,000 per device. INGEAUDIT Ltda., in accordance with current SUBTEL regulation (Res. N°1463), exceeded 2% of administrative registrations and is therefore authorized to charge for each registration.",
      },
      nota: {
        es: "Para continuar con tu inscripción te invitamos a efectuar pago a través de la plataforma de listo tu IMEI o en nuestras oficinas.",
        en: "To proceed with your registration, we invite you to make payment through the listo tu IMEI platform or at our offices.",
      },
    },

    // ── Solicitud y Formularios ────────────────────────────────────────────
    solicitud: {
      titulo: {
        es: "Solicitud y Formularios",
        en: "Request and Forms",
      },
      presencial: {
        docsLabel: {
          es: "Documentos y Terminal",
          en: "Documents and Device",
        },
        sucursales: {
          es: "Sucursales",
          en: "Branch Offices",
        },
      },
    },
  },

  // ─── CERTIFICATIONS ────────────────────────────────────
  certifications: {
    sectionTitle: { es: "Certificaciones", en: "Certifications" },
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
          es: "Prestamos servicios de auditoría contable y tributaria a empresas del sector de telecomunicaciones, con énfasis en la verificación del cumplimiento normativo sectorial. Contamos con experiencia en auditorías realizadas ante SERNAC y otros organismos estatales. Ingeaudit Ltda. y el auditor responsable de asesorar a nuestra empresa cuentan con certificación vigente ante la Comisión para el Mercado Financiero (CMF). Ambos certificados están disponibles para su consulta en el siguiente enlace.",
          en: "We provide accounting and tax audit services to companies in the telecommunications sector, with an emphasis on verifying sector-specific regulatory compliance. We have experience conducting audits before SERNAC and other state agencies. Ingeaudit Ltda. and the auditor responsible for advising our company hold current certification with the Financial Market Commission (CMF). Both certificates are available for review at the following link.",
        },
        enlaces: [
          {
            label: { es: "Ver certificado Ingeaudit", en: "View Ingeaudit certificate" },
            href: "/certificaciones/ingeaudit-cmf.pdf",
          },
          {
            label: { es: "Ver certificado auditor", en: "View auditor certificate" },
            href: "/certificaciones/auditor-cmf.pdf",
          },
        ],
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

  // ─── CLIENTS ───────────────────────────────────────────
  clients: {
    label: { es: "Confían en nosotros", en: "They trust us" },
  },

  // ─── FOOTER ────────────────────────────────────────────
  footer: {
    tagline: {
      es: "Expertos en soluciones técnico-regulatorias, medición del espectro electromagnético y homologación de equipos.",
      en: "Experts in technical-regulatory solutions, electromagnetic spectrum measurement, and equipment homologation.",
    },
    legal: { es: "LEGAL", en: "LEGAL" },
    certifications: { es: "Certificaciones", en: "Certifications" },
    securityPolicy: { es: "Políticas de Seguridad", en: "Security Policies" },
    workWithUs: { es: "Trabaja con Nosotros", en: "Work With Us" },
    interestLinks: { es: "Links de Interés", en: "Links of Interest" },
    copyright: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  },

  // ─── NOSOTROS page hero ────────────────────────────────
  nosotrosPage: {
    badge: {es: "Expertos", en: "Experts"},
    title: { es: "EQUIPO", en: "TEAM" },
    subtitle: {
      es: "Más de 20 años de experiencia en consultoría técnico-regulatoria para el sector de telecomunicaciones en Chile",
      en: "Over 20 years of experience in technical-regulatory consulting for the telecommunications industry in Chile",
    },
  },

  // ─── SERVICIOS page hero ───────────────────────────────
  serviciosPage: {
    title: { es: "Portafolio de Servicios", en: "Services Portfolio" },
    subtitle: {
      es: "Soluciones integrales en telecomunicaciones bajo cumplimiento normativo y excelencia técnica.",
      en: "Comprehensive telecommunications solutions under regulatory compliance and technical excellence.",
    },
    cards: [
      {
        badge: { es: "SERVICIOS TÉCNICOS", en: "TECHNICAL SERVICES" },
        title: { es: "Mediciones de Campo", en: "Field Measurements" },
        description: {
          es: "Verificación técnica y validación de redes para asegurar la calidad y el cumplimiento.",
          en: "Technical verification and network validation to ensure quality and compliance.",
        },
        items: {
          es: ["Recepciones de Obra", "Densidad de Potencia", "Cumplimiento Normativo"],
          en: ["Site Receptions", "Power Density", "Regulatory Compliance"],
        },
        cta: { es: "MÁS INFORMACIÓN", en: "MORE INFO" },
        href: "/servicios/mediciones",
      },
      {
        badge: { es: "CUMPLIMIENTO LEGAL", en: "LEGAL COMPLIANCE" },
        title: { es: "Asesorías Regulatorias", en: "Regulatory Advisory" },
        description: {
          es: "Representación experta y gestión de requisitos ante organismos reguladores.",
          en: "Expert representation and requirements management before regulatory bodies.",
        },
        items: {
          es: ["Defensa ante SUBTEL", "Informes Regulatorios", "Gestión Normativa"],
          en: ["SUBTEL Defense", "Regulatory Reports", "Normative Management"],
        },
        cta: { es: "SOLICITAR ASESORÍA", en: "REQUEST ADVISORY" },
        href: "/contactanos",
      },
      {
        badge: { es: "VALIDACIÓN DE DISPOSITIVOS", en: "DEVICE VALIDATION" },
        title: { es: "Certificación y Homologación", en: "Certification & Homologation" },
        description: {
          es: "Acreditación de terminales móviles para su operación en el mercado nacional.",
          en: "Accreditation of mobile terminals for operation in the national market.",
        },
        items: {
          es: ["Homologación de Móviles", "Normativa Técnica", "Acceso al Mercado"],
          en: ["Mobile Homologation", "Technical Standards", "Market Access"],
        },
        cta: { es: "INICIAR HOMOLOGACIÓN", en: "START HOMOLOGATION" },
        href: "/servicios/homologacion/personas",
      },
    ],
  },

  // ─── HOMOLOGACIÓN page hero ─────────────────────────────
  homologacionPage: {
    title: { es: "Homologación de Equipos", en: "Equipment Homologation" },
    cta: { es: "Conoce más", en: "Learn more" },
  },

  // ─── PERSONAS page hero ─────────────────────────────
  personasPage: {
    title: { es: "Homologación de Equipos", en: "Equipment Homologation" },
    cta: { es: "Conoce más", en: "Learn more" },
  },

  // ─── MEDICIONES page hero ─────────────────────────────
  medicionesPage: {
    title: { es: "Servicio de Regulación - Mediciones de Campo", en: "Regulation Service - Field Measurements" },
    cta: { es: "Conoce más", en: "Learn more" },
  },

  // ─── OPERADORES / EMPRESAS page ────────────────────────
  operadoresPage: {
    hero: {
      badge: { es: "Excelencia Técnica", en: "Technical Excellence" },
      title: { es: "Operadores / Empresas", en: "Operators / Companies" },
      subtitle: {
        es: "Soluciones integrales de cumplimiento normativo y aseguramiento de calidad para la industria de telecomunicaciones.",
        en: "Comprehensive regulatory compliance and quality assurance solutions for the telecommunications industry.",
      },
    },
    h1: {
      badge: { es: "Módulo H1", en: "Module H1" },
      cta: { es: "Solicitar Certificación H1", en: "Request H1 Certification" },
    },
    h2: {
      badge: { es: "Módulo H2", en: "Module H2" },
      cta: { es: "Gestionar Embarque H2", en: "Manage H2 Shipment" },
    },
  },

  // ─── IMEI GUIDE ────────────────────────────────────────
  imeiNote: {
    es: "Ingeaudit Ltda. está facultada para cobrar por este servicio (Res. Ex. N°1463 de SUBTEL, 2016, Art. 7°).",
    en: "Ingeaudit Ltda. is authorized to charge for this service (SUBTEL Res. Ex. N°1463, 2016, Art. 7).",
  },

  imeiGuide: {
    heading: {
      es: "Cómo obtener el IMEI de tu equipo",
      en: "How to get your device IMEI",
    },
    prev: { es: "Anterior", en: "Previous" },
    next: { es: "Siguiente", en: "Next" },
    steps: {
      step1: {
        lbl: { es: "Paso 1", en: "Step 1" },
        dsc: {
          es: "Abre el marcador de tu teléfono y escribe el código *#06# — el IMEI aparece automáticamente sin necesidad de llamar.",
          en: "Open the dialer on your phone and dial *#06# — the IMEI appears automatically without needing to call.",
        },
        screenLabel: { es: "Marcador", en: "Dialer" },
      },
      step2: {
        lbl: { es: "Paso 2", en: "Step 2" },
        dsc: {
          es: "El número IMEI de 15 dígitos aparece en pantalla. Si tienes dual SIM verás dos números.",
          en: "A 15-digit IMEI number will appear on screen. If your device has dual SIM, you will see two numbers.",
        },
        screenTitle: { es: "Información del \ndispositivo", en: "Device \ninformation" },
        screenImei: { es: "IMEI", en: "IMEI" },
        screenImei2: { es: "IMEI 2 (dual SIM)", en: "IMEI 2 (dual SIM)" },
      },
      step3: {
        lbl: { es: "Paso 3", en: "Step 3" },
        dsc: {
          es: "Toma una captura de pantalla del número IMEI. Lo necesitarás para el trámite de Inscripción Administrativa.",
          en: "Take a screenshot of the IMEI number. You will need it for the Administrative Registration process.",
        },
        screenLabel: { es: "Tu IMEI es:", en: "Your IMEI is:" },
        screenHint: { es: "Toma una captura de pantalla", en: "Take a screenshot" },
      },
      step4: {
        lbl: { es: "Paso 4", en: "Step 4" },
        dsc: {
          es: "Con tu IMEI listo, ingresa tu solicitud en el portal de Ingeaudit o visítanos presencialmente en nuestras sucursales.",
          en: "With your IMEI ready, submit your request through the Ingeaudit portal or visit one of our offices in person.",
        },
        screenSuccess: { es: "¡IMEI obtenido!", en: "IMEI obtained!" },
        screenHint: { es: "Ingresa tu solicitud en nuestro portal", en: "Submit your request on our portal" },
      },
    },
  },

  // ─── FAQ HOMOLOGACIÓN ───────────────────────────
faqHomologacion: {
  titulo: {
    es: "Preguntas Frecuentes",
    en: "Frequently Asked Questions",
  },
  preguntas: [
    {
      pregunta: {
        es: "¿Qué es la Inscripción Administrativa (H3) y cuándo la necesito?",
        en: "What is Administrative Registration (H3) and when do I need it?",
      },
      respuesta: {
        es: "La Inscripción Administrativa H3 es el trámite que debes realizar si trajiste un teléfono u otro dispositivo móvil desde el extranjero para uso personal. Sin este trámite, el equipo puede quedar bloqueado o sin servicio en las redes chilenas.",
        en: "The H3 Administrative Registration is the procedure you must complete if you brought a phone or another mobile device from abroad for personal use. Without this process, the device may be blocked or unable to access Chilean mobile networks.",
      },
    },
    {
      pregunta: {
        es: "¿Qué necesito para hacer el trámite H3?",
        en: "What do I need to complete the H3 process?",
      },
      respuesta: {
        es: "Solo necesitas el IMEI de tu equipo (código de 15 dígitos que obtienes marcando *#06# en tu teléfono), tu RUT y los datos básicos del dispositivo como marca y modelo. Con esa información puedes iniciar la solicitud directamente en nuestro portal o visitándonos en sucursal.",
        en: "You only need your device's IMEI (the 15-digit code obtained by dialing *#06# on your phone), your national ID (RUT), and basic device details such as brand and model. With that information you can start the request directly on our portal or by visiting one of our offices.",
      },
    },
    {
      pregunta: {
        es: "¿Cuánto cuesta y cuánto demora el trámite?",
        en: "How much does it cost and how long does it take?",
      },
      respuesta: {
        es: "Ingeaudit está facultada por SUBTEL para cobrar un arancel por este servicio según la Resolución Exenta N°1463 de 2016. Una vez que la documentación esté completa, el proceso de homologación tardará 6 horas hábiles.",
        en: "Ingeaudit is authorized by SUBTEL to charge a fee for this service under Resolution N°1463 of 2016. Once the documentation is complete, the homologation process will take 6 business hours.",
      },
    },
    {
      pregunta: {
        es: "¿Mi equipo puede quedar bloqueado si no hago el trámite?",
        en: "Can my device get blocked if I don't complete the registration?",
      },
      respuesta: {
        es: "Sí. Los operadores móviles en Chile (Claro, Entel, WOM, Movistar) están obligados a bloquear los equipos que no cuenten con homologación vigente. Si tu dispositivo no está inscrito, puede perder señal o quedar sin servicio en cualquier momento. Realizar el trámite H3 es la única forma de regularizarlo.",
        en: "Yes. Mobile operators in Chile (Claro, Entel, WOM, Movistar) are required to block devices that do not have valid homologation. If your device is not registered, it may lose signal or stop working at any time. Completing the H3 registration is the only way to regularize it.",
      },
    },
    {
      pregunta: {
        es: "¿El trámite H3 sirve para cualquier marca o modelo de teléfono?",
        en: "Does H3 registration work for any phone brand or model?",
      },
      respuesta: {
        es: "En la mayoría de los casos sí. La Inscripción Administrativa H3 aplica para teléfonos, tablets y otros dispositivos móviles de uso personal, independientemente de la marca. En Ingeaudit revisamos tu caso y te orientamos sin costo.",
        en: "In most cases, yes. H3 Administrative Registration applies to phones, tablets, and other personal mobile devices regardless of brand. At Ingeaudit we review your case and guide you at no cost.",
      },
    },
  ],
},

  // ─── CONTACTANOS page ──────────────────────────────────
  contactPage: {
    badge: {es: "Solicitar Cotización", en: "Request a Quote"},
    title: { es: "Contáctanos", en: "Contact Us" },
    subtitle: {
      es: "Estamos aquí para ayudarte con tus proyectos de telecomunicaciones",
      en: "We are here to help you with your telecommunications projects",
    },
    infoTitle: {
      es: "Información de Contacto",
      en: "Contact Information",
    },
    email: { es: "Email", en: "Email" },
    phone: { es: "Teléfono", en: "Phone" },
    address: { es: "Dirección", en: "Address" },
    schedule: { es: "Horario", en: "Schedule" },
    scheduleDetail: {
      es: "Lunes a Viernes",
      en: "Monday to Friday",
    },
    formTitle: {
      es: "Envíanos un Mensaje",
      en: "Send Us a Message",
    },
    fullName: { es: "Nombre Completo *", en: "Full Name *" },
    fullNamePlaceholder: { es: "Tu nombre", en: "Your name" },
    emailLabel: { es: "Email *", en: "Email *" },
    emailPlaceholder: { es: "tu@email.com", en: "you@email.com" },
    phoneLabel: { es: "Teléfono", en: "Phone" },
    company: { es: "Empresa", en: "Company" },
    companyPlaceholder: { es: "Nombre de tu empresa", en: "Your company name" },
    message: { es: "Mensaje *", en: "Message *" },
    messagePlaceholder: {
      es: "Cuéntanos sobre tu proyecto o consulta...",
      en: "Tell us about your project or inquiry...",
    },
    sendButton: { es: "Enviar Mensaje", en: "Send Message" },
    successStatus: {
      es: "Mensaje enviado con éxito. Nos pondremos en contacto pronto.",
      en: "Message sent successfully. We will get back to you shortly.",
    },
    ourLocation: { es: "Nuestra Ubicación", en: "Our Location" },
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
