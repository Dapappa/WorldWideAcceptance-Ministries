'use client'

import { motion } from 'framer-motion'
import { Youtube, ExternalLink } from 'lucide-react'

export default function WatchLivePage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Youtube className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="heading-primary">Watch Live</h1>
            <p className="text-body text-lg max-w-3xl mx-auto mb-8">
              Join us for our live services and watch previous sermons on our YouTube channel.
            </p>
            <a
              href="https://www.youtube.com/channel/UCJdC2zOZUDnICZkO2J1Uymw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Visit Our YouTube Channel</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

