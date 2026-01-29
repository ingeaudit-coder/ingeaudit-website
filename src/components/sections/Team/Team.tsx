import Image from "next/image";
import styles from "./Team.module.css";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  seniority: string;
  img: string;
  isCEO?: boolean;
  linkedin?: string;
};

const team: TeamMember[] = [
  {
    id: 1,
    name: "Juan Pérez",
    role: "CEO & Fundador",
    email: "jlperez@ingeaudit.cl",
    seniority: "20 años en la empresa",
    img: "/personal0.png",
    isCEO: true,
    linkedin:
      "https://www.linkedin.com/in/juan-luis-perez-moraga-3b6b851b/?originalSubdomain=cl",
  },
  {
    id: 2,
    name: "Alberto Millan",
    role: "Encargado de",
    email: "alberto.millan@ingeaudit.cl",
    seniority: "10 años en la empresa",
    img: "/personal0.png",
  },
  {
    id: 3,
    name: "Hector Novoa",
    role: "Encargado de",
    email: "hector.novoa@ingeaudit.cl",
    seniority: "10 años en la empresa",
    img: "/personal0.png",
  },
  {
    id: 4,
    name: "Camila Valencia",
    role: "Encargado de",
    email: "camila.valencia@ingeaudit.cl",
    seniority: "10 años en la empresa",
    img: "/personal1.png",
  },
  {
    id: 5,
    name: "Javier Cerda",
    role: "Supervisor de Terreno",
    email: "javier.cerda@ingeaudit.cl",
    seniority: "2 años en la empresa",
    img: "/personal0.png",
  },
  {
    id: 6,
    name: "Erick Barrios",
    role: "Supervisor de Terreno",
    email: "erick.barrios@ingeaudit.cl",
    seniority: "2 años en la empresa",
    img: "/personal0.png",
  },
  {
    id: 7,
    name: "Ruben Tapia",
    role: "Supervisor de Terreno",
    email: "ruben.tapia@ingeaudit.cl",
    seniority: "2 años en la empresa",
    img: "/personal0.png",
  },
  {
    id: 8,
    name: "Carola Menjiba",
    role: "Supervisor de Terreno",
    email: "carola.menjiba@ingeaudit.cl",
    seniority: "2 años en la empresa",
    img: "/personal1.png",
  },
  {
    id: 9,
    name: "Felipe Tapia",
    role: "Supervisor de Terreno",
    email: "felipe.tapia@ingeaudit.cl",
    seniority: "2 años en la empresa",
    img: "/personal0.png",
  },
];

export default function Team() {
  const ceo = team.find((p) => p.isCEO);
  const staff = team.filter((p) => !p.isCEO);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nosotros</h2>

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
      <h2 className={styles.title}>Nuestro Equipo</h2>
      <p className={styles.subtitle}>
        Profesionales con amplia experiencia en telecomunicaciones y regulación.
      </p>
      {/* CEO centrado */}
      {ceo && (
        <div className={styles.ceoWrapper}>
          <article className={`${styles.card} ${styles.ceoCard}`}>
            <div className={styles.imgBox}>
              <Image src={ceo.img} alt={ceo.name} fill className={styles.img} />
            </div>

            <h3>{ceo.name}</h3>
            <span>{ceo.role}</span>

            <p>
              <strong>Correo:</strong> {ceo.email}
            </p>
            <p>
              <strong>Antigüedad:</strong> {ceo.seniority}
            </p>
            {ceo.linkedin && (
              <a
                href={ceo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinBtn}
                aria-label="LinkedIn CEO"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={70}
                  height={70}
                />
              </a>
            )}
          </article>
        </div>
      )}

      {/* Resto del equipo */}
      <div className={styles.grid}>
        {staff.map((p) => (
          <article key={p.id} className={styles.card}>
            <div className={styles.imgBox}>
              <Image src={p.img} alt={p.name} fill className={styles.img} />
            </div>

            <h3>{p.name}</h3>
            <span>{p.role}</span>

            <p>
              <strong>Correo:</strong> {p.email}
            </p>
            <p>
              <strong>Antigüedad:</strong> {p.seniority}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
