import { Metadata } from 'next'
import Link from 'next/link'
import { products, iconMap } from '@/lib/products'
import { Globe, Smartphone, Apple, Figma, Chrome } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore our suite of innovative digital tools and applications - Supersplit, Image2Vector, TextGPT, MapMaker, and more.',
  alternates: {
    canonical: '/products',
  },
}

const platformIconNames: Record<string, string> = {
  web: 'Globe',
  ios: 'Apple',
  android: 'Smartphone',
  figma: 'Figma',
  chrome: 'Chrome',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Explore our suite of innovative solutions designed to empower creators and developers worldwide.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => {
            const Icon = iconMap[product.icon]

            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="glass-card group block"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${product.color} shrink-0`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display text-xl font-semibold group-hover:gradient-text transition-all">
                        {product.name}
                      </h3>
                      <div className="flex gap-1.5 shrink-0">
                        {product.platforms.map((platform) => (
                          <span key={platform} className="p-1.5 rounded-lg bg-foreground/5 text-xs">
                            {platformIconNames[platform]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground/60 mb-4">{product.description}</p>
                    {product.stats && (
                      <div className="flex gap-4 pt-4 border-t border-foreground/10">
                        {product.stats.map((stat) => (
                          <div key={stat.label}>
                            <span className="text-lg font-semibold gradient-text">{stat.value}</span>
                            <span className="text-xs text-foreground/40 ml-1">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
