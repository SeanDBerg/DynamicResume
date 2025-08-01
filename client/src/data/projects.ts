export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Call Center KPI Dashboard",
    slug: "call-center-KPIs",
    description: "A React Based KPI dashboard tracking 3.3B in transaction processing across 200,000+ accounts.",
    image: "public/CallCenterScreenshot.png",
    technologies: ["TailwindCSS", "React", "Javascript", "API", "SQL"],
    github: "https://seandberg.github.io/CallCenterVision/",
    demo: "https://seandberg.github.io/CallCenterVision/",
  }
];