# Ashton Abraham - Personal Website

A minimalist, brutalist personal portfolio website built with Next.js and SCSS.

## Tech Stack

- **Framework:** Next.js 14 (Page Router)
- **Styling:** Modular SCSS
- **Typography:** Syne (headings) + IBM Plex Mono (body)
- **Language:** TypeScript

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header/         # Site header with navigation
│   ├── Footer/         # Site footer
│   ├── Layout/         # Main layout wrapper
│   ├── MobileNav/      # Mobile navigation drawer
│   └── ProjectCard/    # Project display card
├── pages/              # Next.js pages
│   ├── index.tsx       # Home page
│   ├── projects.tsx    # Projects showcase
│   ├── about.tsx       # About page
│   ├── contact.tsx     # Contact form
│   └── resume.tsx      # Resume/CV page
└── styles/
    ├── _variables.scss # Design tokens
    ├── _mixins.scss    # SCSS mixins
    ├── globals.scss    # Global styles
    └── pages/          # Page-specific styles
```

## Customization

### Colors
Edit `src/styles/_variables.scss` to customize the color palette:
- `$color-bg`: Background color
- `$color-accent`: Accent/highlight color
- `$color-text-primary`: Main text color

### Projects
Edit the `projects` array in `src/pages/projects.tsx` to add your own projects.

### Content
Update the content in each page file to personalize your site.

## Deployment

This site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Connect your repo for automatic deployments
- **Netlify:** Use the Next.js build plugin
- **Self-hosted:** Run `npm run build` then `npm start`

## License

MIT
