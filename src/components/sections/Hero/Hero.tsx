"use client";

import style from "@/src/components/sections/Hero/Hero.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Clients from "../Clients/Clients";
import { useLanguage } from "@/src/context/LanguageContext";
import translations, { t } from "@/src/i18n/translations";
import Button from "../../UI/Button/Button";

const Hero = () => {
  const { lang } = useLanguage();

  // Build the TypeAnimation sequence from the active language array
  const words: string[] = translations.hero.typeSequence[lang];
  const sequence: (string | number)[] = words.flatMap((w) => [w, 1500]);

  return (
    <main className={style.heroContainer}>
      <Image
        src="/img-hero-oficial.jpg"
        alt="Fondo corporativo"
        fill
        priority
        className={style.imgHero}
      />
      <div className={style.overlay} />

      <section className={style.content}>
        <h1 className={style.titleHero}>
          <br />
          <span className="block mb-2">{t("hero.leadingLine", lang)}</span>
          <div className={style.containerAnimationHero}>
            <span className="text-blue-1000 [text-shadow:0_0_10px_rgba(255,255,255,0.6)]">
              {/* key={lang} remounts TypeAnimation when language changes */}
              <TypeAnimation
                key={lang}
                sequence={sequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
        </h1>

        <p className={style.subtitleHero}>
          <strong>
            <b>{lang === "es" ? "20 años" : "20 years"}</b>
          </strong>{" "}
          {lang === "es"
            ? "de experiencia respaldando a la industria de las telecomunicaciones"
            : "of experience supporting the telecommunications industry"}
        </p>
        <div className={style.containerButtonHero}>
          <Button
            variant="primary"
            children={lang === "es" ? "Servicios" : "Services"}
            className={style.btn}
          />
          <Button
            variant="secondary"
            children={lang === "es" ? "Contactanos" : "Contact"}
            className={style.btn}
          />
        </div>
      </section>

      <div className={style.containerClientHero}>
        <Clients />
      </div>
    </main>
  );
};

export default Hero;
