# Site Structure

This document captures the agreed information architecture and Astro content model for `warrendodsworth.github.io`.

## Goals

- Move away from a single resume-style page into clear destinations
- Keep the site fast and mostly static while leaving room for selective islands later
- Create a structure that supports projects, writing, and evergreen profile content without rework

## Top-level navigation

- `Home` at `/`
- `About` at `/about/`
- `Projects` at `/projects/`
- `Writing` at `/writing/`
- `Now` at `/now/`
- `Contact` at `/contact/`

## Route structure

- `src/pages/index.astro`
- `src/pages/[slug].astro`
  - handles evergreen page entries from the `pages` collection
- `src/pages/projects.astro`
- `src/pages/projects/[slug].astro`
- `src/pages/writing.astro`
- `src/pages/writing/[slug].astro`

## Content collections

Defined in `src/content.config.ts`.

### `pages`

Purpose:
- Evergreen profile content such as `About`, `Now`, and `Contact`

Source:
- `src/content/pages/*.md`

Schema fields:
- `title`
- `description`
- `intro`
- `kicker`
- `order`

### `blog`

Purpose:
- Time-based writing, notes, essays, and posts

Source:
- `src/content/blog/*.md`

Schema fields:
- `title`
- `description`
- `summary`
- `pubDate`
- `updatedDate`
- `draft`
- `tags`
- `featured`

### `projects`

Purpose:
- Portfolio entries, freelance work, product stories, and richer case studies

Source:
- `src/content/projects/*.md`

Schema fields:
- `title`
- `description`
- `summary`
- `pubDate`
- `status`
- `role`
- `client`
- `techStack`
- `featured`
- `caseStudy`
- `externalUrl`

## Content type rules

- Use a `pages` entry when the content is evergreen and not part of a chronological stream
- Use a `blog` entry for dated writing and publication-style content
- Use a `projects` entry for work history, product showcases, and case studies
- Treat case studies as richer `projects` entries instead of as a separate top-level section for now

## URL conventions

- Evergreen pages live at top-level slugs like `/about/` and `/contact/`
- Writing entries live at `/writing/<slug>/`
- Project entries live at `/projects/<slug>/`
- The homepage stays a hand-authored route because it will become a curated landing page rather than a direct collection listing

## Resume migration mapping

Current `Resume.md` content should map like this:

- Intro and personal positioning: `pages/about`
- Roles and responsibilities: `pages/about`
- Technologies and skills: `pages/about`, with selective highlights surfaced on `Home`
- Personal projects: `projects`
- Freelance projects: `projects`
- Public links and reach-out paths: `pages/contact`

## Why this structure

- It keeps the site simple to reason about in Astro
- It gives writing and projects first-class structured content models
- It avoids prematurely over-modeling the homepage
- It leaves room for future interactive components without changing the core information architecture
