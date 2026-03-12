import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import translations from "@/src/i18n/translations";
import styles from "@/src/components/sections/HeroNoMain/HeroNoMain.module.css"

interface textProps {
  badge: string;
  subtitulo: string;
  titulo: string;
}
export const HeroNoMain =({badge, titulo, subtitulo}: textProps)=>{

  const { lang } = useLanguage();

  return(
    <>
    <section className={styles.hero}>
          <span className={styles.heroBadge}>
            {t(badge, lang)}
            
          </span>
          <h1 className={styles.heroTitle}>
            {t(titulo, lang)}
            
          </h1>
          <p className={styles.heroSubtitle}>
            {t(subtitulo, lang)}
            
          </p>
      </section>
    </>
  )
}