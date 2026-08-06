"use client";

import styles from "./CardMediciones.module.css";
import {
  Waves,
  ClipboardCheck,
  SlidersHorizontal,
  Smartphone,
  ChevronDown,
  CheckCircle2,
  Clock,
  Wrench,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

interface CardMedicionesData {
  icon: ReactNode;
  image: string;
  titleKey: string;
  descriptionKey: string;
  detailKeys: string[];
  duracionKey: string;
  equipamientoKey: string;
  normativaKey: string;
  href: string;
}

const cards: CardMedicionesData[] = [
  {
    icon: <Waves size={22} />,
    image: "/images/medicion/medicion1.webp",
    titleKey: "mediciones.cards.card1.title",
    descriptionKey: "mediciones.cards.card1.description",
    detailKeys: [
      "mediciones.cards.card1.details.item1",
      "mediciones.cards.card1.details.item2",
      "mediciones.cards.card1.details.item3",
      "mediciones.cards.card1.details.item4",
      "mediciones.cards.card1.details.item5",
    ],
    duracionKey: "mediciones.cards.card1.duracion",
    equipamientoKey: "mediciones.cards.card1.equipamiento",
    normativaKey: "mediciones.cards.card1.normativa",
    href: "/contactanos",
  },
  {
    icon: <ClipboardCheck size={22} />,
    image: "/images/medicion/medicion2.webp",
    titleKey: "mediciones.cards.card2.title",
    descriptionKey: "mediciones.cards.card2.description",
    detailKeys: [
      "mediciones.cards.card2.details.item1",
      "mediciones.cards.card2.details.item2",
      "mediciones.cards.card2.details.item3",
      "mediciones.cards.card2.details.item4",
      "mediciones.cards.card2.details.item5",
    ],
    duracionKey: "mediciones.cards.card2.duracion",
    equipamientoKey: "mediciones.cards.card2.equipamiento",
    normativaKey: "mediciones.cards.card2.normativa",
    href: "/contactanos",
  },
  {
    icon: <SlidersHorizontal size={22} />,
    image: "/images/medicion/medicion3.webp",
    titleKey: "mediciones.cards.card3.title",
    descriptionKey: "mediciones.cards.card3.description",
    detailKeys: [
      "mediciones.cards.card3.details.item1",
      "mediciones.cards.card3.details.item2",
      "mediciones.cards.card3.details.item3",
      "mediciones.cards.card3.details.item4",
      "mediciones.cards.card3.details.item5",
    ],
    duracionKey: "mediciones.cards.card3.duracion",
    equipamientoKey: "mediciones.cards.card3.equipamiento",
    normativaKey: "mediciones.cards.card3.normativa",
    href: "/contactanos",
  },
  {
    icon: <Smartphone size={22} />,
    image: "/images/medicion/medicion4.webp",
    titleKey: "mediciones.cards.card4.title",
    descriptionKey: "mediciones.cards.card4.description",
    detailKeys: [
      "mediciones.cards.card4.details.item1",
      "mediciones.cards.card4.details.item2",
      "mediciones.cards.card4.details.item3",
      "mediciones.cards.card4.details.item4",
      "mediciones.cards.card4.details.item5",
    ],
    duracionKey: "mediciones.cards.card4.duracion",
    equipamientoKey: "mediciones.cards.card4.equipamiento",
    normativaKey: "mediciones.cards.card4.normativa",
    href: "/contactanos",
  },
];

export const CardMediciones = () => {
  const { lang } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const toggleCard = (index: number) => {
    setExpandedCard((current) => (current === index ? null : index));
  };

  useEffect(() => {
    if (expandedCard === null) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideACard = cardRefs.current.some(
        (el) => el && el.contains(target),
      );

      if (!clickedInsideACard) {
        setExpandedCard(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expandedCard]);

  const isAnyExpanded = expandedCard !== null;

  return (
    <section
      className={`${styles.grid} ${isAnyExpanded ? styles.gridHasExpanded : ""}`}
    >
      {cards.map((card, index) => {
        const title = t(card.titleKey, lang);
        const isExpanded = expandedCard === index;
        const isShrunk = expandedCard !== null && !isExpanded;
        const detailsId = `medicion-details-${index}`;

        return (
          <article
            key={card.titleKey}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`${styles.card} ${isExpanded ? styles.cardExpanded : ""} ${isShrunk ? styles.cardShrunk : ""}`}
            onClick={() => {
              if (!isExpanded) toggleCard(index);
            }}
            role={isShrunk ? "button" : undefined}
            tabIndex={isShrunk ? 0 : undefined}
            aria-label={isShrunk ? title : undefined}
            onKeyDown={
              isShrunk
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCard(index);
                    }
                  }
                : undefined
            }
          >
            <div className={styles.imageWrapper}>
              <img src={card.image} alt={title} className={styles.image} />
              <div className={styles.iconBadge}>{card.icon}</div>
            </div>

            {isShrunk ? (
              <div className={styles.contentShrunk}>
                <h3 className={styles.titleShrunk}>{title}</h3>
              </div>
            ) : (
            <div className={styles.content}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{t(card.descriptionKey, lang)}</p>

              <button
                type="button"
                className={styles.expandButton}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCard(index);
                }}
                aria-expanded={isExpanded}
                aria-controls={detailsId}
              >
                <span>
                  {t(
                    isExpanded
                      ? "mediciones.cards.verMenos"
                      : "mediciones.cards.saberMas",
                    lang,
                  )}
                </span>
                <ChevronDown
                  size={17}
                  aria-hidden="true"
                  className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ""}`}
                />
              </button>

              <div
                id={detailsId}
                className={`${styles.detailsWrapper} ${isExpanded ? styles.detailsOpen : ""}`}
                aria-hidden={!isExpanded}
              >
                <div className={styles.detailsInner}>
                  <div className={styles.detailsContent}>
                    <div className={styles.detailsGrid}>
                      <div>
                        <h4 className={styles.detailsTitle}>
                          {t("mediciones.cards.incluye", lang)}
                        </h4>

                        <ul className={styles.detailsList}>
                          {card.detailKeys.map((detailKey) => (
                            <li key={detailKey}>
                              <CheckCircle2 size={16} aria-hidden="true" />
                              <span>{t(detailKey, lang)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.extraColumn}>
                        <h4 className={styles.detailsTitle}>
                          {t("mediciones.cards.detalleTecnico", lang)}
                        </h4>

                        <ul className={styles.extraList}>
                          <li>
                            <Clock size={16} aria-hidden="true" />
                            <span>
                              <span className={styles.extraLabel}>
                                {t("mediciones.cards.duracionLabel", lang)}
                              </span>
                              <span className={styles.extraValue}>
                                {t(card.duracionKey, lang)}
                              </span>
                            </span>
                          </li>
                          <li>
                            <Wrench size={16} aria-hidden="true" />
                            <span>
                              <span className={styles.extraLabel}>
                                {t("mediciones.cards.equipamientoLabel", lang)}
                              </span>
                              <span className={styles.extraValue}>
                                {t(card.equipamientoKey, lang)}
                              </span>
                            </span>
                          </li>
                          <li>
                            <FileText size={16} aria-hidden="true" />
                            <span>
                              <span className={styles.extraLabel}>
                                {t("mediciones.cards.normativaLabel", lang)}
                              </span>
                              <span className={styles.extraValue}>
                                {t(card.normativaKey, lang)}
                              </span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Link href={card.href} className={styles.contactLink}>
                      {t("mediciones.cards.solicitarServicio", lang)}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            )}
          </article>
        );
      })}
    </section>
  );
};
