export interface Command {
  name: string;
  description: string;
  aliases?: string[];
  execute: (args: string[]) => string | Promise<string>;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    email: string;
    location: string;
    summary: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
  }[];
  experience: {
    company: string;
    position: string;
    period: string;
    description: string[];
  }[];
  contact: {
    email: string;
    github: string;
    linkedin?: string;
    website?: string;
  };
}

export interface TerminalState {
  currentSection: string;
  commandHistory: string[];
  historyIndex: number;
  bootComplete: boolean;
}
