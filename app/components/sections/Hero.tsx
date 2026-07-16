import { siteConfig } from "@/app/config/site";
import { FiCode } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden py-4 lg:py-8"
    >
      {/* Dot Pattern Background - Brighter for dark theme */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(45, 212, 191, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Alternative: Brighter dots with two sizes */}
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(circle at 4px 4px, rgba(45, 212, 191, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 20px 20px, rgba(45, 212, 191, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: "40px 40px, 80px 80px",
        }}
      />

      <div className="relative space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-slate-800/50 px-4 py-2 text-sm font-medium text-teal-300 backdrop-blur-sm">
          <FiCode className="h-4 w-4" />
          <span>Front-end Engineer</span>
          <span className="h-1 w-1 rounded-full bg-teal-400/40" />
          <span className="text-slate-400">11+ years</span>
        </div>

        {/* Main Heading - Removed gradients */}
        <div className="space-y-4">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Building <span className="text-teal-300">scalable</span> and{" "}
            <span className="text-teal-300">high-performance</span> web
            applications
          </h1>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
          {siteConfig.description}
        </p>

        {/* Tech Stack - Minimal */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <span className="font-medium text-slate-300">Tech Stack:</span>
          {["React", "Angular", "Next.js", "TypeScript"].map((tech, index) => (
            <span key={tech} className="flex items-center gap-2">
              <span className="text-teal-400">✦</span>
              <span className="text-slate-300">{tech}</span>
              {index < 3 && <span className="text-slate-600">·</span>}
            </span>
          ))}
        </div>

        {/* Tags - Clean, no gradient effects */}
        <div className="flex flex-wrap gap-2">
          {[
            "Performance",
            "Accessibility",
            "Scalable Architecture",
            "UI Systems",
            "Clean Code",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-700/50 bg-slate-800/30 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30 hover:bg-teal-400/10 hover:text-teal-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
