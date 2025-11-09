'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, User, Sparkles } from 'lucide-react'
import Image from 'next/image'
import StructuredData from '@/components/StructuredData'
import { createPersonSchema } from '@/lib/schema'

const staffMembers = [
  {
    name: 'John Adeyemi',
    title: 'Pastor',
    phone: '403.681.4688',
    email: 'worldwideacceptanceministry@yahoo.com',
    location: {
      name: 'Calgary Location',
      address: 'Unit 40, 2333 18 Avenue Northeast',
      city: 'Calgary, AB T2E 8T6',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Unit+40,+2333+18+Avenue+Northeast+Calgary,+AB+T2E+8T6',
    },
    image: '/images/Random pciture.jpeg', // You can replace this with the actual staff member image
  },
]

export default function StaffPage() {
  // Create person schemas for all staff members
  const personSchemas = staffMembers.map(member =>
    createPersonSchema(member.name, member.title, member.image)
  )

  return (
    <div className="pt-20 min-h-screen">
      {personSchemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-accent mx-auto" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Our Staff
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Meet the dedicated team serving our community with faith and love
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staff Members Section */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {staffMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:border-accent/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-3xl">
                  {/* Card Content */}
                  <div className="p-6 md:p-8 lg:p-10">
                    {/* Image and Basic Info */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mb-8">
                      {/* Profile Image */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary-dark/20 z-10" />
                        <Image
                          src={member.image}
                          alt={`${member.name}, ${member.title} at Worldwide Acceptance Ministries Calgary church`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent z-20" />
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-12 h-12 bg-accent/20 rounded-full blur-xl z-30" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 bg-accent-light/30 rounded-full blur-lg z-30" />
                      </motion.div>

                      {/* Name and Title */}
                      <div className="flex-1 text-center md:text-left">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <div className="inline-flex items-center gap-2 mb-3">
                            <User className="w-5 h-5 text-accent" />
                            <h2 className="heading-secondary text-3xl md:text-4xl text-primary-dark">
                              {member.name}
                            </h2>
                          </div>
                          <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent to-accent-light text-white rounded-full text-lg font-semibold shadow-lg">
                            {member.title}
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {/* Phone */}
                      <motion.a
                        href={`tel:+1${member.phone.replace(/[^\d]/g, '')}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="group/contact flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:from-accent/10 hover:to-accent/5 border border-gray-200 hover:border-accent/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-dark to-primary rounded-xl flex items-center justify-center shadow-md group-hover/contact:shadow-lg transition-shadow">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 mb-1">Phone</p>
                          <p className="text-body font-semibold text-primary-dark group-hover/contact:text-accent transition-colors">
                            {member.phone}
                          </p>
                        </div>
                      </motion.a>

                      {/* Email */}
                      <motion.a
                        href={`mailto:${member.email}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="group/contact flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:from-accent/10 hover:to-accent/5 border border-gray-200 hover:border-accent/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-md group-hover/contact:shadow-lg transition-shadow">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 mb-1">Email</p>
                          <p className="text-body font-semibold text-primary-dark group-hover/contact:text-accent transition-colors break-all">
                            {member.email}
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover/contact:text-accent transition-colors flex-shrink-0" />
                      </motion.a>
                    </div>

                    {/* Location */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="p-6 bg-gradient-to-br from-primary-dark/5 via-primary/5 to-primary-light/5 rounded-xl border border-primary-dark/10 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-dark to-primary rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                            <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="heading-secondary text-xl mb-2 text-primary-dark">
                              {member.location.name}
                            </h3>
                            <p className="text-body mb-1">
                              {member.location.address}
                            </p>
                            <p className="text-body font-semibold">
                              {member.location.city}
                            </p>
                          </div>
                        </div>
                        <a
                          href={member.location.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center gap-2 group/map"
                        >
                          <MapPin className="w-5 h-5 group-hover/map:scale-110 transition-transform" />
                          View Map
                          <ExternalLink className="w-4 h-4 group-hover/map:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Decorative bottom border */}
                  <div className="h-2 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 bg-gradient-to-br from-primary-dark to-primary text-white rounded-2xl shadow-2xl max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Connect With Us
              </h3>
              <p className="text-gray-200 mb-6 text-lg">
                We're here to serve and support you. Reach out anytime!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-block bg-white text-primary-dark hover:bg-accent hover:text-white"
                >
                  Contact Us
                </a>
                <a
                  href="/about"
                  className="btn-secondary inline-block bg-accent hover:bg-accent-light"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

