"use client";

import styles from "./OperadoresEmpresas.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import translations from "@/src/i18n/translations";
import { Factory, Ship } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HeroNoMain } from "@/src/components/sections/HeroNoMain/HeroNoMain";

export default function OperadoresEmpresas() {
  const { lang } = useLanguage();
  const router = useRouter();

  const handleCta = (tipo: "h1" | "h2") => {
    router.push(`/contactanos?tipo=${tipo}`);
  };

  return (
    <div className={styles.wrapper}>
      {/* ── Hero Section ── */}
      <HeroNoMain
        badge="operadoresPage.hero.badge"
        titulo="operadoresPage.hero.title"
        subtitulo="operadoresPage.hero.subtitle"
      />

      {/* ── Comparison Grid ── */}
      <section className={styles.compGrid}>
        {/* H1 Card */}
        <div className={styles.card}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/h1h2/prototipo.webp"
              alt="Prototipo H1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.cardImage}
            />
            <span className={styles.iconWrap}>
              <Factory className={styles.cardIcon} />
            </span>
            <div className={styles.imageGradient} />
          </div>

          <div className={styles.cardHead}>
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

          <button
            type="button"
            className={styles.ctaBtn}
            onClick={() => handleCta("h1")}
          >
            {t("operadoresPage.h1.cta", lang)}
          </button>
        </div>

        {/* H2 Card */}
        <div className={styles.card}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/h1h2/portacontenedores.webp"
              alt="Portacontenedores H2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.cardImage}
            />
            <span className={styles.iconWrap}>
              <Ship className={styles.cardIcon} />
            </span>
            <div className={styles.imageGradient} />
          </div>

          <div className={styles.cardHead}>
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

          <button
            type="button"
            className={styles.ctaBtn}
            onClick={() => handleCta("h2")}
          >
            {t("operadoresPage.h2.cta", lang)}
          </button>
        </div>
      </section>
    </div>
  );
}