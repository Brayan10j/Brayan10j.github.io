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
  category: "all" | "ai" | "web3" | "fullstack" | "cloud" | "saas";
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
    id: "micro-saas-hub",
    title: "Micro-SaaS Hub & Business Utilities",
    titleEn: "Micro-SaaS Hub & Business Utilities",
    emoji: "🚀",
    tagline: "Suite de micro-herramientas SaaS para gestión operativa y financiera",
    taglineEn: "Suite of operational micro-SaaS tools for payments, logistics & cash flow",
    description: "Ecosistema de soluciones SaaS independientes diseñadas para resolver ineficiencias críticas en pymes y profesionales: control de cobros deportivos, división y liquidación de cuentas compartidas, arqueo de caja local-first y despacho de pedidos con GPS.",
    descriptionEn: "Ecosystem of standalone micro-SaaS tools solving concrete operational bottlenecks: sports fee collections, shared expense settlement, local-first daily cash flow audits, and dual GPS dispatch logistics.",
    category: "saas",
    technologies: ["Next.js", "React", "TypeScript", "PWA Local-First", "Tailwind CSS", "WhatsApp API"],
    href: "https://cuentasclaras-co.vercel.app/",
    github: "https://github.com/Brayan10j",
    highlight: true,
    status: "live",
    badgeText: "🚀 Micro-SaaS Suite",
    badgeTextEn: "🚀 Micro-SaaS Suite",
    hasModal: true,
    subProjects: [
      {
        id: "cuentas-claras",
        title: "Cuentas Claras · Flujo & Arqueo Diario",
        titleEn: "Cuentas Claras · Cash Flow & Daily Audit",
        emoji: "💰",
        tagline: "PWA agnóstica de flujo de dinero, cobros y arqueo diario local-first sin fricción",
        taglineEn: "Agnostic local-first PWA for seamless cash flow, receipts & daily cash-out reconciliation",
        description: "Aplicación web progresiva (PWA) con arquitectura local-first para registrar ingresos, egresos, cobros y realizar el arqueo de caja diario sin requerir configuración compleja ni suscripciones pesadas. Funciona offline y sincroniza de forma inmediata.",
        descriptionEn: "Progressive Web App (PWA) featuring a local-first architecture for tracking revenues, expenses, pending payments, and daily drawer reconciliation without friction or bloat. Works offline with instantaneous sync.",
        technologies: ["PWA", "Local-First", "React", "IndexedDB", "Tailwind CSS"],
        href: "https://cuentasclaras-co.vercel.app/",
        badgeText: "🟢 PWA Live",
        badgeTextEn: "🟢 PWA Live",
        status: "live",
        features: [
          "Control de flujo de caja e ingresos/egresos en tiempo real",
          "Módulo de arqueo y cierre de caja diario simplificado",
          "Arquitectura local-first con soporte offline completo (PWA)",
          "Historial y métricas de cobros pendientes sin fricción",
        ],
        featuresEn: [
          "Real-time cash flow, revenue and expense monitoring",
          "Simplified daily drawer cash-out reconciliation module",
          "Local-first architecture with full offline support (PWA)",
          "Streamlined pending collections ledger and analytics",
        ],
      },
      {
        id: "gestor-cuotas",
        title: "Gestor de Cuotas Deportivas",
        titleEn: "Sports Academy Tuition & Fee Manager",
        emoji: "⚽",
        tagline: "Control de recaudo de mensualidades y emisión de comprobantes vía WhatsApp",
        taglineEn: "Monthly tuition collection tracking & instant WhatsApp payment receipts",
        description: "Herramienta administrativa para academias, escuelas de formación deportiva y clubes. Centraliza el estado de cuenta de cada alumno o deportista, calcula saldos vencidos y genera comprobantes de pago listos para enviar por WhatsApp en un solo clic.",
        descriptionEn: "Administrative dashboard for sports academies, youth training clubs, and coaches. Tracks student tuition status, computes overdue balances, and issues formatted payment receipts directly through WhatsApp in one click.",
        technologies: ["Next.js", "TypeScript", "WhatsApp Web API", "Tailwind CSS", "Voucher Gen"],
        href: "https://gestor-de-cuotas-escuela-de-f-tbol.vercel.app/",
        badgeText: "🟢 Live / Deportes",
        badgeTextEn: "🟢 Live / Sports",
        status: "live",
        features: [
          "Registro de alumnos, categorías deportivas y estado de mensualidades",
          "Detección y listado rápido de pagos pendientes y morosidad",
          "Generación de comprobantes y recibos automáticos con envío a WhatsApp",
          "Panel resumen de recaudo mensual y balance general",
        ],
        featuresEn: [
          "Roster management by category and monthly tuition tracking",
          "Quick filters for overdue balances and pending collections",
          "Automated formatted receipts with one-click WhatsApp dispatch",
          "Monthly revenue dashboard and cash position summary",
        ],
      },
      {
        id: "dividelo",
        title: "Divídelo · Reparto de Gastos & Cobros",
        titleEn: "Divídelo · Split Expenses & Direct Collection",
        emoji: "🍕",
        tagline: "Divide cualquier cuenta, salida o viaje y envía el cobro por WhatsApp con tu Llave de pago",
        taglineEn: "Split group checks, trips & outings with instant WhatsApp requests and payment keys",
        description: "Micro-SaaS para calcular de manera transparente cuánto debe aportar cada integrante en cuentas compartidas, cenas, viajes o eventos grupales. Permite asociar la Llave de pago (Transfiya, Bre-B, Nequi, Bancolombia) y despachar el cobro directo por WhatsApp con mensaje pre-armado.",
        descriptionEn: "Micro-SaaS to transparently divide and settle shared restaurant tabs, trips, and group outings. Integrates instant payment keys (Transfiya, Bre-B, Nequi, Bancolombia) and dispatches pre-composed payment links via WhatsApp.",
        technologies: ["React", "TypeScript", "FinTech / Llaves de Pago", "WhatsApp DeepLink", "Tailwind CSS"],
        href: "https://dividelo.vercel.app/",
        badgeText: "🟢 Live / FinTech",
        badgeTextEn: "🟢 Live / FinTech",
        status: "live",
        features: [
          "Cálculo equitativo o personalizado de consumos y propinas",
          "Integración con Llave de pago (Bre-B, Nequi, Daviplata, Transfiya)",
          "Generación de enlaces y mensajes directos para WhatsApp",
          "Experiencia móvil ultra liviana sin registro obligatorio",
        ],
        featuresEn: [
          "Equal or customized consumption and tip breakdown",
          "Integration with fast payment keys (Bre-B, Nequi, Daviplata, Transfiya)",
          "Automated WhatsApp deep-link generation with payment instructions",
          "Ultra-lightweight mobile experience with zero sign-up barrier",
        ],
      },
      {
        id: "despachos-duales",
        title: "Tomador Rápido & Despacho Dual",
        titleEn: "Fast Order Taker & Dual Delivery Dispatch",
        emoji: "🛵",
        tagline: "Toma ágil de pedidos con comanda para repartidores (GPS Waze/Maps) y resumen para clientes",
        taglineEn: "Rapid order intake with dual dispatch tickets, GPS navigation & client summaries",
        description: "Canal ágil de recepción y preparación de pedidos para restaurantes, tiendas y domicilios. Emite automáticamente dos vistas: comanda logística para el repartidor con enlace directo a coordenadas GPS (Waze / Google Maps) y resumen limpio de compra para el cliente final, evitando cancelaciones y demoras.",
        descriptionEn: "Agile order intake and dispatch system for restaurants, dark kitchens, and local stores. Automatically generates dual views: delivery courier sheet with one-touch GPS navigation (Waze / Google Maps) and clean customer purchase receipts to curb order abandonment.",
        technologies: ["Next.js", "Geolocation / GPS", "Waze & Google Maps", "WhatsApp Commerce", "Tailwind CSS"],
        href: "https://despachosapp.vercel.app/",
        badgeText: "🟢 Live / Logística",
        badgeTextEn: "🟢 Live / Logistics",
        status: "live",
        features: [
          "Toma de pedidos ultrarrápida con cálculo de totales y datos de entrega",
          "Despacho dual: comanda logística para repartidores y resumen para clientes",
          "Lanzamiento con un solo toque de rutas en Waze y Google Maps",
          "Prevención de abandono de pedidos y reducción de fricción operativa",
        ],
        featuresEn: [
          "Ultra-fast order intake with total calculations and delivery details",
          "Dual dispatch: courier operational ticket and customer invoice",
          "One-touch routing launch in Waze and Google Maps",
          "Order abandonment prevention and friction reduction",
        ],
      },
    ],
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
];
