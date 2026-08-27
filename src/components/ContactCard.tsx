import { useState } from "react";

export function ContactCard() {
  const [copied, setCopied] = useState(false);
  const email = "brayanespitia10@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoUrl = `mailto:${email}?subject=Oportunidad%20/%20Colaboraci%C3%B3n%20con%20Brayan%20Espitia`;

  return (
    <div className="rounded-xl border border-border/60 bg-card p-6 md:p-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-lg">
          <h3 className="text-lg font-bold text-foreground">
            ¿Interesado en colaborar? 🤝
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Estoy disponible para roles técnicos, consultoría en Sistemas de IA, desarrollo Full Stack de alto impacto y arquitectura Blockchain.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={mailtoUrl}
            id="btn-send-mail"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 active:scale-95 transition"
          >
            <span>Escribir Correo</span>
            <span>✉️</span>
          </a>

          <button
            type="button"
            id="btn-copy-email"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium border border-border/60 hover:bg-secondary/80 active:scale-95 transition cursor-pointer"
          >
            <span>{copied ? "¡Copiado! ✅" : "Copiar Email 📋"}</span>
          </button>
        </div>
      </div>

      <div className="pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="font-mono">
          <span>Email: </span>
          <span className="text-foreground font-medium">{email}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Brayan10j"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-link-github"
            className="hover:text-foreground transition flex items-center gap-1"
          >
            <span>🐙</span>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/brayan-espitia-615ab3127/"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-link-linkedin"
            className="hover:text-foreground transition flex items-center gap-1"
          >
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

