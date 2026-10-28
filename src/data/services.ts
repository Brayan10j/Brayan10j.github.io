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
      "Diseño e implementación de agentes conversacionales e integraciones automatizadas (conectados a WhatsApp Business, CRM, correo y bases de datos). Automatización completa de la cualificación de clientes, atención 24/7 y gestión de citas o datos, eliminando tareas manuales repetitivas y acelerando la conversión de ventas.",
    descriptionEn:
      "Design and engineering of conversational agents and automated integrations (connected to CRM, email, webhooks, and databases). Full automation of client qualification, 24/7 support, and scheduled data extraction, eliminating repetitive tasks and boosting operational throughput.",
    emoji: "🤖",
    highlights: ["Agentes Autónomos", "Integración CRM", "Atención 24/7", "n8n & Webhooks"],
    highlightsEn: ["Autonomous Agents", "CRM Integration", "24/7 Operations", "n8n & Webhooks"],
  },
  {
    id: "llmops-optimization",
    category: "LLMOps & Infraestructura",
    categoryEn: "LLMOps & Cloud Infrastructure",
    title: "Optimización de Costos, Latencia y Observabilidad de IA",
    titleEn: "AI Cost Optimization, Latency & Observability",
    description:
      "Auditoría técnica e implementación de arquitecturas eficientes para empresas que consumen APIs de modelos de lenguaje (LLMs) o servidores cloud. Aplicación de caché semántico, enrutamiento inteligente de modelos y monitoreo de peticiones para reducir entre un 30% y 50% la factura mensual de infraestructura sin comprometer la precisión.",
    descriptionEn:
      "Technical audits and efficient architecture implementation for companies consuming LLM APIs and cloud servers. Semantic caching, intelligent model routing, and request monitoring to reduce cloud bills by 30% to 50% without degrading accuracy.",
    emoji: "📉",
    highlights: ["-30% a -50% Costes Cloud", "Caché Semántico", "Enrutamiento Inteligente", "Observabilidad"],
    highlightsEn: ["-30% to -50% Cloud Costs", "Semantic Caching", "Smart Routing", "Observability"],
  },
  {
    id: "enterprise-rag",
    category: "Enterprise RAG & Search",
    categoryEn: "Enterprise RAG & Search",
    title: "Sistemas RAG y Gestión de Conocimiento Interno",
    titleEn: "Enterprise RAG & Internal Knowledge Systems",
    description:
      "Desarrollo de buscadores semánticos y asistentes privados entrenados exclusivamente con la documentación de la empresa (contratos, políticas, catálogos o tickets). Permite a los equipos consultar procedimientos o datos operativos en segundos con respuestas precisas, citas exactas y cero fuga de información confidencial.",
    descriptionEn:
      "Development of semantic search engines and private AI assistants trained exclusively on company knowledge bases (contracts, SOPs, tickets, catalogs). Enables instant querying with verified citations, precision answers, and zero data leakage.",
    emoji: "📚",
    highlights: ["Búsqueda Semántica", "Vector Databases", "Cero Fuga de Datos", "Citas Exactas"],
    highlightsEn: ["Semantic Search", "Vector Databases", "Zero Data Leakage", "Exact Citations"],
  },
  {
    id: "system-integration",
    category: "Middleware & Backend",
    categoryEn: "Middleware & Backend",
    title: "Integración de Sistemas y Desarrollo de APIs Escalables",
    titleEn: "Systems Integration & Scalable API Development",
    description:
      "Sincronización en tiempo real y conexión entre plataformas heterogéneas, software legado (legacy), CRMs, ERPs y pasarelas de pago. Diseño de canalizaciones de datos (pipelines), webhooks y arquitecturas de microservicios robustas que garantizan el flujo continuo de información en la organización.",
    descriptionEn:
      "Real-time synchronization and bridging across disparate platforms, legacy software, CRMs, ERPs, and payment gateways. Resilient data pipelines, webhooks, and microservice architectures ensuring unbroken data flow.",
    emoji: "🔄",
    highlights: ["Conexión CRM/ERP", "Pipelines de Datos", "Webhooks en Tiempo Real", "Microservicios"],
    highlightsEn: ["CRM/ERP Bridging", "Data Pipelines", "Real-Time Webhooks", "Microservices"],
  },
  {
    id: "custom-b2b-tools",
    category: "Custom B2B Tools",
    categoryEn: "Custom B2B Tools",
    title: "Desarrollo Ágil de Portales y Herramientas Operativas",
    titleEn: "B2B Internal Portals & Operational Tools",
    description:
      "Creación acelerada de portales de gestión, dashboards administrativos e interfaces a medida para el control operativo. Reemplazo de hojas de cálculo propensas a errores por aplicaciones centralizadas, seguras y diseñadas para escalar la productividad interna.",
    descriptionEn:
      "Rapid engineering of custom management portals, administrative dashboards, and operational interfaces. Replacing error-prone spreadsheets with secure, centralized applications tailored to scale internal productivity.",
    emoji: "📊",
    highlights: ["Dashboards a Medida", "Reemplazo de Excel/Sheets", "Next.js & Supabase", "Seguridad B2B"],
    highlightsEn: ["Custom Dashboards", "Spreadsheet Replacement", "Next.js & Supabase", "B2B Security"],
  },
  {
    id: "fintech-digital-assets",
    category: "FinTech & High-Performance Systems",
    categoryEn: "FinTech & High-Performance Systems",
    title: "Soluciones para Activos Digitales y Automatización Financiera",
    titleEn: "Digital Assets & Financial Automation Solutions",
    description:
      "Diseño e integración de infraestructura técnica para el procesamiento de activos digitales, algoritmos de ejecución automatizada e integración de APIs de mercados financieros o contratos inteligentes, bajo estándares exigentes de seguridad y baja latencia.",
    descriptionEn:
      "Technical infrastructure and automated execution for digital assets, financial market APIs, and smart contract integrations built to demanding latency and security standards.",
    emoji: "📈",
    highlights: ["Activos Digitales", "Smart Contracts", "APIs Financieras", "Baja Latencia"],
    highlightsEn: ["Digital Assets", "Smart Contracts", "Financial APIs", "Low Latency"],
  },
];
