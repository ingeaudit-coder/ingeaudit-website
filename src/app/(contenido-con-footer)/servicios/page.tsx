import Image from "next/image";
import styles from "./servicios.module.css";
import Certifications from "@/src/components/sections/Certifications/Certifications";
import Services from "@/src/components/sections/Services/Services";

const Servicios = () => {
  return (
    <div className={styles.container}>
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
          <h1 className={styles.mainTitle}>Portafolio de Servicios</h1>
          <p className={styles.subtitle}>
            Soluciones integrales para la industria de telecomunicaciones
          </p>
        </div>
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Certifications />
      </section>
    </div>
  );
};

export default Servicios;