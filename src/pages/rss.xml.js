import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../site";

export async function GET(context) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return rss({
    title: `${siteConfig.title} Writing`,
    description: "Writing, notes, and longer-form thinking from Warren Dodsworth.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/writing/${post.id}/`,
    })),
    customData: `<language>en-au</language>`,
  });
}
