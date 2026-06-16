# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio/resume single-page app for Amit Kumar Ghosh. Create React App (`react-scripts` 5) + React 18 + React Router 7. Deployed to Vercel (`@vercel/analytics`; canonical host `amitkumarghosh.vercel.app`). Content is hardcoded in components/data files — there is no backend or CMS.

Note: the on-disk folder is `minimalistic-dossier` but `package.json` `name` is `resume-website` (the README's `cd resume-website` reflects the package name, not the folder).

## Commands

```bash
npm install            # install deps
npm start              # dev server at http://localhost:3000 (hot reload)
npm run build          # production build to build/
npm test               # CRA/Jest watch mode
npm test -- --watchAll=false                 # run once (CI style)
npm test -- --watchAll=false src/App.test.js # single test file
npm test -- -t "renders"                     # single test by name
```

There is no separate lint script — ESLint runs through `react-scripts` (config `react-app`, `react-app/jest`) during `start`/`build`.

Caveat: `src/App.test.js` is the stock CRA test asserting a "learn react" link that no longer exists, so it currently fails. It is not a real test of this app — don't trust a green/red on it as a signal.

## Architecture

**Routing & page composition (`src/App.js`).** Top-level layout wraps everything in `HelmetProvider` + `BrowserRouter`, mounts three always-on globals — `<MatrixRain>`, `<InteractiveTerminal>`, `<Header>` — then `<Routes>`. The key structural fact: each portfolio section (`WorkExperience`, `Education`, `Projects`, `Courses`, `Contests`, `Skills`, `Activities`, `Update`, plus `Hero`) is **both** a standalone route (`/work-experience`, etc.) **and** stacked together inside `pages/Home.js` to form the one-page scroll view. Editing a section component changes both its dedicated route and the homepage. `*` falls back to `pages/Error.js`.

**Pages vs components.** `src/pages/` = route-level sections, mostly self-contained with hardcoded JSX content. `src/components/` = cross-cutting widgets (`Headar.js` [sic] header/nav, `MatrixRain.js` canvas effect, `InteractiveTerminal.js`, `FloatingActionButton.js`, `ThemeToggle.js`, `ProfessionalTimeline.js`, `Clustermap.js`).

**Blog data (`src/data/`).** `blogData.js` and `SecretBlogsData.js` export arrays of post objects whose `content` field is **inline JSX**, not markdown/HTML strings. `pages/Blog.js` + `pages/BlogDetails.js` (route `/blogs/:id`) render from `blogData`; `SecretBlogs.js` + `SecretBlogDetails.js` (`/secret-blogs/:id`) render from `SecretBlogsData`. To add/edit a post, edit the data file — content is authored as React elements there.

**Dynamic favicon (`src/utils/dynamicFavicon.js`).** Draws the favicon on a 32×32 `<canvas>` at runtime: emoji chosen by time of day, plus optional notification badge (driven by `localStorage.notificationCount`) and offline dot. `App.js` calls `initDynamicFavicon()` on mount; it self-throttles (2s) and refreshes on visibility/online/offline events and a 60s interval.

**Theming is partial.** `ThemeToggle.js` exists and `src/context/ThemeContext.js` is empty — there is no working light/dark context. `App.js` only toggles a `dark` class from `prefers-color-scheme` for the favicon. Don't assume a theme provider exists.

## Styling

- **Tailwind CSS 3** (`tailwind.config.js`, `postcss.config.js`) is the active styling system. Default font family is overridden to `Inconsolata`/monospace — the whole site is intentionally monospace/text-based.
- `package.json` also lists `@tailwindcss/postcss` and `@tailwindcss/vite` v4, but the build uses CRA + PostCSS with Tailwind **3** — the v4/Vite packages are unused leftovers; don't wire them in.
- SCSS (`sass`) is used only by `src/AnimatedLetters/` and `src/3DSpiner/`; most styling is Tailwind utility classes inline plus `App.css` / `animations.css`.

## Gotchas

- **Misspelled paths are load-bearing** — match them exactly in imports: `components/Headar.js` (header), `src/3DSpiner/` (spinner), `src/assates/` (image assets).
- **`EASTER_EGGS.md` is largely aspirational/stale.** It documents a `window.easterEgg` engine, Konami code, console-command modes, achievements, and routes like `/secret` / `/konami` — most of that machinery is not in the code (recent commit removed easter-egg content). Verify against source before relying on any of it; the live secret feature is the `/secret-blogs` route.
