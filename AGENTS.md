# Repository Guidelines

## Project Structure & Module Organization

Source lives in `src/`. Each route directory (Story, Contents, World, etc.) exposes a `+page.svelte` entry and should keep local assets beside it. Shared layouts and widgets live in `src/lib`, including `Layouts/PostLayout.svelte`, which mdsvex pages inherit automatically—place `.svx` stories next to the route they render. `static/` holds fonts, icons, and `global.css`, while `build/` is generated output from `npm run build` and must not be edited manually.

## Build, Test, and Development Commands

- `npm install` — install dependencies and keep `package-lock.json` authoritative.
- `npm run dev` — Vite dev server with HMR on `http://localhost:5173`.
- `npm run build` — mdsvex preprocess plus `vite build`, emitting a static site in `build/`.
- `npm run preview` — serve the latest build for production-like smoke tests.
- `npm run lint` — Prettier check followed by ESLint with the Svelte plugin; CI should block on this.
- `npm run format` — Prettier write; run before committing sweeping edits.
- `npm run prepare` — `svelte-kit sync`; run whenever you add routes or mdsvex content.

## Coding Style & Naming Conventions

Prettier and ESLint enforce formatting, so rely on `npm run lint` rather than hand-adjusting whitespace. Keep config files tab-indented (matching the existing tree), allow Prettier defaults inside `.svelte`, and stick to ES module syntax throughout. Use PascalCase for Svelte components, camelCase for helpers, TitleCase for route folders, and keep shared CSS tokens in `static/global.css` while route-specific styles stay scoped to the component.

## Testing Guidelines

There is no automated test runner yet, so lint plus manual QA act as the coverage gate. Before opening a PR, run `npm run dev`, exercise every affected route, and follow with `npm run preview` to confirm the adapter-static build has no console errors or missing assets. If you introduce automated tests, co-locate `ComponentName.spec.ts` beside the component and document how to run them inside the PR description until a formal script lands.

## Commit & Pull Request Guidelines

Commits follow short, Title Case subjects such as `New Vincent Privacy page`; keep them imperative, scoped to one concern, and reference issue IDs when relevant. Always re-run `npm run lint` (and `npm run preview` for UI work) before committing. Pull requests need a succinct summary, screenshots or preview URLs for visual updates, the exact commands executed during verification, and a bullet list of manual QA steps so reviewers can reproduce your checks.
