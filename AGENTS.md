# Repository Guidelines

## Project Structure & Module Organization

- Source: `routes/` (file-based pages, e.g., `index.tsx`, `api/[name].tsx`),
  `islands/` (interactive components, e.g., `Counter.tsx`), `components/`
  (presentational, e.g., `Button.tsx`).
- App shell: `routes/_app.tsx`.
- Entrypoints: `main.ts` (server), `client.ts` (client CSS imports), `utils.ts`
  (shared types/helpers).
- Assets: `assets/` (styles), `static/` (public files like `logo.svg`,
  `favicon.ico`).
- Config: `deno.json`, `vite.config.ts`. Build output lives under `_fresh/` (do
  not edit, ignored).

## Build, Test, and Development Commands

- `deno task dev` - Run Vite + Fresh in development with HMR.
- `deno task build` - Production build via Vite.
- `deno task start` - Start the compiled Fresh server (`_fresh/server.js`).
- `deno task check` - Format check, lint, and type-check.
- `deno task update` - Update Fresh to the latest compatible version.

## Coding Style & Naming Conventions

- Use Deno tooling: `deno fmt` and `deno lint` (Fresh + recommended rules).
- Indentation: 2 spaces; TypeScript + TSX with Preact signals.
- Components/Islands: PascalCase filenames (`Button.tsx`, `Counter.tsx`).
- Routes: lowercase and filesystem-driven; dynamic params in brackets
  (`api/[name].tsx`); app layout is `_app.tsx`.
- Prefer named exports for utilities; pages export `default define.page(...)`.

## Testing Guidelines

- No tests yet; use Deno's built-in runner.
- Place tests beside sources using `.test.ts`/`.test.tsx` or in `tests/`.
- Run: `deno test` (coverage: `deno test --coverage=cov && deno coverage cov`).
- Focus on route handlers, islands logic, and utility functions.

## Commit & Pull Request Guidelines

- Commit style: Prefer Conventional Commits (e.g., `feat: add counter`,
  `fix: handle /api2 logging`).
- PRs: clear description, link issues, include before/after screenshots for UI,
  list test steps.
- Pre-submit: run `deno task check` and ensure `deno task build` succeeds.

## Security & Configuration

- Do not commit secrets; access via `Deno.env.get()` and local env management.
- Avoid editing `_fresh/`; only commit source under the directories noted above.
