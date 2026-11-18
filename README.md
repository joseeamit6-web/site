# Amit Joshi Portal

Official under-construction portal for **[https://amitjoshi.info.np](https://amitjoshi.info.np)**, built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- **Minimal HUD Portal Layout**: High-contrast centered typography with neon-cyan glow, cyan status pill, subtitle, hairline divider, and four corner HUD brackets.
- **Futuristic Background Scanner (`CyberScannerBackground`)**: Optimized HTML5 Canvas + CSS background animation featuring a horizontal cyan scanning beam, reactive grid intersections, radar sweep, subtle network nodes, floating particles, sparse perimeter hex tokens, and ambient radial lighting.
- **Reusable Component Architecture**: Implemented in `src/components/PortalUnderConstruction.tsx` with configurable props (`heading`, `statusText`, `subtitle`, `showSimulationIndicator`).
- **Accessible & Responsive**: Respects `prefers-reduced-motion`, uses semantic landmarks (`<main>`, `<h1>`), and scales smoothly across mobile and desktop viewports.

## Local Development

```bash
npm install
npm run dev
```

### Scripts

- `npm run dev` — Start local Vite dev server on port `3000`
- `npm run lint` — Run TypeScript type-checking (`tsc --noEmit`)
- `npm run build` — Build production bundle into `dist/`
- `npm run preview` — Preview the production build locally

## Deploying to GitHub & GitHub Pages

1. **Initialize and push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Amit Joshi Portal"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Open your repository **Settings → Pages**.
   - Under **Build and deployment → Source**, select **GitHub Actions**.
   - Pushing to `main` automatically triggers `.github/workflows/deploy.yml` to type-check, build, and deploy `dist/`.

3. **Custom Domain (`amitjoshi.info.np`)**:
   - `public/CNAME` is pre-configured with `amitjoshi.info.np` and copied into `dist/` on every build.
   - Ensure your domain DNS points to GitHub Pages (`A` records to GitHub Pages IPs and/or `CNAME` record for `www` pointing to `<your-username>.github.io`).
