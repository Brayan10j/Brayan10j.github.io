export interface ServiceItem {
  id: string;
  category: string;
  categoryEn?: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  emoji: string;
  highlights: string[];
  highlightsEn?: string[];
}

export const services: ServiceItem[] = [
  {
    id: "ai-agents",
    category: "AI Workflows & Conversational Agents",
    categoryEn: "AI Workflows & Conversational Agents",
    title: "Agentes de IA y Automatización de Flujos Operativos",
    titleEn: "AI Agents & Operational Workflow Automation",
    description:
      "Diseño e implementación de agentes autónomos y pipelines inteligentes conectados a WhatsApp Business, CRMs, correo y bases de datos. Automatización de cualificación de clientes, extracción de facturas y soporte 24/7 con n8n y LangChain.",
    descriptionEn:
      "Design and engineering of autonomous agents and intelligent pipelines connected to WhatsApp Business, CRMs, email, and databases. Automated client triage, document extraction, and 24/7 operations with n8n and LangChain.",
    emoji: "🤖",
    highlights: ["Agentes Autónomos", "Integración CRM & ERP", "Document AI & Visión", "n8n & Webhooks"],
    highlightsEn: ["Autonomous Agents", "CRM & ERP Integration", "Document AI & Vision", "n8n & Webhooks"],
  },
  {
    id: "custom-b2b-tools",
    category: "Micro-SaaS & Internal Tools",
    categoryEn: "Micro-SaaS & Internal Tools",
    title: "Herramientas Operativas y Micro-SaaS a Medida",
    titleEn: "Custom Micro-SaaS & Operational Portals",
    description:
      "Desarrollo ágil de aplicaciones web y micro-servicios para resolver cuellos de botella: gestión de cobros, despacho logístico con GPS y arqueos diarios. Reemplazo de hojas de cálculo propensas a errores por software ágil y escalable.",
    descriptionEn:
      "Rapid development of lightweight web applications and micro-services solving business bottlenecks: collections tracking, GPS logistics dispatch, and daily cash audits. Replacing spreadsheets with resilient modern tools.",
    emoji: "🚀",
    highlights: ["Dashboards a Medida", "PWA Local-First", "Next.js & Supabase", "APIs & Webhooks"],
    highlightsEn: ["Custom Dashboards", "Local-First PWA", "Next.js & Supabase", "APIs & Webhooks"],
  },
  {
    id: "enterprise-rag",
    category: "Enterprise RAG & Search",
    categoryEn: "Enterprise RAG & Search",
    title: "Sistemas RAG y Gestión de Conocimiento Interno",
    titleEn: "Enterprise RAG & Internal Knowledge Systems",
    description:
      "Buscadores semánticos y asistentes privados sobre la documentación de tu empresa (manuales, contratos, tickets y bases de datos). Respuestas verificadas con citas exactas, memoria contextual y estricto control de confidencialidad.",
    descriptionEn:
      "Semantic search engines and private assistants trained over company repositories (contracts, SOPs, tickets, catalogs). Precision answers with verified citations, contextual memory, and zero data leakage.",
    emoji: "📚",
    highlights: ["Búsqueda Semántica", "Vector Databases", "Cero Fuga de Datos", "Caché & Latencia"],
    highlightsEn: ["Semantic Search", "Vector Databases", "Zero Data Leakage", "Caching & Latency"],
  },
  {
    id: "fintech-digital-assets",
    category: "Web3, RWA & FinTech",
    categoryEn: "Web3, RWA & FinTech",
    title: "Infraestructura Web3, Smart Contracts & RWA",
    titleEn: "Web3 Infrastructure, Smart Contracts & RWA",
    description:
      "Despliegue y auditoría de contratos inteligentes en Solidity, tokenización de Real World Assets (RWA), pasarelas de cobro descentralizadas y conexión multi-wallet para ecosistemas DeFi e interfaces financieras modernas.",
    descriptionEn:
      "Deployment and auditing of Solidity smart contracts, Real World Asset (RWA) tokenization, decentralized payment gateways, and multi-wallet connectivity for modern DeFi and financial architectures.",
    emoji: "⛓️",
    highlights: ["Smart Contracts Solidity", "Tokenización RWA", "Web3 Payments", "Ethers.js / Wagmi"],
    highlightsEn: ["Solidity Smart Contracts", "RWA Tokenization", "Web3 Payments", "Ethers.js / Wagmi"],
  },
];
