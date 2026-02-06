"use client";

import React from "react";
import styles from "@/src/components/sections/Services/Services.module.css";
import {
  Smartphone,
  Radio,
  CheckCircle,
  FileText,
  Scale,
  Search,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";

const icons = [Smartphone, Radio, CheckCircle, FileText, Scale, Search];

const Services = () => {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {translations.services.map((servicio, idx) => {
          const Icon = icons[idx];

          return (
            <Card key={idx} className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <div className={styles.iconWrap}>
                  <Icon className={styles.icon} aria-hidden />
                </div>
                <CardTitle className={styles.title}>
                  {servicio.titulo[lang]}
                </CardTitle>
              </CardHeader>

              <CardContent className={styles.cardContent}>
                <p className={styles.description}>{servicio.descripcion[lang]}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
