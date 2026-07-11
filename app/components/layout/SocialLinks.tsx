import { socialLinks } from "@/app/config/social";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const icons = {
  linkedin: FaLinkedin,
  github: FaGithub,
};

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-5">
      {socialLinks.map((item) => {
        const Icon = icons[item.icon as keyof typeof icons];

        return (
          <li key={item.name}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className="text-slate-400 transition hover:text-slate-200"
            >
              <Icon className="h-6 w-6" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
