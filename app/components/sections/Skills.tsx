import { skills } from "@/app/data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiCloud,
  FiUsers,
  FiTool,
  FiBox,
  FiLayers,
  FiZap,
} from "react-icons/fi";

// Map category to icons with colors
const categoryIcons: Record<
  string,
  { icon: React.ReactNode; color: string; bg: string }
> = {
  "Frontend Development": {
    icon: <FiCode />,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
  "Backend Development": {
    icon: <FiCpu />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  Databases: {
    icon: <FiDatabase />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  "Frontend Engineering": {
    icon: <FiLayers />,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  "Cloud & Development Tools": {
    icon: <FiCloud />,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  "Software Development Practices": {
    icon: <FiZap />,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  "Product & Collaboration": {
    icon: <FiUsers />,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  "Analytics & Design Tools": {
    icon: <FiTool />,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
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
          title="Skills"
          icon={<FiCode />}
          subtitle="Technologies, frameworks, and tools I use to design, build, and maintain modern web applications."
        />

        <div className="space-y-6 mt-8">
          {skills.map((skill) => {
            const categoryInfo = categoryIcons[skill.category] || {
              icon: <FiBox />,
              color: "text-slate-400",
              bg: "bg-slate-400/10",
            };

            return (
              <div key={skill.category} className="group mb-12">
                {/* Category Header with Icon - More prominent */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`rounded-lg p-2 ${categoryInfo.bg} transition-colors group-hover:${categoryInfo.bg.replace("10", "20")}`}
                  >
                    <span className={`text-base ${categoryInfo.color}`}>
                      {categoryInfo.icon}
                    </span>
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-slate-200">
                    {skill.category}
                  </h3>
                  <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded-full">
                    {skill.items.length}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-700/30 to-transparent" />
                </div>

                {/* Skills Tags - More prominent */}
                <ul className="flex flex-wrap gap-2.5 pl-0">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="
                        rounded-lg
                        border border-slate-700/40
                        bg-slate-800/30
                        px-3.5 py-1.5
                        text-sm
                        font-medium
                        text-slate-300
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-teal-400/40
                        hover:bg-teal-400/10
                        hover:text-teal-300
                        hover:shadow-md
                        hover:shadow-teal-400/5
                      "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
