import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Adee Labs - Innovation & Technology Solutions',
  description: 'Adee Labs creates innovative digital tools and applications including Supersplit, Image2Vector, TextGPT, and MapMaker. Founded by Dev Shekhawat to empower creators worldwide.',
  keywords: 'Adee Labs, Dev Tools, Image2Vector, Supersplit, TextGPT, MapMaker, Technology Solutions',
  authors: [{ name: 'Adee Labs' }],
  creator: 'Dev Shekhawat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adeelabs.com',
    title: 'Adee Labs - Innovation & Technology Solutions',
    description: 'Adee Labs creates innovative digital tools and applications including Supersplit, Image2Vector, TextGPT, and MapMaker.',
    siteName: 'Adee Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adee Labs - Innovation & Technology Solutions',
    description: 'Adee Labs creates innovative digital tools and applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
