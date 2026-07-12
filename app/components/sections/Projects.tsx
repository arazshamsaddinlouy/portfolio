import Image from "next/image";
import {
  FiExternalLink,
  FiFolder,
  FiGithub,
  FiArrowRight,
} from "react-icons/fi";
import { projects } from "@/app/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Project } from "@/app/types/project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden py-12"
    >
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(45, 212, 191, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          icon={<FiFolder />}
          subtitle="A selection of professional and personal projects showcasing my approach to building scalable, high-quality web applications."
        />

        {/* Projects List - Full Width Cards */}
        <div className="space-y-4 mt-8">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Define props type for ProjectCard
interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = project.featured || false;

  return (
    <article
      className="
        group
        relative
        flex
        items-center
        gap-6
        rounded-xl
        border border-slate-700/30
        bg-slate-800/20
        p-4
        transition-all
        duration-300
        hover:border-teal-400/20
        hover:bg-slate-800/40
        hover:shadow-lg
        hover:shadow-teal-400/5
      "
    >
      {/* Project Image - Small thumbnail */}
      {project.image && (
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-slate-800/50">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-contain p-1"
          />
        </div>
      )}

      {/* Project Number (if no image) */}
      {!project.image && (
        <div className="hidden sm:block text-4xl font-bold text-slate-700/20 min-w-[60px]">
          {String(index + 1).padStart(2, "0")}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-lg font-semibold text-slate-200 transition-colors group-hover:text-teal-300">
            {project.name}
          </h3>

          {/* Featured Badge */}
          {isFeatured && (
            <span className="rounded-full bg-teal-400/10 px-2 py-0.5 text-xs font-medium text-teal-300">
              Featured
            </span>
          )}
        </div>

        <p className="mt-1 text-sm text-slate-400 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="text-xs text-slate-500 transition-colors group-hover:text-slate-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs text-slate-600">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-1 flex-shrink-0">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-teal-400/10 hover:text-teal-300"
            aria-label={`GitHub repository for ${project.name}`}
          >
            <FiGithub className="h-4 w-4" />
          </a>
        )}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-teal-400/10 hover:text-teal-300"
            aria-label={`Visit ${project.name}`}
          >
            <FiExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}
