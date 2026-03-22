'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Globe, Smartphone, Apple, Figma, Chrome, Check } from 'lucide-react'
import { products, iconMap, type Product } from '@/lib/products'

const PlatformIcon = ({ platform }: { platform: string }) => {
  const icons: Record<string, typeof Globe> = {
    web: Globe,
    ios: Apple,
    android: Smartphone,
    figma: Figma,
    chrome: Chrome,
  }
  const Icon = icons[platform] || Globe
  return <Icon size={18} />
}

const platformLabels: Record<string, string> = {
  web: 'Web App',
  ios: 'iOS',
  android: 'Android',
  figma: 'Figma Plugin',
  chrome: 'Chrome Extension',
}

interface Props {
  product: Product
}

export function ProductPage({ product }: Props) {
  const Icon = iconMap[product.icon]
  const isExternal = product.href.startsWith('http')

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className={`absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-20`} />
        <div className={`absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-10`} />

        <div className="container-custom section-padding relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Products
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${product.color}`}>
                  <Icon size={32} className="text-white" />
                </div>
                <div className="flex gap-2">
                  {product.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm"
                    >
                      <PlatformIcon platform={platform} />
                      {platformLabels[platform]}
                    </span>
                  ))}
                </div>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">{product.name}</span>
              </h1>
              <p className="text-xl text-foreground/60 mb-6">{product.tagline}</p>
              <p className="text-lg text-foreground/70 mb-8">{product.longDescription || product.description}</p>

              {isExternal ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/25"
                >
                  Visit App
                  <ExternalLink size={18} />
                </a>
              ) : (
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/25"
                >
                  Learn More
                </Link>
              )}

              {product.stats && (
                <div className="flex gap-8 mt-8 pt-8 border-t border-foreground/10">
                  {product.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-foreground/50">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass-card aspect-video flex items-center justify-center"
            >
              <div className={`p-8 rounded-3xl bg-gradient-to-br ${product.color}`}>
                <Icon size={80} className="text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {product.features && (
        <section className="section-padding bg-foreground/[0.02]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl font-bold">
                Key <span className="gradient-text">Features</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card flex items-center gap-3"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${product.color}`}>
                    <Check size={16} className="text-white" />
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-2xl font-bold mb-4">
              Explore More Products
            </h2>
            <p className="text-foreground/60 mb-8">
              Check out other innovative tools from Adee Labs
            </p>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:scale-105 transition-transform"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
