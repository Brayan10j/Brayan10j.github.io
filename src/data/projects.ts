export interface SubProjectItem {
  id: string;
  title: string;
  titleEn?: string;
  emoji: string;
  tagline: string;
  taglineEn?: string;
  description: string;
  descriptionEn?: string;
  technologies: string[];
  href: string;
  badgeText?: string;
  badgeTextEn?: string;
  status?: "live" | "production" | "demo" | "gemini";
  features?: string[];
  featuresEn?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  titleEn?: string;
  emoji: string;
  tagline: string;
  taglineEn?: string;
  description: string;
  descriptionEn?: string;
  category: "all" | "ai" | "web3" | "fullstack" | "cloud";
  technologies: string[];
  href: string;
  github?: string;
  highlight?: boolean;
  status: "live" | "production" | "demo";
  badgeText: string;
  badgeTextEn?: string;
  hasModal?: boolean;
  subProjects?: SubProjectItem[];
}

export const projects: ProjectItem[] = [
  {
    id: "ai-agentic-systems",
    title: "AI Autonomous Systems & Agents",
    titleEn: "AI Autonomous Systems & Agents",
    emoji: "🧠",
    tagline: "Arquitectura de agentes autónomos y extractores inteligentes",
    taglineEn: "Autonomous agent architecture & intelligent document extractors",
    description: "Diseño e implementación de agentes autónomos especializados, extractores de datos contables con LLMs, flujos RAG con memoria contextual y automatización avanzada con n8n.",
    descriptionEn: "Design and deployment of specialized autonomous agents, multimodal document extractors with LLMs, contextual RAG pipelines, and advanced automation with n8n.",
    category: "ai",
    technologies: ["Gemini AI", "LangChain", "LLMs", "Document AI", "n8n", "Python/Node"],
    href: "https://gemini.google.com/gem/1Pw55vn4DrffrXUdIRNK6Td31v-fvR45Z?usp=sharing",
    github: "https://github.com/Brayan10j",
    highlight: true,
    status: "production",
    badgeText: "🧠 AI Systems & Agents",
    badgeTextEn: "🧠 AI Systems & Agents",
    hasModal: true,
    subProjects: [
      {
        id: "extractor-contable-gemini",
        title: "Extractor de Datos Contables & Facturas",
        titleEn: "Accounting & Invoice Data Extractor",
        emoji: "📑",
        tagline: "Agente inteligente especializado en documentos contables y financieros",
        taglineEn: "Intelligent agent specialized in financial and accounting documents",
        description: "Extractor de datos de alta precisión para documentos contables, facturas electrónicas, recibos de caja, cotizaciones y órdenes de compra. Procesa imágenes y PDFs convirtiendo información no estructurada en esquemas limpios para ERPs y sistemas contables.",
        descriptionEn: "High-precision data extractor for accounting documents, electronic invoices, receipts, quotes, and purchase orders. Converts unstructured PDFs and images into clean structured schemas for ERPs and accounting software.",
        technologies: ["Gemini AI", "Vision OCR", "Data Extraction", "Facturas & Recibos", "JSON Structuring"],
        href: "https://gemini.google.com/gem/1Pw55vn4DrffrXUdIRNK6Td31v-fvR45Z?usp=sharing",
        badgeText: "⚡ Gemini Custom Agent",
        badgeTextEn: "⚡ Gemini Custom Agent",
        status: "gemini",
        features: [
          "Extracción detallada de ítems, cantidades, precios unitarios e impuestos (IVA, retenciones)",
          "Reconocimiento de NIT, RUT, emisor, receptor y fechas contables",
          "Soporte para recibos de caja, facturas físicas/digitales y órdenes de compra",
          "Salida estructurada lista para integración contable",
        ],
        featuresEn: [
          "Detailed extraction of items, quantities, unit prices, and tax rates",
          "Automatic recognition of tax IDs, vendor/customer info, and dates",
          "Multi-format support for receipts, electronic invoices, and purchase orders",
          "Clean JSON output formatted for immediate ERP integration",
        ],
      },
      {
        id: "agentic-rag-orchestrator",
        title: "Orquestador de Flujos y Automatización n8n",
        titleEn: "Workflow Orchestrator & n8n Automations",
        emoji: "⚡",
        tagline: "Agente para pipelines autónomos de soporte y sincronización",
        taglineEn: "Agent pipeline for enterprise workflows and synchronization",
        description: "Arquitectura de agentes conectados mediante webhooks y n8n para procesar solicitudes, consultar bases vectoriales de conocimiento y automatizar respuestas en canales de mensajería empresarial.",
        descriptionEn: "Agent architecture connected through webhooks and n8n to process business inquiries, query vector knowledge bases, and automate notifications.",
        technologies: ["n8n", "LangChain", "Vector DBs", "Webhooks", "Node.js"],
        href: "https://github.com/Brayan10j",
        badgeText: "🤖 Workflow Agent",
        badgeTextEn: "🤖 Workflow Agent",
        status: "production",
        features: [
          "Enrutamiento inteligente de consultas con memoria de conversación",
          "Integración con bases de datos y CRMs corporativos",
        ],
        featuresEn: [
          "Context-aware request routing with conversational memory",
          "Seamless integration with databases and enterprise CRMs",
        ],
      },
    ],
  },
  {
    id: "airballoons",
    title: "AirBalloons App",
    titleEn: "AirBalloons App",
    emoji: "🎈",
    tagline: "Ecosistema descentralizado y juego en BNB Chain",
    taglineEn: "Decentralized ecosystem and game on BNB Chain",
    description: "Aplicación de gaming descentralizado con integración de smart contracts, billeteras Web3 y mecánicas transaccionales on-chain.",
    descriptionEn: "Decentralized gaming application featuring smart contract integration, Web3 wallets, and on-chain transactional mechanics.",
    category: "web3",
    technologies: ["Nuxt.js", "Solidity", "Web3", "BNB Chain", "Ethers.js"],
    href: "https://airballoons.pages.dev/",
    github: "https://github.com/Brayan10j",
    highlight: true,
    status: "live",
    badgeText: "⛓️ Web3 DApp",
    badgeTextEn: "⛓️ Web3 DApp",
  },
  {
    id: "encuentratodo",
    title: "EncuentraTodo",
    titleEn: "EncuentraTodo",
    emoji: "🛍️",
    tagline: "Plataforma moderna de e-commerce y clasificados",
    taglineEn: "Modern e-commerce and classifieds marketplace",
    description: "Marketplace digital de alto rendimiento desarrollado con Nuxt.js, Supabase y base de datos indexada en tiempo real.",
    descriptionEn: "High-performance digital marketplace built with Nuxt.js, Supabase, and real-time database indexing.",
    category: "fullstack",
    technologies: ["Nuxt.js", "Vue 3", "Supabase", "PostgreSQL", "Tailwind CSS"],
    href: "https://encuentratodo.pages.dev/",
    highlight: false,
    status: "live",
    badgeText: "⚡ FullStack",
    badgeTextEn: "⚡ FullStack",
  },
  {
    id: "sionland",
    title: "Sionland Web3",
    titleEn: "Sionland Web3",
    emoji: "⚔️",
    tagline: "Ecosistema de juego descentralizado y activos digitales",
    taglineEn: "Decentralized gaming ecosystem & digital assets",
    description: "Plataforma interactiva Web3 con contratos inteligentes en Solidity, conexión multi-wallet y economía de tokens.",
    descriptionEn: "Interactive Web3 platform with Solidity smart contracts, multi-wallet connectivity, and token economics.",
    category: "web3",
    technologies: ["React", "Solidity", "Ethers.js", "Smart Contracts", "Web3"],
    href: "https://sionland.com/",
    highlight: false,
    status: "production",
    badgeText: "💎 Web3 Gaming",
    badgeTextEn: "💎 Web3 Gaming",
  },
  {
    id: "crypto-pagos-app",
    title: "Crypto Pagos App",
    titleEn: "Crypto Pagos App",
    emoji: "💳",
    tagline: "Dashboard de transacciones y pagos con criptomonedas",
    taglineEn: "Crypto transaction and payments dashboard",
    description: "Aplicación financiera moderna para la gestión de pagos cripto, historial de transacciones y balance de billeteras.",
    descriptionEn: "Modern financial application for crypto payments management, transactional history, and wallet balances.",
    category: "fullstack",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Web3 UI"],
    href: "https://crypto-pagos-app.pages.dev/",
    highlight: false,
    status: "demo",
    badgeText: "🚀 FinTech UI",
    badgeTextEn: "🚀 FinTech UI",
  },
  {
    id: "rwa-web3",
    title: "Spatial RWA & On-Chain Index",
    titleEn: "Spatial RWA & On-Chain Index",
    emoji: "🌐",
    tagline: "Arquitectura geoespacial y tokenización de activos del mundo real",
    taglineEn: "Geospatial architecture & real-world asset tokenization",
    description: "Plataforma PoC de tokenización territorial y analítica financiera. Integra indexación espacial masiva con Uber H3, capas cartográficas Mapbox, conexión multi-wallet y cotizaciones en vivo con TradingView.",
    descriptionEn: "Territorial tokenization and financial analytics PoC. Combines massive geospatial indexing with Uber H3, Mapbox cartography layers, multi-wallet connectivity, and live TradingView quotes.",
    category: "web3",
    technologies: ["Nuxt 3", "Uber H3", "TradingView", "AppKit / Wagmi", "Mapbox", "Tailwind CSS"],
    href: "https://rwa.nuxt.dev/",
    highlight: true,
    status: "live",
    badgeText: "🏢 RWA Spatial",
    badgeTextEn: "🏢 RWA Spatial",
  },
];
