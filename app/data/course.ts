import { Course } from "@/app/types/course";

export const courses: Course[] = [
  {
    title: "JavaScript",
    provider: "Course Certificate",
    description:
      "JavaScript fundamentals, DOM manipulation, events, functions, and dynamic web development.",
    image: "/certificates/javascript.jpg",
    skills: ["JavaScript", "DOM", "Web Development"],
  },
  {
    title: "HTML & CSS",
    provider: "Course Certificate",
    description:
      "Semantic HTML, CSS fundamentals, responsive layouts, and modern web page styling.",
    image: "/certificates/html-css.jpg",
    skills: ["HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Web Design Foundation",
    provider: "Course Certificate",
    description:
      "Core web design principles, page structure, visual hierarchy, usability, and layout fundamentals.",
    image: "/certificates/web-design.jpg",
    skills: ["Web Design", "UI Fundamentals", "Layout"],
  },
  {
    title: "Search Engine Optimization",
    provider: "Course Certificate",
    description:
      "SEO fundamentals including page structure, metadata, content optimization, and search visibility.",
    image: "/certificates/seo.jpg",
    skills: ["SEO", "Metadata", "Web Performance"],
  },
  {
    title: "Adobe Photoshop",
    provider: "Basic & Advanced Courses",
    description:
      "Image editing, asset preparation, visual composition, and optimization of graphics for web applications.",
    image: "/certificates/photoshop.jpg",
    skills: ["Photoshop", "Image Editing", "Web Assets"],
  },
  {
    title: "PHP",
    provider: "Course Certificate",
    description:
      "Server-side programming fundamentals, form handling, database integration, and dynamic web applications.",
    image: "/certificates/php.jpg",
    skills: ["PHP", "Backend Fundamentals", "Web Development"],
  },
];
