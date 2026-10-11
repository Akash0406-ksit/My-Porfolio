/**
 * Edit this file to update the portfolio content.
 *
 * Placeholders to replace:
 * - profile.github: GitHub profile URL. Project repository and demo URLs stay blank until you add them.
 * - profile.photo: a public image path, for example "/profile.jpg"
 * - projects[].image: a public image path, for example "/projects/leave.jpg"
 * - projects[].repository and projects[].demo: real URLs only
 *
 * Resume: place the PDF at public/Akash_KC_Resume.pdf (already copied there).
 * GitHub and project links stay hidden until a valid http(s) URL is set.
 */

export const profile = {
  name: "Akash K C",
  logo: "AKASH.KC",
  headline: "Software Developer | Computer Science & Design Student",
  location: "Bengaluru, Karnataka, India",
  email: "akashchikkasvi@gmail.com",
  linkedin: "https://linkedin.com/in/akash-k-c-8111b0312",
  github: "https://github.com/Akash0406-ksit",
  photo: "",
  resumePath: "/Akash_KC_Resume.pdf",
  role: "Software Development Engineer Intern",
  company: "UNKNWNAI PRIVATE LIMITED",
}

export const hero = {
  kicker: "Hello, I'm Akash K C",
  titleStart: "Building",
  titleAccent: "useful",
  titleEnd: "software.",
  titleSecond: "Learning every day.",
  description:
    "I'm a Computer Science and Design student and Software Development Engineer Intern who enjoys building web applications, integrating APIs, and improving software reliability through development and testing.",
}

export const aboutParagraphs = [
  "I'm a Computer Science and Design student at K S Institute of Technology, Bengaluru, with hands-on experience in software development and quality assurance.",
  "My work includes developing web application features, integrating REST APIs, working with databases, fixing bugs, and testing applications to improve reliability.",
  "I'm interested in software engineering, full-stack development, and building practical solutions using modern technologies.",
  "I enjoy solving technical problems, learning new tools, collaborating with developers, and turning ideas into working applications.",
]

export const education = {
  degree: "B.E. in Computer Science and Design",
  college: "K S Institute of Technology",
  location: "Bengaluru, Karnataka",
  period: "September 2023 – June 2027",
}

export const experience = [
  {
    role: profile.role,
    company: profile.company,
    period: "March 2026 – Present",
    location: "Bengaluru, Karnataka",
    summary:
      "Contributing to software development and quality assurance for web applications, working across frontend and backend development, API integration, database changes, bug fixing, and application testing.",
    responsibilities: [
      "Developed web application features using React, TypeScript, Node.js, and REST APIs.",
      "Contributed to frontend and backend development.",
      "Worked on API integration, database changes, and bug fixing.",
      "Performed unit, functional, regression, and end-to-end testing.",
      "Used Git and Pull Requests while collaborating with the development team in an Agile environment.",
    ],
  },
]

export type Project = {
  title: string
  category: string
  description: string
  technologies: readonly string[]
  motif: "energy" | "leave" | "waste" | "chat"
  ongoing?: boolean
  featured?: boolean
  image?: string
  repository?: string
  demo?: string
}

export const projects: readonly Project[] = [
  {
    title: "AI-Based Home Energy Management System",
    category: "Major Project | AI | IoT",
    description:
      "An AI-based home energy management solution integrating IoT, occupancy detection, environmental monitoring, and appliance control. The project explores reinforcement learning for adaptive energy management using temperature, occupancy, appliance, and energy-consumption data.",
    technologies: ["AI", "IoT", "Reinforcement Learning"],
    motif: "energy",
    ongoing: true,
    featured: true,
    image: "",
    repository: "",
    demo: "",
  },
  {
    title: "Leave Management System",
    category: "Full-Stack Development",
    description:
      "A full-stack leave management application built with React and Vite, Node.js, Express.js, and Firebase. Implemented Firebase Realtime Database for application data and Firebase Authentication for user authentication.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "Firebase"],
    motif: "leave",
    image: "",
    repository: "",
    demo: "",
  },
  {
    title: "Waste Detection Using AI",
    category: "Artificial Intelligence",
    description:
      "An AI-based solution for waste identification and technology-assisted waste management. The project was presented at the AIKYAM Hackathon 2025, where the team achieved runner-up position.",
    technologies: ["Artificial Intelligence"],
    motif: "waste",
    image: "",
    repository: "",
    demo: "",
  },
  {
    title: "College Enquiry Assistant Chatbot",
    category: "Artificial Intelligence",
    description:
      "An AI-based chatbot designed to provide instant responses to common college-related enquiries.",
    technologies: ["Artificial Intelligence"],
    motif: "chat",
    image: "",
    repository: "",
    demo: "",
  },
]

