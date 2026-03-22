import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const footerLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/refund-policy', label: 'Refund Policy' },
  { href: '/app-support', label: 'App Support' },
]

const socialLinks = [
  { href: 'https://twitter.com/AdeeLabsHQ', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com/company/AdeeLabsHQ', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/AdeeLabsHQ', icon: Github, label: 'GitHub' },
]

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-foreground/[0.02]">
      <div className="container-custom section-padding !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="font-display text-xl font-bold">
              <span className="gradient-text">Adee Labs</span>
            </Link>
            <p className="mt-4 text-foreground/60 text-sm max-w-xs">
              Empowering innovation through cutting-edge technology solutions. Building tools that matter.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass hover:scale-110 transition-transform"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-foreground/60 text-sm">
              <a href="mailto:dev@adeelabs.com" className="hover:text-foreground transition-colors">
                dev@adeelabs.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/10 text-center text-foreground/40 text-sm">
          &copy; {new Date().getFullYear()} Adee Labs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
