export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  emoji: string;
  highlights: string[];
}

export const services: ServiceItem[] = [
  {
    id: "ai-agents",
    category: "AI Workflows & Conversational Agents",
    title: "Agentes de IA y Automatización de Flujos Operativos",
    description:
      "Diseño e implementación de agentes conversacionales e integraciones automatizadas (conectados a WhatsApp Business, CRM, correo y bases de datos). Automatización completa de la cualificación de clientes, atención 24/7 y gestión de citas o datos, eliminando tareas manuales repetitivas y acelerando la conversión de ventas.",
    emoji: "🤖",
    highlights: ["WhatsApp Business", "Integración CRM", "Atención 24/7", "n8n & Webhooks"],
  },
  {
    id: "llmops-optimization",
    category: "LLMOps & Infraestructura",
    title: "Optimización de Costos, Latencia y Observabilidad de IA",
    description:
      "Auditoría técnica e implementación de arquitecturas eficientes para empresas que consumen APIs de modelos de lenguaje (LLMs) o servidores cloud. Aplicación de caché semántico, enrutamiento inteligente de modelos y monitoreo de peticiones para reducir entre un 30% y 50% la factura mensual de infraestructura sin comprometer la precisión.",
    emoji: "📉",
    highlights: ["-30% a -50% Costes Cloud", "Caché Semántico", "Enrutamiento Inteligente", "Observabilidad"],
  },
  {
    id: "enterprise-rag",
    category: "Enterprise RAG & Search",
    title: "Sistemas RAG y Gestión de Conocimiento Interno",
    description:
      "Desarrollo de buscadores semánticos y asistentes privados entrenados exclusivamente con la documentación de la empresa (contratos, políticas, catálogos o tickets). Permite a los equipos consultar procedimientos o datos operativos en segundos con respuestas precisas, citas exactas y cero fuga de información confidencial.",
    emoji: "📚",
    highlights: ["Búsqueda Semántica", "Vector Databases", "Cero Fuga de Datos", "Citas Exactas"],
  },
  {
    id: "system-integration",
    category: "Middleware & Backend",
    title: "Integración de Sistemas y Desarrollo de APIs Escalables",
    description:
      "Sincronización en tiempo real y conexión entre plataformas heterogéneas, software legado (legacy), CRMs, ERPs y pasarelas de pago. Diseño de canalizaciones de datos (pipelines), webhooks y arquitecturas de microservicios robustas que garantizan el flujo continuo de información en la organización.",
    emoji: "🔄",
    highlights: ["Conexión CRM/ERP", "Pipelines de Datos", "Webhooks en Tiempo Real", "Microservicios"],
  },
  {
    id: "custom-b2b-tools",
    category: "Custom B2B Tools",
    title: "Desarrollo Ágil de Portales y Herramientas Operativas",
    description:
      "Creación acelerada de portales de gestión, dashboards administrativos e interfaces a medida para el control operativo. Reemplazo de hojas de cálculo propensas a errores por aplicaciones centralizadas, seguras y diseñadas para escalar la productividad interna.",
    emoji: "📊",
    highlights: ["Dashboards a Medida", "Reemplazo de Excel/Sheets", "Next.js & Supabase", "Seguridad B2B"],
  },
  {
    id: "fintech-digital-assets",
    category: "FinTech & High-Performance Systems",
    title: "Soluciones para Activos Digitales y Automatización Financiera",
    description:
      "Diseño e integración de infraestructura técnica para el procesamiento de activos digitales, algoritmos de ejecución automatizada e integración de APIs de mercados financieros o contratos inteligentes, bajo estándares exigentes de seguridad y baja latencia.",
    emoji: "📈",
    highlights: ["Activos Digitales", "Smart Contracts", "APIs Financieras", "Baja Latencia"],
  },
];
