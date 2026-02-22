import type { Command } from './types';
import { portfolioData } from './portfolio';

// Track current section for Pip-Boy style navigation
let currentSection = '';

export const getCurrentSection = (): string => currentSection;

export const setCurrentSection = (section: string): void => {
  currentSection = section;
};

// Check if we should navigate (clear + show) vs just append
export const shouldNavigate = (section: string): boolean => {
  if (currentSection === section) {
    return true; // Same section clicked - refresh
  }
  return true; // Different section - always navigate
};

// Magic string to indicate navigation (clear + display)
export const NAVIGATE_PREFIX = '__NAV__';

const formatSkills = (): string => {
  let output = '[SKILLS DATABASE]\n';
  output += '═'.repeat(40) + '\n\n';
  portfolioData.skills.forEach(category => {
    output += `[${category.category.toUpperCase()}]\n`;
    output += category.items.map(item => `  ► ${item}`).join('\n');
    output += '\n\n';
  });
  return output;
};

const formatProjects = (): string => {
  let output = '[PROJECT ARCHIVE]\n';
  output += '═'.repeat(40) + '\n\n';
  portfolioData.projects.forEach((project, index) => {
    output += `[ENTRY ${String(index + 1).padStart(2, '0')}] ${project.name.toUpperCase()}\n`;
    output += `    ${project.description}\n`;
    output += `    TECH: ${project.technologies.join(', ')}\n`;
    if (project.link) output += `    DEMO: ${project.link}\n`;
    if (project.github) output += `    CODE: ${project.github}\n`;
    output += '\n';
  });
  return output;
};

const formatExperience = (): string => {
  let output = '[EMPLOYMENT HISTORY]\n';
  output += '═'.repeat(40) + '\n\n';
  portfolioData.experience.forEach(job => {
    output += `[${job.company.toUpperCase()}]\n`;
    output += `  POSITION: ${job.position}\n`;
    output += `  PERIOD:   ${job.period}\n`;
    output += '  HIGHLIGHTS:\n';
    job.description.forEach(desc => {
      output += `    ■ ${desc}\n`;
    });
    output += '\n';
  });
  return output;
};

const formatContact = (): string => {
  return `[COMMUNICATION PROTOCOLS]
${'═'.repeat(40)}

[PERSONAL CONTACT]
  EMAIL:    ${portfolioData.contact.email}
  LOCATION: ${portfolioData.personal.location}

[ONLINE PRESENCE]
  GITHUB:   ${portfolioData.contact.github}
  LINKEDIN: ${portfolioData.contact.linkedin || 'N/A'}
  WEBSITE:  ${portfolioData.contact.website || 'N/A'}
`;
};

const formatAbout = (): string => {
  return `[VAULT DWELLER PROFILE]
${'═'.repeat(40)}

[NAME]     ${portfolioData.personal.name}
[TITLE]    ${portfolioData.personal.title}
[EMAIL]    ${portfolioData.personal.email}

[BIOGRAPHY]
${portfolioData.personal.summary}

Use the menu below to access different
sections of the database.
`;
};

const helpText = `
[AVAILABLE COMMANDS]

 Navigation:
  about       Display personal information and summary
  skills      List technical skills by category
  projects    View portfolio projects
  experience  Show work history
  contact     Display contact information

 System:
  help        Show this help message
  clear       Clear terminal screen
  reboot      Restart the terminal
  ls          List available sections
  whoami      Display current user

 Easter Eggs:
  Try some classic commands...

[CONTROLS]
  ↑/↓         Navigate command history
  Enter       Execute command
`;

// Simplified ASCII art without problematic characters
const asciiArt = {
  vault: `
   _    __      __   _    ___    _   _ 
  | |  / /___  / /__| |  / (_)  (_) | |
  | | / / __ \/ / _ \ | / / / / / /  | |
  | |/ / /_/ / /  __/ |/ / / /_/ /   |_|
  |___/\____/_/\___/|___/_/\__, /   (_)
                          /____/
  `,
  nuka: `
   _  _    _               _       ___        _   
  | || |  | | __ _   _ __ | | __  / _ \\ __ _ | | ___ 
  | || |_ | |/ /| | | '__|| |/ / / /_)/| _ || || |/ /
  |__   _||   < | |_| | |   |   < / ___/|(_)|| ||   < 
     |_|  |_|\\_|\\___,||_|   |_|\\_\\/    \\__,||_||_|\\_\\
  `
};

// Navigation commands that replace content instead of appending
const navigationCommands = ['about', 'skills', 'projects', 'experience', 'contact'];

// Wrap command output with navigation indicator for section commands
const navigateTo = (section: string, content: string): string => {
  setCurrentSection(section);
  return `${NAVIGATE_PREFIX}${section}|${content}`;
};

export const commands: Command[] = [
  {
    name: 'help',
    description: 'Show available commands',
    execute: () => helpText
  },
  {
    name: 'about',
    description: 'Display personal information',
    execute: () => navigateTo('about', formatAbout())
  },
  {
    name: 'skills',
    description: 'List technical skills',
    execute: () => navigateTo('skills', formatSkills())
  },
  {
    name: 'projects',
    description: 'View portfolio projects',
    execute: () => navigateTo('projects', formatProjects())
  },
  {
    name: 'experience',
    description: 'Show work history',
    execute: () => navigateTo('experience', formatExperience())
  },
  {
    name: 'contact',
    description: 'Display contact information',
    execute: () => navigateTo('contact', formatContact())
  },
  {
    name: 'clear',
    description: 'Clear terminal screen',
    execute: () => '__CLEAR__'
  },
  {
    name: 'reboot',
    description: 'Restart the terminal',
    execute: () => '__REBOOT__'
  },
  {
    name: 'ls',
    description: 'List available sections',
    execute: () => 'about  skills  projects  experience  contact  help'
  },
  {
    name: 'whoami',
    description: 'Display current user',
    execute: () => `visitor@${portfolioData.personal.name.toLowerCase().replace(/\s+/g, '-')}-portfolio`
  },
  {
    name: 'nuka-cola',
    description: 'Easter egg',
    execute: () => `${asciiArt.nuka}\n\n  ICE COLD REFRESHMENT!`
  },
  {
    name: 'vault',
    description: 'Easter egg',
    execute: () => `${asciiArt.vault}\n\n  VAULT-TEC INDUSTRIES`
  },
  {
    name: 'hack',
    description: 'Easter egg',
    execute: () => '[HACKING]... Just kidding! This terminal is secure.'
  },
  {
    name: 'cheat',
    description: 'Easter egg',
    execute: () => 'CHEAT MODE ACTIVATED... JK. There are no shortcuts to success!'
  },
  {
    name: 'pip-boy',
    description: 'Easter egg',
    execute: () => 'PIP-BOY 3000 INTERFACE v8.0\nSTATUS: OPERATIONAL\nVAULT DWELLER PROFILE: ACTIVE'
  }
];

export const findCommand = (name: string): Command | undefined => {
  return commands.find(
    cmd => cmd.name === name || cmd.aliases?.includes(name)
  );
};

export const getCommandList = (): string[] => {
  return commands.map(cmd => cmd.name);
};
