"use client";

import Image from "next/image";
import styles from "./mediciones.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import Button from "@/src/components/UI/Button/Button";
import { HeroNoMain } from "@/src/components/sections/HeroNoMain/HeroNoMain";

const Mediciones = () => {
  const { lang } = useLanguage();

  return (
    <div className={styles.container}>
      <HeroNoMain
      badge="mediciones.badge"
      titulo="mediciones.titulo"
      subtitulo="mediciones.subtitulo"
      />
    </div>
  );
};

export default Mediciones;