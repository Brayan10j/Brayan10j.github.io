import { useState, useEffect } from "react";

export type Locale = "es" | "en";

export function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const saved = localStorage.getItem("portfolio_lang");
  if (saved === "es" || saved === "en") return saved;
  const browserLang = navigator.language?.toLowerCase() || "";
  return browserLang.startsWith("es") ? "es" : "en";
}

export function setStoredLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  localStorage.setItem("portfolio_lang", locale);
  document.documentElement.lang = locale;
  window.dispatchEvent(
    new CustomEvent("portfolio-locale-change", { detail: locale })
  );
}

export function useLocale(): [Locale, (l: Locale) => void] {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    // Read on mount
    const initial = getStoredLocale();
    setLocaleState(initial);
    document.documentElement.lang = initial;

    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<Locale>;
      if (customEvent.detail) {
        setLocaleState(customEvent.detail);
      }
    };

    window.addEventListener("portfolio-locale-change", handler);
    return () => window.removeEventListener("portfolio-locale-change", handler);
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setStoredLocale(newLocale);
    setLocaleState(newLocale);
  };

  return [locale, changeLocale];
}
