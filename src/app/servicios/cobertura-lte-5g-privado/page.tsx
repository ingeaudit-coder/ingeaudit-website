"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  FileSignal,
  RadioTower,
  Settings2,
  Signal,
  Waves,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";
import styles from "./cobertura.module.css";

const STUDY_ICONS = [Signal, Activity, RadioTower];

export default function CoberturaPrivadaPage() {
  const { lang } = useLanguage();
  const service = translations.privateCoveragePage;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true">
          <span className={styles.ringOne} />
          <span className={styles.ringTwo} />
          <span className={styles.ringThree} />
          <RadioTower className={styles.tower} />
        </div>

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.newBadge}>{service.hero.badge[lang]}</span>
          <h1>{service.hero.title[lang]}</h1>
          <p>{service.hero.subtitle[lang]}</p>
          <Link href="/contactanos" className={styles.primaryCta}>
            {service.hero.cta[lang]}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionHeading}>
          <span>{service.studies.eyebrow[lang]}</span>
          <h2>{service.studies.title[lang]}</h2>
          <p>{service.studies.subtitle[lang]}</p>
        </div>

        <div className={styles.studyGrid}>
          {service.studies.items.map((item, index) => {
            const Icon = STUDY_ICONS[index];
            return (
              <motion.article
                key={item.title.es}
                className={styles.studyCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className={styles.studyIcon}><Icon size={23} /></div>
                <h3>{item.title[lang]}</h3>
                <p>{item.description[lang]}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className={styles.techSection}>
        <div className={styles.techCard}>
          <div className={styles.techIntro}>
            <span>{service.technical.eyebrow[lang]}</span>
            <h2>{service.technical.title[lang]}</h2>
            <p>{service.technical.description[lang]}</p>
          </div>

          <div className={styles.techDetail}>
            <div className={styles.detailIcon}><Settings2 size={24} /></div>
            <div>
              <span className={styles.detailLabel}>{service.technical.equipmentLabel[lang]}</span>
              <h3>{service.technical.equipmentTitle[lang]}</h3>
              <p>{service.technical.equipmentDescription[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processVisual} aria-hidden="true">
          <Waves size={40} />
          <BarChart3 size={40} />
          <FileSignal size={40} />
        </div>
        <div className={styles.processText}>
          <span>{service.cta.eyebrow[lang]}</span>
          <h2>{service.cta.title[lang]}</h2>
          <p>{service.cta.description[lang]}</p>
          <Link href="/contactanos" className={styles.secondaryCta}>
            {service.cta.button[lang]}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
