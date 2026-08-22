export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  duration: string;
  location: string;
  locationType: string;
  points: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "ey-internship",
    role: "Agentic AI Intern",
    company: "Ernst & Young (EY)",
    employmentType: "Internship",
    duration: "May 2026 - July 2026",
    location: "Gurgaon, India",
    locationType: "On-site",
    points: [
      "Engineered an AI-powered BFSI transaction dispute investigation platform using LangGraph-based multi-agent workflows to automate dispute intake, evidence analysis, and adjudication.",
      "Developed LLM- and RAG-powered pipelines with MCP integration to classify disputes, validate supporting evidence, and generate explainable investigation reports, reducing manual review effort by ~40%.",
      "Built scalable backend services using FastAPI, PostgreSQL, and Redis for workflow orchestration, improving dispute processing time by ~35% and enhancing system responsiveness.",
      "Collaborated with cross-functional teams to deliver production-ready AI solutions, increasing investigation consistency and reducing turnaround time for complex dispute cases by ~30%."
    ],
  },
  {
    id: "infutrix-internship",
    role: "Software Engineering Intern",
    company: "Infutrix Technologies Pvt. Ltd.",
    employmentType: "Internship",
    duration: "January 2026 - April 2026",
    location: "Mohali, India",
    locationType: "On-site",
    points: [
      "Developed core modules of the BBNIA Trade Portal using Next.js, TypeScript, Prisma, and PostgreSQL, building responsive interfaces and scalable backend integrations for industrial trade and recruitment services.",
      "Integrated a secure Razorpay payment gateway for membership subscriptions and premium services, streamlining payment processing and reducing transaction failures by ~25%.",
      "Implemented authentication, CRUD operations, admin panel functionalities, and REST API integrations, reducing manual administrative effort by ~35% while improving operational efficiency.",
      "Optimized application performance through SEO enhancements, efficient database queries, and state management, contributing to ~30% faster page loads and an improved user experience."
    ],
  },
];
