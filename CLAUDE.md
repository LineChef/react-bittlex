# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then `vite build`
- `npm run lint` — Oxlint (not ESLint); config in `.oxlintrc.json` (react, typescript, oxc plugins; `react/rules-of-hooks` is an error)
- `npm run preview` — serve the production build

There is no test runner configured yet, so there is no single-test command. This directory is not a git repository.

## Architecture

Unmodified Vite + React 19 + TypeScript template (`@vitejs/plugin-react`, Vite 8, TypeScript 6). The entry point is `index.html` → `src/main.tsx` → `src/App.tsx`. TypeScript is split into project references: `tsconfig.app.json` (for `src/`) and `tsconfig.node.json` (for tooling such as `vite.config.ts`), which is why the build runs `tsc -b` rather than `tsc`.

The React Compiler is not enabled. Type-aware lint rules are also off; the README describes how to turn them on via `oxlint-tsgolint`.

Update this file once real application structure (routing, state, data layer, tests) is added.
