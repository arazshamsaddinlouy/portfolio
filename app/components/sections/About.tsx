import { FiCode, FiLayers, FiUser, FiUsers, FiZap } from "react-icons/fi";
import { SectionHeading } from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-12">
      <SectionHeading
        title="About"
        icon={<FiUser />}
        subtitle="Building modern web experiences with clean architecture, performance, and user experience in mind."
      />

      <div className="space-y-6">
        <p className="leading-relaxed text-slate-400">
          I'm a{" "}
          <span className="font-medium text-slate-200">
            Senior Front-end Engineer
          </span>{" "}
          with more than 13 years of experience developing enterprise
          applications, fintech platforms, SaaS products, and large-scale web
          solutions. I enjoy transforming complex business requirements into
          intuitive, scalable, and maintainable user experiences.
        </p>

        <p className="leading-relaxed text-slate-400">
          My primary expertise is centered around{" "}
          <span className="text-slate-200">
            React, Next.js, Angular, TypeScript
          </span>{" "}
          and modern frontend architecture. I'm passionate about building
          reusable component libraries, improving application performance, and
          writing clean code that scales with growing products and teams.
        </p>

        <p className="leading-relaxed text-slate-400">
          Throughout my career, I've collaborated with designers, product
          managers, and backend engineers while contributing to architecture
          decisions, mentoring developers, reviewing code, and continuously
          improving engineering practices. Recently, I've also been leveraging
          AI-assisted development to increase productivity and software quality.
        </p>

        <div className="grid gap-4 pt-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-800/30 p-4 transition-all duration-300 hover:border-teal-400/40 hover:bg-slate-800/50">
            <FiCode className="mt-1 shrink-0 text-lg text-teal-300" />

            <div>
              <h3 className="font-medium text-slate-200">
                Frontend Engineering
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                React, Angular, Next.js, TypeScript, scalable architectures and
                reusable UI systems.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-800/30 p-4 transition-all duration-300 hover:border-teal-400/40 hover:bg-slate-800/50">
            <FiZap className="mt-1 shrink-0 text-lg text-teal-300" />

            <div>
              <h3 className="font-medium text-slate-200">Performance</h3>

              <p className="mt-1 text-sm text-slate-400">
                Performance optimization, SEO, accessibility, responsive design
                and Core Web Vitals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-800/30 p-4 transition-all duration-300 hover:border-teal-400/40 hover:bg-slate-800/50">
            <FiLayers className="mt-1 shrink-0 text-lg text-teal-300" />

            <div>
              <h3 className="font-medium text-slate-200">Modern Stack</h3>

              <p className="mt-1 text-sm text-slate-400">
                Tailwind CSS, Redux, Zustand, RxJS, Node.js, Express and REST
                APIs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-800/30 p-4 transition-all duration-300 hover:border-teal-400/40 hover:bg-slate-800/50">
            <FiUsers className="mt-1 shrink-0 text-lg text-teal-300" />

            <div>
              <h3 className="font-medium text-slate-200">Collaboration</h3>

              <p className="mt-1 text-sm text-slate-400">
                Agile development, code reviews, mentoring, cross-functional
                collaboration and technical leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
