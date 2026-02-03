"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Lang } from "@/src/i18n/translations";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  toggleLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");

  // hydrate from sessionStorage after first render (avoids SSR mismatch)
  useEffect(() => {
    const saved = sessionStorage.getItem("ingeaudit-lang");
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  const toggleLang = () =>
    setLang((prev) => {
      const next: Lang = prev === "es" ? "en" : "es";
      sessionStorage.setItem("ingeaudit-lang", next);
      return next;
    });

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
