import style from "@/src/components/sections/Footer/Footer.module.css";
import LogoIngeaudit from "@/public/logo-inge-vector.svg";
import Image from "next/image";
import Link from "next/link";
import logoLinkdin from "@/public/images/logos-rrss/linkedin.svg"
import logoX from "@/public/images/logos-rrss/x_dark.svg"
import logoFacebook from "@/public/images/logos-rrss/facebook-icon.svg"

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.logoP}>
        <Link href="/">
          <Image
          className={style.containerLogo}
            width={100}
            height={25}
            /*        src={LogoIngeaudit}*/
            src={LogoIngeaudit}
            alt="Logo de Ingeaudit transparente"
            priority
          />
        </Link>
        <p>
          Expertos en soluciones tecnico-regulatorio, medicion del espectro
          electromagnetico y homologacion de equipos.
        </p>
      </div>
      <div className={style.containerLinkInteres}>
        <h3>LEGAL</h3>
        <ol>
          <li>
            <Link rel="stylesheet" href="" className={style.linksFooter}>Certificaciones</Link>
          </li>
          <li>
            <Link rel="stylesheet" href="" className={style.linksFooter}>Politicas de Seguridad</Link>
          </li>
          <li>
            <Link rel="stylesheet" href="" className={style.linksFooter}>Trabaja con Nosotros</Link>
          </li>
          <li>
            <Link rel="stylesheet" href="" className={style.linksFooter}>Links de Interes</Link>
          </li>
        </ol>
      </div>
      {/* <div className={style.containerRRSS}> */}
        <div className={style.iconosRRSS}>
            <Link rel="stylesheet" href="" ><Image src={logoLinkdin} alt="logo-linkedin" width={23} height={23} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 contrast-0"/></Link>
            <Link rel="stylesheet" href="" ><Image src={logoX} alt="logo-x" width={23} height={23} className="grayscale  opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 contrast-0" /></Link>
            <Link rel="stylesheet" href="" ><Image src={logoFacebook} alt="logo-facebook" width={23} height={23} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 " /></Link>
        </div>
        <div className={style.containerReservados}>
            <p> &copy; 2026 Ingeaudit Limitada. Todos los derechos reservados.</p>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
