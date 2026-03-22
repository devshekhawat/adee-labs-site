'use client'

import { motion } from 'framer-motion'

const values = ['Innovation', 'Technology', 'Creativity', 'Discovery']

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Story</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-3 flex-wrap mb-12"
        >
          {values.map((value, index) => (
            <span
              key={value}
              className="px-4 py-2 rounded-full glass text-sm font-medium"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {value}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="text-lg text-foreground/70 leading-relaxed">
            Adee Labs is the brainchild of <span className="text-foreground font-medium">Dev Shekhawat</span> who's the force driving our unwavering commitment to cutting-edge tech solutions.
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Our aim isn't just to create amazing tools, but to be enablers of innovation and creativity. We're firm believers of a world where technology is not a privilege but a right. Our products are guiding lights on this journey that we hope to embark on with our users.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
