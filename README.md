# Warren Dodsworth Site

Source for [warrendodsworth.github.io](https://warrendodsworth.github.io), built with Astro and deployed to GitHub Pages.

The site is structured as a modern personal website for:

- profile and positioning
- selected projects and case studies
- writing and longer-form notes
- future interactive demos where they add value

## Live site

- [warrendodsworth.github.io](https://warrendodsworth.github.io)

## Stack

- [Astro](https://astro.build/) for the site framework
- GitHub Pages for hosting
- GitHub Actions for deployment
- Astro content collections for structured content

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build the production site:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
src/
  content/      Structured page, project, and writing content
  layouts/      Shared Astro layouts
  pages/        Route files
  styles/       Global styling
public/         Static assets
docs/           Supporting project docs
```

## Content model

- `src/content/pages` for evergreen pages like About, Now, and Contact
- `src/content/projects` for portfolio and case-study entries
- `src/content/blog` for writing entries

## Deployment

Deployments run through GitHub Actions and publish to GitHub Pages from the repository workflow, not from a branch-based Pages build.

## Status

The Astro migration is complete and the site is now in the ongoing refinement phase: improving content, presentation, and project storytelling over time.
