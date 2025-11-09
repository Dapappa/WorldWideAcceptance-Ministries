'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'

export default function LocationCard() {
  const address = 'Unit 40, 2333 18 Avenue Northeast Calgary, AB T2E 8T6'
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
      {/* Map-Inspired Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      {/* Location Pin Graphics */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent-light rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 relative">
            <span className="relative z-10">Calgary Location</span>
            <span className="absolute -top-2 -left-2 text-5xl md:text-6xl font-serif font-bold text-white/5 -z-0">
              Location
            </span>
          </h2>
          <p className="text-gray-300 text-sm mb-4 max-w-2xl mx-auto">
            Serving Northeast Calgary communities including Marlborough, Rundle, Temple, Whitehorn, 
            Falconridge, Castleridge, Saddle Ridge, Martindale, Coventry Hills, Harvest Hills, 
            Panorama Hills, and surrounding Calgary neighborhoods.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/10 backdrop-blur-md rounded-lg p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer group border border-white/20 hover:border-accent/50 shadow-xl hover:shadow-2xl"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-accent p-4 rounded-lg group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-primary-dark" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold mb-3 flex items-center">
                  Visit Us
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {address}
                </p>
                <p className="text-accent mt-4 font-medium">
                  Click to open in Google Maps →
                </p>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

