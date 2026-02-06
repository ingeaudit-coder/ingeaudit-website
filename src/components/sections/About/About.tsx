"use client";

import styles from "@/src/components/sections/About/About.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Main Description */}
        <div className={styles.mainContent}>
          <p className={styles.description}>{t("about.whoText", lang)}</p>
        </div>

        <Separator className={styles.separator} />

        {/* Mission & Vision Cards */}
        <div className={styles.pillarsContainer}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Target className={styles.pillarIcon} />
              <h3 className={styles.pillarTitle}>{t("about.missionTitle", lang)}</h3>
              <p className={styles.pillarText}>{t("about.missionText", lang)}</p>
            </CardContent>
          </Card>

          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Eye className={styles.pillarIcon} />
              <h3 className={styles.pillarTitle}>{t("about.visionTitle", lang)}</h3>
              <p className={styles.pillarText}>{t("about.visionText", lang)}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;