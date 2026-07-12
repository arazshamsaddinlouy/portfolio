import Image from "next/image";
import { education } from "@/app/data/education";
import { SectionHeading } from "../ui/SectionHeading";
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";

export default function Education() {
  return (
    <section
      id="education"
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
          title="Education"
          icon={<FiBookOpen />}
          subtitle="Academic background and learning experiences that have shaped my technical foundation and engineering journey."
        />

        <div className="space-y-4 mt-8">
          {education.map((item, index) => (
            <article
              key={item.institution}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border border-slate-700/50
                bg-slate-800/30
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-teal-400/30
                hover:bg-slate-800/50
                hover:shadow-lg
                hover:shadow-teal-400/5
              "
            >
              {/* Timeline Line */}
              {index < education.length - 1 && (
                <div className="absolute left-[35px] top-[70px] bottom-0 w-0.5 bg-gradient-to-b from-teal-400/20 to-transparent" />
              )}

              <div className="flex items-center gap-6">
                {/* Logo with Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/50 p-2 transition-colors group-hover:border-teal-400/20 group-hover:bg-teal-400/5">
                    {item.logo ? (
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-white p-1.5">
                        <Image
                          src={item.logo}
                          alt={item.institution}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    ) : (
                      <FiBookOpen className="h-6 w-6 text-teal-300" />
                    )}
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-full rounded-full border-2 border-teal-400/30 bg-slate-900">
                    <div className="absolute inset-0.5 rounded-full bg-teal-400/20 transition-colors group-hover:bg-teal-400/40" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-200 transition-colors group-hover:text-teal-300">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-teal-300">{item.field}</p>
                    </div>

                    {/* Period Badge */}
                    <div className="flex items-center gap-1.5 rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-400 whitespace-nowrap">
                      <FiCalendar className="h-3 w-3" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Institution with icon */}
                  <div className="mt-2 flex items-center gap-1.5">
                    <FiMapPin className="h-3.5 w-3.5 text-slate-500" />
                    {item.institutionUrl ? (
                      <a
                        href={item.institutionUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-slate-400 transition-colors hover:text-teal-300"
                      >
                        {item.institution}
                      </a>
                    ) : (
                      <span className="text-sm text-slate-400">
                        {item.institution}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
