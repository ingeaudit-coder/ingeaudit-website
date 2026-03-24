"use client";

import style from "@/src/components/sections/Hero/Hero.module.css";

import { TypeAnimation } from "react-type-animation";
import Clients from "../Clients/Clients";
import { useLanguage } from "@/src/context/LanguageContext";
import translations, { t } from "@/src/i18n/translations";
import Button from "../../UI/Button/Button";
import { useRouter } from "next/navigation";
import { BadgeTitle } from "../Badge/Badge";

const Hero = () => {
  const router = useRouter();

  const hacerScroll = () => {
    const seccion = document.getElementById("seccion-servicios");
    if (!seccion) return;

    const destino = seccion.getBoundingClientRect().top + window.scrollY;
    const inicio = window.scrollY;
    const distancia = destino - inicio;
    const duracion = 800;
    let tiempoInicio: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animar = (tiempo: number) => {
      if (tiempoInicio === null) tiempoInicio = tiempo;
      const progreso = Math.min((tiempo - tiempoInicio) / duracion, 1);
      window.scrollTo(0, inicio + distancia * easeInOutCubic(progreso));
      if (progreso < 1) requestAnimationFrame(animar);
    };

    requestAnimationFrame(animar);
  };

  const { lang } = useLanguage();

  // Build the TypeAnimation sequence from the active language array
  const words: string[] = translations.hero.typeSequence[lang];
  const sequence: (string | number)[] = words.flatMap((w) => [w, 1500]);

  return (
    <main className={style.heroContainer}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={style.videoHero}
      >
        <source src="/video/video-project-web-inge.mp4" type="video/mp4" />
      </video>
      <div className={style.overlay} />

      <section className={style.content}>
        <h1 className={style.titleHero}>
          <BadgeTitle/>
          <span className={style.containerAnimationHero}>
            <span>{t("hero.typeSequence", lang)}<br/>{t("hero.SaltoLineaType", lang)}</span>
          </span>
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
            onClick={hacerScroll}
          />
          <Button
            variant="secondary"
            children={lang === "es" ? "Homologar aquí" : "Certify here"}
            className={`${style.btn} ${style.btnHomologar}`}
            onClick={() => router.push("/personas")}
          />
          {/* <Button
            variant="secondary"
            children={lang === "es" ? "Contáctanos" : "Contact"}
            className={style.btn}
            onClick={() => router.push("/contactanos")}
          /> */}
        </div>
      </section>

      {/* Clients strip visible at bottom of hero on load */}
      <div className={style.containerClientHero}>
        <p className={style.clientsLabel}>{translations.clients.label[lang]}</p>
        <Clients />
      </div>
    </main>
  );
};

export default Hero;