export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with cart, checkout, and product filtering. Built with modern React patterns and state management.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "2",
    title: "Real-Time Dashboard",
    description:
      "Analytics dashboard with live data updates, charts, and customizable widgets for team metrics.",
    techStack: ["React", "WebSocket", "Recharts", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Task Management App",
    description:
      "Kanban-style task board with drag-and-drop, labels, and team collaboration features.",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "4",
    title: "Portfolio Generator",
    description:
      "CLI tool that generates a customizable portfolio site from a config file and Markdown content.",
    techStack: ["Node.js", "TypeScript", "Markdown", "EJS"],
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Weather & Maps",
    description:
      "Location-based weather app with map integration and 7-day forecasts.",
    techStack: ["React", "OpenWeather API", "Mapbox", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
