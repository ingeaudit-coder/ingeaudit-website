"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import LogoIngeaudit from "@/public/logo-inge-vector.svg";
import style from "@/src/components/sections/Navbar/Navbar.module.css";
import LanguageToggle from "@/src/components/LanguageToggle/LanguageToggle";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

// Componentes de Shadcn
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export const Navbar = () => {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setMobileServiciosOpen(false);
  };

  const serviciosSublinks = [
    { href: "/homologacion", label: t("nav.homologacion", lang) },
    { href: "/mediciones", label: t("nav.mediciones", lang) },
  ];

  const isServiciosActive =
    pathname === "/servicios" ||
    pathname.startsWith("/servicios/") ||
    pathname === "/homologacion" ||
    pathname.startsWith("/homologacion/") ||
    pathname === "/mediciones" ||
    pathname.startsWith("/mediciones/");

  const navLinks = [
    { href: "/", label: t("nav.inicio", lang) },
    { href: "/nosotros", label: t("nav.nosotros", lang) },
    { href: "/contactanos", label: t("nav.contactanos", lang) },
  ];

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDesktopDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 150);
  };

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

      {/* ── 2. Menú Desktop ── */}
      <div className={style.containerToggleBurguer}>
        <div className={`${style.rightGroup} hidden md:flex`}>
          <ol className={style.listContainer}>
            {/* Inicio */}
            <li className={`${style.li} ${pathname === "/" ? style.active : ""}`}>
              <Link href="/">{t("nav.inicio", lang)}</Link>
            </li>

            {/* Servicios con dropdown */}
            <li
              className={`${style.li} ${style.dropdown} ${isServiciosActive ? style.active : ""}`}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link href="/servicios" className={style.dropdownTrigger}>
                {t("nav.servicios", lang)}
                <ChevronDown className={`${style.chevron} ${desktopDropdownOpen ? style.chevronOpen : ""}`} />
              </Link>
              <div className={`${style.dropdownMenu} ${desktopDropdownOpen ? style.dropdownMenuOpen : ""}`}>
                {serviciosSublinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className={`${style.dropdownItem} ${pathname === sub.href ? style.dropdownItemActive : ""}`}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </li>

            {/* Nosotros y Contactanos */}
            {navLinks.filter(l => l.href !== "/").map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <li className={`${style.li} ${isActive ? style.active : ""}`} key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              );
            })}
          </ol>
          {/* Toggle de idioma para Desktop */}
          <LanguageToggle />
        </div>

        {/* ── 3. Menú Móvil (Solo botón hamburguesa) ── */}
        <div className="flex items-center gap-4 md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-9 w-9" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className={`bg-[#0f1e32] border-l-slate-700 text-white w-75 sm:w-75 ${style.navMovil}`}
            >
              <SheetTitle className="text-left text-slate-300 mb-6 border-b border-slate-700 pb-4">
                Menú
              </SheetTitle>

              <div className="flex flex-col gap-6">
                <nav className="flex flex-col space-y-4">
                  {/* Inicio */}
                  <Link
                    href="/"
                    onClick={handleLinkClick}
                    className={`text-gray-500 hover:text-blue-400 ${pathname === "/" ? "text-blue-400 font-medium" : ""}`}
                  >
                    {t("nav.inicio", lang)}
                  </Link>

                  {/* Servicios con submenú */}
                  <div>
                    <button
                      onClick={() => setMobileServiciosOpen(!mobileServiciosOpen)}
                      className={`flex items-center justify-between w-full text-gray-500 hover:text-blue-400 ${isServiciosActive ? "text-blue-400 font-medium" : ""}`}
                    >
                      {t("nav.servicios", lang)}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${mobileServiciosOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileServiciosOpen && (
                      <div className="flex flex-col space-y-3 mt-3 ml-4 border-l border-slate-700 pl-3">
                        {serviciosSublinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={handleLinkClick}
                            className={`text-sm text-gray-500 hover:text-blue-400 ${pathname === sub.href ? "text-blue-400 font-medium" : ""}`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Nosotros y Contactanos */}
                  {navLinks.filter(l => l.href !== "/").map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className={`text-gray-500 hover:text-blue-400 ${isActive ? "text-blue-400 font-medium" : ""}`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="flex items-center justify-between mt-4 p-3 bg-slate-900/50 rounded-lg">
                  <span className="text-sm text-slate-400">Idioma / Language</span>
                  {/* Toggle de idioma para Móvil */}
                  <LanguageToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
