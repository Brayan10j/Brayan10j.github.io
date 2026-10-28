# Plan de Internacionalización Bilingüe (ES / EN)

*Permite atender tanto al mercado hispanohablante (LATAM / España) como a oportunidades globales en EE.UU. y Europa (remoto en USD), sin complicar la arquitectura ni romper el despliegue estático gratuito en GitHub Pages.*

---

## 1. Arquitectura Técnica de i18n para GitHub Pages

Para evitar problemas típicos de GitHub Pages (como errores 404 en sub-rutas estáticas o recargas lentas de página), utilizaremos una solución reactiva, ligera y sin dependencias pesadas:

- **Almacenamiento y Detección**:
  - Detección automática del idioma del navegador (`navigator.language.startsWith('es') ? 'es' : 'en'`).
  - Persistencia de la selección del usuario en `localStorage.getItem("portfolio_lang")`.
- **Selector en Navbar**:
  - Botón minimalista `ES | EN` junto al selector de modo oscuro/claro (`ModeToggle`), con diseño sobrio y moderno.
- **Diccionario Centralizado**:
  - Archivo `src/data/translations.ts` con tipado estricto en TypeScript para textos del Hero, Enfoque Profesional, Servicios B2B, Proyectos, Trayectoria y Contacto.

---

## 2. Contenido a Traducir

| Sección | Versión en Español (ES) | Versión en Inglés (EN) |
| :--- | :--- | :--- |
| **Hero Role** | AI Systems Architect \| Full-Stack & Web3 Developer | AI Systems Architect \| Full-Stack & Web3 Developer |
| **Badge** | 🟢 Disponible para proyectos técnicos & consultoría B2B | 🟢 Available for technical projects & B2B consulting |
| **Hero Bio** | Diseño arquitecturas escalables que combinan Sistemas de IA & Agentes autónomos, aplicaciones web de alto rendimiento y ecosistemas descentralizados en Web3 & Tokenización. | Designing scalable architectures that combine AI Systems & Autonomous Agents, high-performance web applications, and decentralized Web3 & Tokenization ecosystems. |
| **CTAs** | Ver Proyectos \| Conectar en LinkedIn | View Projects \| Connect on LinkedIn |
| **Servicios** | Servicios & Soluciones B2B | B2B Services & Technical Solutions |
| **Proyectos** | Búsqueda por tecnología, descripciones de proyectos y modal de agentes en ambos idiomas | Full English tags, descriptions, and agent modal details |
| **Trayectoria** | Hitos técnicos y enlace verificado hacia LinkedIn | Technical milestones and verified LinkedIn profile callout |
| **Contacto** | ¿Hablamos de tu próximo reto técnico? | Let's discuss your next technical challenge |

---

## 3. Plan de Ejecución

1. **Paso 1: Diccionario de Traducciones (`src/data/translations.ts`)**
   - Centralizar todas las cadenas y contenido en español e inglés con tipado TypeScript.
2. **Paso 2: Componente Selector de Idioma (`src/components/LanguageToggle.tsx`)**
   - Switch minimalista `ES | EN` que emite cambios de estado instantáneos y los guarda en `localStorage`.
3. **Paso 3: Integración en Componentes Clave**
   - Actualizar `Navbar.astro`, `ProjectFilter.tsx`, `ServicesSection.astro`, `ExperienceTimeline.astro` y `ContactCard.tsx` para responder al idioma activo.
4. **Paso 4: Validación y Compilación**
   - Ejecutar `compile_applet` y `lint_applet` para asegurar que el build estático para GitHub Pages (`Brayan10j.github.io`) continúe funcionando con 0 errores y máxima velocidad.
