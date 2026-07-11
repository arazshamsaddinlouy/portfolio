import { siteConfig } from "@/app/config/site";
import { FiCode } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="space-y-8">
        <div>
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            <FiCode />
            Front-end Engineer
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Building scalable and high-performance web applications
          </h1>
        </div>

        <p className="max-w-2xl text-xl leading-relaxed text-slate-300">
          {siteConfig.description}
        </p>

        <p className="max-w-3xl leading-relaxed text-slate-400">
          I specialize in React, Angular, Next.js, and TypeScript, with 13+
          years of experience building maintainable frontend architectures,
          reusable component systems, and user-focused digital products.
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            "13+ Years Experience",
            "React",
            "Angular",
            "Next.js",
            "TypeScript",
            "Performance",
            "Accessibility",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1.5 text-sm font-medium text-teal-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
