"use client";

import React, { useState } from "react";
import styles from "@/src/components/sections/Services/Services.module.css";
import {
  Smartphone,
  Radio,
  CheckCircle,
  FileText,
  Scale,
  Search,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";

const otherServiceIcons = [Radio, CheckCircle, FileText, Scale, Search];

const Services = () => {
  const { lang } = useLanguage();
  const t = translations.services;
  const [openH3, setOpenH3] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>

        {/* ── Columna lateral: otros servicios ── */}
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>
            {lang === "es" ? "Otros Servicios" : "Other Services"}
          </h3>
          <ul className={styles.sidebarList}>
            {t.otherServices.map((srv, i) => {
              const Icon = otherServiceIcons[i];
              return (
                <li key={i} className={styles.sidebarItem}>
                  <span className={styles.sidebarIcon}>
                    <Icon size={18} aria-hidden />
                  </span>
                  <span>
                    <strong className={styles.sidebarItemTitle}>
                      {srv.titulo[lang]}
                    </strong>
                    <span className={styles.sidebarItemDesc}>
                      {srv.descripcion[lang]}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* ── Área principal: Homologación ── */}
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <Smartphone className={styles.mainIcon} aria-hidden />
            <div>
              <h2 className={styles.mainTitle}>{t.homologacion.titulo[lang]}</h2>
              <p className={styles.mainSubtitle}>{t.homologacion.subtitulo[lang]}</p>
            </div>
          </div>

          {/* Cards H1, H2, H3 */}
          <div className={styles.homoGrid}>
            {/* H1 */}
            <Card className={styles.homoCard}>
              <CardHeader className={styles.homoCardHeader}>
                <span className={styles.homoBadge}>H1</span>
                <CardTitle className={styles.homoCardTitle}>
                  {t.homologacion.h1.titulo[lang]}
                </CardTitle>
              </CardHeader>
              <CardContent className={styles.homoCardContent}>
                <p className={styles.homoDesc}>{t.homologacion.h1.descripcion[lang]}</p>
              </CardContent>
            </Card>

            {/* H2 */}
            <Card className={styles.homoCard}>
              <CardHeader className={styles.homoCardHeader}>
                <span className={styles.homoBadge}>H2</span>
                <CardTitle className={styles.homoCardTitle}>
                  {t.homologacion.h2.titulo[lang]}
                </CardTitle>
              </CardHeader>
              <CardContent className={styles.homoCardContent}>
                <p className={styles.homoDesc}>{t.homologacion.h2.descripcion[lang]}</p>
              </CardContent>
            </Card>

            {/* H3 — expandable */}
            <Card className={`${styles.homoCard} ${styles.homoCardH3}`}>
              <CardHeader className={styles.homoCardHeader}>
                <span className={styles.homoBadge}>H3</span>
                <CardTitle className={styles.homoCardTitle}>
                  {t.homologacion.h3.titulo[lang]}
                </CardTitle>
              </CardHeader>
              <CardContent className={styles.homoCardContent}>
                <p className={styles.homoDesc}>{t.homologacion.h3.descripcion[lang]}</p>

                {/* Toggle details */}
                <button
                  className={styles.toggleBtn}
                  onClick={() => setOpenH3(!openH3)}
                  aria-expanded={openH3}
                >
                  {openH3
                    ? lang === "es" ? "Ver menos" : "Show less"
                    : lang === "es" ? "Ver detalles" : "Show details"}
                  {openH3 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {openH3 && (
                  <div className={styles.h3Details}>
                    {/* Precio */}
                    <div className={styles.h3Block}>
                      <p className={styles.h3Label}>
                        {t.homologacion.h3.precio.label[lang]}
                      </p>
                      <p className={styles.h3Value}>
                        {t.homologacion.h3.precio.valor[lang]}
                      </p>
                    </div>

                    {/* Plazo */}
                    <div className={styles.h3Block}>
                      <p className={styles.h3Label}>
                        {t.homologacion.h3.plazo.label[lang]}
                      </p>
                      <p className={styles.h3Value}>
                        {t.homologacion.h3.plazo.valor[lang]}
                      </p>
                    </div>

                    {/* Requisitos */}
                    <div className={styles.h3Block}>
                      <p className={styles.h3Label}>
                        {t.homologacion.h3.requisitos.label[lang]}
                      </p>
                      <ul className={styles.h3ReqList}>
                        {t.homologacion.h3.requisitos.items[lang].map(
                          (item: string, i: number) => (
                            <li key={i}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className={styles.h3Links}>
                      <a
                        href={t.homologacion.h3.links.ingresar.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.h3LinkBtn}
                      >
                        {t.homologacion.h3.links.ingresar.label[lang]}
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href={t.homologacion.h3.links.buscar.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.h3LinkBtn} ${styles.h3LinkBtnSecondary}`}
                      >
                        {t.homologacion.h3.links.buscar.label[lang]}
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    {/* Seguimiento compañías */}
                    <div className={styles.h3Block}>
                      <p className={styles.h3Label}>
                        {t.homologacion.h3.seguimiento.label[lang]}
                      </p>
                      <div className={styles.operatorGrid}>
                        {t.homologacion.h3.seguimiento.operadores.map(
                          (op: { nombre: string; url: string }, i: number) => (
                            <a
                              key={i}
                              href={op.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.operatorBtn}
                            >
                              {op.nombre}
                            </a>
                          )
                        )}
                      </div>
                    </div>

                    <p className={styles.h3Note}>
                      {t.homologacion.h3.nota[lang]}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Solicitud presencial / remota */}
          <div className={styles.solicitudGrid}>
            <div className={styles.solicitudBox}>
              <h4 className={styles.solicitudTitle}>
                {t.homologacion.solicitud.presencial.titulo[lang]}
              </h4>
              <p className={styles.solicitudText}>
                {t.homologacion.solicitud.presencial.horario[lang]}
              </p>
              <p className={styles.solicitudText}>
                {t.homologacion.solicitud.presencial.direccion[lang]}
              </p>
              <p className={styles.solicitudText}>
                {t.homologacion.solicitud.presencial.telefono[lang]}
              </p>
            </div>
            <div className={styles.solicitudBox}>
              <h4 className={styles.solicitudTitle}>
                {t.homologacion.solicitud.remota.titulo[lang]}
              </h4>
              <p className={styles.solicitudText}>
                {t.homologacion.solicitud.remota.descripcion[lang]}
              </p>
              <div className={styles.h3Links} style={{ marginTop: "0.75rem" }}>
                <a
                  href={t.homologacion.h3.links.ingresar.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.h3LinkBtn}
                >
                  {t.homologacion.h3.links.ingresar.label[lang]}
                  <ExternalLink size={14} />
                </a>
                <a
                  href={t.homologacion.h3.links.buscar.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.h3LinkBtn} ${styles.h3LinkBtnSecondary}`}
                >
                  {t.homologacion.h3.links.buscar.label[lang]}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;