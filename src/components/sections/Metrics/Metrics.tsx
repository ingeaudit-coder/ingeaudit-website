"use client";

import style from "@/src/components/sections/Metrics/Metrics.module.css";
import CountUp from "react-countup";

const Metrics = () => {
  return (
    <section className={style.containerMetrics}>
      <h2 className={style.tituloMetricas}>¿Por qué elegir INGEAUDIT?</h2>
      <div className={style.previsitasMetricas}>
        <div className={style.linePrevisitas}>
          <CountUp
            start={100000}
            end={138747}
            duration={3}
            enableScrollSpy={true}
            scrollSpyOnce={true}
          >
            {({ countUpRef }) => (
              /* Aquí creamos nosotros el elemento y le pasamos la referencia */
              <span ref={countUpRef} className={style.preCount} />
            )}
          </CountUp>
          <p className={style.subtitleMetrics}>Previsitas a la fecha</p>
        </div>
      </div>

      <div className={style.metricasAntenas}>
        <div className={style.lineAntenas}>
          <h3 className={style.numberAntenas}>5k+</h3>
          <p className={style.subtitleMetrics}>Antenas medidas en todo Chile</p>
        </div>
      </div>

      <div className={style.homoMetricas}>
        <div className={style.lineHomo}>
          <CountUp
            start={700000}
            end={834945}
            duration={3}
            enableScrollSpy={true}
            scrollSpyOnce={true}
          >
            {({ countUpRef }) => (
              /* Aquí creamos nosotros el elemento y le pasamos la referencia */
              <span ref={countUpRef} className={style.homoCount} />
            )}
          </CountUp>
          <p className={style.subtitleMetrics}>
            Equipos homologados a la fecha
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
