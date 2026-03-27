"use client";

import { useState } from "react";
import styles from "./HomologacionFAQ.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import translations from "@/src/i18n/translations";
import { ChevronDown, HelpCircle } from "lucide-react";

const HomologacionFAQ = () => {
  const { lang } = useLanguage();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = translations.faqHomologacion.preguntas;

  const toggleQuestion = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqInner}>

        {/* CARD COMPLETA */}
        <div className={styles.faqCard}>

          {/* HEADER */}
          <div className={styles.headerRow}>
            <HelpCircle className={styles.titleIcon} />

            <h2 className={styles.title}>
              {t("faqHomologacion.titulo", lang)}
            </h2>
          </div>

          {/* CONTENIDO */}
          <div className={`${styles.accordionWrapper} ${styles.accordionWrapperOpen}`}>
            <div className={styles.accordionList}>
              {faqItems.map((item, i) => {
                const isOpen = openIndex === i;

                return (
                  <div
                    key={i}
                    className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
                  >
                    <button
                      className={styles.accordionTrigger}
                      onClick={() => toggleQuestion(i)}
                    >
                      <span className={styles.questionText}>
                        {item.pregunta[lang]}
                      </span>

                      <ChevronDown
                        className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                      />
                    </button>

                    <div className={`${styles.accordionBody} ${isOpen ? styles.accordionBodyOpen : ""}`}>
                      <div className={styles.accordionBodyInner}>
                        <p className={styles.answerText}>
                          {item.respuesta[lang]}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomologacionFAQ;