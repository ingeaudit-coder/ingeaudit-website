"use client";

import styles from "./personas.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";
import { HeroNoMain } from "@/src/components/sections/HeroNoMain/HeroNoMain";
import ImeiGuide from "@/src/components/sections/ImeiGuide/ImeiGuide";
import Homologacion from "@/src/components/sections/Homologacion/Homologacion";

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

      <ImeiGuide />

      <Homologacion />
      
    </div>
  );
};

export default PersonasNaturales;