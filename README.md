# Shashank V. — Developer Portfolio

A responsive, minimalist editorial portfolio built with React and Vite. It includes selected projects, experience, education, research publications, credential verification links, and a downloadable resume.

## Run locally

**Requirements:** Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Content and assets

- `src/data/site.js` — contact details, social links, and profile-photo path.
- `src/data/projects.js` — project descriptions, technologies, highlights, and repository links.
- `src/sections/Publications.jsx` — publication metadata and paper download links.
- `src/sections/Certifications.jsx` — certification details and verification links.
- `public/profile-photo.jpeg` — supplied professional portrait.
- `public/resume.pdf` — supplied resume.
- `public/papers/` — the two supplied research papers.

Before publishing, verify all external links and add public repository/demo links for AI Smart Mirror and Price Vision AI if available. No repository links have been invented.

## Deploy to Vercel

Import the repository into Vercel and use build command `npm run build` and output directory `dist`.

## Git workflow

Use focused branches and pull requests for future changes. Example:

```bash
git switch -c feat/portfolio-content
git add .
git commit -m "feat: add portfolio publications and credentials"
git push -u origin feat/portfolio-content
```

No backend is required; contact links use email and phone actions.
