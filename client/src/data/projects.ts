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
    title: "E-commerce Website",
    slug: "ecommerce-website",
    description: "A modern storefront built with TailwindCSS, featuring dynamic product grids and responsive design.",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["TailwindCSS", "React", "NextJS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Dashboard UI",
    slug: "dashboard-ui",
    description: "A clean admin interface with customized Tailwind components and interactive charts.",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["TailwindCSS", "Alpine.js", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    slug: "saas-landing-page",
    description: "High-converting SaaS landing page with custom TailwindCSS animations and micro-interactions.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["TailwindCSS", "Vue.js", "GSAP"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "Marketing Site",
    slug: "marketing-site",
    description: "Corporate marketing site with advanced Tailwind techniques for custom gradients and layouts.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["TailwindCSS", "Svelte", "Vite"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 5,
    title: "Mobile App UI",
    slug: "mobile-app-ui",
    description: "Hybrid mobile app interface designed with Tailwind's mobile-first approach and custom plugins.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["TailwindCSS", "React Native", "Expo"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 6,
    title: "Portfolio Template",
    slug: "portfolio-template",
    description: "Customizable portfolio template with TailwindCSS animations, dark mode, and responsive layouts.",
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["TailwindCSS", "Alpine.js", "Static Site"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];