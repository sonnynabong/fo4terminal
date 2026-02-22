# AGENTS.md - Fallout Terminal Portfolio

> This file contains essential information for AI coding agents working on this project.
> The reader is expected to know nothing about the project beforehand.

---

## Project Overview

This is a **Fallout 4/76-inspired terminal interface portfolio website** built with Astro. It simulates a retro-futuristic ROBCO INDUSTRIES computer terminal where visitors can type commands to view portfolio information (about, skills, projects, experience, contact).

**Project Name:** stale-saturn  
**Version:** 0.0.1  
**Repository:** `k:\git\fo4terminal`  
**Default Page Title:** "ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM"

### Key Features
- Boot sequence animation with system initialization messages
- Interactive command-line interface with command history (↑/↓ arrows)
- CRT monitor visual effects: scanlines, screen flicker, phosphor glow, screen curvature
- Quick-access menu buttons for navigation
- Easter egg commands (nuka-cola, vault, hack, cheat, pip-boy)
- Responsive design with mobile support

---

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | [Astro](https://astro.build) | ^5.17.1 |
| Styling | [Tailwind CSS](https://tailwindcss.com) | ^4.2.0 |
| Build Tool | Vite (via Astro) | - |
| Language | TypeScript | Strict mode |
| Fonts | VT323 (Google Fonts) | - |

### Important Dependencies
- `@tailwindcss/vite` - Tailwind CSS Vite plugin for Astro integration
- All styling uses CSS custom properties (variables) for theming

---

## Project Structure

```
fallout-terminal-portfolio/
├── public/                     # Static assets
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BootSequence.astro      # Boot animation with progress bar
│   │   └── terminal/
│   │       ├── Terminal.astro      # Main terminal wrapper component
│   │       ├── TerminalHeader.astro # Header with branding + live clock
│   │       └── TerminalScreen.astro # Output area + input line
│   ├── data/
│   │   ├── commands.ts             # Command definitions and handlers
│   │   ├── portfolio.ts            # Portfolio content (editable)
│   │   └── types.ts                # TypeScript interfaces
│   ├── layouts/
│   │   └── TerminalLayout.astro    # Root layout with CRT effects
│   ├── pages/
│   │   └── index.astro             # Main entry point
│   ├── styles/
│   │   └── global.css              # Terminal styling + animations
│   └── utils/                      # (Empty - for future utilities)
├── astro.config.mjs              # Astro configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript strict config
└── plan.md                       # Original implementation plan
```

---

## Build and Development Commands

All commands run from the project root:

```bash
# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- [command]
npm run astro -- --help
```

### VS Code Integration
- **Recommended Extension:** `astro-build.astro-vscode` (see `.vscode/extensions.json`)
- **Debug Configuration:** Press F5 to launch development server (see `.vscode/launch.json`)

---

## Code Style Guidelines

### Astro Components
- Use `.astro` file extension for all components
- Place TypeScript interfaces in `src/data/types.ts`
- Keep component scripts focused; extract complex logic to `src/data/` or `src/utils/`
- Use `<script>` tags in components for client-side interactivity

### CSS/Styling
- All global styles are in `src/styles/global.css`
- Uses Tailwind CSS v4 with `@import "tailwindcss";` syntax
- CSS custom properties (variables) are used extensively for theming:
  - `--terminal-bg`, `--terminal-text`, `--terminal-border`
  - `--terminal-green`, `--terminal-amber` (theme colors)
- Theme switching supported via `[data-theme="amber"]` attribute
- Font: `'VT323', monospace` for terminal aesthetic

### TypeScript
- Strict mode enabled (extends `astro/tsconfigs/strict`)
- All types defined in `src/data/types.ts`
- Use explicit return types for exported functions

---

## Available Terminal Commands

Commands are defined in `src/data/commands.ts`:

| Command | Description |
|---------|-------------|
| `help` | Show available commands |
| `about` | Display personal information |
| `skills` | List technical skills by category |
| `projects` | View portfolio projects |
| `experience` | Show work history |
| `contact` | Display contact information |
| `clear` | Clear terminal screen |
| `reboot` | Restart the terminal (reload page) |
| `ls` | List available sections |
| `whoami` | Display current user |
| `nuka-cola` | Easter egg: ASCII art |
| `vault` | Easter egg: Vault-Tec ASCII |
| `hack` | Easter egg: Hacking joke |
| `cheat` | Easter egg: Cheat mode joke |
| `pip-boy` | Easter egg: PIP-BOY reference |

### Navigation Controls
- **↑/↓** - Navigate command history
- **Enter** - Execute command
- **Click menu buttons** - Quick command execution

---

## Customizing Portfolio Content

Edit `src/data/portfolio.ts` to personalize:

```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "[YOUR NAME]",        // Change this
    title: "Full Stack Developer",
    email: "your.email@example.com",
    location: "Your Location",
    summary: "Your summary..."
  },
  skills: [...],
  projects: [...],
  experience: [...],
  contact: {...}
};
```

---

## Visual Effects Architecture

### CRT Effects (implemented in global.css)
1. **Scanlines** - `repeating-linear-gradient` overlay
2. **Screen Flicker** - CSS animation on `.crt-flicker`
3. **Text Glow** - `text-shadow` with terminal color glow
4. **Screen Curvature** - Radial gradient vignette overlay
5. **Blinking Cursor** - CSS animation on `.cursor`

### Color Themes
- **Default (Green):** `--terminal-text: #33ff00`
- **Amber Theme:** Set `data-theme="amber"` on html element
  - `--terminal-text: #ffb000`

---

## Deployment

This is a static site suitable for:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting provider

Build output directory: `./dist/`

---

## Important Notes for Developers

1. **Client-side JavaScript:** The terminal uses inline `<script>` tags in Astro components for interactivity. The `terminal-input` element must be focused for keyboard input.

2. **Boot Sequence:** The `BootSequence.astro` component auto-runs on page load and dispatches a `bootComplete` event when finished. The main terminal UI is hidden until this completes.

3. **Command System:** Commands are pure functions that return strings. Special commands return magic strings:
   - `__CLEAR__` - Triggers screen clear
   - `__REBOOT__` - Triggers page reload

4. **State Management:** There is no external state library. Command history is stored in a local array within `TerminalScreen.astro`.

5. **No Tests:** This project does not currently have a test suite configured.

---

## File Ownership Summary

| File/Directory | Purpose |
|----------------|---------|
| `src/data/portfolio.ts` | **EDIT THIS** - Your personal data |
| `src/data/commands.ts` | Command definitions and output formatting |
| `src/data/types.ts` | TypeScript interfaces |
| `src/styles/global.css` | All visual effects and theming |
| `src/components/terminal/*.astro` | UI components |
| `src/layouts/TerminalLayout.astro` | HTML skeleton + CRT container |
| `plan.md` | Original design spec (reference only) |
