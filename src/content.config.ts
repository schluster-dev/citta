import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Penting: ini cara baru load file

const asn = defineCollection({
  // 'loader' memberitahu Astro untuk mengambil file markdown dari mana
  loader: glob({ pattern: "**/*.md", base: "src/content/asn" }), 
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { asn };