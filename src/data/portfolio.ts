export const personalInfo = {
  name: "Sneha Koshta",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications, REST APIs, cloud-powered solutions, and modern user experiences.",
  location: "Shanti Nagar, Damoh Naka, Jabalpur, Madhya Pradesh, India",
  email: "snehakoshta1@gmail.com",
  phone: "+91-9340930825",
  social: {
    github: "https://github.com/snehakoshta",
    linkedin: "https://in.linkedin.com/in/sneha-koshta-bb9895272",
    leetcode: "https://leetcode.com/u/snehakoshta/",
  },
  resumeUrl: "/resume.pdf",
};

export const typingWords = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "ASP.NET Core Developer",
  ".NET Developer",
  "Cloud Enthusiast",
];

export const quickStats = [
  { label: "Experience", value: "2+ Years", icon: "Briefcase" },
  { label: "Projects", value: "4+ Major", icon: "FolderGit2" },
  { label: "Technologies", value: "10+", icon: "Cpu" },
  { label: "CGPA", value: "8.88", icon: "Award" },
];

export const about = {
  summary: `Results-driven Full Stack Developer with 2 years of experience building scalable web and mobile applications using React.js, Node.js, Express.js, MongoDB, ASP.NET Core, C#, and AWS.

Experienced in designing secure RESTful APIs, JWT authentication, role-based access control, microservices, cloud deployment, database optimization, and responsive UI development.

Passionate about clean architecture, scalable systems, and delivering high-performance software.`,
  education: {
    degree: "Bachelor of Technology (Computer Science & Engineering)",
    institution: "Shri Ram Institute of Science and Technology",
    university: "RGPV University",
    period: "2022 – 2026",
    cgpa: "8.88",
  },
  achievements: [
    "Cisco Certifications",
    "ISRO Machine Learning",
    "CCNA",
    "Google Cloud Enthusiast",
    "Strong Backend Development",
    "Cloud Ready",
  ],
};

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "React Native", level: 80, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Redux Toolkit", level: 85, category: "Frontend" },
  { name: "HTML5", level: 98, category: "Frontend" },
  { name: "CSS", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express.js", level: 88, category: "Backend" },
  { name: "ASP.NET Core", level: 85, category: "Backend" },
  { name: ".NET 8", level: 82, category: "Backend" },
  { name: "C#", level: 85, category: "Backend" },
  { name: "REST API", level: 92, category: "Backend" },
  { name: "JWT Authentication", level: 90, category: "Backend" },
  { name: "Microservices", level: 78, category: "Backend" },
  { name: "MongoDB", level: 88, category: "Database" },
  { name: "PostgreSQL", level: 82, category: "Database" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "SQL Server", level: 83, category: "Database" },
  { name: "Entity Framework Core", level: 80, category: "Database" },
  { name: "AWS EC2", level: 80, category: "Cloud & DevOps" },
  { name: "AWS S3", level: 78, category: "Cloud & DevOps" },
  { name: "Docker", level: 75, category: "Cloud & DevOps" },
  { name: "Git", level: 92, category: "Cloud & DevOps" },
  { name: "GitHub", level: 92, category: "Cloud & DevOps" },
  { name: "CI/CD", level: 80, category: "Cloud & DevOps" },
  { name: "Postman", level: 88, category: "Cloud & DevOps" },
  { name: "Java", level: 80, category: "Programming Languages" },
  { name: "JavaScript", level: 95, category: "Programming Languages" },
  { name: "TypeScript", level: 90, category: "Programming Languages" },
  { name: "Python", level: 78, category: "Programming Languages" },
  { name: "SQL", level: 85, category: "Programming Languages" },
  { name: "C#", level: 85, category: "Programming Languages" },
  { name: "OOP", level: 90, category: "Core CS" },
  { name: "Data Structures", level: 88, category: "Core CS" },
  { name: "Algorithms", level: 85, category: "Core CS" },
  { name: "System Design", level: 80, category: "Core CS" },
  { name: "DBMS", level: 85, category: "Core CS" },
  { name: "Operating Systems", level: 82, category: "Core CS" },
  { name: "Computer Networks", level: 80, category: "Core CS" },
];

export const skillCategories = [
  "Frontend",
  "Backend",
  "Database",
  "Cloud & DevOps",
  "Programming Languages",
  "Core CS",
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    company: "Augmentik Software Pvt. Ltd.",
    role: "Cross Application Developer",
    period: "Feb 2026 – Present",
    location: "Bangalore",
    responsibilities: [
      "Developed scalable web applications using React.js, Node.js, Express.js, TypeScript, and MongoDB.",
      "Designed secure REST APIs with JWT Authentication.",
      "Implemented Role-Based Access Control for multi-tenant applications.",
      "Built reusable React components reducing development time by 30%.",
      "Optimized backend APIs and MongoDB queries improving response time by 40%.",
      "Integrated third-party APIs and payment gateways.",
      "Worked with AWS, Docker, Git, and CI/CD pipelines for deployment.",
      "Collaborated with UI/UX, QA, and Product teams using Agile methodologies.",
    ],
  },
  {
    company: "ADRS Technosoft Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "Jun 2023 – Sept 2025",
    location: "Jabalpur",
    responsibilities: [
      "Built responsive web and mobile applications using React and React Native.",
      "Developed REST APIs with Node.js, Express.js, and MongoDB.",
      "Implemented JWT Authentication and session management.",
      "Optimized frontend rendering achieving 90+ Lighthouse scores.",
      "Integrated Firebase for real-time features and authentication.",
      "Integrated payment gateways for e-commerce solutions.",
      "Improved MongoDB performance through indexing and aggregation pipelines.",
      "Participated in code reviews and maintained coding standards.",
    ],
  },
];

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  gradient: string;
  gradientFrom: string;
  gradientTo: string;
}

