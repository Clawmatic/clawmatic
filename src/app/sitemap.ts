import { MetadataRoute } from 'next';

const BASE_URL = 'https://clawmatic.eu';

const guides = [
  'getting-started',
  'connect-whatsapp',
  'first-skill',
  'config-deep-dive',
  'automate-standups',
  'google-calendar-email',
  'skill-pack-format',
  'finance-assistant',
  'vps-setup',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/skills`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  const guideRoutes: MetadataRoute.Sitemap = guides.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...guideRoutes];
}
