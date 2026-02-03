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
        <ol>
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
          <li>
            <Link href="" className={style.linksFooter}>
              {t("footer.workWithUs", lang)}
            </Link>
          </li>
          <li>
            <Link href="" className={style.linksFooter}>
              {t("footer.interestLinks", lang)}
            </Link>
          </li>
        </ol>
      </div>

      <div className={style.iconosRRSS}>
        <Link href="">
          <Image src={logoLinkedin} alt="LinkedIn" width={23} height={23} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 contrast-0" />
        </Link>
        <Link href="">
          <Image src={logoX} alt="X" width={23} height={23} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 contrast-0" />
        </Link>
        <Link href="">
          <Image src={logoFacebook} alt="Facebook" width={23} height={23} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
        </Link>
      </div>

      <div className={style.containerReservados}>
        <p>&copy; 2026 Ingeaudit Limitada. {t("footer.copyright", lang)}</p>
      </div>
    </footer>
  );
};

export default Footer;
