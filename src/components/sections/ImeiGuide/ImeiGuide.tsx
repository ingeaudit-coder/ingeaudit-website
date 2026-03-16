"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone , BadgeCheck } from "lucide-react";
import styles from "./ImeiGuide.module.css";
import { t } from "@/src/i18n/translations";
import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";

export default function ImeiGuide() {
  const { lang } = useLanguage();
  const g = translations.imeiGuide;
  const s = g.steps;
  const [cur, setCur] = useState(0);

  const go = (i: number) => {
    if (i < 0 || i >= 4) return;
    setCur(i);
  };

  /* ── Contenido de pantalla por paso ── */
  const screens = [
    /* Paso 1 — ícono Phone de lucide-react */
    <div className={styles.screenInner}>
      <Phone size={48} strokeWidth={1.5} color="#555" />
      <p className={styles.sCode}>*#06#</p>
      <p className={styles.sLabel}>{s.step1.screenLabel[lang]}</p>
    </div>,

    /* Paso 2 — líneas con width:80% para no salirse */
    <div className={styles.screenInner}>
      <p className={styles.sTitle}>{s.step2.screenTitle[lang]}</p>
      <div className={styles.sRow}>
        <p className={styles.sFieldLbl}>{s.step2.screenImei[lang]}</p>
        <p className={styles.sImei}>352370123456785</p>
      </div>
      <div className={styles.sRow}>
        <p className={styles.sFieldLbl}>{s.step2.screenImei2[lang]}</p>
        <p className={styles.sImeiSub}>352370123456786</p>
      </div>
    </div>,

    /* Paso 3 */
    <div className={styles.screenInner}>
      <p className={styles.sLabel}>{s.step3.screenLabel[lang]}</p>
      <p className={styles.sImeiBox}>352370123456785</p>
      <p className={styles.sHint}>📸 {s.step3.screenHint[lang]}</p>
    </div>,

    /* Paso 4 */
    <div className={styles.screenInner}>
      <span className={styles.sEmoji}><BadgeCheck size={48} strokeWidth={1.5} color="#0ab158" /></span>
      <p className={styles.sSuccess}>{s.step4.screenSuccess[lang]}</p>
      <p className={styles.sHint}>{s.step4.screenHint[lang]}</p>
    </div>,
  ];

  const stepKeys = [s.step1, s.step2, s.step3, s.step4] as const;

  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>{t("imeiGuide.heading", lang)}</p>

      {/* Pills */}
      <div className={styles.pills}>
        {stepKeys.map((step, i) => (
          <button
            key={i}
            className={`${styles.pill} ${i === cur ? styles.pillOn : ""}`}
            onClick={() => go(i)}
          >
            {step.lbl[lang]}
          </button>
        ))}
      </div>

      {/* Teléfono + overlay */}
      <div className={styles.phoneWrap}>
        <Image
          src="/smartphone.png"
          alt="Smartphone"
          width={600}
          height={338}
          className={styles.phoneImg}
          priority
        />
        {/* Ajusta top/left/width/height en el CSS si el overlay no encaja */}
        <div className={styles.screenOverlay} key={cur}>
          {screens[cur]}
        </div>
      </div>

      {/* Descripción */}
      <p className={styles.desc}>{stepKeys[cur].dsc[lang]}</p>

      {/* Dots */}
      <div className={styles.dots}>
        {stepKeys.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === cur ? styles.dotOn : ""}`}
            onClick={() => go(i)}
          />
        ))}
      </div>

      {/* Nav */}
      <div className={styles.nav}>
        <button
          className={styles.pill}
          onClick={() => go(cur - 1)}
          disabled={cur === 0}
        >
          ← {t("imeiGuide.prev", lang)}
        </button>
        <button
          className={styles.pill}
          onClick={() => go(cur + 1)}
          disabled={cur === 3}
        >
          {t("imeiGuide.next", lang)} →
        </button>
      </div>
    </div>
  );
}