import { useState, useEffect, useMemo } from "react";
import { projects, type ProjectItem, type SubProjectItem } from "../data/projects";
import {
  SearchIcon,
  ExternalLinkIcon,
  GitHubIcon,
} from "./icons/PlatformIcons";
import { useLocale } from "../lib/i18n";
import { translations } from "../data/translations";

export function ProjectFilter() {
  const [locale] = useLocale();
  const t = translations[locale].projects;

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: locale === "en" ? "All" : "Todos", emoji: "🌟" },
    { id: "ai", label: "AI & Agents", emoji: "🧠" },
    { id: "fullstack", label: "FullStack Web", emoji: "⚡" },
    { id: "web3", label: "Web3 & RWA", emoji: "⛓️" },
  ];

  // Filter projects by category and search keyword
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const title = (locale === "en" && project.titleEn ? project.titleEn : project.title).toLowerCase();
      const tagline = (locale === "en" && project.taglineEn ? project.taglineEn : project.tagline).toLowerCase();
      const desc = (locale === "en" && project.descriptionEn ? project.descriptionEn : project.description).toLowerCase();
      const inTech = project.technologies.some((tech) =>
        tech.toLowerCase().includes(q)
      );
      const inSubProjects = project.subProjects?.some((sp) => {
        const spTitle = (locale === "en" && sp.titleEn ? sp.titleEn : sp.title).toLowerCase();
        const spDesc = (locale === "en" && sp.descriptionEn ? sp.descriptionEn : sp.description).toLowerCase();
        const spTech = sp.technologies.some((tech) => tech.toLowerCase().includes(q));
        return spTitle.includes(q) || spDesc.includes(q) || spTech;
      });

      return (
        title.includes(q) ||
        tagline.includes(q) ||
        desc.includes(q) ||
        inTech ||
        inSubProjects
      );
    });
  }, [activeCategory, searchQuery, locale]);

  // Close modal with Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalProject(null);
      }
    };

    if (modalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalProject]);

  return (
    <div className="w-full space-y-6">
      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5" id="project-filters">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                id={`filter-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  isActive
                    ? "bg-foreground text-background shadow-xs font-semibold"
                    : "bg-secondary/70 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Real-time Search Box */}
        <div className="relative w-full sm:w-64 shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
            <SearchIcon className="w-3.5 h-3.5" />
          </div>
          <input
            type="text"
            id="projects-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-9 pr-8 py-1.5 text-xs rounded-lg border border-border/80 bg-background text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-foreground/50 transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-muted-foreground hover:text-foreground text-xs"
              title="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results Count indicator if searching */}
      {searchQuery && (
        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>
            {t.showingResults(filteredProjects.length, projects.length, searchQuery)}
          </span>
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="text-primary hover:underline cursor-pointer"
          >
            {t.clearFilter}
          </button>
        </div>
      )}

      {/* Project Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-10 rounded-xl border border-dashed border-border text-center space-y-2">
          <p className="text-sm font-medium text-foreground">
            {t.noResultsTitle}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.noResultsDesc}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => {
            const currentTitle =
              locale === "en" && project.titleEn ? project.titleEn : project.title;
            const currentTagline =
              locale === "en" && project.taglineEn ? project.taglineEn : project.tagline;
            const currentDesc =
              locale === "en" && project.descriptionEn
                ? project.descriptionEn
                : project.description;
            const currentBadge =
              locale === "en" && project.badgeTextEn
                ? project.badgeTextEn
                : project.badgeText;

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between p-5 rounded-xl border border-border/70 bg-card hover:border-foreground/20 hover:shadow-xs transition duration-200"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{project.emoji}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border/50">
                        {currentBadge}
                      </span>
                    </div>
                    {project.highlight && (
                      <span
                        className="w-2 h-2 rounded-full bg-emerald-500"
                        title="Highlight"
                      />
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-bold text-base text-foreground mb-1 leading-snug">
                    {currentTitle}
                  </h3>
                  <p className="text-xs font-medium text-primary mb-2.5">
                    {currentTagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {currentDesc}
                  </p>

                  {/* Sub-projects preview indicator if available */}
                  {project.subProjects && project.subProjects.length > 0 && (
                    <div className="mb-4 p-2.5 rounded-lg bg-secondary/30 border border-border/40 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-foreground">
                        <span className="flex items-center gap-1.5">
                          <span>🤖</span>
                          <span>{t.includedAgents(project.subProjects.length)}</span>
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono">
                          Modal ↗
                        </span>
                      </div>
                      <div className="text-[11px] text-muted-foreground truncate">
                        📑{" "}
                        {locale === "en" && project.subProjects[0].titleEn
                          ? project.subProjects[0].titleEn
                          : project.subProjects[0].title}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary/60 text-muted-foreground border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                  {project.hasModal ||
                  (project.subProjects && project.subProjects.length > 0) ? (
                    <button
                      type="button"
                      id={`btn-modal-${project.id}`}
                      onClick={() => setModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:opacity-80 transition cursor-pointer bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg border border-primary/20"
                    >
                      <span>🧠</span>
                      <span>{t.viewAgents}</span>
                      <ExternalLinkIcon className="w-3 h-3" />
                    </button>
                  ) : (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`btn-visit-${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition"
                    >
                      <span>{t.exploreProject}</span>
                      <ExternalLinkIcon className="w-3 h-3" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`btn-github-${project.id}`}
                      className="p-1.5 rounded text-muted-foreground hover:text-foreground transition"
                      title="GitHub"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Dialog for Category Projects / Agents */}
      {modalProject && (
        <div
          id="project-category-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setModalProject(null);
            }
          }}
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-card border border-border text-card-foreground shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-border/60 bg-secondary/20">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{modalProject.emoji}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border/50">
                    {locale === "en" && modalProject.badgeTextEn
                      ? modalProject.badgeTextEn
                      : modalProject.badgeText}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  {locale === "en" && modalProject.titleEn
                    ? modalProject.titleEn
                    : modalProject.title}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {locale === "en" && modalProject.taglineEn
                    ? modalProject.taglineEn
                    : modalProject.tagline}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                id="btn-close-modal"
                onClick={() => setModalProject(null)}
                className="shrink-0 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition cursor-pointer text-sm"
                aria-label="Cerrar modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body - Sub-Projects List */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {t.modalCategoryTitle}
              </div>

              {modalProject.subProjects && modalProject.subProjects.length > 0 ? (
                <div className="space-y-4">
                  {modalProject.subProjects.map((subItem: SubProjectItem) => {
                    const subTitle =
                      locale === "en" && subItem.titleEn
                        ? subItem.titleEn
                        : subItem.title;
                    const subTagline =
                      locale === "en" && subItem.taglineEn
                        ? subItem.taglineEn
                        : subItem.tagline;
                    const subDesc =
                      locale === "en" && subItem.descriptionEn
                        ? subItem.descriptionEn
                        : subItem.description;
                    const subFeatures =
                      locale === "en" && subItem.featuresEn
                        ? subItem.featuresEn
                        : subItem.features;
                    const subBadge =
                      locale === "en" && subItem.badgeTextEn
                        ? subItem.badgeTextEn
                        : subItem.badgeText;

                    return (
                      <div
                        key={subItem.id}
                        id={`subproject-${subItem.id}`}
                        className="p-4 sm:p-5 rounded-xl border border-border/80 bg-secondary/15 hover:border-primary/40 transition space-y-3.5"
                      >
                        {/* Sub-item Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl">{subItem.emoji}</span>
                            <div>
                              <h3 className="text-sm sm:text-base font-bold text-foreground">
                                {subTitle}
                              </h3>
                              <p className="text-xs text-muted-foreground font-medium">
                                {subTagline}
                              </p>
                            </div>
                          </div>

                          {subBadge && (
                            <span className="self-start sm:self-center text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30">
                              {subBadge}
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {subDesc}
                        </p>

                        {/* Key features if present */}
                        {subFeatures && (
                          <div className="space-y-1 pt-1">
                            <span className="text-[11px] font-semibold text-foreground">
                              {t.modalKeyCapabilities}
                            </span>
                            <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                              {subFeatures.map((feat, idx) => (
                                <li key={idx} className="leading-snug">
                                  {feat}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {subItem.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary/60 text-muted-foreground border border-border/40"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Link */}
                        <div className="pt-2 border-t border-border/30 flex justify-end">
                          <a
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            id={`btn-open-agent-${subItem.id}`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 active:scale-95 transition"
                          >
                            <span>{subItem.emoji}</span>
                            <span>{t.modalOpenAgent}</span>
                            <ExternalLinkIcon className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-border/60 bg-secondary/10 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span>⚡</span>
                <span>{t.modalUpdated}</span>
              </span>
              <button
                type="button"
                id="btn-close-modal-footer"
                onClick={() => setModalProject(null)}
                className="px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 text-foreground text-xs font-medium transition cursor-pointer"
              >
                {t.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
