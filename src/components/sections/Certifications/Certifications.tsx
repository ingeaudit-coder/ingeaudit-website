"use client";

import React from "react";
import styles from "@/src/components/sections/Certifications/Certifications.module.css";
import { BarChart3, Shield, Smartphone } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import translations from "@/src/i18n/translations";

const icons = [BarChart3, Shield, Smartphone];

const Certifications = () => {
  const { lang } = useLanguage();

  return (
    <div className={styles.certificationsSection}>
      <h2 className={styles.certificationsTitle}>
        {t("certifications.sectionTitle", lang)}
      </h2>

      <div className={styles.certificationsGrid}>
        {translations.certifications.items.map((cert, idx) => {
          const IconComponent = icons[idx];
          return (
            <div key={idx} className={styles.certificationCard}>
              <div className={styles.certIcon}>
                <IconComponent />
              </div>
              <h3 className={styles.certTitle}>{cert.titulo[lang]}</h3>
              <p className={styles.certDescription}>{cert.descripcion[lang]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
