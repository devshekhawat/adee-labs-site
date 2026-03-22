import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Adee Labs',
  description: 'Privacy Policy for Adee Labs products and services.',
}

export default function PrivacyPolicyPage() {
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
          <span className="gradient-text">Privacy Policy</span>
        </h1>
        <p className="text-foreground/50 mb-12">Last updated: March 23, 2025</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-foreground/70">
              Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-foreground/70 mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Personal Information: Name, email address, etc.</li>
              <li>Usage Data: Information on how you use our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-foreground/70 mb-4">We use the information we collect for various purposes, including:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>To provide and maintain our service.</li>
              <li>To notify you about changes to our service.</li>
              <li>To provide customer support.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-foreground/70">
              We take the security of your data seriously and implement appropriate measures to protect it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-foreground/70 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Access your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request deletion of your personal data.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-foreground/70">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-foreground/70">
              If you have any questions about this privacy policy, please contact us at{' '}
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
