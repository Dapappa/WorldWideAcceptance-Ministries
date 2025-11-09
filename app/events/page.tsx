'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar as CalendarIcon, Clock, MapPin, List, Calendar as CalendarViewIcon, Download, Share2, ChevronLeft, ChevronRight } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import { createEventSchema } from '@/lib/schema'

// Event data structure
const events = [
  {
    id: 1,
    title: 'Sunday Service',
    description: 'Join us for our weekly Sunday worship service filled with praise, worship, and the Word of God.',
    date: new Date(2025, 10, 9), // November 9, 2025
    startTime: '10:00AM',
    endTime: '11:00AM',
    location: 'Unit #40, 2333 18 Ave NE, Calgary, AB T2E 8T6',
    color: 'bg-blue-500',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 2,
    title: 'Bible Study',
    description: 'Deep dive into the Word of God. Bring your Bible and join us for an enriching study session.',
    date: new Date(2025, 10, 11), // November 11, 2025
    startTime: '7:00PM',
    endTime: '8:00PM',
    location: 'Unit 40, 2333 18 Avenue Northeast',
    color: 'bg-green-500',
    textColor: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    id: 3,
    title: 'Revival hour',
    description: 'Experience the power of God in our revival hour. Come expectant for miracles and breakthroughs.',
    date: new Date(2025, 10, 13), // November 13, 2025
    startTime: '6:30PM',
    endTime: '7:30PM',
    location: 'Unit 40, 2333 18 Avenue Northeast',
    color: 'bg-purple-500',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    id: 4,
    title: 'Night vigil',
    description: 'Join us for a powerful night of prayer, worship, and spiritual warfare.',
    date: new Date(2025, 10, 14), // November 14, 2025
    startTime: '9:30PM',
    endTime: '12:00AM',
    location: 'Unit 40, 2333 18 Avenu4 NE, NorthEast',
    color: 'bg-indigo-500',
    textColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
  },
]

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function EventsPage() {
  const [view, setView] = useState<'list' | 'calendar'>('list')
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1)) // November 2025
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

  // Calendar logic
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days: (number | null)[] = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    return days
  }

  const getEventsForDay = (day: number) => {
    return events.filter(event =>
      event.date.getDate() === day &&
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getFullYear() === currentDate.getFullYear()
    )
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1)
      } else {
        newDate.setMonth(newDate.getMonth() + 1)
      }
      return newDate
    })
  }

  const addToGoogleCalendar = (event: typeof events[0]) => {
    const startDate = event.date.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 8)
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}T${event.startTime.replace(/[:\s]/g, '')}/${startDate}T${event.endTime.replace(/[:\s]/g, '')}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`
    window.open(url, '_blank')
  }

  const addToAppleCalendar = (event: typeof events[0]) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.date.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 8)}T${event.startTime.replace(/[:\s]/g, '')}
DTEND:${event.date.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 8)}T${event.endTime.replace(/[:\s]/g, '')}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${event.title.replace(/\s/g, '_')}.ics`
    link.click()
    URL.revokeObjectURL(url)
  }

  const days = getDaysInMonth(currentDate)

  // Create event schemas for all events
  const eventSchemas = events.map(event => {
    const startDate = event.date.toISOString()
    const endDate = new Date(event.date)
    endDate.setHours(parseInt(event.endTime.split(':')[0]) || 0, parseInt(event.endTime.split(':')[1]) || 0)
    return createEventSchema(
      event.title,
      startDate,
      endDate.toISOString(),
      event.description,
      '/images/Weekly sunday service.png'
    )
  })

  return (
    <div className="min-h-screen pt-20">
      {eventSchemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Upcoming Events
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join us for worship, fellowship, and spiritual growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* View Toggle */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
              <button
                onClick={() => setView('list')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  view === 'list'
                    ? 'bg-primary-dark text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="w-5 h-5" />
                <span className="font-medium">List View</span>
              </button>
              <button
                onClick={() => setView('calendar')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  view === 'calendar'
                    ? 'bg-primary-dark text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <CalendarViewIcon className="w-5 h-5" />
                <span className="font-medium">Calendar View</span>
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {view === 'list' ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                  {events.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                    >
                      {/* Event Header with Color Accent */}
                      <div className={`h-2 ${event.color}`} />

                      <div className="p-6">
                        {/* Date Badge */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`${event.bgColor} ${event.textColor} px-4 py-3 rounded-xl shadow-sm`}>
                            <div className="text-3xl font-bold">
                              {event.date.getDate()}
                            </div>
                            <div className="text-sm font-medium uppercase">
                              {monthNames[event.date.getMonth()].slice(0, 3)}
                            </div>
                          </div>

                          {/* Quick Actions */}
                          <div className="flex gap-2">
                            <button
                              onClick={() => addToGoogleCalendar(event)}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                              title="Add to Google Calendar"
                            >
                              <Download className="w-5 h-5 text-gray-600" />
                            </button>
                            <button
                              onClick={() => addToAppleCalendar(event)}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                              title="Add to Apple Calendar"
                            >
                              <Share2 className="w-5 h-5 text-gray-600" />
                            </button>
                          </div>
                        </div>

                        <h3 className="text-2xl font-serif font-bold text-primary-dark mb-3">
                          {event.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className={`${event.bgColor} p-2 rounded-lg`}>
                              <Clock className={`w-5 h-5 ${event.textColor}`} />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Time</div>
                              <div className="font-medium text-gray-700">{event.startTime} - {event.endTime}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className={`${event.bgColor} p-2 rounded-lg`}>
                              <MapPin className={`w-5 h-5 ${event.textColor}`} />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Location</div>
                              <div className="font-medium text-gray-700">{event.location}</div>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedEvent(event)}
                          className={`w-full mt-6 ${event.color} text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity`}
                        >
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-6xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  {/* Calendar Header */}
                  <div className="bg-gradient-to-r from-primary-dark to-primary p-6">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => navigateMonth('prev')}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>

                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                      </h2>

                      <button
                        onClick={() => navigateMonth('next')}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="p-6">
                    {/* Days of Week */}
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {daysOfWeek.map(day => (
                        <div key={day} className="text-center font-bold text-gray-600 py-2">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 gap-2">
                      {days.map((day, index) => {
                        const dayEvents = day ? getEventsForDay(day) : []
                        const hasEvents = dayEvents.length > 0

                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.01 }}
                            className={`min-h-24 p-2 rounded-lg border-2 transition-all duration-200 ${
                              day
                                ? hasEvents
                                  ? 'border-primary-dark bg-primary-light/20 hover:bg-primary-light/40 cursor-pointer'
                                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                : 'border-transparent bg-gray-50'
                            }`}
                          >
                            {day && (
                              <>
                                <div className={`text-sm font-semibold mb-1 ${
                                  hasEvents ? 'text-primary-dark' : 'text-gray-700'
                                }`}>
                                  {day}
                                </div>
                                {dayEvents.length > 0 && (
                                  <div className="space-y-1">
                                    {dayEvents.map(event => (
                                      <button
                                        key={event.id}
                                        onClick={() => setSelectedEvent(event)}
                                        className={`w-full text-left text-xs p-1.5 rounded ${event.color} text-white hover:opacity-90 transition-opacity`}
                                      >
                                        <div className="font-medium truncate">{event.title}</div>
                                        <div className="text-xs opacity-90">{event.startTime}</div>
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </>
                            )}
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
            >
              <div className={`h-3 ${selectedEvent.color}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-primary-dark mb-2">
                      {selectedEvent.title}
                    </h2>
                    <p className="text-gray-600">
                      {monthNames[selectedEvent.date.getMonth()]} {selectedEvent.date.getDate()}, {selectedEvent.date.getFullYear()}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <span className="text-2xl">&times;</span>
                  </button>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedEvent.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`${selectedEvent.bgColor} p-3 rounded-lg`}>
                      <Clock className={`w-6 h-6 ${selectedEvent.textColor}`} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Time</div>
                      <div className="font-medium text-gray-700">
                        {selectedEvent.startTime} - {selectedEvent.endTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`${selectedEvent.bgColor} p-3 rounded-lg`}>
                      <MapPin className={`w-6 h-6 ${selectedEvent.textColor}`} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-medium text-gray-700">{selectedEvent.location}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => addToGoogleCalendar(selectedEvent)}
                    className="flex-1 bg-primary-dark text-white py-3 rounded-lg font-medium hover:bg-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Add to Google Calendar
                  </button>
                  <button
                    onClick={() => addToAppleCalendar(selectedEvent)}
                    className="flex-1 bg-accent text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Add to Apple Calendar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subscribe Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">
              Never Miss an Event
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our calendar to stay updated with all our events and activities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('webcal://your-calendar-url.ics', '_blank')}
                className="bg-white text-primary-dark px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
              >
                Subscribe to Calendar
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
