import { useState } from "react";
import { projects } from "../data/projects";

export function ProjectFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todos los Proyectos", emoji: "🌟" },
    { id: "ai", label: "AI Systems & Agents", emoji: "🧠" },
    { id: "web3", label: "Web3 & Blockchain", emoji: "⛓️" },
    { id: "fullstack", label: "Full Stack & Web", emoji: "💻" },
    { id: "cloud", label: "Cloud & DevOps", emoji: "☁️" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="project-filters">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-secondary/60 text-secondary-foreground hover:bg-secondary border border-border/50"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {cat.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="group relative flex flex-col justify-between rounded-xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40"
          >
            <div>
              {/* Header: Emoji & Status Badge */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/80 text-2xl border border-border/50 group-hover:scale-110 transition-transform">
                  <span>{project.emoji}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground border border-border/40">
                  {project.badgeText}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-primary/80 mb-3">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs px-2.5 py-1 rounded-md bg-muted/60 text-muted-foreground border border-border/40 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-border/40 flex items-center justify-between gap-3">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                id={`btn-visit-${project.id}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow transition hover:opacity-90 active:scale-95"
              >
                <span>Explorar Proyecto</span>
                <span className="text-base">↗</span>
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`btn-github-${project.id}`}
                  className="inline-flex items-center justify-center rounded-lg border border-border px-3 py-2.5 text-sm font-medium hover:bg-secondary transition"
                  title="Ver Repositorio"
                >
                  <span>💻</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
