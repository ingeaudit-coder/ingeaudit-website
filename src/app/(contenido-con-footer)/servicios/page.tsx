"use client";

import Image from "next/image";
import styles from "./servicios.module.css";
import Certifications from "@/src/components/sections/Certifications/Certifications";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import Metrics from "@/src/components/sections/Metrics/Metrics";

const Servicios = () => {
  const { lang } = useLanguage();

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <Image
          src="/img-hero-oficial.jpg"
          alt="Fondo corporativo"
          fill
          priority
          className=""
        />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>{t("serviciosPage.title", lang)}</h1>
          <p className={styles.subtitle}>{t("serviciosPage.subtitle", lang)}</p>
        </div>
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Metrics/>
      </section>
      <section>
        <Certifications />
      </section>
    </div>
  );
};

export default Servicios;
