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
    title: "AI Dispute Investigation System",
    description:
      "An enterprise-grade BFSI dispute investigation platform that streamlines dispute intake, evidence validation, workflow orchestration, and customer communication using an AI-driven multi-agent architecture.",
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "LangGraph",
      "LLMs",
      "RAG",
      "MCP",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/garg-sushant/ai-dispute-investigation-system",
    liveUrl: "https://ai-dispute-investigation-system.vercel.app/",
  },
  {
    id: "2",
    title: "CampusBridge",
    description:
      "A full-stack AI-powered institutional grievance and governance portal for universities that streamlines complaint submission, intelligent triaging, department routing, and resolution workflows with real-time updates.",
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "SQLite",
      "NextAuth.js",
      "Tailwind CSS",
      "Grok LLM",
    ],
    githubUrl: "https://github.com/garg-sushant/CampusBridge",
    liveUrl: "https://campus-bridge-black.vercel.app",
  },
  {
    id: "3",
    title: "TimeComplexityAI",
    description:
      "An AI-powered code analysis platform that evaluates source code and provides detailed explanations of time and space complexity, helping developers understand algorithmic efficiency through LLM-powered insights.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "LLMs",
      "Grok",
      "Gemini",
    ],
    githubUrl: "https://github.com/garg-sushant/TimeComplexityAI",
    liveUrl: "https://timecomplexityai.vercel.app/",
  },
  {
    id: "4",
    title: "Smart Study Planner",
    description:
      "A full-stack MERN study planner that helps students organize goals, schedule tasks, log study sessions, and monitor productivity through an analytics dashboard with streak tracking and secure authentication.",
    techStack: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bootstrap",
    ],
    githubUrl: "https://github.com/garg-sushant/mystudyapp",
    liveUrl: "https://garg-sushant-mystudyapp.vercel.app",
  },
  {
    id: "5",
    title: "Queue Ease",
    description:
      "A full-stack MERN application that digitizes queue management by allowing users to join, track, and manage queues online while enabling businesses to efficiently organize customer flow and reduce waiting times.",
    techStack: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bootstrap",
    ],
    githubUrl: "https://github.com/garg-sushant/queue-ease",
    liveUrl: "https://queue-ease-mu.vercel.app",
  },
];
