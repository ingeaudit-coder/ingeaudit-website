"use client";

import Image from "next/image";
import styles from "./nosotros.module.css";

import About from "@/src/components/sections/About/About";
import Team from "@/src/components/sections/Team/Team";

import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import { HeroNoMain } from "@/src/components/sections/HeroNoMain/HeroNoMain";

const Nosotros = () => {
  const { lang } = useLanguage();

  return (
    <main>
      {/* <section className={styles.heroSection}>
        <Image
          src="/img-hero-oficial.jpg"
          alt="Fondo corporativo"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>{t("nosotrosPage.title", lang)}</h1>
          <p className={styles.subtitle}>{t("nosotrosPage.subtitle", lang)}</p>
        </div>
      </section> */}
      <HeroNoMain badge="nosotrosPage.badge" titulo="nosotrosPage.title" subtitulo="nosotrosPage.subtitle"/>
      <About />
      <Team />
    </main>
  );
};

export default Nosotros;
