import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Adee Labs',
  description: 'Terms of Service for Adee Labs products and services.',
}

export default function TermsOfServicePage() {
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
          <span className="gradient-text">Terms of Service</span>
        </h1>
        <p className="text-foreground/50 mb-12">Last updated: March 23, 2025</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground/70">
              By accessing or using our service, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">2. Changes to Terms</h2>
            <p className="text-foreground/70">
              We may modify these terms at any time. Your continued use of the service constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-foreground/70">
              You are responsible for your account and all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">4. Termination</h2>
            <p className="text-foreground/70">
              We may suspend or terminate your access if you violate these terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="text-foreground/70">
              Our liability is limited to the maximum extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">6. Governing Law</h2>
            <p className="text-foreground/70">
              These terms are governed by the laws of India.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-foreground/70">
              If you have any questions about these terms, please contact us at{' '}
              <a href="mailto:dev@adeelabs.com" className="text-primary hover:underline">
                dev@adeelabs.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
