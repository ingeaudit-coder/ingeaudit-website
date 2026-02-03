"use client";

import Image from "next/image";
import styles from "./Team.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

type TeamMember = {
  id: number;
  name: string;
  roleKey: "ceoFounder" | "fieldSupervisor" | "chargeOf";
  email: string;
  seniorityEs: string;
  seniorityEn: string;
  img: string;
  isCEO?: boolean;
  linkedin?: string;
};

const team: TeamMember[] = [
  {
    id: 1,
    name: "Juan Pérez",
    roleKey: "ceoFounder",
    email: "jlperez@ingeaudit.cl",
    seniorityEs: "20 años en la empresa",
    seniorityEn: "20 years at the company",
    img: "/personal0.png",
    isCEO: true,
    linkedin:
      "https://www.linkedin.com/in/juan-luis-perez-moraga-3b6b851b/?originalSubdomain=cl",
  },
  {
    id: 2,
    name: "Alberto Millan",
    roleKey: "chargeOf",
    email: "alberto.millan@ingeaudit.cl",
    seniorityEs: "10 años en la empresa",
    seniorityEn: "10 years at the company",
    img: "/personal0.png",
  },
  {
    id: 3,
    name: "Hector Novoa",
    roleKey: "chargeOf",
    email: "hector.novoa@ingeaudit.cl",
    seniorityEs: "10 años en la empresa",
    seniorityEn: "10 years at the company",
    img: "/personal0.png",
  },
  {
    id: 4,
    name: "Camila Valencia",
    roleKey: "chargeOf",
    email: "camila.valencia@ingeaudit.cl",
    seniorityEs: "10 años en la empresa",
    seniorityEn: "10 years at the company",
    img: "/personal1.png",
  },
  {
    id: 5,
    name: "Javier Cerda",
    roleKey: "fieldSupervisor",
    email: "javier.cerda@ingeaudit.cl",
    seniorityEs: "2 años en la empresa",
    seniorityEn: "2 years at the company",
    img: "/personal0.png",
  },
  {
    id: 6,
    name: "Erick Barrios",
    roleKey: "fieldSupervisor",
    email: "erick.barrios@ingeaudit.cl",
    seniorityEs: "2 años en la empresa",
    seniorityEn: "2 years at the company",
    img: "/personal0.png",
  },
  {
    id: 7,
    name: "Ruben Tapia",
    roleKey: "fieldSupervisor",
    email: "ruben.tapia@ingeaudit.cl",
    seniorityEs: "2 años en la empresa",
    seniorityEn: "2 years at the company",
    img: "/personal0.png",
  },
  {
    id: 8,
    name: "Carola Menjiba",
    roleKey: "fieldSupervisor",
    email: "carola.menjiba@ingeaudit.cl",
    seniorityEs: "2 años en la empresa",
    seniorityEn: "2 years at the company",
    img: "/personal1.png",
  },
  {
    id: 9,
    name: "Felipe Tapia",
    roleKey: "fieldSupervisor",
    email: "felipe.tapia@ingeaudit.cl",
    seniorityEs: "2 años en la empresa",
    seniorityEn: "2 years at the company",
    img: "/personal0.png",
  },
];

export default function Team() {
  const { lang } = useLanguage();

  const ceo = team.find((p) => p.isCEO);
  const staff = team.filter((p) => !p.isCEO);

  const emailLabel    = t("team.email", lang);
  const seniorityLabel = t("team.seniority", lang);

  const getSeniority = (m: TeamMember) =>
    lang === "es" ? m.seniorityEs : m.seniorityEn;

  const getRole = (m: TeamMember) =>
    t(`team.roles.${m.roleKey}`, lang);

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{t("team.title", lang)}</h2>
      <p className={styles.subtitle}>{t("team.subtitle", lang)}</p>

      {/* CEO centrado */}
      {ceo && (
        <div className={styles.ceoWrapper}>
          <article className={`${styles.card} ${styles.ceoCard}`}>
            <div className={styles.imgBox}>
              <Image src={ceo.img} alt={ceo.name} fill className={styles.img} />
            </div>

            <h3>{ceo.name}</h3>
            <span>{getRole(ceo)}</span>

            <p>
              <strong>{emailLabel}:</strong> {ceo.email}
            </p>
            <p>
              <strong>{seniorityLabel}:</strong> {getSeniority(ceo)}
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
            <span>{getRole(p)}</span>

            <p>
              <strong>{emailLabel}:</strong> {p.email}
            </p>
            <p>
              <strong>{seniorityLabel}:</strong> {getSeniority(p)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
