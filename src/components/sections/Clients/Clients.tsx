'use client'

import style from "@/src/components/sections/Clients/Clients.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";

// Imagina que estos son los logos de la empresa
const logos = [
  { src: "/images/logos/clarovtr-logo(22).png", alt: "ClaroVTR", scale: 1.1 },
  { src: "/images/logos/entel-logo.svg", alt: "Entel" },
  { src: "/images/logos/logo-efe.svg", alt: "EFE" },
  { src: "/images/logos/logo-wom.webp", alt: "WOM", scale: 0.8 },
  { src: "/images/logos/logotipo-gallyas-telecom2.png", alt: "Gallyas Telecom"},
  { src: "/images/logos/motorola-logo.png", alt: "Motorola", scale: 2 },
  { src: "/images/logos/komatsu-logo.webp", alt: "Komatsu", scale: 2.8 },
  { src: "/images/logos/codelco-logo.svg", alt: "Codelco"},
  { src: "/images/logos/telefonica-logo.svg", alt: "Telefónica", scale: 3.5 },
  { src: "/images/logos/sollatek-logo.png", alt: "Sollatek"},
];

const Clients = () => {
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // No renderiza nada en el servidor

  return (
    <section className={style.clientContainer}>
      <Marquee
        gradient={true}
        gradientColor="black"
        gradientWidth={60}
        speed={25}
        pauseOnHover={true}
        className={style.miMarquee}
        autoFill={true}
      >
        {logos.map((logo, index) => (
          <div key={index} className={style.logoWrapper}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={50}
              className={style.logosClients}
               style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
              /* style={{ width: width, height: logoHeight }} */
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Clients;