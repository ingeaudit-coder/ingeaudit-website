"use client";

import React from "react";
import styles from "@/src/components/sections/Services/Services.module.css";
import { Smartphone, Radio, CheckCircle, FileText, Scale, Search } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";

const icons = [Smartphone, Radio, CheckCircle, FileText, Scale, Search];

const Services = () => {
  const { lang } = useLanguage();

  return (
    <div className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        {translations.services.map((servicio, idx) => {
          const IconComponent = icons[idx];
          return (
            <div key={idx} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <IconComponent />
              </div>
              <h3 className={styles.serviceTitle}>{servicio.titulo[lang]}</h3>
              <p className={styles.serviceDescription}>{servicio.descripcion[lang]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
