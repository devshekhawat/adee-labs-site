import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { JsonLd } from '@/components/JsonLd'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adeelabs.com'),
  title: {
    default: 'Adee Labs - Innovation & Technology Solutions',
    template: '%s | Adee Labs',
  },
  description: 'Adee Labs creates innovative digital tools and applications including Supersplit, Image2Vector, TextGPT, and MapMaker. Founded by Dev Shekhawat to empower creators worldwide.',
  keywords: ['Adee Labs', 'Dev Tools', 'Image2Vector', 'Supersplit', 'TextGPT', 'MapMaker', 'Technology Solutions', 'Figma Plugins', 'Chrome Extensions', 'Mobile Apps'],
  authors: [{ name: 'Adee Labs', url: 'https://adeelabs.com' }],
  creator: 'Dev Shekhawat',
  publisher: 'Adee Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adeelabs.com',
    siteName: 'Adee Labs',
    title: 'Adee Labs - Innovation & Technology Solutions',
    description: 'Adee Labs creates innovative digital tools and applications including Supersplit, Image2Vector, TextGPT, and MapMaker.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adee Labs - Innovation & Technology Solutions',
    description: 'Adee Labs creates innovative digital tools and applications.',
    creator: '@adeelabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
