"use client";

import styles from "@/src/components/sections/LinkedinFeed/LinkedinFeed.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, MapPin } from "lucide-react";

const posts = [
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445533772881772544?collapsed=1",
    height: 300,
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445529479114043393?collapsed=1",
    height: 300,
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7427084917714341889?collapsed=1",
    height: 300,
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7425193268063232000?collapsed=1",
    height: 300,
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7425189594796728320?collapsed=1",
    height: 300,
  },
];

export default function LinkedinFeed() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {t("linkedin.sectionTitle", lang)}
      </motion.h2>

      <div className={styles.scrollArea}>
        <div className={styles.track}>
          <motion.div
            className={styles.profileCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.profileBanner}>
              <Image
                src="/images/linkedin/banner.jpeg"
                alt=""
                fill
                sizes="504px"
                className={styles.bannerImg}
              />
            </div>
            <div className={styles.profileBody}>
              <div className={styles.avatarWrapper}>
                <Image
                  src="/images/linkedin/perfil.jpeg"
                  alt="Ingeaudit"
                  fill
                  sizes="64px"
                  className={styles.avatar}
                />
              </div>

              <div className={styles.nameRow}>
                <span className={styles.profileName}>INGEAUDIT LTDA</span>
                <BadgeCheck size={16} className={styles.verifiedIcon} />
              </div>
              <p className={styles.profileTagline}>{t("linkedin.tagline", lang)}</p>
              <div className={styles.profileLocation}>
                <MapPin size={13} />
                <span>{t("linkedin.location", lang)}</span>
              </div>

              <Link
                href="https://www.linkedin.com/in/ingeaudit-ltda"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.followBtn}
              >
                {t("linkedin.follow", lang)}
              </Link>
            </div>
          </motion.div>

          {posts.map((post, index) => (
            <motion.div
              key={index}
              className={styles.cardWrapper}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <iframe
                src={post.src}
                height={post.height}
                width="504"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                title={`Publicación de LinkedIn ${index + 1}`}
                loading="lazy"
                className={styles.iframe}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
