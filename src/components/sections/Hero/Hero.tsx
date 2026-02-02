"use client"

import style from "@/src/components/sections/Hero/Hero.module.css";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Clients from "../Clients/Clients";

const Hero = () => {
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
        <h1 className={style.titleHero}><br/><span className="block mb-2">Lideres en</span> {/* Línea estática */}
        <span className="text-blue-1000 [text-shadow:0_0_10px_rgba(255,255,255,0.6)]"> {/* Color de acento de tu marca */}
    <TypeAnimation
      sequence={[
        'Consultoría Regulatoria', 1500,
        'Homologación de Equipos', 1500,
        'Medición Densidad de Potencia', 1500,
        'Auditoría Técnica', 1500
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span></h1>
        {/* <h1 className={style.titleHero}>Lideres en <br/>Consultoría Técnica-Regulatoria</h1> */}
        <p className={style.subtitleHero}>
          Más de <strong><b>20 años de experiencia</b></strong> respaldando a la industria de las telecomunicaciones
        </p>
      </section>
    <div className={style.containerClientHero}> 
        <Clients />
      </div>
    </main>
  );
};

export default Hero;
