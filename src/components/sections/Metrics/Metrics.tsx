import style from "@/src/components/sections/Metrics/Metrics.module.css"

const Metrics =()=> {
  return ( 
    <section className={style.containerMetrics}>
        <div className={style.metricasAntenas}>
            <h3>5k+</h3>
            <p>Más de 5 mil antenas medidas en todo Chile</p>
        </div>
        <div className={style.homoMetricas}>
            <h3>834945</h3>
            <p>Equipos homologados a la fecha</p>

        </div>
        <div className={style.previsitasMetricas}>
            <h3>431</h3>
            <p>Previsitas a la fecha</p>
        </div>
    </section>
  )
};

export default Metrics;
