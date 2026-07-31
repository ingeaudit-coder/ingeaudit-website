"use client";

import styles from "@/src/components/sections/Certifications/Certifications.module.css";
import { BarChart3, Shield, Smartphone, FileText } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import translations from "@/src/i18n/translations";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const icons = [BarChart3, Shield, Smartphone];

const logos = [
  { src: "/images/logos/logosubtel.webp", alt: "SUBTEL" },
  { src: "/images/logos/cmf_logo.svg",    alt: "CMF" },
  { src: "/images/logos/logohomologacion.webp", alt: "Homologación SUBTEL" },
];

export default function Certifications() {
  const { lang } = useLanguage();

  const items = translations.certifications.items;

  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {t("certifications.sectionTitle", lang)}
      </motion.h2>

      <div className={styles.grid}>
        {items.map((cert, idx) => {
          const Icon = icons[idx] ?? Shield;
          const logo = logos[idx];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
            >
              <Card className={styles.card}>
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
                      fill
                      className={styles.logoImage}
                    />
                  </div>

                  {cert.enlaces && (
                    <div className={styles.certLinks}>
                      {cert.enlaces.map((enlace, linkIdx) => (
                        <a
                          key={linkIdx}
                          href={enlace.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.certLink}
                        >
                          <FileText aria-hidden="true" />
                          {enlace.label[lang]}
                        </a>
                      ))}
                    </div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}