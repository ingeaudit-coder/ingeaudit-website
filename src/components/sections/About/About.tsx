import React from 'react';
import styles from "@/src/components/sections/About/About.module.css";

const About = () => {
    return (
        <div className={styles.section}>
            {/* Información Corporativa */}
      <div className={styles.infoContainer}>
        {/* Columna Izquierda: Quiénes Somos */}
        <div className={styles.leftColumn}>
          <div className={styles.infoBlockLarge}>
            <h3>¿Quiénes Somos?</h3>
            <p>
              INGEAUDIT Ltda. es una Consultora creada el año 2004 y conformada
              por profesionales chilenos con una vasta y exitosa trayectoria en
              el desarrollo de proyectos relacionados con las Industrias de las
              Telecomunicaciones, Transportes y las Nuevas Tecnologías de la
              Comunicación e Información (NTIC).
              <br />
              <br />
              Ingeaudit ha prestado servicios a empresas como WOM, Claro, Entel,
              EFE y Gallyas, realizando recepción de obras, mediciones de
              densidad de potencia, procesos de homologación y otras
              evaluaciones técnicas especializadas.
            </p>
          </div>
        </div>

        {/* Columna Derecha: Misión y Visión */}
        <div className={styles.rightColumn}>
          <div className={styles.infoBlock}>
            <h3>Misión</h3>
            <p>
              Entregar servicios de auditoría y consultoría técnica con altos
              estándares de calidad, orientados al cumplimiento normativo y a la
              optimización de los procesos de nuestros clientes, aportando
              soluciones confiables que fortalezcan su desempeño y
              competitividad en el mercado.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3>Visión</h3>
            <p>
              Consolidarnos como un referente en servicios técnicos y
              regulatorios especializados, reconocidos por la excelencia
              profesional, la independencia de nuestros análisis y la capacidad
              de generar valor sostenido para nuestros clientes y el sector.
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default About;