export interface Project {
  name: string;
  description: string;
  image?: string; // Optional
  url?: string; // Optional
  github?: string; // Optional
  technologies: string[];
  featured?: boolean; // Optional
}

export interface ProjectCardProps {
  project: Project;
}
