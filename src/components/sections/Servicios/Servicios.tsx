"use client";

import Image from "next/image";
import { ArrowRight, Check, RadioTower, Scale, Smartphone, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";
import styles from "./Servicios.module.css";
import Button from "@/src/components/UI/Button/Button";
import { useRouter } from "next/navigation";

const ICONS = [Wifi, Scale, Smartphone];
const BADGE_CLASSES = [styles.badgeBlue, styles.badgeGreen, styles.badgeGold];
const IMAGES = [
  "/images/servicios/Mediciones-de-campo.webp",
  "/images/servicios/asesorias-regulatorias.webp",
  "/images/servicios/homologacion-dispositivos.webp",
];

export const Servicioss = () => {
  const { lang } = useLanguage();
  const { title, subtitle, featured, cards } = translations.serviciosPage;
  const router = useRouter();

  return (
    <section id="seccion-servicios" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>{title[lang]}</h2>
          <p className={styles.subtitle}>{subtitle[lang]}</p>
        </motion.div>

        <motion.div
          className={styles.featuredBorder}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <article className={styles.featuredCard}>
            <div className={styles.featuredContent}>
              <span className={styles.newBadge}>{featured.badge[lang]}</span>
              <h3 className={styles.featuredTitle}>{featured.title[lang]}</h3>
              <p className={styles.featuredDesc}>{featured.description[lang]}</p>

              <ul className={styles.featuredList}>
                {featured.items[lang].map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={styles.featuredCta}
                onClick={() => router.push(featured.href)}
              >
                {featured.cta[lang]}
                <ArrowRight size={17} />
              </button>
            </div>

            <div className={styles.featuredVisual} aria-hidden="true">
              <span className={`${styles.signalRing} ${styles.signalRingOne}`} />
              <span className={`${styles.signalRing} ${styles.signalRingTwo}`} />
              <span className={`${styles.signalRing} ${styles.signalRingThree}`} />
              <div className={styles.towerBadge}>
                <RadioTower size={44} />
              </div>
              <span className={styles.networkLabel}>LTE</span>
              <span className={`${styles.networkLabel} ${styles.networkLabel5g}`}>5G</span>
            </div>
          </article>
        </motion.div>

        <div className={styles.grid}>
          {cards.map((card, i) => {
            const Icon = ICONS[i];

            return (
              <motion.article
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
              >
                <div className={styles.imageWrap}>
                  <div className={styles.imageMotion}>
                    <motion.div className={styles.imageInner} transition={{ duration: 0.25 }}>
                      <Image
                        src={IMAGES[i]}
                        alt={card.title[lang]}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={styles.image}
                      />
                    </motion.div>
                  </div>

                  <span className={styles.iconBadge}>
                    <Icon />
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <p className={`${styles.badge} ${BADGE_CLASSES[i]}`}>
                    {card.badge[lang]}
                  </p>

                  <h3 className={styles.cardTitle}>{card.title[lang]}</h3>
                  <p className={styles.cardDesc}>{card.description[lang]}</p>

                  <ul className={styles.featureList}>
                    {card.items[lang].map((item, j) => (
                      <motion.li
                        key={j}
                        className={styles.featureItem}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + j * 0.1 }}
                      >
                        <Check className={styles.checkIcon} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className={styles.ctaWrapper}>
                  <Button
                    variant="primary"
                    className={styles.ctaBtn}
                    onClick={() => router.push(card.href)}
                  >
                    {card.cta[lang]}
                    <span className={styles.ctaArrow}>→</span>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
