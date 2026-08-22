export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  duration: string;
  location: string;
  score?: string;
  details?: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "college",
    institution: "Punjab Engineering College (PEC)",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    duration: "2023 - 2027",
    location: "Chandigarh, India",
    details: [
      "Core Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOP.",
      "Actively engaged in software development, AI research, and competitive programming.",
    ],
  },
  {
    id: "class-12",
    institution: "Government Model Senior Secondary School",
    degree: "Higher Secondary Education (12th)",
    field: "Non-Medical (Physics, Chemistry, Mathematics)",
    duration: "Completed",
    location: "Chandigarh, India",
    details: [
      "Specialized in Science & Mathematics with strong academic excellence.",
    ],
  },
  {
    id: "class-10",
    institution: "Ryan International School, Chandigarh",
    degree: "Secondary School Examination (10th)",
    duration: "Completed",
    location: "Chandigarh, India",
    details: [
      "Completed secondary education with distinct subjects.",
    ],
  },
];
