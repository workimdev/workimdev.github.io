# Younghwan Kim - Portfolio

Personal portfolio for **Younghwan Kim**, a .NET developer and software engineer building Windows desktop applications and healthcare information systems.

Live site: [workimdev.github.io](https://workimdev.github.io)

## Highlights

- Korean and English language toggle
- Light and dark theme toggle, with preferences saved locally
- Responsive one-page portfolio
- Education, work experience, and selected projects
- Official product and organization assets for project thumbnails and affiliations

## Project structure

```text
.
├── index.html      # Portfolio markup
├── styles.css      # Base styles
├── refined.css     # Layout and component refinements
├── script.js       # Language and theme controls
└── assets/         # Profile, organization, and product images
```

## Local preview

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This repository is configured for GitHub Pages user-site deployment.

1. Push the `main` branch to `workimdev/workimdev.github.io`.
2. In GitHub, open **Settings → Pages**.
3. Select **Deploy from a branch**, then choose **main** and **/(root)**.

The site is published at `https://workimdev.github.io` after deployment completes.
