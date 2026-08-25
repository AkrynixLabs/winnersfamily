# Winners Family School

Marketing site for Winners Family School — Crèche through JHS in
Bulemin-Gbawe, Accra, Ghana. *Discipline · Power · Knowledge.*

React + TypeScript single-page app, client-side routed, no backend or CMS —
content lives directly in the page components.

## Stack

- React 19 + TypeScript
- Vite 8 (dev server, build)
- react-router-dom 7 (client-side routing)
- ESLint (flat config)

## Getting started

```bash
npm install
npm run dev       # dev server with HMR at http://localhost:5173
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) then build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Serve the production build locally |

## Structure

```
src/
  main.tsx            entry point, wraps App in BrowserRouter
  App.tsx             route definitions
  components/Layout   header/nav, footer, page chrome
  pages/               one component (+ co-located CSS) per route
  index.css            design tokens, resets, shared utility classes
public/images/         school photography used across pages
```

Pages: Home, About, Academics, Admissions, Gallery, News, Contact.

## Updating content

There's no CMS — text, dates, and figures (fees, staff, term dates, etc.)
are edited directly in the relevant `src/pages/*.tsx` file. New photos go in
`public/images/` and are referenced by path from the page that uses them.

See [CLAUDE.md](CLAUDE.md) for architecture notes, design conventions, and
the commit message style used in this repo.
