import style from "@/src/components/sections/Hero/Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <main className={style.heroContainer}>
        <Image
        src="/img-hero-oficial.jpg"
        alt="Fondo corporativo"
        fill
        priority
        className="object-cover"
      />
      <div className={style.overlay} />
      <section className={style.content}>
        <h1 className={style.titleHero}>Lideres en <br/>Consultoría Técnica-Regulatoria</h1>
        <p className={style.subtitleHero}>
          Más de <strong><b>20 años de experiencia</b></strong> respaldando a la industria de las telecomunicaciones
        </p>
      </section>
    </main>
  );
};

export default Hero;
