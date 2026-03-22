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

  return {
    title: `${product.name} - Adee Labs`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Adee Labs`,
      description: product.description,
    },
  }
}

export default function Page({ params }: Props) {
  const product = products.find((p) => p.id === params.id)
  if (!product) notFound()

  return <ProductPage product={product} />
}
