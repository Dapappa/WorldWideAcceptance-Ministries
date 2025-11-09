'use client'

import { motion } from 'framer-motion'
import { Facebook, Youtube, ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'Church Facebook Page',
    href: 'https://www.facebook.com/worldwideacceptanceministry',
    icon: Facebook,
    description: 'Follow us on Facebook for updates, events, and community news.',
  },
  {
    name: 'Pastor Facebook',
    href: 'https://www.facebook.com/john.john.219283/',
    icon: Facebook,
    description: 'Connect with our pastor on Facebook.',
  },
  {
    name: 'YouTube Channel',
    href: 'https://www.youtube.com/channel/UCJdC2zOZUDnICZkO2J1Uymw',
    icon: Youtube,
    description: 'Watch our sermons, services, and ministry content on YouTube.',
  },
]

export default function SocialMediaPage() {
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
            <h1 className="heading-primary">Social Media</h1>
            <p className="text-body text-lg max-w-3xl mx-auto">
              Stay connected with us through our social media platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 block"
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="heading-secondary text-xl mb-3">{social.name}</h3>
                  <p className="text-body text-sm mb-4">{social.description}</p>
                  <div className="flex items-center text-accent font-semibold">
                    <span>Visit</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

