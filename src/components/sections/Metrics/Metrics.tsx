"use client";

import style from "@/src/components/sections/Metrics/Metrics.module.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { t } from "@/src/i18n/translations";
import { useLanguage } from "@/src/context/LanguageContext";

const Metrics = () => {
  const { lang } = useLanguage();

  return (
    <section className={style.containerMetrics}>
      
      {/* TITULO */}
      <motion.h2
        className={style.tituloMetricas}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {t("metricas.titulo", lang)}
      </motion.h2>

      {/* PREVISITAS */}
      <motion.div
        className={style.previsitasMetricas}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className={style.linePrevisitas}>
          <CountUp
            start={100000}
            end={138747}
            duration={3}
            enableScrollSpy={true}
            scrollSpyOnce={true}
          >
            {({ countUpRef }) => (
              <span ref={countUpRef} className={style.preCount} />
            )}
          </CountUp>

          <p className={style.subtitleMetrics}>
            {t("metricas.cantidadPrevisitas", lang)}
          </p>
        </div>
      </motion.div>

      {/* ANTENAS */}
      <motion.div
        className={style.metricasAntenas}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className={style.lineAntenas}>
          <h3 className={style.numberAntenas}>5k+</h3>

          <p className={style.subtitleMetrics}>
            {t("metricas.cantidadAntenas", lang)}
          </p>
        </div>
      </motion.div>

      {/* HOMOLOGACIONES */}
      <motion.div
        className={style.homoMetricas}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.7 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className={style.lineHomo}>
          <CountUp
            start={700000}
            end={834945}
            duration={3}
            enableScrollSpy={true}
            scrollSpyOnce={true}
          >
            {({ countUpRef }) => (
              <span ref={countUpRef} className={style.homoCount} />
            )}
          </CountUp>

          <p className={style.subtitleMetrics}>
            {t("metricas.cantidadHomologacion", lang)}
          </p>
        </div>
      </motion.div>

    </section>
  );
};

export default Metrics;