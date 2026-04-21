import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Kita definisikan koleksi satu per satu secara eksplisit
const infoAsn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/info-asn" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    image: image().optional(),
    caption: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const pendidikan = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/pendidikan" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    image: image().optional(),
    caption: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const teknologi = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/teknologi" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    image: image().optional(),
    caption: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { 
  'info-asn': infoAsn, 
  pendidikan, 
  teknologi 
};