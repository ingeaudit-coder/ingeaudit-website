"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, RadioTower, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/src/context/LanguageContext";
import translations from "@/src/i18n/translations";
import styles from "./NewServicePopup.module.css";

export default function NewServicePopup() {
  const { lang } = useLanguage();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const content = translations.newServicePopup;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  const close = () => setVisible(false);

  const openService = () => {
    setVisible(false);
    router.push("/servicios/cobertura-lte-5g-privado");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          className={styles.popup}
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: 95, y: 14, scale: 0.94, filter: "blur(8px)" }
          }
          animate={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: 55, y: 8, scale: 0.97, filter: "blur(4px)" }
          }
          transition={
            reduceMotion
              ? { duration: 0.15 }
              : { type: "spring", stiffness: 250, damping: 23, mass: 0.82 }
          }
          aria-label={content.aria[lang]}
        >
          <motion.div
            className={styles.glow}
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.65 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.12 }}
          />

          <motion.button
            className={styles.close}
            onClick={close}
            aria-label={content.close[lang]}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.6, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.28, delay: reduceMotion ? 0 : 0.2 }}
          >
            <X size={18} />
          </motion.button>

          <motion.div
            className={styles.iconWrap}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.55, rotate: -10 }}
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: [0.55, 1.1, 1], rotate: [-10, 3, 0] }
            }
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.12, ease: "easeOut" }}
          >
            <RadioTower size={21} />
          </motion.div>

          <motion.div
            className={styles.content}
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: reduceMotion ? 0 : 0.17, ease: "easeOut" }}
          >
            <motion.span
              className={styles.badge}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.24 }}
            >
              {content.badge[lang]}
            </motion.span>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: reduceMotion ? 0 : 0.3 }}
            >
              {content.title[lang]}
            </motion.h2>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: reduceMotion ? 0 : 0.36 }}
            >
              {content.description[lang]}
            </motion.p>

            <motion.button
              className={styles.cta}
              onClick={openService}
              initial={reduceMotion ? false : { opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: reduceMotion ? 0 : 0.42 }}
            >
              {content.cta[lang]}
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
