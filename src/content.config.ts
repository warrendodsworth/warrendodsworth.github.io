import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    intro: z.string(),
    kicker: z.string().optional(),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    status: z.enum(["planned", "active", "archived"]),
    role: z.string(),
    client: z.string(),
    techStack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    caseStudy: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { pages, blog, projects };
