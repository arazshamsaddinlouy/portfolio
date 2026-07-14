import { openSourceProjects } from "@/app/data/openSource";
import { OpenSourceModel } from "@/app/types/openSource";
import { SectionHeading } from "../ui/SectionHeading";
import { FiCode, FiGithub, FiPackage } from "react-icons/fi";
import { SiNpm } from "react-icons/si";

export default function OpenSource() {
  return (
    <section
      id="opensource"
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

      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          title="Open Source Packages"
          icon={<FiCode />}
          subtitle="Reusable Angular libraries and components published on npm and maintained as open-source projects."
        />

        <div className="space-y-4 mt-8">
          {openSourceProjects.map((project: OpenSourceModel) => (
            <OpenSourceCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface OpenSourceCardProps {
  project: OpenSourceModel;
}

function OpenSourceCard({ project }: OpenSourceCardProps) {
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
      {/* Package Icon */}
      <div
        className="
          flex
          h-16
          w-16
          flex-shrink-0
          items-center
          justify-center
          rounded-lg
          bg-teal-400/10
          text-teal-300
        "
      >
        <FiPackage className="h-8 w-8" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-lg font-semibold text-slate-200 transition-colors group-hover:text-teal-300">
            {project.name}
          </h3>

          {project.featured && (
            <span className="rounded-full bg-teal-400/10 px-2 py-0.5 text-xs font-medium text-teal-300">
              Featured
            </span>
          )}
        </div>

        <p className="mt-1 text-sm text-slate-400 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border border-slate-700/40
                bg-slate-800/30
                px-2.5
                py-0.5
                text-xs
                font-medium
                text-slate-300
                transition-all
                duration-200
                group-hover:border-teal-400/20
                group-hover:bg-teal-400/5
                group-hover:text-teal-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-teal-400/10 hover:text-teal-300"
          aria-label={`GitHub repository for ${project.name}`}
        >
          <FiGithub className="h-5 w-5" />
        </a>

        <a
          href={project.npm}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-teal-400/10 hover:text-teal-300"
          aria-label={`npm package for ${project.name}`}
        >
          <SiNpm className="h-5 w-5" />
        </a>
      </div>
    </article>
  );
}
