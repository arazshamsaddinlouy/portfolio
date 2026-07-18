import { siteConfig } from "@/app/config/site";
import { SectionHeading } from "../ui/SectionHeading";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: <FiGithub className="h-4 w-4" />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: <FiLinkedin className="h-4 w-4" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-12">
      <SectionHeading
        title="Contact"
        icon={<FiMessageCircle />}
        subtitle="Open to new opportunities, collaborations, and interesting frontend challenges."
      />

      <div className="space-y-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/5 px-3 py-1.5 text-xs font-medium text-teal-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              Available for work
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-xl text-teal-300">
                <FiMail />
              </div>

              <div>
                <p className="font-medium text-slate-200">Let's connect</p>
                <p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-400">
                  Have a project in mind or want to discuss an opportunity? I'd
                  love to hear from you.
                </p>
              </div>
            </div>
          </div>

          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-teal-400 px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/20"
          >
            <FiMail className="h-4 w-4" />
            Send an email
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="my-6 h-px bg-slate-800" />

        <div className="flex flex-col gap-3 sm:flex-row">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/40 px-5 py-3 text-sm font-medium text-slate-300 transition-all hover:border-teal-400/40 hover:bg-teal-400/5 hover:text-teal-300"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-slate-500 sm:text-left">
          {siteConfig.email}
        </p>
      </div>
    </section>
  );
}
