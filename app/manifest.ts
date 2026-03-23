import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Adee Labs',
    short_name: 'Adee Labs',
    description: 'Innovation & Technology Solutions - Adee Labs creates innovative digital tools and applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#667eea',
    icons: [
      {
        src: '/icon?<generated>',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
