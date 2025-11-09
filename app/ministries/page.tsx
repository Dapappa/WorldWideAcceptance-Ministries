'use client'

import { motion } from 'framer-motion'
import { Users, Music, Baby, Heart, BookOpen } from 'lucide-react'

const ministries = [
  {
    name: "Children's Ministry",
    icon: Baby,
    description: 'Content for Children\'s Ministry will be added here.',
  },
  {
    name: 'Choir',
    icon: Music,
    description: 'Content for Choir will be added here.',
  },
  {
    name: 'Young Adults',
    icon: Users,
    description: 'Content for Young Adults will be added here.',
  },
  {
    name: 'Counselling Ministry',
    icon: Heart,
    description: 'Content for Counselling Ministry will be added here.',
  },
  {
    name: 'Evangelical',
    icon: BookOpen,
    description: 'Content for Evangelical will be added here.',
  },
]

export default function MinistriesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container-custom section-padding relative z-10">
          <div className="text-center">
            <h1 className="heading-display text-white mb-6">Ministries</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Discover the various ministries at Worldwide Acceptance Ministries.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-pattern-warm-divine">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => {
              const Icon = ministry.icon
              return (
                <div
                  key={ministry.name}
                  className="card-ministry p-8 group"
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="heading-tertiary text-xl mb-3">{ministry.name}</h3>
                    <p className="text-body">{ministry.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

