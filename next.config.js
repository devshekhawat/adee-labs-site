/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.logo.dev'],
  },
  async rewrites() {
    return [
      { source: '/privacy-policy.html', destination: '/privacy-policy' },
      { source: '/terms-of-service.html', destination: '/terms-of-service' },
      { source: '/app-support.html', destination: '/app-support' },
      { source: '/refund-policy.html', destination: '/refund-policy' },
    ]
  },
}

module.exports = nextConfig