export const projects: Project[] = [
  {
    title: "CodeSprout",
    subtitle: "Interview Preparation Platform",
    description: "An Interview Preparation Platform with coding challenges, online compiler, quizzes, resume builder, discussion forum, and leaderboard.",
    fullDescription: "CodeSprout is a comprehensive interview preparation platform designed to help developers ace technical interviews. It features a built-in online compiler supporting multiple programming languages, a vast library of coding challenges, timed quizzes, a resume builder, and an interactive discussion forum. The platform uses JWT authentication, modular REST APIs, and a responsive UI built with React.js and Tailwind CSS.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
    features: ["Online Compiler", "Coding Challenges", "Quizzes", "Resume Builder", "Discussion Forum", "Leaderboard", "JWT Auth", "REST APIs"],
    githubUrl: "https://github.com/sneha-koshta/codesprout",
    liveUrl: "https://codesprout-beta.vercel.app/",
    gradient: "from-emerald-500 to-teal-600",
    gradientFrom: "#10b981",
    gradientTo: "#0d9488",
  },
  {
    title: "DreamBoost",
    subtitle: "Online Test Series Platform",
    description: "A comprehensive online test series platform with mock tests, live exams, question bank, and analytics dashboard.",
    fullDescription: "DreamBoost is an online test series platform designed for competitive exam preparation. It offers mock tests, live proctored exams, a rich question bank, detailed analytics dashboards, timed tests, and performance reports. Built with React.js, Node.js, Express.js, and MongoDB with Firebase integration for real-time features and role-based access control.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
    features: ["Mock Tests", "Live Exams", "Question Bank", "Analytics Dashboard", "Timed Tests", "RBAC", "Performance Reports"],
    githubUrl: "https://github.com/sneha-koshta/dreamboost",
    liveUrl: "https://dream-boost-website.vercel.app/",
    gradient: "from-violet-600 to-indigo-700",
    gradientFrom: "#7c3aed",
    gradientTo: "#4338ca",
  },
  {
    title: "Hospital Management System",
    subtitle: "Healthcare Administration Platform",
    description: "A full-featured hospital management system with modules for doctors, patients, appointments, billing, and medical history.",
    fullDescription: "A comprehensive Hospital Management System built with ASP.NET Core 8, Entity Framework Core, and SQL Server. The system includes modules for Doctor management, Patient registration, Appointment scheduling, Billing and invoicing, Authentication with JWT, Reception management, and Medical History tracking with full CRUD operations and role-based access.",
    technologies: ["ASP.NET Core 8", "C#", "Entity Framework Core", "SQL Server", "JWT", "Bootstrap", "REST API"],
    features: ["Doctor Module", "Patient Module", "Appointment System", "Billing Module", "JWT Auth", "Reception Module", "Medical History"],
    githubUrl: "https://github.com/sneha-koshta/hospital-management",
    liveUrl: "https://hospital-management.example.com",
    gradient: "from-blue-600 to-cyan-600",
    gradientFrom: "#2563eb",
    gradientTo: "#0891b2",
  },
  {
    title: "Smart Farming System",
    subtitle: "AI-Powered Agriculture Platform",
    description: "A smart farming system with crop recommendation, weather prediction, and machine learning integration for precision agriculture.",
    fullDescription: "Smart Farming System is an AI-powered platform that helps farmers make data-driven decisions. It uses machine learning models for crop recommendation based on soil parameters, weather prediction using external APIs, and provides actionable insights. Built with React.js frontend, Node.js/Flask backend, and MongoDB for data storage with cloud-ready deployment.",
    technologies: ["React.js", "Node.js", "Flask", "Python", "MongoDB", "Weather API", "Machine Learning"],
    features: ["Crop Recommendation", "Weather Prediction", "ML Integration", "REST APIs", "Cloud Ready", "Soil Analysis"],
    githubUrl: "https://github.com/sneha-koshta/smart-farming",
    liveUrl: "https://smart-farming.vercel.app",
    gradient: "from-green-600 to-emerald-700",
    gradientFrom: "#16a34a",
    gradientTo: "#047857",
  },
];

export const certifications = [
  { title: "Cisco CCNA", issuer: "Cisco", year: "2024" },
  { title: "Cisco Cybersecurity", issuer: "Cisco", year: "2024" },
  { title: "Nokia Industrial Training", issuer: "Nokia", year: "2024" },
  { title: "4G/5G & RF Planning", issuer: "Nokia", year: "2024" },
  { title: "ISRO Machine Learning", issuer: "ISRO", year: "2024" },
  { title: "Infosys Springboard Java", issuer: "Infosys", year: "2024" },
  { title: "Infosys Springboard C++", issuer: "Infosys", year: "2024" },
  { title: "Infosys Springboard SQL", issuer: "Infosys", year: "2024" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const floatingIcons = [
  { name: "React", x: 15, y: 20, size: 40, delay: 0 },
  { name: "Node", x: 80, y: 15, size: 35, delay: 0.5 },
  { name: "Mongo", x: 85, y: 70, size: 38, delay: 1 },
  { name: "TS", x: 10, y: 75, size: 32, delay: 1.5 },
  { name: "AWS", x: 50, y: 10, size: 36, delay: 2 },
  { name: "Docker", x: 20, y: 60, size: 34, delay: 0.8 },
  { name: "Next", x: 70, y: 50, size: 42, delay: 1.2 },
  { name: "CSharp", x: 45, y: 85, size: 30, delay: 0.3 },
];
