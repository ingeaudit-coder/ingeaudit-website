"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone, BadgeCheck, ExternalLink, Signal } from "lucide-react";
import styles from "./ImeiGuide.module.css";
import { t } from "@/src/i18n/translations";
import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";
import HomologacionFAQ from "../HomologacionFAQ/HomologacionFAQ";

export default function ImeiGuide() {
  const { lang } = useLanguage();
  const g = translations.imeiGuide;
  const s = g.steps;
  const h3 = translations.services.homologacion.h3;
  const solicitud = translations.services.homologacion.solicitud;
  const note = translations.imeiNote;
  const [cur, setCur] = useState(0);

  const go = (i: number) => {
    if (i < 0 || i >= 4) return;
    setCur(i);
  };

  const screens = [
    <div className={styles.screenInner}>
      <Phone size={40} strokeWidth={1.5} color="#555" />
      <p className={styles.sCode}>*#06#</p>
      <p className={styles.sLabel}>{s.step1.screenLabel[lang]}</p>
    </div>,
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
    <div className={styles.screenInner}>
      <p className={styles.sLabel}>{s.step3.screenLabel[lang]}</p>
      <p className={styles.sImeiBox}>352370123456785</p>
      <p className={styles.sHint}>📸 {s.step3.screenHint[lang]}</p>
    </div>,
    <div className={styles.screenInner}>
      <BadgeCheck size={44} strokeWidth={1.5} color="#0ab158" />
      <p className={styles.sSuccess}>{s.step4.screenSuccess[lang]}</p>
      <p className={styles.sHint}>{s.step4.screenHint[lang]}</p>
    </div>,
  ];

  const stepKeys = [s.step1, s.step2, s.step3, s.step4] as const;

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.guideCard}>
          <div className={styles.guideHeader}>
            <span className={styles.badge}>
              <Signal size={20} />
              {t("imeiGuide.heading", lang)}
            </span>
          </div>

          <div className={styles.stepTabs}>
            {stepKeys.map((step, i) => (
              <button
                key={i}
                className={`${styles.stepTab} ${i === cur ? styles.stepTabOn : ""}`}
                onClick={() => go(i)}
              >
                <span className={styles.stepNumber}>{i + 1}</span>
                <span className={styles.stepLabel}>{step.lbl[lang]}</span>
              </button>
            ))}
          </div>

          <div className={styles.phoneArea}>
            <div className={styles.phoneWrap}>
              <Image src="/smartphone1.webp" alt="Smartphone" width={600} height={338} className={styles.phoneImg} priority />
              <div className={styles.screenOverlay} key={cur}>
                {screens[cur]}
              </div>
            </div>
          </div>

          <p className={styles.desc}>{stepKeys[cur].dsc[lang]}</p>

          <div className={styles.navRow}>
            <button className={styles.navBtn} onClick={() => go(cur - 1)} disabled={cur === 0}>
              ← {t("imeiGuide.prev", lang)}
            </button>

            <div className={styles.dots}>
              {stepKeys.map((_, i) => (
                <button key={i} className={`${styles.dot} ${i === cur ? styles.dotOn : ""}`} onClick={() => go(i)} />
              ))}
            </div>

            <button className={styles.navBtn} onClick={() => go(cur + 1)} disabled={cur === 3}>
              {t("imeiGuide.next", lang)} →
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.remoteCard}>
          <div className={styles.remoteHeader}>
            <div className={styles.remoteIcon}>
              <ExternalLink size={18} />
            </div>
            <h2 className={styles.remoteTitle}>{solicitud.remota.titulo[lang]}</h2>
            <p className={styles.remoteDesc}>{solicitud.remota.descripcion[lang]}</p>
          </div>

          <div className={styles.remoteMeta}>
            <br></br>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{h3.precio.label[lang]}</span>
              <span className={styles.metaValue}>{h3.precio.valor[lang]}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{h3.plazo.label[lang]}</span>
              <span className={styles.metaValue}>{h3.plazo.valor[lang]}</span>
            </div>
          </div>

          <div className={styles.remoteActions}>
            <a href={h3.links.ingresar.url} target="_blank" className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}>
              <ExternalLink size={15} />
              {h3.links.ingresar.label[lang]}
            </a>
            <a href={h3.links.buscar.url} target="_blank" className={styles.actionBtn}>
              <ExternalLink size={15} />
              {h3.links.buscar.label[lang]}
            </a>
          </div>

          <div className={styles.operadoresSection}>
            <p className={styles.operadoresLabel}>{h3.seguimiento.label[lang]}</p>
            <div className={styles.operadoresGrid}>
              {h3.seguimiento.operadores.map((op, i) => (
                <a key={i} href={op.url} target="_blank" className={styles.operadorBtn}>
                  {op.nombre}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div><br></br>
      <HomologacionFAQ />
      <p className={styles.note}>{note[lang]}</p>
    </section>
  );
}