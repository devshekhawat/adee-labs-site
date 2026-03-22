import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'App Support - Adee Labs',
  description: 'Get support for Adee Labs products and services.',
}

export default function AppSupportPage() {
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
          <span className="gradient-text">App Support</span>
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="glass-card">
                <h3 className="font-semibold mb-2">How do I install the app?</h3>
                <p className="text-foreground/70">
                  Our app can be downloaded from the official app stores (Google Play Store for Android, Apple App Store for iOS).
                </p>
              </div>
              <div className="glass-card">
                <h3 className="font-semibold mb-2">Is there a free trial available?</h3>
                <p className="text-foreground/70">
                  Yes, we offer a 15-day free trial. You can cancel anytime during this period for a full refund.
                </p>
              </div>
              <div className="glass-card">
                <h3 className="font-semibold mb-2">How do I request a refund?</h3>
                <p className="text-foreground/70">
                  Please refer to our{' '}
                  <Link href="/refund-policy" className="text-primary hover:underline">
                    Refund Policy
                  </Link>{' '}
                  for detailed information on how to request a refund.
                </p>
              </div>
              <div className="glass-card">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-foreground/70">
                  We accept major credit cards and PayPal. Our checkout process is powered by Paddle for secure transactions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-foreground/70 mb-4">
              If you need further assistance, please don't hesitate to contact our support team:
            </p>
            <a
              href="mailto:dev@adeelabs.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-medium hover:scale-105 transition-transform"
            >
              <Mail size={18} />
              dev@adeelabs.com
            </a>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Important Links</h2>
            <div className="flex flex-wrap gap-4">
              <Link href="/refund-policy" className="glass px-4 py-2 rounded-full hover:scale-105 transition-transform">
                Refund Policy
              </Link>
              <Link href="/terms-of-service" className="glass px-4 py-2 rounded-full hover:scale-105 transition-transform">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="glass px-4 py-2 rounded-full hover:scale-105 transition-transform">
                Privacy Policy
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
