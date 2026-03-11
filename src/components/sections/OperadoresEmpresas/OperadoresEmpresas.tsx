"use client";

import styles from "./OperadoresEmpresas.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import translations from "@/src/i18n/translations";
import { Factory, Ship, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function OperadoresEmpresas() {
  const { lang } = useLanguage();
  const op = translations.operadoresPage;

  return (
    <div className={styles.wrapper}>
      {/* ── Hero Section ── */}
      <section className={styles.hero}>
        <span className={styles.heroBadge}>
          {t("operadoresPage.hero.badge", lang)}
        </span>
        <h1 className={styles.heroTitle}>
          {t("operadoresPage.hero.title", lang)}
        </h1>
        <p className={styles.heroSubtitle}>
          {t("operadoresPage.hero.subtitle", lang)}
        </p>
      </section>

      {/* ── Comparison Grid ── */}
      <section className={styles.compGrid}>
        {/* H1 Card */}
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <span className={styles.iconWrap}>
              <Factory className={styles.cardIcon} />
            </span>
            <p className={styles.cardBadge}>
              {t("operadoresPage.h1.badge", lang)}
            </p>
            <h2 className={styles.cardTitle}>
              {translations.services.homologacion.h1.titulo[lang]}
            </h2>
            <p className={styles.cardDesc}>
              {translations.services.homologacion.h1.descripcion[lang]}
            </p>
          </div>

          <div className={styles.specsBlock}>
            <p className={styles.specsLabel}>
              {t("operadoresPage.h1.specsTitle", lang)}
            </p>
            <ul className={styles.specsList}>
              {op.h1.specs.map((spec, i) => (
                <li key={i} className={styles.specItem}>
                  <CheckCircle className={styles.specIcon} />
                  <div>
                    <strong className={styles.specLabel}>
                      {spec.label[lang]}
                    </strong>
                    <span className={styles.specValue}>{spec.value[lang]}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/contactanos" className={styles.ctaBtn}>
            {t("operadoresPage.h1.cta", lang)}
          </Link>
        </div>

        {/* H2 Card */}
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <span className={styles.iconWrap}>
              <Ship className={styles.cardIcon} />
            </span>
            <p className={styles.cardBadge}>
              {t("operadoresPage.h2.badge", lang)}
            </p>
            <h2 className={styles.cardTitle}>
              {translations.services.homologacion.h2.titulo[lang]}
            </h2>
            <p className={styles.cardDesc}>
              {translations.services.homologacion.h2.descripcion[lang]}
            </p>
          </div>

          <div className={styles.specsBlock}>
            <p className={styles.specsLabel}>
              {t("operadoresPage.h2.specsTitle", lang)}
            </p>
            <ul className={styles.specsList}>
              {op.h2.specs.map((spec, i) => (
                <li key={i} className={styles.specItem}>
                  <CheckCircle className={styles.specIcon} />
                  <div>
                    <strong className={styles.specLabel}>
                      {spec.label[lang]}
                    </strong>
                    <span className={styles.specValue}>{spec.value[lang]}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/contactanos" className={styles.ctaBtn}>
            {t("operadoresPage.h2.cta", lang)}
          </Link>
        </div>
      </section>
    </div>
  );
}
