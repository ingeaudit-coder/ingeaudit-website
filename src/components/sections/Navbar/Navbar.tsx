import Image from "next/image";
import LogoIngeaudit from "@/public/image-ingeaudit-transparent.svg";
import Link from "next/link";
import style from "@/src/components/sections/Navbar/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.navContainer}>
      <Link href="/">
        <Image
          width={150}
          height={50}
          src={LogoIngeaudit}
          alt="Logo de Ingeaudit transparente"
          priority
        />
      </Link>
      <ol className={style.listContainer}>
        <li className={style.li}>
          <Link href="/">Inicio</Link>
        </li>
        <li className={style.li}>
          <Link href="/nosotros">Nosotros</Link>
        </li>
        <li className={style.li}>
          <Link href="/servicios">Servicios</Link>
        </li>
        <li className={style.li}>
          <Link href="/contactanos">Contactanos</Link>
        </li>
      </ol>
    </nav>
  );
};
