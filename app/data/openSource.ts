import { OpenSourceModel } from "../types/openSource";

export const openSourceProjects: OpenSourceModel[] = [
  {
    name: "ngx-angular-datepicker",
    description:
      "A modern Angular Persian (Jalali) datepicker component with localization support, customizable themes, and seamless integration into Angular applications.",
    github: "https://github.com/arazshamsaddinlouy/ngx-persian-datepicker",
    npm: "https://www.npmjs.com/package/ngx-angular-datepicker",
    technologies: ["Angular", "TypeScript", "Jalali Calendar", "Localization"],
    featured: true,
  },
  {
    name: "ngx-music-audio-player",
    description:
      "A customizable Angular audio player component featuring playlist support, responsive design, playback controls, and an easy-to-use API.",
    github: "https://github.com/arazshamsaddinlouy/audio-player",
    npm: "https://www.npmjs.com/package/ngx-music-audio-player",
    technologies: ["Angular", "TypeScript", "HTML5 Audio", "RxJS"],
    featured: false,
  },
];
