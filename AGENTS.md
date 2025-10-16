# Repository Guidelines

## Project Structure & Module Organization

The application lives in `src/`, with `main.tsx` bootstrapping the Preact app, `app.tsx` defining routing and gameplay UI, and `app.test.tsx` hosting unit and integration specs. Shared styles sit in `src/style.css`. Root configuration files (`vite.config.ts`, `tsconfig.json`, `eslint.config.ts`) and the single-page shell `index.html` stay at the repository root. Generated coverage artefacts land in `coverage/`; leave them out of commits unless updating reporting.

## Build, Test, and Development Commands

Use `npm install` once to pull dependencies. `npm run dev` launches Vite with fast refresh at http://localhost:5173. `npm run test` invokes the full Wireit test suite (format, lint, types) expected in CI. Run `npm run test:spec` for focused Vitest runs, and `npm run fix` to apply Prettier and ESLint autofixes. Prefer the more granular `npm run fix:format` or `npm run fix:lint` when you only need one tool.

## Coding Style & Naming Conventions

TypeScript and TSX files rely on Prettier (with Tailwind and organize-imports plugins) and ESLint flat configs. Stick to two-space indentation, trailing commas where possible, and import sorting handled by the tooling. Components and hooks follow PascalCase and camelCase respectively; tests mirror the file under test using `*.test.tsx`. Keep JSX lean and use Tailwind utility classes when composing layout.

## Testing Guidelines

Vitest with the Testing Library (`@testing-library/preact`) backs specs. Co-locate tests beside components, assert on rendered behavior, and avoid implementation details. Ensure new features ship with at least one user-facing test case. Use `npm run test:spec` locally when verifying coverage before PR submission.

## Commit & Pull Request Guidelines

Write commit subjects in imperative mood (e.g., "Add fence rendering") and keep them under 72 characters. When merging via GitHub, adopt the `Title (#issue)` pattern seen in history. PRs should describe motivation, summarize functional changes, list test commands run, and attach screenshots or screen recordings for UI updates. Link related issues and request review once the full `npm run test` suite passes.
