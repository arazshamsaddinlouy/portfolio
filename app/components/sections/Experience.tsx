import { experiences } from "@/app/data/experience";

import { CompanyLogo } from "../ui/CompanyLogo";
import { SectionHeading } from "../ui/SectionHeading";
import { FiBriefcase, FiMapPin } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-12">
      <SectionHeading
        title="Experience"
        icon={<FiBriefcase />}
        subtitle="11+ years of experience building scalable frontend applications, enterprise platforms, and modern digital products."
      />

      <div
        className="
          relative
          space-y-10
          before:absolute
          before:left-[7px]
          before:top-4
          before:h-[calc(100%-2rem)]
          before:w-px
          before:bg-slate-800
        "
      >
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="
              group
              relative
              pl-8
            "
          >
            {/* Timeline Dot */}
            <div
              className="
                absolute
                left-0
                top-8
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                border
                border-teal-300/50
                bg-slate-950
                transition-all
                duration-300
                group-hover:border-teal-300
                group-hover:scale-125
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-teal-300
                "
              />
            </div>

            <div
              className="
                rounded-xl
                border
                border-transparent
                p-6
                transition-all
                duration-300
                hover:border-slate-700
                hover:bg-slate-800/40
              "
            >
              <div className="grid gap-6 md:grid-cols-4">
                {/* Period */}
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    {experience.period}
                  </p>

                  {experience.location && (
                    <div
                      className="
                        mt-2
                        flex
                        items-center
                        gap-1
                        text-xs
                        text-slate-500
                      "
                    >
                      <FiMapPin />
                      {experience.location}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  {/* Company */}
                  <div className="flex items-center gap-3">
                    <CompanyLogo
                      src={experience.logo}
                      alt={experience.company}
                    />

                    <div>
                      <h3
                        className="
                          text-lg
                          font-semibold
                          text-slate-100
                        "
                      >
                        {experience.role}
                      </h3>

                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            text-sm
                            text-teal-300
                            transition
                            hover:text-teal-200
                          "
                        >
                          {experience.company}
                        </a>
                      ) : (
                        <p className="text-sm text-teal-300">
                          {experience.company}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="mt-5 space-y-3">
                    {experience.description.map((item) => (
                      <li
                        key={item}
                        className="
                          relative
                          pl-4
                          text-sm
                          leading-relaxed
                          text-slate-400
                          before:absolute
                          before:left-0
                          before:top-2
                          before:h-1
                          before:w-1
                          before:rounded-full
                          before:bg-teal-300
                        "
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
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
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
