export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Adee Labs',
    url: 'https://adeelabs.com',
    logo: 'https://adeelabs.com/icon',
    description: 'Adee Labs creates innovative digital tools and applications including Supersplit, Image2Vector, TextGPT, and MapMaker.',
    founder: {
      '@type': 'Person',
      name: 'Dev Shekhawat',
    },
    sameAs: [
      'https://twitter.com/adeelabs',
      'https://github.com/adeelabs',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Adee Labs',
    url: 'https://adeelabs.com',
    description: 'Innovation & Technology Solutions',
    publisher: {
      '@type': 'Organization',
      name: 'Adee Labs',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://adeelabs.com/products?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
