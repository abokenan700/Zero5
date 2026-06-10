# Blinkit pixel-perfect React implementation

This is the React web implementation of the reverse-engineered Blinkit Android v17.99.1 home shell. React was chosen over React Native/Next.js for this repository because it gives a directly inspectable, browser-measurable CSS-pixel surface without requiring native SDKs, server rendering, committed binary assets, or a dependency install to review the implementation.

## What is implemented

- A fixed 390 × 844 px mobile frame matching the documented design extraction.
- Header, status area, delivery promise, address row, profile control, and search bar.
- Category grid, product rail, product cards, timer chips, ADD controls, and bottom navigation.
- Design tokens in JavaScript mapped from `docs/reverse-engineering/design-tokens.json`.
- Keeps the implementation text-only: no committed raster binaries; brand and product visuals are recreated with CSS and placeholders.

## Run locally

```bash
cd apps/blinkit-react
python3 -m http.server 4173 --directory .
```

Then open `http://localhost:4173`.

> The app imports React from ESM CDN URLs in `src/App.js` so it remains build-step-free in this minimal repository. For production, pin the same React version in a normal Vite/Next.js package and keep the CSS/tokens unchanged.

## Validate

```bash
npm run check
```
