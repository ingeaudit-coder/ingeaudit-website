"use client";

import Contact from "@/src/components/sections/Contact/Contact";
import styles from "./contactanos.module.css";
import { HeroNoMain } from "@/src/components/sections/HeroNoMain/HeroNoMain";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

export default function Contactanos() {
  const { lang } = useLanguage();

  return (
    <main className={styles.container}>
      <HeroNoMain
        badge="contactPage.badge"
        titulo="contactPage.title"
        subtitulo="contactPage.subtitle"
      />

      <Contact />

      {/* MAP */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <h2 className={styles.mapTitle}>
            {t("contactPage.ourLocation", lang)}
          </h2>
          <div className={styles.mapWrapper}>
            <iframe
              className={styles.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.611392750546!2d-70.5564975241242!3d-33.39969099491483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cec64f7341d3%3A0x4563b32e52d43ea6!2sLos%20Ilanes%2086b%2C%207560384%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e1!3m2!1ses-419!2scl!4v1769789044350!5m2!1ses-419!2scl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Ingeaudit"
            />
          </div>
        </div>
      </section>
    </main>
  );
}