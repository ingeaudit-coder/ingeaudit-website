"use client";

import style from "@/src/components/sections/Footer/Footer.module.css";
import LogoIngeaudit from "@/public/logo-inge-vector.svg";
import Image from "next/image";
import Link from "next/link";
import logoLinkedin from "@/public/images/logos-rrss/linkedin.svg";
import logoX from "@/public/images/logos-rrss/x_dark.svg";
import logoFacebook from "@/public/images/logos-rrss/facebook-icon.svg";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className={style.footerContainer}>
      <div className={style.logoP}>
        <Link href="/">
          <Image
            className={style.containerLogo}
            width={100}
            height={25}
            src={LogoIngeaudit}
            alt="Logo de Ingeaudit"
            priority
          />
        </Link>
        <p>{t("footer.tagline", lang)}</p>
      </div>

      <div className={style.containerLinkInteres}>
        <h3>{t("footer.legal", lang)}</h3>
        <ol className={style.containerListLink}>
          <li>
            <Link href="" className={style.linksFooter}>
              {t("footer.certifications", lang)}
            </Link>
          </li>
          <li>
            <Link href="" className={style.linksFooter}>
              {t("footer.securityPolicy", lang)}
            </Link>
          </li>
          <li className={style.linkTrabajaInacap}>
            <Link href="https://emplea.inacap.cl/trabajar-en-ingenieros-y-auditores-asociados-limitada" target="_blank" className={style.linksFooter}>
              {t("footer.workWithUs", lang)}
            </Link>
            <ArrowUpRight className="w-4 h-4"/>
          </li>
          <li  className={style.linkDeInteres}>
            <Link href="" className={style.linksFooter}>
              {t("footer.interestLinks", lang)}
            </Link>
            <ArrowUpRight className="w-4 h-4"/>
          </li>
        </ol>
      </div>
        <span className={style.lineFooter}></span>
        <div className={style.iconosRRSS}>
          <Link href="https://www.linkedin.com/in/ingeaudit-ltda" target="_blank">
            <Image src={logoLinkedin} alt="LinkedIn" width={23} height={23} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-600 contrast-0" />
          </Link>
        </div>
        <div className={style.containerReservados}>
          <p>&copy; 2026 Ingeaudit Limitada. {t("footer.copyright", lang)}</p>
        </div>
    </footer>
  );
};

export default Footer;
