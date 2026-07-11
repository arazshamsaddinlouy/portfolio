import Image from "next/image";

import { education } from "@/app/data/education";
import { SectionHeading } from "../ui/SectionHeading";
import { FiBookOpen } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-12">
      <SectionHeading
        title="Education"
        icon={<FiBookOpen />}
        subtitle="Academic background and learning experiences that have shaped my technical foundation and engineering journey."
      />

      <div className="space-y-6">
        {education.map((item) => (
          <article
            key={item.institution}
            className="
              group
              rounded-xl
              p-6
              transition-all
              duration-300
              hover:bg-slate-800/40
            "
          >
            <div className="grid gap-6 md:grid-cols-4">
              {/* Period */}
              <div className="text-sm font-medium text-slate-400">
                {item.period}
              </div>

              {/* Content */}
              <div className="md:col-span-3">
                <div className="flex items-start gap-4">
                  {/* University Logo */}
                  {item.logo && (
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-xl
                        border
                        border-slate-700
                        bg-white
                        p-2
                      "
                    >
                      <Image
                        src={item.logo}
                        alt={item.institution}
                        width={40}
                        height={40}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}

                  <div>
                    <h3
                      className="
                        text-lg
                        font-semibold
                        text-slate-200
                      "
                    >
                      {item.degree}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-teal-300
                      "
                    >
                      {item.field}
                    </p>

                    {item.institutionUrl ? (
                      <a
                        href={item.institutionUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          mt-1
                          inline-block
                          text-sm
                          text-slate-400
                          transition
                          hover:text-teal-300
                        "
                      >
                        {item.institution}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-slate-400">
                        {item.institution}
                      </p>
                    )}
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
