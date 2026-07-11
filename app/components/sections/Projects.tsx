import Image from "next/image";
import { FiExternalLink, FiFolder } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/app/data/projects";
import { SectionHeading } from "../ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-12">
      <SectionHeading
        title="Projects"
        icon={<FiFolder />}
        subtitle="A selection of professional and personal projects showcasing my approach to building scalable, high-quality web applications."
      />
      <div className="space-y-12">
        {projects.map((project) => (
          <article
            key={project.name}
            className="
              group
              relative
              grid
              gap-6
              rounded-lg
              transition-all
              duration-300
              lg:grid-cols-4
              lg:gap-8
              lg:p-6
              lg:hover:bg-slate-800/50
            "
          >
            {/* Project Image */}
            <div className="hidden lg:block">
              <div className="hidden lg:block">
                <div
                  className="
      relative
      aspect-video
      overflow-hidden
      rounded-lg
      border
      border-slate-700
      bg-white
    "
                >
                  {project.image ? (
                    <div className="absolute inset-4">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="
            object-contain
            transition-transform
            duration-500
            group-hover:scale-105
          "
                      />
                    </div>
                  ) : (
                    <div
                      className="
          flex
          h-full
          items-center
          justify-center
          bg-gradient-to-br
          from-slate-800
          via-slate-900
          to-slate-800
        "
                    >
                      <span
                        className="
            text-center
            text-sm
            font-medium
            text-slate-500
          "
                      >
                        {project.name}
                      </span>
                    </div>
                  )}

                  <div
                    className="
        pointer-events-none
        absolute
        inset-0
        rounded-lg
        ring-1
        ring-inset
        ring-black/5
      "
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <h3 className="flex items-center gap-3 font-medium text-slate-200">
                {project.name}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-slate-400
                      transition
                      hover:text-teal-300
                    "
                    aria-label={`Visit ${project.name}`}
                  >
                    <FiExternalLink />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-slate-400
                      transition
                      hover:text-teal-300
                    "
                    aria-label={`Github ${project.name}`}
                  >
                    <FaGithub />
                  </a>
                )}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-slate-400
                "
              >
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="
                      rounded-full
                      bg-teal-400/10
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-teal-300
                    "
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
