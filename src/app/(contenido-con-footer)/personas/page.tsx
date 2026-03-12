"use client";

import styles from "./personas.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import translations from "@/src/i18n/translations";
import { HeroNoMain } from "@/src/components/sections/HeroNoMain/HeroNoMain";
import {
  User,
  DollarSign,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  ExternalLink,
  FileText,
} from "lucide-react";

const PersonasNaturales = () => {
  const { lang } = useLanguage();
  const h3 = translations.services.homologacion.h3;
  const solicitud = translations.services.homologacion.solicitud;

  return (
    <div className={styles.container}>

      {/* ── Hero ── */}
      <HeroNoMain
        badge="personasNaturales.hero.badge"
        titulo="personasNaturales.hero.titulo"
        subtitulo="personasNaturales.hero.subtitulo"
      />

      {/* ── Inscripción Administrativa intro ── */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <span className={styles.sectionBadge}>
            {t("personasNaturales.intro.badge", lang)}
          </span>
          <h2 className={styles.sectionTitle}>
            {h3.titulo[lang]}
          </h2>
          <p className={styles.introParagraph}>
            {t("personasNaturales.intro.autorizada", lang)}
          </p>
          <p className={styles.introParagraph}>
            {h3.descripcion[lang]}
          </p>
          <p className={styles.introNote}>
            {h3.nota[lang]}{" "}
            <a
              href="https://multibanda.cl/empresas-certificadoras/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.introLink}
            >
              multibanda.cl/empresas-certificadoras
            </a>
          </p>
        </div>
      </section>

      {/* ── Extranjero en Chile callout ── */}
      <section className={styles.calloutSection}>
        <div className={styles.calloutBox}>
          <p className={styles.calloutTitle}>
            {t("personasNaturales.callout.title", lang)}
          </p>
          <p className={styles.calloutText}>
            {t("personasNaturales.callout.step1", lang)}
          </p>
          <p className={styles.calloutText}>
            {t("personasNaturales.callout.step2", lang)}
          </p>
        </div>
      </section>

      {/* ── Two-column: Requisitos + Precio ── */}
      <section className={styles.twoColSection}>
        <div className={styles.twoColInner}>

          {/* Requisitos */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.iconWrap}>
                <User className={styles.cardIcon} />
              </span>
              <h3 className={styles.cardTitle}>
                {t("personasNaturales.requisitos.titulo", lang)}
              </h3>
            </div>
            <p className={styles.cardDesc}>
              {t("personasNaturales.requisitos.desc", lang)}
            </p>
            <ul className={styles.reqList}>
              {h3.requisitos.items[lang].map((item: string, i: number) => (
                <li key={i} className={styles.reqItem}>
                  <CheckCircle className={styles.reqIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/form_solicitud_inscripcion.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <FileText size={14} />
              {t("personasNaturales.requisitos.descargar", lang)}
            </a>
          </div>

          {/* Precio */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.iconWrap}>
                <DollarSign className={styles.cardIcon} />
              </span>
              <h3 className={styles.cardTitle}>
                {t("personasNaturales.precio.titulo", lang)}
              </h3>
            </div>

            <div className={styles.pricingRow}>
              <p className={styles.pricingLabel}>
                {h3.precio.label[lang]}
              </p>
              <p className={styles.pricingValue}>{h3.precio.valor[lang]}</p>
            </div>

            <p className={styles.cardDesc}>
              {t("personasNaturales.precio.desc", lang)}
            </p>

            <div className={styles.specsBlock}>
              <div className={styles.specRow}>
                <Clock className={styles.specRowIcon} />
                <div>
                  <strong className={styles.specLabel}>
                    {h3.plazo.label[lang]}
                  </strong>
                  <span className={styles.specValue}>{h3.plazo.valor[lang]}</span>
                </div>
              </div>
            </div>

            <p className={styles.pricingNote}>
              {t("personasNaturales.precio.nota", lang)}
            </p>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className={styles.divider} />

      {/* ── Solicitud y Formularios ── */}
      <section className={styles.solicitudSection}>
        <div className={styles.solicitudInner}>
          <h2 className={styles.sectionTitle}>
            {t("personasNaturales.solicitud.titulo", lang)}
          </h2>

          <div className={styles.solicitudGrid}>

            {/* Presencial */}
            <div className={styles.solicitudCard}>
              <h3 className={styles.solicitudCardTitle}>
                {solicitud.presencial.titulo[lang]}
              </h3>

              <p className={styles.solicitudSubLabel}>
                {t("personasNaturales.solicitud.presencial.docsLabel", lang)}
              </p>

              <div className={styles.solicitudInfoRow}>
                <Clock className={styles.solicitudIcon} />
                <span>{solicitud.presencial.horario[lang]}</span>
              </div>

              <p className={styles.sucursalesLabel}>
                {t("personasNaturales.solicitud.presencial.sucursales", lang)}
              </p>

              <div className={styles.solicitudInfoRow}>
                <MapPin className={styles.solicitudIcon} />
                <span>{solicitud.presencial.direccion[lang]}</span>
              </div>

              <div className={styles.solicitudInfoRow}>
                <Phone className={styles.solicitudIcon} />
                <span>{solicitud.presencial.telefono[lang]}</span>
              </div>
            </div>

            {/* Remota */}
            <div className={styles.solicitudCard}>
              <h3 className={styles.solicitudCardTitle}>
                {solicitud.remota.titulo[lang]}
              </h3>

              <div className={styles.remoteBtns}>
                <a
                  href={h3.links.ingresar.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.remoteBtn}
                >
                  <ExternalLink size={14} />
                  {h3.links.ingresar.label[lang]}
                </a>
                <a
                  href={h3.links.buscar.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.remoteBtn}
                >
                  <ExternalLink size={14} />
                  {h3.links.buscar.label[lang]}
                </a>
              </div>

              <p className={styles.solicitudRemotaDesc}>
                {solicitud.remota.descripcion[lang]}
              </p>

              <p className={styles.seguimientoLabel}>
                {h3.seguimiento.label[lang]}
              </p>

              <div className={styles.operadoresGrid}>
                {h3.seguimiento.operadores.map(
                  (op: { nombre: string; url: string }, i: number) => (
                    <a
                      key={i}
                      href={op.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.operadorBtn}
                    >
                      {op.nombre}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonasNaturales;