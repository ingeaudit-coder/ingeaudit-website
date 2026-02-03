"use client";

import Image from "next/image";
import LogoIngeaudit from "@/public/logo-inge-vector.svg";
import Link from "next/link";
import style from "@/src/components/sections/Navbar/Navbar.module.css";
import LanguageToggle from "@/src/components/LanguageToggle/LanguageToggle";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

export const Navbar = () => {
  const { lang } = useLanguage();

  return (
    <nav className={style.navContainer}>
      {/* ── Izquierda: Logo ── */}
      <Link href="/" className={style.linkImg}>
        <Image
          className={style.imgNavbar}
          width={100}
          height={25}
          src={LogoIngeaudit}
          alt="Logo de Ingeaudit"
          priority
        />
      </Link>

      {/* ── Derecha: enlaces + toggle idioma ── */}
      <div className={style.rightGroup}>
        <ol className={style.listContainer}>
          <li className={style.li}>
            <Link href="/">{t("nav.inicio", lang)}</Link>
          </li>
          <li className={style.li}>
            <Link href="/nosotros">{t("nav.nosotros", lang)}</Link>
          </li>
          <li className={style.li}>
            <Link href="/servicios">{t("nav.servicios", lang)}</Link>
          </li>
          <li className={style.li}>
            <Link href="/contactanos">{t("nav.contactanos", lang)}</Link>
          </li>
        </ol>

        <LanguageToggle />
      </div>
    </nav>
  );
};
