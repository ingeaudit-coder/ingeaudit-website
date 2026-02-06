"use client";

import Image from "next/image";
import styles from "./Team.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import { Smartphone, Radio, Scale, FileSearch } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type WorkTeam = {
  id: number;
  titleKey: string;
  descriptionKey: string;
  teamSize: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
};

const workTeams: WorkTeam[] = [
  {
    id: 1,
    titleKey: "homologation",
    descriptionKey: "homologationDesc",
    teamSize: 4,
    icon: Smartphone,
  },
  {
    id: 2,
    titleKey: "fieldMeasurements",
    descriptionKey: "fieldMeasurementsDesc",
    teamSize: 10,
    icon: Radio,
  },
  {
    id: 3,
    titleKey: "regulatoryAdvisory",
    descriptionKey: "regulatoryAdvisoryDesc",
    teamSize: 3,
    icon: Scale,
  },
  {
    id: 4,
    titleKey: "technicalAudits",
    descriptionKey: "technicalAuditsDesc",
    teamSize: 2,
    icon: FileSearch,
  },
];

export default function Team() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t("team.title", lang)}</h2>
      <p className={styles.subtitle}>{t("team.subtitle", lang)}</p>

      <div className={styles.mainLayout}>
        {/* CEO Card - Left Side */}
        <div className={styles.ceoSection}>
          <Card className={`${styles.card} ${styles.ceoCard}`}>
            <CardHeader className={styles.cardHeader}>
              <div className={styles.imgBox}>
                <Image
                  src="/JL.png"
                  alt="Juan Luis Pérez"
                  fill
                  className={styles.img}
                />
              </div>

              <CardTitle className={styles.name}>Juan Luis Pérez</CardTitle>
              <p className={styles.role}>{t("team.roles.ceoFounder", lang)}</p>
            </CardHeader>

            <CardContent className={styles.cardContent}>
              <p className={styles.meta}>
                <strong>{t("team.email", lang)}:</strong> jlperez@ingeaudit.cl
              </p>
              <p className={styles.meta}>
                <strong>{t("team.phone", lang)}:</strong> +56 9 7709 7383
              </p>
              <p className={styles.meta}>
                <strong>{t("team.seniority", lang)}:</strong>{" "}
                {lang === "es" ? "20 años en la empresa" : "20 years at the company"}
              </p>

              <blockquote className={styles.quote}>
                <p className={styles.quoteText}>
                  {t("team.ceoQuote", lang)}
                </p>
              </blockquote>

              <a
                href="https://www.linkedin.com/in/juan-luis-perez-moraga-3b6b851b/?originalSubdomain=cl"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinBtn}
                aria-label="LinkedIn CEO"
              >
                <Image src="/linkedin.png" alt="LinkedIn" width={84} height={84} />
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Work Teams - Right Side */}
        <div className={styles.teamsSection}>
          <div className={styles.teamsGrid}>
            {workTeams.map((team) => {
              const IconComponent = team.icon;
              return (
                <Card key={team.id} className={styles.teamCard}>
                  <CardHeader className={styles.teamCardHeader}>
                    <div className={styles.teamIcon}>
                      <IconComponent size={40} className={styles.iconSvg} />
                    </div>
                    <CardTitle className={styles.teamTitle}>
                      {t(`team.teams.${team.titleKey}`, lang)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className={styles.teamCardContent}>
                    <p className={styles.teamDescription}>
                      {t(`team.teams.${team.descriptionKey}`, lang)}
                    </p>
                    <p className={styles.teamSize}>
                      <strong>
                        {team.teamSize}{" "}
                        {lang === "es" ? "profesionales" : "professionals"}
                      </strong>
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}