"use client";

import Link from "next/link";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  FileSignal,
  Globe,
  LineChart,
  Lock,
  Radio,
  RadioTower,
  Settings2,
  Signal,
  Smartphone,
  Waves,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";
import styles from "./cobertura.module.css";

const STUDY_ICONS = [Signal, Activity, RadioTower];

export default function CoberturaPrivadaPage() {
  const { lang } = useLanguage();
  const service = translations.privateCoveragePage;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true">
          <span className={styles.ringOne} />
          <span className={styles.ringTwo} />
          <span className={styles.ringThree} />
          <RadioTower className={styles.tower} />
        </div>

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.newBadge}>{service.hero.badge[lang]}</span>
          <h1>{service.hero.title[lang]}</h1>
          <p>{service.hero.subtitle[lang]}</p>
          <Link href="/contactanos" className={styles.primaryCta}>
            {service.hero.cta[lang]}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionHeading}>
          <span>{service.studies.eyebrow[lang]}</span>
          <h2>{service.studies.title[lang]}</h2>
          <p>{service.studies.subtitle[lang]}</p>
        </div>

        <div className={styles.studyGrid}>
          {service.studies.items.map((item, index) => {
            const Icon = STUDY_ICONS[index];
            return (
              <motion.article
                key={item.title.es}
                className={styles.studyCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className={styles.studyIcon}><Icon size={23} /></div>
                <h3>{item.title[lang]}</h3>
                <p>{item.description[lang]}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className={styles.diagramSection}>
        <div className={styles.sectionHeading}>
          <span>{service.diagram.eyebrow[lang]}</span>
          <h2>{service.diagram.title[lang]}</h2>
          <p>{service.diagram.subtitle[lang]}</p>
        </div>

        <motion.div
          className={styles.diagramCard}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.diagramGrid}>
            {/* ── Red privada 5G SA (servicio principal) ── */}
            <div className={styles.privatePanel}>
              <span className={styles.principalBadge}>{service.diagram.mainBadge[lang]}</span>

              <div className={styles.panelHeader}>
                <h3>{service.diagram.privateTitle[lang]}</h3>
                <span className={styles.tag}>{service.diagram.standaloneTag[lang]}</span>
                <span className={styles.chip}>{service.diagram.coverageChip[lang]}</span>
              </div>

              <div className={styles.towerWrap}>
                <svg
                  className={`${styles.towerBox} ${styles.privateWaves}`}
                  viewBox="0 0 300 240"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle className={styles.wave1} cx="150" cy="55" r="20" stroke="rgba(118, 170, 255, 0.7)" fill="none" />
                  <circle className={styles.wave2} cx="150" cy="55" r="40" stroke="rgba(118, 170, 255, 0.5)" fill="none" />
                  <circle className={styles.wave3} cx="150" cy="55" r="60" stroke="rgba(118, 170, 255, 0.3)" fill="none" />
                  <circle cx="150" cy="55" r="80" stroke="rgba(96, 165, 250, 0.14)" strokeDasharray="4 4" fill="none" />

                  <path d="M 100 220 L 138 90 L 162 90 L 200 220" stroke="#76aaff" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 115 220 L 144 110 L 156 110 L 185 220" stroke="#3b82f6" strokeWidth="2.5" opacity="0.8" />

                  <path d="M 112 180 L 188 180" stroke="#76aaff" strokeWidth="2.5" />
                  <path d="M 122 140 L 178 140" stroke="#76aaff" strokeWidth="2.5" />
                  <path d="M 132 105 L 168 105" stroke="#76aaff" strokeWidth="2.5" />

                  <path d="M 112 180 L 178 140" stroke="#3b82f6" strokeWidth="2" />
                  <path d="M 188 180 L 122 140" stroke="#3b82f6" strokeWidth="2" />
                  <path d="M 122 140 L 168 105" stroke="#3b82f6" strokeWidth="2" />
                  <path d="M 178 140 L 132 105" stroke="#3b82f6" strokeWidth="2" />

                  <path d="M 145 90 L 145 35 M 155 90 L 155 35" stroke="#76aaff" strokeWidth="3" />
                  <line x1="150" y1="20" x2="150" y2="40" stroke="#9cc3ff" strokeWidth="3" />

                  <rect x="130" y="36" width="13" height="34" rx="3" fill="#2563eb" stroke="#dbeafe" strokeWidth="2" />
                  <rect x="133" y="42" width="7" height="7" rx="1" fill="#eff6ff" />
                  <rect x="133" y="57" width="7" height="7" rx="1" fill="#eff6ff" />

                  <rect x="157" y="36" width="13" height="34" rx="3" fill="#2563eb" stroke="#dbeafe" strokeWidth="2" />
                  <rect x="160" y="42" width="7" height="7" rx="1" fill="#eff6ff" />
                  <rect x="160" y="57" width="7" height="7" rx="1" fill="#eff6ff" />

                  <circle cx="150" cy="20" r="4" fill="#9cc3ff" className="animate-pulse" />

                  <g transform="translate(108, 200)">
                    <rect x="0" y="0" width="84" height="24" rx="12" fill="rgba(201, 169, 97, 0.12)" stroke="#c9a961" strokeWidth="2" />
                    <text x="42" y="16" fill="#e6cf9a" fontSize="11" fontWeight="800" textAnchor="middle">
                      {service.diagram.saHigh[lang]}
                    </text>
                  </g>
                </svg>
              </div>

              <svg className={styles.fanLines} viewBox="0 0 500 32" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M 250 0 L 80 32 M 250 0 L 250 32 M 250 0 L 420 32"
                  stroke="#76aaff"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.7"
                />
                <circle cx="250" cy="2" r="3.5" fill="#9cc3ff" />
              </svg>

              <div className={styles.nodeGrid}>
                <article className={styles.nodeCard}>
                  <div className={styles.nodeIcon}>
                    <LineChart size={30} />
                    <span className={styles.ping} />
                  </div>
                  <span className={styles.nodeLabel}>{service.diagram.nodes.telemetry[lang]}</span>
                </article>

                <article className={styles.nodeCard}>
                  <div className={styles.nodeIcon}>
                    <Radio size={30} />
                    <span className={styles.ping} />
                  </div>
                  <span className={styles.nodeLabel}>{service.diagram.nodes.ptt[lang]}</span>
                </article>

                <article className={`${styles.nodeCard} ${styles.nodeCardActive}`}>
                  <div className={styles.nodeTags}>
                    <span className={styles.nodeTagPrivate}>{service.diagram.phoneTags.onsite[lang]}</span>
                    <span className={styles.nodeTagPublic}>{service.diagram.phoneTags.offsite[lang]}</span>
                  </div>
                  <div className={styles.nodeIcon}>
                    <Smartphone size={28} />
                    <span className={`${styles.ping} ${styles.pingRose}`} />
                    <span className={`${styles.ping} ${styles.pingRight}`} />
                  </div>
                  <span className={styles.nodeLabel}>{service.diagram.nodes.phones[lang]}</span>
                </article>
              </div>
            </div>

            {/* ── Firewall: salida controlada ── */}
            <div className={styles.bridgePanel}>
              <div className={styles.bridgeRow}>
                <span className={`${styles.bridgeLink} ${styles.bridgeLinkBlue}`} />
                <div className={styles.firewall}>
                  <div className={styles.firewallIcon}>
                    <Lock size={22} />
                  </div>
                  <span>{service.diagram.firewall[lang]}</span>
                </div>
                <span className={`${styles.bridgeLink} ${styles.bridgeLinkRed}`} />
              </div>

              <div className={styles.bridgeBadges}>
                <span className={styles.badgeOk}>{service.diagram.firewallBadges.allowed[lang]}</span>
                <span className={styles.badgeDenied}>
                  <strong>{service.diagram.firewallBadges.denied[lang]}</strong>
                  <span>{service.diagram.firewallBadges.deniedTarget[lang]}</span>
                </span>
              </div>
            </div>

            {/* ── Red 5G pública ── */}
            <div className={styles.publicPanel}>
              <div className={styles.publicHeader}>
                <h3>{service.diagram.publicTitle[lang]}</h3>
                <span className={styles.publicTag}>{service.diagram.publicTag[lang]}</span>
              </div>

              <div className={styles.publicTower}>
                <svg
                  className={`${styles.publicTowerBox} ${styles.publicWaves}`}
                  viewBox="0 0 200 180"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle className={styles.wave1} cx="100" cy="45" r="16" stroke="rgba(224, 86, 106, 0.55)" fill="none" />
                  <circle className={styles.wave2} cx="100" cy="45" r="32" stroke="rgba(224, 86, 106, 0.35)" fill="none" />

                  <path d="M 70 160 L 92 65 L 108 65 L 130 160" stroke="#e0566a" strokeWidth="2.5" opacity="0.85" />
                  <path d="M 78 130 L 122 130" stroke="#e0566a" strokeWidth="1.5" opacity="0.7" />
                  <path d="M 85 95 L 115 95" stroke="#e0566a" strokeWidth="1.5" opacity="0.7" />
                  <path d="M 78 130 L 115 95" stroke="#f0697c" strokeWidth="1.2" opacity="0.5" />
                  <path d="M 122 130 L 85 95" stroke="#f0697c" strokeWidth="1.2" opacity="0.5" />

                  <line x1="100" y1="65" x2="100" y2="30" stroke="#e0566a" strokeWidth="2" />

                  <rect x="88" y="32" width="8" height="20" rx="2" fill="#c73b50" stroke="#ffd0d5" strokeWidth="1" />
                  <rect x="104" y="32" width="8" height="20" rx="2" fill="#c73b50" stroke="#ffd0d5" strokeWidth="1" />

                  <circle cx="100" cy="28" r="2.5" fill="#e0566a" />
                </svg>
              </div>

              <div className={styles.publicArrow}>
                <ArrowDown size={22} />
              </div>

              <div className={styles.internetBox}>
                <div className={styles.internetTitle}>
                  <Globe size={16} />
                  {service.diagram.internetTitle[lang]}
                </div>
                <p>{service.diagram.internetSubtitle[lang]}</p>
              </div>

              <div className={styles.outsideLabel}>{service.diagram.outsideLabel[lang]}</div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className={styles.techSection}>
        <div className={styles.techCard}>
          <div className={styles.techIntro}>
            <span>{service.technical.eyebrow[lang]}</span>
            <h2>{service.technical.title[lang]}</h2>
            <p>{service.technical.description[lang]}</p>
          </div>

          <div className={styles.techDetail}>
            <div className={styles.detailIcon}><Settings2 size={24} /></div>
            <div>
              <span className={styles.detailLabel}>{service.technical.equipmentLabel[lang]}</span>
              <h3>{service.technical.equipmentTitle[lang]}</h3>
              <p>{service.technical.equipmentDescription[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processVisual} aria-hidden="true">
          <Waves size={40} />
          <BarChart3 size={40} />
          <FileSignal size={40} />
        </div>
        <div className={styles.processText}>
          <span>{service.cta.eyebrow[lang]}</span>
          <h2>{service.cta.title[lang]}</h2>
          <p>{service.cta.description[lang]}</p>
          <Link href="/contactanos" className={styles.secondaryCta}>
            {service.cta.button[lang]}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
