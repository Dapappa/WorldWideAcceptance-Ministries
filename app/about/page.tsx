'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, Eye, Heart, Cross, Users, FileText, MessageSquare } from 'lucide-react'
import ImageSlideshow from '@/components/ImageSlideshow'
import BeliefsSlideshow from '@/components/BeliefsSlideshow'
import Link from 'next/link'
import CalgaryCommunities from '@/components/CalgaryCommunities'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Welcome to Worldwide Acceptance Ministries in Calgary, AB!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Slideshow */}
      <section className="section-padding bg-enhanced-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <ImageSlideshow />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding relative overflow-hidden bg-pattern-warm-divine">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="heading-primary text-3xl md:text-4xl mb-6">
              Worldwide Acceptance Ministries - Calgary
            </h2>
            <p className="text-body text-lg md:text-xl leading-relaxed mb-8">
              Worldwide Acceptance Ministries is a Pentecostal Church in Calgary, AB where we believe in the word of GOD as the final authority in all that we do. We also believe in the manifestation of the Holy Spirit.
            </p>
            <p className="text-body text-lg leading-relaxed">
              In this ministry, we believe in the power of prayer and in the living word of God to handle challenges, problems, and the battles of life as the finger of God does the miraculous, salvation, deliverance, and healing (Obadiah 1:17)
            </p>
          </motion.div>

          {/* Vision, Mission, Goal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="heading-secondary text-2xl mb-4">Our Vision</h3>
                <ul className="text-body space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Teach and remind God's people how to praise God. <span className="text-sm text-gray-600 italic">1 Thessalonians 5:18, Romans 1:2</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Teach God's people holiness. <span className="text-sm text-gray-600 italic">Hebrews 12:14</span></span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-secondary text-2xl mb-4">Our Mission</h3>
                <ul className="text-body space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>To preach and teach the undiluted word of God to the whole world.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>To declare the word of God to all nations.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Goal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-light to-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="heading-secondary text-2xl mb-4">Our Goal</h3>
                <p className="text-body text-lg">
                  Our goal is to lead people to the kingdom of God.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Beliefs Section */}
      <section id="beliefs" className="section-padding bg-pattern-cool-sanctuary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-primary text-4xl md:text-5xl mb-4">Our Beliefs</h2>
            <p className="text-body text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The foundational tenets that guide our faith and ministry
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BeliefsSlideshow />
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Explore More</h2>
            <p className="text-gray-300 text-lg">Learn more about our ministry</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/about#staff"
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20 hover:border-accent/50 group"
              >
                <Users className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-semibold mb-2">Our Staff</h3>
                <p className="text-gray-300 text-sm">Meet our dedicated team</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/about#beliefs"
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20 hover:border-accent/50 group"
              >
                <BookOpen className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-semibold mb-2">Our Beliefs</h3>
                <p className="text-gray-300 text-sm">What we believe</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/about#testimonies"
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20 hover:border-accent/50 group"
              >
                <MessageSquare className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-semibold mb-2">Testimonies</h3>
                <p className="text-gray-300 text-sm">Stories of faith</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/ministries"
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20 hover:border-accent/50 group"
              >
                <Cross className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-semibold mb-2">Ministries</h3>
                <p className="text-gray-300 text-sm">Our various ministries</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-pattern-radiant relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <h2 className="heading-secondary text-3xl mb-6">Calgary Location</h2>
            <p className="text-body text-lg mb-6">
              Unit 40, 2333 18 Avenue Northeast<br />
              Calgary, AB T2E 8T6
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Unit+40,+2333+18+Avenue+Northeast+Calgary,+AB+T2E+8T6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              View Map
            </a>
          </motion.div>
        </div>
      </section>

      {/* Calgary Communities SEO Section - Hidden but present for SEO */}
      <CalgaryCommunities />
    </div>
  )
}
