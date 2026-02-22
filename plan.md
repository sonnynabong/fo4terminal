# Fallout Terminal UI Portfolio - Implementation Plan

## Overview
Create a retro-futuristic terminal interface inspired by Fallout 4/76 computer terminals for displaying portfolio/resume information.

## Tech Stack
- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS + custom CSS for terminal effects
- **Fonts**: VT323 (terminal font), Share Tech Mono
- **Animations**: CSS animations + JavaScript for typewriter effects
- **Audio**: Web Audio API for terminal sounds (optional)

## Visual Design Reference
- Dark amber/green phosphor CRT monitor aesthetic
- Scan lines and screen curvature effects
- Blinking cursor
- Blocky retro-futuristic UI elements
- Boot sequence animation on load

## Component Architecture

### 1. Layout Components
```
src/layouts/
├── TerminalLayout.astro      # Main terminal container with CRT effects
└── BootSequence.astro        # Initial boot animation
```

### 2. UI Components
```
src/components/
├── Terminal.astro            # Main terminal wrapper
├── TerminalHeader.astro      # Header with system info
├── TerminalScreen.astro      # Screen with content area
├── TerminalInput.astro       # Command input line
├── Scanlines.astro           # CRT scanline overlay
├── Cursor.astro              # Blinking cursor component
├── BootText.astro            # Animated boot text
├── MenuItem.astro            # Interactive menu options
└── SectionContent.astro      # Content display for each section
```

### 3. Content Sections (as terminal "files")
```
src/sections/
├── Home.astro                # Welcome/intro
├── About.astro               # Personal info
├── Skills.astro              # Technical skills
├── Projects.astro            # Portfolio projects
├── Experience.astro          # Work history
├── Contact.astro             # Contact info
└── Help.astro                # Command help
```

### 4. Data & Types
```
src/data/
├── commands.ts               # Command definitions
├── portfolio.ts              # Portfolio content
└── types.ts                  # TypeScript interfaces
```

### 5. Styles & Effects
```
src/styles/
├── terminal.css              # Core terminal styles
├── effects.css               # CRT effects, glow, flicker
└── animations.css            # Keyframe animations
```

## Core Features

### 1. Boot Sequence
- Power-on animation with screen flicker
- Memory check animation
- System load progress
- Vault-Tec/RobCo inspired branding

### 2. Interactive Commands
```
AVAILABLE COMMANDS:
- help        : Show available commands
- about       : Display personal information
- skills      : List technical skills
- projects    : View portfolio projects
- experience  : Show work history
- contact     : Display contact information
- clear       : Clear terminal screen
- reboot      : Restart terminal
- ls          : List available sections
- cat [file]  : View specific content
```

### 3. Terminal Effects
- **CRT Scanlines**: Horizontal lines overlay
- **Screen Curvature**: Subtle edge distortion
- **Phosphor Glow**: Text glow effect
- **Flicker**: Occasional brightness variation
- **Screen Burn**: Subtle persistence effect

### 4. Navigation
- Type commands to navigate
- Click on menu items as shortcuts
- Keyboard navigation (arrow keys, enter)
- Command history (up/down arrows)

## File Structure

```
fallout-terminal-portfolio/
├── public/
│   ├── fonts/                # VT323, Share Tech Mono
│   ├── sounds/               # Terminal beeps (optional)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── terminal/
│   │   │   ├── Terminal.astro
│   │   │   ├── TerminalHeader.astro
│   │   │   ├── TerminalScreen.astro
│   │   │   ├── TerminalInput.astro
│   │   │   ├── Scanlines.astro
│   │   │   └── Cursor.astro
│   │   ├── sections/
│   │   │   ├── About.astro
│   │   │   ├── Skills.astro
│   │   │   ├── Projects.astro
│   │   │   ├── Experience.astro
│   │   │   ├── Contact.astro
│   │   │   └── Help.astro
│   │   └── BootSequence.astro
│   ├── layouts/
│   │   └── TerminalLayout.astro
│   ├── data/
│   │   ├── commands.ts
│   │   ├── portfolio.ts
│   │   └── types.ts
│   ├── styles/
│   │   ├── terminal.css
│   │   ├── effects.css
│   │   └── animations.css
│   ├── utils/
│   │   ├── terminal.ts       # Terminal logic
│   │   └── typewriter.ts     # Typewriter effect
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## Implementation Phases

### Phase 1: Foundation
1. Set up Astro project with Tailwind
2. Import terminal fonts (VT323)
3. Create base TerminalLayout
4. Implement CRT effects (scanlines, glow)

### Phase 2: Core Terminal
1. Build Terminal component structure
2. Create TerminalScreen with content area
3. Implement blinking cursor
4. Add command input functionality

### Phase 3: Boot Sequence
1. Create boot animation component
2. Add power-on effects
3. Implement typewriter text effect
4. Auto-transition to main terminal

### Phase 4: Content & Navigation
1. Create all section components
2. Implement command routing
3. Build help command with available options
4. Add keyboard navigation

### Phase 5: Polish
1. Add sound effects (optional)
2. Fine-tune animations
3. Add easter eggs (hidden commands)
4. Test responsive design

## Color Palette
```css
/* Main Terminal Colors */
--terminal-bg: #0a0a0a;
--terminal-green: #33ff00;
--terminal-amber: #ffb000;
--terminal-dim: #1a1a1a;
--terminal-text: #33ff00;
--terminal-glow: rgba(51, 255, 0, 0.5);

/* Alternative Amber Theme */
--terminal-amber-bg: #1a0f00;
--terminal-amber-text: #ffb000;
--terminal-amber-glow: rgba(255, 176, 0, 0.5);
```

## CSS Effects Key Features

### CRT Scanlines
```css
.scanlines::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
}
```

### Screen Flicker
```css
@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.98; }
}
```

### Text Glow
```css
.glow-text {
  text-shadow: 
    0 0 5px var(--terminal-glow),
    0 0 10px var(--terminal-glow),
    0 0 15px var(--terminal-glow);
}
```

## Responsive Considerations
- Mobile: Stack terminal interface, larger touch targets
- Tablet: Maintain terminal aesthetic, adjusted padding
- Desktop: Full terminal experience with side decorations

## Easter Eggs Ideas
- `cheat` command: Display a fun message
- `nuka-cola`: ASCII art
- `vault-boy`: Show vault boy ASCII
- `hack`: Mini-game reference
- `pip-boy`: Link to portfolio as "PIP-BOY INTERFACE"

## Next Steps
1. Initialize Astro project
2. Install dependencies (Tailwind, fonts)
3. Create base layout with CRT effects
4. Build boot sequence
5. Implement command system
6. Add content sections
7. Polish and test
