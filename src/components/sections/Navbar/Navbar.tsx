"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react"; // Ícono hamburguesa
import LogoIngeaudit from "@/public/logo-inge-vector.svg";
import style from "@/src/components/sections/Navbar/Navbar.module.css";
import LanguageToggle from "@/src/components/LanguageToggle/LanguageToggle";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

// Componentes de Shadcn (Asegúrate de que estas rutas sean correctas)
import { Button } from "@/components/ui/button"; 
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export const Navbar = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "/", label: t("nav.inicio", lang) },
    { href: "/nosotros", label: t("nav.nosotros", lang) },
    { href: "/servicios", label: t("nav.servicios", lang) },
    { href: "/contactanos", label: t("nav.contactanos", lang) },
  ];

  return (
    <nav className={style.navContainer}>
      {/* ── 1. Logo (Izquierda) ── */}
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

      {/* ── 2. Menú Desktop (Oculto en móvil) ── */}
      {/* 'hidden md:flex' oculta esto en pantallas pequeñas */}
      

      {/* ── 3. Menú Móvil (Hamburguesa) ── */}
      {/* 'flex md:hidden' muestra esto SOLO en pantallas pequeñas */}
      <div className="flex items-center gap-4 md:hidden ml-auto">

        <div className={`${style.rightGroup} hidden md:flex`}>
        <ol className={style.listContainer}>
          {navLinks.map((link) => (
            <li className={style.li} key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ol>
        <LanguageToggle />
      </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            {/* Botón hamburguesa */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <Menu className="h-8 w-8" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          
          {/* Contenido del menú desplegable */}
          <SheetContent 
            side="right" 
            className={`bg-[#0f1e32] border-l-slate-700 text-white w-75 sm:w-75 ${style.navMovil}`}
          >
            <SheetTitle className="text-left text-slate-300 mb-6 border-b border-slate-700 pb-4">
              Menú
            </SheetTitle>
            
            <div className="flex flex-col gap-6">
              {/* Lista de enlaces móvil */}
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-lg font-light tracking-wide hover:text-blue-400 transition-colors py-2 border-b border-slate-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Toggle de idioma en versión móvil */}
              <div className="flex items-center justify-between mt-4 p-3 bg-slate-900/50 rounded-lg">
                <span className="text-sm text-slate-400">Idioma / Language</span>
                <LanguageToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

/* "use client";

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
 */