# DSA Programming Challenges Website

Interactive learning platform for DSA challenges in Python & Java.

## Features

- **Dynamic Challenge Explorer**: Browse challenges organized by phases
- **Code Viewer & Editor**: Monaco Editor with syntax highlighting
- **Live Code Execution**: Run Python/Java code via Piston API
- **Search Functionality**: Fuzzy search across challenges and phases
- **Progress Tracking**: Visual progress indicators
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on desktop, tablet, and mobile

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Monaco Editor
- Framer Motion
- Fuse.js
- Axios

## Development

```bash
cd site
npm install
npm run dev
```

## Deployment

Deployed on Vercel at [dsa.ritikesh.dev](https://dsa.ritikesh.dev)

## Data Generation

Run the script to generate challenges.json from the repository structure:

```bash
node scripts/generate_challenges.js
```

## Repository Structure

```
site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── phases/[phaseId]/
│   │   ├── page.tsx
│   │   └── [challengeId]/page.tsx
│   ├── components/
│   │   ├── CodeViewer.tsx
│   │   ├── CodeRunner.tsx
│   │   ├── Navbar.tsx
│   │   ├── SearchBar.tsx
│   │   ├── ProgressTracker.tsx
│   │   └── PhaseCard.tsx
│   ├── data/
│   │   └── challenges.json
│   └── styles/
│       └── globals.css
├── public/
│   └── data/
│       └── challenges.json
├── tailwind.config.ts
├── vercel.json
└── package.json
