'use client'

import Hero from '@/components/Hero'
import Events from '@/components/Events'
import Programs from '@/components/Programs'
import LocationCard from '@/components/LocationCard'
import CalgaryCommunities from '@/components/CalgaryCommunities'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Welcome Section */}
      <section id="welcome" className="section-padding relative overflow-hidden bg-pattern-warm-divine">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-primary">
              Welcome to Calgary
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-6"></div>
            <p className="text-lead text-gray-600 max-w-3xl mx-auto">
              Welcome to Worldwide Acceptance Ministries in Calgary, AB. We are a community of believers dedicated to spreading the love of Christ and building a strong foundation of faith. Join us as we worship, learn, and grow together in God's grace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-strong group">
              <Image
                src="/images/Picture of congregation banner.jpeg"
                alt="Calgary church congregation worshiping at Worldwide Acceptance Ministries in Calgary, AB"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
            </div>

            <div className="space-y-6">
              <h3 className="heading-secondary">Come worship with us!</h3>
              <p className="text-body text-lg">
                At Worldwide Acceptance Ministries, we believe in creating a welcoming environment where everyone can experience God's love and grace. Whether you're new to faith or have been walking with Christ for years, you'll find a place to belong here.
              </p>
              <p className="text-body">
                Our services are filled with heartfelt worship, inspiring messages, and genuine fellowship. We invite you to join us and be part of our growing community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Events />
      <Programs />
      <LocationCard />
      
      {/* Calgary Communities SEO Section - Hidden but present for SEO */}
      <CalgaryCommunities />
    </>
  )
}

