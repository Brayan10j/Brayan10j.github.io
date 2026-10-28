# Plan Revisado: Navbar Ultra-Limpio, Sin WhatsApp & Trayectoria hacia LinkedIn

*Revisión final basada en el feedback directo de Brayan.*

---

## 1. Navbar Ultra-Minimalista (Sin enlaces en el centro)

- **Distribución**:
  - **Izquierda**: Brand minimalista `⚡ Brayan Espitia`.
  - **Centro**: **Completamente vacío** para lograr un diseño espacioso, prémium y libre de distracciones.
  - **Derecha**: Únicamente el botón directo de `Contacto ✉️` y el selector de tema (`ModeToggle`).
- **Beneficio**: Máxima limpieza visual y estética moderna de alto nivel para reclutadores y clientes B2B.

---

## 2. Remoción Total de WhatsApp & URL Pública de LinkedIn

- **Remover WhatsApp de todo el sitio**:
  - Se retira del Hero, de la tarjeta de contacto (`ContactCard`) y del Footer.
- **Canales oficiales**:
  - **LinkedIn**: `https://www.linkedin.com/in/brayan-espitia-615ab3127` (tu URL pública oficial con icono SVG oficial).
  - **Correo electrónico**: `brayanespitia10@gmail.com` (con botón de redacción y copia rápida).
  - **GitHub**: `https://github.com/Brayan10j`.

---

## 3. Sección de Trayectoria: Tarjeta Compacta con Enlace a LinkedIn

- Se reemplaza la línea de tiempo vertical por una **tarjeta compacta y elegante**:
  - **3 Hitos Técnicos**:
    1. *Arquitectura de Sistemas de IA & Agentes Autónomos* (LLMs, RAG, n8n, Gemini).
    2. *Desarrollo Full-Stack Escalable* (Next.js App Router, TypeScript, PostgreSQL).
    3. *Ecosistemas Web3 & Smart Contracts* (Solidity, tokenización RWA, dApps).
  - **Llamado a la Acción Central**:
    - Mensaje claro indicando que toda la trayectoria cronológica, cargos anteriores y recomendaciones están validadas en LinkedIn.
    - Botón destacado: `Ver Trayectoria Completa en LinkedIn ↗` que abre directamente `https://www.linkedin.com/in/brayan-espitia-615ab3127`.

---

## 4. Plan de Ejecución

1. **Navbar**: Eliminar enlaces centrales en `src/components/Navbar.astro` dejando solo Brand a la izquierda y Contacto + ModeToggle a la derecha.
2. **WhatsApp**: Purgar cualquier enlace o botón de WhatsApp en `src/pages/index.astro`, `src/components/ContactCard.tsx` y el Footer.
3. **Trayectoria**: Rediseñar `src/components/ExperienceTimeline.astro` como tarjeta compacta de hitos con el enlace oficial a tu perfil de LinkedIn.
4. **Verificación**: Validar con `compile_applet` y `lint_applet` para garantizar compatibilidad estática perfecta con GitHub Pages.
