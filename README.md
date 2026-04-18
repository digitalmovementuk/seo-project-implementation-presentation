# SEO Project Implementation Presentation

Lead-facing React presentation for the SEO Project Implementation sales deck.

## What this is

- Swipeable slide presentation for laptop and iPhone viewing
- Built in React, TypeScript, Vite, and Framer Motion
- Designed with a sharp black, off-white, and volt accent system inspired by performance-marketing creative

## Main files

- `src/App.tsx`: deck shell, motion, navigation, swipe logic
- `src/slides.ts`: slide-by-slide English presentation content
- `src/index.css`: full visual system, layout, responsive behavior

## Run locally

```bash
npm install
npm run dev
```

## Build for handoff

```bash
npm run build
```

The production-ready output is generated in `dist/`.

## Smoke test

```bash
npm run test:e2e
```

This runs a quick desktop and mobile interaction test against the built presentation.
