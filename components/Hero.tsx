'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen h-screen max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero Backgorund.jpeg"
          alt="Worldwide Acceptance Ministries Calgary church worship service background"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Static Gradient Overlay - Remove animated gradient for performance */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary-dark/70 to-primary-dark/85" />

        {/* Decorative Light Rays */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent transform rotate-12" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent transform -rotate-12" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-display text-white drop-shadow-2xl mb-6">
            Worldwide Acceptance Ministries
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 font-light text-gray-100">
            Come worship with us in Calgary!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#welcome" className="btn-primary inline-block shadow-2xl shadow-accent/50">
            Learn More
          </a>
          <a href="#events" className="btn-secondary inline-block">
            View Events
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.a
          href="#welcome"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white hover:text-accent transition-colors flex flex-col items-center gap-2"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  )
}

