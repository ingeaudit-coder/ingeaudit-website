"use client";

import styles from "@/src/components/sections/Certifications/Certifications.module.css";
import { BarChart3, Shield, Smartphone } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import translations from "@/src/i18n/translations";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const icons = [BarChart3, Shield, Smartphone];

const logos = [
  { src: "/images/logos/logosubtel.png", alt: "SUBTEL" },
  { src: "/images/logos/logocmf.png",    alt: "CMF" },
  { src: "/images/logos/logohomologacion.png", alt: "Homologación SUBTEL" },
];

export default function Certifications() {
  const { lang } = useLanguage();

  const items = translations.certifications.items;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t("certifications.sectionTitle", lang)}</h2>

      <div className={styles.grid}>
        {items.map((cert, idx) => {
          const Icon = icons[idx] ?? Shield;
          const logo = logos[idx];

          return (
            <Card key={idx} className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <Icon className={styles.icon} />
                </div>

                <CardTitle className={styles.cardTitle}>
                  {cert.titulo[lang]}
                </CardTitle>
              </CardHeader>

              <CardContent className={styles.cardContent}>
                <p className={styles.description}>{cert.descripcion[lang]}</p>
              </CardContent>

              <CardFooter className={styles.cardFooter}>
                <div className={styles.logoWrap}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={48}
                    className={styles.logoImage}
                  />
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}