export interface SubProjectItem {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  technologies: string[];
  href: string;
  badgeText?: string;
  status?: "live" | "production" | "demo" | "gemini";
  features?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  category: "all" | "ai" | "web3" | "fullstack" | "cloud";
  technologies: string[];
  href: string;
  github?: string;
  highlight?: boolean;
  status: "live" | "production" | "demo";
  badgeText: string;
  hasModal?: boolean;
  subProjects?: SubProjectItem[];
}

export const projects: ProjectItem[] = [
  {
    id: "ai-agentic-systems",
    title: "AI Autonomous Systems & Agents",
    emoji: "🧠",
    tagline: "Arquitectura de agentes autónomos y extractores inteligentes",
    description: "Diseño e implementación de agentes autónomos especializados, extractores de datos contables con LLMs, flujos RAG con memoria contextual y automatización avanzada con n8n.",
    category: "ai",
    technologies: ["Gemini AI", "LangChain", "LLMs", "Document AI", "n8n", "Python/Node"],
    href: "https://gemini.google.com/gem/1Pw55vn4DrffrXUdIRNK6Td31v-fvR45Z?usp=sharing",
    github: "https://github.com/Brayan10j",
    highlight: true,
    status: "production",
    badgeText: "🧠 AI Systems & Agents",
    hasModal: true,
    subProjects: [
      {
        id: "extractor-contable-gemini",
        title: "Extractor de Datos Contables & Facturas",
        emoji: "📑",
        tagline: "Agente inteligente especializado en documentos contables y financieros",
        description: "Extractor de datos de alta precisión para documentos contables, facturas electrónicas, recibos de caja, cotizaciones y órdenes de compra. Procesa imágenes y PDFs convirtiendo información no estructurada en esquemas limpios para ERPs y sistemas contables.",
        technologies: ["Gemini AI", "Vision OCR", "Data Extraction", "Facturas & Recibos", "JSON Structuring"],
        href: "https://gemini.google.com/gem/1Pw55vn4DrffrXUdIRNK6Td31v-fvR45Z?usp=sharing",
        badgeText: "⚡ Gemini Custom Agent",
        status: "gemini",
        features: [
          "Extracción detallada de ítems, cantidades, precios unitarios e impuestos (IVA, retenciones)",
          "Reconocimiento de NIT, RUT, emisor, receptor y fechas contables",
          "Soporte para recibos de caja, facturas físicas/digitales y órdenes de compra",
          "Salida estructurada lista para integración contable",
        ],
      },
      {
        id: "agentic-rag-orchestrator",
        title: "Orquestador de Flujos y Automatización n8n",
        emoji: "⚡",
        tagline: "Agente para pipelines autónomos de soporte y sincronización",
        description: "Arquitectura de agentes conectados mediante webhooks y n8n para procesar solicitudes, consultar bases vectoriales de conocimiento y automatizar respuestas en canales de mensajería empresarial.",
        technologies: ["n8n", "LangChain", "Vector DBs", "Webhooks", "Node.js"],
        href: "https://github.com/Brayan10j",
        badgeText: "🤖 Workflow Agent",
        status: "production",
        features: [
          "Enrutamiento inteligente de consultas con memoria de conversación",
          "Integración con bases de datos y CRMs corporativos",
        ],
      },
    ],
  },
  {
    id: "airballoons",
    title: "Airballoons",
    emoji: "🎈",
    tagline: "Gamificación interactiva descentralizada",
    description: "Aplicación interactiva y juego Web3 donde globos aerostáticos vuelan alrededor del mundo con dinámicas on-chain y simulación geoespacial.",
    category: "web3",
    technologies: ["Web3", "Solidity", "Next.js", "Tailwind CSS", "Ethers.js"],
    href: "https://app.airballoons.io/",
    highlight: true,
    status: "production",
    badgeText: "🟢 DApp en Producción",
  },
  {
    id: "sionland",
    title: "Sionland Multiverse",
    emoji: "🪐",
    tagline: "Ecosistema de datos geoespaciales descentralizados",
    description: "Ecosistema multicapa de datos geográficos a escala global, construido para impulsar la economía descentralizada Multiverse Cross Chain.",
    category: "web3",
    technologies: ["Web3", "Multiverse", "Cross-Chain", "Smart Contracts", "TypeScript"],
    href: "https://app.sionland.io/",
    highlight: true,
    status: "production",
    badgeText: "🪐 Cross-Chain Ecosystem",
  },
  {
    id: "rwa-web3",
    title: "Revolutionize the Future: Web3 RWA",
    emoji: "🔮",
    tagline: "Casos de uso reales de Real World Assets",
    description: "Plataforma interactiva que demuestra cómo la tecnología blockchain transforma industrias mediante la tokenización de activos del mundo real.",
    category: "web3",
    technologies: ["Nuxt.js", "Vue 3", "Web3", "RWA", "Tailwind CSS"],
    href: "https://rwa.nuxt.dev/",
    highlight: true,
    status: "live",
    badgeText: "💎 Real World Assets",
  },
  {
    id: "crypto-pagos",
    title: "Crypto Pagos App",
    emoji: "💳",
    tagline: "Pasarela descentralizada de transacciones cripto",
    description: "Solución de procesamiento de pagos Web3 que permite liquidaciones directas, conexión con múltiples wallets y verificación en tiempo real.",
    category: "fullstack",
    technologies: ["React", "Web3", "Solidity", "Tailwind CSS", "Vercel"],
    href: "https://my-app-web3.vercel.app/",
    status: "live",
    badgeText: "⚡ Pagos On-Chain",
  },
  {
    id: "encuentratodo",
    title: "EncuentraTodo Colombia",
    emoji: "🔍",
    tagline: "Marketplace de comercios y profesionales",
    description: "Plataforma integral para buscar productos y servicios locales en Colombia, con autenticación, base de datos en tiempo real y geolocalización.",
    category: "fullstack",
    technologies: ["Nuxt.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    href: "https://encuentra-todo.vercel.app/",
    status: "live",
    badgeText: "🇨🇴 Conexión Local",
  },
  {
    id: "cloud-automation",
    title: "Orquestación Cloud & Microservicios",
    emoji: "⚡",
    tagline: "Pipelines autónomos de integración y datos",
    description: "Flujos automatizados y microservicios con n8n, Docker y Google Cloud Platform para sincronización continua de datos e integraciones de mensajería.",
    category: "cloud",
    technologies: ["n8n", "Node.js", "GCP", "Docker", "PostgreSQL"],
    href: "https://github.com/Brayan10j",
    github: "https://github.com/Brayan10j",
    status: "demo",
    badgeText: "🤖 Automatización Cloud",
  },
];
