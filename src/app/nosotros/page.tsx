import Image from "next/image";
import Team from "@/src/components/sections/Team/Team";
import styles from "./nosotros.module.css";
import About from "@/src/components/sections/About/About";

const Nosotros = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <Image
          src="/img-hero-oficial.jpg"
          alt="Fondo corporativo"
          fill
          priority
          className="object-cover"
        />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>Nosotros</h1>
          <p className={styles.subtitle}>
            Más de 20 años liderando la consultoría técnica-regulatoria en Chile
          </p>
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Team />
      </section>
    </>
  );
};

export default Nosotros;
