import { skills } from "@/app/data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { FiCode } from "react-icons/fi";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-12">
      <SectionHeading
        title="Skills"
        icon={<FiCode />}
        subtitle="Technologies, frameworks, and tools I use to design, build, and maintain modern web applications."
      />
      <div className="space-y-8">
        {skills.map((skill) => (
          <div key={skill.category}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              {skill.category}
            </h3>

            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="
                    rounded-full
                    border
                    border-slate-700/80
                    bg-slate-800/50
                    px-3
                    py-1
                    text-sm
                    text-slate-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-teal-300/40
                    hover:bg-teal-400/10
                    hover:text-teal-300
                    hover:shadow-lg
                    hover:shadow-teal-400/5
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
