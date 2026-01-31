import React from 'react';
import Image from "next/image";
import styles from "@/src/components/sections/Certifications/Certifications.module.css";
import { BarChart3, Shield, Smartphone } from 'lucide-react';

const certificaciones = [
  {
    id: 1,
    titulo: "Medición de Espectro",
    subtitulo: "Spectrum Measurement",
    icono: BarChart3,
    descripcion:
      "Certificado por SUBTEL desde 2012 hasta 2026 para realizar mediciones de ondas electromagnéticas en distintos sistemas radiantes.",
    descripcionEn:
      "Certified by SUBTEL from 2012 to 2026 to perform electromagnetic wave measurements on various radiating systems.",
    logo: "subtel",
  },
  {
    id: 2,
    titulo: "Auditoría de Cumplimiento",
    subtitulo: "Compliance Audit",
    icono: Shield,
    descripcion:
      "Desde enero de 2025, inscrita en el Registro de Inspectores de Cuentas y Auditores Externos, y certificada por la Comisión para el Mercado Financiero (CMF).",
    descripcionEn:
      "Since January 2025, registered in the Registry of Account Inspectors and External Auditors, and certified by the Financial Market Commission (CMF).",
    logo: "cmf",
  },
  {
    id: 3,
    titulo: "Homologación de Dispositivos",
    subtitulo: "Device Homologation",
    icono: Smartphone,
    descripcion:
      "Desde 2016 certificado por SUBTEL para homologar todo tipo de dispositivos que se conectan a la Red Móvil.",
    descripcionEn:
      "Since 2016, certified by SUBTEL to homologate all types of devices that connect to the Mobile Network.",
    logo: "certified",
  },
];

const Certifications = () => {
  return (
    <div className={styles.certificationsSection}>
      <h2 className={styles.certificationsTitle}>Certificaciones de Respaldo</h2>
      <p className={styles.certificationsSubtitle}>Supporting Certifications</p>
      <div className={styles.certificationsGrid}>
        {certificaciones.map((cert) => {
          const IconComponent = cert.icono;
          return (
            <div key={cert.id} className={styles.certificationCard}>
              <div className={styles.certIcon}>
                <IconComponent />
              </div>
              <h3 className={styles.certTitle}>{cert.titulo}</h3>
              <p className={styles.certSubtitle}>{cert.subtitulo}</p>
              <p className={styles.certDescription}>{cert.descripcion}</p>
              <p className={styles.certDescriptionEn}>{cert.descripcionEn}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;