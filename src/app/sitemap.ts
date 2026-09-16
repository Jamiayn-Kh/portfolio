import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteUrl } from '@/data/site';
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return ['', '/projects', '/contact', ...projects.map((p) => '/projects/' + p.slug)].map(
    (route) => ({ url: siteUrl + route })
  );
}
