import type { Command } from './types';
import { portfolioData } from './portfolio';

const formatSkills = (): string => {
  let output = '\n';
  portfolioData.skills.forEach(category => {
    output += `[${category.category}]\n`;
    output += category.items.map(item => `  ► ${item}`).join('\n');
    output += '\n\n';
  });
  return output;
};

const formatProjects = (): string => {
  let output = '\n';
  portfolioData.projects.forEach((project, index) => {
    output += `[${index + 1}] ${project.name}\n`;
    output += `    ${project.description}\n`;
    output += `    Tech: ${project.technologies.join(', ')}\n`;
    if (project.link) output += `    Demo: ${project.link}\n`;
    if (project.github) output += `    Code: ${project.github}\n`;
    output += '\n';
  });
  return output;
};

const formatExperience = (): string => {
  let output = '\n';
  portfolioData.experience.forEach(job => {
    output += `[${job.company}]\n`;
    output += `  Position: ${job.position}\n`;
    output += `  Period:   ${job.period}\n`;
    output += '  Highlights:\n';
    job.description.forEach(desc => {
      output += `    • ${desc}\n`;
    });
    output += '\n';
  });
  return output;
};

const formatContact = (): string => {
  return `
[PERSONAL CONTACT]
  Email:    ${portfolioData.contact.email}
  Location: ${portfolioData.personal.location}

[ONLINE PRESENCE]
  GitHub:   ${portfolioData.contact.github}
  LinkedIn: ${portfolioData.contact.linkedin || 'N/A'}
  Website:  ${portfolioData.contact.website || 'N/A'}
`;
};

const formatAbout = (): string => {
  return `
[NAME]    ${portfolioData.personal.name}
[TITLE]   ${portfolioData.personal.title}
[EMAIL]   ${portfolioData.personal.email}

[SUMMARY]
${portfolioData.personal.summary}

Type 'skills' to see technical skills.
Type 'projects' to view portfolio projects.
Type 'experience' for work history.
Type 'contact' for contact information.
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

export const commands: Command[] = [
  {
    name: 'help',
    description: 'Show available commands',
    execute: () => helpText
  },
  {
    name: 'about',
    description: 'Display personal information',
    execute: () => formatAbout()
  },
  {
    name: 'skills',
    description: 'List technical skills',
    execute: () => formatSkills()
  },
  {
    name: 'projects',
    description: 'View portfolio projects',
    execute: () => formatProjects()
  },
  {
    name: 'experience',
    description: 'Show work history',
    execute: () => formatExperience()
  },
  {
    name: 'contact',
    description: 'Display contact information',
    execute: () => formatContact()
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
