import type { Locale } from "../lib/i18n";

export interface Translations {
  nav: {
    contact: string;
    tagline: string;
  };
  hero: {
    badge: string;
    role: string;
    bio: string;
    btnProjects: string;
    btnLinkedIn: string;
    btnTrajectory: string;
  };
  about: {
    sectionNum: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  services: {
    sectionNum: string;
    subtitle: string;
  };
  skills: {
    sectionNum: string;
    subtitle: string;
  };
  projects: {
    sectionNum: string;
    subtitle: string;
    searchPlaceholder: string;
    showingResults: (count: number, total: number, q: string) => string;
    clearFilter: string;
    noResultsTitle: string;
    noResultsDesc: string;
    includedAgents: (count: number) => string;
    viewAgents: string;
    exploreProject: string;
    modalCategoryTitle: string;
    modalKeyCapabilities: string;
    modalOpenAgent: string;
    modalUpdated: string;
    modalClose: string;
  };
  experience: {
    sectionNum: string;
    subtitle: string;
    card1Subtitle: string;
    card1Desc: string;
    card2Subtitle: string;
    card2Desc: string;
    card3Subtitle: string;
    card3Desc: string;
    calloutTitle: string;
    calloutDesc: string;
    calloutBtn: string;
  };
  contact: {
    sectionNum: string;
    subtitle: string;
    badge: string;
    title: string;
    desc: string;
    btnLinkedIn: string;
  };
  footer: {
    role: string;
    home: string;
  };
}

export const translations: Record<Locale, Translations> = {
  es: {
    nav: {
      contact: "Contacto",
      tagline: "/ AI & Full-Stack",
    },
    hero: {
      badge: "Disponible para proyectos técnicos & consultoría B2B",
      role: "AI Systems Architect | Full-Stack & Web3 Developer",
      bio: "Diseño arquitecturas escalables que combinan Sistemas de IA & Agentes autónomos, aplicaciones web de alto rendimiento y ecosistemas descentralizados en Web3 & Tokenización.",
      btnProjects: "Ver Proyectos",
      btnLinkedIn: "Conectar en LinkedIn",
      btnTrajectory: "Trayectoria / LinkedIn",
    },
    about: {
      sectionNum: "01 / Enfoque Profesional",
      card1Title: "AI Systems & Agentes",
      card1Desc:
        "Diseño de sistemas LLM, orquestación de agentes autónomos, extractores documentales con visión, pipelines RAG y automatizaciones complejas con n8n y LangChain.",
      card2Title: "FullStack Escalable",
      card2Desc:
        "Desarrollo frontend y backend con Next.js (App Router), TypeScript, React, Node.js y bases de datos relacionales (PostgreSQL, Supabase, Cloud SQL).",
      card3Title: "Blockchain & Web3",
      card3Desc:
        "Smart contracts seguros en Solidity, tokenización de Real World Assets (RWA), pasarelas de pago Web3 y arquitecturas multicadena auditables.",
    },
    services: {
      sectionNum: "02 / Servicios & Soluciones B2B",
      subtitle: "IA, Infraestructura & Web3",
    },
    skills: {
      sectionNum: "03 / Stack Tecnológico",
      subtitle: "Herramientas & Frameworks",
    },
    projects: {
      sectionNum: "04 / Proyectos Destacados",
      subtitle: "Producción, AI & Web3",
      searchPlaceholder: "Buscar tecnología (Gemini, Next.js, n8n...)",
      showingResults: (count, total, q) =>
        `Mostrando ${count} de ${total} proyectos para "${q}"`,
      clearFilter: "Limpiar filtro",
      noResultsTitle: "No se encontraron proyectos con ese criterio",
      noResultsDesc:
        "Intenta buscar por otro término como 'Gemini', 'TypeScript' o 'Solidity'.",
      includedAgents: (count) =>
        `Agentes & Soluciones Incluidas (${count})`,
      viewAgents: "Ver Agentes & Proyectos",
      exploreProject: "Explorar Proyecto",
      modalCategoryTitle: "Proyectos y Agentes de esta Categoría",
      modalKeyCapabilities: "Capacidades clave:",
      modalOpenAgent: "Abrir Agente / Proyecto",
      modalUpdated: "Actualizado continuamente",
      modalClose: "Cerrar",
    },
    experience: {
      sectionNum: "05 / Trayectoria & Hitos",
      subtitle: "Verificado en LinkedIn",
      card1Subtitle: "Orquestación & LLMs",
      card1Desc:
        "Diseño e implementación de agentes autónomos, extractores documentales de alta precisión con visión, pipelines RAG con bases vectoriales y flujos de automatización con n8n y LangChain.",
      card2Subtitle: "Frontend & Backend Escalable",
      card2Desc:
        "Desarrollo de arquitecturas web modernas con Next.js (App Router), TypeScript, React, APIs resilientes en Node.js y bases de datos relacionales (PostgreSQL, Supabase, Cloud SQL).",
      card3Subtitle: "Blockchain & Tokenización RWA",
      card3Desc:
        "Despliegue y auditoría de contratos inteligentes en Solidity, arquitecturas multicadena, tokenización de Real World Assets y pasarelas de pago descentralizadas.",
      calloutTitle: "Historial Profesional Verificado",
      calloutDesc:
        "Los roles en empresas, recomendaciones y trayectoria cronológica completa se encuentran disponibles y actualizados en LinkedIn.",
      calloutBtn: "Ver Trayectoria en LinkedIn",
    },
    contact: {
      sectionNum: "06 / Contacto Directo",
      subtitle: "LinkedIn",
      badge: "Disponible para Proyectos & Consultoría B2B",
      title: "¿Hablamos de tu próximo reto técnico?",
      desc: "Abierto a roles como AI Systems Architect, Full-Stack Developer o consultoría técnica especializada en agentes y automatización.",
      btnLinkedIn: "Contactar vía LinkedIn",
    },
    footer: {
      role: "AI Systems Architect | Full-Stack & Web3",
      home: "Inicio",
    },
  },
  en: {
    nav: {
      contact: "Contact",
      tagline: "/ AI & Full-Stack",
    },
    hero: {
      badge: "Available for technical projects & B2B consulting",
      role: "AI Systems Architect | Full-Stack & Web3 Developer",
      bio: "Designing scalable architectures combining AI Systems & Autonomous Agents, high-performance web applications, and decentralized Web3 & Tokenization ecosystems.",
      btnProjects: "View Projects",
      btnLinkedIn: "Connect on LinkedIn",
      btnTrajectory: "Milestones / LinkedIn",
    },
    about: {
      sectionNum: "01 / Professional Focus",
      card1Title: "AI Systems & Agents",
      card1Desc:
        "LLM systems engineering, autonomous agent orchestration, vision-based document extraction, RAG pipelines, and complex automations with n8n and LangChain.",
      card2Title: "Scalable Full-Stack",
      card2Desc:
        "Full-stack web engineering using Next.js (App Router), TypeScript, React, Node.js, and relational databases (PostgreSQL, Supabase, Cloud SQL).",
      card3Title: "Blockchain & Web3",
      card3Desc:
        "Secure Solidity smart contracts, Real World Asset (RWA) tokenization, Web3 payment gateways, and auditable multi-chain architectures.",
    },
    services: {
      sectionNum: "02 / B2B Services & Technical Solutions",
      subtitle: "AI, Infrastructure & Web3",
    },
    skills: {
      sectionNum: "03 / Technical Stack",
      subtitle: "Tools & Frameworks",
    },
    projects: {
      sectionNum: "04 / Featured Projects",
      subtitle: "Production, AI & Web3",
      searchPlaceholder: "Search tech (Gemini, Next.js, n8n...)",
      showingResults: (count, total, q) =>
        `Showing ${count} of ${total} projects for "${q}"`,
      clearFilter: "Clear filter",
      noResultsTitle: "No projects found matching that criteria",
      noResultsDesc:
        "Try searching for another term like 'Gemini', 'TypeScript', or 'Solidity'.",
      includedAgents: (count) =>
        `Included Agents & Solutions (${count})`,
      viewAgents: "View Agents & Projects",
      exploreProject: "Explore Project",
      modalCategoryTitle: "Projects & Agents in this Category",
      modalKeyCapabilities: "Key capabilities:",
      modalOpenAgent: "Open Agent / Project",
      modalUpdated: "Continuously updated",
      modalClose: "Close",
    },
    experience: {
      sectionNum: "05 / Milestones & Experience",
      subtitle: "Verified on LinkedIn",
      card1Subtitle: "Orchestration & LLMs",
      card1Desc:
        "Design and implementation of autonomous agents, high-precision document extraction with vision, RAG pipelines with vector databases, and automation workflows with n8n and LangChain.",
      card2Subtitle: "Scalable Frontend & Backend",
      card2Desc:
        "Modern web architecture development with Next.js (App Router), TypeScript, React, resilient Node.js APIs, and relational databases (PostgreSQL, Supabase, Cloud SQL).",
      card3Subtitle: "Blockchain & RWA Tokenization",
      card3Desc:
        "Deployment and audit of Solidity smart contracts, multi-chain architectures, Real World Asset tokenization, and decentralized payment integrations.",
      calloutTitle: "Verified Professional History",
      calloutDesc:
        "Company roles, endorsements, and complete chronological work experience are maintained and verified on LinkedIn.",
      calloutBtn: "View Milestones on LinkedIn",
    },
    contact: {
      sectionNum: "06 / Direct Contact",
      subtitle: "LinkedIn",
      badge: "Available for Technical Projects & B2B Consulting",
      title: "Ready to discuss your next technical challenge?",
      desc: "Open to opportunities as AI Systems Architect, Full-Stack Developer, or specialized technical consulting in autonomous agents and automation.",
      btnLinkedIn: "Contact via LinkedIn",
    },
    footer: {
      role: "AI Systems Architect | Full-Stack & Web3",
      home: "Home",
    },
  },
};