export type SkillGroup = {
  title: string
  skills: readonly string[]
  display?: "tiles"
}

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Programming languages",
    display: "tiles",
    skills: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["SQL", "PostgreSQL", "Firebase Realtime Database"],
  },
  {
    title: "Testing and quality assurance",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "API Testing",
      "End-to-End Testing",
      "Playwright",
    ],
  },
  {
    title: "Developer tools",
    skills: ["Git", "GitHub", "Postman", "Visual Studio Code"],
  },
  {
    title: "Computer science fundamentals",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Software Development Life Cycle",
    ],
  },
]

export const achievement = {
  title: "AIKYAM Hackathon 2025",
  result: "Runner-Up — Second Place",
  event:
    "24-hour hackathon at JSS Academy of Technical Education, Bengaluru.",
  project: "Waste Detection Using AI",
}

export const publication = {
  title: "A Survey on AI-Based Home Energy Management System",
  journal: "International Scientific Journal of Engineering and Management (ISJEM)",
  date: "June 2026",
  doi: "10.55041/ISJEM08000",
  doiUrl: "https://doi.org/10.55041/ISJEM08000",
}

export const certification = {
  title: "Google Cloud Arcade Challenge",
  year: "2025",
  subject: "Python Programming and Data Structures",
}

export type Milestone = {
  title: string
  organization: string
  location?: string
  period: string
  detail?: string
  status?: string
  href?: string
  hrefLabel?: string
}

export type JourneyGroup = {
  year: string
  milestones: readonly Milestone[]
}

export const journey: readonly JourneyGroup[] = [
  {
    year: "2021–2023",
    milestones: [
      {
        title: "Pre-University Course (PCMB)",
        organization: "Sri Mahayogi Vemana P U College",
        location: "Harihara, Karnataka",
        period: "July 2021 – March 2023",
      },
    ],
  },
  {
    year: "2023–2027",
    milestones: [
      {
        title: education.degree,
        organization: education.college,
        location: education.location,
        period: education.period,
        status: "In progress",
      },
    ],
  },
  {
    year: "2025",
    milestones: [
      {
        title: achievement.title,
        organization: "JSS Academy of Technical Education, Bengaluru",
        period: "2025",
        detail:
          "Runner-up, second place, in a 24-hour hackathon. Project: Waste Detection Using AI.",
      },
    ],
  },
  {
    year: "2026",
    milestones: [
      {
        title: "Software Development Engineer Internship",
        organization: profile.company,
        location: "Bengaluru, Karnataka",
        period: experience[0].period,
      },
      {
        title: publication.title,
        organization: publication.journal,
        period: publication.date,
        href: publication.doiUrl,
        hrefLabel: publication.doi,
      },
    ],
  },
]

export const contactCopy =
  "I'm interested in software development, full-stack engineering, and building reliable applications. Feel free to reach out to discuss opportunities, projects, or collaboration."

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const

export const sectionIds = navItems.map((item) => item.id)

export function isHttpUrl(value: string | undefined): value is string {
  if (!value) return false
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

export function isAssetPath(value: string | undefined): value is string {
  if (!value) return false
  return value.startsWith("/") || isHttpUrl(value)
}
