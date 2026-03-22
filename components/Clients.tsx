'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { clients } from '@/lib/products'

export function Clients() {
  return (
    <section id="clients" className="section-padding bg-foreground/[0.02]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Trusted By
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.domain}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative h-10 w-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
            >
              <Image
                src={`https://img.logo.dev/${client.domain}?token=pk_Y9Z3j7N4QaKmMpL8XsDj2g&retina=true&size=200&format=png&greyscale=false`}
                alt={client.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
