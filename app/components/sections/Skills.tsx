import { skills } from "@/app/data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import {
  FiBox,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiTool,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Development": <FiCode />,
  "Backend Development": <FiCpu />,
  Databases: <FiDatabase />,
  "Frontend Engineering": <FiLayers />,
  "Cloud & Development Tools": <FiCloud />,
  "Software Development Practices": <FiZap />,
  "Product & Collaboration": <FiUsers />,
  "Analytics & Design Tools": <FiTool />,
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-12">
      <SectionHeading
        title="Skills"
        icon={<FiCode />}
        subtitle="Technologies and practices I use to build modern web applications, including AI-assisted development with Cursor and Claude."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-800/30 p-5"
          >
            <span className="mt-0.5 shrink-0 text-lg text-teal-300">
              {categoryIcons[skill.category] ?? <FiBox />}
            </span>

            <div>
              <h3 className="text-sm font-medium text-slate-200">
                {skill.category}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {skill.items.join(" · ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
