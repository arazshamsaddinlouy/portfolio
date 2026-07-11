import { siteConfig } from "@/app/config/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 flex min-h-[60vh] flex-col justify-center py-16"
    >
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
          Contact
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          Let’s build something great together
        </h2>

        <p className="mt-6 leading-relaxed text-slate-400">
          I’m always interested in discussing new opportunities, challenging
          frontend projects, and building scalable digital experiences. Whether
          you have an idea, a project, or just want to connect, feel free to
          reach out.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center rounded-md bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-teal-200"
          >
            Get in touch
          </a>

          <a
            href="https://www.linkedin.com/in/araz-shams"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-slate-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
