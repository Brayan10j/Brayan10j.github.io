# Plan de Actualización de Proyectos & Análisis de Mercado

Este plan detalla los ajustes técnicos a los enlaces y fichas de proyectos, junto con un **análisis estratégico de mercado** sobre la relevancia de cada solución en la actualidad (2025/2026).

---

## 1. Análisis de Mercado y Relevancia Actual (B2B Tech & Reclutadores)

| Proyecto | Estado del Enlace | ¿Aporta valor en el mercado actual? | Veredicto y Enfoque Recomendado |
| :--- | :--- | :--- | :--- |
| **Flujo Digital** | `https://encuentra-todo.vercel.app/` (🟢 Activo) | **Altísimo valor (Demanda inmediata en LATAM)**. Las pymes y empresas en Colombia y la región buscan activamente automatizar WhatsApp Business, conectar software contable (Siigo, Alegra) y reducir costos operativos. | **Actualizar ficha**: Reemplazar la descripción antigua de marketplace por su enfoque real de automatización de procesos contables y catálogos en WhatsApp. |
| **Spatial RWA & On-Chain Index** | `https://rwa-devs.vercel.app/` (🟢 Activo) | **Tendencia top en Web3 institucional**. Tokenización de activos del mundo real (bienes raíces, infraestructura, créditos) con analítica geoespacial e indexación espacial (Uber H3). | **Conservar**: Excelente muestra técnica de arquitectura avanzada con Nuxt 3 y Web3. |
| **Extractor Contable (Gemini Agent)** | Google Gemini (🟢 Activo) | **El área de mayor inversión en IA aplicada (Document AI)**. Resolver el dolor de cabeza de facturas y recibos con visión y LLMs es una de las soluciones más vendidas en consultoría B2B. | **Conservar**: Punto focal en el modal de IA. |
| **CryptoPAY (Crypto Pagos App)** | `https://my-app-web3.vercel.app/` (🟢 Activo) | **Sí aporta valor, pero bien posicionado**. Con el auge de pagos en stablecoins (USDC, USDT en redes L2/Solana) y pasarelas de pago Web3, los reclutadores y startups FinTech buscan desarrolladores que entiendan conexión de billeteras y liquidación cripto. | **Conservar y elevar presentación**: Actualizar el enlace a `https://my-app-web3.vercel.app/` y renombrarlo como **CryptoPAY — Web3 Payments Gateway**, destacando pagos sin fricción y conexión Web3 en Next.js. |
| **Sionland Web3** | `https://linktr.ee/sionland` (🟢 Activo) | **Respaldo de tracción comunitaria**. Un Linktree oficial demuestra que el proyecto tuvo comunidad activa, redes y ecosistema. | **Actualizar enlace**: Cambiar de la URL expirada al Linktree oficial. |
| **AirBalloons App** | `https://github.com/Brayan10j` (🟢 Activo) | **Portafolio de código abierto**. Al redirigir a GitHub, demuestra experiencia práctica con smart contracts en BNB Chain sin depender de un frontend caído. | **Actualizar enlace**: Apuntar directamente a tu perfil/repositorio de GitHub. |

---

## 2. Cambios Concretos en Código (`src/data/projects.ts` & i18n)

### A. Flujo Digital
- **Título**: Flujo Digital
- **Tagline (ES)**: Automatización de procesos contables y catálogos WhatsApp
- **Tagline (EN)**: Accounting workflow automation & WhatsApp Business catalogs
- **Descripción (ES)**: Plataforma de automatización operativa para empresas. Integra software contable (Siigo, Alegra), catálogos digitales interactivos en WhatsApp Business y sincronización de datos en tiempo real.
- **Descripción (EN)**: Operational automation platform for businesses. Integrates cloud accounting software (Siigo, Alegra), interactive WhatsApp Business digital catalogs, and real-time data sync.
- **Tecnologías**: `["Automatización", "WhatsApp Business", "Siigo / Alegra", "Next.js / Nuxt", "Supabase"]`
- **Enlace**: `https://encuentra-todo.vercel.app/`

### B. Sionland Web3
- **Enlace**: `https://linktr.ee/sionland`
- **Badge**: 💎 Web3 Gaming & Community

### C. AirBalloons App
- **Enlace principal**: `https://github.com/Brayan10j`
- **Tagline**: Ecosistema descentralizado y smart contracts en BNB Chain (Open Source / GitHub)

### D. CryptoPAY (Crypto Pagos App)
- **Título**: CryptoPAY App
- **Enlace**: `https://my-app-web3.vercel.app/`
- **Tagline (ES)**: Pasarela moderna de pagos e infraestructura con criptomonedas
- **Tagline (EN)**: Modern crypto payments gateway & Web3 infrastructure
- **Descripción (ES)**: Interfaz FinTech para cobros y transferencias descentralizadas. Integración multi-wallet, transacciones instantáneas y diseño responsivo en Next.js.
- **Descripción (EN)**: FinTech interface for decentralized payments and settlements. Multi-wallet integration, instant transactions, and responsive Next.js architecture.
- **Tecnologías**: `["Next.js", "Web3 / WalletConnect", "TypeScript", "Tailwind CSS", "FinTech"]`

---

## 3. Verificación
1. Validar compilación estática con `compile_applet`.
2. Validar tipos y enlaces con `lint_applet` (`astro check`).
