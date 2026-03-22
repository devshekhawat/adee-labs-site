import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund Policy - Adee Labs',
  description: 'Refund Policy for Adee Labs products and services.',
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom section-padding max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="font-display text-4xl font-bold mb-4">
          <span className="gradient-text">Refund Policy</span>
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <p className="text-foreground/70">
              Thank you for purchasing our software product. We strive to provide high-quality products and services. However, if you are not completely satisfied with your purchase, we offer a full refund under the following conditions:
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Eligibility for Refund</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>The request for a refund must be made within 15 days of the purchase date.</li>
              <li>The software must be uninstalled from your device.</li>
              <li>You must provide proof of purchase, such as a receipt or order confirmation.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">How to Request a Refund</h2>
            <ol className="list-decimal list-inside space-y-2 text-foreground/70">
              <li>
                Contact our customer support team at{' '}
                <a href="mailto:dev@adeelabs.com" className="text-primary hover:underline">
                  dev@adeelabs.com
                </a>
                .
              </li>
              <li>Include your order number and reason for the refund request.</li>
              <li>Follow any additional instructions provided by our support team.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Processing Time</h2>
            <p className="text-foreground/70">
              Refund requests will be processed within 7-10 business days after approval.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Exceptions</h2>
            <p className="text-foreground/70 mb-4">Refunds are not available for:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Software that has been modified or tampered with.</li>
              <li>Purchases made through third-party vendors.</li>
            </ul>
          </section>

          <section>
            <p className="text-foreground/70">
              If you have any questions regarding our refund policy, please feel free to contact us.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
