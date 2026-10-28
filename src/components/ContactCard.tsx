import {
  LinkedInIcon,
  GitHubIcon,
  ExternalLinkIcon,
} from "./icons/PlatformIcons";

export function ContactCard() {
  const linkedInUrl = "https://www.linkedin.com/in/brayan-espitia-615ab3127";
  const gitHubUrl = "https://github.com/Brayan10j";

  return (
    <div className="rounded-2xl border border-border/70 bg-card p-6 md:p-8 space-y-6 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-lg">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Disponible para Proyectos & Consultoría B2B</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            ¿Hablamos de tu próximo reto técnico?
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Abierto a roles como <strong>AI Systems Architect</strong>, <strong>Full-Stack Developer</strong> o consultoría técnica especializada en agentes y automatización.
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-contact-linkedin-main"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0A66C2] text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition shadow-sm"
          >
            <LinkedInIcon className="w-4 h-4 text-white" />
            <span>Contactar vía LinkedIn</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-white/90" />
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="text-muted-foreground font-mono">
          <span>🇨🇴 Colombia</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-link-github"
            className="hover:text-foreground transition flex items-center gap-1.5 font-medium"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub (@Brayan10j)</span>
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-link-linkedin"
            className="hover:text-foreground transition flex items-center gap-1.5 font-medium"
          >
            <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
            <span>Perfil LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
