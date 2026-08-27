import { useState } from "react";

export function ContactCard() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("Oportunidad / Consultoría en AI, Full Stack o Web3");
  const [message, setMessage] = useState(
    "Hola Brayan, vi tu portafolio y me gustaría conversar sobre una oportunidad en AI Systems, desarrollo Full Stack o soluciones Blockchain."
  );

  const email = "brayanespitia10@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6 md:p-10 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Direct Links */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold mb-4 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Disponible para nuevos retos</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              ¿Hablamos de tu próximo proyecto? 🚀
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Disponible para roles de liderazgo técnico, arquitectura de sistemas con IA, desarrollo Full Stack escalable, contratos inteligentes y consultoría Blockchain.
            </p>
          </div>

          {/* Contact Direct Items */}
          <div className="space-y-3">
            {/* Email item with copy button */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-secondary/50 border border-border">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="text-xl">✉️</span>
                <div className="truncate">
                  <p className="text-xs text-muted-foreground">Email Directo</p>
                  <p className="text-sm font-semibold truncate">{email}</p>
                </div>
              </div>
              <button
                type="button"
                id="btn-copy-email"
                onClick={handleCopyEmail}
                className="ml-2 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition cursor-pointer shrink-0"
              >
                {copied ? "¡Copiado! ✅" : "Copiar 📋"}
              </button>
            </div>

            {/* Social / Direct Links */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://github.com/Brayan10j"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-link-github"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-secondary/50 hover:bg-secondary border border-border text-sm font-medium transition"
              >
                <span className="text-lg">🐙</span>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/brayan-espitia-615ab3127/"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-link-linkedin"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-secondary/50 hover:bg-secondary border border-border text-sm font-medium transition"
              >
                <span className="text-lg">💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Mailto Composer */}
        <div className="md:col-span-7 bg-secondary/30 p-6 rounded-xl border border-border/70 flex flex-col justify-between">
          <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
            <span>✍️</span>
            <span>Mensaje Rápido / Envío Directo</span>
          </h4>

          <div className="space-y-4">
            <div>
              <label htmlFor="input-subject" className="block text-xs font-semibold text-foreground mb-1.5">
                Asunto del Mensaje:
              </label>
              <input
                id="input-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Asunto..."
              />
            </div>

            <div>
              <label htmlFor="input-body" className="block text-xs font-semibold text-foreground mb-1.5">
                Cuerpo del Mensaje:
              </label>
              <textarea
                id="input-body"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Escribe tu mensaje..."
              />
            </div>

            <a
              href={mailtoUrl}
              id="btn-send-email"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary py-3 px-5 text-sm font-bold text-primary-foreground shadow hover:opacity-90 active:scale-98 transition"
            >
              <span>Enviar por Correo Electrónico</span>
              <span>🚀</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
