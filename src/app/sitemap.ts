import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { packages } from '@/data/packages';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes = ['', '/packages'].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const packageRoutes = packages.map((p) => ({
    url: `${base}/packages/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...packageRoutes];
}
