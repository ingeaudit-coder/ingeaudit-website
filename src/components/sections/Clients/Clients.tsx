'use client'

import style from "@/src/components/sections/Clients/Clients.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useEffect, useState } from "react";

// Imagina que estos son los logos de la empresa
const logos = [
  { src: "/images/logos/logo-claro-rojo.svg", alt: "Empresa 1" },
  { src: "/images/logos/logo-entel-header.png", alt: "Empresa 2" },
  { src: "/images/logos/logo-efe.svg", alt: "Empresa 3" },
  { src: "/images/logos/logo-wom.svg", alt: "Empresa 4" },
  { src: "/images/logos/logotipo-gallyas-telecom2.png", alt: "Empresa 5" },
];

const Clients = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // No renderiza nada en el servidor

  return (
    <section className="bg-black py-16">
      <h2 className="text-white text-center text-3xl font-bold mb-10">
        Empresas que confían en nosotros
      </h2>

      <Marquee
        gradient={true}
        gradientColor="black"
        speed={35}
        pauseOnHover={true}
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-8">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={80}
              /* className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" */
              className="object-contain transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Clients;