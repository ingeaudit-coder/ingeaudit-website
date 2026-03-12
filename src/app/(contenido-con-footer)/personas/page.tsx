"use client";

import Image from "next/image";
import styles from "./personas.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import translations from "@/src/i18n/translations";
import Button from "@/src/components/UI/Button/Button";
import { HeroNoMain } from "@/src/components/sections/HeroNoMain/HeroNoMain";

const Personas = () => {
  const { lang } = useLanguage();
  

  return (
    <div className={styles.container}>
      <HeroNoMain 
      badge="personasNaturales.hero.badge"
      titulo="personasNaturales.hero.titulo" 
      subtitulo="asdasd"
      />
      
    </div>
  );
};

export default Personas;
