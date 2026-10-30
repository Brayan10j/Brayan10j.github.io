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
    tagline: "Ecosistema descentralizado y smart contracts en BNB Chain",
    taglineEn: "Decentralized ecosystem & smart contracts on BNB Chain",
    description: "Aplicación de gaming descentralizado y smart contracts auditados en Solidity sobre BNB Chain. Código abierto y documentación de arquitectura on-chain.",
    descriptionEn: "Decentralized gaming application with audited Solidity smart contracts on BNB Chain. Open-source architecture and on-chain mechanics.",
    category: "web3",
    technologies: ["Solidity", "Web3", "BNB Chain", "Ethers.js", "Open Source"],
    href: "https://github.com/Brayan10j",
    github: "https://github.com/Brayan10j",
    highlight: false,
    status: "production",
    badgeText: "⛓️ Web3 / GitHub",
    badgeTextEn: "⛓️ Web3 / GitHub",
  },
  {
    id: "flujo-digital",
    title: "Flujo Digital",
    titleEn: "Flujo Digital",
    emoji: "⚡",
    tagline: "Automatización de procesos contables y catálogos WhatsApp",
    taglineEn: "Accounting workflow automation & WhatsApp Business catalogs",
    description: "Plataforma de automatización operativa para empresas. Integra software contable (Siigo, Alegra), catálogos digitales interactivos en WhatsApp Business y sincronización de datos en tiempo real.",
    descriptionEn: "Operational automation platform for businesses. Integrates cloud accounting software (Siigo, Alegra), interactive WhatsApp Business digital catalogs, and real-time data sync.",
    category: "fullstack",
    technologies: ["Automatización", "WhatsApp Business", "Siigo / Alegra", "Next.js", "Supabase"],
    href: "https://encuentra-todo.vercel.app/",
    highlight: true,
    status: "live",
    badgeText: "⚡ Automatización B2B",
    badgeTextEn: "⚡ B2B Automation",
  },
  {
    id: "sionland",
    title: "Sionland Web3",
    titleEn: "Sionland Web3",
    emoji: "⚔️",
    tagline: "Ecosistema de juego descentralizado y activos digitales",
    taglineEn: "Decentralized gaming ecosystem & digital assets",
    description: "Plataforma interactiva Web3 con contratos inteligentes en Solidity, conexión multi-wallet y economía de tokens. Comunidad y enlaces oficiales del ecosistema.",
    descriptionEn: "Interactive Web3 platform with Solidity smart contracts, multi-wallet connectivity, and token economics. Official community hub and ecosystem links.",
    category: "web3",
    technologies: ["React", "Solidity", "Ethers.js", "Smart Contracts", "Web3"],
    href: "https://linktr.ee/sionland",
    highlight: false,
    status: "live",
    badgeText: "💎 Web3 Gaming",
    badgeTextEn: "💎 Web3 Gaming",
  },
  {
    id: "crypto-pagos-app",
    title: "CryptoPAY App",
    titleEn: "CryptoPAY App",
    emoji: "💳",
    tagline: "Pasarela moderna de pagos e infraestructura con criptomonedas",
    taglineEn: "Modern crypto payments gateway & Web3 infrastructure",
    description: "Interfaz FinTech para cobros y transferencias descentralizadas. Integración multi-wallet, transacciones instantáneas, soporte de tema claro/oscuro y arquitectura en Next.js.",
    descriptionEn: "FinTech interface for decentralized payments and settlements. Multi-wallet integration, instant transactions, light/dark mode support, and responsive Next.js architecture.",
    category: "fullstack",
    technologies: ["Next.js", "Web3 / WalletConnect", "TypeScript", "Tailwind CSS", "FinTech"],
    href: "https://my-app-web3.vercel.app/",
    highlight: false,
    status: "live",
    badgeText: "💳 Web3 Payments",
    badgeTextEn: "💳 Web3 Payments",
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
    href: "https://rwa-devs.vercel.app/",
    highlight: true,
    status: "live",
    badgeText: "🏢 RWA Spatial",
    badgeTextEn: "🏢 RWA Spatial",
  },
];
