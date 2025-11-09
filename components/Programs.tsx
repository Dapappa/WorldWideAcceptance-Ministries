'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'

const programs = [
  {
    id: 1,
    title: 'Sunday Service',
    time: '10:00 AM',
    day: 'Sunday',
    description: 'Join us for worship, learning, and growing together.',
    image: '/images/Weekly sunday service.png',
  },
  {
    id: 2,
    title: 'Tuesday Bible Study',
    time: '7:00 PM',
    day: 'Tuesday',
    description: 'Dive into the Word during our weekly Bible study.',
    image: '/images/BibleStudy Visuals.png',
  },
  {
    id: 3,
    title: 'Hour of Revival',
    time: '7:00 PM',
    day: 'Wednesday',
    description: 'Seek God earnestly during this powerful time of revival.',
    image: '/images/12_general_bible_2.jpg.jpeg',
  },
  {
    id: 4,
    title: 'Night Vigil',
    time: '9:30 PM',
    day: 'Friday',
    description: 'Don\'t miss our powerful Night Vigil for a life-changing encounter!',
    image: '/images/Friday Night vigil Details.png',
  },
]

export default function Programs() {
  return (
    <section className="section-padding relative overflow-hidden bg-pattern-geometric">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-primary">
            Church Weekly Programs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-6"></div>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto mb-4">
            Grow in faith, Connect in Fellowship
          </p>
          <p className="text-body max-w-3xl mx-auto">
            Join us weekly for uplifting church programs, including our Sunday Service at 10:00 AM, where we worship, learn, and grow together. Dive into the Word during Tuesday Bible Study at 7:00 PM, and seek God earnestly during the Hour of Revival every Wednesday at 7:00 PM. Don't miss our powerful Night Vigil every Friday at 9:30 PM for a life-changing encounter!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.id}
              className="card group overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-transparent" />
              </div>

              <div className="flex items-start justify-between mb-4">
                <h3 className="heading-tertiary text-xl flex-1">{program.title}</h3>
                <span className="bg-gradient-to-r from-accent/20 to-accent-light/20 text-accent px-3 py-1 rounded-full text-sm font-semibold border border-accent/30 whitespace-nowrap ml-3">
                  {program.day}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Clock className="w-4 h-4 text-accent" />
                <span className="font-medium">{program.time}</span>
              </div>

              <p className="text-body">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

