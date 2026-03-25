"use client";

import Image from "next/image";
import styles from "./mediciones.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import Button from "@/src/components/UI/Button/Button";
import { HeroNoMain } from "@/src/components/sections/HeroNoMain/HeroNoMain";
import { CardMediciones } from "@/src/components/UI/CardMediciones/CardMediciones";
import { style } from "framer-motion/client";
import { NecesitasComunicarte } from "@/src/components/sections/NecesitasComunicarte/NecesitasComunicarte";

const Mediciones = () => {
  const { lang } = useLanguage();

  return (
    <div className={styles.container}>
      <HeroNoMain
      badge="mediciones.badge"
      titulo="mediciones.titulo"
      subtitulo="mediciones.subtitulo"
      />
      <section>
        <CardMediciones/>
        <NecesitasComunicarte/>
      </section>
    </div>
  );
};

export default Mediciones;