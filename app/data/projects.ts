import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    name: "ProptIQ Real Estate",

    description:
      "Developed an AI-powered real estate platform that helps users discover and evaluate properties across Australia based on budget, preferences, and investment goals.",
    image: "/images/logo/ProptIQ.svg",
    url: "https://dev.proptiq.com.au",

    technologies: ["Angular", "TypeScript", "SSR", "RxJS", "Bootstrap"],

    featured: true,
  },

  {
    name: "TalaeShow",

    description:
      "Engineered a modern gold and silver trading platform from the ground up using React, focusing on performance, usability, and a seamless user experience.",

    url: "https://talaeshow.ir",
    image: "/images/logo/TalaeiShow.svg",
    technologies: ["React", "TypeScript", "Vite", "Axios", "CSS"],

    featured: true,
  },

  {
    name: "Ergo Raffle",

    description:
      "Built a modern crowdfunding and raffle platform from the ground up using React, delivering responsive interfaces and integrating frontend features with backend services.",

    url: "https://ergoraffle.com",
    image: "/images/logo/ErgoRaffle.png",
    technologies: ["React", "JavaScript", "SCSS", "REST API"],

    featured: true,
  },
];
