export interface SkillItem {
  name: string;
  emoji: string;
  level?: string;
  category: "ai" | "frontend" | "backend" | "web3" | "devops";
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    title: "AI Systems & Arquitectura Inteligente",
    emoji: "🧠",
    description: "Diseño de sistemas de IA, pipelines de LLMs, agentes autónomos y RAG.",
    skills: [
      { name: "AI Systems Architecture", emoji: "🏛️", category: "ai", highlight: true },
      { name: "LLM Orchestration", emoji: "🤖", category: "ai", highlight: true },
      { name: "LangChain / LlamaIndex", emoji: "🦜", category: "ai", highlight: true },
      { name: "RAG & Vector DBs", emoji: "🔍", category: "ai", highlight: true },
      { name: "OpenAI & Gemini APIs", emoji: "✨", category: "ai", highlight: true },
      { name: "Autonomous AI Agents", emoji: "🦾", category: "ai", highlight: true },
      { name: "Prompt Engineering", emoji: "🎯", category: "ai" },
      { name: "n8n AI Workflows", emoji: "⚡", category: "ai", highlight: true },
    ],
  },
  {
    id: "frontend",
    title: "FullStack Frontend & Interfaces",
    emoji: "⚡",
    description: "Aplicaciones web modernas, ultra-rápidas y con experiencia de usuario optimizada.",
    skills: [
      { name: "Next.js (App Router)", emoji: "▲", category: "frontend", highlight: true },
      { name: "React", emoji: "⚛️", category: "frontend", highlight: true },
      { name: "TypeScript", emoji: "📘", category: "frontend", highlight: true },
      { name: "Nuxt.js / Vue 3", emoji: "💚", category: "frontend", highlight: true },
      { name: "Tailwind CSS", emoji: "🎨", category: "frontend", highlight: true },
      { name: "Astro", emoji: "🚀", category: "frontend" },
      { name: "State Management", emoji: "📦", category: "frontend" },
      { name: "HTML5 / CSS3", emoji: "🌐", category: "frontend" },
    ],
  },
  {
    id: "web3",
    title: "Blockchain & Web3 Ecosystems",
    emoji: "⛓️",
    description: "Smart contracts, tokenización RWA, arquitecturas multicadena y DApps.",
    skills: [
      { name: "Solidity", emoji: "💎", category: "web3", highlight: true },
      { name: "Smart Contracts Audit & Dev", emoji: "📜", category: "web3", highlight: true },
      { name: "Ethers.js / Viem", emoji: "🦊", category: "web3", highlight: true },
      { name: "Cross-chain & Multiverse", emoji: "🪐", category: "web3", highlight: true },
      { name: "RWA (Real World Assets)", emoji: "🏢", category: "web3", highlight: true },
      { name: "Hardhat / Foundry", emoji: "🔨", category: "web3" },
      { name: "IPFS & Descentralización", emoji: "🧊", category: "web3" },
      { name: "Web3 Payments & DeFi", emoji: "💳", category: "web3" },
    ],
  },
  {
    id: "devops",
    title: "Backend, Cloud & Automatización",
    emoji: "☁️",
    description: "Infraestructura cloud escalable, microservicios, bases de datos y CI/CD.",
    skills: [
      { name: "Node.js / Express", emoji: "🟢", category: "devops", highlight: true },
      { name: "PostgreSQL & Supabase", emoji: "🐘", category: "devops", highlight: true },
      { name: "Docker & Contenedores", emoji: "🐳", category: "devops", highlight: true },
      { name: "Google Cloud Platform", emoji: "☁️", category: "devops", highlight: true },
      { name: "CI / CD Pipelines", emoji: "🔄", category: "devops", highlight: true },
      { name: "Terraform (IaC)", emoji: "🏗️", category: "devops" },
      { name: "Redis & Caching", emoji: "🔴", category: "devops" },
      { name: "MongoDB & NoSQL", emoji: "🍃", category: "devops" },
    ],
  },
];

export const skills = skillCategories.flatMap((c) => c.skills);

