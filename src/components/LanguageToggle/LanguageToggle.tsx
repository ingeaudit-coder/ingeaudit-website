"use client";

import { useLanguage } from "@/src/context/LanguageContext";
import style from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
      className={style.pill}
    >
      <span className={`${style.option} ${lang === "es" ? style.active : ""}`}>
        ES
      </span>
      <span className={style.divider} />
      <span className={`${style.option} ${lang === "en" ? style.active : ""}`}>
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;
