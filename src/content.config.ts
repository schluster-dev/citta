import { defineCollection, z, type ImageFunction } from 'astro:content'; // Tambahkan type ImageFunction
import { glob } from 'astro/loaders';

// Berikan tipe pada parameter fungsi helper agar TypeScript tidak bingung
const baseSchema = ({ image }: { image: ImageFunction }) => z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  description: z.string(),
  author: z.string(),
  image: image().optional(),
  caption: z.string().optional(),
  tags: z.array(z.string()).optional(),
  excerpt: z.string().optional(), 
});

const infoAsn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/info-asn" }),
  schema: baseSchema,
});

const pendidikan = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/pendidikan" }),
  schema: baseSchema,
});

const teknologi = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/teknologi" }),
  schema: baseSchema,
});

export const collections = { 
  'info-asn': infoAsn, 
  pendidikan, 
  teknologi 
};