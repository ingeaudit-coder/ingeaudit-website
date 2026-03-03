"use client";

import Image from "next/image";
import styles from "./mediciones.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import Button from "@/src/components/UI/Button/Button";

const Mediciones = () => {
  const { lang } = useLanguage();

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <Image
          src="/img-hero-oficial.jpg"
          alt="Fondo corporativo"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>{t("medicionesPage.title", lang)}</h1>
          <Button>{t("medicionesPage.cta", lang)}</Button>
        </div>
      </section>
    </div>
  );
};

export default Mediciones;
