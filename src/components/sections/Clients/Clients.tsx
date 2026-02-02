'use client'

import style from "@/src/components/sections/Clients/Clients.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useEffect, useState } from "react";

// Imagina que estos son los logos de la empresa
const logos = [
  { src: "/images/logos/clarovtr-logo.svg", alt: "Empresa 1", width: 200  },
  { src: "/images/logos/entel-logo.svg", alt: "Empresa 2" },
  { src: "/images/logos/logo-efe.svg", alt: "Empresa 3", width: 100  },
  { src: "/images/logos/logo-wom.svg", alt: "Empresa 4", width: 70 },
  { src: "/images/logos/logotipo-gallyas-telecom2.png", alt: "Empresa 5", width: 120  },
  { src: "/images/logos/motorola-logo.png", alt: "Empresa 6", width: 100  },
  { src: "/images/logos/komatsu-logo.webp", alt: "Empresa 7" },
  { src: "/images/logos/codelco-logo.svg", alt: "Empresa 8" },
  { src: "/images/logos/telefonica-logo.svg", alt: "Empresa 9", width: 150  },
  { src: "/images/logos/sollatek-logo.png", alt: "Empresa 10" },
];

const Clients = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // No renderiza nada en el servidor

  return (
    <section className={style.clientContainer}>
     {/*  <h2 className="text-white text-center text-3xl font-bold mb-10">
        Empresas que confían en nosotros
      </h2> */}

      <Marquee
        gradient={true}
        gradientColor="black"
        gradientWidth={0}
        speed={20}
        pauseOnHover={true}
        className={style.miMarquee}
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-8">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 120}
              height={80}
              /* className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" */
              className="grayscale opacity-100 hover:grayscale-0 hover:opacity-100 transition-all duration-300 contrast-0"
              /* className="object-contain transition-all duration-300" */
              
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Clients;