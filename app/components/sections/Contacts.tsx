import { siteConfig } from "@/app/config/site";
import { SectionHeading } from "../ui/SectionHeading";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

const socialLinks = [
  {
    label: "GitHub",
    description: "Explore my projects",
    href: siteConfig.links.github,
    icon: <FiGithub className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    description: "Connect professionally",
    href: siteConfig.links.linkedin,
    icon: <FiLinkedin className="h-5 w-5" />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
      </div>

      <SectionHeading
        title="Contact"
        icon={<FiMessageCircle />}
        subtitle="Open to new opportunities, collaborations, and interesting frontend challenges."
      />

      <div className="relative mt-10 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10">
        {/* Card glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3.5 py-2 text-xs font-semibold text-teal-300 shadow-sm shadow-teal-400/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400/50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-400" />
                </span>
                Available for work
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-teal-400/20 bg-gradient-to-br from-teal-400/15 to-cyan-400/5 text-2xl text-teal-300 shadow-lg shadow-teal-400/5">
                  <FiMail />
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">
                    Let&apos;s build something great
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                    Have a project in mind, an exciting frontend challenge, or
                    an opportunity worth discussing? Send me a message and
                    let&apos;s start a conversation.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-teal-400 px-6 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-400/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-300 hover:shadow-xl hover:shadow-teal-400/20 lg:w-auto"
            >
              <FiMail className="h-4 w-4" />
              Send an email
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-700/80 to-transparent" />

          <div className="grid gap-4 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-slate-900 hover:shadow-lg hover:shadow-teal-400/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 via-transparent to-teal-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-950/70 text-slate-300 transition-all duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/10 group-hover:text-teal-300">
                    {link.icon}
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-slate-200 transition-colors group-hover:text-teal-300">
                      {link.label}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {link.description}
                    </p>
                  </div>

                  <FiArrowUpRight className="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-300" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-800/80 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-slate-500">Prefer email?</p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-slate-300 transition-colors hover:text-teal-300"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Extra bottom spacing */}
      <div className="h-10 sm:h-16" />
    </section>
  );
}
