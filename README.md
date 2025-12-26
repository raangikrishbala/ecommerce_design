# Next.js (App Router) TypeScript Conversion

This branch contains a minimal Next.js App Router + TypeScript scaffold converted from the original HTML design in the repository. The goal is to preserve Bootstrap classes and markup to avoid any visual regressions.

How to run locally:
1. git clone https://github.com/raangikrishbala/ecommerce_design
2. git checkout nextjs
3. npm install
4. npm run dev

Notes:
- This commit does not copy binary assets. Please copy the contents of the existing `assets/` directory from the repository root into `public/assets/` so images referenced by the pages render correctly.
- The Bootstrap CSS is imported globally in `app/layout.tsx` via `bootstrap/dist/css/bootstrap.min.css`.
- Interactive behavior (auth, cart) are left as placeholders to be implemented during integration.
