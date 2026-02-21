# Academic Homepage (GitHub Pages)

This project is an Astro-based personal academic homepage that can be deployed to GitHub Pages.

## Update your content

1. Put your profile photo in `public/images/profile.jpg`.
2. Update personal info and links in `src/data/profile.json`.
3. Update education in `src/data/education.json`.
4. Update publications in `src/data/publications.json`.
5. Set your GitHub username in `astro.config.mjs`:
   - `site: "https://your-github-username.github.io"`

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Ensure default branch is `main`.
3. In GitHub repo settings:
   - `Settings -> Pages -> Build and deployment -> Source: GitHub Actions`
4. Push to `main`, then the workflow in `.github/workflows/deploy.yml` will deploy automatically.
