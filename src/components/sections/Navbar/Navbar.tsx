"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);

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

      {/* ── 2. Menú Desktop (CORREGIDO: Ahora está fuera del div móvil) ── */}
      {/* Usamos 'hidden md:flex' para que solo se vea en pantallas medianas o más */}
      <div className={style.containerToggleBurguer}>
        <div className={`${style.rightGroup} hidden md:flex`}>
          <ol className={style.listContainer}>
            {navLinks.map((link) => (
              <li className={style.li}  key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ol>
          {/* Toggle de idioma para Desktop */}
          <LanguageToggle />
        </div>
        {/* ── 3. Menú Móvil (Solo botón hamburguesa) ── */}
        {/* 'flex md:hidden' para que desaparezca en desktop y no duplique cosas */}
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