'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { products, iconMap, type Product } from '@/lib/products'
import { Globe, Smartphone, Apple, Figma, Chrome } from 'lucide-react'

const PlatformIcon = ({ platform }: { platform: string }) => {
  const icons: Record<string, typeof Globe> = {
    web: Globe,
    ios: Apple,
    android: Smartphone,
    figma: Figma,
    chrome: Chrome,
  }
  const Icon = icons[platform] || Globe
  return <Icon size={16} />
}

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const Icon = iconMap[product.icon]

  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card group cursor-pointer h-full"
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${product.color}`}>
            <Icon size={24} className="text-white" />
          </div>
          <div className="flex gap-1.5 opacity-60">
            {product.platforms.map((platform) => (
              <span key={platform} className="p-1.5 rounded-lg bg-foreground/5">
                <PlatformIcon platform={platform} />
              </span>
            ))}
          </div>
        </div>

        <h3 className="font-display text-xl font-semibold mb-2 group-hover:gradient-text transition-all">
          {product.name}
        </h3>
        <p className="text-foreground/60 text-sm mb-4">{product.description}</p>

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
      </motion.div>
    </Link>
  )
}

export function Products() {
  return (
    <section id="products" className="section-padding bg-foreground/[0.02]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Explore our suite of innovative solutions designed to empower creators and developers worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
