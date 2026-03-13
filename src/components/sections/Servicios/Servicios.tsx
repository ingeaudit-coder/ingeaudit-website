"use client";

import Image from "next/image";
import Link from "next/link";
import { Wifi, Scale, Smartphone, Check } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";
import styles from "./Servicios.module.css";

const ICONS = [Wifi, Scale, Smartphone];
const BADGE_CLASSES = [styles.badgeBlue, styles.badgeGreen, styles.badgeGold];
const IMAGES = ["/web-ing.webp", "/img-hero-oficial.jpg", "/personal0.png"];

export const Servicioss = () => {
  const { lang } = useLanguage();
  const { title, subtitle, cards } = translations.serviciosPage;

  return (
    <section id="seccion-servicios" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{title[lang]}</h2>
          <p className={styles.subtitle}>{subtitle[lang]}</p>
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <article key={i} className={styles.card}>
                {/* Image */}
                <div className={styles.imageWrap}>
                  <Image
                    src={IMAGES[i]}
                    alt={card.title[lang]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                  />
                  <span className={styles.iconBadge}>
                    <Icon />
                  </span>
                </div>

                {/* Body */}
                <div className={styles.cardBody}>
                  <p className={`${styles.badge} ${BADGE_CLASSES[i]}`}>
                    {card.badge[lang]}
                  </p>
                  <h3 className={styles.cardTitle}>{card.title[lang]}</h3>
                  <p className={styles.cardDesc}>{card.description[lang]}</p>

                  <ul className={styles.featureList}>
                    {card.items[lang].map((item, j) => (
                      <li key={j} className={styles.featureItem}>
                        <Check className={styles.checkIcon} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link href={card.href} className={styles.ctaBtn}>
                  {card.cta[lang]}
                  <span className={styles.ctaArrow}>→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
