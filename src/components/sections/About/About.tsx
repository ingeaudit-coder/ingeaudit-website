"use client";

import styles from "@/src/components/sections/About/About.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

const About = () => {
  const { lang } = useLanguage();

  // whoText contains \n\n — split into two paragraphs
  const whoParagraphs = t("about.whoText", lang).split("\n\n");

  return (
    <div className={styles.section}>
      <div className={styles.infoContainer}>
        {/* Left column: Who Are We */}
        <div className={styles.leftColumn}>
          <div className={styles.infoBlockLarge}>
            <h3>{t("about.whoTitle", lang)}</h3>
            <p>{whoParagraphs[0]}</p>
            {whoParagraphs[1] && (
              <>
                <br />
                <p>{whoParagraphs[1]}</p>
              </>
            )}
          </div>
        </div>

        {/* Right column: Mission & Vision */}
        <div className={styles.rightColumn}>
          <div className={styles.infoBlock}>
            <h3>{t("about.missionTitle", lang)}</h3>
            <p>{t("about.missionText", lang)}</p>
          </div>

          <div className={styles.infoBlock}>
            <h3>{t("about.visionTitle", lang)}</h3>
            <p>{t("about.visionText", lang)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
