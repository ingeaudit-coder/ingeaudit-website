"use client";

import Link from "next/link";
import styles from "./NecesitasComunicarte.module.css";
import Button from "@/src/components/UI/Button/Button";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

export const NecesitasComunicarte = () => {
  const { lang } = useLanguage();

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {t("necesitasCertificacion.titulo", lang)}
          </h2>
          <p className={styles.subtitle}>
            {t("necesitasCertificacion.subtitulo", lang)}
          </p>
        </div>
        <Link href="/contactanos">
          <Button variant="primary" className={styles.ctaButton}>
            {t("necesitasCertificacion.cta", lang)}
          </Button>
        </Link>
      </div>
    </section>
  );
};
