"use client";

import styles from "./CardMediciones.module.css";
import { Waves, ClipboardCheck, SlidersHorizontal, Smartphone } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

interface CardMedicionesData {
  icon: ReactNode;
  image: string;
  titleKey: string;
  descriptionKey: string;
  href: string;
}

const cards: CardMedicionesData[] = [
  {
    icon: <Waves size={22} />,
    image: "/images/medicion/medicion1.webp",
    titleKey: "mediciones.cards.card1.title",
    descriptionKey: "mediciones.cards.card1.description",
    href: "/servicios",
  },
  {
    icon: <ClipboardCheck size={22} />,
    image: "/images/medicion/medicion2.webp",
    titleKey: "mediciones.cards.card2.title",
    descriptionKey: "mediciones.cards.card2.description",
    href: "/servicios",
  },
  {
    icon: <SlidersHorizontal size={22} />,
    image: "/images/medicion/medicion3.webp",
    titleKey: "mediciones.cards.card3.title",
    descriptionKey: "mediciones.cards.card3.description",
    href: "/servicios",
  },
  {
    icon: <Smartphone size={22} />,
    image: "/images/medicion/medicion4.webp",
    titleKey: "mediciones.cards.card4.title",
    descriptionKey: "mediciones.cards.card4.description",
    href: "/servicios",
  },
];

export const CardMediciones = () => {
  const { lang } = useLanguage();

  return (
    <section className={styles.grid}>
      {cards.map((card, index) => {
        const title = t(card.titleKey, lang);
        return (
          <article key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={card.image} alt={title} className={styles.image} />
              <div className={styles.iconBadge}>{card.icon}</div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{t(card.descriptionKey, lang)}</p>
              <Link href={card.href} className={styles.link}>
                {t("mediciones.cards.saberMas", lang)}
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};
