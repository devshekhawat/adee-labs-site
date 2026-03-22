'use client'

import { motion } from 'framer-motion'
import { Mail, Twitter, Linkedin, Github } from 'lucide-react'

const socialLinks = [
  { href: 'https://twitter.com/AdeeLabsHQ', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com/company/AdeeLabsHQ', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/AdeeLabsHQ', icon: Github, label: 'GitHub' },
]

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            Have a question or want to collaborate? Reach out to us!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-8"
        >
          <a
            href="mailto:dev@adeelabs.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full gradient-bg text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/25"
          >
            <Mail size={20} />
            Email Us
          </a>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:scale-110 transition-transform"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
