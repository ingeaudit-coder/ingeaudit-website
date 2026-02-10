import style from "@/src/components/sections/Metrics/Metrics.module.css";
import CountUp from "react-countup";

const Metrics = () => {
  return (
    <section className={style.containerMetrics}>
      <div className={style.previsitasMetricas}>
        <div className={style.linePrevisitas}>
          <CountUp
            start={100000}
            end={138747}
            duration={3}
            className={style.preCount}
          />
          <p className={style.subtitleMetrics}>Previsitas a la fecha</p>
        </div>
      </div>

      <div className={style.metricasAntenas}>
        <div className={style.lineAntenas}>
          <h3 className={style.numberAntenas}>5k+</h3>
          <p className={style.subtitleMetrics}>
            Más de 5 mil antenas medidas en todo Chile
          </p>
        </div>
      </div>

      <div className={style.homoMetricas}>
        <div className={style.lineHomo}>
          <CountUp
            start={700000}
            end={834945}
            duration={3}
            className={style.homoCount}
          />
          <p className={style.subtitleMetrics}>
            Equipos homologados a la fecha
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
