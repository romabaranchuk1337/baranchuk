# Baranchuk Productions

Portfolio website for Baranchuk Productions. Built with React, TypeScript, Vite and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Production Build

```bash
npm run typecheck
npm run build
```

The build output is created in `dist/`.

## Editing Content

- Projects: `src/data/projects.ts`
- Home page: `src/pages/Home.tsx`
- About/contact page: `src/pages/About.tsx`
- Navigation/footer: `src/components/`
- Global styles: `src/index.css`

## GitHub Pages

The repository includes `.github/workflows/pages.yml`. Every push to `main` builds the site and deploys `dist/` to GitHub Pages.

For the repository `baranchuk`, the workflow uses:

```bash
BASE_PATH=/baranchuk/
```

If the repository name changes, update the `BASE_PATH` value in the workflow.
