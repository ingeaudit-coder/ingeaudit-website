import React from 'react';
import Image from "next/image";
import styles from "@/src/components/sections/Services/Services.module.css";
import { Smartphone, Radio, CheckCircle, FileText, Scale, Search } from 'lucide-react';

const servicios = [
  {
    id: 1,
    titulo: "Homologación de terminales móviles",
    descripcion: "El servicio más común y necesario para dispositivos que entran al país.",
    descripcionEn: "Mobile terminal homologation: The most common and necessary service for devices entering the country.",
    icono: Smartphone,
  },
  {
    id: 2,
    titulo: "Mediciones de Campo",
    descripcion: "Realizamos mediciones técnicas especializadas para garantizar el cumplimiento de estándares.",
    descripcionEn: "Field Measurements",
    icono: Radio,
  },
  {
    id: 3,
    titulo: "Certificación y Homologación",
    descripcion: "Gestión completa del proceso de certificación ante organismos reguladores.",
    descripcionEn: "Certification and Homologation",
    icono: CheckCircle,
  },
  {
    id: 4,
    titulo: "Obtención de Permisos y Concesiones",
    descripcion: "Obtención de permisos variados para operadores y apoyo en fusión de competidores.",
    descripcionEn: "Obtaining various permits for operators. Support in competitor mergers.",
    icono: FileText,
  },
  {
    id: 5,
    titulo: "Asesorías Regulatorias",
    descripcion: "Defensa regulatoria ante SUBTEL, informes regulatorios y apoyo estratégico.",
    descripcionEn: "Regulatory Defense before SUBTEL. Regulatory reports.",
    icono: Scale,
  },
  {
    id: 6,
    titulo: "Auditorías Tecnológicas",
    descripcion: "Auditorías de cumplimiento regulatorio y boletas de cobro por espectro.",
    descripcionEn: "Regulatory compliance audits. Audit of spectrum fee invoices.",
    icono: Search,
  },
];

const Services = () => {
  return (
      <div className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        {servicios.map((servicio) => {
          const IconComponent = servicio.icono;
          return (
            <div key={servicio.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <IconComponent />
              </div>
              <h3 className={styles.serviceTitle}>{servicio.titulo}</h3>
              <p className={styles.serviceDescription}>{servicio.descripcion}</p>
              <p className={styles.serviceDescriptionEn}>{servicio.descripcionEn}</p>
            </div>
          );
        })}
      </div>
      </div>
  );
};

export default Services;