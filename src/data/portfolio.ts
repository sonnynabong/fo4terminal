import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "[YOUR NAME]",
    title: "Full Stack Developer",
    email: "your.email@example.com",
    location: "Your Location",
    summary: "A passionate developer with experience in building modern web applications. Specializing in React, TypeScript, and Node.js with a focus on creating intuitive user experiences."
  },
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "HTML/CSS", "SQL"]
    },
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Astro", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Linux", "VS Code"]
    }
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "https://example.com/project1",
      github: "https://github.com/username/project1"
    },
    {
      name: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team workspaces.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "https://example.com/project2",
      github: "https://github.com/username/project2"
    },
    {
      name: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with filtering and export capabilities.",
      technologies: ["React", "D3.js", "TypeScript"],
      link: "https://example.com/project3",
      github: "https://github.com/username/project3"
    }
  ],
  experience: [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description: [
        "Led development of customer-facing dashboard used by 10,000+ users",
        "Reduced page load times by 40% through optimization techniques",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      company: "Digital Agency",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: [
        "Built responsive web applications for clients across various industries",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with design team to implement pixel-perfect UIs"
      ]
    }
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    website: "https://yourwebsite.com"
  }
};
