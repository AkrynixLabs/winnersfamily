# CLAUDE.md

This file provides guidance when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then production-build via Vite; treat type errors as build failures
- `npm run lint` — ESLint (flat config, `eslint.config.js`)
- `npm run preview` — serve the production build locally

There is no test suite configured in this project yet. Run `lint` and `build` after any change before considering it done.

## School Information

**Official Name:** Winners Family School  
**Short Name / Initials:** WFS  
**Founded:** 2nd September, 2008  
**Location:** Bulemin - Gbawe, Accra, Ghana  
**Google Maps:** https://maps.app.goo.gl/demBhbxC5vVDakyLA  
**Coordinates:** 5.5851039, -0.3299584  
**Maps Place ID:** 0xfdfa395fdb3eb99:0x7a61eeb616d8c1d4  
**Motto:** Discipline, Power and Knowledge  
**Phone:** 0244770553 / 0243263959  
**Email:** winnersfamilyschool123@gmail.com  

**School Levels:**
- Preschool: Crèche, Nursery, Kindergarten (KG 1 & 2)
- Primary: Basic 1 – 6
- Junior High School: Form 1 – 3 (JHS)

**Academic Calendar (Ghana 3-term system):**
- Term 1: September – December
- Term 2: January – April
- Term 3: May – August
- Admissions: Open year-round, primarily targeted at Term 1 (September intake)

**Brand Colours:**
- Yellow: `#F5C518` (primary accent, energy, optimism)
- Pink: `#E91E63` (secondary accent, warmth, creativity)
- Blue: `#1565C0` (primary background/header, trust, knowledge)

**Design Direction:** Modern and bold  
**Logo:** To be provided by client — currently using styled WFS text mark  

## Architecture

React 19 + TypeScript + Vite SPA, no backend. Routing is client-side via `react-router-dom`.

- `src/main.tsx` — entry point; wraps `<App />` in `<BrowserRouter>`.
- `src/App.tsx` — defines all routes. A single `<Layout />` wraps every page via a parent `<Route element={<Layout />}>`; page components are nested `<Route>`s rendered into `Layout`'s `<Outlet />`.
- `src/components/Layout.tsx` — site chrome: header with logo + nav, `<Outlet />` for the current page, and footer. Nav links live in the `NAV_LINKS` array at the top of the file.
- `src/pages/` — one component per route. Each page owns its own CSS file co-located with the component.
- `src/pages/PageStub.tsx` — shared placeholder used by pages without real content yet. Replace with real markup when fleshing out a page.
- `src/index.css` — global CSS custom properties (design tokens), resets, and shared utility classes. Component styles should reuse tokens rather than hardcode colours.

**Pages:**
- `/` — Home
- `/about` — About Us
- `/academics` — Academics
- `/admissions` — Admissions
- `/gallery` — Gallery
- `/news` — News & Events
- `/contact` — Contact

### Adding a new page

1. Add the route in `src/App.tsx` (nested under the `Layout` route).
2. Add the entry to `NAV_LINKS` in `src/components/Layout.tsx` if it belongs in primary nav.
3. Create `src/pages/<Name>.tsx` + co-located `.css` file.

## Design Tokens (index.css)

| Token | Value | Usage |
|---|---|---|
| `--blue` | `#1565C0` | Primary / header / hero backgrounds |
| `--blue-deep` | `#0D47A1` | Darker blue for depth |
| `--blue-light` | `#1976D2` | Hover states |
| `--yellow` | `#F5C518` | Primary CTA buttons, accents |
| `--yellow-bright` | `#FFD740` | Hover state for yellow |
| `--pink` | `#E91E63` | Secondary accent, highlights |
| `--pink-light` | `#F06292` | Lighter pink for hover/tint |
| `--text` | `#2D3142` | Body text |
| `--text-h` | `#0D1B3E` | Heading text |
| `--bg` | `#F8F9FC` | Page background |
| `--surface` | `#FFFFFF` | Card / section backgrounds |
| `--border` | `#E0E4EF` | Borders and dividers |

## Copy guidelines

- Plain, specific, factual — reads like a real school's site
- Avoid generic marketing filler ("nurturing environment where every child thrives")
- Placeholder specifics should be clearly marked `[TBD]` rather than invented

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/) style: `<type>: <summary>`, imperative mood.

- Common types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`
- Keep dependency/config changes separate from feature changes when practical
