"use client";

import style from "@/src/components/sections/Badge/Badge.module.css"
import { t } from "@/src/i18n/translations"
import { useLanguage } from "@/src/context/LanguageContext";

export const BadgeTitle =()=>{

const { lang } = useLanguage();

    return(
        <>
        <section className={style.containerBadge}>
            <span className={style.circleBadge}></span>                               
            <p className={style.textParrafo}>{t("hero.leadingLine", lang)}</p>
        </section>
        </>
    )
}