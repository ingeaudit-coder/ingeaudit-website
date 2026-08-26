"use client";

import Image from "next/image";
import styles from "./Team.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import { Smartphone, Radio, Scale, FileSearch, UserRound } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

type WorkTeam = {
  id: number;
  titleKey: string;
  descriptionKey: string;
  teamSize: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  visibleUsers: number;
  extraCount: number;
};

const workTeams: WorkTeam[] = [
  {
    id: 1,
    titleKey: "homologation",
    descriptionKey: "homologationDesc",
    teamSize: 4,
    icon: Smartphone,
    visibleUsers: 2,
    extraCount: 2,
  },
  {
    id: 2,
    titleKey: "fieldMeasurements",
    descriptionKey: "fieldMeasurementsDesc",
    teamSize: 10,
    icon: Radio,
    visibleUsers: 2,
    extraCount: 8,
  },
  {
    id: 3,
    titleKey: "regulatoryAdvisory",
    descriptionKey: "regulatoryAdvisoryDesc",
    teamSize: 4,
    icon: Scale,
    visibleUsers: 2,
    extraCount: 2,
  },
  {
    id: 4,
    titleKey: "technicalAudits",
    descriptionKey: "technicalAuditsDesc",
    teamSize: 4,
    icon: FileSearch,
    visibleUsers: 2,
    extraCount: 2,
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
                  src="/images/personal/JL.webp"
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
                <strong>{t("team.seniority", lang)}:</strong>{" "}
                {lang === "es" ? "+25 años de experiencia" : "+25 years of experience"}
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
                <Image src="/images/logos-rrss/linkedin.svg" alt="LinkedIn" width={30} height={30} />
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

                    {/* Avatar Group - icon only, no images */}
                    <div className={styles.avatarGroupWrapper}>
                      <AvatarGroup>
                        {Array.from({ length: team.visibleUsers }).map((_, index) => (
                          <Avatar key={`${team.id}-${index}`} className="size-12">
                            <AvatarFallback>
                              <UserRound size={20} />
                            </AvatarFallback>
                          </Avatar>
                        ))}
                        {team.extraCount > 0 && (
                          <AvatarGroupCount className="size-12 bg-[#251070] text-white">+{team.extraCount}</AvatarGroupCount>
                        )}
                      </AvatarGroup>
                    </div>
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
