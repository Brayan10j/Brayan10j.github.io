import { useLocale } from "../lib/i18n";

export function LanguageToggle() {
  const [locale, setLocale] = useLocale();

  return (
    <div
      role="group"
      aria-label="Seleccionar idioma / Select language"
      className="inline-flex items-center rounded-lg border border-border/60 bg-secondary/60 p-0.5 text-xs font-mono font-medium shadow-2xs"
    >
      <button
        type="button"
        id="btn-lang-es"
        onClick={() => setLocale("es")}
        className={`px-2 py-1 rounded-md transition cursor-pointer ${
          locale === "es"
            ? "bg-foreground text-background font-bold shadow-xs"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={locale === "es"}
        title="Cambiar a Español"
      >
        ES
      </button>
      <button
        type="button"
        id="btn-lang-en"
        onClick={() => setLocale("en")}
        className={`px-2 py-1 rounded-md transition cursor-pointer ${
          locale === "en"
            ? "bg-foreground text-background font-bold shadow-xs"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={locale === "en"}
        title="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
