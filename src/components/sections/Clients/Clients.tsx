'use client'

import style from "@/src/components/sections/Clients/Clients.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useEffect, useState } from "react";

// Imagina que estos son los logos de la empresa
const logos = [
  { src: "/images/logos/clarovtr-logo.svg", alt: "ClaroVTR", width: 140 },
  { src: "/images/logos/entel-logo.svg", alt: "Entel", width: 110 },
  { src: "/images/logos/logo-efe.svg", alt: "EFE", width: 90 },
  { src: "/images/logos/logo-wom.svg", alt: "WOM", width: 80 },
  { src: "/images/logos/logotipo-gallyas-telecom2.png", alt: "Gallyas Telecom", width: 110 },
  { src: "/images/logos/motorola-logo.png", alt: "Motorola", width: 250 },
  { src: "/images/logos/komatsu-logo.webp", alt: "Komatsu", width: 110 },
  { src: "/images/logos/codelco-logo.svg", alt: "Codelco", width: 110 },
  { src: "/images/logos/telefonica-logo.svg", alt: "Telefónica", width: 120 },
  { src: "/images/logos/sollatek-logo.png", alt: "Sollatek", width: 110 },
];

const Clients = () => {
  const [mounted, setMounted] = useState(false);

  const logoHeight = 70; // Cambia este valor para ajustar el tamaño de los logos
  const baseHeight = 50; // Altura original de referencia para mantener la proporción

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
      >
        {logos.map((logo, index) => (
          <div key={index} className={style.logoWrapper}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={(logo.width || 110) * (logoHeight / baseHeight)}
              height={logoHeight}
              className={style.logosClients}
              style={{ width: "auto", height: logoHeight }}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Clients;