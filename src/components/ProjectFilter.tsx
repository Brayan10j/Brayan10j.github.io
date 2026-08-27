import { useState } from "react";
import { projects } from "../data/projects";

export function ProjectFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todos", emoji: "🌟" },
    { id: "ai", label: "AI & Agentes", emoji: "🧠" },
    { id: "web3", label: "Web3 & Blockchain", emoji: "⛓️" },
    { id: "fullstack", label: "Full Stack", emoji: "💻" },
    { id: "cloud", label: "Cloud & DevOps", emoji: "☁️" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full space-y-8">
      {/* Minimalist Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2" id="project-filters">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                isActive
                  ? "bg-foreground text-background"
                  : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary/70 border border-border/40"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Minimal Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="group flex flex-col justify-between rounded-xl border border-border/60 bg-card p-5 transition hover:border-border hover:shadow-sm"
          >
            <div>
              {/* Header: Emoji & Status Tag */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xl">{project.emoji}</span>
                <span className="text-[11px] font-mono text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded border border-border/40">
                  {project.badgeText}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground font-medium mb-2.5">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-xs text-muted-foreground/90 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1 mb-5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-0.5 rounded bg-secondary/30 text-muted-foreground border border-border/30 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                id={`btn-visit-${project.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition"
              >
                <span>Explorar Proyecto</span>
                <span className="text-sm">↗</span>
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`btn-github-${project.id}`}
                  className="p-1.5 rounded text-muted-foreground hover:text-foreground transition"
                  title="Repositorio"
                >
                  <span className="text-sm">🐙</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

