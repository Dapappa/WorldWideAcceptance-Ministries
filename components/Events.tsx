'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const events = [
  {
    id: 1,
    title: 'Sunday Service',
    date: 'Nov 9',
    time: '10:00AM',
    location: 'Unit #40, 2333 18 Ave NE, Calgary, AB T2E 8T6',
  },
  {
    id: 2,
    title: 'Night vigil',
    date: 'Nov 14',
    time: '9:30PM',
    location: 'Unit 40, 2333 18 Avenu4 NE, NorthEast',
  },
]

export default function Events() {
  return (
    <section id="events" className="section-padding relative overflow-hidden bg-pattern-cool-sanctuary">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-primary">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-6"></div>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            Mark your calendars for these great events coming up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="card-event group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-primary rounded-xl flex flex-col items-center justify-center text-white shadow-md">
                    <div className="text-sm font-medium uppercase">
                      {event.date.split(' ')[0]}
                    </div>
                    <div className="text-2xl font-bold font-serif">
                      {event.date.split(' ')[1]}
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="heading-tertiary text-xl mb-3">{event.title}</h3>

                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <Link
            href="/events"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>View All Events</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
