import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products } from '@/lib/products'
import { ProductPage } from './ProductPage'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id)
  if (!product) return { title: 'Product Not Found' }

  const title = `${product.name} - ${product.tagline}`
  return {
    title,
    description: product.longDescription || product.description,
    keywords: [product.name, product.tagline, ...product.platforms, 'Adee Labs'],
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title,
      description: product.description,
      type: 'website',
      url: `https://adeelabs.com/products/${product.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: product.description,
    },
  }
}

export default function Page({ params }: Props) {
  const product = products.find((p) => p.id === params.id)
  if (!product) notFound()

  return <ProductPage product={product} />
}
